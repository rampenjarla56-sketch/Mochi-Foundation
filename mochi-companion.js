(() => {
  const root = document.createElement('aside');
  root.className = 'mochi-companion';
  root.setAttribute('aria-label', 'Mochi virtual companion');
  root.innerHTML = `
    <div class="mochi-wander">
      <div class="mochi-message" role="status">Hello, welcome to Mochi!</div>
      <button class="mochi-pet" type="button" aria-label="Pet Mochi the dog">
        <span class="mochi-hearts" aria-hidden="true">♥</span>
        <svg class="mochi-dog" viewBox="0 0 180 150" fill="none" aria-hidden="true">
          <defs>
            <radialGradient id="mochi-cream" cx=".35" cy=".25" r=".8"><stop stop-color="#fff9e9"/><stop offset=".65" stop-color="#f3dab2"/><stop offset="1" stop-color="#d9ac79"/></radialGradient>
            <linearGradient id="mochi-caramel" x2=".8" y2="1"><stop stop-color="#ebc291"/><stop offset="1" stop-color="#9f623d"/></linearGradient>
            <radialGradient id="mochi-eye"><stop stop-color="#9a623c"/><stop offset=".65" stop-color="#513221"/><stop offset="1" stop-color="#281d18"/></radialGradient>
          </defs>
          <ellipse cx="86" cy="137" rx="59" ry="5" fill="#102a43" opacity=".14"/>
          <g class="mochi-tail"><path d="M48 92C16 98 10 72 20 56L23 67L30 58L29 73L36 70Q34 82 52 77" fill="url(#mochi-cream)" stroke="#926a48" stroke-width="2" stroke-linejoin="round"/><path d="M23 76Q29 89 43 87" stroke="#fff3dc" stroke-width="4" stroke-linecap="round"/></g>
          <g class="mochi-leg mochi-leg-back"><path d="M57 105L53 127Q49 138 67 136Q74 135 75 124L78 103" fill="url(#mochi-caramel)" stroke="#926a48" stroke-width="2"/></g>
          <g class="mochi-leg mochi-leg-front"><path d="M102 104L107 129Q106 138 124 135L122 102" fill="url(#mochi-caramel)" stroke="#926a48" stroke-width="2"/></g>
          <path d="M42 91Q37 70 59 64Q82 55 104 68Q126 78 119 105Q110 121 79 119Q48 117 42 91" fill="url(#mochi-cream)" stroke="#926a48" stroke-width="2"/>
          <path d="M52 91Q48 108 59 118L57 128Q49 139 69 137Q79 137 78 127L81 110M96 107L99 126Q92 138 112 137Q124 137 118 127L118 102" fill="url(#mochi-cream)" stroke="#926a48" stroke-width="2" stroke-linecap="round"/>
          <path d="M61 132L62 135M67 132L68 135M104 132L105 135M110 132L111 135" stroke="#bd946e" stroke-width="1.5" stroke-linecap="round"/>
          <g class="mochi-head">
            <path d="M88 86Q106 100 132 88L130 95Q107 107 87 93Z" fill="#71bfcb" stroke="#689fa6" stroke-width="1.5"/>
            <circle cx="115" cy="100" r="4" fill="#f4c56e" stroke="#b58b43"/>
            <path d="M79 48Q62 47 64 68Q64 91 80 91L92 68" fill="url(#mochi-caramel)" stroke="#926a48" stroke-width="2"/>
            <path d="M79 57Q74 35 92 30L88 25L102 27L106 20L111 27L123 23L124 30Q148 34 150 59Q159 74 148 87Q138 99 113 97Q86 98 80 80Z" fill="url(#mochi-cream)" stroke="#926a48" stroke-width="2" stroke-linejoin="round"/>
            <path d="M87 39Q73 34 71 53Q67 72 76 85Q85 93 92 78Q101 58 92 44" fill="url(#mochi-caramel)" stroke="#926a48" stroke-width="2"/>
            <path d="M138 39Q151 37 154 54Q161 79 149 86Q139 89 138 72" fill="url(#mochi-caramel)" stroke="#926a48" stroke-width="2"/>
            <path d="M79 48Q75 65 79 74M86 45Q81 60 84 68M146 48Q151 63 147 74" stroke="#f2cd9e" stroke-width="2.5" stroke-linecap="round" opacity=".75"/>
            <ellipse cx="104" cy="61" rx="8" ry="10" fill="url(#mochi-eye)"/><ellipse cx="130" cy="60" rx="7.5" ry="9.5" fill="url(#mochi-eye)"/>
            <circle cx="106" cy="57" r="3" fill="#fff"/><circle cx="132" cy="56" r="2.8" fill="#fff"/><circle cx="102" cy="64" r="1.2" fill="#e8ba87"/><circle cx="128" cy="63" r="1.1" fill="#e8ba87"/>
            <path d="M98 46Q102 43 108 45M126 44Q131 41 135 45" stroke="#fff8e8" stroke-width="3" stroke-linecap="round"/>
            <ellipse cx="109" cy="78" rx="13" ry="10" fill="#fff1d8"/><ellipse cx="128" cy="77" rx="13" ry="10" fill="#fff1d8"/>
            <path d="M112 72Q118 68 125 72Q127 76 119 80Q111 77 112 72" fill="#3d2a23"/><ellipse cx="117" cy="73" rx="3" ry="1" fill="#947968"/>
            <path d="M118 81Q113 91 127 86Q126 98 120 96Q115 95 116 88" fill="#dd9794" stroke="#8c5c49" stroke-width="1.3" stroke-linejoin="round"/>
            <path d="M119 80L118 83Q110 88 106 82M118 83Q126 88 132 81" stroke="#77503b" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M97 73L99 76M136 72L134 76M97 90L102 91" stroke="#e6be91" stroke-width="2" stroke-linecap="round"/>
          </g>
        </svg>
      </button>
    </div>
    `;
  const nav = document.querySelector('.site-header');
  if (nav) nav.after(root);
  else document.body.prepend(root);
  const pet = root.querySelector('.mochi-pet');
  const message = root.querySelector('.mochi-message');
  pet.addEventListener('pointerenter', () => { message.textContent = 'Hello, welcome to Mochi!'; });
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let count = 0;
  let timer;
  root.classList.toggle('is-paused', motion.matches);
  motion.addEventListener('change', e => root.classList.toggle('is-paused', e.matches));
  pet.addEventListener('click', () => {
    count++;
    message.textContent = ['That’s the spot. ♥', 'You just made my day!', 'Tiny paws. Big love.', 'Best walking buddy ever.'][ (count - 1) % 4 ];
    root.classList.remove('is-loved');
    void root.offsetWidth;
    root.classList.add('is-loved');
    clearTimeout(timer);
    timer = setTimeout(() => root.classList.remove('is-loved'), 2400);
  });
  document.addEventListener('visibilitychange', () => root.classList.toggle('is-away', document.hidden));
})();
