(function(){"use strict";var t={3613:function(t,n,e){var i=e(1254),r=e(6440);const o={id:"app"};function a(t,n,e,i,a,s){const c=(0,r.up)("CanvasPainter");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(c)])}const s={class:"tools"},c={ref:"container",class:"container"};function h(t,n,e,o,a,h){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",s,[(0,r.wy)((0,r._)("input",{type:"color","onUpdate:modelValue":n[0]||(n[0]=t=>a.color=t)},null,512),[[i.nr,a.color]]),(0,r.wy)((0,r._)("input",{type:"range","onUpdate:modelValue":n[1]||(n[1]=t=>a.lineWidth=t),min:"1",max:"50"},null,512),[[i.nr,a.lineWidth]]),(0,r._)("button",{onClick:n[2]||(n[2]=(...t)=>h.clearCanvas&&h.clearCanvas(...t))},"清除畫布"),(0,r._)("button",{onClick:n[3]||(n[3]=(...t)=>h.fetchColorFromServer&&h.fetchColorFromServer(...t))},"同步顏色")]),(0,r._)("div",c,null,512)])}var l=e(4257),u=e.n(l),f=e(4933),d={data(){return{stage:null,layer:null,isPainting:!1,lastLine:null,color:"#df4b26",lineWidth:5,canvasWidth:window.innerWidth,canvasHeight:window.innerHeight-50}},async mounted(){await this.$nextTick(),await this.fetchColorFromServer(),this.canvasWidth=this.$refs.container.offsetWidth,this.canvasHeight=this.$refs.container.offsetHeight,this.initStage()},methods:{initStage(){this.stage=new(u().Stage)({container:this.$refs.container,width:this.canvasWidth,height:this.canvasHeight}),this.layer=new(u().Layer),this.stage.add(this.layer),this.stage.on("mousedown touchstart",this.startPaint),this.stage.on("mouseup touchend",this.endPaint),this.stage.on("mousemove touchmove",this.paint)},async fetchColorFromServer(){try{const t=await f.Z.get("http://123.194.35.219:8002/color");t.data&&t.data.color?this.color=t.data.color:console.error("Unexpected response format from server.")}catch(t){console.error("Error fetching color from server:",t)}},startPaint(){this.isPainting=!0;const t=this.stage.getPointerPosition();this.lastLine=new(u().Line)({stroke:this.color,strokeWidth:this.lineWidth,globalCompositeOperation:"source-over",points:[t.x,t.y]}),this.layer.add(this.lastLine)},endPaint(){this.isPainting=!1},paint(){if(!this.isPainting)return;const t=this.stage.getPointerPosition(),n=this.lastLine.points().concat([t.x,t.y]);this.lastLine.points(n),this.layer.batchDraw()},clearCanvas(){this.layer.removeChildren(),this.layer.draw()}}},v=e(927);const p=(0,v.Z)(d,[["render",h],["__scopeId","data-v-b0d0d982"]]);var g=p,m={components:{CanvasPainter:g}};const w=(0,v.Z)(m,[["render",a]]);var y=w;(0,i.ri)(y).mount("#app")}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return t[i](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,i,r,o){if(!i){var a=1/0;for(l=0;l<t.length;l++){i=t[l][0],r=t[l][1],o=t[l][2];for(var s=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(e.O).every((function(t){return e.O[t](i[c])}))?i.splice(c--,1):(s=!1,o<a&&(a=o));if(s){t.splice(l--,1);var h=r();void 0!==h&&(n=h)}}return n}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[i,r,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var r,o,a=i[0],s=i[1],c=i[2],h=0;if(a.some((function(n){return 0!==t[n]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(c)var l=c(e)}for(n&&n(i);h<a.length;h++)o=a[h],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(l)},i=self["webpackChunkvue_painter"]=self["webpackChunkvue_painter"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(3613)}));i=e.O(i)})();
//# sourceMappingURL=app.76d47f6d.js.map