
(function(){
  const links=[...document.querySelectorAll('.gallery .lb')];
  if(!links.length) return;
  const lb=document.createElement('div'); lb.id='lightbox';
  lb.innerHTML=`<button class="close" aria-label="Close">×</button>
                <button class="nav prev" aria-label="Previous">‹</button>
                <img alt="Preview"/>
                <button class="nav next" aria-label="Next">›</button>`;
  document.body.appendChild(lb);
  const img=lb.querySelector('img'), btnClose=lb.querySelector('.close'), prev=lb.querySelector('.prev'), next=lb.querySelector('.next');
  let idx=0;
  function capOf(i){
    const fig=document.querySelector(`.gallery .g [data-index="${i}"]`)?.closest('.g');
    const oc=fig?.querySelector('.overlay-cap'); return oc?.textContent?.trim()||'';
  }
  function openAt(i){
    idx=i; const href=links.find(a=>a.dataset.index==i)?.getAttribute('href'); if(!href) return;
    img.src=href; img.alt=capOf(i); lb.classList.add('open');
    if(window.gtag){ window.gtag('event','view_item',{item_id:i, item_name: img.alt || ('image-'+i)}); }
  }
  function close(){ lb.classList.remove('open'); img.src=''; }
  function step(d){ const ids=links.map(a=>+a.dataset.index).sort((a,b)=>a-b); const pos=ids.indexOf(+idx); const n=ids[(pos+d+ids.length)%ids.length]; openAt(n); }
  links.forEach(a=>a.addEventListener('click',e=>{ e.preventDefault(); openAt(a.dataset.index); }));
  btnClose.addEventListener('click', close);
  prev.addEventListener('click', ()=>step(-1));
  next.addEventListener('click', ()=>step(1));
  window.addEventListener('keydown', (e)=>{
    if(!lb.classList.contains('open')) return;
    if(e.key==='Escape') close();
    if(e.key==='ArrowRight') step(1);
    if(e.key==='ArrowLeft') step(-1);
  });
  lb.addEventListener('click', (e)=>{ if(e.target===lb) close(); });
})();
