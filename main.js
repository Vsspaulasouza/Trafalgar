(()=>{"use strict";var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function o(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function r(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function s(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var u=document.documentElement;function l(t){var e="";return t.fake&&(e=u.style.overflow,t.style.background="",t.style.overflow=u.style.overflow="hidden",u.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),u.style.overflow=e,u.offsetHeight)}function f(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function d(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var h="classList"in document.createElement("_"),p=h?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},m=h?function(t,e){p(t,e)||t.classList.add(e)}:function(t,e){p(t,e)||(t.className+=" "+e)},y=h?function(t,e){p(t,e)&&t.classList.remove(e)}:function(t,e){p(t,e)&&(t.className=t.className.replace(e,""))};function g(t,e){return t.hasAttribute(e)}function b(t,e){return t.getAttribute(e)}function x(t){return void 0!==t.item}function C(t,e){if(t=x(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function M(t,e){t=x(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function w(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function T(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function L(t){return"none"!==window.getComputedStyle(t).display}function A(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var o=t[a];if(void 0!==i.style[o])return o}return!1}function B(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var N=!1;try{var S=Object.defineProperty({},"passive",{get:function(){N=!0}});window.addEventListener("test",null,S)}catch(t){}var D=!!N&&{passive:!0};function O(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&D;t.addEventListener(i,e[i],a)}}function H(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&D;t.removeEventListener(n,e[n],i)}}function k(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var R=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var n=document,u=window,h={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},x={},N=t.useLocalStorage;if(N){var S=navigator.userAgent,D=new Date;try{(x=u.localStorage)?(x.setItem(D,D),N=x.getItem(D)==D,x.removeItem(D)):N=!1,N||(x={})}catch(t){N=!1}N&&(x.tnsApp&&x.tnsApp!==S&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){x.removeItem(t)})),localStorage.tnsApp=S)}var P=x.tC?o(x.tC):r(x,"tC",function(){var t=document,e=s(),n=l(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var o,r="(10px * 10)",u=["calc"+r,"-moz-calc"+r,"-webkit-calc"+r],f=0;f<3;f++)if(o=u[f],i.style.width=o,100===i.offsetWidth){a=o.replace(r,"");break}}catch(t){}return e.fake?c(e,n):i.remove(),a}(),N),I=x.tPL?o(x.tPL):r(x,"tPL",function(){var t,e=document,n=s(),i=l(n),a=e.createElement("div"),o=e.createElement("div"),r="";a.className="tns-t-subp2",o.className="tns-t-ct";for(var u=0;u<70;u++)r+="<div></div>";return o.innerHTML=r,a.appendChild(o),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,n.fake?c(n,i):a.remove(),t}(),N),z=x.tMQ?o(x.tMQ):r(x,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=s(),i=l(n),a=e.createElement("div"),o=e.createElement("style"),r="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",a.className="tns-mq-test",n.appendChild(o),n.appendChild(a),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(e.createTextNode(r)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?c(n,i):a.remove(),"absolute"===t}(),N),W=x.tTf?o(x.tTf):r(x,"tTf",A("transform"),N),q=x.t3D?o(x.t3D):r(x,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=s(),a=l(i),o=n.createElement("p"),r=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return r+="transform",i.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(o).getPropertyValue(r),i.fake?c(i,a):o.remove(),void 0!==e&&e.length>0&&"none"!==e}(W),N),F=x.tTDu?o(x.tTDu):r(x,"tTDu",A("transitionDuration"),N),j=x.tTDe?o(x.tTDe):r(x,"tTDe",A("transitionDelay"),N),V=x.tADu?o(x.tADu):r(x,"tADu",A("animationDuration"),N),G=x.tADe?o(x.tADe):r(x,"tADe",A("animationDelay"),N),Q=x.tTE?o(x.tTE):r(x,"tTE",B(F,"Transition"),N),X=x.tAE?o(x.tAE):r(x,"tAE",B(V,"Animation"),N),Y=u.console&&"function"==typeof u.console.warn,K=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],J={};if(K.forEach((function(e){if("string"==typeof t[e]){var i=t[e],a=n.querySelector(i);if(J[e]=i,!a||!a.nodeName)return void(Y&&console.warn("Can't find",t[e]));t[e]=a}})),!(t.container.children.length<1)){var U=t.responsive,_=t.nested,Z="carousel"===t.mode;if(U){0 in U&&(t=a(t,U[0]),delete U[0]);var $={};for(var tt in U){var et=U[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}U=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,ot=t.animateNormal}var rt,st,ut="horizontal"===t.axis,lt=n.createElement("div"),ct=n.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,ht=ft.children,pt=ht.length,mt=On(),yt=!1;U&&$n(),Z&&(ft.className+=" tns-vpfix");var gt,bt,xt,Ct,Mt,wt,Tt,Et,Lt=t.autoWidth,At=In("fixedWidth"),Bt=In("edgePadding"),Nt=In("gutter"),St=Rn(),Dt=In("center"),Ot=Lt?1:Math.floor(In("items")),Ht=In("slideBy"),kt=t.viewportMax||t.fixedWidthViewportWidth,Rt=In("arrowKeys"),Pt=In("speed"),It=t.rewind,zt=!It&&t.loop,Wt=In("autoHeight"),qt=In("controls"),Ft=In("controlsText"),jt=In("nav"),Vt=In("touch"),Gt=In("mouseDrag"),Qt=In("autoplay"),Xt=In("autoplayTimeout"),Yt=In("autoplayText"),Kt=In("autoplayHoverPause"),Jt=In("autoplayResetOnVisibility"),Ut=(null,Tt=In("nonce"),Et=document.createElement("style"),Tt&&Et.setAttribute("nonce",Tt),document.querySelector("head").appendChild(Et),Et.sheet?Et.sheet:Et.styleSheet),_t=t.lazyload,Zt=t.lazyloadSelector,$t=[],te=zt?(Mt=function(){if(Lt||At&&!kt)return pt-1;var e=At?"fixedWidth":"items",n=[];if((At||t[e]<pt)&&n.push(t[e]),U)for(var i in U){var a=U[i][e];a&&(At||a<pt)&&n.push(a)}return n.length||n.push(0),Math.ceil(At?kt/Math.min.apply(null,n):Math.max.apply(null,n))}(),wt=Z?Math.ceil((5*Mt-pt)/2):4*Mt-pt,wt=Math.max(Mt,wt),Pn("edgePadding")?wt+1:wt):0,ee=Z?pt+2*te:pt+te,ne=!(!At&&!Lt||zt),ie=At?Ei():null,ae=!Z||!zt,oe=ut?"left":"top",re="",se="",ue=At?function(){return Dt&&!zt?pt-1:Math.ceil(-ie/(At+Nt))}:Lt?function(){for(var t=0;t<ee;t++)if(gt[t]>=-ie)return t}:function(){return Dt&&Z&&!zt?pt-1:zt||Z?Math.max(0,ee-Math.ceil(Ot)):ee-1},le=Nn(In("startIndex")),ce=le,fe=(Bn(),0),de=Lt?null:ue(),ve=t.preventActionWhenRunning,he=t.swipeAngle,pe=!he||"?",me=!1,ye=t.onInit,ge=new k,be=" tns-slider tns-"+t.mode,xe=ft.id||(Ct=window.tnsId,window.tnsId=Ct?Ct+1:1,"tns"+window.tnsId),Ce=In("disable"),Me=!1,we=t.freezable,Te=!(!we||Lt)&&Zn(),Ee=!1,Le={click:ki,keydown:function(t){t=ji(t);var e=[h.LEFT,h.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ke.disabled||ki(t,-1):Je.disabled||ki(t,1))}},Ae={click:function(t){if(me){if(ve)return;Oi()}for(var e=Vi(t=ji(t));e!==$e&&!g(e,"data-nav");)e=e.parentNode;if(g(e,"data-nav")){var n=an=Number(b(e,"data-nav")),i=At||Lt?n*pt/en:n*Ot;Hi(Re?n:Math.min(Math.ceil(i),pt-1),t),on===n&&(fn&&Wi(),an=-1)}},keydown:function(t){t=ji(t);var e=n.activeElement;if(g(e,"data-nav")){var i=[h.LEFT,h.RIGHT,h.ENTER,h.SPACE].indexOf(t.keyCode),a=Number(b(e,"data-nav"));i>=0&&(0===i?a>0&&Fi(Ze[a-1]):1===i?a<en-1&&Fi(Ze[a+1]):(an=a,Hi(a,t)))}}},Be={mouseover:function(){fn&&(Pi(),dn=!0)},mouseout:function(){dn&&(Ri(),dn=!1)}},Ne={visibilitychange:function(){n.hidden?fn&&(Pi(),hn=!0):hn&&(Ri(),hn=!1)}},Se={keydown:function(t){t=ji(t);var e=[h.LEFT,h.RIGHT].indexOf(t.keyCode);e>=0&&ki(t,0===e?-1:1)}},De={touchstart:Yi,touchmove:Ki,touchend:Ui,touchcancel:Ui},Oe={mousedown:Yi,mousemove:Ki,mouseup:Ui,mouseleave:Ui},He=Pn("controls"),ke=Pn("nav"),Re=!!Lt||t.navAsThumbnails,Pe=Pn("autoplay"),Ie=Pn("touch"),ze=Pn("mouseDrag"),We="tns-slide-active",qe="tns-slide-cloned",Fe="tns-complete",je={load:function(t){ui(Vi(t))},error:function(t){var e;e=Vi(t),m(e,"failed"),li(e)}},Ve="force"===t.preventScrollOnTouch;if(He)var Ge,Qe,Xe=t.controlsContainer,Ye=t.controlsContainer?t.controlsContainer.outerHTML:"",Ke=t.prevButton,Je=t.nextButton,Ue=t.prevButton?t.prevButton.outerHTML:"",_e=t.nextButton?t.nextButton.outerHTML:"";if(ke)var Ze,$e=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=Lt?pt:Zi(),nn=0,an=-1,on=Dn(),rn=on,sn="tns-nav-active",un="Carousel Page ",ln=" (Current Slide)";if(Pe)var cn,fn,dn,vn,hn,pn="forward"===t.autoplayDirection?1:-1,mn=t.autoplayButton,yn=t.autoplayButton?t.autoplayButton.outerHTML:"",gn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ie||ze)var bn,xn,Cn={},Mn={},wn=!1,Tn=ut?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Lt||An(Ce||Te),W&&(oe=W,re="translate",q?(re+=ut?"3d(":"3d(0px, ",se=ut?", 0px, 0px)":", 0px)"):(re+=ut?"X(":"Y(",se=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){if(Pn("gutter"),lt.className="tns-outer",ct.className="tns-inner",lt.id=xe+"-ow",ct.id=xe+"-iw",""===ft.id&&(ft.id=xe),be+=I||Lt?" tns-subpixel":" tns-no-subpixel",be+=P?" tns-calc":" tns-no-calc",Lt&&(be+=" tns-autowidth"),be+=" tns-"+t.axis,ft.className+=be,Z?((rt=n.createElement("div")).id=xe+"-mw",rt.className="tns-ovh",lt.appendChild(rt),rt.appendChild(ct)):lt.appendChild(ct),Wt&&((rt||ct).className+=" tns-ah"),dt.insertBefore(lt,ft),ct.appendChild(ft),v(ht,(function(t,e){m(t,"tns-item"),t.id||(t.id=xe+"-item"+e),!Z&&ot&&m(t,ot),C(t,{"aria-hidden":"true",tabindex:"-1"})})),te){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),a=te;a--;){var o=a%pt,r=ht[o].cloneNode(!0);if(m(r,qe),M(r,"id"),i.insertBefore(r,i.firstChild),Z){var s=ht[pt-1-o].cloneNode(!0);m(s,qe),M(s,"id"),e.appendChild(s)}}ft.insertBefore(e,ft.firstChild),ft.appendChild(i),ht=ft.children}}(),function(){if(!Z)for(var e=le,n=le+Math.min(pt,Ot);e<n;e++){var i=ht[e];i.style.left=100*(e-le)/Ot+"%",m(i,nt),y(i,ot)}if(ut&&(I||Lt?(f(Ut,"#"+xe+" > .tns-item","font-size:"+u.getComputedStyle(ht[0]).fontSize+";",d(Ut)),f(Ut,"#"+xe,"font-size:0;",d(Ut))):Z&&v(ht,(function(t,e){t.style.marginLeft=function(t){return P?P+"("+100*t+"% / "+ee+")":100*t/ee+"%"}(e)}))),z){if(F){var a=rt&&t.autoHeight?Vn(t.speed):"";f(Ut,"#"+xe+"-mw",a,d(Ut))}a=zn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),f(Ut,"#"+xe+"-iw",a,d(Ut)),Z&&(a=ut&&!Lt?"width:"+Wn(t.fixedWidth,t.gutter,t.items)+";":"",F&&(a+=Vn(Pt)),f(Ut,"#"+xe,a,d(Ut))),a=ut&&!Lt?qn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=Fn(t.gutter)),Z||(F&&(a+=Vn(Pt)),V&&(a+=Gn(Pt))),a&&f(Ut,"#"+xe+" > .tns-item",a,d(Ut))}else Z&&Wt&&(rt.style[F]=Pt/1e3+"s"),ct.style.cssText=zn(Bt,Nt,At,Wt),Z&&ut&&!Lt&&(ft.style.width=Wn(At,Nt,Ot)),a=ut&&!Lt?qn(At,Nt,Ot):"",Nt&&(a+=Fn(Nt)),a&&f(Ut,"#"+xe+" > .tns-item",a,d(Ut));if(U&&z)for(var o in U){o=parseInt(o);var r=U[o],s=(a="",""),l="",c="",h="",p=Lt?null:In("items",o),g=In("fixedWidth",o),b=In("speed",o),x=In("edgePadding",o),C=In("autoHeight",o),M=In("gutter",o);F&&rt&&In("autoHeight",o)&&"speed"in r&&(s="#"+xe+"-mw{"+Vn(b)+"}"),("edgePadding"in r||"gutter"in r)&&(l="#"+xe+"-iw{"+zn(x,M,g,b,C)+"}"),Z&&ut&&!Lt&&("fixedWidth"in r||"items"in r||At&&"gutter"in r)&&(c="width:"+Wn(g,M,p)+";"),F&&"speed"in r&&(c+=Vn(b)),c&&(c="#"+xe+"{"+c+"}"),("fixedWidth"in r||At&&"gutter"in r||!Z&&"items"in r)&&(h+=qn(g,M,p)),"gutter"in r&&(h+=Fn(M)),!Z&&"speed"in r&&(F&&(h+=Vn(b)),V&&(h+=Gn(b))),h&&(h="#"+xe+" > .tns-item{"+h+"}"),(a=s+l+c+h)&&Ut.insertRule("@media (min-width: "+o/16+"em) {"+a+"}",Ut.cssRules.length)}}(),Qn();var En=zt?Z?function(){var t=fe,e=de;t+=Ht,e-=Ht,Bt?(t+=1,e-=1):At&&(St+Nt)%(At+Nt)&&(e-=1),te&&(le>e?le-=pt:le<t&&(le+=pt))}:function(){if(le>de)for(;le>=fe+pt;)le-=pt;else if(le<fe)for(;le<=de-pt;)le+=pt}:function(){le=Math.max(fe,Math.min(de,le))},Ln=Z?function(){var t,e,n,i,a,o,r,s,u,l,c;wi(ft,""),F||!Pt?(Bi(),Pt&&L(ft)||Oi()):(t=ft,e=oe,n=re,i=se,a=Li(),o=Pt,r=Oi,s=Math.min(o,10),u=a.indexOf("%")>=0?"%":"px",a=a.replace(u,""),l=Number(t.style[e].replace(n,"").replace(i,"").replace(u,"")),c=(a-l)/o*s,setTimeout((function a(){o-=s,l+=c,t.style[e]=n+l+u+i,o>0?setTimeout(a,s):r()}),s)),ut||_i()}:function(){$t=[];var t={};t[Q]=t[X]=Oi,H(ht[ce],t),O(ht[le],t),Ni(ce,nt,it,!0),Ni(le,ot,nt),Q&&X&&Pt&&L(ft)||Oi()};return{version:"2.9.3",getInfo:ta,events:ge,goTo:Hi,play:function(){Qt&&!fn&&(zi(),vn=!1)},pause:function(){fn&&(Wi(),vn=!0)},isOn:yt,updateSliderHeight:pi,refresh:Qn,destroy:function(){if(Ut.disabled=!0,Ut.ownerNode&&Ut.ownerNode.remove(),H(u,{resize:Un}),Rt&&H(n,Se),Xe&&H(Xe,Le),$e&&H($e,Ae),H(ft,Be),H(ft,Ne),mn&&H(mn,{click:qi}),Qt&&clearInterval(cn),Z&&Q){var e={};e[Q]=Oi,H(ft,e)}Vt&&H(ft,De),Gt&&H(ft,Oe);var i=[vt,Ye,Ue,_e,tn,yn];for(var a in K.forEach((function(e,n){var a="container"===e?lt:t[e];if("object"==typeof a&&a){var o=!!a.previousElementSibling&&a.previousElementSibling,r=a.parentNode;a.outerHTML=i[n],t[e]=o?o.nextElementSibling:r.firstElementChild}})),K=nt=it=at=ot=ut=lt=ct=ft=dt=vt=ht=pt=st=mt=Lt=At=Bt=Nt=St=Ot=Ht=kt=Rt=Pt=It=zt=Wt=Ut=_t=gt=$t=te=ee=ne=ie=ae=oe=re=se=ue=le=ce=fe=de=he=pe=me=ye=ge=be=xe=Ce=Me=we=Te=Ee=Le=Ae=Be=Ne=Se=De=Oe=He=ke=Re=Pe=Ie=ze=We=Fe=je=bt=qt=Ft=Xe=Ye=Ke=Je=Ge=Qe=jt=$e=tn=Ze=en=nn=an=on=rn=sn=un=ln=Qt=Xt=pn=Yt=Kt=mn=yn=Jt=gn=cn=fn=dn=vn=hn=Cn=Mn=bn=wn=xn=Tn=Vt=Gt=null,this)"rebuild"!==a&&(this[a]=null);yt=!1},rebuild:function(){return R(a(t,J))}}}function An(t){t&&(qt=jt=Vt=Gt=Rt=Qt=Kt=Jt=!1)}function Bn(){for(var t=Z?le-te:le;t<0;)t+=pt;return t%pt+1}function Nn(t){return t=t?Math.max(0,Math.min(zt?pt-1:pt-Ot,t)):0,Z?t+te:t}function Sn(t){for(null==t&&(t=le),Z&&(t-=te);t<0;)t+=pt;return Math.floor(t%pt)}function Dn(){var t,e=Sn();return t=Re?e:At||Lt?Math.ceil((e+1)*en/pt-1):Math.floor(e/Ot),!zt&&Z&&le===de&&(t=en-1),t}function On(){return u.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function Hn(t){return"top"===t?"afterbegin":"beforeend"}function kn(t){if(null!=t){var e,i,a=n.createElement("div");return t.appendChild(a),i=(e=a.getBoundingClientRect()).right-e.left,a.remove(),i||kn(t.parentNode)}}function Rn(){var t=Bt?2*Bt-Nt:0;return kn(dt)-t}function Pn(e){if(t[e])return!0;if(U)for(var n in U)if(U[n][e])return!0;return!1}function In(e,n){if(null==n&&(n=mt),"items"===e&&At)return Math.floor((St+Nt)/(At+Nt))||1;var i=t[e];if(U)for(var a in U)n>=parseInt(a)&&e in U[a]&&(i=U[a][e]);return"slideBy"===e&&"page"===i&&(i=In("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function zn(t,e,n,i,a){var o="";if(void 0!==t){var r=t;e&&(r-=e),o=ut?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var s="-"+e+"px";o="margin: 0 "+(ut?s+" 0 0":"0 "+s+" 0")+";"}return!Z&&a&&F&&i&&(o+=Vn(i)),o}function Wn(t,e,n){return t?(t+e)*ee+"px":P?P+"("+100*ee+"% / "+n+")":100*ee/n+"%"}function qn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var a=Z?ee:n;i=P?P+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==_?i+";":i+" !important;"}function Fn(t){var e="";return!1!==t&&(e=(ut?"padding-":"margin-")+(ut?"right":"bottom")+": "+t+"px;"),e}function jn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Vn(t){return jn(F,18)+"transition-duration:"+t/1e3+"s;"}function Gn(t){return jn(V,17)+"animation-duration:"+t/1e3+"s;"}function Qn(){if(Pn("autoHeight")||Lt||!ut){var t=ft.querySelectorAll("img");v(t,(function(t){var e=t.src;_t||(e&&e.indexOf("data:image")<0?(t.src="",O(t,je),m(t,"loading"),t.src=e):ui(t))})),e((function(){di(w(t),(function(){bt=!0}))})),Pn("autoHeight")&&(t=ci(le,Math.min(le+Ot-1,ee-1))),_t?Xn():e((function(){di(w(t),Xn)}))}else Z&&Ai(),Kn(),Jn()}function Xn(){if(Lt&&pt>1){var t=zt?le:pt-1;!function e(){var n=ht[t].getBoundingClientRect().left,i=ht[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Yn():setTimeout((function(){e()}),16)}()}else Yn()}function Yn(){ut&&!Lt||(mi(),Lt?(ie=Ei(),we&&(Te=Zn()),de=ue(),An(Ce||Te)):_i()),Z&&Ai(),Kn(),Jn()}function Kn(){if(yi(),lt.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+oi()+"</span>  of "+pt+"</div>"),xt=lt.querySelector(".tns-liveregion .current"),Pe){var e=Qt?"stop":"start";mn?C(mn,{"data-action":e}):t.autoplayButtonOutput&&(lt.insertAdjacentHTML(Hn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+gn[0]+e+gn[1]+Yt[0]+"</button>"),mn=lt.querySelector("[data-action]")),mn&&O(mn,{click:qi}),Qt&&(zi(),Kt&&O(ft,Be),Jt&&O(ft,Ne))}if(ke){if($e)C($e,{"aria-label":"Carousel Pagination"}),v(Ze=$e.children,(function(t,e){C(t,{"data-nav":e,tabindex:"-1","aria-label":un+(e+1),"aria-controls":xe})}));else{for(var n="",i=Re?"":'style="display:none"',a=0;a<pt;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+xe+'" '+i+' aria-label="'+un+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",lt.insertAdjacentHTML(Hn(t.navPosition),n),$e=lt.querySelector(".tns-nav"),Ze=$e.children}if($i(),F){var o=F.substring(0,F.length-18).toLowerCase(),r="transition: all "+Pt/1e3+"s";o&&(r="-"+o+"-"+r),f(Ut,"[aria-controls^="+xe+"-item]",r,d(Ut))}C(Ze[on],{"aria-label":un+(on+1)+ln}),M(Ze[on],"tabindex"),m(Ze[on],sn),O($e,Ae)}He&&(Xe||Ke&&Je||(lt.insertAdjacentHTML(Hn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+xe+'">'+Ft[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+xe+'">'+Ft[1]+"</button></div>"),Xe=lt.querySelector(".tns-controls")),Ke&&Je||(Ke=Xe.children[0],Je=Xe.children[1]),t.controlsContainer&&C(Xe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&C([Ke,Je],{"aria-controls":xe,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(C(Ke,{"data-controls":"prev"}),C(Je,{"data-controls":"next"})),Ge=bi(Ke),Qe=bi(Je),Mi(),Xe?O(Xe,Le):(O(Ke,Le),O(Je,Le))),ti()}function Jn(){if(Z&&Q){var e={};e[Q]=Oi,O(ft,e)}Vt&&O(ft,De,t.preventScrollOnTouch),Gt&&O(ft,Oe),Rt&&O(n,Se),"inner"===_?ge.on("outerResized",(function(){_n(),ge.emit("innerLoaded",ta())})):(U||At||Lt||Wt||!ut)&&O(u,{resize:Un}),Wt&&("outer"===_?ge.on("innerLoaded",fi):Ce||fi()),si(),Ce?ii():Te&&ni(),ge.on("indexChanged",vi),"inner"===_&&ge.emit("innerLoaded",ta()),"function"==typeof ye&&ye(ta()),yt=!0}function Un(t){e((function(){_n(ji(t))}))}function _n(e){if(yt){"outer"===_&&ge.emit("outerResized",ta(e)),mt=On();var i,a=st,o=!1;U&&($n(),(i=a!==st)&&ge.emit("newBreakpointStart",ta(e)));var r,s,u=Ot,l=Ce,c=Te,h=Rt,p=qt,g=jt,b=Vt,x=Gt,C=Qt,M=Kt,w=Jt,L=le;if(i){var A=At,B=Wt,N=Ft,S=Dt,D=Yt;if(!z)var k=Nt,R=Bt}if(Rt=In("arrowKeys"),qt=In("controls"),jt=In("nav"),Vt=In("touch"),Dt=In("center"),Gt=In("mouseDrag"),Qt=In("autoplay"),Kt=In("autoplayHoverPause"),Jt=In("autoplayResetOnVisibility"),i&&(Ce=In("disable"),At=In("fixedWidth"),Pt=In("speed"),Wt=In("autoHeight"),Ft=In("controlsText"),Yt=In("autoplayText"),Xt=In("autoplayTimeout"),z||(Bt=In("edgePadding"),Nt=In("gutter"))),An(Ce),St=Rn(),ut&&!Lt||Ce||(mi(),ut||(_i(),o=!0)),(At||Lt)&&(ie=Ei(),de=ue()),(i||At)&&(Ot=In("items"),Ht=In("slideBy"),(s=Ot!==u)&&(At||Lt||(de=ue()),En())),i&&Ce!==l&&(Ce?ii():function(){if(Me){if(Ut.disabled=!1,ft.className+=be,Ai(),zt)for(var t=te;t--;)Z&&E(ht[t]),E(ht[ee-t-1]);if(!Z)for(var e=le,n=le+pt;e<n;e++){var i=ht[e],a=e<le+Ot?nt:ot;i.style.left=100*(e-le)/Ot+"%",m(i,a)}ei(),Me=!1}}()),we&&(i||At||Lt)&&(Te=Zn())!==c&&(Te?(Bi(Li(Nn(0))),ni()):(function(){if(Ee){if(Bt&&z&&(ct.style.margin=""),te)for(var t="tns-transparent",e=te;e--;)Z&&y(ht[e],t),y(ht[ee-e-1],t);ei(),Ee=!1}}(),o=!0)),An(Ce||Te),Qt||(Kt=Jt=!1),Rt!==h&&(Rt?O(n,Se):H(n,Se)),qt!==p&&(qt?Xe?E(Xe):(Ke&&E(Ke),Je&&E(Je)):Xe?T(Xe):(Ke&&T(Ke),Je&&T(Je))),jt!==g&&(jt?(E($e),$i()):T($e)),Vt!==b&&(Vt?O(ft,De,t.preventScrollOnTouch):H(ft,De)),Gt!==x&&(Gt?O(ft,Oe):H(ft,Oe)),Qt!==C&&(Qt?(mn&&E(mn),fn||vn||zi()):(mn&&T(mn),fn&&Wi())),Kt!==M&&(Kt?O(ft,Be):H(ft,Be)),Jt!==w&&(Jt?O(n,Ne):H(n,Ne)),i){if(At===A&&Dt===S||(o=!0),Wt!==B&&(Wt||(ct.style.height="")),qt&&Ft!==N&&(Ke.innerHTML=Ft[0],Je.innerHTML=Ft[1]),mn&&Yt!==D){var P=Qt?1:0,I=mn.innerHTML,W=I.length-D[P].length;I.substring(W)===D[P]&&(mn.innerHTML=I.substring(0,W)+Yt[P])}}else Dt&&(At||Lt)&&(o=!0);if((s||At&&!Lt)&&(en=Zi(),$i()),(r=le!==L)?(ge.emit("indexChanged",ta()),o=!0):s?r||vi():(At||Lt)&&(si(),yi(),ai()),s&&!Z&&function(){for(var t=le+Math.min(pt,Ot),e=ee;e--;){var n=ht[e];e>=le&&e<t?(m(n,"tns-moving"),n.style.left=100*(e-le)/Ot+"%",m(n,nt),y(n,ot)):n.style.left&&(n.style.left="",m(n,ot),y(n,nt)),y(n,it)}setTimeout((function(){v(ht,(function(t){y(t,"tns-moving")}))}),300)}(),!Ce&&!Te){if(i&&!z&&(Bt===R&&Nt===k||(ct.style.cssText=zn(Bt,Nt,At,Pt,Wt)),ut)){Z&&(ft.style.width=Wn(At,Nt,Ot));var q=qn(At,Nt,Ot)+Fn(Nt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Ut,d(Ut)-1),f(Ut,"#"+xe+" > .tns-item",q,d(Ut))}Wt&&fi(),o&&(Ai(),ce=le)}i&&ge.emit("newBreakpointEnd",ta(e))}}function Zn(){if(!At&&!Lt)return pt<=(Dt?Ot-(Ot-1)/2:Ot);var t=At?(At+Nt)*pt:gt[pt],e=Bt?St+2*Bt:St+Nt;return Dt&&(e-=At?(St-At)/2:(St-(gt[le+1]-gt[le]-Nt))/2),t<=e}function $n(){for(var t in st=0,U)t=parseInt(t),mt>=t&&(st=t)}function ti(){!Qt&&mn&&T(mn),!jt&&$e&&T($e),qt||(Xe?T(Xe):(Ke&&T(Ke),Je&&T(Je)))}function ei(){Qt&&mn&&E(mn),jt&&$e&&E($e),qt&&(Xe?E(Xe):(Ke&&E(Ke),Je&&E(Je)))}function ni(){if(!Ee){if(Bt&&(ct.style.margin="0px"),te)for(var t="tns-transparent",e=te;e--;)Z&&m(ht[e],t),m(ht[ee-e-1],t);ti(),Ee=!0}}function ii(){if(!Me){if(Ut.disabled=!0,ft.className=ft.className.replace(be.substring(1),""),M(ft,["style"]),zt)for(var t=te;t--;)Z&&T(ht[t]),T(ht[ee-t-1]);if(ut&&Z||M(ct,["style"]),!Z)for(var e=le,n=le+pt;e<n;e++){var i=ht[e];M(i,["style"]),y(i,nt),y(i,ot)}ti(),Me=!0}}function ai(){var t=oi();xt.innerHTML!==t&&(xt.innerHTML=t)}function oi(){var t=ri(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ri(t){null==t&&(t=Li());var e,n,i,a=le;if(Dt||Bt?(Lt||At)&&(n=-(parseFloat(t)+Bt),i=n+St+2*Bt):Lt&&(n=gt[le],i=n+St),Lt)gt.forEach((function(t,o){o<ee&&((Dt||Bt)&&t<=n+.5&&(a=o),i-t>=.5&&(e=o))}));else{if(At){var o=At+Nt;Dt||Bt?(a=Math.floor(n/o),e=Math.ceil(i/o-1)):e=a+Math.ceil(St/o)-1}else if(Dt||Bt){var r=Ot-1;if(Dt?(a-=r/2,e=le+r/2):e=le+r,Bt){var s=Bt*Ot/St;a-=s,e+=s}a=Math.floor(a),e=Math.ceil(e)}else e=a+Ot-1;a=Math.max(a,0),e=Math.min(e,ee-1)}return[a,e]}function si(){if(_t&&!Ce){var t=ri();t.push(Zt),ci.apply(null,t).forEach((function(t){if(!p(t,Fe)){var e={};e[Q]=function(t){t.stopPropagation()},O(t,e),O(t,je),t.src=b(t,"data-src");var n=b(t,"data-srcset");n&&(t.srcset=n),m(t,"loading")}}))}}function ui(t){m(t,"loaded"),li(t)}function li(t){m(t,Fe),y(t,"loading"),H(t,je)}function ci(t,e,n){var i=[];for(n||(n="img");t<=e;)v(ht[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function fi(){var t=ci.apply(null,ri());e((function(){di(t,pi)}))}function di(t,n){return bt?n():(t.forEach((function(e,n){!_t&&e.complete&&li(e),p(e,Fe)&&t.splice(n,1)})),t.length?void e((function(){di(t,n)})):n())}function vi(){si(),yi(),ai(),Mi(),function(){if(jt&&(on=an>=0?an:Dn(),an=-1,on!==rn)){var t=Ze[rn],e=Ze[on];C(t,{tabindex:"-1","aria-label":un+(rn+1)}),y(t,sn),C(e,{"aria-label":un+(on+1)+ln}),M(e,"tabindex"),m(e,sn),rn=on}}()}function hi(t,e){for(var n=[],i=t,a=Math.min(t+e,ee);i<a;i++)n.push(ht[i].offsetHeight);return Math.max.apply(null,n)}function pi(){var t=Wt?hi(le,Ot):hi(te,pt),e=rt||ct;e.style.height!==t&&(e.style.height=t+"px")}function mi(){gt=[0];var t=ut?"left":"top",e=ut?"right":"bottom",n=ht[0].getBoundingClientRect()[t];v(ht,(function(i,a){a&&gt.push(i.getBoundingClientRect()[t]-n),a===ee-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function yi(){var t=ri(),e=t[0],n=t[1];v(ht,(function(t,i){i>=e&&i<=n?g(t,"aria-hidden")&&(M(t,["aria-hidden","tabindex"]),m(t,We)):g(t,"aria-hidden")||(C(t,{"aria-hidden":"true",tabindex:"-1"}),y(t,We))}))}function gi(t){return t.nodeName.toLowerCase()}function bi(t){return"button"===gi(t)}function xi(t){return"true"===t.getAttribute("aria-disabled")}function Ci(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Mi(){if(qt&&!It&&!zt){var t=Ge?Ke.disabled:xi(Ke),e=Qe?Je.disabled:xi(Je),n=le<=fe,i=!It&&le>=de;n&&!t&&Ci(Ge,Ke,!0),!n&&t&&Ci(Ge,Ke,!1),i&&!e&&Ci(Qe,Je,!0),!i&&e&&Ci(Qe,Je,!1)}}function wi(t,e){F&&(t.style[F]=e)}function Ti(t){return null==t&&(t=le),Lt?(St-(Bt?Nt:0)-(gt[t+1]-gt[t]-Nt))/2:At?(St-At)/2:(Ot-1)/2}function Ei(){var t=St+(Bt?Nt:0)-(At?(At+Nt)*ee:gt[ee]);return Dt&&!zt&&(t=At?-(At+Nt)*(ee-1)-Ti():Ti(ee-1)-gt[ee-1]),t>0&&(t=0),t}function Li(t){var e;if(null==t&&(t=le),ut&&!Lt)if(At)e=-(At+Nt)*t,Dt&&(e+=Ti());else{var n=W?ee:Ot;Dt&&(t-=Ti()),e=100*-t/n}else e=-gt[t],Dt&&Lt&&(e+=Ti());return ne&&(e=Math.max(e,ie)),e+(!ut||Lt||At?"px":"%")}function Ai(t){wi(ft,"0s"),Bi(t)}function Bi(t){null==t&&(t=Li()),ft.style[oe]=re+t+se}function Ni(t,e,n,i){var a=t+Ot;zt||(a=Math.min(a,ee));for(var o=t;o<a;o++){var r=ht[o];i||(r.style.left=100*(o-le)/Ot+"%"),at&&j&&(r.style[j]=r.style[G]=at*(o-t)/1e3+"s"),y(r,e),m(r,n),i&&$t.push(r)}}function Si(t,e){ae&&En(),(le!==ce||e)&&(ge.emit("indexChanged",ta()),ge.emit("transitionStart",ta()),Wt&&fi(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&Wi(),me=!0,Ln())}function Di(t){return t.toLowerCase().replace(/-/g,"")}function Oi(t){if(Z||me){if(ge.emit("transitionEnd",ta(t)),!Z&&$t.length>0)for(var e=0;e<$t.length;e++){var n=$t[e];n.style.left="",G&&j&&(n.style[G]="",n.style[j]=""),y(n,it),m(n,ot)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Di(t.propertyName)===Di(oe)){if(!ae){var i=le;En(),le!==i&&(ge.emit("indexChanged",ta()),Ai())}"inner"===_&&ge.emit("innerLoaded",ta()),me=!1,ce=le}}}function Hi(t,e){if(!Te)if("prev"===t)ki(e,-1);else if("next"===t)ki(e,1);else{if(me){if(ve)return;Oi()}var n=Sn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?pt-Ot-n:pt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(pt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Ot){var a=i>0?1:-1;i+=le+i-pt>=fe?pt*a:2*pt*a*-1}le+=i,Z&&zt&&(le<fe&&(le+=pt),le>de&&(le-=pt)),Sn(le)!==Sn(ce)&&Si(e)}}function ki(t,e){if(me){if(ve)return;Oi()}var n;if(!e){for(var i=Vi(t=ji(t));i!==Xe&&[Ke,Je].indexOf(i)<0;)i=i.parentNode;var a=[Ke,Je].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(It){if(le===fe&&-1===e)return void Hi("last",t);if(le===de&&1===e)return void Hi("first",t)}e&&(le+=Ht*e,Lt&&(le=Math.floor(le)),Si(n||t&&"keydown"===t.type?t:null))}function Ri(){cn=setInterval((function(){ki(null,pn)}),Xt),fn=!0}function Pi(){clearInterval(cn),fn=!1}function Ii(t,e){C(mn,{"data-action":t}),mn.innerHTML=gn[0]+t+gn[1]+e}function zi(){Ri(),mn&&Ii("stop",Yt[1])}function Wi(){Pi(),mn&&Ii("start",Yt[0])}function qi(){fn?(Wi(),vn=!0):(zi(),vn=!1)}function Fi(t){t.focus()}function ji(t){return Gi(t=t||u.event)?t.changedTouches[0]:t}function Vi(t){return t.target||u.event.srcElement}function Gi(t){return t.type.indexOf("touch")>=0}function Qi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Xi(){return o=Mn.y-Cn.y,r=Mn.x-Cn.x,e=Math.atan2(o,r)*(180/Math.PI),n=he,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,o,r}function Yi(t){if(me){if(ve)return;Oi()}Qt&&fn&&Pi(),wn=!0,xn&&(i(xn),xn=null);var e=ji(t);ge.emit(Gi(t)?"touchStart":"dragStart",ta(t)),!Gi(t)&&["img","a"].indexOf(gi(Vi(t)))>=0&&Qi(t),Mn.x=Cn.x=e.clientX,Mn.y=Cn.y=e.clientY,Z&&(bn=parseFloat(ft.style[oe].replace(re,"")),wi(ft,"0s"))}function Ki(t){if(wn){var n=ji(t);Mn.x=n.clientX,Mn.y=n.clientY,Z?xn||(xn=e((function(){Ji(t)}))):("?"===pe&&(pe=Xi()),pe&&(Ve=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ve&&t.preventDefault()}}function Ji(t){if(pe){if(i(xn),wn&&(xn=e((function(){Ji(t)}))),"?"===pe&&(pe=Xi()),pe){!Ve&&Gi(t)&&(Ve=!0);try{t.type&&ge.emit(Gi(t)?"touchMove":"dragMove",ta(t))}catch(t){}var n=bn,a=Tn(Mn,Cn);!ut||At||Lt?(n+=a,n+="px"):(n+=W?a*Ot*100/((St+Nt)*ee):100*a/(St+Nt),n+="%"),ft.style[oe]=re+n+se}}else wn=!1}function Ui(n){if(wn){xn&&(i(xn),xn=null),Z&&wi(ft,""),wn=!1;var a=ji(n);Mn.x=a.clientX,Mn.y=a.clientY;var o=Tn(Mn,Cn);if(Math.abs(o)){if(!Gi(n)){var r=Vi(n);O(r,{click:function t(e){Qi(e),H(r,{click:t})}})}Z?xn=e((function(){if(ut&&!Lt){var t=-o*Ot/(St+Nt);t=o>0?Math.floor(t):Math.ceil(t),le+=t}else{var e=-(bn+o);if(e<=0)le=fe;else if(e>=gt[ee-1])le=de;else for(var i=0;i<ee&&e>=gt[i];)le=i,e>gt[i]&&o<0&&(le+=1),i++}Si(n,o),ge.emit(Gi(n)?"touchEnd":"dragEnd",ta(n))})):pe&&ki(n,o>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Ve=!1),he&&(pe="?"),Qt&&!fn&&Ri()}function _i(){(rt||ct).style.height=gt[le+Ot]-gt[le]+"px"}function Zi(){var t=At?(At+Nt)*pt/St:pt/Ot;return Math.min(Math.ceil(t),pt)}function $i(){if(jt&&!Re&&en!==nn){var t=nn,e=en,n=E;for(nn>en&&(t=en,e=nn,n=T);t<e;)n(Ze[t]),t++;nn=en}}function ta(t){return{container:ft,slideItems:ht,navContainer:$e,navItems:Ze,controlsContainer:Xe,hasControls:He,prevButton:Ke,nextButton:Je,items:Ot,slideBy:Ht,cloneCount:te,slideCount:pt,slideCountNew:ee,index:le,indexCached:ce,displayIndex:Bn(),navCurrentIndex:on,navCurrentIndexCached:rn,pages:en,pagesCached:nn,sheet:Ut,isOn:yt,event:t||{}}}Y&&console.warn("No slides found in",t.container)};new class{constructor(t,e,n,i){this.menuButton=document.querySelector(t),this.menuList=document.querySelector(e),this.otherElements=document.querySelectorAll(n),this.activeClass="ativo",this.events=void 0===i?["touchstart","click"]:i,this.openMenu=this.openMenu.bind(this)}openMenu(t){t.preventDefault(),this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),this.otherElements.forEach((t=>t.classList.add(this.activeClass))),function(t,e,n){const i=document.documentElement,a="data-outside";function o(r){t.contains(r.target)||(t.removeAttribute(a),e.forEach((t=>{i.removeEventListener(t,o)})),n())}t.hasAttribute(a)||(e.forEach((t=>{setTimeout((()=>i.addEventListener(t,o)))})),t.setAttribute(a,""))}(this.menuList,this.events,(()=>{this.menuList.classList.remove(this.activeClass),this.menuButton.classList.remove(this.activeClass),this.otherElements.forEach((t=>t.classList.remove(this.activeClass)))}))}addMenuMobileEvents(){this.events.forEach((t=>this.menuButton.addEventListener(t,this.openMenu)))}init(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}(".menu-mobile",".menu",'[data-menu="change"]').init(),R({container:".my-slider",loop:!0,items:1,edgePadding:40,slideBy:"page",nav:!1,autoplay:!0,speed:400,autoplayButtonOutput:!1,mouseDrag:!0,lazyload:!0})})();