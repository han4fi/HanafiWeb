// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_bubbles(c,m,o){var f=jQuery;var g=f(this);var j=c.noCanvas||!document.createElement("canvas").getContext;var l=c.width,q=c.height;var i=f("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_bubbles").appendTo(o.parent());if(!j){var b=f("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(i);var p=b.get(0).getContext("2d")}var k={easeOutBack:function(u,v,h,z,y,w){if(w==undefined){w=1.70158}return z*((v=v/y-1)*v*((w+1)*v+w)+1)+h},easeOutBackCubic:function(u,v,h,A,z,w){var y=(v/=z)*v;return h+A*(-1.5*y*v*y+2*y*y+4*y*v+-9*y+5.5*v)},easeOutCubic:function(u,v,h,y,w){return y*((v=v/w-1)*v*v+1)+h},easeOutExpo:function(u,v,h,y,w){return(v==w)?h+y:y*(-Math.pow(2,-10*v/w)+1)+h}};var t=[["#bbbbbb",0.5,0.5],["#b3b3b3",0.2,0.2],["#b6b6b6",0.5,0.2],["#b9b9b9",0.8,0.2],["#cccccc",0.2,0.8],["#c3c3c3",0.5,0.8],["#c6c6c6",0.8,0.8]];var d=[[[0.5,0.5,0.7,0.15],[0.5,0.5,0.6,0.3],[0.5,0.5,0.5,0.45],[0.5,0.5,0.4,0.6],[0.5,0.5,0.3,0.75],[0.5,0.5,0.2,0.9],[0.5,0.5,0.1,1]],[[0.5,0.5,0.7,1],[0.5,0.5,0.6,0.9],[0.5,0.5,0.5,0.75],[0.5,0.5,0.4,0.6],[0.5,0.5,0.3,0.45],[0.5,0.5,0.2,0.3],[0.5,0.5,0.1,0.15]]];var n=[[[0.5,0.5,0,1],[0.5,0.5,0,0.9],[0.5,0.5,0,0.75],[0.5,0.5,0,0.6],[0.5,0.5,0,0.45],[0.5,0.5,0,0.3],[0.5,0.5,0,0.15]],[[0.5,0.5,0,0.15],[0.5,0.5,0,0.3],[0.5,0.5,0,0.45],[0.5,0.5,0,0.6],[0.5,0.5,0,0.75],[0.5,0.5,0,0.9],[0.5,0.5,0,1]],[[0.5,7.5,0.7,0.75],[0.5,7.5,0.6,0.15],[0.5,7.5,0.5,1],[0.5,7.5,0.4,0.3],[0.5,7.5,0.3,0.45],[0.5,7.5,0.2,0.6],[0.5,7.5,0.1,0.9]],[[0.5,7.5,0.7,1],[0.5,7.5,0.6,0.9],[0.5,7.5,0.5,0.75],[0.5,7.5,0.4,0.6],[0.5,7.5,0.3,0.45],[0.5,7.5,0.2,0.3],[0.5,7.5,0.1,0.15]]];function e(v){if(Object.prototype.toString.call(v)==="[object Array]"){return v[Math.floor(Math.random()*(v.length))]}else{var h;var u=0;for(var w in v){if(Math.random()<1/++u){h=w}}return/linear|swing/g.test(h)?e(v):h}}function a(w,v,y){var x=new Date().getTime();var u=function(){var A=new Date().getTime();var z=(A-x)/w;if(z<1){v(z);requestAnimationFrame(u)}else{h(1)}};u();function h(z){cancelAnimationFrame(u);if(z){v(1)}if(y){y()}}return{stop:h}}function r(C,B,w,A,u){C.clearRect(0,0,l,q);for(var v=0,z=w.length;v<z;v++){var h=Math.max(0,Math.min(1,B-w[v][3]*(1-B)));if(u&&k[u]){h=k[u](1,h,0,1,1,1)}var x=l;if(l/q<=1.8&&l/q>0.7){x*=2}else{if(l/q<=0.7){x=q*2}}var y=w[v][2]*h*x;if(A){y=(w[v][2]+(A[v][2]-w[v][2])*h)*x}y=Math.max(0,y);C.beginPath();C.arc((w[v][0]+((A?A[v][0]:0.5)-w[v][0])*h)*l,(w[v][1]+((A?A[v][1]:0.5)-w[v][1])*h)*q,y,0,2*Math.PI,false);C.fillStyle=t[v][0];C.fill()}}this.go=function(C,x){if(j){o.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(C?-C+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},c.duration,"easeInOutExpo",function(){g.trigger("effectEnd")})}else{l=o.width();q=o.height();b.attr({width:l,height:q});var A=m.get(x);for(var y=0,B=t.length;y<B;y++){var v=Math.abs(t[y][1]),h=Math.abs(t[y][2]);t[y][0]=s(A,{x:v*l,y:h*q,w:2,h:2})||t[y][0]}var u=e(d);var w=e(n);var z=e(k);a(c.duration/2,function(D){r(p,D,u,0,z)},function(){o.find(".ws_list").css({left:(C?-C+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});z=e(k);a(c.duration/2,function(D){r(p,1-D,w,u,z)},function(){p.clearRect(0,0,l,q);g.trigger("effectEnd")})})}};function s(D,u){u=u||{};var F=1,x=u.exclude||[],C;var z=document.createElement("canvas"),w=z.getContext("2d"),v=z.width=D.naturalWidth,J=z.height=D.naturalHeight;w.drawImage(D,0,0,D.naturalWidth,D.naturalHeight);try{C=w.getImageData(u.x?u.x:0,u.y?u.y:0,u.w?u.w:D.width,u.h?u.h:D.height)["data"]}catch(E){return false}var y=(u.w?u.w:D.width*u.h?u.h:D.height)||C.length,A={},H="",G=[],h={dominant:{name:"",count:0}};var B=0;while(B<y){G[0]=C[B];G[1]=C[B+1];G[2]=C[B+2];H=G.join(",");if(H in A){A[H]=A[H]+1}else{A[H]=1}if(x.indexOf(["rgb(",H,")"].join(""))===-1){var I=A[H];if(I>h.dominant.count){h.dominant.name=H;h.dominant.count=I}}B+=F*4}return["rgb(",h.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutBackCubic:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(-1.5*h*f*h+2*h*h+4*h*f+-9*h+5.5*f)}});function ws_dribbles(q,l,a){var e=jQuery;var k=e(this);var o=q.noCanvas||!document.createElement("canvas").getContext;var n=q.width,f=q.height;var j=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_dribbles").appendTo(a.parent());if(!o){var c=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(j);var p=c.get(0).getContext("2d")}var m=[["#bbbbbb",0.1,0.3,0.18],["#b3b3b3",0.9,0.8,0.15],["#b6b6b6",0.68,0.4,0.2],["#b9b9b9",0.25,0.4,0.15],["#cccccc",0.11,0.7,0.15],["#c3c3c3",0.18,0.1,0.15],["#c6c6c6",0.4,0.2,0.15],["#c9c9c9",0.55,-0.04,0.18],["#d3d3d3",0,0.95,0.13],["#d6d6d6",0.5,0.8,0.22],["#d9d9d9",0.9,0.1,0.18],["#eeeeee",0.3,0.9,0.18],["#e3e3e3",0.93,0.5,0.14],["#e6e6e6",0.7,0.9,0.15]];var d=[[[0.1,0.3,0,1],[0.9,0.8,0.15,0.85],[0.68,0.4,0,0.9],[0.25,0.4,0.21,0.79],[0.11,0.7,0.3,0.7],[0.18,0.1,0.45,0.55],[0.4,0.2,0,0.75],[0.55,-0.04,0.48,0.52],[0,0.95,0.21,0.79],[0.5,0.8,0.1,0.9],[0.9,0.1,0.25,0.75],[0.3,0.9,0.18,0.82],[0.93,0.5,0.4,0.6],[0.7,0.9,0.13,0.87]],[[-0.3,-0.2,0.06,1],[-0.1,-0.3,0.12,1],[-0.2,-0.5,0,1],[-0.1,-0.3,0.24,1],[-0.3,-0.4,0.4,1],[-0.5,-0.1,0.76,1],[-0.2,-0.1,0.62,1],[-0.3,-0.3,0.48,1],[-0.4,-0.1,0.05,1],[-0.5,-0.2,0.6,1],[-0.3,-0.25,0.75,1],[-0.1,-0.4,0.3,1],[-0.2,-0.35,0.95,1],[-0.15,-0.25,0.2,1]],[[1.3,1.2,0.06,1],[1.1,1.3,0.12,1],[1.2,1.5,0,1],[1.1,1.3,0.24,1],[1.3,1.4,0.4,1],[1.5,1.1,0.76,1],[1.2,1.1,0.62,1],[1.3,1.3,0.48,1],[1.4,1.1,0.05,1],[1.5,1.2,0.6,1],[1.3,1.25,0.75,1],[1.1,1.4,0.3,1],[1.2,1.35,0.95,1],[1.15,1.25,0.2,1]],[[0.1,1.3,0,1],[0.9,1.34,0.15,0.85],[0.68,1.23,0,0.9],[0.25,1.5,0.21,0.79],[0.11,1.2,0.3,0.7],[0.18,1.4,0.16,0.84],[0.4,1.17,0,0.75],[0.55,1.2,0,0.52],[0,1.5,0.21,0.79],[0.5,1.45,0,0.9],[0.9,1.34,0.25,0.75],[0.3,1.6,0.18,0.82],[0.93,1.2,0.09,0.91],[0.7,1.15,0.13,0.87]],[[0.1,-0.3,0,1],[0.9,-0.34,0.15,0.85],[0.68,-0.23,0,0.9],[0.25,-0.5,0.21,0.79],[0.11,-0.2,0.3,0.7],[0.18,-0.4,0.16,0.84],[0.4,-0.17,0,0.75],[0.55,-0.2,0,0.52],[0,-0.5,0.21,0.79],[0.5,-0.45,0,0.9],[0.9,-0.34,0.25,0.75],[0.3,-0.6,0.18,0.82],[0.93,-0.2,0.09,0.91],[0.7,-0.15,0.13,0.87]],[[-0.2,-0.1,0,1],[1.3,1.1,0.15,0.85],[0.48,1.4,0,0.9],[1.2,1.6,0.21,0.79],[1.11,-0.15,0.3,0.7],[0.28,1.3,0.16,0.84],[-0.1,-0.4,0,0.75],[0.15,1.3,0,0.52],[-0.5,0.85,0.21,0.79],[-0.2,0.7,0,0.9],[1.4,0.2,0.25,0.75],[1.1,1.5,0.18,0.82],[-0.43,-0.2,0.09,0.91],[0.7,1.5,0.13,0.87]]];function g(t,s,v){var u=new Date().getTime();var r=function(){var x=new Date().getTime();var w=(x-u)/t;if(w<1){s(w);requestAnimationFrame(r)}else{h(1)}};r();function h(w){cancelAnimationFrame(r);if(w){s(1)}if(v){v()}}return{stop:h}}function b(z,x,u,r){z.clearRect(0,0,n,f);for(var s=0,w=u.length;s<w;s++){var t=2-u[s][3];var y=u[s][2]*(1-x);var h=Math.max(0,Math.min(1,x*t-y));if(r&&e.easing[r]){h=e.easing[r](1,h,0,1,1,1)}var v=n;if(n/f<=1.8&&n/f>0.7){v*=2}else{if(n/f<=0.7){v=f*2}}z.beginPath();z.arc((u[s][0]+(m[s][1]-u[s][0])*h)*n,(u[s][1]+(m[s][2]-u[s][1])*h)*f,m[s][3]*h*v,0,2*Math.PI,false);z.fillStyle=m[s][0];z.fill()}}this.go=function(y,t){if(o){a.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(y?-y+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},q.duration,"easeInOutExpo",function(){k.trigger("effectEnd")})}else{n=a.width();f=a.height();var v=Math.floor(Math.random()*(d.length));var z=d[v];var s=d[Math.floor(Math.random()*(d.length))];c.attr({width:n,height:f});var w=l.get(v==0?t:y);for(var u=0,x=m.length;u<x;u++){var r=Math.abs(m[u][1]),h=Math.abs(m[u][2]);m[u][0]=i(w,{x:r*n,y:h*f,w:2,h:2})||m[u][0]}g(q.duration/2,function(A){b(p,A,z,"easeOutBackCubic")},function(){a.find(".ws_list").css({left:(y?-y+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});g(q.duration/2,function(A){b(p,1-A,s,"easeOutBackCubic")},function(){p.clearRect(0,0,n,f);k.trigger("effectEnd")})})}};function i(A,r){r=r||{};var C=1,u=r.exclude||[],z;var w=document.createElement("canvas"),t=w.getContext("2d"),s=w.width=A.naturalWidth,G=w.height=A.naturalHeight;t.drawImage(A,0,0,A.naturalWidth,A.naturalHeight);try{z=t.getImageData(r.x?r.x:0,r.y?r.y:0,r.w?r.w:A.width,r.h?r.h:A.height)["data"]}catch(B){return false}var v=(r.w?r.w:A.width*r.h?r.h:A.height)||z.length,x={},E="",D=[],h={dominant:{name:"",count:0}};var y=0;while(y<v){D[0]=z[y];D[1]=z[y+1];D[2]=z[y+2];E=D.join(",");if(E in x){x[E]=x[E]+1}else{x[E]=1}if(u.indexOf(["rgb(",E,")"].join(""))===-1){var F=x[E];if(F>h.dominant.count){h.dominant.name=E;h.dominant.count=F}}y+=C*4}return["rgb(",h.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_seven(k,x,m){var n=jQuery;var t=n(this);var l=k.distance||5;var d=k.cols;var w=k.rows;var a=k.duration*2;var o=k.blur||50;var A=m.find(".ws_list");var D=[];var v=[];var u=n("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:(k.responsive>1?"hidden":"visible")});var c=u.clone().css("overflow","hidden");u.addClass("ws_effect ws_seven");m=m.parent();var r=!k.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;var j;var e=n("<div>").addClass("ws_parts");var y=n("<div>").addClass("ws_zoom");u.append(e,y,c).appendTo(m);var f={t:n(window).scrollTop(),l:n(window).scrollLeft(),w:n(window).width(),h:n(window).height()};jQuery.extend(jQuery.easing,{easeOutQuart:function(F,G,E,I,H){return -I*((G=G/H-1)*G*G*G-1)+E},easeInExpo:function(F,G,E,I,H){return(G==0)?E:I*Math.pow(2,10*(G/H-1))+E},easeInCirc:function(F,G,E,I,H){return -I*(Math.sqrt(1-(G/=H)*G)-1)+E}});function q(F,E){return Math.abs((E%2?1:0)+((E-E%2)/2)-F)/E}function C(I,H,J,E){var G=(H>=E)?(E)/(H):1;var F=(I>=J)?(J)/(I):1;return{l:F,t:G,m:Math.min(F,G)}}function i(H,L){var K=new Date().getTime(),E,J,G,I;var F=function(){var Q=new Date().getTime();var T=0;for(var S in H){if(H[S].disabled){continue}T++;if((K+H[S].delay)>Q){var M=0}else{var M=(Q-(K+H[S].delay))/H[S].duration}I={};if(M>1){if(H[S].callback){H[S].callback()}H[S].disabled=true;continue}M=n.easing[H[S].easing](1,M,0,1,1,1).toFixed(3);var P="";for(var O in H[S].begin){var X=H[S].begin[O]||0,R=H[S].end[O]||0;if(O=="translate"){var W=X[0]+(R[0]-X[0])*M;var V=X[1]+(R[1]-X[1])*M;var U=X[2]+(R[2]-X[2])*M;P+="translate3d("+W+"px,"+V+"px,"+U+"px)"}else{if(O=="scale"){var N=X+(R-X)*M;P+=" scale("+N+")"}else{I[O]=X+(R-X)*M}}}I.transform=P;delete I.translate;delete I.scale;H[S].item.css(I)}if(!T){cancelAnimationFrame(F);if(L){L()}}else{requestAnimationFrame(F)}};F()}function s(Q,E,F,I,S){var M=e.width(),O=e.height(),P=l*M/d,K=l*O/w,L=a*(I?4:5)/(d*w),H=I?"easeInExpo":"easeOutQuart";var G=f.h+f.t-O/w,N=f.w+f.l-M/d,T=e.offset().top+e.height(),J=e.offset().left+e.width();if(G<T){G=T}if(N<J){N=J}var R=[];n(Q).each(function(ab){var Y=ab%d,V=Math.floor(ab/d),Z=a*0.2*(q(Y,d)*45+V*4)/(d*w),X=e.offset().left+f.l+P*Y-M*l/2+P,aa=e.offset().top+f.t+K*V-O*l/2+K,U=C(X,aa,N,G);if(k.support.transform){var ac={opacity:1,translate:[M*Y/d,O*V/w,0],scale:1,width:M/d,height:O/w,zIndex:Math.ceil(100-q(Y,d)*100)},af={opacity:0,translate:[(P*Y-M*l/2.115)*U.l,(K*V-O*l/2.115)*U.t,0],scale:l*U.m,width:M/d,height:O/w,zIndex:Math.ceil(100-q(Y,d)*100)};n(this).find("img").css({transform:"translate3d("+(-M*Y/d+F.marginLeft)+"px,"+(-O*V/w+F.marginTop)+"px,0px)",width:F.width,height:F.height})}else{var ac={opacity:1,left:M*Y/d,top:O*V/w,width:M/d,height:O/w,zIndex:Math.ceil(100-q(Y,d)*100)},af={opacity:0,left:(P*Y-M*l/2)*U.l,top:(K*V-O*l/2)*U.t,width:P*U.m,height:K*U.m},ae={left:-(M*Y/d)+F.marginLeft,top:-(O*V/w)+F.marginTop,width:F.width,height:F.height},ad={left:-l*(M/d*Y-F.marginLeft)*U.m,top:-l*(O/w*V-F.marginTop)*U.m,width:l*F.width*U.m,height:l*F.height*U.m}}if(!I){var W=ac;ac=af;af=W;W=ae;ae=ad;ad=W}R.push({item:n(this),begin:ac,end:af,easing:H,delay:Z,duration:L,callback:I?function(){this.item.hide()}:0});if(ae){R.push({item:n(this).find("img"),begin:ae,end:ad,easing:H,delay:Z,duration:L})}});if(I){n(E).each(function(Y){var V=Y%d;var U=Math.floor(Y/d);var W=a*0.2+a*0.15*(q(V,d)*35+U*4)/(d*w);var X=a*4/(d*w);if(k.support.transform){var Z={translate:[M/2,O/2,0],scale:0,width:M/d,height:O/w,zIndex:Math.ceil(100-q(V,d)*100)},ab={translate:[M*V/d,O*U/w,0],scale:1,width:M/d,height:O/w,zIndex:Math.ceil(100-q(V,d)*100)};n(this).find("img").css({transform:"translate3d("+(-M*V/d+F.marginLeft)+"px,"+(-O*U/w+F.marginTop)+"px,0px)",width:F.width,height:F.height})}else{var Z={left:M/2,top:O/2,width:0,height:0,zIndex:Math.ceil(100-q(V,d)*100)},ab={left:M*V/d,top:O*U/w,width:M/d,height:O/w},ac={left:0,top:0,width:0,height:0},aa={left:-M*V/d+F.marginLeft,top:-O*U/w+F.marginTop,width:F.width,height:F.height}}R.push({item:n(this),begin:Z,end:ab,easing:"easeOutBack",delay:W,duration:X});if(ac){R.push({item:n(this).find("img"),begin:ac,end:aa,easing:"easeOutBack",delay:W,duration:X})}});y.delay(a*0.1).animate({opacity:1},a*0.2,"easeInCirc")}i(R,S);return{stop:function(){S()}}}var h;this.go=function(N,H,M){if(h){return H}if(M==undefined){M=(H==0&&N!=H+1)||(N==H-1)?false:true}f.t=n(window).scrollTop();f.l=n(window).scrollLeft();f.w=n(window).width();f.h=n(window).height();var E=Math.max((k.width||e.width())/(k.height||e.height())||3,3);d=d||Math.round(E<1?3:3*E);w=w||Math.round(E<1?3/E:3);var F=n(x.get(H));F={width:F.width(),height:F.height(),marginTop:parseFloat(F.css("marginTop")),marginLeft:parseFloat(F.css("marginLeft"))};e.css({position:"absolute",width:m.width(),height:m.height(),left:0,top:0,zIndex:8,transform:"translate3d(0,0,0)"});y.css({position:"absolute",width:m.width(),height:m.height(),top:0,left:0,zIndex:2,transform:"translate3d(0,0,0)"});for(var K=0;K<d*w;K++){var J=K%d;var I=Math.floor(K/d);n(D[K]=document.createElement("div")).css({position:"absolute",overflow:"hidden",transform:"translate3d(0,0,0)"}).appendTo(e).append(n("<img>").css({position:"absolute",transform:"translate3d(0,0,0)"}).attr("src",x.get(M?H:N).src));if(M){n(v[K]=document.createElement("div")).css({position:"absolute",overflow:"hidden",transform:"translate3d(0,0,0)"}).appendTo(y).append(n("<img>").css({position:"absolute",transform:"translate3d(0,0,0)"}).attr("src",x.get(N).src))}}D=n(D);if(M){v=n(v)}var G=0;if(M){y.css("opacity",0);if(r){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(L){r=0}j='<canvas width="'+u.width+'" height="'+u.height+'"/>';j=n(j).css({"z-index":1,position:"absolute",left:0,top:0}).css(F).appendTo(c);G=B(n(x.get(H)),F,o,j.get(0))}if(!r||!G){r=0;G=B(n(x.get(H)),F,8);if(j){j.remove();j=0}}}else{y.append(n("<img>").css({position:"absolute",top:0,left:0}).css(F).attr("src",x.get(H).src))}h=new s(D,v,F,M,function(){t.trigger("effectEnd");e.empty().removeAttr("style");y.empty().removeAttr("style");if(j){j.remove()}else{if(G){G.remove()}}h=0})};function B(K,F,J,G){var N=(parseInt(K.parent().css("z-index"))||0)+1;if(r){var Q=G.getContext("2d");Q.drawImage(K.get(0),0,0,F.width,F.height);if(!b(Q,0,0,G.width,G.height,J)){return 0}return n(G)}var R=n("<div></div>").css({position:"absolute","z-index":N,left:0,top:0,overflow:"hidden"}).css(F).appendTo(c);var P=(Math.sqrt(5)+1)/2;var H=1-P/2;for(var I=0;H*I<J;I++){var L=Math.PI*P*I;var E=(H*I+1);var O=E*Math.cos(L);var M=E*Math.sin(L);n(document.createElement("img")).attr("src",K.attr("src")).css({opacity:1/(I/1.8+1),position:"absolute","z-index":N,left:Math.round(O)+"px",top:Math.round(M)+"px",width:"100%",height:"100%"}).appendTo(R)}return R}var p=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var z=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function b(au,ab,Z,E,F,ak){if(isNaN(ak)||ak<1){return}ak|=0;var ao;try{ao=au.getImageData(ab,Z,E,F)}catch(at){console.log("error:unable to access image data: "+at);return false}var J=ao.data;var ai,ah,aq,an,Q,T,N,H,I,Y,O,aa,W,ae,aj,R,M,S,U,ad;var ar=ak+ak+1;var af=E<<2;var P=E-1;var am=F-1;var L=ak+1;var al=L*(L+1)/2;var ac=new g();var X=ac;for(aq=1;aq<ar;aq++){X=X.next=new g();if(aq==L){var K=X}}X.next=ac;var ap=null;var ag=null;N=T=0;var V=p[ak];var G=z[ak];for(ah=0;ah<F;ah++){ae=aj=R=H=I=Y=0;O=L*(M=J[T]);aa=L*(S=J[T+1]);W=L*(U=J[T+2]);H+=al*M;I+=al*S;Y+=al*U;X=ac;for(aq=0;aq<L;aq++){X.r=M;X.g=S;X.b=U;X=X.next}for(aq=1;aq<L;aq++){an=T+((P<aq?P:aq)<<2);H+=(X.r=(M=J[an]))*(ad=L-aq);I+=(X.g=(S=J[an+1]))*ad;Y+=(X.b=(U=J[an+2]))*ad;ae+=M;aj+=S;R+=U;X=X.next}ap=ac;ag=K;for(ai=0;ai<E;ai++){J[T]=(H*V)>>G;J[T+1]=(I*V)>>G;J[T+2]=(Y*V)>>G;H-=O;I-=aa;Y-=W;O-=ap.r;aa-=ap.g;W-=ap.b;an=(N+((an=ai+ak+1)<P?an:P))<<2;ae+=(ap.r=J[an]);aj+=(ap.g=J[an+1]);R+=(ap.b=J[an+2]);H+=ae;I+=aj;Y+=R;ap=ap.next;O+=(M=ag.r);aa+=(S=ag.g);W+=(U=ag.b);ae-=M;aj-=S;R-=U;ag=ag.next;T+=4}N+=E}for(ai=0;ai<E;ai++){aj=R=ae=I=Y=H=0;T=ai<<2;O=L*(M=J[T]);aa=L*(S=J[T+1]);W=L*(U=J[T+2]);H+=al*M;I+=al*S;Y+=al*U;X=ac;for(aq=0;aq<L;aq++){X.r=M;X.g=S;X.b=U;X=X.next}Q=E;for(aq=1;aq<=ak;aq++){T=(Q+ai)<<2;H+=(X.r=(M=J[T]))*(ad=L-aq);I+=(X.g=(S=J[T+1]))*ad;Y+=(X.b=(U=J[T+2]))*ad;ae+=M;aj+=S;R+=U;X=X.next;if(aq<am){Q+=E}}T=ai;ap=ac;ag=K;for(ah=0;ah<F;ah++){an=T<<2;J[an]=(H*V)>>G;J[an+1]=(I*V)>>G;J[an+2]=(Y*V)>>G;H-=O;I-=aa;Y-=W;O-=ap.r;aa-=ap.g;W-=ap.b;an=(ai+(((an=ah+L)<am?an:am)*E))<<2;H+=(ae+=(ap.r=J[an]));I+=(aj+=(ap.g=J[an+1]));Y+=(R+=(ap.b=J[an+2]));ap=ap.next;O+=(M=ag.r);aa+=(S=ag.g);W+=(U=ag.b);ae-=M;aj-=S;R-=U;ag=ag.next;T+=E}}au.putImageData(ao,ab,Z);return true}function g(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blast(p,i,l){var e=jQuery;var h=e(this);var a=p.distance||1;l=l.parent();var f=e("<div>").addClass("ws_effect ws_blast");var c=e("<div>").addClass("ws_zoom").appendTo(f);var j=e("<div>").addClass("ws_parts").appendTo(f);l.css({overflow:"visible"}).append(f);f.css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":8});var d=p.cols;var o=p.rows;var k=[];var b=[];function g(t,q,r,s){if(p.support.transform&&p.support.transition){if(typeof q.left==="number"||typeof q.top==="number"){q.transform="translate3d("+(typeof q.left==="number"?q.left:0)+"px,"+(typeof q.top==="number"?q.top:0)+"px,0)"}delete q.left;delete q.top;if(r){q.transition="all "+r+"ms ease-in-out"}else{q.transition=""}t.css(q);if(s){t.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){s();t.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd")})}}else{delete q.transfrom;delete q.transition;if(r){t.animate(q,{queue:false,duration:p.duration,complete:s?s:0})}else{t.stop(1).css(q)}}}function m(q){var v=Math.max((p.width||f.width())/(p.height||f.height())||3,3);d=d||Math.round(v<1?3:3*v);o=o||Math.round(v<1?3/v:3);for(var t=0;t<d*o;t++){var u=t%d;var s=Math.floor(t/d);e([b[t]=document.createElement("div"),k[t]=document.createElement("div")]).css({position:"absolute",overflow:"hidden"}).appendTo(j).append(e("<img>").css({position:"absolute"}))}k=e(k);b=e(b);n(k,q);n(b,q,true);var r={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"};c.css(r).append(e("<img>").css(r))}function n(s,t,r,q,v,y){var u=f.width();var w=f.height();var x={left:e(window).scrollLeft(),top:e(window).scrollTop(),width:e(window).width(),height:e(window).height()};e(s).each(function(E){var D=E%d;var B=Math.floor(E/d);if(r){var H=a*u*(2*Math.random()-1)+u/2;var F=a*w*(2*Math.random()-1)+w/2;var G=f.offset();G.left+=H;G.top+=F;if(G.left<x.left){H-=G.left+x.left}if(G.top<x.top){F-=G.top+x.top}var C=(x.left+x.width)-G.left-u/d;if(0>C){H+=C}var A=(x.top+x.height)-G.top-w/o;if(0>A){F+=A}}else{var H=u*D/d;var F=w*B/o}e(this).find("img").css({left:-(u*D/d)+t.marginLeft,top:-(w*B/o)+t.marginTop,width:t.width,height:t.height});var z={left:H,top:F,width:u/d,height:w/o};if(v){e.extend(z,v)}if(q){g(e(this),z,p.duration,(E===0&&y)?y:0)}else{g(e(this),z)}})}this.go=function(r,u){var v=e(i[u]),q={width:v.width(),height:v.height(),marginTop:parseFloat(v.css("marginTop")),marginLeft:parseFloat(v.css("marginLeft"))};if(!k.length){m(q)}k.find("img").attr("src",i.get(u).src);g(k,{opacity:1,zIndex:3});b.find("img").attr("src",i.get(r).src);g(b,{opacity:0,zIndex:2});c.find("img").attr("src",i.get(u).src);g(c.find("img"),{transform:"scale(1)"});f.show();var t=l.find(".ws_list");if(p.fadeOut){t.fadeOut(p.duration)}n(b,q,false,true,{opacity:1});n(k,q,true,true,{opacity:0},function(){h.trigger("effectEnd");f.hide()});g(c.find("img"),{transform:"scale(2)"},p.duration,0);var s=b;b=k;k=s}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"bubbles,dribbles,seven,blast",prev:"",next:"",duration:20*100,delay:33*200,width:1000,height:350,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:false,loop:false,bullets:true,caption:true,captionEffect:"parallax",controls:true,responsive:1,fullScreen:false,onBeforeStep:0,images:[{src:"https://2.bp.blogspot.com/-cawxOd0mvdg/WqftQ6jdLGI/AAAAAAAAICo/1w--hZd5ThsMxdwPnnnSj_YLzolgZKvdgCK4BGAYYCw/s1600/slide1.jpg",title:"Campsite Area",descr:"Proud, fun and make a memories for an unforgettable experience on your journey"},{src:"https://3.bp.blogspot.com/-CrP9eoSG2Zs/WqftRO2RwyI/AAAAAAAAIC8/lDkZJlJAqZMhqXI-KRyXKXxrTEb2M_kDgCK4BGAYYCw/s1600/slide2.jpg",title:"Rinjani Summit",descr:"Shoot your best pictures and make your proudness after struggling more than 4h to reach the summit and catch the sunrise"},{src:"https://3.bp.blogspot.com/-jf61Inr9Ht4/WqftRS5g3GI/AAAAAAAAIDY/Lg2iNZtgEDsww_IBqAuglRQmpJ2i69bfQCK4BGAYYCw/s1600/slide3.jpg",title:"Family Trek",descr:"Rinjani is suitable for anyone who love nature and adventure"},{src:"https://2.bp.blogspot.com/-yNk60nSc7pc/WqftRBDQ70I/AAAAAAAAIDM/JVBEClToMp8T38nlleR7AYisrZAlhvy5QCK4BGAYYCw/s1600/slide4.jpg",title:"Sembalun Ascent Route",descr:"Popular route to begin the trek and the shortest way to reach the top"},{src:"https://4.bp.blogspot.com/-v2PKQ46o3YY/WqftRYy9fQI/AAAAAAAAIDU/m8HVv7N63SEnMAeseZm7ynoIjfU3LWMtwCK4BGAYYCw/s1600/slide5.jpg",title:"Friendly Crew",descr:"Our crew will encouraging and will always with you"},{src:"https://2.bp.blogspot.com/-xq8fIvows_8/WqftRNnwoPI/AAAAAAAAIDQ/ohm65dnOgyAuLzx1iAyn1OHzewHFbsbCQCK4BGAYYCw/s1600/slide6.jpg",title:"Appreciation When You Get To The Top",descr:"Our packages are included with a certificate if you reach the top"},{src:"https://4.bp.blogspot.com/-I2lT5IrAk8k/WqftRK3yMRI/AAAAAAAAIDI/husiXJmDuccwJfohQOoq2EFQb7deEUC4ACK4BGAYYCw/s1600/slide7.jpg",title:"Rinjani - Senaru Crater Rim",descr:"Not only at the Summit, the views of Rinjani is also magnificent when you stand at Senaru crater which also called as the second summit of Rinjani"}]});
