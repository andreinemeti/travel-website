(function(){var i,e,n,a,o,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o;for(e=n=0,i=(o=this.keys).length;n<i;e=++n)if(o[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r;for(n=i=0,o=(r=this.keys).length;i<o;n=++i)if(r[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),i=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(i=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),a=this.getComputedStyle||function(n){return this.getPropertyValue=function(t){var e;return"float"===t&&(t="styleFloat"),o.test(t)&&t.replace(o,function(t,e){return e.toUpperCase()}),(null!=(e=n.currentStyle)?e[t]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function t(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new n}return t.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},t.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},t.prototype.start=function(){var o,t,e,n,s;if(this.stopped=!1,this.boxes=function(){var t,e,n,i;for(i=[],t=0,e=(n=this.element.querySelectorAll("."+this.config.boxClass)).length;t<e;t++)o=n[t],i.push(o);return i}.call(this),this.all=function(){var t,e,n,i;for(i=[],t=0,e=(n=this.boxes).length;t<e;t++)o=n[t],i.push(o);return i}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(t=0,e=(n=this.boxes).length;t<e;t++)o=n[t],this.applyStyle(o,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new i((s=this,function(t){var o,r,e,n,i;for(i=[],e=0,n=t.length;e<n;e++)r=t[e],i.push(function(){var t,e,n,i;for(i=[],t=0,e=(n=r.addedNodes||[]).length;t<e;t++)o=n[t],i.push(this.doSync(o));return i}.call(s));return i})).observe(document.body,{childList:!0,subtree:!0}):void 0},t.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},t.prototype.sync=function(){return i.notSupported?this.doSync(this.element):void 0},t.prototype.doSync=function(t){var e,n,i,o,r;if(null==t&&(t=this.element),1===t.nodeType){for(r=[],n=0,i=(o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;n<i;n++)e=o[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},t.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback?this.config.callback(t):void 0},t.prototype.applyStyle=function(t,e){var n,i,o,r;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate((r=this,function(){return r.customStyle(t,e,i,n,o)}))},t.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},t.prototype.resetStyle=function(){var t,e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;e<n;e++)t=i[e],o.push(t.style.visibility="visible");return o},t.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},t.prototype.vendors=["moz","webkit"],t.prototype.vendorSet=function(o,t){var r,s,l,e;for(r in e=[],t)s=t[r],o[""+r]=s,e.push(function(){var t,e,n,i;for(i=[],t=0,e=(n=this.vendors).length;t<e;t++)l=n[t],i.push(o[""+l+r.charAt(0).toUpperCase()+r.substr(1)]=s);return i}.call(this));return e},t.prototype.vendorCSS=function(t,e){var n,i,o,r,s,l;for(n=(i=a(t)).getPropertyCSSValue(e),r=0,s=(l=this.vendors).length;r<s;r++)o=l[r],n=n||i.getPropertyCSSValue("-"+o+"-"+e);return n},t.prototype.animationName=function(e){var n;try{n=this.vendorCSS(e,"animation-name").cssText}catch(t){n=a(e).getPropertyValue("animation-name")}return"none"===n?"":n},t.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},t.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},t.prototype.scrollHandler=function(){return this.scrolled=!0},t.prototype.scrollCallback=function(){var o;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var t,e,n,i;for(i=[],t=0,e=(n=this.boxes).length;t<e;t++)(o=n[t])&&(this.isVisible(o)?this.show(o):i.push(o));return i}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},t.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},t.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,o=(r=window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(i=this.offsetTop(t))+t.clientHeight,i<=o&&r<=e},t.prototype.util=function(){return null!=this._util?this._util:this._util=new e},t.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},t}()}).call(this);