(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RyyV:function(e,t,n){"use strict";function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e){return e.edges?e.edges.map((function(e){return e.node})):e||[]}function l(e){var t={};if(!e.edges)return e||{};if(e.edges[0].node.challenge){for(var n=0;n<e.edges.length;n++)t[e.edges[n].node.id]=e.edges[n].node;return t}}function c(e,t){var n={};if(e.edges&&t.edges)for(var i,l=r(e),c=r(t),o=a(l);!(i=o()).done;){var s=i.value,u=c.filter((function(e){return e.family===s.family})).map((function(e){return e.id}));n[s.family]={family:s.family,familyName:s.familyName,challenges:u||[]}}return n}function o(e,t,n){e[t].associatedTech||(e[t].associatedTech=[]),e[t].associatedTech.includes(n)||e[t].associatedTech.push(n)}n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var s=function(e){return{summary:{title:"Summary",text:e.summary,timetoeffect_optimistic:e.timetoeffect_optimistic,timetoeffect_likely:e.timetoeffect_likely,timetoeffect_pessimistic:e.timetoeffect_pessimistic,exampleApplications:e.example_applications,references:e.references},tabs:[{id:"overview",title:"Overview",content:e.overview},{id:"implicationsDefenceSecurity",title:"Implications for Defence & Security",content:e.implicationsDefenceSecurity},{id:"softwareAndAiRequirements",title:"Software / AI Requirements",content:e.softwareAndAiRequirements},{id:"legalEthicalImplications",title:"Legal/Ethical Implications",content:e.legalEthicalImplications},{id:"strategicImpactAssessment",title:"Strategic DLOD Impact Assessment",content:e.strategicImpactAssessment},{id:"typeOfTechnology",title:"Type of Technology",content:e.typeOfTechnology},{id:"prominentDevelopers",title:"Prominent Developers",content:e.prominentDevelopers}]}}},d0jJ:function(e,t,n){},i1Yk:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n("q1tI"),i=n.n(a),r=n("x+Gp"),l=n("tkFw"),c=function(e){var t=e.titles;return i.a.createElement("thead",null,i.a.createElement("tr",null,Object.keys(t).map((function(e,n){return i.a.createElement("th",{className:"ccl__all-headers ccl__all-headers__"+n,scope:0===n?"col":"row",key:e},i.a.createElement("p",{className:"ccl__all-para"},t[e]))}))))},o=function(e){var t=e.challenges,n=e.families[e.selectedTab].challenges;return i.a.createElement("tbody",null,n.map((function(e){return i.a.createElement("tr",{key:e},Object.keys(t[e]).map((function(n,a){return"id"===n||"family"===n?null:i.a.createElement("td",{key:n,className:"ccl__"+n+"__content ccl__all_table_data",scope:0===a?"col":"row"},t[e][n])})))})))},s=function(e){var t=e.families,n=e.onClickFamilyTab,a=e.selectedTab;return i.a.createElement(i.a.Fragment,null,Object.keys(t).map((function(e){return i.a.createElement("div",{onClick:function(){return n(e)},key:e,className:"ccl__all-family-tabs ccl__family-"+e+" "+(a===e?"ccl__family-selected":"")},t[e].familyName)})))},u=n("RyyV"),m=(n("d0jJ"),n("n3bB"));function f(e){var t=Object(a.useState)("1"),n=t[0],f=t[1],d=e.data.dataJson.challengesLibraryTitles,p=Object(u.c)(e.data.allCognitiveChallengeFamiliesCsv,e.data.allCognitiveChallengesCsv),y=Object(u.d)(e.data.allCognitiveChallengesCsv),g=Object(a.useRef)(null);return i.a.createElement(r.a,{"title-":"Aleph HMI",pageHeader:"Future Cognitive Challenges Table"},i.a.createElement(l.a,{title:"Future Cognitive Challenges Table"}),i.a.createElement(m.a,{hasNavbar:!0}),i.a.createElement("div",{className:"ccl__container"},i.a.createElement("div",{className:"ccl__grid"},i.a.createElement("p",{className:"ccl__para"},"Select a family of defence-specific challenges on the left to display the corresponding information about its individual constituent future challenges."),i.a.createElement(s,{families:p,onClickFamilyTab:function(e){n!==e&&(f(e),g&&g.current&&(g.current.scrollTop=0,g.current.scrollLeft=0))},selectedTab:n}),i.a.createElement("div",{className:"ccl__tech-grid"},i.a.createElement("div",{className:"ccl__table",ref:g},i.a.createElement("table",{className:"fixed-header fixed-column-one"},i.a.createElement(c,{titles:d}),i.a.createElement(o,{challenges:y,families:p,selectedTab:n})))))))}},n3bB:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI"),i=n.n(a),r=function(e){var t=e.hasNavbar;return i.a.createElement("div",{className:t?"fixed-header-offset-with-navbar":"fixed-header-offset"})}}}]);
//# sourceMappingURL=component---src-pages-cognitive-challenge-library-tsx-ee1955cddce3c70ccb79.js.map