(function(){
  const h=document.getElementById('hdr'),t=document.getElementById('toTop');
  function s(){const y=window.pageYOffset||document.documentElement.scrollTop;
    if(y>8)h.classList.add('scrolled');else h.classList.remove('scrolled');
    if(y>320)t.classList.add('show');else t.classList.remove('show');}
  window.addEventListener('scroll',s,{passive:true}); s();
  if(t) t.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
})();