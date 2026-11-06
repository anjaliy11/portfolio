/* js/fx.js
   Interactive layer for the whole page. Self-contained: injects its own CSS.
   1. Project rows get a cursor-following spotlight.
   2. Sections reveal as you scroll.
   3. Click a skill to see which projects use it.
   4. Counters count up, buttons lean toward the cursor, the hero leaves a code trail. */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  var st = document.createElement('style');
  st.textContent = [
    '.row{position:relative;transition:background .2s,color .2s,opacity .3s}',
    '.row::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .25s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(143,209,164,.2),transparent 65%)}',
    '.row:hover::before{opacity:1}',
    '.row.dim{opacity:.28}.row.hit{box-shadow:inset 6px 0 0 var(--seal)}',
    '.js .rv{opacity:0;transform:translateY(26px);transition:opacity .6s ease-out,transform .6s ease-out;transition-delay:var(--rd,0s)}',
    '.js .rv.in{opacity:1;transform:none}',
    '.skills li{cursor:pointer;user-select:none}',
    '.skills li.on{background:var(--ink);color:var(--mist);border-color:var(--ink)}',
    '.sknote{margin:1.6rem 0 0;font-weight:500;min-height:1.6em}',
    '.sknote button{font:inherit;font-weight:700;background:none;border:0;padding:0;margin-left:.6rem;color:var(--seal);text-decoration:underline;text-underline-offset:4px;cursor:pointer}',
    '.btn{transition:transform .15s,background .15s,color .15s}',
    '.tr{position:fixed;pointer-events:none;font:600 .8rem ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--jade);z-index:30}',
    '@media (prefers-reduced-motion:reduce){.js .rv{opacity:1;transform:none;transition:none}}'
  ].join('\n');
  document.head.appendChild(st);

  var rows = [].slice.call(document.querySelectorAll('#work .row'));

  /* 1. spotlight */
  rows.forEach(function (r) {
    r.addEventListener('pointermove', function (e) {
      var b = r.getBoundingClientRect();
      r.style.setProperty('--mx', (e.clientX - b.left) + 'px');
      r.style.setProperty('--my', (e.clientY - b.top) + 'px');
    });
  });

  /* 2. scroll reveal */
  if (!reduce && 'IntersectionObserver' in window) {
    var els = [].slice.call(document.querySelectorAll('#work .row,.skills .grid>div,.ach li,.earlier li,.oss .grid>div'));
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (x) {
        if (!x.isIntersecting) return;
        var e = x.target;
        e.classList.add('in');
        ro.unobserve(e);
        setTimeout(function () { e.classList.remove('rv', 'in'); e.style.removeProperty('--rd'); }, 1100);
      });
    }, { threshold: .15 });
    els.forEach(function (e, i) {
      e.classList.add('rv');
      e.style.setProperty('--rd', (i % 4 * .08) + 's');
      ro.observe(e);
    });
  }

  /* 3. skill filter */
  var grid = document.querySelector('.skills .grid');
  if (grid) {
    var chips = [].slice.call(document.querySelectorAll('.skills li')),
        note = document.createElement('p'),
        hint = 'Click a skill to see where I used it.';
    note.className = 'sknote';
    note.setAttribute('aria-live', 'polite');
    note.textContent = hint;
    grid.after(note);
    var esc = function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
    var haystack = function (r) {
      var t = r.querySelector('.tags');
      return (t ? t.textContent + ' ' : '') + [].map.call(r.querySelectorAll('p'), function (p) { return p.textContent; }).join(' ');
    };
    var btn = function (label, fn) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = label; b.addEventListener('click', fn);
      return b;
    };
    var pick = function (c) {
      var was = c.classList.contains('on');
      chips.forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); });
      rows.forEach(function (r) { r.classList.remove('hit', 'dim'); });
      note.textContent = hint;
      if (was) return;
      c.classList.add('on'); c.setAttribute('aria-pressed', 'true');
      var k = c.textContent.replace(/\s*\(.*\)/, ''),
          re = new RegExp('(^|[^a-z0-9])' + esc(k) + '($|[^a-z0-9])', 'i'),
          m = rows.filter(function (r) { return re.test(haystack(r)); });
      rows.forEach(function (r) { r.classList.add(m.indexOf(r) > -1 ? 'hit' : 'dim'); });
      note.textContent = m.length
        ? c.textContent + ' is used in ' + m.length + (m.length > 1 ? ' projects: ' : ' project: ') + m.map(function (r) { return r.querySelector('h3').textContent; }).join(', ') + '.'
        : c.textContent + ' is on my resume but not in the featured projects.';
      if (m.length) note.appendChild(btn('Show them', function () { document.getElementById('work').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }));
      note.appendChild(btn('Clear', function () { pick(c); }));
    };
    chips.forEach(function (c) {
      c.tabIndex = 0; c.setAttribute('role', 'button'); c.setAttribute('aria-pressed', 'false');
      c.addEventListener('click', function () { pick(c); });
      c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(c); } });
    });
  }

  /* 4a. count-up */
  if (!reduce) [].forEach.call(document.querySelectorAll('.stats b'), function (b) {
    var n = parseInt(b.textContent, 10);
    if (String(n) !== b.textContent.trim()) return;
    var io = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      var t0 = performance.now();
      (function f(t) {
        var p = Math.min(1, (t - t0) / 900);
        b.textContent = Math.round(n * p);
        if (p < 1) requestAnimationFrame(f);
      })(t0);
    }, { threshold: .6 });
    io.observe(b);
  });

  /* 4b. magnetic buttons */
  if (!reduce) [].forEach.call(document.querySelectorAll('.btn'), function (b) {
    b.addEventListener('pointermove', function (e) {
      var r = b.getBoundingClientRect();
      b.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * .18 + 'px,' + (e.clientY - r.top - r.height / 2) * .3 + 'px)';
    });
    b.addEventListener('pointerleave', function () { b.style.transform = ''; });
  });

  /* 4c. hero code trail */
  var hero = document.querySelector('.hero'), last = 0, gl = ['0', '1', '{', '}', '=>', '//', '</>'];
  if (hero && !reduce && matchMedia('(hover:hover)').matches) hero.addEventListener('pointermove', function (e) {
    var n = performance.now();
    if (n - last < 90) return;
    last = n;
    var s = document.createElement('span');
    s.className = 'tr';
    s.textContent = gl[Math.floor(Math.random() * gl.length)];
    s.style.left = e.clientX + 'px';
    s.style.top = e.clientY + 'px';
    document.body.appendChild(s);
    s.animate([{ transform: 'translate(0,0)', opacity: .9 }, { transform: 'translate(' + (Math.random() * 40 - 20) + 'px,' + (20 + Math.random() * 30) + 'px)', opacity: 0 }], { duration: 800, easing: 'ease-out' })
      .onfinish = function () { s.remove(); };
  });
})();