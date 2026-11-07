// Fudan University, Shanghai. Written for Singaporean NUS students on SEP
// (Fudan "University-Level Exchange, General Advanced Program").
// Sources: Fudan Office of Global Partnerships guides for Fall 2026, and the FUSSA
// pre-departure briefing AY2026/27. Where they disagree, the official Fudan guide wins.
// Dates are for Fall 2026. Update them each intake.

SEPassedOn.addUni({
  id: 'fudan',
  university: 'Fudan University',
  city: 'Shanghai',
  country: 'China',
  updated: 'Nov 2026',
  intake: 'Fall 2026',
  programme: 'University-Level Exchange · General Advanced Program',
  tagline: 'Undergraduate modules in English or Chinese, on Handan campus in Yangpu, Shanghai.',
  sources: ['Fudan Office of Global Partnerships guides, Fall 2026', 'FUSSA pre-departure briefing, AY2026/27'],

  facts: [
    { label: 'Exchange dates', value: '30 Aug 2026 – 9 Jan 2027', note: 'One semester. Use these exact dates in your application' },
    { label: 'Visa', value: 'X2 student visa', note: 'Single entry, up to 180 days. Needs the DQ form' },
    { label: 'Housing', value: 'Off campus only', note: 'No on-campus housing for university-level exchange in Fall 2026' },
    { label: 'Rent near campus', value: 'RMB 3,000–6,000/mo', note: 'Serviced apartments. Hotels RMB 210–900 a night' },
    { label: 'Insurance', value: 'RMB 400 + your own', note: 'Fudan plan for one semester plus travel and health cover' },
    { label: 'Course load', value: 'Min 2 credits', note: 'No maximum. Check how many NUS units you need' },
    { label: 'English', value: 'IELTS 6.5 / TOEFL 90', note: 'HSK 5 (210) only if you take Chinese-taught modules' },
    { label: 'Main contact', value: 'incoming@fudan.edu.cn', note: 'Student Mobility, Office of Global Partnerships' }
  ],

  dates: [
    { date: '2026-04-21', label: 'Fudan application deadline', phase: 'apply' },
    { date: '2026-06-15', label: 'Admission Notice emailed, course list out', phase: 'apply', approx: 'June' },
    { date: '2026-06-23', end: '2026-08-28', label: 'Course selection Round 2.2', phase: 'prepare' },
    { date: '2026-08-26', label: 'Buy Fudan insurance (opens ~1 week before registration)', phase: 'prepare', approx: 'Late Aug' },
    { date: '2026-08-30', label: 'Exchange starts. Arrive about now', phase: 'arrive' },
    { date: '2026-09-02', label: 'Registration, Ma Jinming Building', phase: 'arrive' },
    { date: '2026-09-03', label: 'Orientation, 9:00', phase: 'arrive' },
    { date: '2026-09-07', end: '2026-09-19', label: 'Round 3.1 add and drop', phase: 'study' },
    { date: '2026-09-08', end: '2026-09-17', label: 'Course requests', phase: 'study' },
    { date: '2026-09-19', end: '2026-09-21', label: 'Round 3.2 add only', phase: 'study' },
    { date: '2026-10-28', end: '2026-11-05', label: 'Mid-term drop (fee per credit)', phase: 'study' },
    { date: '2026-12-28', label: 'Final exams, weeks 17–18', phase: 'study', approx: 'Late Dec – early Jan' },
    { date: '2027-01-09', label: 'Exchange ends', phase: 'return' },
    { date: '2027-04-01', label: 'Fudan email closes', phase: 'return' }
  ],

  address: {
    zh: '上海市杨浦区邯郸路220号 复旦大学正门',
    en: '220 Handan Road (Main Gate), Yangpu District, Shanghai',
    note: 'Fudan Handan campus main gate. Registration is in the Ma Jinming Building (马锦明楼) inside.'
  },

  phases: [
    {
      id: 'apply', title: 'Apply', short: 'Apply',
      summary: 'Get your NUS place, then apply to Fudan through its own portal. Map your modules early.',
      checklist: [
        { when: 'Year 2', task: 'Apply for SEP in EduRec and accept the NUS offer', guide: 'nus-apply' },
        { when: 'By 21 Apr', task: 'Submit the Fudan application with your admission code', guide: 'fudan-apply' },
        { when: 'Daily', task: 'Check your email for revision requests from “isoadmission”', guide: 'fudan-apply' },
        { when: 'June', task: 'Receive the digital Admission Notice from incoming@fudan.edu.cn' },
        { when: 'Before Aug', task: 'Submit NUS course mappings in EduRec', guide: 'nus-mapping' }
      ],
      guides: ['nus-apply', 'fudan-apply', 'nus-mapping']
    },
    {
      id: 'prepare', title: 'Before you fly', short: 'Prepare',
      summary: 'Visa, modules, a place to stay and insurance. Most of this can only be done from Singapore.',
      checklist: [
        { when: 'June', task: 'Download your DQ form from studyinchina.edu.cn (max 10 downloads)', guide: 'fudan-visa' },
        { when: 'June – Aug', task: 'Apply for the X2 visa at 80 Robinson Road', guide: 'fudan-visa' },
        { when: '23 Jun – 28 Aug', task: 'Pick modules in Round 2.2 on xk.fudan.edu.cn', guide: 'fudan-course-selection' },
        { when: 'July', task: 'Book off-campus housing near Handan campus', guide: 'fudan-housing' },
        { when: 'Before you fly', task: 'Get travel and health insurance that meets Fudan’s rules', guide: 'fudan-insurance' },
        { when: 'Before you fly', task: 'Install WeChat, Alipay and a VPN. Buy roaming or an eSIM', guide: 'fudan-phone' },
        { when: 'Late Aug', task: 'Buy the Fudan “800 Yuan Plan” insurance (6 months, RMB 400) and print the receipt', guide: 'fudan-insurance' },
        { when: 'Book now', task: 'Fly in about 3 days before registration (2 Sep)', guide: 'fudan-arrival' }
      ],
      guides: ['fudan-visa', 'fudan-insurance', 'fudan-housing', 'fudan-phone', 'fudan-money', 'fudan-dorm']
    },
    {
      id: 'arrive', title: 'Arrival week', short: 'Arrive',
      summary: 'Land, register your address within 24 hours, then register at Fudan with the right printouts.',
      checklist: [
        { when: 'Airport', task: 'Enter on your X2 visa, not visa-free entry', guide: 'fudan-arrival' },
        { when: 'Within 24 h', task: 'Register your address and print the Temporary Residence form', guide: 'fudan-residence' },
        { when: '2 Sep', task: 'Register at Room 101, Ma Jinming Building, with all printouts', guide: 'fudan-registration' },
        { when: '3 Sep', task: 'Attend orientation, 9:00, Xie Xide Auditorium', guide: 'fudan-registration' },
        { when: 'Week 0', task: 'Change your UIS password, activate Fudan email and campus Wi-Fi', guide: 'fudan-accounts' },
        { when: 'Week 0', task: 'Link the 复旦eCard mini-program in WeChat', guide: 'fudan-accounts' },
        { when: 'Week 0', task: 'Get a China SIM with your passport', guide: 'fudan-phone' },
        { when: 'When emailed', task: 'Complete the visa introduction process at the International Students Service Center', guide: 'fudan-residence' }
      ],
      guides: ['fudan-arrival', 'fudan-residence', 'fudan-registration', 'fudan-accounts']
    },
    {
      id: 'study', title: 'Courses & school', short: 'Study',
      summary: 'Lock in modules by 19 Sep. After that you can only drop mid-term, and it costs money.',
      checklist: [
        { when: '7 – 19 Sep', task: 'Round 3.1. Check xk at 13:00 daily for freed seats', guide: 'fudan-course-selection' },
        { when: '8 – 17 Sep', task: 'Make course requests for full modules if needed', guide: 'fudan-course-selection' },
        { when: 'By 19 Sep', task: 'Drop every module you do not want. Round 3.2 is add only', guide: 'fudan-course-selection' },
        { when: 'Week 1', task: 'Check all final exam dates for clashes', guide: 'fudan-exams' },
        { when: 'Week 1', task: 'Download syllabi and send any missing ones to NUS for mapping', guide: 'fudan-systems' },
        { when: '28 Oct – 5 Nov', task: 'Last chance to drop, with a fee per credit', guide: 'fudan-exams' }
      ],
      guides: ['fudan-course-selection', 'fudan-timetable', 'fudan-systems', 'fudan-exams']
    },
    {
      id: 'live', title: 'Life in Shanghai', short: 'Live',
      summary: 'Getting around, paying for things, and finding your people.',
      checklist: [
        { when: 'Week 1', task: 'Learn the four Handan gates and the free inter-campus bus', guide: 'fudan-getting-around' },
        { when: 'Week 1', task: 'Reach out to FUSSA', guide: 'fudan-community' },
        { when: 'Any time', task: 'Carry your passport for high-speed rail and hotels', guide: 'fudan-getting-around' }
      ],
      guides: ['fudan-getting-around', 'fudan-money', 'fudan-payments-etiquette', 'fudan-community']
    },
    {
      id: 'return', title: 'Wrapping up', short: 'Return',
      summary: 'Leave nothing behind: eCard money, email files and your credits.',
      checklist: [
        { when: 'Last week', task: 'Spend your eCard balance. Leftover money is not refunded', guide: 'fudan-leaving' },
        { when: 'Before 1 Apr', task: 'Save anything you need from your Fudan email', guide: 'fudan-leaving' },
        { when: 'After exchange', task: 'Fudan emails your transcript to NUS. No action needed', guide: 'fudan-leaving' },
        { when: 'After transcript', task: 'Submit your credit transfer in EduRec', guide: 'nus-credit' }
      ],
      guides: ['fudan-leaving', 'nus-credit']
    }
  ],

  guides: {
    'fudan-apply': {
      title: 'Apply to Fudan through istudent',
      tag: 'Application',
      intro: 'After NUS nominates you, Fudan emails an admission code. The application is free, but it closes on 21 April and revisions have their own deadlines.',
      sections: [
        { heading: 'Getting into the portal', items: [
          'Go to istudent.fudan.edu.cn/apply in Chrome and sign up with the email you check daily. Disable your ad blocker or the verification code may not arrive.',
          'Enter the admission code from your nomination email under “Quick Path” in the middle, then click Apply. Never use “Apply” under Personal Application on the left.',
          'Confirm the programme is “2026 Fall University-Level Student Exchange - GAP”, then Apply Now.',
          'To return later, click View under My Application.'
        ]},
        { heading: 'Fields people get wrong', items: [
          'Dates: start 2026-08-30, end 2027-01-09 for one semester. These go on your Admission Notice and visa, so get them exactly right.',
          'Passport name exactly as printed. Chinese name in characters, or tick “No Chinese Name”.',
          'Passport must have 6+ months validity, ideally covering the whole exchange.',
          'Offer letter address: choose option 3, pick up at the International Students Office. The original is handed out at orientation anyway.',
          'Recommendation institution: tick “No Recommendation Institution for Study in China”.',
          'Personal statement: confirm you are not a Chinese Mainland, Hong Kong, Macau or Taiwan resident, then a ~100-word study plan with your name, NUS, major and the Fudan modules and departments you want.'
        ]},
        { heading: 'Uploads', items: [
          'ID photo: JPG, 100–200 KB, 3:4 ratio (e.g. 600×800 px), white background, bare head, neutral face.',
          'Passport data page scan with no glare.',
          'Official NUS transcript in English.',
          'IELTS 6.5 (no band below 6.0) or TOEFL iBT 90, valid within two years of September 2026. HSK 5 with 210 only if you want Chinese-taught modules.'
        ]}
      ],
      tip: 'If you get an email from “isoadmission”, fix it immediately. Open View → Detail, then click 详情 next to each item marked “to be submitted”. Missing the revision deadline means rejection.',
      links: [{ name: 'Fudan English-taught course lists', url: 'https://ogp.fudan.edu.cn/16092/list.htm' }],
      source: 'Fudan application instructions, Fall 2026'
    },

    'fudan-visa': {
      title: 'Get the X2 visa in Singapore',
      tag: 'Visa',
      intro: 'One semester means an X2 visa. It is single entry, so once you leave mainland China (including to Hong Kong or Macau) it is used up.',
      sections: [
        { heading: 'What to bring to the visa centre', items: [
          'Passport with 6+ months validity and blank pages, plus a copy of the data page.',
          'Completed visa application form with a recent colour photo (bare head, light background). FUSSA notes the centre asks for 48mm × 33mm on white.',
          'Admission Notice (original and copy).',
          'DQ form for X2. Download it from studyinchina.edu.cn. Each certificate can only be downloaded 10 times, so save the PDF.',
          'FUSSA also recommends a copy of your birth certificate.'
        ]},
        { heading: 'Where and how much', items: [
          'Chinese Visa Application Service Center, 80 Robinson Road #16-01/02/02A, Singapore 068898.',
          'About SGD 85, cash or PayNow only (FUSSA).',
          'If asked for an inviting organisation: Fudan University, relationship “University”, +86 21 5566 4152, incoming@fudan.edu.cn, 220 Handan Road, Shanghai 200433.',
          'No medical report is needed for an X2 visa.'
        ]}
      ],
      tip: 'Do not enter China visa-free and try to convert later. Fudan only accepts X1 or X2 with an entry stamp, and converting may force you to leave and re-enter.',
      links: [
        { name: 'Download DQ form (Study in China)', url: 'https://www.studyinchina.edu.cn/visaAssistant/howGet' },
        { name: 'Chinese Visa Application Service Center', url: 'https://www.visaforchina.cn/' }
      ],
      source: 'Fudan exchange student guide Fall 2026, FUSSA briefing'
    },

    'fudan-insurance': {
      title: 'Sort out both insurance requirements',
      tag: 'Insurance',
      intro: 'Fudan needs two things. Its own Foreign Students Overall Insurance, and your own travel and health cover. The receipt for the first is checked at registration.',
      sections: [
        { heading: 'Fudan insurance (“800 Yuan Plan”)', items: [
          'It only appears in your account about a week before registration. Trying earlier shows nothing.',
          'Go to lxbx.net/home, click Buy Insurance and log in with your passport number.',
          'Pick the plan called 留学生800元方案. Despite the name, choose 6个月 (6 months) and pay RMB 400.',
          'Pay with China UnionPay QR (WeChat or Alipay) or Visa, Mastercard or JCB. If your card fails, use Alipay.',
          'Download the receipt (“List of insurance information for foreigner staying in China”) and print it for registration.',
          'Questions: 400-810-5119. Wrong details: incoming@fudan.edu.cn.'
        ]},
        { heading: 'Your own travel and health insurance', items: [
          'Must cover the whole exchange, including hospitalisation, civil liability and repatriation after death or serious injury.',
          'NUS may already cover outgoing exchangers. Check with GRO whether it meets every item above before buying more.',
          'Have it in place before you enter China.'
        ]}
      ],
      tip: 'Set a reminder for about 26 August to buy the Fudan plan. It is easy to forget, and you cannot register without the printed receipt.',
      links: [{ name: 'Fudan insurance purchase (lxbx.net)', url: 'https://lxbx.net/home' }],
      source: 'Fudan exchange student guide Fall 2026'
    },

    'fudan-housing': {
      title: 'Find off-campus housing',
      tag: 'Housing',
      intro: 'Fudan does not offer on-campus housing to university-level exchange students for Fall 2026. Most people use a serviced apartment or a long-stay hotel near Handan campus.',
      sections: [
        { heading: 'Places past students used (prices change, call to confirm)', items: [
          'Crowne Plaza Fudan, 199 Handan Rd. About RMB 900 a night, 1 min walk.',
          'Tianyi Hotel, 1805 Siping Rd. About RMB 559 a night, 10 min walk.',
          'Hanting Hotel (Wujiaochang Fudan), 2628 Songhuajiang Rd. About RMB 358 a night, 11 min walk.',
          'Unijia / Seyi International Community, 2602 Songhuajiang Rd. RMB 210–238 a night or RMB 4,500–5,500 a month, 12 min walk. +86 150 2133 6008.',
          'Xiazhi Booktown Hotel, Songhuajiang Rd. About RMB 230 a night or RMB 6,000 a month, 12 min walk.',
          'THINKMEN talents’ apartment, 2601 Songhuajiang Rd Bldg 2, 12 min walk. WeChat linlin188276.',
          'Fraser Place Wujiaochang, 1258 Yinxiang Rd. Serviced apartment, about 20 min by car.',
          'Qingyun Hotel, inside Handan campus (south-east corner), 5 min walk.'
        ]},
        { heading: 'Where else to look', items: [
          'Ziroom (自如) WeChat mini-program for monthly rentals.',
          'SmartShanghai housing listings, often English-friendly.',
          'Trip.com (Ctrip) for hotels with monthly rates.',
          'Ask FUSSA and your SEP batch chat. People often hand over leases.'
        ]},
        { heading: 'Before you pay', items: [
          'Make sure the landlord or hotel can register you as a foreign resident. You must do this within 24 hours of moving in.',
          'Get a written lease. You need it for police registration.',
          'Check whether water and electricity are included.'
        ]}
      ],
      tip: 'Most Singaporeans want a place within walking distance of the main gate, around Handan Road and Songhuajiang Road. Wujiaochang is lively but further.',
      links: [{ name: 'SmartShanghai housing', url: 'https://www.smartshanghai.com/housing/' }],
      source: 'Fudan exchange student guide Fall 2026 (list compiled by past students)'
    },

    'fudan-dorm': {
      title: 'If you are offered a Fudan dorm',
      tag: 'Housing',
      intro: 'University-level exchange students do not get on-campus housing for Fall 2026. This is FUSSA’s dorm information, useful if your programme or a later intake does get a room.',
      sections: [
        { heading: 'Dorm options and rates (FUSSA AY2026/27, short term)', items: [
          'Main Building: single RMB 150, double RMB 100 per person per night. Lifts, washing machine on each floor.',
          'Affiliated Buildings: single RMB 80 per night. Suites of 4 rooms, 2 toilets, small living room. No lifts, up to level 7.',
          'AYC: single RMB 9,000 per term, same suite layout.'
        ]},
        { heading: 'Moving in', items: [
          'Report to 物业 at the Main Building lobby (主楼一楼大厅). Pay RMB 200 deposit, RMB 100 electricity and RMB 100 water heater, WeChat Pay or Alipay only.',
          'No bedding is provided. Order sheets, pillow and blanket on Taobao to the Cainiao station (复旦北苑体育馆南侧玻璃房菜鸟驿站).',
          'Dorm address for taxis is 上海市杨浦区武东路57号 复旦大学北苑学生公寓. By metro, use 上海财经大学 station on Line 18, not 复旦大学 station.',
          'Get your Temporary Residence form at the Main Building counter.'
        ]}
      ],
      tip: 'Watch the ISO dorm video before choosing a room type.',
      links: [{ name: 'Fudan ISO dorm video', url: 'https://iso.fudan.edu.cn/f2/11/c16868a782865/page.htm' }],
      source: 'FUSSA pre-departure briefing AY2026/27'
    },

    'fudan-phone': {
      title: 'Phone, internet and apps',
      tag: 'Setup',
      intro: 'Install everything in Singapore. Some apps and VPNs are hard to get once you are in China.',
      sections: [
        { heading: 'Data', items: [
          'Before you fly, buy roaming in your Singtel, StarHub, M1 or Simba app, or buy an eSIM. Roaming data usually works with Google and WhatsApp.',
          'For a China SIM, bring your passport and Admission Notice. FUSSA says on-campus student deals are much cheaper, around RMB 39 a month, versus RMB 65–90 outside.',
          'A Chinese number makes deliveries, DiDi and app verification much easier.'
        ]},
        { heading: 'VPN', items: [
          'Students use Veee+, Vpnify (free with ads), AOX VPN (5 devices), Astrill and Panda VPN. Subscribe and test before you leave.',
          'Keep a backup VPN in case one stops working.',
          'Fudan’s own VPN (aTrust) is only for reaching Fudan sites off campus. Turn your other VPN off when using it.'
        ]},
        { heading: 'Apps', items: [
          'Daily life: WeChat, Alipay, 滴滴 DiDi, 高德 Amap, 哈啰 Hello and 美团 Meituan bikes, Taobao.',
          'School: 复旦eCard and 复旦ehall WeChat mini-programs, WeCom (企业微信), 旦夕 for the student forum and timetable, 超星 for some course materials.'
        ]}
      ],
      tip: 'Connect to campus Wi-Fi (iFudanNG.1x) as soon as you have changed your UIS password. It saves a lot of data.',
      links: [],
      source: 'FUSSA briefing, Fudan exchange student guide Fall 2026'
    },

    'fudan-money': {
      title: 'Money, payments and your eCard',
      tag: 'Money',
      intro: 'Shanghai runs on Alipay and WeChat Pay. Both now accept Singapore cards.',
      sections: [
        { heading: 'Before you fly', items: [
          'Install Alipay and WeChat, finish identity verification and link a Singapore card with low FX fees.',
          'Carry some RMB cash and a second card as backup.',
          'Test a small payment as soon as you land.'
        ]},
        { heading: 'Fudan eCard (一卡通)', items: [
          'You get the physical card at registration. It opens gates and libraries and pays in canteens.',
          'Top up in the 复旦eCard WeChat mini-program. Canteens are the cheapest meals around.',
          'Only top up what you need. Leftover balance is not refunded when you leave.',
          'Lost card? Suspend it in the mini-program, then visit the Student Card Center, Room 120, 综合楼北楼 (55664868, ecard@fudan.edu.cn).'
        ]},
        { heading: 'Chinese bank account (optional)', items: [
          'Most exchangers manage without one.',
          'If you need one, bring your passport, Admission Notice and Temporary Residence form. Give your NRIC number when asked for a tax number (纳税号).',
          'Agricultural Bank of China is just outside the gate, and Bank of China is inside campus (FUSSA).'
        ]}
      ],
      tip: 'Some taxi and food apps reject certain foreign cards. Keep two cards linked in Alipay.',
      links: [{ name: 'SmartShanghai: Alipay for foreigners', url: 'https://www.smartshanghai.com/articles/smsh/yes-foreigners-can-use-alipay-this-is-how' }],
      source: 'Fudan exchange student guide Fall 2026, FUSSA briefing'
    },

    'fudan-arrival': {
      title: 'Land and get to Fudan',
      tag: 'Arrival',
      intro: 'Aim to arrive about 3 days before registration on 2 September. Arriving too early on an X2 risks overstay issues and wastes rent.',
      sections: [
        { heading: 'At immigration', items: [
          'Enter on your X2 visa, not visa-free entry.',
          'Scan your passport and fingerprints at the machines, print the QR slip and fill in the arrival card before queueing (FUSSA).',
          'Keep your Admission Notice and DQ form in your hand luggage.'
        ]},
        { heading: 'Metro to Handan campus', items: [
          'From Pudong (PVG): Line 2 to Longyang Road (龙阳路), change to Line 18, get off at Fudan University (复旦大学) station.',
          'From Hongqiao (SHA): Line 10 to Guoquan Road (国权路), change to Line 18, get off at Fudan University station.',
          'Taxis are at the official queue. DiDi, Amap and Baidu Maps also work but may reject some foreign cards.'
        ]},
        { heading: 'Show your driver', items: [
          '上海市杨浦区邯郸路220号 复旦大学正门 (Fudan main gate, 220 Handan Road).',
          'Have your housing address in Chinese saved offline too.'
        ]}
      ],
      tip: 'With big luggage, take the metro most of the way and a taxi for the last stretch.',
      links: [{ name: 'Fudan campus map', url: 'https://zlapp.fudan.edu.cn/site/schoolMap/model?titleID=15' }],
      source: 'Fudan exchange student guide Fall 2026, FUSSA briefing'
    },

    'fudan-residence': {
      title: 'Register your address and visa',
      tag: 'Immigration',
      intro: 'Shanghai requires foreigners to register where they live within 24 hours. Fudan needs this form at registration.',
      sections: [
        { heading: 'Temporary Residence form (境外人员临时住宿登记表)', items: [
          'Hotel: the hotel registers you, so you do not use the website. Ask the front desk how to get proof for registration.',
          'Apartment, option 1: on the Shanghai Exit-Entry Administration Bureau site, use “Online Application for Temporary Residence of Foreigners in Scattered Areas”, then download and print the form.',
          'Apartment, option 2: go to the local police station with your passport and lease.',
          'Moving again? Re-register within 24 hours of the change.'
        ]},
        { heading: 'Visa introduction process', items: [
          'Fudan emails instructions near the start of semester.',
          'X2 holders do not need the introduction letter itself, but must still complete the process.',
          'It is at the International Students Service Center, 4th floor, Guanghua Towers East Main Building (光华楼东主楼4楼).'
        ]},
        { heading: 'What X2 exchange students can skip', items: [
          'The Shanghai physical examination. It is only for X1 holders or stays over six months.',
          'The residence permit. Only needed for X1 or stays over six months.'
        ]}
      ],
      tip: 'If you move from a hotel to an apartment, do the online registration the day you move.',
      links: [{ name: 'Shanghai Exit-Entry Administration Bureau', url: 'https://gaj.sh.gov.cn/crj/enhomeE' }],
      source: 'Fudan exchange student guide Fall 2026'
    },

    'fudan-registration': {
      title: 'Registration and orientation',
      tag: 'Arrival',
      intro: 'Both are mandatory. Missing them without permission counts as withdrawing from the exchange.',
      sections: [
        { heading: 'Registration, 2 September 2026', items: [
          'Room 101, Ma Jinming Building (马锦明楼), 220 Handan Road. Book your time slot with the link in Fudan’s email.',
          'Your student number is in the “Application Number and Student Number” file Fudan sends you.',
          'Need to come late? Email incoming@fudan.edu.cn for permission before 30 August.'
        ]},
        { heading: 'Bring these printouts', items: [
          'Original passport with X2 visa and entry stamp.',
          'Admission Notice.',
          'DQ form.',
          'Fudan insurance purchase receipt.',
          'Temporary Residence form (a copy).',
          'Signed “Course Selection Special Notes for General Advanced Program”.',
          'Extra: two photocopies each of your Admission Notice, DQ form and passport page.'
        ]},
        { heading: 'Orientation, 3 September 2026, 9:00–10:00', items: [
          'Xie Xide Auditorium, Center for American Studies, 680 Guoquan Road (美国研究中心谢希德报告厅).',
          'You get the original Admission Notice and your student card around this week.'
        ]}
      ],
      tip: 'Print everything in Singapore. Finding a printer in week 0 is a pain.',
      links: [{ name: 'Orientation venue on Fudan map', url: 'https://zlapp.fudan.edu.cn/site/schoolMap/model?titleID=15&itemID=1017' }],
      source: 'Fudan exchange student guide Fall 2026'
    },

    'fudan-accounts': {
      title: 'Set up UIS, email, Wi-Fi and eCard',
      tag: 'Setup',
      intro: 'Your UIS login opens almost every Fudan system. Change the initial password first or Wi-Fi may not work.',
      sections: [
        { heading: 'UIS login', items: [
          'Username: your student number.',
          'Initial password: fDu + the last 6 characters of your passport number, with letters replaced by 0. Example: XY1A2B3C4D → fDu203040. Case sensitive.',
          'Change it on ehall.fudan.edu.cn (hover your name, Change Password). Avoid characters like . ! @ ~ _ -.'
        ]},
        { heading: 'Email and Wi-Fi', items: [
          'Email: studentNumber@m.fudan.edu.cn at mail.m.fudan.edu.cn. Same initial password as UIS but changed separately. Activate by scanning the QR code with WeChat.',
          'Wi-Fi: iFudanNG.1x or iFudan.1x with your UIS login.',
          'IT help: urp@fudan.edu.cn, 65643247 (send your student number, name and screenshots).'
        ]},
        { heading: 'eCard and VPN', items: [
          'Search 复旦eCard in WeChat, tap 校内用户登录 and log in with UIS. The QR code works in place of your physical card at gates.',
          'Off campus, some Fudan sites (like course selection) need Fudan VPN (aTrust). Download from vpn.fudan.edu.cn, log in with UIS and verify with the WeChat QR option.'
        ]}
      ],
      tip: 'Also add the 复旦ehall WeChat mini-program. It is the hub for most student services.',
      links: [
        { name: 'Fudan eHall', url: 'https://ehall.fudan.edu.cn/' },
        { name: 'Fudan VPN (aTrust)', url: 'https://vpn.fudan.edu.cn' }
      ],
      source: 'Fudan exchange student guide Fall 2026'
    },

    'fudan-course-selection': {
      title: 'Course selection rounds and deadlines',
      tag: 'Modules',
      intro: 'Exchange students can use Round 2.2 and Round 3. You cannot log in or change anything outside these windows. No exceptions.',
      sections: [
        { heading: 'Fall 2026 timeline', items: [
          'Round 2.2: 23 Jun 13:00 to 28 Aug 10:00. Add and drop.',
          'Round 3.1: 7 Sep 13:00 to 19 Sep 10:00. Add and drop. Seats freed by drops appear at 13:00 the next day, first come first served.',
          'Round 3.2: 19 Sep 10:01 to 21 Sep 10:00. Add only. Anything added here cannot be dropped.',
          'Course requests (选课事务申请): 8 Sep 10:00 to 17 Sep 10:00. Results by 18 Sep 16:00. Not guaranteed.',
          'Mid-term drop: 28 Oct 10:00 to 5 Nov 10:00. Fee per credit, not waivable, and not every module allows it (check 是否允许期中退课).'
        ]},
        { heading: 'Using xk.fudan.edu.cn', items: [
          'Switch to English, click “Start courses enrolling”.',
          'In List mode, set course availability to all, search the task info (e.g. ENVI119006.01) and click Enroll.',
          'A Round 2.2 popup saying the course group is full usually means the module is reserved for certain students. Try again in Round 3.',
          'The Selected tab shows your modules. Click Drop to remove one.',
          'Off campus you may need Fudan VPN (aTrust) to log in.'
        ]},
        { heading: 'What you can take', items: [
          'Modules from any school, not just the one you are assigned to, subject to prerequisites and seats.',
          'Popular management and economics modules fill fast.',
          'No medicine or restricted programmes. ICES Chinese language courses are generally not open to you.',
          'Chinese-taught modules need HSK 5 (210) unless Chinese is your first language.'
        ]}
      ],
      tip: 'Secure your NUS-mappable modules in Round 2.2 from Singapore. Use Round 3 for top-ups and swaps, not your core modules.',
      links: [
        { name: 'Fudan course selection (xk)', url: 'http://xk.fudan.edu.cn' },
        { name: 'English-taught course lists', url: 'https://ogp.fudan.edu.cn/16092/list.htm' }
      ],
      source: 'Fudan Guide for Course Selection (GAP), Fall 2026'
    },

    'fudan-timetable': {
      title: 'Read your timetable and find your class',
      tag: 'Modules',
      intro: 'Fudan timetables are compact codes. Here is how to decode them.',
      sections: [
        { heading: 'Schedule format', items: [
          'Format: DAY SESSIONS [WEEKS]. Example 四 4-5 1 四 4-10 [2-16] means Thursday sessions 4–5 in week 1, then Thursday sessions 4–10 in weeks 2–16.',
          'Week 0 is orientation with no classes. Weeks 17–18 are final exams.'
        ]},
        { heading: 'Session times', items: [
          '1 08:00–08:45 · 2 08:55–09:40 · 3 09:55–10:40 · 4 10:50–11:35 · 5 11:45–12:30',
          '6 13:30–14:15 · 7 14:25–15:10 · 8 15:25–16:10 · 9 16:20–17:05 · 10 17:15–18:00',
          '11 18:30–19:15 · 12 19:25–20:10 · 13 20:20–21:05'
        ]},
        { heading: 'Room codes', items: [
          'H Handan · J Jiangwan · Z Zhangjiang · F Fenglin.',
          'HGX / HGD: Guanghua Towers West / East Wing. HGX402 is room 402 on the 4th floor.',
          'HQ: School of Journalism teaching building on Handan.',
          'H3205: Handan Teaching Building 3, Room 205.',
          'Free shuttle buses run between campuses.'
        ]}
      ],
      tip: 'Generate your timetable in the course system and screenshot it. Room codes are much easier with the campus map open.',
      links: [{ name: 'Fudan campus map', url: 'https://zlapp.fudan.edu.cn/site/schoolMap/model?titleID=15&itemID=1676' }],
      source: 'Fudan Guide for Course Selection (GAP), Fall 2026'
    },

    'fudan-systems': {
      title: 'Syllabi, grades and who to email',
      tag: 'Modules',
      intro: 'Course selection (xk) only opens during selection rounds. The course management system is open any time.',
      sections: [
        { heading: 'Course management system', items: [
          'fdjwgl.fudan.edu.cn/student/home, log in with UIS.',
          '菜单 (menu) → 我的课表 for your timetable, 我的成绩 for grades.',
          'Syllabi: click 全校课表和教学大纲查询, pick 2026-2027学年第1学期, enter the task info in 课程序号, click 查询, then 导出课程教学大纲.',
          'If it says 该教学任务暂无审核通过的学期课程教学大纲, the syllabus is not uploaded yet. Try a previous semester or email the instructor.'
        ]},
        { heading: 'Academic administrators (for syllabus or exam questions)', items: [
          'School of Economics: 65642330, zhangyi1980@fudan.edu.cn',
          'School of Management: 25011552, hu_wenyi@fudan.edu.cn',
          'Fudan International School of Finance: 63895565, mengtingchen@fudan.edu.cn',
          'School of Data Science: 65648770, wangzhuyu@fudan.edu.cn',
          'College of Computer Science and AI: 65641277, cs_bkjx@fudan.edu.cn',
          'School of International Relations and Public Affairs: 55664294, sirpa_jw@fudan.edu.cn',
          'School of Journalism: 55664699, liuc@fudan.edu.cn',
          'School of Mathematical Sciences: 65642344, yqdu@fudan.edu.cn',
          'Full list in Fudan’s Guide for Course Selection.'
        ]}
      ],
      tip: 'NUS mapping often needs a syllabus. Download it as soon as it is uploaded, since many only appear when semester starts.',
      links: [{ name: 'Fudan course management system', url: 'https://fdjwgl.fudan.edu.cn/student/home' }],
      source: 'Fudan Guide for Course Selection (GAP), Fall 2026'
    },

    'fudan-exams': {
      title: 'Exams, dropping and your transcript',
      tag: 'Modules',
      intro: 'You sign a form at registration agreeing to these rules, so know them before you pick modules.',
      sections: [
        { heading: 'Exams', items: [
          'Final exam dates are fixed and cannot be changed. Check every module’s exam time for clashes before Round 3.1 ends.',
          'Exams can fall on or around holidays like 25 Dec and 31 Dec. Plan travel home accordingly.',
          'Once enrolled, you cannot be exempted from any task or test.'
        ]},
        { heading: 'Dropping', items: [
          'Drop freely only until 19 Sep 10:00 (end of Round 3.1).',
          'After that, only during mid-term drop (28 Oct – 5 Nov), with a fee per credit. PE and some modules cannot be dropped.'
        ]},
        { heading: 'Transcript and credits', items: [
          'Every module you select appears on your transcript. You cannot hide any. Audited modules do not appear.',
          'Minimum load is 2 credits, with no maximum. Roughly 1 credit per weekly contact hour over the semester.',
          'Fudan emails a scanned transcript to NUS during the following vacation or semester, copying you. No action needed.',
          'NUS records passed, mapped modules as OVS. Your Fudan grades do not count towards your GPA.'
        ]}
      ],
      tip: 'If you only want to sit in on a module, do not select it. Audit it instead so it stays off your transcript.',
      links: [],
      source: 'Fudan Course Selection Special Notes and Guide for Course Selection, Fall 2026'
    },

    'fudan-getting-around': {
      title: 'Getting around campus and Shanghai',
      tag: 'Life',
      intro: 'Handan campus has four gates. Knowing which is closest saves a lot of walking.',
      sections: [
        { heading: 'Handan gates', items: [
          'On Handan Road, west to east: South East Gate 3 (南3门, 南门), Main Gate (正门, 220 Handan Rd), Southeast Gate (东南门).',
          'On Guoding Road: East Gate 1 (东1门, 东门).',
          'Show your eCard QR or student card to enter.'
        ]},
        { heading: 'Moving around', items: [
          'Walk, or use 哈啰 Hello (blue) and 美团 Meituan (yellow) shared bikes. E-scooters are common.',
          'Free shuttle buses link Handan, Jiangwan, Fenglin and Zhangjiang campuses.',
          'Metro: Line 18 Fudan University station and Line 10 Guoquan Road are closest. Use the Alipay metro QR code.',
          'Carry your passport for high-speed rail and hotels. Rail tickets are tied to it.'
        ]}
      ],
      tip: 'Your X2 is single entry. Travel anywhere in mainland China freely, but a trip to Hong Kong or Macau ends your visa.',
      links: [{ name: 'Fudan campus map', url: 'https://zlapp.fudan.edu.cn/site/schoolMap/model?titleID=15' }],
      source: 'Fudan exchange student guide Fall 2026, FUSSA briefing'
    },

    'fudan-payments-etiquette': {
      title: 'Everyday Shanghai, the unspoken rules',
      tag: 'Life',
      intro: 'Small things that make the first month smoother.',
      sections: [
        { heading: 'Daily habits', items: [
          'Keep your phone charged. Payments, metro, campus gates and taxis all run on it.',
          'Use a translation app with camera mode for signs, menus and notices.',
          'Metro stations have bag security checks. Leave time.',
          'Many services live inside WeChat mini-programs rather than separate apps.'
        ]},
        { heading: 'Stay safe', items: [
          'Never share one-time passcodes, even with people offering to help set up payments.',
          'Treat housing offers in group chats as unverified until you have seen the place and a lease.',
          'Hospital visits: Fudan’s life guide has a step-by-step guide to emergency care in Chinese hospitals.'
        ]}
      ],
      tip: 'Keep your address and the Fudan main gate address in Chinese as screenshots for taxis and deliveries.',
      links: [],
      source: 'SEPassedOn research, Fudan exchange student guide'
    },

    'fudan-community': {
      title: 'Find your people',
      tag: 'Life',
      intro: 'Orientation is the easiest place to meet other exchangers. FUSSA is there for the Singaporean side.',
      sections: [
        { heading: 'Groups to join', items: [
          'FUSSA (Fudan University Singaporean Students’ Association) for any questions, SG events and support.',
          'FUSSA also supports Singapore Consulate, SingCham and SSA Shanghai events.',
          'Your exchange batch WeChat group. Get the QR code from official organisers, as reposted codes expire.'
        ]},
        { heading: 'Settling in', items: [
          'Pick one recurring activity, like a sport, language exchange or club, rather than trying everything.',
          'The 旦夕 app has the student forum for second-hand items, events and tips.'
        ]}
      ],
      tip: 'One regular weekly thing beats ten one-off events.',
      links: [],
      source: 'FUSSA briefing'
    },

    'fudan-leaving': {
      title: 'Before you leave Shanghai',
      tag: 'Wrap up',
      intro: 'A few things are lost for good if you forget them.',
      sections: [
        { heading: 'Money and accounts', items: [
          'Spend your eCard balance. Leftover money is not refunded.',
          'Fudan email closes on 1 April 2027 for January leavers. Save files and forward anything important.',
          'Cancel your China SIM plan and any monthly subscriptions.'
        ]},
        { heading: 'Transcript and credits', items: [
          'Fudan emails a scanned transcript to NUS (copying you) during the vacation or early next semester.',
          'Questions about transcripts: incoming@fudan.edu.cn.',
          'Then start your NUS credit transfer in EduRec.'
        ]}
      ],
      tip: 'Screenshot your Fudan grades page before you lose access, in case NUS asks for anything early.',
      links: [],
      source: 'Fudan exchange student guide and Guide for Course Selection, Fall 2026'
    }
  },

  insights: [
    { quote: 'Print everything in Singapore. Admission Notice, DQ form, insurance receipt. You need paper copies at registration.', who: 'Fudan registration checklist' },
    { quote: 'Seats freed by drops appear at 13:00 the next day. Check xk at 1pm sharp in Round 3.', who: 'Fudan course selection guide' },
    { quote: 'Buy your SIM in school. The student deal is far cheaper than outside.', who: 'FUSSA briefing' },
    { quote: 'Install your VPN and apps before you fly. Some are hard to get in China.', who: 'FUSSA briefing' }
  ],

  contacts: [
    { name: 'Student Mobility, Office of Global Partnerships', detail: 'incoming@fudan.edu.cn · +86 21 5566 4152 · Room 105, Ma Jinming Building' },
    { name: 'Information Office (UIS, email, Wi-Fi)', detail: 'urp@fudan.edu.cn · 65643247 / 65643207' },
    { name: 'Student Card Center', detail: 'ecard@fudan.edu.cn · 55664868 · Room 120, 综合楼北楼' },
    { name: 'Insurance hotline', detail: '400-810-5119' },
    { name: 'FUSSA', detail: 'Fudan University Singaporean Students’ Association' }
  ],

  links: [
    { name: 'Fudan course selection (xk)', url: 'http://xk.fudan.edu.cn' },
    { name: 'Course management system', url: 'https://fdjwgl.fudan.edu.cn/student/home' },
    { name: 'Fudan eHall', url: 'https://ehall.fudan.edu.cn/' },
    { name: 'English-taught course lists', url: 'https://ogp.fudan.edu.cn/16092/list.htm' },
    { name: 'Fudan insurance (lxbx.net)', url: 'https://lxbx.net/home' },
    { name: 'DQ form download', url: 'https://www.studyinchina.edu.cn/visaAssistant/howGet' },
    { name: 'Shanghai Exit-Entry Bureau', url: 'https://gaj.sh.gov.cn/crj/enhomeE' },
    { name: 'Fudan campus map', url: 'https://zlapp.fudan.edu.cn/site/schoolMap/model?titleID=15' }
  ]
});
