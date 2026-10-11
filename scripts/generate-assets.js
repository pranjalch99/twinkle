import fs from 'fs';
import path from 'path';

const outputDir = path.resolve(process.cwd(), 'public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const svgs = [
  {
    name: 'photo-01-dynamo-embrace.svg',
    pngAlias: 'photo-01-dynamo-embrace.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
  <defs>
    <radialGradient id="redGlow" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#b91c1c" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#7f1d1d" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#0a0a0c" stop-opacity="1" />
    </radialGradient>
    <linearGradient id="neonBar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.3" />
      <stop offset="50%" stop-color="#f87171" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#ef4444" stop-opacity="0.3" />
    </linearGradient>
  </defs>
  <rect width="800" height="1200" fill="#0d0d11" />
  <rect width="800" height="1200" fill="url(#redGlow)" />
  <!-- Club Balcony Architecture -->
  <rect x="80" y="220" width="640" height="14" fill="url(#neonBar)" rx="4" />
  <line x1="80" y1="240" x2="720" y2="240" stroke="#fca5a5" stroke-opacity="0.3" stroke-width="2" />
  <line x1="200" y1="240" x2="200" y2="340" stroke="#fca5a5" stroke-opacity="0.2" stroke-width="2" />
  <line x1="400" y1="240" x2="400" y2="340" stroke="#fca5a5" stroke-opacity="0.2" stroke-width="2" />
  <line x1="600" y1="240" x2="600" y2="340" stroke="#fca5a5" stroke-opacity="0.2" stroke-width="2" />
  <!-- Ambient club lighting and silhouettes -->
  <circle cx="430" cy="520" r="160" fill="#dc2626" opacity="0.25" filter="blur(40px)" />
  <!-- Silhouette of couple dancing closely -->
  <ellipse cx="430" cy="720" rx="90" ry="170" fill="#050507" />
  <ellipse cx="435" cy="530" rx="36" ry="46" fill="#07070a" />
  <ellipse cx="375" cy="735" rx="65" ry="155" fill="#070709" />
  <ellipse cx="380" cy="545" rx="32" ry="42" fill="#0a0a0d" />
  <!-- Subtle typography label -->
  <rect x="0" y="1040" width="800" height="160" fill="black" fill-opacity="0.65" />
  <text x="400" y="1100" fill="#f4eee5" font-family="sans-serif" font-size="28" font-weight="600" text-anchor="middle" letter-spacing="2">DYNAMO · 6:00 AM</text>
  <text x="400" y="1140" fill="#a7a0a0" font-family="sans-serif" font-size="18" text-anchor="middle">Thirty minutes dancing under the crimson lights</text>
</svg>`
  },
  {
    name: 'photo-02-dance-floor-embrace.svg',
    pngAlias: 'photo-02-dance-floor-embrace.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
  <defs>
    <radialGradient id="embraceGlow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#991b1b" stop-opacity="0.8" />
      <stop offset="60%" stop-color="#450a0a" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#0a0a0c" stop-opacity="1" />
    </radialGradient>
  </defs>
  <rect width="800" height="1200" fill="#0d0d11" />
  <rect width="800" height="1200" fill="url(#embraceGlow)" />
  <!-- Warm lights and close embrace silhouette -->
  <circle cx="400" cy="500" r="140" fill="#ef4444" opacity="0.2" filter="blur(30px)" />
  <ellipse cx="400" cy="650" rx="100" ry="190" fill="#060608" />
  <circle cx="390" cy="480" r="38" fill="#08080c" />
  <circle cx="420" cy="495" r="36" fill="#050508" />
  <!-- Subtle typography label -->
  <rect x="0" y="1040" width="800" height="160" fill="black" fill-opacity="0.65" />
  <text x="400" y="1100" fill="#f4eee5" font-family="sans-serif" font-size="28" font-weight="600" text-anchor="middle" letter-spacing="2">THE DANCE FLOOR GOODBYE</text>
  <text x="400" y="1140" fill="#a7a0a0" font-family="sans-serif" font-size="18" text-anchor="middle">Kissing you goodbye before Aura</text>
</svg>`
  },
  {
    name: 'photo-03-titlee-birthday-girl.svg',
    pngAlias: 'photo-03-titlee-birthday-girl.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
  <defs>
    <radialGradient id="bdayGlow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#d97706" stop-opacity="0.5" />
      <stop offset="40%" stop-color="#682d3a" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#0e0e12" stop-opacity="1" />
    </radialGradient>
    <linearGradient id="sashGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="50%" stop-color="#fdf4ff" />
      <stop offset="100%" stop-color="#f5d0fe" />
    </linearGradient>
  </defs>
  <rect width="800" height="1200" fill="#0f0f14" />
  <rect width="800" height="1200" fill="url(#bdayGlow)" />
  <!-- Sparkles -->
  <circle cx="240" cy="300" r="3" fill="#fde68a" opacity="0.8" />
  <circle cx="580" cy="280" r="4" fill="#fde68a" opacity="0.9" />
  <circle cx="180" cy="460" r="3" fill="#fde68a" opacity="0.7" />
  <circle cx="640" cy="520" r="3" fill="#fde68a" opacity="0.8" />
  <!-- Twinkle silhouette celebrating -->
  <ellipse cx="400" cy="720" rx="110" ry="210" fill="#121218" stroke="#3730a3" stroke-opacity="0.2" />
  <ellipse cx="400" cy="440" rx="60" ry="75" fill="#181822" />
  <!-- Birthday sash -->
  <path d="M 330 520 Q 380 620 460 740 L 490 730 Q 410 610 360 510 Z" fill="url(#sashGrad)" opacity="0.95" />
  <!-- Text on Sash -->
  <text x="395" y="640" fill="#c2410c" font-family="serif" font-size="20" font-weight="bold" transform="rotate(45, 395, 640)" letter-spacing="3">BIRTHDAY GIRL</text>
  <!-- Crown / sparkle over head -->
  <polygon points="370,360 385,340 400,360 415,340 430,360 430,375 370,375" fill="#f59e0b" opacity="0.85" />
  <!-- Footer banner -->
  <rect x="0" y="1040" width="800" height="160" fill="black" fill-opacity="0.65" />
  <text x="400" y="1100" fill="#f4eee5" font-family="sans-serif" font-size="28" font-weight="600" text-anchor="middle" letter-spacing="2">TITLEE · OCTOBER 6, 2026</text>
  <text x="400" y="1140" fill="#f59e0b" font-family="sans-serif" font-size="20" text-anchor="middle">Twinkle turns 27 in her element</text>
</svg>`
  },
  {
    name: 'photo-04-green-laser-butterfly.svg',
    pngAlias: 'photo-04-green-laser-butterfly.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
  <defs>
    <radialGradient id="greenBg" cx="50%" cy="65%" r="60%">
      <stop offset="0%" stop-color="#064e3b" stop-opacity="0.8" />
      <stop offset="60%" stop-color="#022c22" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#030712" stop-opacity="1" />
    </radialGradient>
    <linearGradient id="laserLine" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#10b981" stop-opacity="1" />
      <stop offset="100%" stop-color="#34d399" stop-opacity="0" />
    </linearGradient>
  </defs>
  <rect width="800" height="1200" fill="#05080c" />
  <rect width="800" height="1200" fill="url(#greenBg)" />
  <!-- Intense Green Lasers originating from DJ console -->
  <line x1="400" y1="750" x2="20" y2="100" stroke="#10b981" stroke-width="2" opacity="0.75" />
  <line x1="400" y1="750" x2="150" y2="50" stroke="#34d399" stroke-width="3" opacity="0.9" />
  <line x1="400" y1="750" x2="320" y2="20" stroke="#10b981" stroke-width="2.5" opacity="0.85" />
  <line x1="400" y1="750" x2="480" y2="20" stroke="#10b981" stroke-width="2.5" opacity="0.85" />
  <line x1="400" y1="750" x2="650" y2="50" stroke="#34d399" stroke-width="3" opacity="0.9" />
  <line x1="400" y1="750" x2="780" y2="100" stroke="#10b981" stroke-width="2" opacity="0.75" />
  <!-- Glowing Butterfly Console Emblem -->
  <g transform="translate(360, 700) scale(1.6)">
    <path d="M 25 10 C 10 -5, -5 20, 15 35 C -5 45, 5 60, 25 50 C 45 60, 55 45, 35 35 C 55 20, 40 -5, 25 10 Z" fill="none" stroke="#6ee7b7" stroke-width="3" filter="drop-shadow(0 0 10px #10b981)" />
  </g>
  <!-- Crowd silhouettes -->
  <ellipse cx="400" cy="980" rx="360" ry="140" fill="#030712" />
  <!-- Footer -->
  <rect x="0" y="1040" width="800" height="160" fill="black" fill-opacity="0.65" />
  <text x="400" y="1100" fill="#f4eee5" font-family="sans-serif" font-size="28" font-weight="600" text-anchor="middle" letter-spacing="2">SALUD & HILLTOP</text>
  <text x="400" y="1140" fill="#34d399" font-family="sans-serif" font-size="18" text-anchor="middle">Green lasers cutting through the humid Goa night</text>
</svg>`
  },
  {
    name: 'photo-05-morning-set-cdj.svg',
    pngAlias: 'photo-05-morning-set-cdj.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
  <defs>
    <radialGradient id="sunGlow" cx="50%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#fed7aa" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#1c1917" stop-opacity="1" />
    </radialGradient>
  </defs>
  <rect width="800" height="1200" fill="#18181b" />
  <rect width="800" height="1200" fill="url(#sunGlow)" />
  <!-- Sunrise disc overhead -->
  <circle cx="400" cy="220" r="80" fill="#ffffff" opacity="0.9" filter="blur(6px)" />
  <!-- Pioneer CDJ console in foreground -->
  <rect x="220" y="780" width="360" height="180" fill="#09090b" rx="8" stroke="#3f3f46" stroke-width="2" />
  <circle cx="310" cy="860" r="45" fill="#18181b" stroke="#71717a" stroke-width="3" />
  <circle cx="490" cy="860" r="45" fill="#18181b" stroke="#71717a" stroke-width="3" />
  <!-- Dancers in morning sun -->
  <ellipse cx="360" cy="560" rx="55" ry="110" fill="#27272a" />
  <ellipse cx="460" cy="540" rx="60" ry="115" fill="#27272a" />
  <!-- Footer -->
  <rect x="0" y="1040" width="800" height="160" fill="black" fill-opacity="0.65" />
  <text x="400" y="1100" fill="#f4eee5" font-family="sans-serif" font-size="28" font-weight="600" text-anchor="middle" letter-spacing="2">SALUD · 8:00 AM</text>
  <text x="400" y="1140" fill="#fde047" font-family="sans-serif" font-size="18" text-anchor="middle">Dancing together into the morning light</text>
</svg>`
  },
  {
    name: 'photo-06-airport-departure-text.svg',
    pngAlias: 'photo-06-airport-departure-text.jpg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
  <defs>
    <linearGradient id="hallGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="60%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>
  <rect width="800" height="1200" fill="url(#hallGrad)" />
  <!-- Departure Screens -->
  <rect x="180" y="120" width="440" height="180" fill="#020617" stroke="#fbbf24" stroke-width="2" rx="6" />
  <rect x="190" y="130" width="420" height="30" fill="#1e3a8a" />
  <text x="210" y="152" fill="#ffffff" font-family="monospace" font-size="16" font-weight="bold">GOA AIRPORT · ALL DEPARTURES</text>
  <text x="210" y="190" fill="#fbbf24" font-family="monospace" font-size="14">AI 682  MUMBAI    06:45  ON TIME</text>
  <text x="210" y="220" fill="#38bdf8" font-family="monospace" font-size="14">6E 412  BHOPAL    07:15  BOARDING</text>
  <text x="210" y="250" fill="#f97316" font-family="monospace" font-size="14">QP 130  BANGALORE 07:30  ON TIME</text>
  
  <!-- WhatsApp Bubble at 5:08 AM -->
  <g transform="translate(100, 520)">
    <!-- WhatsApp card container -->
    <rect x="0" y="0" width="600" height="340" fill="#064e3b" rx="16" stroke="#059669" stroke-width="2" filter="drop-shadow(0 12px 24px rgba(0,0,0,0.5))" />
    <!-- Message text lines -->
    <text x="40" y="65" fill="#f0fdf4" font-family="sans-serif" font-size="24" font-weight="500">thankyou for everything twinkle,</text>
    <text x="40" y="115" fill="#f0fdf4" font-family="sans-serif" font-size="24" font-weight="500">had some of the most beautiful</text>
    <text x="40" y="165" fill="#f0fdf4" font-family="sans-serif" font-size="24" font-weight="500">times with you.</text>
    <text x="40" y="225" fill="#86efac" font-family="sans-serif" font-size="24" font-weight="600">if it’s meant to be,</text>
    <text x="40" y="275" fill="#86efac" font-family="sans-serif" font-size="24" font-weight="600">we will cross paths again &lt;33</text>
    <!-- Timestamp & checkmarks -->
    <text x="480" y="315" fill="#a7f3d0" font-family="sans-serif" font-size="16">5:08 AM ✓✓</text>
  </g>
  <!-- Footer -->
  <rect x="0" y="1040" width="800" height="160" fill="black" fill-opacity="0.65" />
  <text x="400" y="1100" fill="#f4eee5" font-family="sans-serif" font-size="28" font-weight="600" text-anchor="middle" letter-spacing="2">GOA AIRPORT · 5:08 AM</text>
  <text x="400" y="1140" fill="#86efac" font-family="sans-serif" font-size="18" text-anchor="middle">The text that confirmed we weren't done yet</text>
</svg>`
  },
  {
    name: 'photo-07-techno-baddie-lasers.svg',
    pngAlias: 'photo-07-techno-baddie-lasers.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
  <defs>
    <radialGradient id="raveGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#047857" stop-opacity="0.6" />
      <stop offset="70%" stop-color="#064e3b" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#09090b" stop-opacity="1" />
    </radialGradient>
  </defs>
  <rect width="800" height="1200" fill="#0a0a0c" />
  <rect width="800" height="1200" fill="url(#raveGlow)" />
  <!-- Green overhead lasers -->
  <line x1="0" y1="180" x2="800" y2="400" stroke="#34d399" stroke-width="3" opacity="0.8" />
  <line x1="0" y1="240" x2="800" y2="320" stroke="#10b981" stroke-width="2" opacity="0.6" />
  <!-- Dancing figure with hands raised -->
  <ellipse cx="400" cy="740" rx="90" ry="180" fill="#18181b" />
  <circle cx="400" cy="510" r="45" fill="#27272a" />
  <!-- Raised arm holding phone -->
  <line x1="430" y1="520" x2="520" y2="380" stroke="#27272a" stroke-width="22" stroke-linecap="round" />
  <rect x="510" y="360" width="22" height="36" fill="#f4f4f5" rx="3" />
  <!-- Footer -->
  <rect x="0" y="1040" width="800" height="160" fill="black" fill-opacity="0.65" />
  <text x="400" y="1100" fill="#f4eee5" font-family="sans-serif" font-size="28" font-weight="600" text-anchor="middle" letter-spacing="2">TECHNO BADDIE IN GOA</text>
  <text x="400" y="1140" fill="#a7a0a0" font-family="sans-serif" font-size="18" text-anchor="middle">SDE, music lover, and radiant energy</text>
</svg>`
  },
  {
    name: 'photo-08-motion-blur-laughing.svg',
    pngAlias: 'photo-08-motion-blur-laughing.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
  <defs>
    <radialGradient id="blurGlow" cx="45%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.8" />
      <stop offset="35%" stop-color="#b91c1c" stop-opacity="0.6" />
      <stop offset="70%" stop-color="#6b21a8" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#09090b" stop-opacity="1" />
    </radialGradient>
  </defs>
  <rect width="800" height="1200" fill="#0a0a0c" />
  <rect width="800" height="1200" fill="url(#blurGlow)" />
  <!-- Motion streaks -->
  <ellipse cx="420" cy="520" rx="190" ry="110" fill="#fdba74" opacity="0.4" transform="rotate(-25, 420, 520)" filter="blur(20px)" />
  <ellipse cx="380" cy="580" rx="160" ry="80" fill="#f43f5e" opacity="0.5" transform="rotate(15, 380, 580)" filter="blur(16px)" />
  <!-- Footer -->
  <rect x="0" y="1040" width="800" height="160" fill="black" fill-opacity="0.65" />
  <text x="400" y="1100" fill="#f4eee5" font-family="sans-serif" font-size="28" font-weight="600" text-anchor="middle" letter-spacing="2">THE GOA BLUR</text>
  <text x="400" y="1140" fill="#fdba74" font-family="sans-serif" font-size="18" text-anchor="middle">Laughter, basslines, and zero track of time</text>
</svg>`
  },
  {
    name: 'photo-09-deep-red-afterparty.svg',
    pngAlias: 'photo-09-deep-red-afterparty.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
  <defs>
    <radialGradient id="noirRed" cx="50%" cy="30%" r="55%">
      <stop offset="0%" stop-color="#dc2626" stop-opacity="0.7" />
      <stop offset="50%" stop-color="#7f1d1d" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#050508" stop-opacity="1" />
    </radialGradient>
  </defs>
  <rect width="800" height="1200" fill="#09090b" />
  <rect width="800" height="1200" fill="url(#noirRed)" />
  <!-- Neon tube lights in ceiling -->
  <line x1="200" y1="180" x2="600" y2="180" stroke="#f87171" stroke-width="6" stroke-linecap="round" filter="drop-shadow(0 0 12px #ef4444)" />
  <line x1="260" y1="240" x2="540" y2="240" stroke="#fb7185" stroke-width="4" stroke-linecap="round" opacity="0.6" />
  <!-- Silhouettes -->
  <ellipse cx="280" cy="740" rx="90" ry="200" fill="#020204" />
  <ellipse cx="520" cy="760" rx="80" ry="190" fill="#020204" />
  <!-- Footer -->
  <rect x="0" y="1040" width="800" height="160" fill="black" fill-opacity="0.65" />
  <text x="400" y="1100" fill="#f4eee5" font-family="sans-serif" font-size="28" font-weight="600" text-anchor="middle" letter-spacing="2">AURA AFTERHOURS</text>
  <text x="400" y="1140" fill="#f87171" font-family="sans-serif" font-size="18" text-anchor="middle">Chasing afterparties because you invited me</text>
</svg>`
  },
  {
    name: 'photo-10-intimate-candid-cortinga.svg',
    pngAlias: 'photo-10-intimate-candid-cortinga.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
  <defs>
    <radialGradient id="terraceSun" cx="50%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.9" />
      <stop offset="45%" stop-color="#fed7aa" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#292524" stop-opacity="1" />
    </radialGradient>
  </defs>
  <rect width="800" height="1200" fill="#1c1917" />
  <rect width="800" height="1200" fill="url(#terraceSun)" />
  <!-- Bamboo ceiling rafters -->
  <line x1="0" y1="120" x2="800" y2="240" stroke="#78350f" stroke-width="8" opacity="0.4" />
  <line x1="0" y1="180" x2="800" y2="300" stroke="#78350f" stroke-width="8" opacity="0.4" />
  <line x1="0" y1="240" x2="800" y2="360" stroke="#78350f" stroke-width="8" opacity="0.4" />
  <!-- Sunflowers hint -->
  <circle cx="700" cy="180" r="28" fill="#f59e0b" />
  <circle cx="700" cy="180" r="14" fill="#78350f" />
  <!-- Two faces close together in tender daylight candid -->
  <ellipse cx="320" cy="880" rx="95" ry="120" fill="#44403c" />
  <circle cx="340" cy="790" r="60" fill="#57534e" />
  <ellipse cx="480" cy="890" rx="100" ry="130" fill="#292524" />
  <circle cx="460" cy="800" r="65" fill="#44403c" />
  <!-- Footer -->
  <rect x="0" y="1040" width="800" height="160" fill="black" fill-opacity="0.65" />
  <text x="400" y="1100" fill="#f4eee5" font-family="sans-serif" font-size="28" font-weight="600" text-anchor="middle" letter-spacing="2">CAFÉ CORTINGA &amp; BEACH</text>
  <text x="400" y="1140" fill="#fde68a" font-family="sans-serif" font-size="18" text-anchor="middle">When the music faded and it was just us</text>
</svg>`
  }
];

svgs.forEach((item) => {
  const svgPath = path.join(outputDir, item.name);
  fs.writeFileSync(svgPath, item.svg.trim(), 'utf-8');
  // Also write as svg so that <img src="/images/...svg"> or <img src="/images/...png"> can load
  // We can also copy to the png alias if desired or serve svg
  const aliasPath = path.join(outputDir, item.pngAlias);
  fs.writeFileSync(aliasPath, item.svg.trim(), 'utf-8');
});

console.log('Successfully generated all 10 visual assets in public/images');
