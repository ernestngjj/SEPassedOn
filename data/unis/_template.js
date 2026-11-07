// TEMPLATE for a new partner university.
// 1. Copy this file to data/unis/<name>.js (e.g. data/unis/kyoto.js)
// 2. Fill it in. data/unis/fudan.js is the fullest example to copy from.
// 3. Add <script src="data/unis/<name>.js"></script> in index.html, above js/app.js
// 4. Open index.html to check, then push.
// Write for Singaporean NUS students on SEP. Give every guide a source.

SEPassedOn.addUni({
  id: 'kyoto',                       // lowercase, no spaces. Used in links like #/kyoto
  university: 'Kyoto University',
  city: 'Kyoto',
  country: 'Japan',
  updated: 'Nov 2026',               // bump whenever you change facts
  intake: 'Fall 2027',               // which semester the dates are for
  programme: 'Semester exchange',
  tagline: 'One line on what makes this exchange what it is.',
  sources: ['Official guide name and year', 'SG student association briefing'],

  // 4 or 8 tiles at the top. Keep values short.
  facts: [
    { label: 'Exchange dates', value: '1 Oct 2027 – 31 Jan 2028', note: 'Short note' },
    { label: 'Visa', value: 'Student visa', note: 'Short note' },
    { label: 'Housing', value: 'Dorm offered', note: 'Short note' },
    { label: 'Main contact', value: 'exchange@example.edu', note: 'Office name' }
  ],

  // Optional. ISO dates (YYYY-MM-DD). "end" for ranges, "approx" to show text instead.
  // "phase" links the date to a phase id below.
  dates: [
    { date: '2027-04-01', label: 'Application deadline', phase: 'apply' },
    { date: '2027-09-07', end: '2027-09-19', label: 'Add and drop', phase: 'study' }
  ],

  // Optional. Address in the local language for taxis.
  address: { zh: 'Local-language address', en: 'English address', note: 'What this place is' },

  // The journey. Keep these six ids so everything lines up across universities:
  // apply, prepare, arrive, study, live, return. Drop a phase if you have nothing for it.
  // Each checklist item can point to a guide id. Shared NUS guides: nus-apply, nus-mapping, nus-credit.
  phases: [
    { id: 'apply', title: 'Apply', short: 'Apply', summary: 'One line.',
      checklist: [{ when: 'Year 2', task: 'Apply for SEP in EduRec', guide: 'nus-apply' }],
      guides: ['nus-apply', 'nus-mapping'] },
    { id: 'prepare', title: 'Before you fly', short: 'Prepare', summary: 'One line.',
      checklist: [{ when: 'June', task: 'Apply for your visa', guide: 'kyoto-visa' }],
      guides: ['kyoto-visa'] },
    { id: 'arrive', title: 'Arrival week', short: 'Arrive', summary: 'One line.', checklist: [], guides: [] },
    { id: 'study', title: 'Courses & school', short: 'Study', summary: 'One line.', checklist: [], guides: [] },
    { id: 'live', title: 'Life in Kyoto', short: 'Live', summary: 'One line.', checklist: [], guides: [] },
    { id: 'return', title: 'Wrapping up', short: 'Return', summary: 'One line.',
      checklist: [{ when: 'After transcript', task: 'Submit credit transfer in EduRec', guide: 'nus-credit' }],
      guides: ['nus-credit'] }
  ],

  // Guides, by id. Two or three sections each works best.
  guides: {
    'kyoto-visa': {
      title: 'Get your student visa',
      tag: 'Visa',
      intro: 'One or two sentences.',
      sections: [
        { heading: 'What to bring', items: ['Item', 'Item'] },
        { heading: 'Where and how much', items: ['Item', 'Item'] }
      ],
      tip: 'The one thing to remember.',
      links: [{ name: 'Official page', url: 'https://example.edu' }],
      source: 'Where this came from'
    }
  },

  insights: [{ quote: 'A tip in a past student’s words.', who: 'Source' }],
  contacts: [{ name: 'International office', detail: 'email · phone' }],
  links: [{ name: 'International office', url: 'https://example.edu' }]
});
