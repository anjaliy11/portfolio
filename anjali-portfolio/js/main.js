(function(){
 var svg=document.getElementById('tt'),st=document.getElementById('st'),hd=document.getElementById('hd'),
 pl=document.getElementById('pl'),rp=document.getElementById('rp'),bub=document.getElementById('bub'),
 scene=document.getElementById('scene'),
 reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,
 quips=["100% down to 14%. Measured, not hoped.","An agent that stops is wiser than one that guesses.","Evaluate first. Then ship.","Ask Anjali how the gate catches a leak."],
 mx=innerWidth*.5,my=innerHeight*.5,cur=0,tapStart=-1,fired=true,qi=0;
 function clamp(v,a,b){return Math.max(a,Math.min(b,v))}
 function say(t){bub.textContent=t;bub.classList.remove('pop');void bub.offsetWidth;bub.classList.add('pop')}
 function ripple(){if(rp.animate)rp.animate([{transform:'scale(.3)',opacity:.9},{transform:'scale(2.6)',opacity:0}],{duration:900,easing:'ease-out'})}
 function tap(msg){if(msg)say(msg);if(reduce){ripple();return}tapStart=performance.now();fired=false}
 function lift(t){
  if(t<.55)return -30*Math.sin(t/.55*Math.PI/2);
  if(t<.7)return -30+32*((t-.55)/.15);
  return 2*(1-(t-.7)/.3);
 }
 addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY});
 scene.addEventListener('click',function(){tap(quips[qi++%quips.length])});
 function frame(now){
  var o=0;
  if(tapStart>=0){var t=(now-tapStart)/800;if(t>=1){tapStart=-1}else{o=lift(t);if(!fired&&t>=.7){fired=true;ripple()}}}
  var r=svg.getBoundingClientRect(),
  nx=clamp((mx-(r.left+r.width*.4))/(innerWidth*.5),-1,1),
  ny=clamp((my-(r.top+r.height*.4))/(innerHeight*.5),-1,1);
  cur+=(nx*5-cur)*.08;
  st.setAttribute('transform','rotate('+(cur+o).toFixed(2)+' 170 330)');
  pl.setAttribute('transform','translate('+(nx*3).toFixed(2)+' '+(ny*2).toFixed(2)+')');
  hd.setAttribute('transform','translate('+(nx*2).toFixed(2)+' '+(Math.sin(now/900)*2).toFixed(2)+')');
  requestAnimationFrame(frame);
 }
 if(!reduce)requestAnimationFrame(frame);
 setTimeout(function(){tap()},700);
})();


