(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{kSBl:function(t,e,i){"use strict";i.r(e),i.d(e,"OxygenSupplyModule",function(){return Y});var a=i("ofXK"),n=i("tyNb"),c=i("R0Ic"),r=i("M9IT"),s=i("Dh3D"),o=i("+0xr"),l=i("a0Xn"),b=i("6n/F"),d=i("fXoL"),u=i("jr3z"),m=i("jhN1"),p=i("Xa2L"),h=i("Wp6s"),f=i("bTqV"),T=i("NFeN"),S=i("HDdC");function w(t,e){1&t&&d.ic(0,0,["*ngIf","isTwitterScriptLoading"])}const g=["*"];let x=(()=>{class t{constructor(t){this._document=t,this.TWITTER_OBJECT="twttr",this.TWITTER_SCRIPT_ID="twitter-wjs",this.TWITTER_WIDGET_URL="https://platform.twitter.com/widgets.js"}loadScript(){return S.a.create(t=>{this._startScriptLoad(),this._document.defaultView[this.TWITTER_OBJECT].ready(this._onTwitterScriptLoadedFactory(t))})}_startScriptLoad(){const t=this._document.defaultView[this.TWITTER_OBJECT]||{};this._twitterScriptAlreadyExists()||(this._appendTwitterScriptToDOM(),t._e=[],t.ready=e=>{t._e.push(e)}),this._document.defaultView[this.TWITTER_OBJECT]=t}_twitterScriptAlreadyExists(){const t=this._document.getElementById(this.TWITTER_SCRIPT_ID);return null!==t||"object"!=typeof t}_appendTwitterScriptToDOM(){const t=this._document.getElementsByTagName("script")[0],e=this._document.createElement("script");e.id=this.TWITTER_SCRIPT_ID,e.src=this.TWITTER_WIDGET_URL,t.parentNode.insertBefore(e,t)}_onTwitterScriptLoadedFactory(t){return e=>{t.next(e),t.complete()}}}return t.\u0275fac=function(e){return new(e||t)(d.Xb(a.d))},t.\u0275prov=d.Jb({token:t,factory:t.\u0275fac}),t})(),y=(()=>{class t{constructor(t,e,i){this._elementRef=t,this._ngxTweetService=e,this._changeDetectorRef=i,this.isTwitterScriptLoading=!0}ngOnInit(){this._loadTwitterScript()}_loadTwitterScript(){this._ngxTweetService.loadScript().subscribe(t=>{this._updateTwitterScriptLoadingState(),t.widgets.createTweet(this.tweetId,this._elementRef.nativeElement,{})})}_updateTwitterScriptLoadingState(){this.isTwitterScriptLoading=!1,this._changeDetectorRef.detectChanges()}}return t.\u0275fac=function(e){return new(e||t)(d.Nb(d.l),d.Nb(x),d.Nb(d.h))},t.\u0275cmp=d.Hb({type:t,selectors:[["ngx-tweet"]],inputs:{tweetId:"tweetId"},ngContentSelectors:g,decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,e){1&t&&(d.jc(),d.xc(0,w,1,0,"ng-content",0)),2&t&&d.kc("ngIf",e.isTwitterScriptLoading)},directives:[a.l],styles:[".twitter-tweet { transform: none !important; }"],encapsulation:2,changeDetection:0}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Lb({type:t}),t.\u0275inj=d.Kb({providers:[x],imports:[[a.c]]}),t})();function v(t,e){1&t&&(d.Tb(0,"div",20),d.Tb(1,"div",21),d.Ob(2,"mat-spinner"),d.Sb(),d.Sb())}function D(t,e){if(1&t&&(d.Rb(0),d.Ob(1,"div",23),d.Qb()),2&t){const t=d.ec(2);d.Cb(1),d.kc("chart",t.chart)}}function _(t,e){if(1&t&&(d.Tb(0,"div",3),d.xc(1,D,2,1,"ng-container",22),d.Sb()),2&t){const t=d.ec();d.Cb(1),d.kc("ngIf",t.chart)}}function k(t,e){if(1&t&&(d.Tb(0,"b"),d.yc(1),d.Sb()),2&t){const t=e.$implicit,i=e.last,a=d.ec(2);d.Cb(1),d.Bc(" ",t,"",a.treeFilters.length>1&&!i?", ":""," ")}}function I(t,e){if(1&t){const t=d.Ub();d.Tb(0,"mat-card",24),d.Tb(1,"div",25),d.Tb(2,"div",21),d.yc(3," Currently Filtered By: "),d.xc(4,k,2,2,"b",26),d.Sb(),d.Tb(5,"div",3),d.Tb(6,"button",27),d.ac("click",function(){return d.rc(t),d.ec().removeTreeFilters()}),d.yc(7,"Clear Filters"),d.Sb(),d.Sb(),d.Sb(),d.Sb()}if(2&t){const t=d.ec();d.Cb(4),d.kc("ngForOf",t.treeFilters)}}function O(t,e){1&t&&(d.Tb(0,"th",28),d.yc(1," Date "),d.Sb())}function R(t,e){if(1&t&&(d.Tb(0,"td",29),d.yc(1),d.fc(2,"date"),d.Sb()),2&t){const t=e.$implicit;d.Cb(1),d.Ac(" ",d.hc(2,1,t.date,"MMM dd, yyyy h:mm:ss a z")," ")}}function F(t,e){1&t&&(d.Tb(0,"th",28),d.yc(1," Text "),d.Sb())}function E(t,e){if(1&t&&(d.Tb(0,"td",29),d.yc(1),d.Sb()),2&t){const t=e.$implicit;d.Cb(1),d.Ac(" ",t.text," ")}}function L(t,e){1&t&&(d.Tb(0,"th",28),d.yc(1," Username "),d.Sb())}function j(t,e){if(1&t&&(d.Tb(0,"td",29),d.yc(1),d.Sb()),2&t){const t=e.$implicit;d.Cb(1),d.Ac(" ",t.username," ")}}function N(t,e){1&t&&(d.Tb(0,"th",28),d.yc(1," Location "),d.Sb())}function A(t,e){if(1&t&&(d.Tb(0,"td",29),d.yc(1),d.Sb()),2&t){const t=e.$implicit;d.Cb(1),d.Ac(" ",t.location," ")}}function M(t,e){1&t&&(d.Tb(0,"th",28),d.yc(1," Link "),d.Sb())}function $(t,e){if(1&t&&(d.Tb(0,"td",29),d.Tb(1,"a",30),d.Tb(2,"button",31),d.Tb(3,"mat-icon"),d.yc(4,"link"),d.Sb(),d.Sb(),d.Sb(),d.Sb()),2&t){const t=e.$implicit;d.Cb(1),d.kc("href",t.link,d.sc)}}function z(t,e){1&t&&(d.Tb(0,"th",28),d.yc(1," Followers "),d.Sb())}function J(t,e){if(1&t&&(d.Tb(0,"td",29),d.yc(1),d.Sb()),2&t){const t=e.$implicit;d.Cb(1),d.Ac(" ",t.followers," ")}}function W(t,e){if(1&t&&(d.Tb(0,"div",3),d.Ob(1,"ngx-tweet",35),d.Sb()),2&t){const t=d.ec().$implicit;d.Cb(1),d.kc("tweetId",t.id)}}function B(t,e){if(1&t&&(d.Tb(0,"td",29),d.Tb(1,"div",32),d.Tb(2,"div",33),d.Tb(3,"div",3),d.Tb(4,"b"),d.yc(5,"Username: "),d.Sb(),d.yc(6),d.Sb(),d.Tb(7,"div",3),d.Tb(8,"b"),d.yc(9,"Location: "),d.Sb(),d.yc(10),d.Sb(),d.Tb(11,"div",3),d.Tb(12,"b"),d.yc(13,"Followers: "),d.Sb(),d.yc(14),d.Sb(),d.Tb(15,"div",3),d.Tb(16,"b"),d.yc(17,"Labels: "),d.Sb(),d.yc(18),d.Sb(),d.Tb(19,"div",21),d.Tb(20,"a",30),d.Tb(21,"button",31),d.Tb(22,"mat-icon"),d.yc(23,"link"),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(24,"div",34),d.xc(25,W,2,1,"div",2),d.Sb(),d.Sb(),d.Sb()),2&t){const t=e.$implicit,i=d.ec();d.Db("colspan",i.displayedColumns.length),d.Cb(1),d.kc("@detailExpand",t==i.expandedElement?"expanded":"collapsed"),d.Cb(5),d.Ac("",t.username," "),d.Cb(4),d.Ac("",t.location," "),d.Cb(4),d.Ac("",t.followers," "),d.Cb(4),d.Ac("",t.labels," "),d.Cb(2),d.kc("href",t.link,d.sc),d.Cb(5),d.kc("ngIf",t===i.expandedElement)}}function Q(t,e){1&t&&d.Ob(0,"tr",36)}function P(t,e){if(1&t){const t=d.Ub();d.Tb(0,"tr",37),d.ac("click",function(){d.rc(t);const i=e.$implicit,a=d.ec();return a.expandedElement=a.expandedElement===i?null:i}),d.Sb()}if(2&t){const t=e.$implicit,i=d.ec();d.Fb("example-expanded-row",i.expandedElement===t)}}function U(t,e){1&t&&d.Ob(0,"tr",38)}const H=function(){return["expandedDetail"]},V=function(){return[5,10,25,100]},X="No Labels",K=[{path:"",component:(()=>{class t{constructor(t,e){this.tweetDataService=t,this.sanitizer=e,this.dataSource=new o.k([]),this.displayedColumns=["date","text"],this.now=new Date,this.treeFilters=[],this.treeData=[],this.isLoaded=!1}ngOnInit(){this.tweetDataService.loadedSubject.subscribe(t=>{this.isLoaded=t}),this.tweetDataService.getTweetDataSubject().subscribe(t=>{const e=this.mapTweets(t);this.removeTreeFilters(),this.setDataSource(e),this.setTreemapData(e)}),this.tweetDataService.getNewTweetObservable().subscribe(t=>{const e=this.mapTweets(t);console.log("adding tweets: ",e);const i=this.dataSource.data;i.unshift(...e),this.dataSource.data=i,this.chart&&this.updateTreeMapData(e)})}mapTweets(t){return t.map(t=>({date:new Date(t["@timestamp"]),text:t.text,username:t.user?t.user.name:"Missing",location:t.place?`${t.place.name}, ${t.place.country}`:"Missing",link:`http://twitter.com/${t.user.screen_name}/status/${t.id_str}`,followers:+((t.user?t.user.followers_count:"")||0),labels:t.preds_label||[],id:t.id_str}))}initChart(){this.chart&&this.chart.destroy(),this.chart=new l.a({chart:{type:"treemap"},credits:{enabled:!1},title:{text:"Labels"},colorAxis:{minColor:"#FFFFFF",maxColor:Object(b.getOptions)().colors[0]},series:[]})}generateChartSeries(t,e){return t.reduce((t,e)=>{if(0===e.labels.length)return t[0].value=t[0].value+1,t;if("string"==typeof e.labels)try{e.labels=JSON.parse(e.labels.replace(/\'/g,'"'))}catch(i){e.labels="related"===e.labels?[]:[e.labels]}return e.labels.forEach(e=>{const i=t.find(t=>t.name===e);i?i.value=i.value+1:t.push({name:e,value:1,colorValue:t.length+1})}),t},e||[{name:X,value:0,colorValue:1}])}setTreemapData(t){this.initChart();const e=this.generateChartSeries(t);this.treeData=e,this.chart.addSeries({type:"treemap",layoutAlgorithm:"squarified",events:{click:t=>{this.treeFilters.includes(t.point.name)?this.treeFilters=this.treeFilters.filter(e=>e!==t.point.name):this.treeFilters.push(t.point.name),this.dataSource.filter=JSON.stringify(this.treeFilters)}},data:e},!0,!0)}updateTreeMapData(t){const e=this.chart.ref.series[0],i=this.generateChartSeries(t,this.treeData);this.treeData=i,e.setData(i)}setDataSource(t){this.dataSource=new o.k([]),this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,this.dataSource.filterPredicate=(t,e)=>{if("[]"===e)return!0;const i=JSON.parse(e);return!(!i.includes(X)||0!==t.labels.length)||i.some(e=>t.labels.includes(e))},this.dataSource.data=t}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}removeTreeFilters(){this.treeFilters=[],this.dataSource.filter=JSON.stringify(this.treeFilters)}getSafeUrl(t){return this.sanitizer.bypassSecurityTrustUrl(t)}}return t.\u0275fac=function(e){return new(e||t)(d.Nb(u.a),d.Nb(m.b))},t.\u0275cmp=d.Hb({type:t,selectors:[["app-oxygen-supply"]],viewQuery:function(t,e){if(1&t&&(d.Cc(r.a,3),d.Cc(s.a,3)),2&t){let t;d.oc(t=d.bc())&&(e.paginator=t.first),d.oc(t=d.bc())&&(e.sort=t.first)}},decls:33,vars:12,consts:[["class","row",4,"ngIf"],[1,"row","flex-column"],["class","col",4,"ngIf"],[1,"col"],["class","mat-elevation-z5",4,"ngIf"],[1,"col","mt-3"],["mat-table","","matSort","","multiTemplateDataRows","",1,"mat-elevation-z5","w-100",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","text"],["matColumnDef","username"],["matColumnDef","location"],["matColumnDef","link"],["matColumnDef","followers"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","example-element-row",3,"example-expanded-row","click",4,"matRowDef","matRowDefColumns"],["mat-row","","class","example-detail-row",4,"matRowDef","matRowDefColumns"],[1,"mat-elevation-z5","w-100",3,"pageSizeOptions","pageSize"],[1,"row"],[1,"col-auto"],[4,"ngIf"],[3,"chart"],[1,"mat-elevation-z5"],[1,"row","align-items-baseline"],[4,"ngFor","ngForOf"],["mat-button","",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["target","_blank",3,"href"],["mat-icon-button",""],[1,"example-element-detail","row"],[1,"col-auto","row","flex-column","align-items-baseline"],[1,"col","row"],[3,"tweetId"],["mat-header-row",""],["mat-row","",1,"example-element-row",3,"click"],["mat-row","",1,"example-detail-row"]],template:function(t,e){1&t&&(d.xc(0,v,3,0,"div",0),d.Tb(1,"div",1),d.xc(2,_,2,1,"div",2),d.Tb(3,"div",3),d.xc(4,I,8,1,"mat-card",4),d.Sb(),d.Tb(5,"div",5),d.Tb(6,"table",6),d.Rb(7,7),d.xc(8,O,2,0,"th",8),d.xc(9,R,3,4,"td",9),d.Qb(),d.Rb(10,10),d.xc(11,F,2,0,"th",8),d.xc(12,E,2,1,"td",9),d.Qb(),d.Rb(13,11),d.xc(14,L,2,0,"th",8),d.xc(15,j,2,1,"td",9),d.Qb(),d.Rb(16,12),d.xc(17,N,2,0,"th",8),d.xc(18,A,2,1,"td",9),d.Qb(),d.Rb(19,13),d.xc(20,M,2,0,"th",8),d.xc(21,$,5,1,"td",9),d.Qb(),d.Rb(22,14),d.xc(23,z,2,0,"th",8),d.xc(24,J,2,1,"td",9),d.Qb(),d.Rb(25,15),d.xc(26,B,26,8,"td",9),d.Qb(),d.xc(27,Q,1,0,"tr",16),d.xc(28,P,1,2,"tr",17),d.xc(29,U,1,0,"tr",18),d.Sb(),d.Sb(),d.Tb(30,"div",5),d.Ob(31,"mat-paginator",19),d.Sb(),d.Sb(),d.yc(32)),2&t&&(d.kc("ngIf",!e.isLoaded),d.Cb(2),d.kc("ngIf",e.isLoaded),d.Cb(2),d.kc("ngIf",e.treeFilters.length),d.Cb(2),d.kc("dataSource",e.dataSource),d.Cb(21),d.kc("matHeaderRowDef",e.displayedColumns),d.Cb(1),d.kc("matRowDefColumns",e.displayedColumns),d.Cb(1),d.kc("matRowDefColumns",d.lc(10,H)),d.Cb(2),d.kc("pageSizeOptions",d.lc(11,V))("pageSize",10),d.Cb(1),d.Ac(" ",e.now.toJSON(),""))},directives:[a.l,o.j,s.a,o.c,o.e,o.b,o.g,o.i,r.a,p.b,l.b,h.a,a.k,f.a,o.d,s.b,o.a,T.a,y,o.f,o.h],pipes:[a.e],styles:["tr.example-detail-row[_ngcontent-%COMP%]{height:0}.example-element-detail[_ngcontent-%COMP%]{overflow:hidden;display:flex}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover{background:#f5f5f5}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active{background:#efefef}"],data:{animation:[Object(c.m)("detailExpand",[Object(c.j)("collapsed",Object(c.k)({height:"0px",minHeight:"0"})),Object(c.j)("expanded",Object(c.k)({height:"*"})),Object(c.l)("expanded <=> collapsed",Object(c.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Lb({type:t}),t.\u0275inj=d.Kb({imports:[[n.b.forChild(K)],n.b]}),t})();var G=i("vvyD");let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Lb({type:t}),t.\u0275inj=d.Kb({imports:[[a.c,l.c,q,G.a,C]]}),t})()}}]);