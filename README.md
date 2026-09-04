# nasa apod site 🚀

ok so this is my project for... idk it started as a fun thing and now its like an actual website lol

basically it shows the NASA Astronomy Picture of the Day (APOD) and i added a whole dashboard thing to it. its pretty cool i think

## what does it do

- shows the nasa picture of the day (or video sometimes)
- has a **dashboard page** where you can see your history and stuff
- saves everything to localStorage so no backend needed (i have no idea how to do backend yet lol)
- you can favourite APODs, write notes, edit your profile
- light themed dashboard bc dark mode was giving me headache

## how to run it

```bash
npm install
npm run dev
```

then go to http://localhost:5173 or whatever port vite picks

> **NOTE:** you need a NASA API key. get one free at https://api.nasa.gov/
> put it in a `.env` file like this:
> ```
> VITE_NASA_API_KEY=your_key_here
> ```
> i have mine in `.env` but its in `.gitignore` so u cant see it (for security reasons my teacher said)

## project structure

```
nasa-apod-site/
├── index.html          ← main page (the apod viewer)
├── dashboard.html      ← the dashboard i made
├── main.js             ← fetches from nasa api + saves history
├── vite.config.js      ← vite config (had to add this for dashboard to work)
├── styles-and-stuff/
│   └── my-style.css    ← styles for main page
├── .env                ← api key (NOT pushed to github!!)
└── gg.html             ← idk what this is anymore, ignore it
```

## tech stack

- **HTML + CSS + vanilla JS** - no framework bc i dont know react yet 😭
- **Vite** - for the dev server and build stuff
- **NASA APOD API** - the actual data
- **localStorage** - for saving user data (no database, too complicated)
- **Google Fonts** - Space Mono + Inter (they look nice)

## features i actually built

- [x] fetch today's APOD from nasa
- [x] show the image/video + explanation
- [x] dashboard page
- [x] viewing history (auto-saves when u visit)
- [x] favorites (star things from history)
- [x] notes section (autosaves every 30s)
- [x] editable profile (name, bio, emoji avatar)
- [x] stats (total viewed, favs, days since u first visited)
- [x] light theme on dashboard

## features i wanted to add but didnt

- [ ] date picker to see old APODs
- [ ] share button
- [ ] dark mode toggle
- [ ] actual user accounts (would need backend which i cant do rn)
- [ ] search through history

## known issues / bugs

- the dashboard link might show 404 if vite config isnt set up right (fixed this like 3 times)
- if the NASA API rate limit hits, it shows "error getting data from nasa oh no" 💀
- on mobile it looks okay but not great
- sometimes the auto-save console.log spam is annoying but i left it in for debugging

---

## 🤖 AI credit

honestly a big chunk of this project was made with the help of **Antigravity AI** (powered by Google Deepmind).

specifically:
- the dashboard page was basically AI-generated (i described what i wanted and it built it)
- the localStorage logic
- the light theme CSS conversion
- fixing the vite multi-page config
- writing this README lol

i still typed a bunch of stuff myself and made design decisions and broke things and fixed them. but yeah, AI helped a lot. i think thats fine? my teacher said tools are ok to use as long as u understand the code. i *mostly* understand it.

the main.js and the idea + structure is mine. the dashboard is kinda AI + me collab.

> using AI for coding is like having a really smart friend who knows everything about web dev.
> u still have to know what to ask for and what to do with the answer - priyanshu

---

## how i learned stuff doing this

- how Vite works (kinda)
- how to use environment variables (`.env` files)
- localStorage get/set/parse
- CSS gradients and glassmorphism-ish stuff
- that `&&` doesnt work in PowerShell (use `;` instead) 😤
- NASA has a free API!! thats so cool

---

made by **priyanshu** | sept 2026

*p.s. if this code looks weird in some places its bc i wrote it at weird times and then AI cleaned some of it up but not all of it*