(function(){
 var $=function(i){return document.getElementById(i)},
 tips=["Write the eval before the prompt.","A guardrail without a test set is a hope.","Look at 50 failures by hand before tuning anything.","Chunk size is a hyperparameter. Sweep it.","Track cost per good outcome, not cost per token.","Hybrid retrieval beats pure vectors until your eval says otherwise.","Make agent steps resumable. Production crashes are routine.","No evidence quote, no answer.","Put a human gate where a wrong action is expensive.","Pin model versions. Silent upgrades break reproducibility."],
 sec={work:"Every project here has a number next to it. Measure before you claim.","open-source":"Reproduce the bug first. Then write the failing test.",certs:"Certificates open the door. Shipped, measured work keeps it open.",skills:"List the tools you can debug, not every tool you have met.",achievements:"Ship the fix, then write down what it taught you.",about:"Say what you build and how you check it.",contact:"Send the repo link first. Evidence beats adjectives."},
 seen={},last=-1,timer,src=$('tt'),g=src.cloneNode(true),hs={},
 reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 ['st','rp'].forEach(function(k){hs[k]=g.querySelector('#'+k)});
 g.querySelectorAll('[id]').forEach(function(n){n.removeAttribute('id')});
 var df=g.querySelector('defs');if(df)df.remove();
 g.setAttribute('viewBox','130 90 280 380');g.setAttribute('aria-hidden','true');g.removeAttribute('role');g.style.overflow='hidden';
 hs.rp.style.transformBox='fill-box';hs.rp.style.transformOrigin='center';
 $('gt').appendChild(g);
 function smile(el,ms){el.classList.add('smile');setTimeout(function(){el.classList.remove('smile')},ms)}
 function rnd(){var i;do{i=Math.floor(Math.random()*tips.length)}while(i===last);last=i;return tips[i]}
 function gtap(){
  smile(g,3500);if(reduce)return;
  var s=hs.st;s.style.transformOrigin='170px 330px';s.style.transition='transform .3s ease-out';s.style.transform='rotate(-30deg)';
  setTimeout(function(){s.style.transition='transform .08s ease-in';s.style.transform='rotate(2deg)';hs.rp.animate([{transform:'scale(.3)',opacity:.9},{transform:'scale(2.6)',opacity:0}],{duration:900,easing:'ease-out'})},320);
  setTimeout(function(){s.style.transition='transform .3s';s.style.transform='none'},430);
 }
 function advise(t){
  var b=$('gb');gtap();b.textContent=t;b.classList.remove('on');void b.offsetWidth;b.classList.add('on');
  clearTimeout(timer);timer=setTimeout(function(){b.classList.remove('on')},7000);
 }
 $('gt').addEventListener('click',function(){advise(rnd())});
 $('scene').addEventListener('click',function(){var b=$('bub');b.textContent=rnd();b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');smile(src,3500);setTimeout(burst,560)});
 var scene=$('scene'),glyphs=['✓','0.14','pass','200','{}','ok','1'];
 function burst(){if(reduce)return;glyphs.forEach(function(t,i){var s=document.createElement('span'),a=(-160+i*22)*Math.PI/180,d=90+Math.random()*60;s.className='pf';s.textContent=t;s.style.left='33%';s.style.top='88%';scene.appendChild(s);s.animate([{transform:'translate(0,0)',opacity:1},{transform:'translate('+Math.cos(a)*d+'px,'+Math.sin(a)*d+'px)',opacity:0}],{duration:1000,easing:'ease-out'}).onfinish=function(){s.remove()}})}
 setTimeout(function(){smile(src,3500)},700);setTimeout(burst,1260);
 document.documentElement.classList.add('js');
 var revealObserver=new IntersectionObserver(function(entries,observer){
  entries.forEach(function(entry){
   if(!entry.isIntersecting)return;
   entry.target.classList.add('in-view');
   observer.unobserve(entry.target);
  });
 },{threshold:.12,rootMargin:'0px 0px -4% 0px'});
 document.querySelectorAll('#work .row,.oss .grid > div,.earlier li,.skills .grid > div,.ach li,.about .cols > *').forEach(function(el){
  el.classList.add('reveal');
  revealObserver.observe(el);
 });
 [].slice.call(document.querySelectorAll('#term span')).forEach(function(s,i){setTimeout(function(){s.classList.add('on')},reduce?0:600+i*420)});
 var guide=$('guide'),heroVisible=true,contactVisible=false;
 function updateGuide(){guide.classList.toggle('show',!heroVisible&&!contactVisible)}
 new IntersectionObserver(function(e){heroVisible=e[0].isIntersecting;updateGuide()},{threshold:.15}).observe(document.querySelector('.hero'));
 new IntersectionObserver(function(e){contactVisible=e[0].isIntersecting;updateGuide()},{threshold:.15}).observe($('contact'));
 var io=new IntersectionObserver(function(es){es.forEach(function(e){
  if(!e.isIntersecting)return;var id=e.target.id;
  document.querySelectorAll('nav ul a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+id)});
  if(sec[id]&&!seen[id]){seen[id]=1;advise(sec[id])}
 })},{threshold:.4});
 ['work','open-source','skills','achievements','certs','about','contact'].forEach(function(i){io.observe($(i))});
 addEventListener('scroll',function(){var h=document.documentElement;$('prog').style.transform='scaleX('+Math.min(1,scrollY/Math.max(1,h.scrollHeight-innerHeight))+')'},{passive:true});
})();
