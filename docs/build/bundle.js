var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function a(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function d(){return u(" ")}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function f(e){return Array.from(e.childNodes)}function m(e,t,n,o){for(let o=0;o<e.length;o+=1){const a=e[o];if(a.nodeName===t){let t=0;const r=[];for(;t<a.attributes.length;){const e=a.attributes[t++];n[e.name]||r.push(e.name)}for(let e=0;e<r.length;e++)a.removeAttribute(r[e]);return e.splice(o,1)[0]}}return o?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):h(t)}function g(e,t){for(let n=0;n<e.length;n+=1){const o=e[n];if(3===o.nodeType)return o.data=""+t,e.splice(n,1)[0]}return u(t)}function y(e){return g(e," ")}class v{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=h(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)i(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(l)}}let w;function b(e){w=e}const k=[],x=[],$=[],E=[],M=Promise.resolve();let _=!1;function T(e){$.push(e)}let A=!1;const z=new Set;function S(){if(!A){A=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];b(t),V(t.$$)}for(b(null),k.length=0;x.length;)x.pop()();for(let e=0;e<$.length;e+=1){const t=$[e];z.has(t)||(z.add(t),t())}$.length=0}while(k.length);for(;E.length;)E.pop()();_=!1,A=!1,z.clear()}}function V(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}const I=new Set;function L(e,t){e&&e.i&&(I.delete(e),e.i(t))}function H(e,t,n,o){if(e&&e.o){if(I.has(e))return;I.add(e),undefined.c.push(()=>{I.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function N(e){e&&e.c()}function q(e,t){e&&e.l(t)}function O(e,n,r){const{fragment:s,on_mount:i,on_destroy:l,after_update:c}=e.$$;s&&s.m(n,r),T(()=>{const n=i.map(t).filter(a);l?l.push(...n):o(n),e.$$.on_mount=[]}),c.forEach(T)}function P(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){-1===e.$$.dirty[0]&&(k.push(e),_||(_=!0,M.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function j(t,a,r,s,i,c,h=[-1]){const u=w;b(t);const d=a.props||{},p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:h,skip_bound:!1};let m=!1;if(p.ctx=r?r(t,d,(e,n,...o)=>{const a=o.length?o[0]:n;return p.ctx&&i(p.ctx[e],p.ctx[e]=a)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](a),m&&Y(t,e)),n}):[],p.update(),m=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),a.target){if(a.hydrate){const e=f(a.target);p.fragment&&p.fragment.l(e),e.forEach(l)}else p.fragment&&p.fragment.c();a.intro&&L(t.$$.fragment),O(t,a.target,a.anchor),S()}b(u)}class C{$destroy(){P(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function U(t){let n,o,a,r,i,c,u,d,f,g,y,v,w,b,k,x,$,E,M,_,T,A,z;return{c(){n=h("meta"),o=h("meta"),a=h("meta"),r=h("meta"),i=h("meta"),c=h("meta"),u=h("meta"),d=h("meta"),f=h("meta"),g=h("meta"),y=h("meta"),v=h("meta"),w=h("meta"),b=h("meta"),k=h("meta"),x=h("meta"),$=h("meta"),E=h("meta"),M=h("meta"),_=h("meta"),T=h("meta"),A=h("meta"),z=h("link"),this.h()},l(e){const t=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-1q253a5"]',document.head);n=m(t,"META",{charset:!0}),o=m(t,"META",{name:!0,content:!0}),a=m(t,"META",{"http-equiv":!0,content:!0}),r=m(t,"META",{name:!0,content:!0}),i=m(t,"META",{name:!0,content:!0}),c=m(t,"META",{property:!0,content:!0}),u=m(t,"META",{property:!0,content:!0}),d=m(t,"META",{property:!0,content:!0}),f=m(t,"META",{property:!0,content:!0}),g=m(t,"META",{property:!0,content:!0}),y=m(t,"META",{property:!0,content:!0}),v=m(t,"META",{property:!0,content:!0}),w=m(t,"META",{property:!0,content:!0}),b=m(t,"META",{property:!0,content:!0}),k=m(t,"META",{property:!0,content:!0}),x=m(t,"META",{name:!0,content:!0}),$=m(t,"META",{name:!0,content:!0}),E=m(t,"META",{name:!0,content:!0}),M=m(t,"META",{name:!0,content:!0}),_=m(t,"META",{name:!0,content:!0}),T=m(t,"META",{name:!0,content:!0}),A=m(t,"META",{name:!0,content:!0}),z=m(t,"LINK",{rel:!0,href:!0}),t.forEach(l),this.h()},h(){document.title="Svelte Starter",p(n,"charset","UTF-8"),p(o,"name","viewport"),p(o,"content","width=device-width, initial-scale=1.0"),p(a,"http-equiv","X-UA-Compatible"),p(a,"content","ie=edge"),p(r,"name","description"),p(r,"content",""),p(i,"name","news_keywords"),p(i,"content",""),p(c,"property","og:title"),p(c,"content",""),p(u,"property","og:site_name"),p(u,"content",""),p(d,"property","og:url"),p(d,"content",""),p(f,"property","og:description"),p(f,"content","description"),p(g,"property","og:type"),p(g,"content","article"),p(y,"property","og:locale"),p(y,"content","en_US"),p(v,"property","og:image"),p(v,"content",""),p(w,"property","og:image:type"),p(w,"content","image/jpeg"),p(b,"property","og:image:width"),p(b,"content","1200"),p(k,"property","og:image:height"),p(k,"content","600"),p(x,"name","twitter:card"),p(x,"content","summary_large_image"),p($,"name","twitter:site"),p($,"content",""),p(E,"name","twitter:creator"),p(E,"content",""),p(M,"name","twitter:title"),p(M,"content",""),p(_,"name","twitter:description"),p(_,"content",""),p(T,"name","twitter:image:src"),p(T,"content",""),p(A,"name","robots"),p(A,"content","max-image-preview:large"),p(z,"rel","canonical"),p(z,"href","")},m(e,t){s(document.head,n),s(document.head,o),s(document.head,a),s(document.head,r),s(document.head,i),s(document.head,c),s(document.head,u),s(document.head,d),s(document.head,f),s(document.head,g),s(document.head,y),s(document.head,v),s(document.head,w),s(document.head,b),s(document.head,k),s(document.head,x),s(document.head,$),s(document.head,E),s(document.head,M),s(document.head,_),s(document.head,T),s(document.head,A),s(document.head,z)},p:e,i:e,o:e,d(e){l(n),l(o),l(a),l(r),l(i),l(c),l(u),l(d),l(f),l(g),l(y),l(v),l(w),l(b),l(k),l(x),l($),l(E),l(M),l(_),l(T),l(A),l(z)}}}class F extends C{constructor(e){super(),j(this,e,null,U,r,{})}}var B="Speaker Rider <br>for Meaningfully<br> Inclusive Events",D=[{type:"text",value:"If you’ve found yourself at this link, you’ve asked someone to speak at your event who actively cares about diversity, equity, and inclusion. Dismantling implicit bias, structural and systemic racism, and years of ingrained inequity takes commitment. The speaker hopes you will join them in this work."},{type:"text",value:"Please look over these baseline criteria and let the invited speaker (and other speakers, attendees, and participants!), know which ones you’ve implemented. If your speaker hasn't suggested a number to fulfill, we suggest you make a commitment to 6 out of 10 of these criteria within one year, 8 within two years, and to meet all of them within three years (2023). If some ideas are new to you, use this as a starting place to improve future events and to seek out <a href=https://niemanreports.org/articles/before-you-can-fix-your-newsroom-you-need-to-fix-your-life/ target=_blank>other ways to exceed these criteria</a>."}],G=[{hed:"You demonstrate your commitment to being meaningfully inclusive across all parts of your event.",text:"For example, this includes embedding your commitment to diversity, equity, and inclusion throughout all communications about your event, and/or you could publish your values, goals, and commitments as event organizers."},{hed:"You gather speaker demographics and make the data easily accessible.",text:"In your speaker registration form, you give speakers the option to self-identify at least their gender and race/ethnicity. Then, you make the data easily accessible before the conference, updating it as your speaker roster is finalized. <a href=https://medium.com/managing-on-the-margins/respectful-collection-of-demographic-data-56de9fcb80e2 target=_blank>Here’s how you can respectfully collect demographic data</a>."},{hed:"Your speakers are diverse.",text:"This starts with a speaker roster that is clearly diverse in gender and race. Many people use demographic surveys like the <a href=https://www.census.gov/quickfacts/fact/table/US/PST045219 target=_blank>U.S. Census</a> as a baseline, but you should work to exceed these numbers and actively prioritize minoritized and marginalized voices. If your industry or community is monolithic, consider the historical barriers that have excluded entire groups of people. Learn more about how <a href=https://medium.com/this-is-hard/ffffff-diversity-1bd2b3421e8a target=_blank>representation matters</a>, <a href=https://www.cbsnews.com/news/2010-census-missed-15-million-minorities/ target=_blank>minority undercounts</a>, <a href=https://news.stlpublicradio.org/politics-issues/2020-03-17/the-2020-census-is-underway-but-nonbinary-and-gender-nonconforming-respondents-feel-counted-out target=_blank>predefined and binary categories</a>, <a href=https://www.youtube.com/watch?v=HoDmEH47X0s&feature=emb_title target=_blank>intersectionality</a>, and tokenism."},{hed:"You design your panels to not be all white or all male.",text:"On any given panel with 4 or more speakers, at least one panelist should identify as a woman, non-binary, or genderfluid, and at least one panelist should be a person of color. They cannot be the same person. Women and people of color should not be limited to moderating roles."},{hed:"You make sure people from marginalized backgrounds are not all talking about their identity.",text:"People are more than their identity. Speakers from marginalized backgrounds shouldn’t always be the ones speaking about diversity. They should be allowed to speak to their expertise. For example, Black journalists speaking about covering climate change, or Latinx engineers talking about database optimization. Ideally, conversations about diversity would not be siloed into single sessions, but addressed throughout all sessions, to include equity and inclusion about how to approach any topic."},{hed:"You budget for and clearly publicize meaningful, needs-based financial support for attendees who cannot afford to pay their own way.",text:"Free/discounted tickets, travel scholarships, and other types of financial support remove money as a barrier to participation in your event. You can find resources on <a href=https://opennews.org/blog/srccon-scholarship-process-admin/ target=_blank>structuring</a> and <a href=https://opennews.org/blog/srccon-scholarships-update/ target=_blank>updating</a> scholarship programs, as well as lists of <a href=https://www.diversifytech.co/tech-conference-scholarships target=_blank>other conferences offering scholarships</a> to learn from. Diversifying your attendees is the first step toward diversifying future iterations of your event. Helping them now, when they’re less likely to get institutional support, also helps you build a relationship with them so they’ll potentially join you as a speaker in the future. Make sure all your attendees know the support you have available for them."},{hed:"You budget for and clearly publicize meaningful, needs-based financial support for speakers who cannot afford to pay their own way.",text:"It's always preferable to pay your speakers, and cover all hotel, travel, and meal costs. If you do not, make sure to have a budget to cover the costs of speakers who can’t afford to come on their own. Otherwise, you’re limiting your speakers only to those of higher socio-economic status or who work at well-resourced companies, and you’re contributing to the inequities of the <a href=https://www.nytimes.com/interactive/2019/08/14/magazine/racial-wealth-gap.html target=_blank>racial</a> <a href=https://www.brookings.edu/blog/up-front/2020/02/27/examining-the-black-white-wealth-gap/ target=_blank>wealth gap</a>. Every time you promote your event, you have a chance to talk about your budget for speaker support and let them know all the ways you can help them participate. Make sure all your speakers know that they can ask for help."},{hed:"You ensure an accessible, inclusive, and welcoming space.",text:"Be able to clearly and easily articulate how your event takes into account inclusivity and accessibility in at least three ways. For example, providing <a href=http://composition.al/blog/2014/05/31/your-next-conference-should-have-real-time-captioning/ target=_blank>closed captioning</a>, <a href=https://medium.com/trans-talk/getting-pronoun-badges-right-five-recommendations-for-event-organizers-5458116b2ffc target=_blank>making pronouns visible</a>, <a href=https://opennews.org/blog/srccon-childcare/ target=_blank>offering childcare</a> and caregiving support, and ensuring that no one at your event feels excluded because of what foods and <a href=https://modelviewculture.com/pieces/alcohol-and-inclusivity-planning-tech-events-with-non-alcoholic-options target=_blank>beverages</a> you provide. Here are <a href=https://docs.google.com/presentation/d/120xpJQV4OnuvUQkb4ctifcPRuUptK9oKPG-Oy9L4Kkw/edit#slide=id.p target=_blank>two</a> <a href=https://www.ashedryden.com/blog/increasing-diversity-at-your-conference target=_blank>great</a> resources with tons of ideas."},{hed:"You know who is coming to your conference.",text:"When you track the demographics of who is attending, you can create spaces for marginalized groups to connect and find each other more easily. Also, you can make sure the (digital) rooms and spaces you create aren’t filled with people who look the same."},{hed:"You have a strong, enforceable code of conduct with a thorough response plan.",text:"You can find examples of <a href=http://incisive.nu/2014/codes-of-conduct/ target=_blank>how to</a> <a href=https://projectinclude.org/writing_cocs#make-your-code-of-conduct-comprehensive-and-visible target=_blank>create a</a> code of conduct that reflects the needs of your community and sets up your conference team with a clear plan of how to respond to any incidents. Ensure that the code of conduct is well publicized and documented before, during, and after the event, and have your speakers and all attendees actively agree to follow it. For example, you could require that anyone who registers for your event must also check a box acknowledging that they’ve read and agree to follow your code of conduct."}],K=[{type:"text",value:"We've only listed 10 criteria, but there are so many more things you should do to make your event as inclusive and equitable as possible, including the <a href=https://www.selfdefined.app/ target=_blank>language you use</a> to talk about your event and making sure you respond respectfully and empathetically to the speaker who sent you here. Here are <a href=https://gist.github.com/tatianamac/493ca668ee7f7c07a5b282f6d9132552 target=_blank>two</a> <a href=https://hbr.org/2019/09/what-it-will-take-to-improve-diversity-at-conferences target=_blank>great</a> lists."},{type:"text",value:"If you need help or are just learning how important this work is, there are plenty of folks you could hire for their expertise (some we’ve even linked on this page) to help you. You don’t have to know everything, but you need to be open to learning, both from participants at your event and inclusion experts. Listen to <a href=https://source.opennews.org/articles/how-diversify-your-newsroom-starting-now/ target=_blank>the folks in “the choir.”</a>"}],W=[{type:"text",value:"This rider was a collaboration between <a href=https://opennews.org/ target=_blank>OpenNews</a> and <a href=https://pudding.cool/ target=_blank>The Pudding</a>."}];function Q(e,t,n){const o=e.slice();return o[0]=t[n],o}function R(t){let n,o=t[0].value+"";return{c(){n=h("p"),this.h()},l(e){n=m(e,"P",{class:!0}),f(n).forEach(l),this.h()},h(){p(n,"class","svelte-2ekej7")},m(e,t){i(e,n,t),n.innerHTML=o},p:e,d(e){e&&l(n)}}}function X(t){let n,o,a,r=B+"",u=D,g=[];for(let e=0;e<u.length;e+=1)g[e]=R(Q(t,u,e));return{c(){n=h("section"),o=h("h1"),a=d();for(let e=0;e<g.length;e+=1)g[e].c();this.h()},l(e){n=m(e,"SECTION",{id:!0,class:!0});var t=f(n);o=m(t,"H1",{class:!0}),f(o).forEach(l),a=y(t);for(let e=0;e<g.length;e+=1)g[e].l(t);t.forEach(l),this.h()},h(){p(o,"class","svelte-2ekej7"),p(n,"id","intro"),p(n,"class","svelte-2ekej7")},m(e,t){i(e,n,t),s(n,o),o.innerHTML=r,s(n,a);for(let e=0;e<g.length;e+=1)g[e].m(n,null)},p(e,[t]){if(0&t){let o;for(u=D,o=0;o<u.length;o+=1){const a=Q(e,u,o);g[o]?g[o].p(a,t):(g[o]=R(a),g[o].c(),g[o].m(n,null))}for(;o<g.length;o+=1)g[o].d(1);g.length=u.length}},i:e,o:e,d(e){e&&l(n),c(g,e)}}}class J extends C{constructor(e){super(),j(this,e,null,X,r,{})}}function Z(e,t,n){const o=e.slice();return o[0]=t[n],o}function ee(t){let n,o,a,r,c,w,b,k=t[0].hed+"",x=t[0].text+"";return{c(){n=h("li"),o=h("span"),a=h("span"),r=u(k),c=d(),b=d(),this.h()},l(e){n=m(e,"LI",{class:!0});var t=f(n);o=m(t,"SPAN",{class:!0});var s=f(o);a=m(s,"SPAN",{class:!0});var i=f(a);r=g(i,k),i.forEach(l),c=y(s),s.forEach(l),b=y(t),t.forEach(l),this.h()},h(){p(a,"class","hed svelte-psoad"),w=new v(null),p(o,"class","spacing"),p(n,"class","svelte-psoad")},m(e,t){i(e,n,t),s(n,o),s(o,a),s(a,r),s(o,c),w.m(x,o),s(n,b)},p:e,d(e){e&&l(n)}}}function te(t){let n,o,a=G,r=[];for(let e=0;e<a.length;e+=1)r[e]=ee(Z(t,a,e));return{c(){n=h("section"),o=h("ol");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){n=m(e,"SECTION",{id:!0,class:!0});var t=f(n);o=m(t,"OL",{class:!0});var a=f(o);for(let e=0;e<r.length;e+=1)r[e].l(a);a.forEach(l),t.forEach(l),this.h()},h(){p(o,"class","svelte-psoad"),p(n,"id","criteria"),p(n,"class","svelte-psoad")},m(e,t){i(e,n,t),s(n,o);for(let e=0;e<r.length;e+=1)r[e].m(o,null)},p(e,[t]){if(0&t){let n;for(a=G,n=0;n<a.length;n+=1){const s=Z(e,a,n);r[n]?r[n].p(s,t):(r[n]=ee(s),r[n].c(),r[n].m(o,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=a.length}},i:e,o:e,d(e){e&&l(n),c(r,e)}}}class ne extends C{constructor(e){super(),j(this,e,null,te,r,{})}}function oe(e,t,n){const o=e.slice();return o[0]=t[n],o}function ae(e,t,n){const o=e.slice();return o[3]=t[n],o}function re(t){let n,o=t[3].value+"";return{c(){n=h("p"),this.h()},l(e){n=m(e,"P",{class:!0}),f(n).forEach(l),this.h()},h(){p(n,"class","svelte-1w8xt96")},m(e,t){i(e,n,t),n.innerHTML=o},p:e,d(e){e&&l(n)}}}function se(t){let n,o=t[0].value+"";return{c(){n=h("p"),this.h()},l(e){n=m(e,"P",{class:!0}),f(n).forEach(l),this.h()},h(){p(n,"class","svelte-1w8xt96")},m(e,t){i(e,n,t),n.innerHTML=o},p:e,d(e){e&&l(n)}}}function ie(t){let n,o,a,r,u,g,v,w,b,k,x=K,$=[];for(let e=0;e<x.length;e+=1)$[e]=re(ae(t,x,e));let E=W,M=[];for(let e=0;e<E.length;e+=1)M[e]=se(oe(t,E,e));return{c(){n=h("section");for(let e=0;e<$.length;e+=1)$[e].c();o=d(),a=h("div"),r=h("div"),u=h("a"),g=h("img"),w=d(),b=h("a"),k=d();for(let e=0;e<M.length;e+=1)M[e].c();this.h()},l(e){n=m(e,"SECTION",{id:!0,class:!0});var t=f(n);for(let e=0;e<$.length;e+=1)$[e].l(t);o=y(t),a=m(t,"DIV",{class:!0});var s=f(a);r=m(s,"DIV",{class:!0});var i=f(r);u=m(i,"A",{href:!0,class:!0});var c=f(u);g=m(c,"IMG",{src:!0,alt:!0}),c.forEach(l),w=y(i),b=m(i,"A",{href:!0,class:!0}),f(b).forEach(l),i.forEach(l),k=y(s);for(let e=0;e<M.length;e+=1)M[e].l(s);s.forEach(l),t.forEach(l),this.h()},h(){g.src!==(v="assets/images/open-news-2017.png")&&p(g,"src","assets/images/open-news-2017.png"),p(g,"alt","Open News logo"),p(u,"href","https://opennews.org/"),p(u,"class","svelte-1w8xt96"),p(b,"href","https://pudding.cool"),p(b,"class","svelte-1w8xt96"),p(r,"class","logos svelte-1w8xt96"),p(a,"class","acknowledgements svelte-1w8xt96"),p(n,"id","outro"),p(n,"class","svelte-1w8xt96")},m(e,t){i(e,n,t);for(let e=0;e<$.length;e+=1)$[e].m(n,null);s(n,o),s(n,a),s(a,r),s(r,u),s(u,g),s(r,w),s(r,b),b.innerHTML='<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="wordmark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 192.6 50" style="enable-background:new 0 0 192.6 50;" xml:space="preserve">\n<g>\n\t<path class="st0" d="M150.1,9.5c1.5,0,2.8,1.3,2.8,2.8s-1.3,2.8-2.8,2.8s-2.8-1.3-2.8-2.8S148.6,9.5,150.1,9.5z"/>\n\t<path class="st0" d="M147.2,17.3h5.6v18.2h-5.6V17.3z"/>\n\t<path class="st0" d="M77.1,9.5h-1.9h-7v19.3v6.7h5.6v-6.7v-1.4h1.4h1.9c4.9,0,8.9-4,8.9-8.9S82.1,9.5,77.1,9.5z M77.1,21.8h-1.9\n\t\th-1.4v-1.4v-3.8v-1.4h1.4h1.9c1.8,0,3.3,1.5,3.3,3.3S79,21.8,77.1,21.8z"/>\n\t<path class="st0" d="M105.7,17.6h-5.6v8.9c0,1.8-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3v-8.9h-5.6v8.9c0,4.9,4,8.9,8.9,8.9\n\t\ts8.9-4,8.9-8.9V17.6z"/>\n\t<path class="st0" d="M164.1,17.6c-4.9,0-8.9,4-8.9,8.9v8.9h5.6v-8.9c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3v8.9h5.6v-8.9\n\t\tC173,21.6,169,17.6,164.1,17.6z"/>\n\t<path class="st0" d="M119.7,16.2v1.4h-1.4h-1.9c-4.9,0-8.9,4-8.9,8.9s4,8.9,8.9,8.9h1.9h7V16.2V9.5l-5.6,3.3\n\t\tC119.7,12.8,119.7,16.2,119.7,16.2z M119.8,24.6v3.8v1.4h-1.4h-1.9c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3h1.9h1.4V24.6z"/>\n\t<path class="st0" d="M139.3,16.2v1.4h-1.4H136c-4.9,0-8.9,4-8.9,8.9s4,8.9,8.9,8.9h1.9h7V16.2V9.5l-5.6,3.3V16.2z M139.4,24.6v3.8\n\t\tv1.4h-1.5H136c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3h1.9h1.4v1.4H139.4z"/>\n\t<path class="st0" d="M183.7,17.6c-4.9,0-8.9,4-8.9,8.9s4,8.9,8.9,8.9h1.9h1.4v1.4v0.9v1.4v1.4c0,1.8-1.5,3.3-3.3,3.3\n\t\ts-3.3-1.5-3.3-3.3V38l-5.6,3.3c0.4,4.5,4.2,8.1,8.9,8.1c4.9,0,8.9-4,8.9-8.9v-1.4v-2.3V17.6h-7H183.7z M187,23.4v1.4v3.8V30h-1.4\n\t\th-1.9c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3h1.9C185.6,23.4,187,23.4,187,23.4z"/>\n\t<path class="st0" d="M28.6,17.6c-1.2,0-2.3,0.2-3.3,0.6V9.5l-5.6,3.3v13.7v2v6.9h5.6v-6.9l0,0v-2c0-1.8,1.5-3.3,3.3-3.3\n\t\ts3.3,1.5,3.3,3.3v8.9h5.6v-8.9C37.5,21.6,33.5,17.6,28.6,17.6z"/>\n\t<path class="st0" d="M17.8,9.5H0v5.6h6.1v20.3h5.6V15.1h6.1V9.5z"/>\n\t<path class="st0" d="M48.3,30.2c-0.4,0-1.2-0.1-1.8-0.4l5.2-2.1l5.6-2.3l-1-2.3l-0.1-0.2c-0.1-0.3-0.3-0.6-0.5-1\n\t\tc-0.1-0.1-0.1-0.2-0.2-0.3c0,0,0-0.1-0.1-0.1l-0.1-0.1l-0.1-0.1c-1.6-2.2-4-3.5-6.7-3.7l0,0h-0.6c-4.9,0-8.9,4-8.9,8.9\n\t\tc0,0.4,0,0.9,0.1,1.4l0,0V28c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0.3,0.1,0.5,0.2,0.8v0.1v0.1c0.1,0.3,0.2,0.7,0.4,1v0.1v0.1\n\t\tc0.1,0.3,0.3,0.5,0.4,0.8c0,0.1,0.1,0.1,0.1,0.2l0,0c0.1,0.2,0.3,0.4,0.4,0.6c0,0,0,0,0,0.1c0,0,0,0.1,0.1,0.1l0.1,0.1\n\t\tc1.7,2.1,4.4,3.4,7.2,3.4h6.1v-5.2C54.5,30.2,50.6,30.2,48.3,30.2L48.3,30.2z M56.2,22.9L56.2,22.9L56.2,22.9z M44.6,25.7\n\t\tL44.6,25.7l-0.2,0.1c0.2-1.9,1.8-3.5,3.7-3.5c0.9,0,1.8,0.4,2.4,0.9L46.2,25L44.6,25.7L44.6,25.7z"/>\n</g>\n</svg>',s(a,k);for(let e=0;e<M.length;e+=1)M[e].m(a,null)},p(e,[t]){if(0&t){let a;for(x=K,a=0;a<x.length;a+=1){const r=ae(e,x,a);$[a]?$[a].p(r,t):($[a]=re(r),$[a].c(),$[a].m(n,o))}for(;a<$.length;a+=1)$[a].d(1);$.length=x.length}if(0&t){let n;for(E=W,n=0;n<E.length;n+=1){const o=oe(e,E,n);M[n]?M[n].p(o,t):(M[n]=se(o),M[n].c(),M[n].m(a,null))}for(;n<M.length;n+=1)M[n].d(1);M.length=E.length}},i:e,o:e,d(e){e&&l(n),c($,e),c(M,e)}}}class le extends C{constructor(e){super(),j(this,e,null,ie,r,{})}}function ce(t){let n,o,a,r,s,c,h,u;return n=new F({}),a=new J({}),s=new ne({}),h=new le({}),{c(){N(n.$$.fragment),o=d(),N(a.$$.fragment),r=d(),N(s.$$.fragment),c=d(),N(h.$$.fragment)},l(e){q(n.$$.fragment,e),o=y(e),q(a.$$.fragment,e),r=y(e),q(s.$$.fragment,e),c=y(e),q(h.$$.fragment,e)},m(e,t){O(n,e,t),i(e,o,t),O(a,e,t),i(e,r,t),O(s,e,t),i(e,c,t),O(h,e,t),u=!0},p:e,i(e){u||(L(n.$$.fragment,e),L(a.$$.fragment,e),L(s.$$.fragment,e),L(h.$$.fragment,e),u=!0)},o(e){H(n.$$.fragment,e),H(a.$$.fragment,e),H(s.$$.fragment,e),H(h.$$.fragment,e),u=!1},d(e){P(n,e),e&&l(o),P(a,e),e&&l(r),P(s,e),e&&l(c),P(h,e)}}}const he=new class extends C{constructor(e){super(),j(this,e,null,ce,r,{})}}({target:document.querySelector("main"),hydrate:!0});return he}();
//# sourceMappingURL=bundle.js.map
