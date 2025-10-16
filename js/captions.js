
document.addEventListener('DOMContentLoaded',()=>{document.body.classList.add('captions-hover');});
const CAPTIONS={
1:{hr:"Ravne stepenice – funkcionalan i čist dizajn.",en:"Straight stairs — functional with clean design.",uk:"Прямі сходи — функціональні та лаконічні."},
2:{hr:"Kutne (90°) — praktične za manji prostor i složene tlocrte.",en:"Corner (90°) — practical for compact or complex layouts.",uk:"Кутові (90°) — практичні для обмеженого простору."},
3:{hr:"Spiralne — štede prostor i daju interijeru poseban šarm.",en:"Spiral — space-saving with a refined look.",uk:"Гвинтові — економлять простір і додають вишуканості."},
4:{hr:"Prirodnost: drvo je ekološki siguran, prirodan materijal.",en:"Eco: wood is natural and health-safe.",uk:"Екологічність: дерево — природний та безпечний матеріал."},
5:{hr:"Čvrstoća: uz pravilan rad i njegu traje godinama.",en:"Strength: with care, wooden stairs last for years.",uk:"Міцність: за належного догляду служать роками."},
6:{hr:"Lagana konstrukcija: manje opterećenje na zidove i kostur kuće.",en:"Lightweight: less load on walls and structure.",uk:"Легкість: менше навантаження на конструкції будівлі."},
7:{hr:"Toplina: ugodno hodati bosonog — drvo zadržava toplinu.",en:"Warmth: pleasant barefoot — wood keeps warmth.",uk:"Тепло: по дереву приємно ходити босоніж."},
8:{hr:"Dizajn: drvo daje toplinu i prirodnost unikatne teksture.",en:"Design: wood adds warmth and natural beauty.",uk:"Дизайн: дерево додає тепла і природності."},
9:{hr:"Staklene ograde — elegancija, modernost i više svjetla.",en:"Glass railings — elegance, modern look and more light.",uk:"Скляні поручні — елегантність і більше світла."},
10:{hr:"Staklo (kaljeno/triplex): otporno i dugotrajno za veća opterećenja.",en:"Tempered/laminated glass: durable for heavy loads.",uk:"Загартоване/триплекс скло: міцне і довговічне."},
11:{hr:"Prostranost: transparentne plohe ne zagušuju prostor.",en:"Openness: transparent planes keep space airy.",uk:"Простір: прозорі площини не перевантажують інтер’єр."},
12:{hr:"Moguća LED rasvjeta za efektan izgled (po želji).",en:"Optional LED lighting for a striking effect.",uk:"Можлива LED-підсвітка для ефектного вигляду."}
};
function getCurrentLang(){const p=new URLSearchParams(location.search).get('lang');return p||localStorage.getItem('site_lang')||'hr';}
function updateCaptions(lang=getCurrentLang()){document.querySelectorAll('.gallery .g').forEach(fig=>{const id=fig.getAttribute('data-id');const t=(CAPTIONS[id]&&(CAPTIONS[id][lang]||CAPTIONS[id].hr))||'';const img=fig.querySelector('img');if(img) img.alt=t;const fc=fig.querySelector('figcaption');if(fc) fc.textContent=t;const oc=fig.querySelector('.overlay-cap');if(oc) oc.textContent=t;});}
document.addEventListener('DOMContentLoaded',()=>{updateCaptions();const sel=document.getElementById('lang');if(sel) sel.addEventListener('change',()=>updateCaptions(sel.value));window.addEventListener('popstate',()=>updateCaptions());});
