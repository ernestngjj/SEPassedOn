// NUS SEP guides shared by every university. Reference them in a university's phases
// by id: nus-apply, nus-mapping, nus-credit.

SEPassedOn.sep = {
  ids: ['nus-apply', 'nus-mapping', 'nus-credit'],
  title: 'Sort out the NUS side before you fly.',
  insight: 'SEP grades do not count towards your NUS GPA. Only credits for passed, approved mappings transfer, as Overseas Satisfactory (OVS). Rules differ by faculty, so check your faculty SEP page too.',
  updated: 'Nov 2026',
  guides: [
    {
      title: 'Apply for SEP and secure your place',
      intro: 'Applications happen about a year before you go. For a Year 3 exchange, Round 1 usually opens around August to September of Year 2.',
      sections: [
        { heading: 'Check you are eligible', items: [
          'Full-time NUS undergraduate with at least two semesters completed.',
          'GPA of at least 3.0, with no grade below C in any course. Popular universities usually need more.',
          'The exchange cannot fall in your final semester.',
          'You keep paying NUS tuition fees, not the partner university fees.'
        ]},
        { heading: 'Apply through EduRec', items: [
          'Complete the GRO Travel Preparedness Course at least 24 hours before you submit.',
          'Rank your partner universities in EduRec. Check how many choices your faculty allows.',
          'After you accept the NUS offer, NUS nominates you. You then apply to the partner university and wait for its admission letter.',
          'The admission letter is what you need for the visa.'
        ]}
      ],
      tip: 'Read past exchangers’ reports for the universities you are ranking. Places, module options and housing vary a lot.',
      links: [
        { name: 'NUS GRO outgoing exchange', url: 'https://nus.edu.sg/gro/global-programmes/student-exchange/outgoing-exchangers' }
      ]
    },
    {
      title: 'Map your courses before you leave',
      intro: 'Course mapping decides which NUS courses your exchange modules count as. Get approvals before your SEP semester starts.',
      sections: [
        { heading: 'Submitting mappings', items: [
          'Use the course mapping worksheet in EduRec. It unlocks after you accept the internal exchange offer.',
          'If a module is on the pre-approved mapping list, enter its code, title and units exactly as listed for automatic approval.',
          'Other mappings are routed to the NUS department that hosts the course. Outcomes can take weeks.',
          'Map a few backup modules in case partner university classes clash or fill up.'
        ]},
        { heading: 'Changes and limits', items: [
          'If your modules change during add/drop overseas, resubmit the mapping in EduRec before your SEP semester ends.',
          'Many faculties cap how many units transfer from one SEP. For example, Science caps it at 24 units from AY2025/26.',
          'Check your faculty’s rules on how many units must be read at NUS for your major.'
        ]}
      ],
      tip: 'Keep the module outline or syllabus for each module. Departments often ask for it before approving a mapping.',
      links: [
        { name: 'NUS GRO outgoing exchange', url: 'https://nus.edu.sg/gro/global-programmes/student-exchange/outgoing-exchangers' }
      ]
    },
    {
      title: 'Get your credits transferred after you return',
      intro: 'Credit transfer is not automatic. You have to start it once your transcript is out.',
      sections: [
        { heading: 'How transfer works', items: [
          'Only modules you pass and have approved mappings for will transfer.',
          'They show as OVS (Overseas Satisfactory) or OVU and are excluded from your GPA.',
          'Modules taken as pass/fail at the partner university may not transfer. Check with your faculty first.'
        ]},
        { heading: 'After you get your transcript', items: [
          'Submit the credit transfer request in EduRec with your partner university transcript, following your faculty’s instructions.',
          'Allow up to about two months for processing.',
          'Check your transferred credits in EduRec before planning your next semester’s workload.'
        ]}
      ],
      tip: 'Ask the partner university to send your official transcript early. Late transcripts are the usual cause of delays.',
      links: [
        { name: 'NUS GRO outgoing exchange', url: 'https://nus.edu.sg/gro/global-programmes/student-exchange/outgoing-exchangers' }
      ]
    }
  ]
};

// Register the three NUS guides as shared guides.
SEPassedOn.sep.guides.forEach((g, i) => {
  g.tag = 'NUS SEP';
  g.source = g.source || 'NUS GRO and faculty SEP pages';
  SEPassedOn.shared[SEPassedOn.sep.ids[i]] = g;
});
