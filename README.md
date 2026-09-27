# To Lakshya, With All My Love ✨
### A World-Class Romantic Birthday Surprise Web Experience

A personalized, cinematic, emotional interactive experience designed for **Lakshya** for her birthday on **October 23**.

Built with Next.js (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React.

---

## 🌹 17 Storytelling Experiences

1. **The Secret** — Dark cinematic opening with suspenseful text reveal
2. **The Countdown** — Real-time countdown to October 23 that automatically transforms into a celebration
3. **Her Name** — Dedicated typographic experience illuminating the meaning of "Lakshya"
4. **The First Memory** — Cinematic scene highlighting the moment everything shifted
5. **Our Story Timeline** — Interactive journey through key relationship milestones
6. **Memory Gallery** — Curated masonry photography anthology with fullscreen lightbox
7. **Little Things I Love About You** — Interactive cards revealing heartfelt reasons
8. **Our Favorite Moments** — Alternating cinematic stills with narrative memories
9. **Open When...** — 5 interactive envelopes sealed with digital wax for every emotional mood
10. **The Letter** — Full-screen romantic parchment letter revealed on scroll
11. **Our Soundtrack** — Interactive spinning vinyl player with synced audio
12. **Our Constellation** — Interactive celestial star map where stars reveal memories
13. **Our Tomorrow** — Emotional future dreams and wishes together
14. **The Promise** — Minimalist typography vow
15. **The Final Surprise** — Suspenseful climax building toward the grand celebration
16. **Birthday Celebration** — Luxury confetti burst, candle blowing, and celebration photo reveal
17. **The Last Page / Replay** — Peaceful epilogue with a smooth "Replay Our Love Story" option

---

## 📸 HOW TO ADD PERSONAL PHOTOS

You can replace all photographs without editing any code components!

### Step-by-Step Workflow:
1. Open the folder: `public/images/`
2. Replace any of the placeholder images using the **exact same filenames** listed below:

| File Name | Description & Best Photo Type |
| :--- | :--- |
| `hero.jpg` | Main cinematic editorial photo of Lakshya |
| `lakshya.jpg` | Dedicated portrait for Her Name section (portrait orientation) |
| `couple-01.jpg` | The first memory / early relationship days |
| `couple-02.jpg` | Golden sunset waterfront memory |
| `couple-03.jpg` | Celebration night / dressed up together |
| `couple-04.jpg` | Walking hand in hand / casual date |
| `couple-05.jpg` | Quiet morning embrace / warm cozy moment |
| `memory-01.jpg` | Late night talk / deep connection memory |
| `memory-02.jpg` | Candid laughing shot of Lakshya |
| `memory-03.jpg` | Spontaneous trip / roadtrip under the stars |
| `memory-04.jpg` | Rainy day / quiet coffee date |
| `memory-05.jpg` | Dinner celebration / dressed in starlight |
| `memory-06.jpg` | Her gentle, caring candid smile |
| `memory-07.jpg` | Ocean breeze / beach getaway |
| `memory-08.jpg` | Autumn walk under colorful trees |
| `memory-09.jpg` | Cozy bookstore / quiet library afternoon |
| `memory-10.jpg` | Dessert date / sweet shared bites |
| `memory-11.jpg` | Fairy lights at midnight / festival night |
| `memory-12.jpg` | Mountain vista / scenic adventure |
| `memory-13.jpg` | Dancing in the rain / spontaneous joy |
| `memory-14.jpg` | Twilight rooftop / dusk city lights |
| `memory-15.jpg` | Birthday celebration toast / cake moment |

3. Refresh your browser (`Ctrl + F5` or `Cmd + Shift + R`). The new photos will immediately appear!

> **Resilient Fallback Guarantee:** If any photo is missing or fails to load, the website will never crash or show broken image icons. A self-contained luxury obsidian & gold vector card will seamlessly preserve the layout.

---

## ✍️ HOW TO CHANGE TEXT

All text content, dates, letters, reasons, and quotes are centralized in a single file:

```
src/data/birthday.ts
```

Open this file to customize:
- `recipient`: Name, nickname, birth date, meaning of name, and hero message
- `firstMemory`: Date, location, title, story, and quote
- `timeline`: All story chapters, dates, and milestones
- `gallery`: Captions, dates, and notes for all 19+ photos
- `reasons`: The 8 "Little Things I Love" cards
- `openWhen`: All 5 personalized letters and postscripts
- `letter`: The full emotional handwritten letter
- `constellation`: Celestial star names, stories, and connections
- `futureDreams`: Future bucket list items and wishes
- `promise`: The sacred vow lines
- `surpriseReveal`: The climax text and candle messages
- `easterEggs`: Secret notes unlocked by tapping the heart icon

---

## 🎵 HOW TO CHANGE MUSIC

Place your favorite romantic MP3 file at:

```
public/audio/song.mp3
```

- **Built-in Ambient Fallback:** If `song.mp3` is not present, the website automatically plays a live warm Rhodes piano ambient soundscape using the Web Audio API, ensuring the site is never silent!
- **User-Friendly Audio:** Sound will never autoplay without user interaction (meeting browser autoplay policies). Users can start audio via the vinyl record in Chapter 11 or via the floating bottom dock.

---

## 💖 SECRET EASTER EGG

There is a hidden romantic surprise:
- Tap the **heart icon** in the floating top navigation bar **3 times**.
- A secret modal will unlock revealing private love notes!

---

## 🚀 RUNNING LOCALLY

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 PRODUCTION BUILD & DEPLOYMENT

```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Deploy to Vercel:
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Click **Deploy**. Vercel will automatically detect Next.js and deploy your surprise in seconds.

