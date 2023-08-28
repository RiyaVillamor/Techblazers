import React from 'react';
import '../styles/pages/ClassRecording.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const classData = [
  {
    date: 'Fri, May 26, AM',
    description: 'Student Orientation - FT AM',
    link: 'https://www.youtube.com/watch?v=FHnUaSm-Wm8',
    notes: '',
  },
  {
    date: 'Fri, May 26, PM',
    description: 'Student Orientation - FT PM',
    link: 'http://www.youtube.com/watch?v=6AkMY8oCr_Q',
    notes: '',
  },
  {
    date: 'Tue, May 30, AM',
    description: 'Class Introduction',
    link: 'http://www.youtube.com/watch?v=CMGiRW-v03M',
    notes: '',
  },
  {
    date: 'Tue, May 30, PM',
    description: '(cont) Class Introduction, Introduction to Web Development',
    link: 'http://www.youtube.com/watch?v=yAhWiz0Z1yc',
    notes: '',
  },
  {
    date: 'Wed, May 31, AM',
    description: 'Basics of HTML',
    link: 'http://www.youtube.com/watch?v=DF5W0E5WxIM',
    notes: '',
  },
  {
    date: 'Wed, May 31, PM',
    description: 'Exercise 1a, HTML Link, Image, Lists, Exercise 1b',
    link: 'http://www.youtube.com/watch?v=mKVET6trtms',
    notes: '',
  },
  {
    date: 'Thu, Jun 01, AM',
    description: 'Coding Reminders, Exercise 1b Knowledge Sharing, Kahoot Quiz',
    link: 'http://www.youtube.com/watch?v=3XuRjISO5Y0',
    notes: 'Skip from 01:31:48 to 01:45:24\nClass Ends at 02:22:20',
  },
  {
    date: 'Thu, Jun 01, PM',
    description: 'HTML Tables, HTML Forms',
    link: 'http://www.youtube.com/watch?v=xtvNH5mZE0c',
    notes: 'Skip from 01:07:04 to 01:18:01\nSkip from 01:23:06 to 01:38:21\nSkip from 02:31:59 to 03:04:45\nClass Ends at 04:29:30',
  },
  {
    date: 'Fri, Jun 02, AM',
    description: '(cont) HTML Forms, HTML Semantic Elements',
    link: 'http://www.youtube.com/watch?v=yBinw2QB-fc',
    notes: 'Skip from 01:34:17 to 01:48:01',
  },
  {
    date: 'Fri, Jun 02, PM',
    description: '(cont) HTML Semantic Elements, HTML Multimedia Elements, Exercise 1d',
    link: 'http://www.youtube.com/watch?v=mdiCfxtZZWE',
    notes: 'Skip from 01:31:44 to 01:57:20\nSkip from 02:19:50 to 02:49:19\nSkip from 02:53:41 to 03:24:59',
  },
  {
    date: 'Mon, Jun 05, AM',
    description: 'First Week Feedback, Exercise 1d Knowledge Sharing',
    link: 'http://www.youtube.com/watch?v=XcD_bIyymMM',
    notes: 'Skip from 00:57:09 to 01:19:45\nClass Ends 02:34:28',
  },
  {
    date: 'Mon, Jun 05, PM',
    description: 'Exercise 1d Knowledge Sharing, CSS Introduction',
    link: 'http://www.youtube.com/watch?v=3OeRCA30lhU',
    notes: 'Class Ends 03:00:01',
  },
  {
    date: 'Tue, Jun 06, AM',
    description: 'CSS Properties',
    link: 'http://www.youtube.com/watch?v=zEJUAuf3UAw',
    notes: 'Class Ends 02:26:46',
  },
  {
    date: 'Tue, Jun 06, PM',
    description: '(cont) CSS Properties, Practice CSS, Knowledge Sharing, CSS Units',
    link: 'https://www.youtube.com/watch?v=VIalyw2cBew',
    notes: 'Skip from 00:53:32 to 03:00:36\nClass Ends 03:26:49',
  },
  {
    date: 'Wed, Jun 07, AM',
    description: 'Practice CSS Knowledge Sharing, Kahoot Quiz',
    link: 'https://www.youtube.com/watch?v=_nIBA7SLi2M',
    notes: 'Class Ends 02:11:04',
  },
  {
    date: 'Wed, Jun 07, PM',
    description: '(cont) Practice CSS Knowledge Sharing, CSS Flexbox, CSS Code-along',
    link: 'http://www.youtube.com/watch?v=NYb0ohOINTc',
    notes: 'Skip from 02:32:26 to 03:05:13\nClass Ends 04:40:00',
  },
  {
    date: 'Thu, Jun 08, AM',
    description: '(cont) CSS Code-along',
    link: 'http://www.youtube.com/watch?v=69TffkaoFfU',
    notes: 'Class Ends 01:29:44',
  },
  {
    date: 'Thu, Jun 08, PM',
    description: '(cont) CSS Code-along, CSS Animation',
    link: 'http://www.youtube.com/watch?v=UNTiw__xuMk',
    notes: 'Skip from 02:20:24 to 02:56:00\nClass Ends 04:38:24',
  },
  {
    date: 'Fri, Jun 09, AM',
    description: '(cont) CSS Animation, Q&A',
    link: 'http://www.youtube.com/watch?v=JS3paBCDywQ',
    notes: 'Class Ends 02:33:42',
  },
  {
    date: 'Fri, Jun 09, PM',
    description: 'Responsive Web Design, Exercise 1f',
    link: 'http://www.youtube.com/watch?v=KrkrxSwMJ0c',
    notes: 'Class Ends 02:16:46',
  },
  {
    date: 'Tue, Jun 13, AM',
    description: 'Exercise 1f Presentation & Knowledge Sharing',
    link: 'http://www.youtube.com/watch?v=ac9JQMO3vGE',
    notes: 'Class Ends 02:28:14',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'Portfolio Website Sample Creation',
    link: 'https://www.youtube.com/watch?v=gUf98Myzdjo',
    notes: '',
  },
  {
    date: 'Tue, Jun 13, PM',
    description: '(cont) Exercise 1f Presentation, Kahoot Quiz',
    link: 'http://www.youtube.com/watch?v=6jHBmmCNpvQ',
    notes: 'Class Ends 01:48:50',
  },
  {
    date: 'Wed, Jun 14, AM',
    description: 'Coding Tips and Advice, Bootstrap 5 Introduction',
    link: 'http://www.youtube.com/watch?v=2WDAzK_WBt4',
    notes: 'Skip from 01:02:54 to 01:23:30\nClass Ends 02:42:33',
  },
  {
    date: 'Wed, Jun 14, PM',
    description: 'Bootstrap 5 Grid System, Bootstrap 5 Contents',
    link: 'http://www.youtube.com/watch?v=cpCglmAKOuI',
    notes: 'Skip from 00:29:15 to 00:50:50\nSkip from 00:54:15 to 01:00:50\nSkip from 01:02:45 to 01:16:05\nSkip from 01:43:20 to 02:11:39\nClass Ends 03:59:04',
  },
  {
    date: 'Thu, Jun 15, AM',
    description: 'Bootstrap Utilities, Bootstrap Components',
    link: 'http://www.youtube.com/watch?v=wbTz0WngAS0',
    notes: 'Skip from 01:09:32 to 01:32:10\nSkip from 02:00:46 to 02:05:55',
  },
  {
    date: 'Thu, Jun 15, PM',
    description: '(cont) Bootstrap Components, Exercise 1h',
    link: 'http://www.youtube.com/watch?v=oNuMxbKFbn0',
    notes: 'Skip from 02:07:13 to 02:37:14\nClass Ends 03:33:05',
  },
  {
    date: 'Fri, Jun 16, AM',
    description: 'Exercise 1h Code Review',
    link: 'http://www.youtube.com/watch?v=iklLiSF5kPg',
    notes: 'Class Ends 00:40:42',
  },
  {
    date: 'Fri, Jun 16, PM',
    description: 'Bootstrap Forms, Mini Project 1 Proposal',
    link: 'http://www.youtube.com/watch?v=4ddeUE_PqYA',
    notes: 'Class Ends 01:54:20',
  },
  {
    date: 'Mon, Jun 19, AM',
    description: 'Mini Project 1 Proposal Research',
    link: 'http://www.youtube.com/watch?v=8A30E5kKzLY',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'Git and NodeJS Installation, Setup to VS Code',
    link: 'https://www.youtube.com/watch?v=-g8tr3Y7O_8',
    notes: '',
  },
  {
    date: 'Tue, Jun 20, AM',
    description: 'Mini Project 1 Proposal Research Presentation',
    link: 'http://www.youtube.com/watch?v=mOzT5NOo2q0',
    notes: 'Skip from 01:27:21 to 01:43:15',
  },
  {
    date: 'Tue, Jun 20, PM',
    description: 'CLI and Git',
    link: 'http://www.youtube.com/watch?v=C2scjwoi0R4',
    notes: 'Starting 03:40:04, please rewatch the extra materials below instead of this live session',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'Git Initial Setup and Creating / Publishing Git Repository',
    link: 'https://www.youtube.com/watch?v=625kGynJWxc',
    notes: '',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'Improve Public Speaking / Communication Skills by Vinh Giang',
    link: 'https://youtube.com/playlist?list=PLKRkyxRv9DierhLaWEjknnDGtuokcn8QM',
    notes: '',
  },
  {
    date: 'Wed, Jun 21, AM',
    description: 'Git Commands, Deploy / Publish Travel Blog',
    link: 'https://www.youtube.com/watch?v=fn2lpydzU3M',
    notes: 'Skip from 01:55:39 to 02:11:34',
  },
  {
    date: 'Wed, Jun 21, PM',
    description: 'Deploy / Publish Portfolio Website, Initialize Remote Repo for Project 1',
    link: 'http://www.youtube.com/watch?v=bKpE5h3Rpd0',
    notes: 'Class Ends 01:49:00',
  },
  {
    date: 'Thu, Jun 22, AM',
    description: 'Collaboration in Git',
    link: 'https://www.youtube.com/watch?v=QIEowt8ZOyA',
  },
  {
    date: 'Thu, Jun 22, PM',
    description: 'Git Branch, Kahoot Quiz',
    link: 'https://www.youtube.com/watch?v=RAw5ZJe-Gdo',
    notes: 'Class Ends 01:19:00',
  },
  {
    date: 'Fri, Jun 23, AM',
    description: 'Git Commit Tips, Basics of Programming',
    link: 'http://www.youtube.com/watch?v=fnshjilgUe0',
    notes: 'Skip from 01:27:06 to 01:42:40',
  },
  {
    date: 'Fri, Jun 23, PM',
    description: 'Example Basic Algorithms',
    link: 'http://www.youtube.com/watch?v=OgPWY2a6_tI',
    notes: 'Class Ends 02:16:05',
  },
  {
    date: 'Mon, Jun 26, AM',
    description: 'Mini Project 1 Presentation',
    link: 'https://youtube.com/live/4zRr4HvQnwA',
  },
  {
    date: 'Mon, Jun 26, PM',
    description: 'Mini Project 1 Presentation',
    link: 'https://youtube.com/live/_ccIpduWOJ0',
  },
  {
    date: 'Tue, Jun 27, AM',
    description: 'Mini Project 1 Retrospective, Example Basic Algorithms',
    link: 'https://youtube.com/live/M-v4uyd6A-Q',
  },
  {
    date: 'Tue, Jun 27, PM',
    description: 'Example Basic Algorithms with Loops and Arrays',
    link: 'https://youtube.com/live/hbjqhqlv0Ys',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'Algorithm Problem 10 Flowchart',
    link: 'https://www.youtube.com/watch?v=UrMBJ1RlXUw',
    notes: '',
  },
  {
    date: 'Thu, Jun 29, AM',
    description: 'MP1 Presentation (Part 2), Algorithm Problem 11 & 12 Exercise',
    link: 'http://www.youtube.com/watch?v=oKCsQFad8Wc',
    notes: 'Skip from 00:15:42 to 00:33:28\nClass Ends 00:42:03',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'Algorithm Problem 1-12 Solutions',
    link: 'https://klanezurbano.github.io/wd73-student-list/problems.html',
    notes: '',
  },
  {
    date: 'Thu, Jun 29, PM',
    description: '(cont) Introduction to JavaScript, JavaScript Operators',
    link: 'http://www.youtube.com/watch?v=U9pchU-w-Ug',
    notes: 'Class Starts 00:03:16\nSkip from 02:09:58 to 02:43:38',
  },
  {
    date: 'Fri, Jun 30, AM',
    description: '(cont) JavaScript Operators, JavaScript Functions',
    link: 'https://youtube.com/live/t0wjshQWQME',
    notes: 'Skip from 01:47:24 to 02:04:19',
  },
  {
    date: 'Fri, Jun 30, PM',
    description: '(cont) JavaScript Functions, Conditional Statements, Exercise 2b',
    link: 'http://www.youtube.com/watch?v=2JIcdmdmfrM',
    notes: 'Skip from 02:11:03 to 02:42:50\nClass Ends 03:29:40',
  },
  {
    date: 'Mon, Jul 03, AM',
    description: 'Exercise 2b solution, One-on-one Consultation',
    link: 'https://us06web.zoom.us/rec/share/aZrcEbqfgNypqSdLbRTCdziNOfETVsEcRL8jvvpjsaO7d7_fvPAxW0TSiURPKjQ.QpxfiKW5CAX_TWo-',
    notes: 'Passcode: 8^nm+k5=\nClass Ends 00:46:55',
  },
  {
    date: 'Mon, Jul 03, PM',
    description: 'JavaScript Loops, Exercise 2c',
    link: 'https://us06web.zoom.us/rec/share/1IabVKWHMKnN3j1QT4GuInv7HxHqwZWzT9M4Igrl7Xi9tyZd3aajBvzTNe4mqX3o.GalznHokEDIij8y7',
    notes: 'Passcode: F&nX^w6@\nSkip from 01:55:25 to 02:26:09',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'Exercise 2c Solution Explanation',
    link: 'https://www.youtube.com/watch?v=N-v8BqK8r2c',
    notes: '',
  },
  {
    date: 'Tue, Jul 04, AM',
    description: '(cont) JavaScript Loops, JS Array and Object Manipulation',
    link: 'https://us06web.zoom.us/rec/share/8L2xoWI8lzLHCefUHCXxpBkR_razct5G9v2teM50SC8R2f4FaS4uOI5rj_wBBOlc.Za4omQM5H3RT7c8n',
    notes: 'Passcode: u!0mBVlF\nSkip from 01:03:25 to 01:46:03\nClass Ends 02:40:07',
  },
  {
    date: 'Tue, Jul 04, PM',
    description: '(cont) JS Array and Object Manipulation, Exercise 2d',
    link: 'https://www.youtube.com/watch?v=NmJKXft851M',
  },
  {
    date: 'Wed, Jul 05, AM',
    description: 'Exercise 2d Solution, JS DOM',
    link: 'https://us06web.zoom.us/rec/share/yIQUPI38VhVRSYMTsA1DnXP1hobd24_T3ImVNFF7GugAmZ5Tr7MvjqOGVUd1NB-s.KL02C1ptGNnwzDyN',
    notes: 'Passcode: =&kRa7hb',
  },
  {
    date: 'Wed, Jul 05, PM',
    description: '(cont) JS DOM',
    link: 'https://us06web.zoom.us/rec/share/7n5v3b0272ttYuqpr3Y6fvlO5kifLvQhebwxV65qrWBSBJEgji2itAmCJzYpwdnQ.NGncFAigW__-kJWo',
    notes: 'Passcode: @Xb.8Co6',
  },
  {
    date: 'Thu, Jul 06, AM',
    description: 'JS DOM Knowledge Sharing',
    link: 'https://us06web.zoom.us/rec/share/6QRKsXpB2AGKU3MXf7yUNgwRmdD4PbwN8uT1ypK4JdeADQlOdmDunTkwkz_RGVdt.oRWuLR-nTxD1wAlR',
    notes: 'Passcode: 82qjH2b@',
  },
  {
    date: 'Thu, Jul 06, PM',
    description: 'Web API (History, Storage)',
    link: 'https://us06web.zoom.us/rec/share/wO_i9aiSRudIuEQVaJu-3pRKKXRPIy23wVQoodgErUD3Te465TWSNFd3wQpWPAhS.umMhnkl9r75fRZcP',
    notes: 'Passcode: 0wzvb&p0',
  },
  {
    date: 'Fri, Jul 07, AM',
    description: 'Web API (Geolocation)',
    link: 'https://www.youtube.com/watch?v=gufw0juKIQ8',
  },
  {
    date: 'Fri, Jul 07, PM',
    description: 'Web API (Fetch, 3rd Party APIs)',
    link: 'https://www.youtube.com/watch?v=LbBX42WHgyI',
  },
  {
    date: 'Mon, Jul 10, AM',
    description: 'Tic-Tac-Toe Presentation, Kahoot Quiz',
    link: 'http://www.youtube.com/watch?v=h80Q1UcJu1Y',
    notes: 'Skip from 01:20:42 to 01:36:30',
  },
  {
    date: 'Mon, Jul 10, PM',
    description: 'Mini Project 2 Proposal Research',
    link: 'https://youtube.com/live/HNWoq1zbrfo',
    notes: 'Class Ends 00:43:28',
  },
  {
    date: 'Tue, Jul 11, AM',
    description: 'Mini Project 2 Proposal Research Presentation',
    link: 'http://www.youtube.com/watch?v=qKt4ATOVQpU',
    notes: 'Skip from 00:55:03 to 01:12:10\nClass Ends 02:27:55',
  },
  {
    date: 'Tue, Jul 11, PM',
    description: 'setTimeout, setInterval, sort, innerHTML, Postman',
    link: 'http://www.youtube.com/watch?v=VVnf4bv7-CM',
    notes: 'Class Ends 01:45:46',
  },
  {
    date: 'Wed, Jul 12, AM',
    description: 'JavaScript ES6 and Asynchronous Programming',
    link: 'http://www.youtube.com/watch?v=_JztMN-E1BE',
    notes: 'Skip from 01:12:20 to 01:34:11\nClass Ends 02:01:20',
  },
  {
    date: 'Wed, Jul 12, PM',
    description: 'Project Management',
    link: 'http://www.youtube.com/watch?v=c86z6rUiX2s',
    notes: 'Class Ends 00:17:07',
  },
  {
    date: 'Thu, Jul 13, AM',
    description: 'Recap Git Branching, NodeJS Introduction',
    link: 'http://www.youtube.com/watch?v=hDbfi3DFPm0',
    notes: 'Class Ends 02:39:02',
  },
  {
    date: 'Thu, Jul 13, PM',
    description: 'Bootstrap Custom Styling',
    link: 'https://us06web.zoom.us/rec/share/7W7Nm7CIrnAM5Psu3b8qp2kz3NfOy6-ROYg1me4HXXZi-kfKkL64bPeyjThvIgDA.QG8lM8FqeF2oVjnD',
    notes: 'Passcode: *2rD+DR?\nClass Ends 01:28:57',
  },
  {
    date: 'Fri, Jul 14, AM',
    description: 'url params, ReactJS Introduction',
    link: 'http://www.youtube.com/watch?v=7RBjIjl9Kdw',
    notes: 'Skip from 01:38:21 to 01:54:44',
  },
  {
    date: 'Fri, Jul 14, PM',
    description: '(cont) ReactJS Introduction',
    link: 'http://www.youtube.com/watch?v=4_BEqD8dKJg',
    notes: 'Class Ends 01:38:15',
  },
  {
    date: 'Mon, Jul 17, AM',
    description: 'Mini Project 2 Reminders, Vercel Deployment',
    link: 'https://www.youtube.com/watch?v=CtK4dt3PNUo',
    notes: 'Class Ends 00:44:22',
  },
  {
    date: 'Mon, Jul 17, PM',
    description: 'Mini Project 2 Coding / ReactJS Catch-up',
    link: 'https://www.youtube.com/watch?v=bJh7OXEwakE',
    notes: 'No Class discussion',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'Data Structures and Algorithms',
    link: 'https://www.youtube.com/watch?v=ntfmTlBQgtU',
  },
  {
    date: 'Tue, Jul 18, AM',
    description: 'Git Rebase and Merge, ReactJS Setup with Vite, ReactJS Components',
    link: 'https://www.youtube.com/watch?v=mhNu8xommeM',
    notes: 'Class Ends 02:36:46',
  },
  {
    date: 'Tue, Jul 18, PM',
    description: 'ReactJS Props and Data Rendering, Exercise 2g',
    link: 'http://www.youtube.com/watch?v=0fjKIsYqP2E',
    notes: 'Class Ends 02:16:40',
  },
  {
    date: 'Wed, Jul 19, AM',
    description: 'Exercise 2g Solution, ReactJS Event Handler and State Management',
    link: 'http://www.youtube.com/watch?v=ueDTthuaP6U',
  },
  {
    date: 'Wed, Jul 19, PM',
    description: '(cont) ReactJS State Management, Todo App Code-along',
    link: 'http://www.youtube.com/watch?v=CM8b9olhidY',
    notes: 'Skip from 00:56:11 to 01:11:32',
  },
  {
    date: 'Thu, Jul 20, AM',
    description: 'ReactJS Recap (E-commerce)',
    link: 'http://www.youtube.com/watch?v=daAm_lw-3Kc',
    notes: 'Class Ends 02:39:38',
  },
  {
    date: 'Thu, Jul 20, PM',
    description: 'ReactJS Route Management, Exercise 2h',
    link: 'http://www.youtube.com/watch?v=TlbSYUYMVGY',
    notes: 'Class Ends 01:38:20',
  },
  {
    date: 'Fri, Jul 21, AM',
    description: 'ReactJS Context API',
    link: 'http://www.youtube.com/watch?v=Bvp7jtwNI_E',
  },
  {
    date: 'Fri, Jul 21, PM',
    description: 'ReactJS Redux',
    link: 'http://www.youtube.com/watch?v=F7xgOYxGvYA',
    notes: 'Skip from 02:25:43 to 02:56:14 (accidentally shared my screen during breaktime, don\'t mind it)',
  },
  {
    date: 'Mon, Jul 24, AM',
    description: 'Mini Project 2 Presentation',
    link: 'https://youtube.com/live/bIqDGa4CG6w',
  },
  {
    date: 'Mon, Jul 24, PM',
    description: 'Mini Project 2 Presentation',
    link: 'http://www.youtube.com/watch?v=cqxuhcIHAOM',
  },
  {
    date: 'Tue, Jul 25, AM',
    description: 'Mini Project 2 Retrospective, coding advices, utilizing data from fetch, copying array and object',
    link: 'http://www.youtube.com/watch?v=M1wzmP_WW6g',
  },
  {
    date: 'Tue, Jul 25, PM',
    description: 'Exercise 2h',
    notes: 'No recording since there are no class discussion',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 1 - React Router',
    link: 'https://youtu.be/6YIgE0Fr-b8',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 2 - Local State',
    link: 'https://youtu.be/iJsP5w8Rf-4',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 3 - Route Params',
    link: 'https://youtu.be/NeII-9DTHX0',
    notes: '- undefined error you might encounter on 11th min, see fix on 15th min',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 4 - Redux (Global State)',
    link: 'https://youtu.be/EphTLKsrpTI',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 5 - Featured Product and Loading Spinner',
    link: 'https://youtu.be/icOsoeB0ij4',
  },
  {
    date: 'Wed, Jul 26, AM',
    description: 'ReactJS One-on-one Consultation',
    link: 'http://www.youtube.com/watch?v=HCuehPoAgq8',
  },
  {
    date: 'Wed, Jul 26, PM',
    description: 'ReactJS One-on-one Consultation (and frustration rants hehe)',
    link: 'http://www.youtube.com/watch?v=TiLZoBz6RB8',
    notes: '- Kodego announcement 00:29:00-00:43:00\n- Recap local and global state 01:02:00 to 01:44:30\n- Recap useEffect 02:23:50 to 02:32:50\n- Tips and advice for writing better code and debugging 03:01:54 to 03:27:50',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 6 - Navbar active and Page not found',
    link: 'https://youtu.be/5XjOjUNk33w',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 7a - Favorite Meals',
    link: 'https://youtu.be/CGrGMyvWn64',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 7b - Favorite Meals',
    link: 'https://youtu.be/RlVVqZ4cko8',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 8 - Redux Persist',
    link: 'https://youtu.be/tM3RJ9P3PTI',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 9a - Formik',
    link: 'https://youtu.be/3QRvuS4cgAE',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 9b - Yup',
    link: 'https://youtu.be/Pc8KjlT4Gsg',
  },
  {
    date: 'Thu, Jul 27, AM',
    description: 'ReactJS self-paced learning (DISHcovery)',
    link: 'http://www.youtube.com/watch?v=eRWaqAS1BVI',
    notes: 'Instructions provided during first 30mins of class',
  },
  {
    date: 'Thu, Jul 27, PM',
    description: 'ReactJS self-paced learning (DISHcovery)',
    link: 'http://www.youtube.com/watch?v=_jYKOGY61pk',
    notes: '- route param explanation 00:50:00 - 00:58:00',
  },
  {
    date: 'Fri, Jul 28, AM',
    description: 'Introduction to Database',
    link: 'https://youtube.com/live/yEoAGsYJT6c',
    notes: 'Skip from 01:23:50 to 01:43:25\nClass ends 02:08:36',
  },
  {
    date: 'Fri, Jul 28, PM',
    description: 'Entity Relationship Diagram, Initial Capstone Proposal',
    link: 'https://youtube.com/live/mKkpEm4zFeo',
    notes: 'Class ends 01:55:08',
  },
  {
    date: 'Mon, Jul 31, AM',
    description: 'Structured Query Language (SQL)',
    link: 'https://youtube.com/live/9tjsnbUvuVY',
    notes: 'Skip from 01:21:24 to 01:37:03\nClass ends 02:16:42',
  },
  {
    date: 'Mon, Jul 31, PM',
    description: 'Capstone Project Grouping',
    link: 'http://www.youtube.com/watch?v=wWnB_VCyMlU',
    notes: 'Class ends 00:45:55',
  },

  {
    date: 'Tue, Aug 01, AM',
    description: 'Capstone Project Advice, PHP Introduction',
    link: 'https://youtube.com/live/DtlghkW3CtI',
    notes: 'Skip from 01:35:10 to 01:45:55',
  },
  {
    date: 'Tue, Aug 01, PM',
    description: '(cont) PHP Introduction, Exercise 3a',
    link: 'http://www.youtube.com/watch?v=A4gZUrPYZa4',
    notes: 'Class ends 00:54:50',
  },
  {
    date: 'Wed, Aug 02, AM',
    description: 'Object-Oriented Programming in PHP',
    link: 'https://www.youtube.com/watch?v=M1ksT4Sv5HI',
    notes: 'Class starts 00:38:32',
  },
  {
    date: 'Wed, Aug 02, PM',
    description: '(cont) OOP in PHP, REST API',
    link: 'https://youtube.com/live/YE09Q-QaHfw',
  },
  {
    date: 'Thu, Aug 03, AM',
    description: 'Capstone Project Consultation, REST API',
    link: 'https://us06web.zoom.us/rec/share/00Tyazt1MVyRLInMlzizPcPEkMVbkjwfUJKO8kJ3N6ovjUAOob_qYb1Q-Uo3ZGA_.AA1bK5XBdjOnlFHt',
    notes: 'Passcode: cECMJo1#\n- sample API requests and responses 01:20:03\nClass ends 01:55:36',
  },
  {
    date: 'Thu, Aug 03, PM',
    description: 'Capstone Project Consultation',
    link: 'http://www.youtube.com/watch?v=Cs3NKPk2TtE',
    notes: 'NO DISCUSSION',
  },
  {
    date: 'Fri, Aug 04, AM',
    description: 'PHP with MySQL',
    link: 'http://www.youtube.com/watch?v=n7C_tP1AufY',
    notes: 'Skip from 01:28:09 to 01:44:03',
  },
  {
    date: 'Fri, Aug 04, PM',
    description: '(cont) PHP with MySQL',
    link: 'http://www.youtube.com/watch?v=R3ErwAFr9ww',
    notes: 'Skip from 02:21:46 to 02:53:15',
  },
  {
    date: 'Mon, Aug 07, AM',
    description: 'Laravel Introduction, Capstone Project Consultation',
    link: 'http://www.youtube.com/watch?v=FqbSNAME3So',
    notes: 'Class ends 01:29:10',
  },
  {
    date: 'Mon, Aug 07, PM',
    description: 'Capstone Project Consultation',
    link: 'http://www.youtube.com/watch?v=BUAPvsoXJFw',
    notes: 'NO DISCUSSION',
  },
  {
    date: 'Tue, Aug 08, AM',
    description: 'Capstone Project Consultation',
    link: 'http://www.youtube.com/watch?v=wHMVRbr1ioE',
    notes: 'NO DISCUSSION',
  },
  {
    date: 'Tue, Aug 08, PM',
    description: 'Laravel Database Migration',
    link: 'http://www.youtube.com/watch?v=fuhDPVc6J4U',
    notes: 'Skip from 02:07:07 to 02:17:33\nSkip from 02:22:37 to 03:07:40\nClass ends 03:27:00',
  },
  {
    date: 'Wed, Aug 09, AM',
    description: 'Laravel Database Seeding',
    link: 'https://youtube.com/live/IOYMAZ9VMKw',
    notes: 'Skip from 01:03:25 to 01:24:28\nSkip from 01:33:57 to 01:38:34\nClass ends 02:28:58',
  },
  {
    date: 'Wed, Aug 09, PM',
    description: '(cont) Laravel Database Seeding',
    link: 'http://www.youtube.com/watch?v=wptCLcOuCeM',
    notes: 'Class ends 00:34:37',
  },
  {
    date: 'Thu, Aug 10, AM',
    description: 'Laravel Routes and Controllers',
    link: 'https://www.youtube.com/watch?v=EbxL5BaQ1as',
    notes: 'Skip from 00:56:35 to 01:12:10',
  },
  {
    date: 'Thu, Aug 10, PM',
    description: 'GET routes and transforming data to json',
    link: 'https://www.youtube.com/watch?v=1ioQX_5-1a8',
    notes: 'Skip from 01:11:34 to 01:37:20\nSkip from 02:10:20 to 03:11:30\nClass ends 03:29:20',
  },
  {
    date: 'Fri, Aug 11, AM',
    description: 'Capstone Project Progress',
    link: 'https://youtube.com/live/HsU8owKvS1o',
    notes: 'Class ends 01:22:47',
  },
  {
    date: 'Fri, Aug 11, PM',
    description: 'POST, PATCH, DELETE routes',
    link: 'http://www.youtube.com/watch?v=JxwNbeK2k2c',
    notes: 'Skip from 01:44:57 to 02:12:06\nSkip from 03:01:20 to 03:27:05',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 10 - Wireframes and ERD',
    link: 'https://youtu.be/13otDIoVPP0',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 11a - Migration',
    link: 'https://youtu.be/1sYZKapgk-4',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 11b - Seeder',
    link: 'https://youtu.be/wqT2b2wzVwU',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 12a - GET routes',
    link: 'https://youtu.be/-i7uV5sJBZM',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 12b - POST, PATCH, DELETE routes',
    link: 'https://youtu.be/8G96pA8GLew',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 13 - Relationships',
    link: 'https://youtu.be/H_zRx-OHWpo',
  },
  {
    date: 'Wed, Aug 16, AM',
    description: 'Web Progress Poll',
    link: 'http://www.youtube.com/watch?v=ojpBaCxGhvM',
  },
  {
    date: 'Thu, Aug 17, AM',
    description: 'Web Progress Checking',
    link: 'http://www.youtube.com/watch?v=H0v6CMVoJzE',
  },
  {
    date: 'Fri, Aug 18, AM',
    description: 'Keep Track Schedule',
    link: 'https://www.youtube.com/watch?v=ljb7cSNEOVk',
  },
  {
    date: 'Fri, Aug 18, PM',
    description: 'Code Updates',
    link: 'https://www.youtube.com/watch?v=iB2CUvRcJW4',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 14 - Frontend-Backend API Integration',
    link: 'https://youtu.be/84Jc99qFj8o',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 15a - Laravel Photo Upload',
    link: 'https://drive.google.com/file/d/10DA8ANR2PtfBVflEVdL0fnhsSF3-7bB_/view?usp=sharing',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 15b - ReactJS Photo Upload, Laravel Delete Constraints',
    link: 'https://drive.google.com/file/d/1dnItXbDfubeC7FzbVbnjFz4fs2IiPr5c/view?usp=sharing',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 16 - Laravel Auth',
    link: 'https://drive.google.com/file/d/1pjx3tE4IsLR8N6UnK0IgUtUGbg_7a642/view?usp=sharing',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 17a - ReactJS Protected Component',
    link: 'https://drive.google.com/file/d/1T7HFWYQt1lfgs2QHmPg0BrL2FhBc__v8/view?usp=sharing',
  },
  {
    date: 'EXTRA MATERIALS',
    description: 'DISHcovery Part 17b - ReactJS Protected Component',
    link: 'https://drive.google.com/file/d/1_t2Iw37omNcxvJzti1oe7HPS9wOhA_cV/view?usp=sharing',
    notes: 'Additional note: Since the token is already saved in loggedInUser state, you can use that token on axios requests',
  },
  {
    date: 'Tue, Aug 22, PM',
    description: 'Mock Presentation',
    link: 'http://www.youtube.com/watch?v=d1pApahCDCU',
  },
  {
    date: 'Wed, Aug 23, AM',
    description: 'Capstone Presentation',
    link: 'https://www.youtube.com/watch?v=I-ZHpcHADhE',
  },
  {
    date: 'Wed, Aug 23, PM',
    description: 'Capstone Presentation',
    link: 'https://youtube.com/live/vhUtVgye_14',
  },
];









const ClassRecording = () => {
  return (
    <div className="app">
      <h1>Class Recording Compilation</h1>
      <table className="class-record">
        <thead>
          <tr>
            <th>No.</th>
            <th>Date</th>
            <th>Description</th>
            <th>Link</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((record, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{record.date}</td>
              <td>{record.description}</td>
              <td>
                <a
                  href={record.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  <FontAwesomeIcon icon={faVideo} /> Watch
                </a>
              </td>
              <td>{record.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassRecording;
