function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{TFVh:function(e,t,n){"use strict";n.r(t),n.d(t,"DemoModule",(function(){return x}));var i=n("ofXK"),a=n("tk/3"),c=n("tyNb"),v=n("Nrjh"),r=n("/om3"),s=n("dBcC"),d=n("lJxs"),o=n("cbJd"),l=n("9ig3"),w=n("aetl"),f=n("M34a"),h=n("jKzE"),u=n("L8hi"),p=n("piIK"),m=n("sWYD"),y=n("WIjQ"),C=n("G6Tw"),D=n("G6HM"),g=n("fXoL"),k=n("Vpa8"),b=n("kx+m"),O=n("1xDM"),I=n("e096");function _(e,t){1&e&&(g.id(0,"\n  "),g.mc(1,"div",3),g.id(2,"\n    "),g.ic(3,"i",4),g.id(4," "),g.ic(5,"br"),g.id(6,"\n    Loading events...\n  "),g.lc(),g.id(7,"\n"))}function J(e,t){if(1&e){var n=g.nc();g.mc(0,"mwl-calendar-month-view",8),g.yc("dayClicked",(function(e){return g.Zc(n),g.Ac(2).dayClicked(e.day)}))("eventClicked",(function(e){return g.Zc(n),g.Ac(2).eventClicked(e.event)})),g.id(1,"\n    "),g.lc()}if(2&e){var i=g.Ac().$implicit,a=g.Ac();g.Jc("viewDate",a.viewDate)("events",i)("activeDayIsOpen",a.activeDayIsOpen)}}function M(e,t){if(1&e){var n=g.nc();g.mc(0,"mwl-calendar-week-view",9),g.yc("eventClicked",(function(e){return g.Zc(n),g.Ac(2).eventClicked(e.event)})),g.id(1,"\n    "),g.lc()}if(2&e){var i=g.Ac().$implicit,a=g.Ac();g.Jc("viewDate",a.viewDate)("events",i)}}function j(e,t){if(1&e){var n=g.nc();g.mc(0,"mwl-calendar-day-view",9),g.yc("eventClicked",(function(e){return g.Zc(n),g.Ac(2).eventClicked(e.event)})),g.id(1,"\n    "),g.lc()}if(2&e){var i=g.Ac().$implicit,a=g.Ac();g.Jc("viewDate",a.viewDate)("events",i)}}function A(e,t){if(1&e&&(g.mc(0,"div"),g.id(1,"\n  "),g.mc(2,"div",5),g.id(3,"\n    "),g.gd(4,J,2,3,"mwl-calendar-month-view",6),g.id(5,"\n    "),g.gd(6,M,2,2,"mwl-calendar-week-view",7),g.id(7,"\n    "),g.gd(8,j,2,2,"mwl-calendar-day-view",7),g.id(9,"\n  "),g.lc(),g.id(10,"\n"),g.lc()),2&e){var n=g.Ac();g.Ub(2),g.Jc("ngSwitch",n.view),g.Ub(2),g.Jc("ngSwitchCase","month"),g.Ub(2),g.Jc("ngSwitchCase","week"),g.Ub(2),g.Jc("ngSwitchCase","day")}}var E=function(){function e(t){_classCallCheck(this,e),this.http=t,this.view=o.a.Month,this.viewDate=new Date,this.activeDayIsOpen=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.fetchEvents()}},{key:"fetchEvents",value:function(){var e=this,t={month:l.a,week:w.a,day:f.a}[this.view],n={month:h.a,week:u.a,day:p.a}[this.view],i=(new a.c).set("primary_release_date.gte",Object(m.a)(t(this.viewDate),"yyyy-MM-dd")).set("primary_release_date.lte",Object(m.a)(n(this.viewDate),"yyyy-MM-dd")).set("api_key","0ec33936a68018857d727958dca1424f");this.events$=this.http.get("https://api.themoviedb.org/3/discover/movie",{params:i}).pipe(Object(d.a)((function(t){return t.results.map((function(t){return{title:t.title,start:new Date(t.release_date+(n=e.viewDate,i=n.getTimezoneOffset(),"T00:00:00".concat(i>0?"-":"+").concat(String(Math.floor(Math.abs(i/60))).padStart(2,"0"),":").concat(String(Math.abs(i%60)).padEnd(2,"0")))),color:D.a.yellow,allDay:!0,meta:{film:t}};var n,i}))})))}},{key:"dayClicked",value:function(e){var t=e.date,n=e.events;Object(y.a)(t,this.viewDate)&&(Object(C.a)(this.viewDate,t)&&!0===this.activeDayIsOpen||0===n.length?this.activeDayIsOpen=!1:(this.activeDayIsOpen=!0,this.viewDate=t))}},{key:"eventClicked",value:function(e){window.open("https://www.themoviedb.org/movie/".concat(e.meta.film.id),"_blank")}}]),e}();E.\u0275fac=function(e){return new(e||E)(g.hc(a.a))},E.\u0275cmp=g.bc({type:E,selectors:[["mwl-demo-component"]],decls:9,vars:6,consts:[[3,"view","viewDate","viewChange","viewDateChange"],["loading",""],[4,"ngIf","ngIfElse"],[1,"text-center"],[1,"fas","fa-spin","fa-spinner","fa-5x"],[3,"ngSwitch"],[3,"viewDate","events","activeDayIsOpen","dayClicked","eventClicked",4,"ngSwitchCase"],[3,"viewDate","events","eventClicked",4,"ngSwitchCase"],[3,"viewDate","events","activeDayIsOpen","dayClicked","eventClicked"],[3,"viewDate","events","eventClicked"]],template:function(e,t){if(1&e&&(g.mc(0,"mwl-demo-utils-calendar-header",0),g.yc("viewChange",(function(e){return t.view=e}))("viewDateChange",(function(e){return t.viewDate=e}))("viewDateChange",(function(){return t.fetchEvents()}))("viewChange",(function(){return t.fetchEvents()})),g.id(1,"\n"),g.lc(),g.id(2,"\n\n"),g.gd(3,_,8,0,"ng-template",null,1,g.hd),g.id(5,"\n\n"),g.gd(6,A,11,4,"div",2),g.Bc(7,"async"),g.id(8,"\n")),2&e){var n=g.Wc(4);g.Jc("view",t.view)("viewDate",t.viewDate),g.Ub(6),g.Jc("ngIf",g.Cc(7,4,t.events$))("ngIfElse",n)}},directives:[k.a,i.o,i.q,i.r,b.a,O.a,I.a],pipes:[i.b],encapsulation:2,changeDetection:0});var S=n("j1vE"),x=function e(){_classCallCheck(this,e)};x.\u0275mod=g.fc({type:x}),x.\u0275inj=g.ec({factory:function(e){return new(e||x)},imports:[[i.c,a.b,v.a.forRoot({provide:r.a,useFactory:S.a}),s.a,c.e.forChild([{path:"",component:E}])]]})}}]);