function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"ct+p":function(n,e,t){"use strict";t.r(e);var c,o=t("ofXK"),r=t("fXoL"),s=t("tyNb"),a=t("HDdC"),i=t("+qrf"),f=[1,"tag","secondary"],u=((c=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).ngFactoryDef=function(n){return new(n||c)},c.ngComponentDef=r.Wb({type:c,selectors:[["app-dashboard"]],inputs:{numProjects:"numProjects"},consts:5,vars:1,template:function(n,e){1&n&&(r.ic(0,"p"),r.Jc(1," You have "),r.ic(2,"mark",f),r.Jc(3),r.gc(),r.Jc(4," projects.\n"),r.gc()),2&n&&(r.Pb(3),r.Kc(e.numProjects))},styles:[""]}),c),l=[4,"ngIf","ngIfElse"],p=["loading",""],g=[3,"numProjects"];function d(n,e){if(1&n&&(r.fc(0),r.dc(1,"app-dashboard",g),r.ec()),2&n){var t=e.ngIf;r.Pb(1),r.vc("numProjects",t)}}function h(n,e){1&n&&(r.ic(0,"p"),r.Jc(1,"No projects."),r.gc())}var m,y,C=[{path:"",component:(m=function(){function n(e){_classCallCheck(this,n),this.projectsService=e,this.numProjects$=new a.a}return _createClass(n,[{key:"ngOnInit",value:function(){this.numProjects$=this.projectsService.getCount()}}]),n}(),m.ngFactoryDef=function(n){return new(n||m)(r.cc(i.a))},m.ngComponentDef=r.Wb({type:m,selectors:[["app-home"]],consts:4,vars:4,template:function(n,e){if(1&n&&(r.Hc(0,d,2,1,"ng-container",l),r.rc(1,"async"),r.Hc(2,h,2,0,"ng-template",null,p,r.Ic)),2&n){var t=r.yc(3);r.vc("ngIf",r.sc(1,2,e.numProjects$))("ngIfElse",t)}},directives:[o.k,u],pipes:[o.b],styles:[""]}),m)}],v=((y=function n(){_classCallCheck(this,n)}).ngModuleDef=r.ac({type:y}),y.ngInjectorDef=r.Zb({factory:function(n){return new(n||y)},imports:[[s.d.forChild(C)],s.d]}),y);s.d.forChild(C),t.d(e,"HomeModule",function(){return j});var b,j=((b=function n(){_classCallCheck(this,n)}).ngModuleDef=r.ac({type:b}),b.ngInjectorDef=r.Zb({factory:function(n){return new(n||b)},imports:[[o.c,v]]}),b)}}]);