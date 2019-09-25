webpackJsonp([3],{"+IIK":function(n,e,t){var l;l=function(){return function(n){var e={};function t(l){if(e[l])return e[l].exports;var o=e[l]={exports:{},id:l,loaded:!1};return n[l].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}return t.m=n,t.c=e,t.p="",t(0)}([function(n,e,t){"use strict";var l=t(1),o=t(3),r=t(4),i=t(5),u=t(6),s=t(7),a=t(8),d=t(10),c=t(11),p=function(){function n(){}return n.getContext=function(n){return console.log("getContext..."),new l.AuthenticationContext(n,new o.LocalStorage,new r.Navigator,new u.GuidGenerator,new i.AadUrlBuilder(new u.GuidGenerator),new s.UserDecoder,new c.AadLogoutUrlBuilder)},n.getAadRedirectProcessor=function(){return new a.AadRedirectProcessor(new d.QueryStringDeserializer,new s.UserDecoder,new o.LocalStorage,window)},n}();e.Authentication=p},function(n,e,t){"use strict";var l=t(2),o=function(){function n(n,e,t,o,r,i,u){this.CONSTANTS=l.Constants,this.REQUEST_TYPES=l.RequestTypes,this.storage=e,this.navigator=t,this.config=n,this.guidGenerator=o,this.aadUrlBuilder=r,this.userDecoder=i,this.logoutUrlBuilder=u}return n.prototype.login=function(){if(this.loginInProgress)this.info("Login in progress");else{var n=this.cloneConfig(this.config);n.nonce=this.guidGenerator.generate(),n.state=this.guidGenerator.generate(),this.verbose("Expected state: "+n.state+" startPage:"+window.location),this.storage.setItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST,window.location),this.storage.setItem(this.CONSTANTS.STORAGE.STATE_LOGIN,n.state),this.storage.setItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,n.nonce),this.storage.setItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,""),this.storage.setItem(this.CONSTANTS.STORAGE.ERROR,""),this.storage.setItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"");var e=this.aadUrlBuilder.with(n).build();this.navigator.navigate(e),this.loginInProgress=!0}},n.prototype.getUser=function(){var n=this.storage.getItem(l.Constants.STORAGE.IDTOKEN);try{return this.userDecoder.decode(n)}catch(n){return console&&console.debug&&console.debug("getUser() returns null on catched error. Details >> "+n.toString()),null}},n.prototype.logout=function(){if(""===this.storage.getItem(l.Constants.STORAGE.IDTOKEN))return null;this.storage.setItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,""),this.storage.setItem(this.CONSTANTS.STORAGE.STATE_LOGIN,""),this.storage.setItem(this.CONSTANTS.STORAGE.IDTOKEN,"");var n=this.logoutUrlBuilder.with(this.config.tenant,this.config.postLogoutRedirectUrl).build();this.navigator.navigate(n)},n.prototype.verbose=function(n){},n.prototype.info=function(n){},n.prototype.createOptions=function(){return{nonce:this.idTokenNonce,tenant:this.config.tenant,clientId:this.config.clientId}},n.prototype.cloneConfig=function(n){if(null===n||"object"!=typeof n)return n;var e={};for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e},n}();e.AuthenticationContext=o},function(n,e){"use strict";e.Constants={ACCESS_TOKEN:"access_token",EXPIRES_IN:"expires_in",ID_TOKEN:"id_token",ERROR_DESCRIPTION:"error_description",SESSION_STATE:"session_state",STORAGE:{TOKEN_KEYS:"adal.token.keys",ACCESS_TOKEN_KEY:"adal.access.token.key",EXPIRATION_KEY:"adal.expiration.key",STATE_LOGIN:"adal.state.login",STATE_RENEW:"adal.state.renew",NONCE_IDTOKEN:"adal.nonce.idtoken",SESSION_STATE:"adal.session.state",USERNAME:"adal.username",IDTOKEN:"adal.idtoken",ERROR:"adal.error",ERROR_DESCRIPTION:"adal.error.description",LOGIN_REQUEST:"adal.login.request",LOGIN_ERROR:"adal.login.error",RENEW_STATUS:"adal.token.renew.status"},RESOURCE_DELIMETER:"|",LOADFRAME_TIMEOUT:"6000",TOKEN_RENEW_STATUS_CANCELED:"Canceled",TOKEN_RENEW_STATUS_COMPLETED:"Completed",TOKEN_RENEW_STATUS_IN_PROGRESS:"In Progress",LOGGING_LEVEL:{ERROR:0,WARN:1,INFO:2,VERBOSE:3},LEVEL_STRING_MAP:{0:"ERROR:",1:"WARNING:",2:"INFO:",3:"VERBOSE:"}},e.RequestTypes={LOGIN:"LOGIN",RENEW_TOKEN:"RENEW_TOKEN",UNKNOWN:"UNKNOWN"}},function(n,e){"use strict";var t=function(){function n(){}return n.prototype.setItem=function(n,e){localStorage.setItem(n,e)},n.prototype.getItem=function(n){return localStorage.getItem(n)},n}();e.LocalStorage=t},function(n,e){"use strict";var t=function(){function n(){}return n.prototype.navigate=function(n){window.location.replace(n)},n}();e.Navigator=t},function(n,e){"use strict";var t=function(){function n(n){this.addLibMetadata=function(){return"&x-client-SKU=Js&x-client-Ver="+this.libVersion},this.guidGenerator=n,this.state=this.guidGenerator.generate(),this.clientRequestId=this.guidGenerator.generate(),this.responseType="id_token",this.libVersion="1.0.0",this.redirectUri=window.location.href}return n.prototype.with=function(n){return this.nonce=n.nonce,this.tenant=n.tenant,this.clientId=n.clientId,this.responseType=n.responseType||this.responseType,this.redirectUri=n.redirectUri||this.redirectUri,this.state=n.state,this.slice=n.slice||this.slice,this.clientRequestId=n.clientRequestId||this.clientRequestId,this.libVersion=n.libVersion||this.libVersion,this.extraQueryParameter=n.extraQueryParameter||this.extraQueryParameter,this},n.prototype.build=function(){var e=n.MicrosoftLoginUrl+this.tenant+"/oauth2/authorize";return(e=e+this.serialize()+this.addLibMetadata())+"&nonce="+encodeURIComponent(this.nonce)},n.prototype.serialize=function(){var n=[];return n.push("?response_type="+this.responseType),n.push("client_id="+encodeURIComponent(this.clientId)),this.resource&&n.push("resource="+encodeURIComponent(this.resource)),n.push("redirect_uri="+encodeURIComponent(this.redirectUri)),n.push("state="+encodeURIComponent(this.state)),this.slice&&n.push("slice="+encodeURIComponent(this.slice)),this.extraQueryParameter&&n.push(this.extraQueryParameter),n.push("client-request-id="+encodeURIComponent(this.clientRequestId)),n.join("&")},n.MicrosoftLoginUrl="https://login.microsoftonline.com/",n}();e.AadUrlBuilder=t},function(n,e){"use strict";var t=function(){function n(){}return n.prototype.generate=function(){for(var n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",e="0123456789abcdef",t=0,l="",o=0;o<36;o++)"-"!==n[o]&&"4"!==n[o]&&(t=16*Math.random()|0),"x"===n[o]?l+=e[t]:"y"===n[o]?(t&=3,l+=e[t|=8]):l+=n[o];return l},n.prototype.decimalToHex=function(n){for(var e=n.toString(16);e.length<2;)e="0"+e;return e},n}();e.GuidGenerator=t},function(n,e){"use strict";var t=function(){function n(){this.decodeJwt=function(n){var e=/^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(n);if(!e||e.length<4)throw new Error("Failed to decode Jwt token. The token has in valid format. Actual token: '"+n+"'");return{header:e[1],JWSPayload:e[2],JWSSig:e[3]}},this.base64DecodeStringUrlSafe=function(n){return n=n.replace(/-/g,"+").replace(/_/g,"/"),window.atob?decodeURIComponent(escape(window.atob(n))):decodeURIComponent(escape(this.decodeBase64(n)))}}return n.prototype.decode=function(n){var e=this.decodeJwt(n);if(!e)throw Error("Failed to decode value. Value has invalid format.");var t=this.safeDecodeBase64(e.JWSPayload);return JSON.parse(t)},n.prototype.safeDecodeBase64=function(n){var e=this.base64DecodeStringUrlSafe(n);if(!e)throw Error("Failed to base64 decode value. Value has invalid format.");return e},n.prototype.decodeBase64=function(n){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t=(n=String(n).replace(/=+$/,"")).length;if(t%4==1)throw new Error("The token to be decoded is not correctly encoded.");for(var l,o,r,i,u,s,a,d="",c=0;c<t;c+=4){if(l=e.indexOf(n.charAt(c)),o=e.indexOf(n.charAt(c+1)),r=e.indexOf(n.charAt(c+2)),i=e.indexOf(n.charAt(c+3)),c+2===t-1){s=(u=l<<18|o<<12|r<<6)>>16&255,a=u>>8&255,d+=String.fromCharCode(s,a);break}if(c+1===t-1){s=(u=l<<18|o<<12)>>16&255,d+=String.fromCharCode(s);break}s=(u=l<<18|o<<12|r<<6|i)>>16&255,a=u>>8&255,d+=String.fromCharCode(s,a,255&u)}return d},n.prototype.isEmpty=function(n){return"undefined"==typeof n||!n||0===n.length},n}();e.UserDecoder=t},function(n,e,t){"use strict";var l=t(2),o=t(9),r=function(){function n(n,e,t,l){this.queryStringDeserializer=n,this.userDecoder=e,this.storage=t,this.window=l}return n.prototype.process=function(){var n=this.queryStringDeserializer.deserialize(this.window.location.hash),e=new o.AadRedirectUrl(n);return e.isAadRedirect()&&(this.userDecoder.decode(e.idToken),this.storage.setItem(l.Constants.STORAGE.IDTOKEN,e.idToken),this.window.location.assign(this.storage.getItem(l.Constants.STORAGE.LOGIN_REQUEST))),e.isAadRedirect()},n}();e.AadRedirectProcessor=r},function(n,e,t){"use strict";var l=t(2),o=function(){function n(n){this.object=n}return Object.defineProperty(n.prototype,"idToken",{get:function(){return this.object[l.Constants.ID_TOKEN]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"expiresIn",{get:function(){return this.object[l.Constants.EXPIRES_IN]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"accesToken",{get:function(){return this.object[l.Constants.ACCESS_TOKEN]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"sessionState",{get:function(){return this.object[l.Constants.SESSION_STATE]},enumerable:!0,configurable:!0}),n.prototype.isAadRedirect=function(){return this.object.hasOwnProperty(l.Constants.ERROR_DESCRIPTION)||this.object.hasOwnProperty(l.Constants.ACCESS_TOKEN)||this.object.hasOwnProperty(l.Constants.ID_TOKEN)},n}();e.AadRedirectUrl=o},function(n,e,t){"use strict";var l=t(2),o=function(){function n(){this.plRegex=/\+/g}return n.prototype.deserialize=function(n){var e;n=this.trimHashSign(n);var t=/([^&=]+)=([^&]*)/g,l={};for(e=t.exec(n);e;)l[this.decode(e[1])]=this.decode(e[2]),e=t.exec(n);return l},n.prototype.decode=function(n){return decodeURIComponent(n.replace(this.plRegex," "))},n.prototype.trimHashSign=function(n){return n.indexOf("#/")>-1?n=n.substring(n.indexOf("#/")+2):n.indexOf("#")>-1&&(n=n.substring(1)),n},n}();e.QueryStringDeserializer=o,e.hasAadProps=function(n){return n.hasOwnProperty(l.Constants.ERROR_DESCRIPTION)||n.hasOwnProperty(l.Constants.ACCESS_TOKEN)||n.hasOwnProperty(l.Constants.ID_TOKEN)}},function(n,e){"use strict";var t=function(){function n(){this.postLogoutRedirectUri=window.location.href}return n.prototype.with=function(n,e){return this.tenant=n,this.postLogoutRedirectUri=e||this.postLogoutRedirectUri,this},n.prototype.build=function(){return n.MicrosoftLoginUrl+this.tenant+"/oauth2/logout?"+"post_logout_redirect_uri="+encodeURIComponent(this.postLogoutRedirectUri)},n.MicrosoftLoginUrl="https://login.microsoftonline.com/",n}();e.AadLogoutUrlBuilder=t}])},n.exports=l()},iyRz:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=t("WT6e"),o=function(){},r=t("7DMc"),i=t("BTH+"),u=t("gsbp"),s=t("XHgV"),a=t("U/+3"),d=t("Xjw4"),c=t("bfOx"),p=t("kvIy"),g=t("kxjS"),h=t("+IIK"),f=function(){function n(n,e,t,l){this.authService=n,this.auth=e,this.route=t,this.router=l,this.enableAzure=!1}return n.prototype.ngOnInit=function(){var n=this;this.route.data.forEach(function(e){e.loginSettings.enableAzure&&(n.enableAzure=!0,n.createConfig(e.loginSettings.azureSettings))})},n.prototype.login=function(){var n=this;this.errorMessage=null,this.authService.login(this.username,this.password).subscribe(function(e){return n.router.navigateByUrl("/"+n.auth.url)},function(e){return n.handleError(e)})},n.prototype.loginSSO=function(){h.Authentication.getContext(this.config).login()},n.prototype.handleError=function(n){this.errorMessage=this.username.length<1&&this.password.length<1?"Login and password are required!":this.username.length<1&&this.password.length>1?"Login is required!":this.password.length<1&&this.username.length>1?"Password is required!":400===n.status?"Invalid username or password":"Server error"},n.prototype.createConfig=function(n){this.config={tenant:n.tenant,clientId:n.clientId,postLogoutRedirectUrl:window.location.origin+"/",redirectUri:n.redirectUrl}},n}(),m=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function v(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"div",[["class","ct-login-failed ct-error-text"]],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,["",""]))],null,function(n,e){n(e,1,0,e.component.errorMessage)})}function S(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,55,"form",[["class","ct-login-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,e,t){var o=!0,r=n.component;return"submit"===e&&(o=!1!==l["\u0275nov"](n,2).onSubmit(t)&&o),"reset"===e&&(o=!1!==l["\u0275nov"](n,2).onReset()&&o),"ngSubmit"===e&&(o=!1!==(l["\u0275nov"](n,2).form.valid&&r.login())&&o),o},null,null)),l["\u0275did"](1,16384,null,0,r["\u0275bf"],[],null,null),l["\u0275did"](2,4210688,[["loginForm",4]],0,r.NgForm,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,r.ControlContainer,null,[r.NgForm]),l["\u0275did"](4,16384,null,0,r.NgControlStatusGroup,[r.ControlContainer],null,null),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275eld"](6,0,null,null,2,"div",[["class","ct-nav-title1"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Coral Time "])),(n()(),l["\u0275eld"](8,0,null,null,0,"span",[["class","ct-logo-sm"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275eld"](10,0,null,null,13,"div",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n            "])),(n()(),l["\u0275eld"](12,0,null,null,1,"label",[["class","ct-input-label"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Login"])),(n()(),l["\u0275ted"](-1,null,["\n            "])),(n()(),l["\u0275eld"](15,0,null,null,7,"input",[["class","ct-input"],["name","username"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,e,t){var o=!0,r=n.component;return"input"===e&&(o=!1!==l["\u0275nov"](n,16)._handleInput(t.target.value)&&o),"blur"===e&&(o=!1!==l["\u0275nov"](n,16).onTouched()&&o),"compositionstart"===e&&(o=!1!==l["\u0275nov"](n,16)._compositionStart()&&o),"compositionend"===e&&(o=!1!==l["\u0275nov"](n,16)._compositionEnd(t.target.value)&&o),"ngModelChange"===e&&(o=!1!==(r.username=t)&&o),o},null,null)),l["\u0275did"](16,16384,null,0,r.DefaultValueAccessor,[l.Renderer2,l.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),l["\u0275did"](17,16384,null,0,r.RequiredValidator,[],{required:[0,"required"]},null),l["\u0275prd"](1024,null,r.NG_VALIDATORS,function(n){return[n]},[r.RequiredValidator]),l["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),l["\u0275did"](20,671744,null,0,r.NgModel,[[2,r.ControlContainer],[2,r.NG_VALIDATORS],[8,null],[2,r.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),l["\u0275prd"](2048,null,r.NgControl,null,[r.NgModel]),l["\u0275did"](22,16384,null,0,r.NgControlStatus,[r.NgControl],null,null),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275ted"](-1,null,["\n\n        "])),(n()(),l["\u0275eld"](25,0,null,null,13,"div",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n            "])),(n()(),l["\u0275eld"](27,0,null,null,1,"label",[["class","ct-input-label"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Password"])),(n()(),l["\u0275ted"](-1,null,["\n            "])),(n()(),l["\u0275eld"](30,0,null,null,7,"input",[["class","ct-input"],["name","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,e,t){var o=!0,r=n.component;return"input"===e&&(o=!1!==l["\u0275nov"](n,31)._handleInput(t.target.value)&&o),"blur"===e&&(o=!1!==l["\u0275nov"](n,31).onTouched()&&o),"compositionstart"===e&&(o=!1!==l["\u0275nov"](n,31)._compositionStart()&&o),"compositionend"===e&&(o=!1!==l["\u0275nov"](n,31)._compositionEnd(t.target.value)&&o),"ngModelChange"===e&&(o=!1!==(r.password=t)&&o),o},null,null)),l["\u0275did"](31,16384,null,0,r.DefaultValueAccessor,[l.Renderer2,l.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),l["\u0275did"](32,16384,null,0,r.RequiredValidator,[],{required:[0,"required"]},null),l["\u0275prd"](1024,null,r.NG_VALIDATORS,function(n){return[n]},[r.RequiredValidator]),l["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),l["\u0275did"](35,671744,null,0,r.NgModel,[[2,r.ControlContainer],[2,r.NG_VALIDATORS],[8,null],[2,r.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),l["\u0275prd"](2048,null,r.NgControl,null,[r.NgModel]),l["\u0275did"](37,16384,null,0,r.NgControlStatus,[r.NgControl],null,null),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275ted"](-1,null,["\n\n        "])),(n()(),l["\u0275eld"](40,0,null,null,2,"button",[["class","ct-button ct-primary-button"],["mat-raised-button",""]],[[8,"disabled",0]],null,null,i.d,i.b)),l["\u0275did"](41,180224,null,0,u.b,[l.ElementRef,s.a,a.g],null,null),(n()(),l["\u0275ted"](-1,0,["\n            Login\n        "])),(n()(),l["\u0275ted"](-1,null,["\n\n        "])),(n()(),l["\u0275and"](16777216,null,null,1,null,v)),l["\u0275did"](45,16384,null,0,d.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275ted"](-1,null,["\n\n        "])),(n()(),l["\u0275eld"](47,0,null,null,7,"div",[["class","ct-login-links"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n            "])),(n()(),l["\u0275eld"](49,0,null,null,4,"div",[["class","ct-add-link"]],null,null,null,null,null)),(n()(),l["\u0275eld"](50,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,e,t){var o=!0;return"click"===e&&(o=!1!==l["\u0275nov"](n,51).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),l["\u0275did"](51,671744,null,0,c.RouterLinkWithHref,[c.Router,c.ActivatedRoute,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),l["\u0275pad"](52,1),(n()(),l["\u0275ted"](-1,null,["Forgot password?"])),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275ted"](-1,null,["\n    "]))],function(n,e){var t=e.component;n(e,17,0,""),n(e,20,0,"username",t.username),n(e,32,0,""),n(e,35,0,"password",t.password),n(e,45,0,t.errorMessage),n(e,51,0,n(e,52,0,"/set-password"))},function(n,e){n(e,0,0,l["\u0275nov"](e,4).ngClassUntouched,l["\u0275nov"](e,4).ngClassTouched,l["\u0275nov"](e,4).ngClassPristine,l["\u0275nov"](e,4).ngClassDirty,l["\u0275nov"](e,4).ngClassValid,l["\u0275nov"](e,4).ngClassInvalid,l["\u0275nov"](e,4).ngClassPending),n(e,15,0,l["\u0275nov"](e,17).required?"":null,l["\u0275nov"](e,22).ngClassUntouched,l["\u0275nov"](e,22).ngClassTouched,l["\u0275nov"](e,22).ngClassPristine,l["\u0275nov"](e,22).ngClassDirty,l["\u0275nov"](e,22).ngClassValid,l["\u0275nov"](e,22).ngClassInvalid,l["\u0275nov"](e,22).ngClassPending),n(e,30,0,l["\u0275nov"](e,32).required?"":null,l["\u0275nov"](e,37).ngClassUntouched,l["\u0275nov"](e,37).ngClassTouched,l["\u0275nov"](e,37).ngClassPristine,l["\u0275nov"](e,37).ngClassDirty,l["\u0275nov"](e,37).ngClassValid,l["\u0275nov"](e,37).ngClassInvalid,l["\u0275nov"](e,37).ngClassPending),n(e,40,0,l["\u0275nov"](e,41).disabled||null),n(e,50,0,l["\u0275nov"](e,51).target,l["\u0275nov"](e,51).href)})}function E(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,19,"form",[["class","ct-login-form ct-login-form-sso"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,e,t){var o=!0;return"submit"===e&&(o=!1!==l["\u0275nov"](n,2).onSubmit(t)&&o),"reset"===e&&(o=!1!==l["\u0275nov"](n,2).onReset()&&o),o},null,null)),l["\u0275did"](1,16384,null,0,r["\u0275bf"],[],null,null),l["\u0275did"](2,4210688,null,0,r.NgForm,[[8,null],[8,null]],null,null),l["\u0275prd"](2048,null,r.ControlContainer,null,[r.NgForm]),l["\u0275did"](4,16384,null,0,r.NgControlStatusGroup,[r.ControlContainer],null,null),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275eld"](6,0,null,null,2,"div",[["class","ct-nav-title1"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Coral Time "])),(n()(),l["\u0275eld"](8,0,null,null,0,"span",[["class","ct-logo-sm"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275eld"](10,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n            "])),(n()(),l["\u0275eld"](12,0,null,null,1,"label",[["class","ct-input-label"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["You will be redirected to login via Microsoft account."])),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275eld"](16,0,null,null,2,"button",[["class","ct-button ct-primary-button"],["mat-raised-button",""]],[[8,"disabled",0]],[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.loginSSO()&&l),l},i.d,i.b)),l["\u0275did"](17,180224,null,0,u.b,[l.ElementRef,s.a,a.g],null,null),(n()(),l["\u0275ted"](-1,0,["\n            Login\n        "])),(n()(),l["\u0275ted"](-1,null,["\n    "]))],null,function(n,e){n(e,0,0,l["\u0275nov"](e,4).ngClassUntouched,l["\u0275nov"](e,4).ngClassTouched,l["\u0275nov"](e,4).ngClassPristine,l["\u0275nov"](e,4).ngClassDirty,l["\u0275nov"](e,4).ngClassValid,l["\u0275nov"](e,4).ngClassInvalid,l["\u0275nov"](e,4).ngClassPending),n(e,16,0,l["\u0275nov"](e,17).disabled||null)})}function C(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,7,"div",[["class","ct-login-page"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n    "])),(n()(),l["\u0275and"](16777216,null,null,1,null,S)),l["\u0275did"](3,16384,null,0,d.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275ted"](-1,null,["\n\n    "])),(n()(),l["\u0275and"](16777216,null,null,1,null,E)),l["\u0275did"](6,16384,null,0,d.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275ted"](-1,null,["\n"]))],function(n,e){var t=e.component;n(e,3,0,!t.enableAzure),n(e,6,0,t.enableAzure)},null)}var R=l["\u0275ccf"]("ng-component",f,function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,C,m)),l["\u0275did"](1,114688,null,0,f,[p.a,g.a,c.ActivatedRoute,c.Router],null,null)],function(n,e){n(e,1,0)},null)},{},{},[]),T=t("DHxI"),N=t("zI1e"),O=t("efkn"),I=t("ItHS"),b=t("Gvdl"),A=function(){function n(n){this.http=n}return n.prototype.getAuthenticationSettings=function(){return this.authenticationSettings?b.Observable.of(this.authenticationSettings):this.loadAuthenticationSettings()},n.prototype.loadAuthenticationSettings=function(){var n=this;return this.http.get("/api/v1/AuthenticationSettings").map(function(e){return n.authenticationSettings=e})},n}(),y=function(){function n(n){this.service=n}return n.prototype.resolve=function(n){return this.service.getAuthenticationSettings().map(function(n){return n})},n}(),_=t("jcrS"),U=t("oHl+"),w=t("9Sd6"),D=t("6sdf"),M=t("1T37"),x=t("+j5Y"),L=t("8tOD"),P=t("z7Rf"),G=t("OE0E"),k=t("Uo70"),K=t("a9YB"),V=t("NwsS"),q=t("Mcof"),F=t("p5vt"),B=t("/ukx"),j=function(){},z=t("WtLm"),W=t("FqS2"),H=t("3eEW"),Q=t("ovmJ"),J=t("Wt1a"),Y=t("or5m"),Z=t("ETbk"),X=t("bB2G"),$=t("K8Tv"),nn=t("LiT8"),en=t("YrsX"),tn=t("e3dM"),ln=t("AP/s"),on=t("bkcK"),rn=t("TBIh"),un=t("704W"),sn=t("ZuzD"),an=t("sqmn"),dn=t("Bp8q"),cn=t("y/Fr"),pn=t("RTvT"),gn=t("VWgf"),hn=t("igLL"),fn=t("YKDW"),mn=t("fAE3");t.d(e,"LoginModuleNgFactory",function(){return vn});var vn=l["\u0275cmf"](o,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[R,T.a,N.a,O.a,O.b]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,A,A,[I.c]),l["\u0275mpd"](4608,y,y,[A]),l["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[l.LOCALE_ID,[2,d["\u0275a"]]]),l["\u0275mpd"](4608,r["\u0275i"],r["\u0275i"],[]),l["\u0275mpd"](4608,_.DomHelper,_.DomHelper,[]),l["\u0275mpd"](4608,U.UtilsService,U.UtilsService,[]),l["\u0275mpd"](6144,w.b,null,[d.DOCUMENT]),l["\u0275mpd"](4608,w.c,w.c,[[2,w.b]]),l["\u0275mpd"](4608,s.a,s.a,[]),l["\u0275mpd"](4608,a.i,a.i,[s.a]),l["\u0275mpd"](4608,a.h,a.h,[a.i,l.NgZone,d.DOCUMENT]),l["\u0275mpd"](136192,a.d,a.b,[[3,a.d],d.DOCUMENT]),l["\u0275mpd"](5120,a.l,a.k,[[3,a.l],[2,a.j],d.DOCUMENT]),l["\u0275mpd"](5120,a.g,a.e,[[3,a.g],l.NgZone,s.a]),l["\u0275mpd"](4608,D.b,D.b,[]),l["\u0275mpd"](5120,M.c,M.a,[[3,M.c],l.NgZone,s.a]),l["\u0275mpd"](5120,M.f,M.e,[[3,M.f],s.a,l.NgZone]),l["\u0275mpd"](4608,x.g,x.g,[M.c,M.f,l.NgZone,d.DOCUMENT]),l["\u0275mpd"](5120,x.c,x.h,[[3,x.c],d.DOCUMENT]),l["\u0275mpd"](4608,x.f,x.f,[M.f,d.DOCUMENT]),l["\u0275mpd"](5120,x.d,x.k,[[3,x.d],d.DOCUMENT]),l["\u0275mpd"](4608,x.a,x.a,[x.g,x.c,l.ComponentFactoryResolver,x.f,x.d,l.ApplicationRef,l.Injector,l.NgZone,d.DOCUMENT]),l["\u0275mpd"](5120,x.i,x.j,[x.a]),l["\u0275mpd"](5120,L.b,L.c,[x.a]),l["\u0275mpd"](4608,L.d,L.d,[x.a,l.Injector,[2,d.Location],[2,L.a],L.b,[3,L.d],x.c]),l["\u0275mpd"](5120,P.d,P.a,[[3,P.d],[2,I.c],G.DomSanitizer,[2,d.DOCUMENT]]),l["\u0275mpd"](4608,k.d,k.d,[]),l["\u0275mpd"](5120,K.c,K.d,[[3,K.c]]),l["\u0275mpd"](5120,V.a,V.b,[x.a]),l["\u0275mpd"](4608,q.d,q.d,[s.a]),l["\u0275mpd"](135680,q.a,q.a,[q.d,l.NgZone]),l["\u0275mpd"](4608,F.b,F.b,[x.a,a.l,l.Injector,q.a,[3,F.b]]),l["\u0275mpd"](4608,r.FormBuilder,r.FormBuilder,[]),l["\u0275mpd"](512,c.RouterModule,c.RouterModule,[[2,c["\u0275a"]],[2,c.Router]]),l["\u0275mpd"](512,j,j,[]),l["\u0275mpd"](512,d.CommonModule,d.CommonModule,[]),l["\u0275mpd"](512,z.SharedModule,z.SharedModule,[]),l["\u0275mpd"](512,W.DropdownModule,W.DropdownModule,[]),l["\u0275mpd"](512,r["\u0275ba"],r["\u0275ba"],[]),l["\u0275mpd"](512,r.FormsModule,r.FormsModule,[]),l["\u0275mpd"](512,H.PaginatorModule,H.PaginatorModule,[]),l["\u0275mpd"](512,Q.ButtonModule,Q.ButtonModule,[]),l["\u0275mpd"](512,J.DialogModule,J.DialogModule,[]),l["\u0275mpd"](512,Y.CalendarModule,Y.CalendarModule,[]),l["\u0275mpd"](512,Z.a,Z.a,[]),l["\u0275mpd"](512,X.DpDatePickerModule,X.DpDatePickerModule,[]),l["\u0275mpd"](512,$.a,$.a,[]),l["\u0275mpd"](512,nn.a,nn.a,[]),l["\u0275mpd"](512,en.f,en.f,[]),l["\u0275mpd"](512,tn.a,tn.a,[]),l["\u0275mpd"](512,w.a,w.a,[]),l["\u0275mpd"](256,k.e,!0,[]),l["\u0275mpd"](512,k.l,k.l,[[2,k.e]]),l["\u0275mpd"](512,s.b,s.b,[]),l["\u0275mpd"](512,k.v,k.v,[]),l["\u0275mpd"](512,a.a,a.a,[]),l["\u0275mpd"](512,u.c,u.c,[]),l["\u0275mpd"](512,D.c,D.c,[]),l["\u0275mpd"](512,ln.c,ln.c,[]),l["\u0275mpd"](512,on.g,on.g,[]),l["\u0275mpd"](512,M.b,M.b,[]),l["\u0275mpd"](512,x.e,x.e,[]),l["\u0275mpd"](512,L.h,L.h,[]),l["\u0275mpd"](512,P.c,P.c,[]),l["\u0275mpd"](512,rn.c,rn.c,[]),l["\u0275mpd"](512,un.b,un.b,[]),l["\u0275mpd"](512,k.m,k.m,[]),l["\u0275mpd"](512,k.t,k.t,[]),l["\u0275mpd"](512,sn.a,sn.a,[]),l["\u0275mpd"](512,an.c,an.c,[]),l["\u0275mpd"](512,dn.b,dn.b,[]),l["\u0275mpd"](512,cn.c,cn.c,[]),l["\u0275mpd"](512,k.r,k.r,[]),l["\u0275mpd"](512,V.c,V.c,[]),l["\u0275mpd"](512,q.c,q.c,[]),l["\u0275mpd"](512,F.e,F.e,[]),l["\u0275mpd"](512,pn.a,pn.a,[]),l["\u0275mpd"](512,r.ReactiveFormsModule,r.ReactiveFormsModule,[]),l["\u0275mpd"](512,gn.TextMaskModule,gn.TextMaskModule,[]),l["\u0275mpd"](512,hn.a,hn.a,[]),l["\u0275mpd"](512,fn.g,fn.g,[]),l["\u0275mpd"](512,mn.a,mn.a,[]),l["\u0275mpd"](512,o,o,[]),l["\u0275mpd"](1024,c.ROUTES,function(){return[[{path:"",component:f,canActivate:[B.a],resolve:{loginSettings:y}}]]},[])])})}});