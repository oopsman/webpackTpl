webpackJsonp([5],{"./node_modules/_vue-router@3.0.1@vue-router/dist/vue-router.esm.js":function(a,b){"use strict";/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */function c(){}function d(a){return-1<Object.prototype.toString.call(a).indexOf("Error")}function e(a,b){switch(typeof b){case"undefined":return;case"object":return b;case"function":return b(a);case"boolean":return b?a.params:void 0;default:}}function f(a,b){for(var c in b)a[c]=b[c];return a}function g(a,b,c){void 0===b&&(b={});var d;try{d=(c||h)(a||"")}catch(a){!1,d={}}for(var e in b)d[e]=b[e];return d}function h(a){var b={};return(a=a.trim().replace(/^(\?|#|&)/,""),!a)?b:(a.split("&").forEach(function(a){var c=a.replace(/\+/g," ").split("="),d=Ma(c.shift()),e=0<c.length?Ma(c.join("=")):null;void 0===b[d]?b[d]=e:Array.isArray(b[d])?b[d].push(e):b[d]=[b[d],e]}),b)}function i(a){var b=a?Object.keys(a).map(function(b){var c=a[b];if(void 0===c)return"";if(null===c)return La(b);if(Array.isArray(c)){var d=[];return c.forEach(function(a){void 0===a||(null===a?d.push(La(b)):d.push(La(b)+"="+La(a)))}),d.join("&")}return La(b)+"="+La(c)}).filter(function(a){return 0<a.length}).join("&"):null;return b?"?"+b:""}function j(a,b,c,d){var e=d&&d.options.stringifyQuery,f=b.query||{};try{f=k(f)}catch(a){}var g={name:b.name||a&&a.name,meta:a&&a.meta||{},path:b.path||"/",hash:b.hash||"",query:f,params:b.params||{},fullPath:m(b,e),matched:a?l(a):[]};return c&&(g.redirectedFrom=m(c,e)),Object.freeze(g)}function k(a){if(Array.isArray(a))return a.map(k);if(a&&"object"==typeof a){var b={};for(var c in a)b[c]=k(a[c]);return b}return a}function l(a){for(var b=[];a;)b.unshift(a),a=a.parent;return b}function m(a,b){var c=a.path,d=a.query;void 0===d&&(d={});var e=a.hash;void 0===e&&(e="");return(c||"/")+(b||i)(d)+e}function n(c,a){return a===Oa?c===a:!!a&&(c.path&&a.path?c.path.replace(Na,"")===a.path.replace(Na,"")&&c.hash===a.hash&&o(c.query,a.query):!!(c.name&&a.name)&&c.name===a.name&&c.hash===a.hash&&o(c.query,a.query)&&o(c.params,a.params))}function o(c,d){if(void 0===c&&(c={}),void 0===d&&(d={}),!c||!d)return c===d;var e=Object.keys(c),f=Object.keys(d);return e.length===f.length&&e.every(function(a){var b=c[a],e=d[a];return"object"==typeof b&&"object"==typeof e?o(b,e):b+""===e+""})}function p(a,b){return 0===a.path.replace(Na,"/").indexOf(b.path.replace(Na,"/"))&&(!b.hash||a.hash===b.hash)&&q(a.query,b.query)}function q(a,b){for(var c in b)if(!(c in a))return!1;return!0}function r(a){if(!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)&&!a.defaultPrevented&&(void 0===a.button||0===a.button)){if(a.currentTarget&&a.currentTarget.getAttribute){var b=a.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(b))return}return a.preventDefault&&a.preventDefault(),!0}}function s(a){if(a)for(var b,c=0;c<a.length;c++){if(b=a[c],"a"===b.tag)return b;if(b.children&&(b=s(b.children)))return b}}function t(a){if(!(t.installed&&Ga===a)){t.installed=!0,Ga=a;var b=function(a){return void 0!==a},c=function(a,c){var d=a.$options._parentVnode;b(d)&&b(d=d.data)&&b(d=d.registerRouteInstance)&&d(a,c)};a.mixin({beforeCreate:function(){b(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),a.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,c(this,this)},destroyed:function(){c(this)}}),Object.defineProperty(a.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(a.prototype,"$route",{get:function(){return this._routerRoot._route}}),a.component("router-view",Ha),a.component("router-link",Ra);var d=a.config.optionMergeStrategies;d.beforeRouteEnter=d.beforeRouteLeave=d.beforeRouteUpdate=d.created}}function u(a,b,c){var d=a.charAt(0);if("/"===d)return a;if("?"===d||"#"===d)return b+a;var e=b.split("/");c&&e[e.length-1]||e.pop();for(var f,g=a.replace(/^\//,"").split("/"),h=0;h<g.length;h++)f=g[h],".."===f?e.pop():"."!==f&&e.push(f);return""!==e[0]&&e.unshift(""),e.join("/")}function v(a){var b="",c="",d=a.indexOf("#");0<=d&&(b=a.slice(d),a=a.slice(0,d));var e=a.indexOf("?");return 0<=e&&(c=a.slice(e+1),a=a.slice(0,e)),{path:a,query:c,hash:b}}function w(a){return a.replace(/\/\//g,"/")}function x(a,b){for(var c,d=[],e=0,f=0,g="",h=b&&b.delimiter||"/";null!=(c=Va.exec(a));){var i=c[0],j=c[1],k=c.index;if(g+=a.slice(f,k),f=k+i.length,j){g+=j[1];continue}var l=a[f],m=c[2],n=c[3],o=c[4],p=c[5],q=c[6],r=c[7];g&&(d.push(g),g="");var s=c[2]||h,t=o||p;d.push({name:n||e++,prefix:m||"",delimiter:s,optional:"?"===q||"*"===q,repeat:"+"===q||"*"===q,partial:null!=m&&null!=l&&l!==m,asterisk:!!r,pattern:t?C(t):r?".*":"[^"+B(s)+"]+?"})}return f<a.length&&(g+=a.substr(f)),g&&d.push(g),d}function y(a){return encodeURI(a).replace(/[\/?#]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function z(a){return encodeURI(a).replace(/[?#]/g,function(a){return"%"+a.charCodeAt(0).toString(16).toUpperCase()})}function A(a){for(var b=Array(a.length),c=0;c<a.length;c++)"object"==typeof a[c]&&(b[c]=new RegExp("^(?:"+a[c].pattern+")$"));return function(c,d){for(var e,f="",g=c||{},h=d||{},k=h.pretty?y:encodeURIComponent,l=0;l<a.length;l++){if(e=a[l],"string"==typeof e){f+=e;continue}var i,m=g[e.name];if(null==m)if(e.optional){e.partial&&(f+=e.prefix);continue}else throw new TypeError("Expected \""+e.name+"\" to be defined");if(Ta(m)){if(!e.repeat)throw new TypeError("Expected \""+e.name+"\" to not repeat, but received `"+JSON.stringify(m)+"`");if(0===m.length)if(e.optional)continue;else throw new TypeError("Expected \""+e.name+"\" to not be empty");for(var n=0;n<m.length;n++){if(i=k(m[n]),!b[l].test(i))throw new TypeError("Expected all \""+e.name+"\" to match \""+e.pattern+"\", but received `"+JSON.stringify(i)+"`");f+=(0===n?e.prefix:e.delimiter)+i}continue}if(i=e.asterisk?z(m):k(m),!b[l].test(i))throw new TypeError("Expected \""+e.name+"\" to match \""+e.pattern+"\", but received \""+i+"\"");f+=e.prefix+i}return f}}function B(a){return a.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function C(a){return a.replace(/([=!:$\/()])/g,"\\$1")}function D(a,b){return a.keys=b,a}function E(a){return a.sensitive?"":"i"}function F(a,b){var c=a.source.match(/\((?!\?)/g);if(c)for(var d=0;d<c.length;d++)b.push({name:d,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return D(a,b)}function G(a,b,c){for(var d=[],e=0;e<a.length;e++)d.push(J(a[e],b,c).source);var f=new RegExp("(?:"+d.join("|")+")",E(c));return D(f,b)}function H(a,b,c){return I(x(a,c),b,c)}function I(a,b,c){Ta(b)||(c=b||c,b=[]),c=c||{};for(var d,e=c.strict,f=!1!==c.end,g="",h=0;h<a.length;h++)if(d=a[h],"string"==typeof d)g+=B(d);else{var i=B(d.prefix),j="(?:"+d.pattern+")";b.push(d),d.repeat&&(j+="(?:"+i+j+")*"),j=d.optional?d.partial?i+"("+j+")?":"(?:"+i+"("+j+"))?":i+"("+j+")",g+=j}var k=B(c.delimiter||"/"),l=g.slice(-k.length)===k;return e||(g=(l?g.slice(0,-k.length):g)+"(?:"+k+"(?=$))?"),g+=f?"$":e&&l?"":"(?="+k+"|$)",D(new RegExp("^"+g,E(c)),b)}function J(a,b,c){return Ta(b)||(c=b||c,b=[]),c=c||{},a instanceof RegExp?F(a,b):Ta(a)?G(a,b,c):H(a,b,c)}function K(a,b){try{var c=Wa[a]||(Wa[a]=Ua.compile(a));return c(b||{},{pretty:!0})}catch(a){return!1,""}}function L(a,b,c,d){var e=b||[],f=c||Object.create(null),g=d||Object.create(null);a.forEach(function(a){M(e,f,g,a)});for(var h=0,i=e.length;h<i;h++)"*"===e[h]&&(e.push(e.splice(h,1)[0]),i--,h--);return{pathList:e,pathMap:f,nameMap:g}}function M(a,b,c,d,e,f){var g=d.path,h=d.name;var i=d.pathToRegexpOptions||{},j=O(g,e,i.strict);"boolean"==typeof d.caseSensitive&&(i.sensitive=d.caseSensitive);var k={path:j,regex:N(j,i),components:d.components||{default:d.component},instances:{},name:h,parent:e,matchAs:f,redirect:d.redirect,beforeEnter:d.beforeEnter,meta:d.meta||{},props:null==d.props?{}:d.components?d.props:{default:d.props}};if(d.children&&(!1,d.children.forEach(function(d){var e=f?w(f+"/"+d.path):void 0;M(a,b,c,d,k,e)})),void 0!==d.alias){var l=Array.isArray(d.alias)?d.alias:[d.alias];l.forEach(function(f){var g={path:f,children:d.children};M(a,b,c,g,e,k.path||"/")})}b[k.path]||(a.push(k.path),b[k.path]=k),h&&!c[h]&&(c[h]=k)}function N(a,b){var c=Ua(a,[],b);return c}function O(a,b,c){return c||(a=a.replace(/\/$/,"")),"/"===a[0]?a:null==b?a:w(b.path+"/"+a)}function P(a,b,c,d){var e="string"==typeof a?{path:a}:a;if(e.name||e._normalized)return e;if(!e.path&&e.params&&b){e=Q({},e),e._normalized=!0;var f=Q(Q({},b.params),e.params);if(b.name)e.name=b.name,e.params=f;else if(b.matched.length){var h=b.matched[b.matched.length-1].path;e.path=K(h,f,"path "+b.path)}else;return e}var i=v(e.path||""),j=b&&b.path||"/",k=i.path?u(i.path,j,c||e.append):j,l=g(i.query,e.query,d&&d.options.parseQuery),m=e.hash||i.hash;return m&&"#"!==m.charAt(0)&&(m="#"+m),{_normalized:!0,path:k,query:l,hash:m}}function Q(c,a){for(var b in a)c[b]=a[b];return c}function R(a,b){function c(a,c,d){var e=P(a,c,!1,b),g=e.name;if(g){var j=i[g];if(!1,!j)return f(null,e);var l=j.regex.keys.filter(function(a){return!a.optional}).map(function(a){return a.name});if("object"!=typeof e.params&&(e.params={}),c&&"object"==typeof c.params)for(var m in c.params)!(m in e.params)&&-1<l.indexOf(m)&&(e.params[m]=c.params[m]);if(j)return e.path=K(j.path,e.params,"named route \""+g+"\""),f(j,e,d)}else if(e.path){e.params={};for(var n=0;n<h.length;n++){var o=h[n],p=k[o];if(S(p.regex,e.path,e.params))return f(p,e,d)}}return f(null,e)}function d(a,d){var e=a.redirect,g="function"==typeof e?e(j(a,d,null,b)):e;if("string"==typeof g&&(g={path:g}),!g||"object"!=typeof g)return!1,f(null,d);var h=g,k=h.name,l=h.path,m=d.query,n=d.hash,o=d.params;if(m=h.hasOwnProperty("query")?h.query:m,n=h.hasOwnProperty("hash")?h.hash:n,o=h.hasOwnProperty("params")?h.params:o,k){i[k];return!1,c({_normalized:!0,name:k,query:m,hash:n,params:o},void 0,d)}if(l){var p=T(l,a),q=K(p,o,"redirect route with path \""+p+"\"");return c({_normalized:!0,path:q,query:m,hash:n},void 0,d)}return!1,f(null,d)}function e(a,b,d){var e=K(d,b.params,"aliased route with path \""+d+"\""),g=c({_normalized:!0,path:e});if(g){var h=g.matched,i=h[h.length-1];return b.params=g.params,f(i,b)}return f(null,b)}function f(a,c,f){return a&&a.redirect?d(a,f||c):a&&a.matchAs?e(a,c,a.matchAs):j(a,c,f,b)}var g=L(a),h=g.pathList,k=g.pathMap,i=g.nameMap;return{match:c,addRoutes:function(a){L(a,h,k,i)}}}function S(a,b,c){var d=b.match(a);if(!d)return!1;if(!c)return!0;for(var e=1,f=d.length;e<f;++e){var g=a.keys[e-1],h="string"==typeof d[e]?decodeURIComponent(d[e]):d[e];g&&(c[g.name]=h)}return!0}function T(a,b){return u(a,b.parent?b.parent.path:"/",!0)}function U(){window.history.replaceState({key:da()},""),window.addEventListener("popstate",function(a){W(),a.state&&a.state.key&&ea(a.state.key)})}function V(a,b,c,d){if(a.app){var e=a.options.scrollBehavior;e&&(!1,a.app.$nextTick(function(){var a=X(),f=e(b,c,d?a:null);f&&("function"==typeof f.then?f.then(function(b){ba(b,a)}).catch(function(){}):ba(f,a))}))}}function W(){var a=da();a&&(Xa[a]={x:window.pageXOffset,y:window.pageYOffset})}function X(){var a=da();if(a)return Xa[a]}function Y(a,b){var c=document.documentElement,d=c.getBoundingClientRect(),e=a.getBoundingClientRect();return{x:e.left-d.left-b.x,y:e.top-d.top-b.y}}function Z(a){return aa(a.x)||aa(a.y)}function $(a){return{x:aa(a.x)?a.x:window.pageXOffset,y:aa(a.y)?a.y:window.pageYOffset}}function _(a){return{x:aa(a.x)?a.x:0,y:aa(a.y)?a.y:0}}function aa(a){return"number"==typeof a}function ba(a,b){var c="object"==typeof a;if(c&&"string"==typeof a.selector){var d=document.querySelector(a.selector);if(d){var e=a.offset&&"object"==typeof a.offset?a.offset:{};e=_(e),b=Y(d,e)}else Z(a)&&(b=$(a))}else c&&Z(a)&&(b=$(a));b&&window.scrollTo(b.x,b.y)}function ca(){return Za.now().toFixed(3)}function da(){return $a}function ea(a){$a=a}function fa(a,b){W();var c=window.history;try{b?c.replaceState({key:$a},"",a):($a=ca(),c.pushState({key:$a},"",a))}catch(c){window.location[b?"replace":"assign"](a)}}function ga(a){fa(a,!0)}function ha(a,b,c){var d=function(e){e>=a.length?c():a[e]?b(a[e],function(){d(e+1)}):d(e+1)};d(0)}function ia(a){return function(b,c,e){var f=!1,g=0,h=null;ja(a,function(a,b,c,i){if("function"==typeof a&&void 0===a.cid){f=!0,g++;var j,k=ma(function(b){la(b)&&(b=b.default),a.resolved="function"==typeof b?b:Ga.extend(b),c.components[i]=b,g--,0>=g&&e()}),l=ma(function(a){!1,h||(h=d(a)?a:new Error("Failed to resolve async component "+i+": "+a),e(h))});try{j=a(k,l)}catch(a){l(a)}if(j)if("function"==typeof j.then)j.then(k,l);else{var m=j.component;m&&"function"==typeof m.then&&m.then(k,l)}}}),f||e()}}function ja(a,b){return ka(a.map(function(a){return Object.keys(a.components).map(function(c){return b(a.components[c],a.instances[c],a,c)})}))}function ka(a){return Array.prototype.concat.apply([],a)}function la(a){return a.__esModule||_a&&"Module"===a[Symbol.toStringTag]}function ma(a){var b=!1;return function(){for(var c=[],d=arguments.length;d--;)c[d]=arguments[d];if(!b)return b=!0,a.apply(this,c)}}function na(a){if(!a)if(Sa){var b=document.querySelector("base");a=b&&b.getAttribute("href")||"/",a=a.replace(/^https?:\/\/[^\/]+/,"")}else a="/";return"/"!==a.charAt(0)&&(a="/"+a),a.replace(/\/$/,"")}function oa(a,b){var c,d=Math.max(a.length,b.length);for(c=0;c<d&&a[c]===b[c];c++);return{updated:b.slice(0,c),activated:b.slice(c),deactivated:a.slice(c)}}function pa(a,b,c,d){var e=ja(a,function(a,d,e,f){var g=qa(a,b);if(g)return Array.isArray(g)?g.map(function(a){return c(a,d,e,f)}):c(g,d,e,f)});return ka(d?e.reverse():e)}function qa(a,b){return"function"!=typeof a&&(a=Ga.extend(a)),a.options[b]}function ra(a){return pa(a,"beforeRouteLeave",ta,!0)}function sa(a){return pa(a,"beforeRouteUpdate",ta)}function ta(a,b){if(b)return function(){return a.apply(b,arguments)}}function ua(a,b,c){return pa(a,"beforeRouteEnter",function(a,d,e,f){return va(a,e,f,b,c)})}function va(a,b,c,d,e){return function(f,g,h){return a(f,g,function(a){h(a),"function"==typeof a&&d.push(function(){wa(a,b.instances,c,e)})})}}function wa(a,b,c,d){b[c]?a(b[c]):d()&&setTimeout(function(){wa(a,b,c,d)},16)}function xa(a){var b=window.location.pathname;return a&&0===b.indexOf(a)&&(b=b.slice(a.length)),(b||"/")+window.location.search+window.location.hash}function ya(a){var b=xa(a);if(!/^\/#/.test(b))return window.location.replace(w(a+"/#"+b)),!0}function za(){var a=Aa();return"/"===a.charAt(0)||(Da("/"+a),!1)}function Aa(){var a=window.location.href,b=a.indexOf("#");return-1===b?"":a.slice(b+1)}function Ba(a){var b=window.location.href,c=b.indexOf("#"),d=0<=c?b.slice(0,c):b;return d+"#"+a}function Ca(a){Ya?fa(Ba(a)):window.location.hash=a}function Da(a){Ya?ga(Ba(a)):window.location.replace(Ba(a))}function Ea(a,b){return a.push(b),function(){var c=a.indexOf(b);-1<c&&a.splice(c,1)}}function Fa(a,b,c){var d="hash"===c?"#"+b:b;return a?w(a+"/"+d):d}var Ga,Ha={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(a,b){var c=b.props,d=b.children,g=b.parent,i=b.data;i.routerView=!0;for(var j=g.$createElement,h=c.name,k=g.$route,l=g._routerViewCache||(g._routerViewCache={}),m=0,n=!1;g&&g._routerRoot!==g;)g.$vnode&&g.$vnode.data.routerView&&m++,g._inactive&&(n=!0),g=g.$parent;if(i.routerViewDepth=m,n)return j(l[h],i,d);var o=k.matched[m];if(!o)return l[h]=null,j();var p=l[h]=o.components[h];i.registerRouteInstance=function(a,b){var c=o.instances[h];(b&&c!==a||!b&&c===a)&&(o.instances[h]=b)},(i.hook||(i.hook={})).prepatch=function(a,b){o.instances[h]=b.componentInstance};var q=i.props=e(k,o.props&&o.props[h]);if(q){q=i.props=f({},q);var r=i.attrs=i.attrs||{};for(var s in q)p.props&&s in p.props||(r[s]=q[s],delete q[s])}return j(p,i,d)}},Ia=/[!'()*]/g,Ja=function(a){return"%"+a.charCodeAt(0).toString(16)},Ka=/%2C/g,La=function(a){return encodeURIComponent(a).replace(Ia,Ja).replace(Ka,",")},Ma=decodeURIComponent,Na=/\/?$/,Oa=j(null,{path:"/"}),Pa=[String,Object],Qa=[String,Array],Ra={name:"router-link",props:{to:{type:Pa,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:Qa,default:"click"}},render:function(b){var c=this,d=this.$router,e=this.$route,f=d.resolve(this.to,e,this.append),g=f.location,h=f.route,i=f.href,k={},l=d.options.linkActiveClass,m=d.options.linkExactActiveClass,o=null==l?"router-link-active":l,q=null==m?"router-link-exact-active":m,t=null==this.activeClass?o:this.activeClass,u=null==this.exactActiveClass?q:this.exactActiveClass,v=g.path?j(null,g,null,d):h;k[u]=n(e,v),k[t]=this.exact?k[u]:p(e,v);var w=function(a){r(a)&&(c.replace?d.replace(g):d.push(g))},x={click:r};Array.isArray(this.event)?this.event.forEach(function(a){x[a]=w}):x[this.event]=w;var y={class:k};if("a"===this.tag)y.on=x,y.attrs={href:i};else{var z=s(this.$slots.default);if(z){z.isStatic=!1;var a=Ga.util.extend,A=z.data=a({},z.data);A.on=x;var B=z.data.attrs=a({},z.data.attrs);B.href=i}else y.on=x}return b(this.tag,y,this.$slots.default)}},Sa="undefined"!=typeof window,Ta=Array.isArray||function(a){return"[object Array]"==Object.prototype.toString.call(a)},Ua=J,Va=/(\\.)|([\/.])?(?:(?:\:(\w+)(?:\(((?:\\.|[^\\()])+)\))?|\(((?:\\.|[^\\()])+)\))([+*?])?|(\*))/g;Ua.parse=x,Ua.compile=function(a,b){return A(x(a,b))},Ua.tokensToFunction=A,Ua.tokensToRegExp=I;var Wa=Object.create(null),Xa=Object.create(null),Ya=Sa&&function(){var a=window.navigator.userAgent;return(-1===a.indexOf("Android 2.")&&-1===a.indexOf("Android 4.0")||-1===a.indexOf("Mobile Safari")||-1!==a.indexOf("Chrome")||-1!==a.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),Za=Sa&&window.performance&&window.performance.now?window.performance:Date,$a=ca(),_a="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,ab=function(a,b){this.router=a,this.base=na(b),this.current=Oa,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};ab.prototype.listen=function(a){this.cb=a},ab.prototype.onReady=function(a,b){this.ready?a():(this.readyCbs.push(a),b&&this.readyErrorCbs.push(b))},ab.prototype.onError=function(a){this.errorCbs.push(a)},ab.prototype.transitionTo=function(a,b,c){var d=this,e=this.router.match(a,this.current);this.confirmTransition(e,function(){d.updateRoute(e),b&&b(e),d.ensureURL(),d.ready||(d.ready=!0,d.readyCbs.forEach(function(a){a(e)}))},function(a){c&&c(a),a&&!d.ready&&(d.ready=!0,d.readyErrorCbs.forEach(function(b){b(a)}))})},ab.prototype.confirmTransition=function(a,b,e){var f=this,g=this.current,h=function(a){d(a)&&(f.errorCbs.length?f.errorCbs.forEach(function(b){b(a)}):(c(!1,"uncaught error during route navigation:"),void 0)),e&&e(a)};if(n(a,g)&&a.matched.length===g.matched.length)return this.ensureURL(),h();var i=oa(this.current.matched,a.matched),j=i.updated,k=i.deactivated,l=i.activated,m=[].concat(ra(k),this.router.beforeHooks,sa(j),l.map(function(a){return a.beforeEnter}),ia(l));this.pending=a;var o=function(b,c){if(f.pending!==a)return h();try{b(a,g,function(a){!1===a||d(a)?(f.ensureURL(!0),h(a)):"string"==typeof a||"object"==typeof a&&("string"==typeof a.path||"string"==typeof a.name)?(h(),"object"==typeof a&&a.replace?f.replace(a):f.push(a)):c(a)})}catch(a){h(a)}};ha(m,o,function(){var c=[],d=ua(l,c,function(){return f.current===a}),e=d.concat(f.router.resolveHooks);ha(e,o,function(){return f.pending===a?void(f.pending=null,b(a),f.router.app&&f.router.app.$nextTick(function(){c.forEach(function(a){a()})})):h()})})},ab.prototype.updateRoute=function(a){var b=this.current;this.current=a,this.cb&&this.cb(a),this.router.afterHooks.forEach(function(c){c&&c(a,b)})};var bb=function(a){function b(b,c){var d=this;a.call(this,b,c);var e=b.options.scrollBehavior;e&&U();var f=xa(this.base);window.addEventListener("popstate",function(){var a=d.current,c=xa(d.base);d.current===Oa&&c===f||d.transitionTo(c,function(c){e&&V(b,c,a,!0)})})}return a&&(b.__proto__=a),b.prototype=Object.create(a&&a.prototype),b.prototype.constructor=b,b.prototype.go=function(a){window.history.go(a)},b.prototype.push=function(a,b,c){var d=this,e=this,f=e.current;this.transitionTo(a,function(a){fa(w(d.base+a.fullPath)),V(d.router,a,f,!1),b&&b(a)},c)},b.prototype.replace=function(a,b,c){var d=this,e=this,f=e.current;this.transitionTo(a,function(a){ga(w(d.base+a.fullPath)),V(d.router,a,f,!1),b&&b(a)},c)},b.prototype.ensureURL=function(a){if(xa(this.base)!==this.current.fullPath){var b=w(this.base+this.current.fullPath);a?fa(b):ga(b)}},b.prototype.getCurrentLocation=function(){return xa(this.base)},b}(ab),cb=function(a){function b(b,c,d){a.call(this,b,c),d&&ya(this.base)||za()}return a&&(b.__proto__=a),b.prototype=Object.create(a&&a.prototype),b.prototype.constructor=b,b.prototype.setupListeners=function(){var a=this,b=this.router,c=b.options.scrollBehavior,d=Ya&&c;d&&U(),window.addEventListener(Ya?"popstate":"hashchange",function(){var b=a.current;za()&&a.transitionTo(Aa(),function(c){d&&V(a.router,c,b,!0),Ya||Da(c.fullPath)})})},b.prototype.push=function(a,b,c){var d=this,e=this,f=e.current;this.transitionTo(a,function(a){Ca(a.fullPath),V(d.router,a,f,!1),b&&b(a)},c)},b.prototype.replace=function(a,b,c){var d=this,e=this,f=e.current;this.transitionTo(a,function(a){Da(a.fullPath),V(d.router,a,f,!1),b&&b(a)},c)},b.prototype.go=function(a){window.history.go(a)},b.prototype.ensureURL=function(a){var b=this.current.fullPath;Aa()!==b&&(a?Ca(b):Da(b))},b.prototype.getCurrentLocation=function(){return Aa()},b}(ab),db=function(a){function b(b,c){a.call(this,b,c),this.stack=[],this.index=-1}return a&&(b.__proto__=a),b.prototype=Object.create(a&&a.prototype),b.prototype.constructor=b,b.prototype.push=function(a,b,c){var d=this;this.transitionTo(a,function(a){d.stack=d.stack.slice(0,d.index+1).concat(a),d.index++,b&&b(a)},c)},b.prototype.replace=function(a,b,c){var d=this;this.transitionTo(a,function(a){d.stack=d.stack.slice(0,d.index).concat(a),b&&b(a)},c)},b.prototype.go=function(a){var b=this,c=this.index+a;if(!(0>c||c>=this.stack.length)){var d=this.stack[c];this.confirmTransition(d,function(){b.index=c,b.updateRoute(d)})}},b.prototype.getCurrentLocation=function(){var a=this.stack[this.stack.length-1];return a?a.fullPath:"/"},b.prototype.ensureURL=function(){},b}(ab),eb=function(a){void 0===a&&(a={}),this.app=null,this.apps=[],this.options=a,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=R(a.routes||[],this);var b=a.mode||"hash";this.fallback="history"===b&&!Ya&&!1!==a.fallback,this.fallback&&(b="hash"),Sa||(b="abstract"),this.mode=b,"history"===b?this.history=new bb(this,a.base):"hash"===b?this.history=new cb(this,a.base,this.fallback):"abstract"==b&&(this.history=new db(this,a.base))},fb={currentRoute:{configurable:!0}};eb.prototype.match=function(a,b,c){return this.matcher.match(a,b,c)},fb.currentRoute.get=function(){return this.history&&this.history.current},eb.prototype.init=function(a){var b=this;if(!1,this.apps.push(a),!this.app){this.app=a;var c=this.history;if(c instanceof bb)c.transitionTo(c.getCurrentLocation());else if(c instanceof cb){var d=function(){c.setupListeners()};c.transitionTo(c.getCurrentLocation(),d,d)}c.listen(function(a){b.apps.forEach(function(b){b._route=a})})}},eb.prototype.beforeEach=function(a){return Ea(this.beforeHooks,a)},eb.prototype.beforeResolve=function(a){return Ea(this.resolveHooks,a)},eb.prototype.afterEach=function(a){return Ea(this.afterHooks,a)},eb.prototype.onReady=function(a,b){this.history.onReady(a,b)},eb.prototype.onError=function(a){this.history.onError(a)},eb.prototype.push=function(a,b,c){this.history.push(a,b,c)},eb.prototype.replace=function(a,b,c){this.history.replace(a,b,c)},eb.prototype.go=function(a){this.history.go(a)},eb.prototype.back=function(){this.go(-1)},eb.prototype.forward=function(){this.go(1)},eb.prototype.getMatchedComponents=function(a){var b=a?a.matched?a:this.resolve(a).route:this.currentRoute;return b?[].concat.apply([],b.matched.map(function(a){return Object.keys(a.components).map(function(b){return a.components[b]})})):[]},eb.prototype.resolve=function(a,b,c){var d=P(a,b||this.history.current,c,this),e=this.match(d,b),f=e.redirectedFrom||e.fullPath,g=this.history.base,h=Fa(g,f,this.mode);return{location:d,route:e,href:h,normalizedTo:d,resolved:e}},eb.prototype.addRoutes=function(a){this.matcher.addRoutes(a),this.history.current!==Oa&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(eb.prototype,fb),eb.install=t,eb.version="3.0.1",Sa&&window.Vue&&window.Vue.use(eb),b.a=eb}});