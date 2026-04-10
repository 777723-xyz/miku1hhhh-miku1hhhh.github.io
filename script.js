(function(){
var v=document.createElement('video');
v.src='https://vdse.bdstatic.com//c1529929867133d65018700148444bde.mp4';
v.loop=true;v.muted=true;v.autoplay=true;v.playsInline=true;
v.style='position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:99999;background:#000';
document.body.appendChild(v);
var u=function(){
v.muted=false;v.play();
(v.requestFullscreen||v.webkitRequestFullscreen).call(v);
document.removeEventListener('click',u);
v.onclick=null;
};
document.addEventListener('click',u);
v.onclick=u;
})();
