/* js/gate-demo.js
   Adds a "Try the gate" button to the MatchLab project row. Hovering it (or
   tapping it) pops up a card where visitors run a simplified version of the
   gate on their own text. Self-contained: injects its own CSS. */
(function () {
  var rows = [].slice.call(document.querySelectorAll('#work .row'));
  var row = rows.filter(function (r) { return r.querySelector('h3').textContent.trim() === 'MatchLab'; })[0];
  if (!row) return;

  var st = document.createElement('style');
  st.textContent = [
    '.row{position:relative}',
    '.try{font:600 .95rem Figtree,sans-serif;padding:.4rem 1rem;border-radius:999px;border:2px solid currentColor;background:none;color:inherit;cursor:pointer}',
    '.try:hover,.try[aria-expanded=true]{background:var(--seal);border-color:var(--seal);color:#fff}',
    '.gcard{position:absolute;right:1rem;top:1rem;width:min(30rem,calc(100% - 2rem));z-index:6;background:var(--mist);color:var(--ink);border:2px solid var(--jade);border-radius:1rem;padding:.9rem 1.1rem 1.1rem;box-shadow:10px 10px 0 var(--seal);transform-origin:90% 0;animation:gpop .32s cubic-bezier(.2,1.5,.4,1)}',
    '.gcard[hidden]{display:none}',
    '@keyframes gpop{from{opacity:0;transform:scale(.88) rotate(-2deg)}}',
    '.gh{display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem;font:700 .85rem ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}',
    '.gh button{font:700 1.3rem/1 Figtree,sans-serif;background:none;border:0;color:inherit;cursor:pointer;padding:.1rem .4rem}',
    '.gcard textarea{width:100%;font:500 .92rem/1.5 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;padding:.7rem;border:2px solid var(--ink);border-radius:.6rem;background:#fff;color:var(--ink);resize:vertical}',
    '.gb{display:flex;flex-wrap:wrap;gap:.4rem;margin:.6rem 0}',
    '.gb button{font:600 .82rem Figtree,sans-serif;padding:.3rem .75rem;border-radius:999px;border:2px solid var(--ink);background:none;color:var(--ink);cursor:pointer}',
    '.gb button:hover{background:var(--ink);color:var(--mist)}',
    '.go{list-style:none;margin:0;padding:0;display:grid;gap:.4rem}',
    '.go li{display:flex;gap:.6rem;align-items:baseline;padding:.45rem .65rem;border-radius:.5rem;background:#fff;border-left:5px solid var(--moss);font-size:.92rem;animation:gin .25s ease-out}',
    '.go li.b{border-left-color:var(--seal)}',
    '.go code{flex:none;font:700 .72rem ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;padding:.1rem .45rem;border-radius:.3rem;background:var(--moss);color:var(--jade)}',
    '.go li.b code{background:var(--seal);color:#fff}',
    '.gs{margin-top:.7rem;font:500 .8rem ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--muted)}',
    '@keyframes gin{from{opacity:0;transform:translateX(-8px)}}',
    '@media (max-width:820px){.gcard{position:relative;right:auto;top:auto;width:100%;grid-column:1/-1;box-shadow:6px 6px 0 var(--seal)}}',
    '@media (prefers-reduced-motion:reduce){.gcard,.go li{animation:none}}'
  ].join('\n');
  document.head.appendChild(st);

  var presets = [
    ['Contact leak', 'Great news, Priya is a match! Her number is 98765 43210. You can email her at priya.s@example.com. She loves trekking and jazz.'],
    ['Devanagari digits', 'Aap unse baat kar sakte hain. Unka number ९८७६५४३२१० hai. Woh Bangalore mein rehti hain.'],
    ['Social handles', 'He is a product designer. Find him at linkedin.com/in/rahul-k or DM @rahul_k. He enjoys chess.']
  ];

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'try';
  btn.textContent = 'Try the gate';
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'gcard');
  row.querySelector('.links').appendChild(btn);

  var card = document.createElement('div');
  card.className = 'gcard';
  card.id = 'gcard';
  card.hidden = true;
  card.setAttribute('role', 'dialog');
  card.setAttribute('aria-label', 'Try the MatchLab gate');
  card.innerHTML =
    '<div class="gh"><span>gate.check(sentence)</span><button type="button" aria-label="Close">&times;</button></div>' +
    '<textarea rows="3" spellcheck="false" aria-label="What the agent wants to say"></textarea>' +
    '<div class="gb"></div><ol class="go" aria-live="polite"></ol><div class="gs"></div>' +
    '<div class="gs">Simplified demo. The real gate covers more cases and documents its misses.</div>';
  row.appendChild(card);

  var inp = card.querySelector('textarea'), out = card.querySelector('.go'),
      stat = card.querySelector('.gs'), bar = card.querySelector('.gb');

  var rules = [
    ['PII_EMAIL', /[\w.+-]+@[\w-]+\.[\w.]+/],
    ['PII_PHONE', /(?:\+?\d[\s-]?){9,}/],
    ['CONTACT_HANDLE', /(?:linkedin\.com|instagram\.com|@\w{3,})/i]
  ];
  function norm(s) {
    return s.replace(/[\u0966-\u096F]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0x0966 + 48); });
  }
  function check(s) {
    var n = norm(s);
    for (var i = 0; i < rules.length; i++) if (rules[i][1].test(n)) return rules[i][0];
    return null;
  }
  function run() {
    var t0 = performance.now(), parts = inp.value.split(/(?<=[.!?।])\s+/), blocked = 0, count = 0;
    out.innerHTML = '';
    parts.forEach(function (p) {
      p = p.trim();
      if (!p) return;
      count++;
      var r = check(p), li = document.createElement('li'), c = document.createElement('code'), s = document.createElement('span');
      c.textContent = r || 'PASS';
      s.textContent = r ? '[sentence withheld]' : p;
      if (r) { li.className = 'b'; blocked++; }
      li.append(c, s);
      out.appendChild(li);
    });
    stat.textContent = count + ' sentences, ' + blocked + ' withheld, ' + (performance.now() - t0).toFixed(2) + ' ms';
  }
  presets.forEach(function (p) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = p[0];
    b.addEventListener('click', function () { inp.value = p[1]; run(); });
    bar.appendChild(b);
  });
  inp.addEventListener('input', run);
  inp.value = presets[0][1];
  run();

  var open = false, pinned = false, timer;
  function show(pin) {
    clearTimeout(timer);
    if (pin) pinned = true;
    card.hidden = false; open = true;
    btn.setAttribute('aria-expanded', 'true');
  }
  function hide() {
    card.hidden = true; open = false; pinned = false;
    btn.setAttribute('aria-expanded', 'false');
  }
  btn.addEventListener('mouseenter', function () { if (!open) show(false); });
  btn.addEventListener('click', function () { if (open && pinned) hide(); else show(true); });
  card.querySelector('.gh button').addEventListener('click', function () { hide(); btn.focus(); });
  card.addEventListener('focusin', function () { pinned = true; });
  row.addEventListener('mouseenter', function () { clearTimeout(timer); });
  row.addEventListener('mouseleave', function () { timer = setTimeout(function () { if (!pinned) hide(); }, 350); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && open) { hide(); btn.focus(); } });
  document.addEventListener('click', function (e) { if (open && !row.contains(e.target)) hide(); });
})();