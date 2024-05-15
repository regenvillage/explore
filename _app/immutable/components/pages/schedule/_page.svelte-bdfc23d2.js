import{S as Z,i as j,s as G,a as P,w as B,k as M,$ as J,h as v,c as S,x as C,l as I,m as k,n as w,b as H,y as q,T as b,f as T,d as K,t as z,z as A,a0 as O,_ as Q,q as L,r as R,u as U,g as Y}from"../../../chunks/singletons-2e385432.js";import{p as ee}from"../../../chunks/stores-ce237ea6.js";import{T as te}from"../../../chunks/TimelineHeatmap-a75f8530.js";import{D as ae}from"../../../chunks/Disclaimer-5096a831.js";import{C as se}from"../../../chunks/CalendarList-bf1680a8.js";import{F as ne,g as F,b as V,d as re,a as N}from"../../../chunks/Footer-abb653ea.js";import{H as le}from"../../../chunks/EventTypeBadge-b3f9d6a9.js";import{P as ie}from"../../../chunks/public-71b39112.js";function W(r,i,n){const m=r.slice();return m[5]=i[n],m}function X(r){let i,n,m,c=F(new Date(r[5].date),V.tz,"MMMM d, yyyy")+"",p,d,g,o,D,u=F(new Date(r[5].date),V.tz,"EEEE")+"",$,_,h,l,t;return l=new se({props:{date:r[3].params.date,segments:r[5].segments,prefix:r[1],bundle:r[0].bundle}}),{c(){i=M("div"),n=M("h2"),m=M("a"),p=L(c),g=P(),o=M("span"),D=L("- "),$=L(u),_=P(),h=M("div"),B(l.$$.fragment),this.h()},l(f){i=I(f,"DIV",{class:!0});var e=k(i);n=I(e,"H2",{class:!0});var a=k(n);m=I(a,"A",{href:!0,class:!0});var y=k(m);p=R(y,c),y.forEach(v),g=S(a),o=I(a,"SPAN",{class:!0});var E=k(o);D=R(E,"- "),$=R(E,u),E.forEach(v),a.forEach(v),_=S(e),h=I(e,"DIV",{class:!0});var s=k(h);C(l.$$.fragment,s),s.forEach(v),e.forEach(v),this.h()},h(){w(m,"href",d=r[1]+"/day/"+r[5].date),w(m,"class","text-bbw-navy hover:underline"),w(o,"class","bbw-text-color-primary"),w(n,"class","text-3xl md:text-3xl"),w(h,"class","mt-6"),w(i,"class","mb-14")},m(f,e){H(f,i,e),b(i,n),b(n,m),b(m,p),b(n,g),b(n,o),b(o,D),b(o,$),b(i,_),b(i,h),q(l,h,null),t=!0},p(f,e){(!t||e&4)&&c!==(c=F(new Date(f[5].date),V.tz,"MMMM d, yyyy")+"")&&U(p,c),(!t||e&6&&d!==(d=f[1]+"/day/"+f[5].date))&&w(m,"href",d),(!t||e&4)&&u!==(u=F(new Date(f[5].date),V.tz,"EEEE")+"")&&U($,u);const a={};e&8&&(a.date=f[3].params.date),e&4&&(a.segments=f[5].segments),e&2&&(a.prefix=f[1]),e&1&&(a.bundle=f[0].bundle),l.$set(a)},i(f){t||(T(l.$$.fragment,f),t=!0)},o(f){z(l.$$.fragment,f),t=!1},d(f){f&&v(i),A(l)}}}function oe(r){let i,n,m,c,p,d,g,o,D,u,$,_,h;n=new le({props:{path:!1,type:"schedule"}}),g=new te({props:{data:r[0],highlightDay:r[3].params.date}});let l=r[2],t=[];for(let e=0;e<l.length;e+=1)t[e]=X(W(r,l,e));const f=e=>z(t[e],1,1,()=>{t[e]=null});return u=new ae({props:{type:"events"}}),_=new ne({props:{bundle:r[0].bundle}}),{c(){i=P(),B(n.$$.fragment),m=P(),c=M("div"),p=M("div"),d=M("div"),B(g.$$.fragment),o=P();for(let e=0;e<t.length;e+=1)t[e].c();D=P(),B(u.$$.fragment),$=P(),B(_.$$.fragment),this.h()},l(e){J("svelte-3i5odb",document.head).forEach(v),i=S(e),C(n.$$.fragment,e),m=S(e),c=I(e,"DIV",{class:!0});var y=k(c);p=I(y,"DIV",{class:!0});var E=k(p);d=I(E,"DIV",{class:!0});var s=k(d);C(g.$$.fragment,s),o=S(s);for(let x=0;x<t.length;x+=1)t[x].l(s);D=S(s),C(u.$$.fragment,s),s.forEach(v),E.forEach(v),y.forEach(v),$=S(e),C(_.$$.fragment,e),this.h()},h(){document.title="Schedule | Berlin Blockchain Week 2024",w(d,"class","mx-4 xl:mx-0"),w(p,"class","max-w-7xl mx-auto pt-5 md:pt-10"),w(c,"class","w-full")},m(e,a){H(e,i,a),q(n,e,a),H(e,m,a),H(e,c,a),b(c,p),b(p,d),q(g,d,null),b(d,o);for(let y=0;y<t.length;y+=1)t[y].m(d,null);b(d,D),q(u,d,null),H(e,$,a),q(_,e,a),h=!0},p(e,[a]){const y={};if(a&1&&(y.data=e[0]),a&8&&(y.highlightDay=e[3].params.date),g.$set(y),a&15){l=e[2];let s;for(s=0;s<l.length;s+=1){const x=W(e,l,s);t[s]?(t[s].p(x,a),T(t[s],1)):(t[s]=X(x),t[s].c(),T(t[s],1),t[s].m(d,D))}for(Y(),s=l.length;s<t.length;s+=1)f(s);K()}const E={};a&1&&(E.bundle=e[0].bundle),_.$set(E)},i(e){if(!h){T(n.$$.fragment,e),T(g.$$.fragment,e);for(let a=0;a<l.length;a+=1)T(t[a]);T(u.$$.fragment,e),T(_.$$.fragment,e),h=!0}},o(e){z(n.$$.fragment,e),z(g.$$.fragment,e),t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)z(t[a]);z(u.$$.fragment,e),z(_.$$.fragment,e),h=!1},d(e){e&&v(i),A(n,e),e&&v(m),e&&v(c),A(g),O(t,e),A(u),e&&v($),A(_,e)}}}function fe(r,i,n){let m,c;Q(r,ee,o=>n(3,c=o));let{data:p}=i,{prefix:d=ie}=i;function g(o){const D=[];for(let u=0;u<V.days;u++){const $=F(re(new Date(V.date),u),V.tz,"yyyy-MM-dd"),_={start:$+"T00:00",end:$+"T23:59"};let h=[];for(const l of o)for(const t of l.segments)N(new Date(t.startTime),new Date(_.end))<=0&&N(new Date(t.startTime),new Date(_.start))>=0&&h.push({startTime:t.startTime,endTime:t.endTime,event:l,title:t.title,venues:t.venues||l.venues||!1});h=h.sort((l,t)=>l.startTime>t.startTime?1:-1),D.push({date:$,segments:h})}return D}return r.$$set=o=>{"data"in o&&n(0,p=o.data),"prefix"in o&&n(1,d=o.prefix)},r.$$.update=()=>{r.$$.dirty&1&&n(2,m=g(p.bundle.events))},[p,d,m,c]}class ve extends Z{constructor(i){super(),j(this,i,fe,oe,G,{data:0,prefix:1})}}export{ve as default};