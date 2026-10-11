# Somewhere Between the Bass & You
> *"One random swipe. One unexpected night. One girl I wasn't ready to leave behind."*

A bespoke, cinematic digital gift created by **Pranjal** for **Twinkle's 27th Birthday** (October 6, 2026), celebrating how they met in Goa and looking forward to **November 22, 2026** in Mumbai.

---

## ✦ Overview & Creative Vision

- **Narrative**: The complete, authentic story written in Pranjal's voice—from scrolling Hinge waiting for paneer and rice, to Dynamo at 6:00 AM, the afterparty at Aura, waiting at Salud until 8:00 AM, the proper date through Salud and Hilltop, the quiet beach lane beside Aura, cuddling before a 10:00 AM meeting, Café Cortinga, Twinkle's 27th at Titlee, the 5:08 AM airport WhatsApp message, CamelPhat emo techno, and the bridge connecting Bhopal to Mulund West, Mumbai.
- **Visual Design**: An editorial, film-journal aesthetic with dark nightclub noir (`#101014`, `#18171B`), warm paper stationery (`#EDE3D5`) for intimate moments and letters, and muted accents of burgundy (`#682D3A`), champagne (`#D5BD9B`), and dusty rose (`#B88C91`).
- **Zero AI Clutter**: No chatbot widgets, no generic cards, no fake badges. Strict anti-slop typography and zero-pill discipline.
- **Audio Motif**: A subtle, delicate ambient techno waveform visualizer inspired by Goa soundscapes and CamelPhat.
- **Live Countdown**: Tabular IST countdown to November 22, 2026 in Asia/Kolkata.
- **Memory Vault**: Built-in photo curator with fullscreen accessible lightbox and in-browser photo replacement.

---

## ✦ Project Structure

```
├── public/
│   └── images/                       # All 10 photographs & fallback assets
│       ├── photo-01-dynamo-embrace.png    (IMG_0792.png)
│       ├── photo-02-dance-floor-embrace.png (IMG_0793.png)
│       ├── photo-03-titlee-birthday-girl.png (IMG_0794.png)
│       ├── photo-04-green-laser-butterfly.png (IMG_0795.png)
│       ├── photo-05-morning-set-cdj.png    (IMG_0796.png)
│       ├── photo-06-airport-departure-text.jpg (IMG_0797.jpg)
│       ├── photo-07-techno-baddie-lasers.png (IMG_0798.png)
│       ├── photo-08-motion-blur-laughing.png (IMG_0799.png)
│       ├── photo-09-deep-red-afterparty.png (IMG_0800.png)
│       └── photo-10-intimate-candid-cortinga.png (IMG_0801.png)
├── src/
│   ├── components/
│   │   ├── TopNav.tsx                # 3-zone clean header & scroll indicator
│   │   ├── Hero.tsx                  # Cinematic typography-led entrance
│   │   ├── Dedication.tsx            # Warm paper stationery letter
│   │   ├── StoryChapter.tsx          # Asymmetric editorial chapter layout
│   │   ├── TheBeachInterlude.tsx     # Chapter 05 & 06 centerpiece
│   │   ├── AirportExchange.tsx       # 5:08 AM WhatsApp text at Goa Airport
│   │   ├── DistanceBridge.tsx        # Bhopal to Mumbai distance connection
│   │   ├── Countdown.tsx             # Live countdown to Nov 22, 2026 (IST)
│   │   ├── BirthdayLetter.tsx        # Chapter 09 closing letter
│   │   ├── FinalFrame.tsx            # Quiet closing screen & story replay
│   │   ├── Lightbox.tsx              # Fullscreen accessible photo viewer
│   │   ├── WaveformMotif.tsx         # Techno sound wave visualizer
│   │   └── PhotoVaultModal.tsx       # Photo manager & local test dropzone
│   ├── data/
│   │   ├── photos.ts                 # Central photo manifest & metadata
│   │   └── story.ts                  # Central narrative text and chapters
│   ├── hooks/
│   │   ├── useCountdown.ts           # IST countdown calculation
│   │   └── useScrollProgress.ts      # Scroll progress tracking
│   ├── App.tsx                       # Main application shell
│   ├── index.css                     # Tailwind CSS & typography setup
│   └── main.tsx                      # React root
├── .github/workflows/deploy.yml      # Automated GitHub Pages deployment
└── vite.config.ts                    # Portable build configuration
```

---

## ✦ Getting Started Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✦ How to Replace Photographs

You can replace photos in two ways:

### Option A: Direct File Replacement (Recommended for permanent deployment)
Copy your 10 high-resolution photos into `public/images/`. You can use either the original names or the descriptive names:
1. `IMG_0792.png` or `photo-01-dynamo-embrace.png` (Dynamo 6:00 AM dancing under red lights)
2. `IMG_0793.png` or `photo-02-dance-floor-embrace.png` (Dance floor kiss & goodbye)
3. `IMG_0794.png` or `photo-03-titlee-birthday-girl.png` (Twinkle in "Birthday Girl" sash at Titlee)
4. `IMG_0795.png` or `photo-04-green-laser-butterfly.png` (Green lasers & butterfly console)
5. `IMG_0796.png` or `photo-05-morning-set-cdj.png` (Salud morning set until 8:00 AM)
6. `IMG_0797.jpg` or `photo-06-airport-departure-text.jpg` (5:08 AM WhatsApp airport text)
7. `IMG_0798.png` or `photo-07-techno-baddie-lasers.png` (Twinkle dancing under lasers)
8. `IMG_0799.png` or `photo-08-motion-blur-laughing.png` (Ecstatic motion blur dancing)
9. `IMG_0800.png` or `photo-09-deep-red-afterparty.png` (Deep red afterparty glow)
10. `IMG_0801.png` or `photo-10-intimate-candid-cortinga.png` (Café Cortinga morning intimacy)

### Option B: In-Browser Upload (Live Preview)
Click the **"Memory Vault"** button in the top navigation bar. You will see a grid of all 10 photo cards where you can click **"Upload photo"** to select any image from your computer or phone. The changes persist in your browser instantly.

---

## ✦ How to Edit the Story or Date

- **Story & Text**: All chapter texts, titles, pull quotes, and letters are stored in `src/data/story.ts`. Edit any paragraph without touching UI components.
- **Target Countdown Date**: Open `src/hooks/useCountdown.ts` and update `TARGET_TIMESTAMP_MS` if your Mumbai date or time changes.

---

## ✦ Deploying for Free

### Deploy to Vercel (Fastest & Free)
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and select your repository.
4. Leave all build settings as default (Framework: Vite, Build command: `npm run build`, Output directory: `dist`).
5. Click **"Deploy"**. Your site will be live on a fast, free `.vercel.app` domain in ~30 seconds!

### Deploy to GitHub Pages (Automated & Free)
1. Push this repository to GitHub.
2. In your GitHub repository, go to **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The included workflow file (`.github/workflows/deploy.yml`) will automatically build and deploy your site to `https://<your-username>.github.io/<your-repo>/`.

---

## ✦ Verification & Testing

To test the production build locally before deploying:
```bash
npm run build
npm run preview
```

No backend, database, or API keys are required. This is a 100% static, private digital gift made for Twinkle.
