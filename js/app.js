(function () {
  'use strict';
  const S = window.SEPassedOn;
  const C = window.SEP_CONFIG || {};
  const STORE = 'sepassedon-v3';
  const app = document.getElementById('app');
  const resultsEl = document.getElementById('results');
  const q = document.getElementById('q');

  // ---------- helpers ----------
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const text = v => esc(v === undefined || v === null || v === '' ? 'Information updating soon' : v);
  const pad = n => String(n).padStart(2, '0');
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const parseDate = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const fmt = s => { const d = parseDate(s); return `${d.getDate()} ${MONTHS[d.getMonth()]}`; };
  const today = new Date(); today.setHours(0, 0, 0, 0);

  let store = {};
  try { store = JSON.parse(localStorage.getItem(STORE) || '{}') || {}; } catch (e) { store = {}; }
  const save = () => { try { localStorage.setItem(STORE, JSON.stringify(store)); } catch (e) {} };

  const guideOf = (uni, id) => (uni.guides && uni.guides[id]) || S.shared[id] || null;
  const phaseOfGuide = (uni, id) => uni.phases.find(p => p.guides.includes(id)) || uni.phases[0];
  const ckKey = (uni, ph, i) => `c:${uni.id}:${ph.id}:${i}`;
  const rdKey = (uni, id) => `r:${uni.id}:${id}`;
  const phaseDone = (uni, ph) => ph.checklist.filter((_, i) => store[ckKey(uni, ph, i)]).length;
  const totals = uni => uni.phases.reduce((a, ph) => [a[0] + phaseDone(uni, ph), a[1] + ph.checklist.length], [0, 0]);

  // ---------- routing ----------
  // #/                 home
  // #/fudan            university hub (first unfinished phase)
  // #/fudan/prepare    hub on a phase
  // #/fudan/g/<id>     a guide
  function parse() {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
    const r = { uni: null, phase: null, guide: null };
    const uni = parts[0] && S.unis[parts[0].toLowerCase()];
    if (!uni) return r;
    r.uni = uni;
    if (parts[1] === 'g' && parts[2] && guideOf(uni, parts[2])) { r.guide = parts[2]; r.phase = phaseOfGuide(uni, parts[2]); return r; }
    r.phase = uni.phases.find(p => p.id === parts[1]) || null;
    return r;
  }
  const hubHref = (uni, ph) => `#/${uni.id}${ph ? '/' + ph.id : ''}`;
  const guideHref = (uni, id) => `#/${uni.id}/g/${encodeURIComponent(id)}`;

  // ---------- small components ----------
  function linkButtons(links) {
    return (links || []).map(x => {
      try { const u = new URL(x.url); if (!['https:', 'http:'].includes(u.protocol)) return ''; return `<a class="linkbtn" target="_blank" rel="noopener noreferrer" href="${esc(u.href)}">${text(x.name)} ↗</a>`; } catch (e) { return ''; }
    }).join('');
  }
  function reportLink(label) {
    if (!C.reportFormUrl) return '';
    let url = C.reportFormUrl;
    if (C.reportPrefillField) url += (url.includes('?') ? '&' : '?') + encodeURIComponent(C.reportPrefillField) + '=' + encodeURIComponent(label + ' (' + location.href + ')');
    return `<div class="report">Something wrong or outdated? <a href="${esc(url)}" target="_blank" rel="noopener noreferrer">Report it ↗</a></div>`;
  }
  function renderPassOn() {
    const el = document.getElementById('pass-on-btn');
    if (!el) return;
    if (C.tipFormUrl) { el.href = C.tipFormUrl; el.removeAttribute('aria-disabled'); el.textContent = 'Share a tip ↗'; }
    else { el.removeAttribute('href'); el.setAttribute('aria-disabled', 'true'); el.textContent = 'Tip form coming soon'; }
  }
  const progressBar = (done, total) => `<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}"><span style="width:${total ? Math.round(done / total * 100) : 0}%"></span></div>`;

  // ---------- views ----------
  function home() {
    return `<section class="panel"><div class="mono">CHOOSE YOUR PARTNER UNIVERSITY</div><h2>Where are you <span class="serif">heading?</span></h2><p class="sub">Every guide is written for Singaporean NUS students on SEP, from applying to getting your credits back.</p><div class="unis">${S.order.map(id => {
      const u = S.unis[id], [d, t] = totals(u), n = u.phases.reduce((a, p) => a + p.guides.length, 0);
      return `<a class="uni-card" href="${hubHref(u)}"><div class="mono">${text(u.city)} · ${text(u.country)}</div><strong>${text(u.university)}</strong><p>${text(u.tagline)}</p><div class="chips">${(u.facts || []).slice(0, 3).map(f => `<span class="chip">${text(f.label)}: ${text(f.value)}</span>`).join('')}</div><div class="uni-foot"><span class="muted">${n} guides · Updated ${text(u.updated)}</span>${d ? `<span class="muted">${d}/${t} done</span>` : '<span class="go">Open guide →</span>'}</div></a>`;
    }).join('')}</div></section>`;
  }

  function datesCard(uni) {
    if (!uni.dates || !uni.dates.length) return '';
    let nextFound = false;
    const nextIdx = Math.max(0, uni.dates.findIndex(d => parseDate(d.end || d.date) >= today));
    const firstShown = Math.max(0, Math.min(nextIdx - 1, uni.dates.length - 6));
    const rows = uni.dates.map((d, idx) => {
      const end = parseDate(d.end || d.date), start = parseDate(d.date);
      let status = 'upcoming';
      if (end < today) status = 'past'; else if (start <= today) status = 'now';
      let cls = status;
      if (!nextFound && status !== 'past') { cls += ' next'; nextFound = true; }
      const when = d.approx ? d.approx : d.end ? `${fmt(d.date)} – ${fmt(d.end)}` : fmt(d.date);
      const ph = uni.phases.find(p => p.id === d.phase);
      if (idx < firstShown || idx >= firstShown + 6) cls += ' more';
      return `<li class="${cls}"><span class="d">${text(when)}</span><span class="l">${text(d.label)}</span>${ph ? `<a class="ph" href="${hubHref(uni, ph)}">${text(ph.short)}</a>` : ''}</li>`;
    }).join('');
    return `<section class="card wide dates"><div class="mono">KEY DATES · ${text(uni.intake || '')}</div><h3>Your semester at a glance.</h3><ol class="timeline collapsed">${rows}</ol>${uni.dates.length > 6 ? `<button class="ghost" data-dates>Show all ${uni.dates.length} dates</button>` : ''}<p class="notice" style="margin-top:16px">Dates are for ${text(uni.intake || 'this intake')} and shift each year. Always check the official email for your intake.</p></section>`;
  }

  function phaseTabs(uni, active) {
    return `<nav class="phases" aria-label="SEP journey">${uni.phases.map((ph, i) => {
      const d = phaseDone(uni, ph), t = ph.checklist.length;
      return `<a class="phase-tab ${ph.id === active.id ? 'active' : ''} ${t && d === t ? 'complete' : ''}" href="${hubHref(uni, ph)}" ${ph.id === active.id ? 'aria-current="step"' : ''}><span class="n">${pad(i + 1)}</span><span class="t">${text(ph.short)}</span><span class="c">${t && d === t ? '✓' : `${d}/${t}`}</span></a>`;
    }).join('')}</nav>`;
  }

  function phasePanel(uni, ph) {
    const i = uni.phases.indexOf(ph);
    const next = uni.phases[i + 1];
    return `<section class="phase-panel" id="phase"><div class="phase-head"><div class="mono">STEP ${pad(i + 1)} OF ${pad(uni.phases.length)}</div><h3>${text(ph.title)}</h3><p>${text(ph.summary)}</p></div><div class="phase-grid">
<div class="card checklist-card"><div class="mono">CHECKLIST · ${phaseDone(uni, ph)}/${ph.checklist.length} DONE</div><ul class="checklist">${ph.checklist.map((c, j) => {
      const k = ckKey(uni, ph, j);
      return `<li><label><input type="checkbox" data-ck="${esc(k)}" ${store[k] ? 'checked' : ''}><span class="when">${text(c.when || '·')}</span><span class="task">${text(c.task)}</span></label>${c.guide && guideOf(uni, c.guide) ? `<a class="how" href="${guideHref(uni, c.guide)}" aria-label="How to: ${esc(c.task)}">How →</a>` : ''}</li>`;
    }).join('')}</ul></div>
<div class="guide-list"><div class="mono">GUIDES</div>${ph.guides.map(id => {
      const g = guideOf(uni, id); if (!g) return '';
      const read = store[rdKey(uni, id)];
      return `<a class="guide-tile" href="${guideHref(uni, id)}"><span class="tag">${text(g.tag || 'Guide')}</span><strong>${text(g.title)}</strong><span class="intro">${text(g.intro)}</span><span class="foot">${read ? '✓ Read' : 'Read guide'} <span aria-hidden="true">→</span></span></a>`;
    }).join('')}</div></div>
${next ? `<div class="controls"><span></span><a class="primary" href="${hubHref(uni, next)}">Next: ${text(next.title)} →</a></div>` : ''}</section>`;
  }

  function hub(uni, ph) {
    if (!ph) ph = uni.phases.find(p => phaseDone(uni, p) < p.checklist.length) || uni.phases[0];
    const [d, t] = totals(uni);
    return `<div class="hub">
<section class="uni-hero"><a class="crumb" href="#/">← All universities</a><div class="mono">${text(uni.intake)} · ${text(uni.programme)}</div><h2>${text(uni.university)}</h2><p>${text(uni.tagline)}</p><div class="hero-progress"><div class="mono">YOUR PROGRESS · ${d}/${t} TASKS</div>${progressBar(d, t)}</div><a class="primary hero-cta" href="#journey" data-jump>Go to my checklist ↓</a></section>
<section class="facts">${(uni.facts || []).map(f => `<div class="fact"><div class="mono">${text(f.label)}</div><strong>${text(f.value)}</strong><p>${text(f.note)}</p></div>`).join('')}</section>
${datesCard(uni)}
<div class="journey" id="journey"><div class="mono journey-label">YOUR SEP JOURNEY</div>${phaseTabs(uni, ph)}${phasePanel(uni, ph)}</div>
${uni.insights && uni.insights.length ? `<section class="card wide"><div class="mono">PASSED ON</div><h3>What people who have been there say.</h3><div class="quotes">${uni.insights.map(x => `<blockquote><p>“${text(x.quote)}”</p><div class="mono">${text(x.who)}</div></blockquote>`).join('')}</div></section>` : ''}
<div class="dash-grid">
${uni.address ? `<section class="card addr-card"><div class="mono">SHOW YOUR DRIVER</div><p class="zh" lang="zh">${text(uni.address.zh)}</p><p>${text(uni.address.en)}</p><p class="notice">${text(uni.address.note)}</p><button class="ghost" data-copy="${esc(uni.address.zh)}">Copy address</button></section>` : ''}
${uni.contacts && uni.contacts.length ? `<section class="card"><div class="mono">KEY CONTACTS</div>${uni.contacts.map(c => `<div class="rowline"><strong>${text(c.name)}</strong><p>${text(c.detail)}</p></div>`).join('')}</section>` : ''}
<section class="card wide"><div class="mono">OFFICIAL LINKS</div><div class="links" style="margin-top:14px">${linkButtons(uni.links)}</div><p class="notice" style="margin-top:20px">Sources: ${text((uni.sources || []).join(' · '))}. Updated ${text(uni.updated)}. Always confirm rules and fees with the university and the relevant authority. Student-built, not legal advice.</p>${reportLink(uni.university)}</section>
</div></div>`;
  }

  function guidePage(uni, id) {
    const g = guideOf(uni, id), ph = phaseOfGuide(uni, id);
    const list = ph.guides.filter(x => guideOf(uni, x)), pos = list.indexOf(id);
    const prev = list[pos - 1], next = list[pos + 1];
    const read = !!store[rdKey(uni, id)];
    return `<div class="guide-view"><nav class="crumbs"><a href="#/">All</a> / <a href="${hubHref(uni)}">${text(uni.university)}</a> / <a href="${hubHref(uni, ph)}">${text(ph.title)}</a></nav>
<section class="guide-hero"><div class="mono">${text(g.tag || 'Guide')} · ${text(ph.title)}</div><h2>${text(g.title)}</h2><p>${text(g.intro)}</p></section>
<div class="guide-grid ${(g.sections || []).length === 3 ? 'three' : ''}">${(g.sections || []).map((s, j) => `<section class="guide-card"><div class="mono">${pad(j + 1)}</div><h3>${text(s.heading)}</h3><ol>${s.items.map(it => `<li>${text(it)}</li>`).join('')}</ol></section>`).join('')}
<section class="guide-card full tipcard"><div class="mono">PASSED ON</div><h3>What to remember.</h3><p>${text(g.tip)}</p>${(g.links || []).length ? `<div class="links">${linkButtons(g.links)}</div>` : ''}${g.source ? `<p class="notice" style="margin-top:18px">Source: ${text(g.source)}</p>` : ''}
<div class="actions"><button class="primary" data-read="${esc(rdKey(uni, id))}">${read ? '✓ Read · Mark unread' : 'Mark as read ✓'}</button><button class="ghost" data-share>Copy link</button></div>${reportLink(uni.university + ' / ' + g.title)}</section></div>
<div class="pager">${prev ? `<a class="ghost" href="${guideHref(uni, prev)}">← ${text(guideOf(uni, prev).title)}</a>` : `<a class="ghost" href="${hubHref(uni, ph)}">← ${text(ph.title)}</a>`}${next ? `<a class="ghost" href="${guideHref(uni, next)}">${text(guideOf(uni, next).title)} →</a>` : `<a class="ghost" href="${hubHref(uni, ph)}">Back to checklist →</a>`}</div></div>`;
  }

  // ---------- search ----------
  let index = null;
  function buildIndex() {
    index = [];
    const sharedDone = new Set();
    S.order.forEach(id => {
      const uni = S.unis[id];
      uni.phases.forEach(ph => ph.guides.forEach(gid => {
        const g = guideOf(uni, gid); if (!g) return;
        if (S.shared[gid]) { if (sharedDone.has(gid)) return; sharedDone.add(gid); }
        const body = [g.intro, ...(g.sections || []).flatMap(s => [s.heading, ...s.items]), g.tip].filter(Boolean).join(' · ');
        index.push({ uni, gid, shared: !!S.shared[gid], ph, title: g.title, body, hay: (g.title + ' ' + (g.tag || '') + ' ' + body + ' ' + uni.university + ' ' + uni.city).toLowerCase() });
      }));
    });
  }
  const reEsc = t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  function snippet(body, terms) {
    const low = body.toLowerCase();
    let pos = -1; for (const t of terms) { pos = low.indexOf(t); if (pos >= 0) break; }
    const start = Math.max(0, pos - 50), s = (start ? '…' : '') + body.slice(start, start + 170) + (body.length > start + 170 ? '…' : '');
    let out = esc(s);
    terms.forEach(t => { if (t.length > 1) out = out.replace(new RegExp('(' + reEsc(esc(t)) + ')', 'gi'), '<mark>$1</mark>'); });
    return out;
  }
  function search(raw) {
    const query = raw.trim().toLowerCase();
    if (query.length < 2) { resultsEl.hidden = true; resultsEl.innerHTML = ''; return; }
    if (!index) buildIndex();
    const terms = query.split(/\s+/).filter(Boolean);
    const res = terms.map(t => new RegExp('(^|[^a-z0-9])' + reEsc(t)));
    const current = parse().uni;
    const scored = index.map(r => {
      const hits = res.filter(re => re.test(r.hay)).length;
      if (!hits) return null;
      let score = hits * 20;
      res.forEach(re => { if (re.test(r.title.toLowerCase())) score += 8; score += Math.min(5, (r.hay.match(new RegExp(re.source, 'g')) || []).length); });
      if (current && r.uni === current) score += 6;
      return { r, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 10);
    resultsEl.hidden = false;
    resultsEl.innerHTML = scored.length ? scored.map(({ r }) => {
      const uni = r.shared && current ? current : r.uni;
      return `<a class="result" href="${guideHref(uni, r.gid)}"><span class="mono">${r.shared ? 'All universities · NUS SEP' : text(r.uni.university) + ' · ' + text(r.ph.title)}</span><strong>${text(r.title)}</strong><p>${snippet(r.body, terms)}</p></a>`;
    }).join('') : `<p class="empty">No guides match “${esc(raw.trim())}”. Try visa, insurance, housing or mapping.</p>`;
  }

  // ---------- render ----------
  let last = { uni: null, guide: null };
  function render() {
    const r = parse();
    if (!r.uni) app.innerHTML = home();
    else if (r.guide) app.innerHTML = guidePage(r.uni, r.guide);
    else app.innerHTML = hub(r.uni, r.phase);
    document.body.classList.toggle('inner', !!r.uni);
    const g = r.guide ? guideOf(r.uni, r.guide) : null;
    document.title = r.uni ? `${g ? g.title + ' · ' : r.phase ? r.phase.title + ' · ' : ''}${r.uni.university} | SEPassedOn` : 'SEPassedOn | NUS SEP guides by students who have been there';
    return r;
  }
  function scrollTo(el) {
    if (!el) return;
    el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }

  // ---------- events ----------
  window.addEventListener('hashchange', () => {
    q.value = ''; search('');
    const prev = last;
    const r = render();
    // Phase switch inside the same hub: keep the user at the journey tabs.
    if (r.uni && !r.guide && prev.uni === r.uni && !prev.guide && r.phase) scrollTo(document.getElementById('journey'));
    else if (location.hash && location.hash !== '#/') scrollTo(document.querySelector('.layout'));
    last = { uni: r.uni, guide: r.guide };
  });
  app.addEventListener('click', e => {
    const jp = e.target.closest('[data-jump]');
    if (jp) { e.preventDefault(); scrollTo(document.getElementById('journey')); return; }
    const rd = e.target.closest('[data-read]');
    if (rd) { const k = rd.dataset.read; store[k] = !store[k]; save(); render(); return; }
    const cp = e.target.closest('[data-copy]');
    if (cp) { copy(cp.dataset.copy, cp, 'Copied ✓'); return; }
    const dt = e.target.closest('[data-dates]');
    if (dt) { const tl = app.querySelector('.timeline'); const c = tl.classList.toggle('collapsed'); dt.textContent = c ? dt.textContent.replace('Hide', 'Show all') : dt.textContent.replace('Show all', 'Hide'); return; }
    const sh = e.target.closest('[data-share]');
    if (sh) { copy(location.href, sh, 'Link copied ✓'); return; }
  });
  app.addEventListener('change', e => {
    if (e.target.matches('[data-ck]')) {
      store[e.target.dataset.ck] = e.target.checked; save();
      const y = window.scrollY; render(); window.scrollTo(0, y);
    }
  });
  function copy(value, btn, msg) {
    const done = () => { btn.textContent = msg; };
    if (navigator.clipboard) navigator.clipboard.writeText(value).then(done).catch(() => prompt('Copy this', value));
    else prompt('Copy this', value);
  }
  q.addEventListener('input', () => search(q.value));
  q.addEventListener('keydown', e => { if (e.key === 'Escape') { q.value = ''; search(''); } });
  document.getElementById('restart').addEventListener('click', () => { location.hash = '#/'; });

  if (C.cloudflareAnalyticsToken) {
    const s = document.createElement('script');
    s.defer = true; s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: C.cloudflareAnalyticsToken }));
    document.body.appendChild(s);
  }

  renderPassOn();
  const r0 = render();
  last = { uni: r0.uni, guide: r0.guide };
})();
