webpackJsonp([6],{CB5c:function(d,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("WT6e"),m=function(){},p=o("bfOx"),t=o("kvIy"),a=o("kxjS"),c=function(){function d(d,e,o,n){this.auth=d,this.authService=e,this.route=o,this.router=n}return d.prototype.ngOnInit=function(){var d=this;this.route.fragment.subscribe(function(e){d.id_token=e.slice(e.indexOf("=")+1,e.indexOf("&")),d.loginSSO(d.id_token)})},d.prototype.loginSSO=function(d){var e=this;this.authService.loginSSO(this.id_token).subscribe(function(){e.router.navigate(["/"+e.auth.url])})},d}(),i=n["\u0275crt"]({encapsulation:2,styles:[],data:{}});function l(d){return n["\u0275vid"](0,[],null,null)}var u=n["\u0275ccf"]("ct-signin-oidc",c,function(d){return n["\u0275vid"](0,[(d()(),n["\u0275eld"](0,0,null,null,1,"ct-signin-oidc",[],null,null,null,l,i)),n["\u0275did"](1,114688,null,0,c,[a.a,t.a,p.ActivatedRoute,p.Router],null,null)],function(d,e){d(e,1,0)},null)},{},{},[]),r=o("DHxI"),M=o("zI1e"),s=o("efkn"),f=o("Xjw4"),g=o("7DMc"),b=o("jcrS"),v=o("oHl+"),D=o("9Sd6"),O=o("XHgV"),h=o("U/+3"),N=o("6sdf"),S=o("1T37"),C=o("+j5Y"),T=o("8tOD"),E=o("z7Rf"),R=o("ItHS"),k=o("OE0E"),U=o("Uo70"),F=o("a9YB"),I=o("NwsS"),y=o("Mcof"),j=o("p5vt"),L={title:"SignInOidc"},B=function(){},Z=o("WtLm"),x=o("FqS2"),W=o("3eEW"),z=o("ovmJ"),H=o("Wt1a"),P=o("or5m"),_=o("ETbk"),w=o("bB2G"),A=o("K8Tv"),Y=o("LiT8"),q=o("YrsX"),K=o("e3dM"),X=o("gsbp"),J=o("AP/s"),V=o("bkcK"),G=o("TBIh"),Q=o("704W"),$=o("ZuzD"),dd=o("sqmn"),ed=o("Bp8q"),od=o("y/Fr"),nd=o("RTvT"),md=o("VWgf"),pd=o("igLL"),td=o("YKDW"),ad=o("fAE3");o.d(e,"SignInOidcModuleNgFactory",function(){return cd});var cd=n["\u0275cmf"](m,[],function(d){return n["\u0275mod"]([n["\u0275mpd"](512,n.ComponentFactoryResolver,n["\u0275CodegenComponentFactoryResolver"],[[8,[u,r.a,M.a,s.a,s.b]],[3,n.ComponentFactoryResolver],n.NgModuleRef]),n["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[n.LOCALE_ID,[2,f["\u0275a"]]]),n["\u0275mpd"](4608,g["\u0275i"],g["\u0275i"],[]),n["\u0275mpd"](4608,b.DomHelper,b.DomHelper,[]),n["\u0275mpd"](4608,v.UtilsService,v.UtilsService,[]),n["\u0275mpd"](6144,D.b,null,[f.DOCUMENT]),n["\u0275mpd"](4608,D.c,D.c,[[2,D.b]]),n["\u0275mpd"](4608,O.a,O.a,[]),n["\u0275mpd"](4608,h.i,h.i,[O.a]),n["\u0275mpd"](4608,h.h,h.h,[h.i,n.NgZone,f.DOCUMENT]),n["\u0275mpd"](136192,h.d,h.b,[[3,h.d],f.DOCUMENT]),n["\u0275mpd"](5120,h.l,h.k,[[3,h.l],[2,h.j],f.DOCUMENT]),n["\u0275mpd"](5120,h.g,h.e,[[3,h.g],n.NgZone,O.a]),n["\u0275mpd"](4608,N.b,N.b,[]),n["\u0275mpd"](5120,S.c,S.a,[[3,S.c],n.NgZone,O.a]),n["\u0275mpd"](5120,S.f,S.e,[[3,S.f],O.a,n.NgZone]),n["\u0275mpd"](4608,C.g,C.g,[S.c,S.f,n.NgZone,f.DOCUMENT]),n["\u0275mpd"](5120,C.c,C.h,[[3,C.c],f.DOCUMENT]),n["\u0275mpd"](4608,C.f,C.f,[S.f,f.DOCUMENT]),n["\u0275mpd"](5120,C.d,C.k,[[3,C.d],f.DOCUMENT]),n["\u0275mpd"](4608,C.a,C.a,[C.g,C.c,n.ComponentFactoryResolver,C.f,C.d,n.ApplicationRef,n.Injector,n.NgZone,f.DOCUMENT]),n["\u0275mpd"](5120,C.i,C.j,[C.a]),n["\u0275mpd"](5120,T.b,T.c,[C.a]),n["\u0275mpd"](4608,T.d,T.d,[C.a,n.Injector,[2,f.Location],[2,T.a],T.b,[3,T.d],C.c]),n["\u0275mpd"](5120,E.d,E.a,[[3,E.d],[2,R.c],k.DomSanitizer,[2,f.DOCUMENT]]),n["\u0275mpd"](4608,U.d,U.d,[]),n["\u0275mpd"](5120,F.c,F.d,[[3,F.c]]),n["\u0275mpd"](5120,I.a,I.b,[C.a]),n["\u0275mpd"](4608,y.d,y.d,[O.a]),n["\u0275mpd"](135680,y.a,y.a,[y.d,n.NgZone]),n["\u0275mpd"](4608,j.b,j.b,[C.a,h.l,n.Injector,y.a,[3,j.b]]),n["\u0275mpd"](4608,g.FormBuilder,g.FormBuilder,[]),n["\u0275mpd"](512,p.RouterModule,p.RouterModule,[[2,p["\u0275a"]],[2,p.Router]]),n["\u0275mpd"](512,B,B,[]),n["\u0275mpd"](512,f.CommonModule,f.CommonModule,[]),n["\u0275mpd"](512,Z.SharedModule,Z.SharedModule,[]),n["\u0275mpd"](512,x.DropdownModule,x.DropdownModule,[]),n["\u0275mpd"](512,g["\u0275ba"],g["\u0275ba"],[]),n["\u0275mpd"](512,g.FormsModule,g.FormsModule,[]),n["\u0275mpd"](512,W.PaginatorModule,W.PaginatorModule,[]),n["\u0275mpd"](512,z.ButtonModule,z.ButtonModule,[]),n["\u0275mpd"](512,H.DialogModule,H.DialogModule,[]),n["\u0275mpd"](512,P.CalendarModule,P.CalendarModule,[]),n["\u0275mpd"](512,_.a,_.a,[]),n["\u0275mpd"](512,w.DpDatePickerModule,w.DpDatePickerModule,[]),n["\u0275mpd"](512,A.a,A.a,[]),n["\u0275mpd"](512,Y.a,Y.a,[]),n["\u0275mpd"](512,q.f,q.f,[]),n["\u0275mpd"](512,K.a,K.a,[]),n["\u0275mpd"](512,D.a,D.a,[]),n["\u0275mpd"](256,U.e,!0,[]),n["\u0275mpd"](512,U.l,U.l,[[2,U.e]]),n["\u0275mpd"](512,O.b,O.b,[]),n["\u0275mpd"](512,U.v,U.v,[]),n["\u0275mpd"](512,h.a,h.a,[]),n["\u0275mpd"](512,X.c,X.c,[]),n["\u0275mpd"](512,N.c,N.c,[]),n["\u0275mpd"](512,J.c,J.c,[]),n["\u0275mpd"](512,V.g,V.g,[]),n["\u0275mpd"](512,S.b,S.b,[]),n["\u0275mpd"](512,C.e,C.e,[]),n["\u0275mpd"](512,T.h,T.h,[]),n["\u0275mpd"](512,E.c,E.c,[]),n["\u0275mpd"](512,G.c,G.c,[]),n["\u0275mpd"](512,Q.b,Q.b,[]),n["\u0275mpd"](512,U.m,U.m,[]),n["\u0275mpd"](512,U.t,U.t,[]),n["\u0275mpd"](512,$.a,$.a,[]),n["\u0275mpd"](512,dd.c,dd.c,[]),n["\u0275mpd"](512,ed.b,ed.b,[]),n["\u0275mpd"](512,od.c,od.c,[]),n["\u0275mpd"](512,U.r,U.r,[]),n["\u0275mpd"](512,I.c,I.c,[]),n["\u0275mpd"](512,y.c,y.c,[]),n["\u0275mpd"](512,j.e,j.e,[]),n["\u0275mpd"](512,nd.a,nd.a,[]),n["\u0275mpd"](512,g.ReactiveFormsModule,g.ReactiveFormsModule,[]),n["\u0275mpd"](512,md.TextMaskModule,md.TextMaskModule,[]),n["\u0275mpd"](512,pd.a,pd.a,[]),n["\u0275mpd"](512,td.g,td.g,[]),n["\u0275mpd"](512,ad.a,ad.a,[]),n["\u0275mpd"](512,m,m,[]),n["\u0275mpd"](1024,p.ROUTES,function(){return[[{path:"",component:c,data:L}]]},[])])})}});