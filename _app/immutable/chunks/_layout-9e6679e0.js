const n="24",i="Regen Village 2024",o="https://regenvillage.github.io/data/24",r="https://regenvillage.github.io/explore",l="https://github.com/regenvillage/data/tree/main/data/24",c=[{id:"commons-hub",hash:"942bbd0ee46224c791887f4d3398b511c1ea76253e1fa5976786d308b9740f71",name:"Commons Hub",eventTypes:["gathering"],capacity:350,address:"Rue de la Madeleine 51, 1000 Brussels, Belgium",mapUrl:"https://maps.app.goo.gl/x1K2C7pVCW6yVwde7",description:`The Commons Hub Brussels is a shared place to meet, co-create, work and organise events. The space is  managed as a common itself, with shared responsibilities and ownership. All members are crew in making this place thrive.
`,photo:"https://regenvillage.github.io/data/24/assets/places/commons-hub/logo.webp",links:{web:"https://commonshub.brussels/"}}],h=[{id:"regen-village",hash:"95af4e21ee513fbc7559747c658301782376454113d260a6eb2b9c1558c1e27f",name:"Regen Village",shortname:"Regen Village",types:["gathering"],status:"published",org:"Regens Unite",dri:"Leen Schelfhout",poc:"Leen Schelfhout",date:"2024-07-08",days:5,times:"09:00-20:00",venues:["commons-hub"],languages:["english"],attendees:600,chains:[],tags:["solarpunk"],logo:"https://regenvillage.github.io/data/24/assets/events/regen-village/logo.webp",description:`Lorem ipsum ...
`,registration:{type:"tickets",price:"100 EUR",link:"https://www.regensunite.earth/event/regenvillage",status:"available"},links:{web:"https://www.regensunite.earth/event/regenvillage",twitter:"https://twitter.com/regensunite",telegram:"https://t.me/+VM5mWk3S2mthYzM5"},segments:[{date:"2024-07-08",times:"09:00-20:00",startTime:"2024-07-08T07:00:00.000Z",endTime:"2024-07-08T18:00:00.000Z"},{date:"2024-07-09",times:"09:00-20:00",startTime:"2024-07-09T07:00:00.000Z",endTime:"2024-07-09T18:00:00.000Z"},{date:"2024-07-10",times:"09:00-20:00",startTime:"2024-07-10T07:00:00.000Z",endTime:"2024-07-10T18:00:00.000Z"},{date:"2024-07-11",times:"09:00-20:00",startTime:"2024-07-11T07:00:00.000Z",endTime:"2024-07-11T18:00:00.000Z"},{date:"2024-07-12",times:"09:00-20:00",startTime:"2024-07-12T07:00:00.000Z",endTime:"2024-07-12T18:00:00.000Z"}]}],g=[],m=[],d=[],p=[],u="2024-05-23T21:55:49.199Z",b="v24.2.8",v={id:n,name:i,dataUrl:o,exploreUrl:r,dataGithubUrl:l,places:c,events:h,"media-partners":[],contributors:g,benefits:m,unions:d,chains:p,"other-events":[],__time:u,__tag:b};async function f(a=null){let e=null;a==="localhost"?e=v:e=await(await fetch("https://regenvillage.github.io/data/24/index.json")).json(),e.events.sort((t,s)=>(t.attendees||0)<(s.attendees||0)?1:-1),e.speakers=[];for(const t of e.events)if(t.speakers)for(const s of t.speakers)s.name&&(s.events=[t.id],e.speakers.push(s));return e}async function T(a){return(await fetch("https://regenvillage.github.io/data/schema/1/bundle.json")).json()}async function w({params:a,url:e}){return{params:a,bundle:await f(e.hostname),schema:await T(e.hostname)}}const _=Object.freeze(Object.defineProperty({__proto__:null,load:w},Symbol.toStringTag,{value:"Module"}));export{_,w as l};
