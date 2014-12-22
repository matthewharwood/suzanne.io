'use strict';
angular.module('suzanneioApp')
  .factory('Suzanne', function(){
    var Suzanne = {};
    Suzanne.exp = 
    [
      {
        timeframe: '2011 – Present',
        job: 'Marketing and Call Center / Dispatch Manager',
        location: 'Mediastream – Waycross, Georgia',
        list: [
          {detail:'Design and implement multimedia marketing campaigns working with marketing and sales team.'},
          {detail:'Call Center operations management including national Dispatch.'},
          {detail:'Supervise the interviewing, hiring and training of employees and the planning, assigning and directing of tasks and responsibilities.'},
          {detail:'Develop and implement internal communications and training programs.'},
          {detail:'Work with management team to develop budget.'},
          {detail:'Evaluate financial reports to target areas of opportunity and growth.'}

        ]
      },
      {
        timeframe: '2009 – 2010',
        job: 'Director of Marketing and Sales',
        location: 'NuLink – Atlanta, Georgia',
        list: [
          {detail:'Design and implement multimedia marketing campaigns working with marketing and sales team.'},
          {detail:'Supervise the interviewing, hiring and training of employees and the planning, assigning and directing of tasks and responsibilities.'},
          {detail:'Develop and implement internal communications and training programs.'},
          {detail:'Work with management team to develop budget.'},
          {detail: 'Evaluate financial reports to target areas of opportunity and growth.'}
        ]
      },
      {
        timeframe: '2000-2009',
        job: 'Director of Marketing',
        location: 'Millennium Digital Media (Broadstripe) – Central & Northern Region, MI',
        list: [
          {detail:'Develop budget, analyze financial and subscriber reports to target areas of opportunity and growth.'},
          {detail:'Work with system marketing managers to design and implement multimedia marketing campaigns on a single-market and MSO-wide basis.'},
          {detail:'Develop, implement and manage customer service training and sales programs.'},
        ]
      },
      {
        timeframe: '1999 – 2000',
        job: 'Community Relations Manager',
        location: 'MediaOne – Midwest Region, MI',
        list: [
          {detail:'Develop community relations projects with cable network affiliate representatives and manage the business plan and associated budget'},
          {detail:'Coordinate and implement regional community relations initiatives and corporate-sponsored activities with outside staff'},
        ]
      },
      {
        timeframe: '1997 – 1999',
        job: 'Promotions and Events Manager',
        location: 'MediaOne – Midwest Region, MI',
        list: [
          {detail:'Evaluate all aspects of promotion and event opportunities including budgeting, planning, programmer funding and project execution'},
          {detail:'Manage marketing tactics and work cooperatively with marketing, advertising sales, public affairs and corporate affairs to establish cross-functional promotions and events'},
        ]
      },
      {
        timeframe: '1988 – 1997',
        job: 'Marketing and Advertising Sales Manager',
        location: 'Booth Communications – Birmingham, MI. (Acquired by MediaOne in 1997)',
        list: [
          {detail:'Develop and implement marketing campaigns using direct mail, radio, television and print media'},
          {detail:'Budget and forecast new and existing subscriber accounts'},
        ]
      },
      {
        timeframe: '1982 - 1988',
        list: [
          {detail:'Account Executive (1987-88)'},
          {detail:'Territory Manager (1984-87)'},
          {detail:'Customer Service Representative (1982-84)'},
          {detail:'Continental Cablevision – Southfield, MI'},
        ]
      }
    ];

    Suzanne.memberships = [
      'CTAM, Detroit Area Chapter: Treasurer',
      'Women in Cable & Telecommunications, Detroit Chapter: Board of Directors',
      'Michigan Cable & Telecommunications Association: Committee Member',
      'Southeast Michigan Cable Association: Treasurer (9 Years)'
    ];
    
    Suzanne.awards = [
      'Women In Cable and Telecommunications',
      'Carla Laufer Lifetime Cable Achievement Award'
    ];

    return Suzanne;
  });
