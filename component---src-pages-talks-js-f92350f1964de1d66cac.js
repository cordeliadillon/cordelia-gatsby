(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+SGB":function(e,t,i){"use strict";i.r(t);var a=i("q1tI"),n=i.n(a),s=i("9eSz"),c=i.n(s),r=i("DTi0"),l=i("Bl7J"),o=function(e){var t=e.header,i=e.level,a=e.children;return n.a.createElement("section",null,n.a.createElement("h2",{className:"f3","aria-level":i},t),a)},m=i("vrFN"),d=i("eL2I"),p=i.n(d),h=i("lA8z"),u=i.n(h),f=function(e){var t=e.talk;return n.a.createElement("div",null,n.a.createElement("h3",{className:"mb0 f4",id:t.id},t.title),n.a.createElement("p",{className:"mv0 f4"},t.eventDate," at "," ",t.eventHref?n.a.createElement("a",{href:t.eventHref},t.eventName):n.a.createElement("span",null,t.eventName)),n.a.createElement("p",{className:"mv0"},t.blurb),t.links?t.links.map((function(e,i){return n.a.createElement("span",{key:i},i>0?n.a.createElement("span",{"aria-hidden":"true",className:"b ph2"},"·"):null,n.a.createElement("a",{href:e.href,key:i,"aria-describedby":t.id},e.name))})):null,n.a.createElement("div",null,"Tags: ",t.tags.join(", ")))},g=function(e){var t=e.data;if(t.frontmatter.photoSrc){var i=n.a.createElement(c.a,{alt:t.frontmatter.photoAlt,className:"rounded",fluid:Object.assign({},t.frontmatter.photoSrc.childImageSharp.fluid,{aspectRatio:1.5})});return t.frontmatter.photoCredit?n.a.createElement("figure",{className:"ma0 pa0"},i,n.a.createElement("figcaption",{className:"f6 i pv2"},t.frontmatter.photoCaption," (Photo credit:"," ",n.a.createElement("a",{href:t.frontmatter.photoCreditLink},t.frontmatter.photoCredit),")")):n.a.createElement("figure",{className:"ma0 pa0"},i,n.a.createElement("figcaption",{className:"f6 i pv2"},t.frontmatter.photoCaption))}return null},v=function(e){var t=e.data;return n.a.createElement("article",{className:"mb4"},n.a.createElement(r.b,{columns:"2fr 3fr"},n.a.createElement(r.a,null,n.a.createElement("h3",{className:"mt0 f4"},t.frontmatter.title),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})),n.a.createElement(r.a,null,n.a.createElement(g,{data:t}))))};t.default=function(e){var t=e.data;return n.a.createElement(l.a,null,n.a.createElement(m.a,{title:"Talks"}),n.a.createElement("h1",{className:"ma0 pa0 f1"},"Talks"),n.a.createElement(r.b,{columns:"3fr 2fr"},n.a.createElement(r.a,null,n.a.createElement("p",null,"As an introvert who has grappled with social anxiety since a young age, I never would have thought I'd enjoy public speaking as much as I do. But when I'm passionate about something, I ",n.a.createElement("em",null,"need")," to share it. I'm passionate about accessibility, inclusive design, digital literacy, and technology that adapts as we age, and I don't think these topics are talked about enough in mainstream tech spheres. By speaking with larger audiences, I hope other people will become passionate about them, too."),n.a.createElement(o,{header:"Upcoming"},n.a.createElement("p",null,"Nothing I can announce yet, but stay tuned. If you'd like me to speak at your company or conference, let's chat!"))),n.a.createElement(r.a,null,n.a.createElement("img",{className:"rounded illustration",src:p.a,alt:"Illustrated Cordelia pointing enthusiastically \n              at the words 'Public Speaking' on a stand-up \n              projector screen"}))),n.a.createElement(o,{header:"Highlights"},t.allMarkdownRemark.edges.map((function(e,t){return n.a.createElement(v,{key:t,data:e.node})}))),n.a.createElement(o,{header:"Past Talks"},n.a.createElement("ul",{className:"list pa0 ma0 cf"},u.a.pastTalks.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement(f,{talk:e}))})))))}},DTi0:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return l}));var a=i("q1tI"),n=i.n(a),s=i("MX0m"),c=i.n(s),r=function(e){var t=e.children,i=e.columns,a=(e.flipFlop,i||"repeat("+t.length+", 1fr)");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:c.a.dynamic([["2775531688",[a]]])+" grid"},t),n.a.createElement(c.a,{id:"2775531688",dynamic:[a]},["div.__jsx-style-dynamic-selector{display:grid;grid-template-columns:"+a+";grid-gap:2rem 2rem;}","@media (max-width:850px){div.__jsx-style-dynamic-selector{grid-template-columns:1fr;}}"]))},l=function(e){var t=e.children;return n.a.createElement("div",null,t)}},eL2I:function(e,t,i){e.exports=i.p+"static/cordelia--public-speaking-063e943596d454ff5bcff76cd4868bab.jpg"},lA8z:function(e,t){e.exports={upcomingTalks:[],pastTalks:[{id:"050323",title:"Designing Flexible, Accessible UIs",eventDate:"May 5th, 2023",eventName:"Microsoft Accessibility Innovation: Digital Inclusion of Older Adults Workshop",tags:["Accessibility","Panel","Senior Citizens","User Experience"]},{id:"050622",title:"Panel: Comics Accessibility",eventDate:"May 6th, 2022",eventName:"Electric Squeak Issue 2 Launch Party",eventHref:"https://electricsqueak.com/",tags:["Accessibility","Comics","Panel"]},{id:"042920",title:"Panel: Journeys into Digital Accessibility",eventDate:"April 29th, 2020",eventName:"Bay Area Accessibility and Inclusive Design Meetup",eventHref:"https://www.meetup.com/a11ybay/events/270204474/",tags:["Accessibility","Career","Panel"]},{id:"042820",title:"AXSChat",eventDate:"April 28th, 2020",eventName:"AXSChat",eventHref:"https://www.axschat.com/cordelia-mcgee-tubb/",tags:["Accessibility","Interview"],links:[{name:"#AXSChat Twitter Discussion",href:"https://twitter.com/search?q=(%23AXSChat)%20until%3A2020-04-29%20since%3A2020-04-27&src=typed_query"},{name:"Interview",href:"https://www.axschat.com/cordelia-mcgee-tubb/"}]},{id:"112019",title:"Keyboard Navigation: Where Productivity Meets Accessibility",eventDate:"November 20th, 2019",eventName:"Dreamforce",eventHref:"https://www.salesforce.com/dreamforce/",tags:["Accessibility","Productivity","Salesforce"],links:[{name:"Abstract",href:"https://success.salesforce.com/sessions?eventId=a1Q3A000021ea1UUAQ#/session/a2q3A000002BJNgQAO"}]},{id:"102419",title:"Co-hosting with Eric Bailey",eventDate:"October 24-25th, 2019",eventName:"#a11yTOConf",eventHref:"https://conf.a11yto.com/",tags:["Accessibility","Hosting"]},{id:"051419",title:"Panel: How the Giants of Tech are making accessibility a mainstream issue",eventDate:"May 14th, 2019",eventName:"Benchmarking Digital Inclusion to Drive a Better Digital World",eventHref:"https://www.eventbrite.com/e/benchmarking-digital-inclusion-to-drive-a-better-digital-world-registration-58851121288#",tags:["Accessibility","Process","Salesforce"],links:[{name:"Video",href:"https://embed.vidyard.com/share/8dWsVEZkRTdtYkLELF81FS"}]},{id:"041219",title:"Episode 30 - El Deafo",eventDate:"April 12th, 2019",eventName:"Pop Whiz Bang! Podcast",eventHref:"https://soundcloud.com/pwbpod/popwhizbang-episode-30-el-deafo",tags:["Accessibility","Comics"],links:[{name:"Audio",href:"https://soundcloud.com/pwbpod/popwhizbang-episode-30-el-deafo"},{name:"Transcript",href:"https://cordeliadillon.github.io/transcripts/Pop_Whiz_Bang__Episode-30"}]},{id:"040519",title:"Episode 29 - Accessibility in Comics",eventDate:"April 5th, 2019",eventName:"Pop Whiz Bang! Podcast",eventHref:"https://soundcloud.com/pwbpod/popwhizbang-episode-29-accessbility-in-comics",tags:["Accessibility","Comics"],links:[{name:"Audio",href:"https://soundcloud.com/pwbpod/popwhizbang-episode-29-accessbility-in-comics"},{name:"Transcript",href:"https://cordeliadillon.github.io/transcripts/Pop_Whiz_Bang__Episode-29"}]},{id:"0302",title:"Panel: Rise Up, Reach Back",eventDate:"March 2nd, 2019",eventName:"Women Techmakers 2019",eventHref:"https://www.womentechmakers.com/iwd19/google-mountain-view-19",location:"Mountain View",tags:["Accessibility","Career","Women in Tech"],links:[{name:"Video",href:"https://www.youtube.com/watch?v=LFq-a2UAYDc"}]},{id:"0219",title:"Lightning Talk",eventDate:"February 23rd, 2019",eventName:"World IA Day 2019",eventHref:"https://generalassemb.ly/education/world-ia-day-2019-design-for-difference/san-francisco/69704",location:"San Francisco",tags:["Universal Design","User Experience"]},{id:"1018",title:"Everything I learned about interaction design I learned in the senior center computer lab",eventDate:"October 2018",eventName:"#a11yTOConf",eventHref:"http://conf.a11yto.com/talks#everything-i-learned-about-interaction-design",location:"Toronto",tags:["Universal Design","User Experience"]},{id:"092518",title:"Inclusive Design in Practice",eventDate:"September 2018",eventName:"World Interaction Design Day",eventHref:"https://www.eventbrite.com/e/inclusive-design-in-practice-tickets-48506684800",location:"San Francisco",tags:["Inclusive Design","Universal Design"],links:[{name:"Event",href:"https://www.eventbrite.com/e/inclusive-design-in-practice-tickets-48506684800"}]},{id:"032318",title:"Major Patterns for Accessible Drag & Drop",eventDate:"March 2018",eventName:"CSUN",eventHref:"http://www.csun.edu/cod/conference/2018/sessions/index.php/",location:"San Diego",tags:["Accessibility","Universal Design"],links:[{name:"Abstract",href:"http://www.csun.edu/cod/conference/2018/sessions/index.php/public/presentations/view/167"},{name:"Slideshare",href:"https://www.slideshare.net/JesseHausler/major-patterns-for-accessible-drag-and-drop"}]},{id:"102117",title:"Panel: Secret sauce of successful accessibility squads",eventDate:"October 2017",eventName:"Accessibility Camp Bay Area",eventHref:"http://www.accessibilitycampbay.org/2017talks.php",location:"San Francisco",tags:["Panel Moderator","Accessibility","Process"]},{id:"092117",title:"Panel: Secret sauce of successful accessibility squads",eventDate:"September 2017",eventName:"Bay Area Accessibility and Inclusive Design Meetup",eventHref:"https://www.meetup.com/a11ybay/events/243136425/",location:"San Francisco",tags:["Panel Moderator","Accessibility","Process"]},{id:"091417",title:"Workshop: Universal Design for the Web",eventDate:"September 2017",eventName:"A11y Camp Sydney",eventHref:"https://www.eventbrite.com.au/e/a11y-camp-2017-workshops-tickets-36529511753",location:"Sydney",tags:["Accessibility","Universal Design","Web Design"]},{id:"091317",title:"The Great Accessibility Bake Off",eventDate:"September 2017",eventName:"A11y Camp Sydney",eventHref:"http://a11ybytes.org/a11y-camp-schedule/",location:"Sydney",tags:["Accessibility","Web Development","User Experience"]},{id:"060917",title:"Accessible Comics!!!",eventDate:"June 2017",eventName:"Inclusive Design 24 (#ID24)",eventHref:"http://www.inclusivedesign24.org/",tags:["Accessibility","Comics"],links:[{name:"Video",href:"https://www.youtube.com/watch?v=zsQcOV0dZew&list=PL95LOQw9SLWwqX2xoYidVO2YA7gknhmcx&index=1"},{name:"SlideShare",href:"https://www.slideshare.net/cordeliadillon/accessible-comics-id24"},{name:"Google Slides",href:"https://docs.google.com/presentation/d/1bXAK4-T7EnAWxe-kavSk0klJXv1uxKK-_qPa8FSs_ew/pub?start=false&loop=false&delayms=60000"}]},{id:"051617",title:"Designing the Web for Senior Citizens",eventDate:"May 2017",eventName:"Accessibility on the JAMstack",eventHref:"https://www.meetup.com/jamstack-sf/events/239577043/",tags:["Accessibility","User Experience","Universal Design","Senior Citizens"],links:[{name:"Video",href:"https://www.youtube.com/watch?v=Pe-JOADSYY8"}]},{id:"050517",title:"The Great Accessibility Bake Off",eventDate:"May 2017",eventName:"Respond 17",eventHref:"http://www.webdirections.org/respond/schedule.html",location:"Sydney & Melbourne",tags:["Accessibility","Web Development","User Experience"],links:[{name:"Abstract",href:"http://www.webdirections.org/respond/speakers/cordelia-mcgee-tubbs.html"},{name:"SlideShare",href:"https://www.slideshare.net/cordeliadillon/the-great-accessibility-bake-off"},{name:"Recap",href:"http://weblog.200ok.com.au/2017/05/respond17-big-stonking-post.html#corderliamgceetubb"},{name:"Sketch Notes",href:"https://twitter.com/SketchVideo/status/861726031748579328"}]},{id:"040417",title:"Illustrating the point: How to use images as an effective communication tool",eventDate:"April 2017",eventName:"Funka Accessibility Days",eventHref:"http://www.funka.com/en/we-offer/funka-accessibility-days/program/",location:"Stockholm",tags:["Accessibility","Universal Design","Comics","Illustration"],links:[{name:"SlideShare",href:"https://www.slideshare.net/cordeliadillon/illustrating-the-point-images-as-effective-communication-tools"},{name:"Slides (PDF)",href:"https://www.funka.com/contentassets/fb009556bdd7475b957f99cf8600c674/illustrating-the-point-cordelia.pdf"}]},{id:"110516",title:"Panel: Dynamic Comics Readings",eventDate:"November 2016",eventName:"Storytelling Across Media",eventHref:"http://www.comic-con.org/frontpage/sam-program-schedule",tags:["Comics","Storytelling"]},{id:"100516",title:"Designing the Web for Senior Citizens",eventDate:"October 2016",eventName:"WaffleJS",eventHref:"https://wafflejs.com/?day=2016-10-05",tags:["Accessibility","User Experience","Universal Design","Senior Citizens"]},{id:"081016",title:"Designing a Culture of Accessibility",eventDate:"August 2016",eventName:"Design Research Meetup",tags:["Accessibility","Process"]},{id:"051716",title:"Keyboard Navigation",eventDate:"May 2016",eventName:"AIGA Meetup: Efficiency",eventHref:"https://www.eventbrite.com/e/salesforce-ux-efficiency-tickets-25006961495",tags:["Accessibility","Web Development","User Experience"]},{id:"040116",title:"Baking Accessibility In",eventDate:"April 2016",eventName:"Clarity",eventHref:"http://clarityconf.com/",tags:["Accessibility","Design Systems","Component Libraries"],links:[{name:"Abstract",href:"http://lanyrd.com/2016/clarityconf/sdxwbc/"},{name:"Recap",href:"http://bradfrost.com/blog/post/clarity-conf-baking-accessibility-in/"},{name:"Video",href:"https://www.sitepoint.com/premium/courses/clarity-conference-2016-2925"}]},{id:"031115",title:"Accessibility 101 or 'Oh gosh, I've been doing this wrong!'",eventDate:"March 2015",eventName:"The Mixin",eventHref:"http://themixin.eventbrite.com",tags:["Accessibility","Web Development","User Experience"],links:[{name:"Slides (PDF)",href:"http://cordeliadillon.com/talks/TheMixin/accessibility/IveBeenDoingThisWrong.pdf"},{name:"Google Slides",href:"https://docs.google.com/presentation/d/1_-bZnTdCAhj2TqZRjmBM3ZGSkBunS9Pq6SWZbkmwMck/edit"},{name:"Examples",href:"http://archive.cordeliadillon.com/talks/TheMixin/accessibility/index.html"}]},{id:"030515",title:"Accessibility in an Agile World",eventDate:"March 2015",eventName:"CSUN",eventHref:"http://www.csun.edu/cod/conference/",tags:["Accessibility","Process"],links:[{name:"Abstract",href:"http://www.csun.edu/cod/conference/2015/sessions/index.php/public/presentations/view/190"},{name:"SlideShare",href:"http://www.slideshare.net/cordeliadillon/accessibility-inanagileworld-csun2015"},{name:"Slides (PDF)",href:"http://archive.cordeliadillon.com/talks/CSUN2015/AccessibilityInAnAgileWorld-CSUN15.pdf"}]},{id:"021115",title:"Functional Prototyping is Awesome!",eventDate:"February 2015",eventName:"Salesforce Girl Geek Dinner",eventHref:"http://bayareagirlgeekdinners.com/salesforce-girl-geek-dinner-2015/",tags:["Prototyping","User Experience"],links:[{name:"Recap",href:"http://bayareagirlgeekdinners.com/all-events/lucy-dotson-salesforce-girl-geek-dinner-2015/"}]},{id:"040914",title:"Lightning Talk",eventDate:"April 2014",eventName:"Salesforce UX Ignite (Internal)",tags:["Senior Citizens","User Experience"],links:[{name:"Photos",href:"https://propergems.com/ignite/"}]}]}}}]);
//# sourceMappingURL=component---src-pages-talks-js-f92350f1964de1d66cac.js.map