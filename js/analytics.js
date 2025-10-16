
(function(){
  function track(evt, params){ if(window.gtag){ window.gtag('event', evt, params||{}); } }
  // Language change
  const sel=document.getElementById('lang');
  if(sel){ sel.addEventListener('change', ()=>track('select_content', {content_type:'language', item_id: sel.value})); }
  // Contact links
  document.addEventListener('click', (e)=>{
    const a=e.target.closest('a[data-gtag]'); if(!a) return;
    track('select_content', {content_type: a.dataset.gtag, item_id: a.getAttribute('href')});
  });
  // Lead form
  const form=document.querySelector('form.leadform');
  if(form){
    form.addEventListener('submit', ()=>track('generate_lead', {method: 'mailto'}));
  }
})();
