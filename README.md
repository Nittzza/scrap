# Paapa's 30th — Digital Scrapbook 🎂

A vintage Windows 98/XP desktop meets Y2K/Pinterest scrapbook birthday site.
No build tools, no frameworks — just open `index.html` in a browser.

## Flow

1. **Password gate** — a Windows 7-style lock screen ("Digi Scrap" account
   tile + password field). A wrong password shakes the box and shows an
   inline "password is incorrect" message, just like the real thing.
2. **Cover page ("the desktop")** — a plain wallpaper desktop with one
   "Digi Scrap" icon. Click it to open the "Digi Scrap.exe" window,
   which pages through a fixed sequence of pre-made screenshots (closed
   diary → first page → second page → third image → fourth image) via
   "Open...", the left/right arrows, or the ❮/❯ buttons beside the
   window. Its minimize/maximize/close and Cancel buttons all work too.
3. **The scrapbook** — a separate spiral-bound, page-flipping photo book
   (with a "Chapters" folder window) built from the `PHOTOS` array —
   currently not linked from the desktop, since the Digi Scrap window
   above covers that role with hand-made pages instead.
4. **The MP3 player** — a second desktop icon opens a pink "MP3 Player"
   popup (a record player playing "What Once Was" by Her's). Play/pause,
   rewind/forward ±10s, the heart (toggles repeat), mute, the volume
   slider, and the progress bar (click/drag to seek) all work; the
   progress bar and time counter reflect real playback. Minimize/close
   hide the popup without stopping the song; maximize enlarges it.

## File structure

```
index.html          — all three screens (markup only)
css/style.css        — all styling (colors/fonts are CSS variables up top)
js/script.js         — all behavior + your editable content (see below)
photos/              — your images AND site chrome images (wallpaper,
                       lock screen, Digi Scrap icon, diary window) go here
```

## How to add / change photos

Open `js/script.js`. Near the top you'll find the `PHOTOS` array:

```js
const PHOTOS = [
  { src: "photos/photo1.jpg", caption: "the beginning of everything", chapter: "The Little Me" },
  { src: "photos/photo2.jpg", caption: "cheeks for absolutely no reason", chapter: "The Little Me" },
  // ...
];
```

- **To add a photo:** add a new object to the array (order = order in the
  book) and drop a matching image file into `/photos`. That's it — the
  book automatically re-paginates 4 photos per page, and the page's
  chapter label uses the first photo's `chapter` value.
- **To remove a photo:** delete its object from the array.
- **`caption`** — the handwritten text under the photo. Edit freely.
- **`chapter`** — must match one of the names in the `CHAPTERS` array
  (just above `PHOTOS`) for the sidebar "jump to chapter" links to find
  it. Reorder `CHAPTERS` to reorder the sidebar; you don't need every
  chapter to have exactly 4 photos, or even a multiple of 4 — any
  leftover slots show a "more memories coming soon" placeholder card.
- **Missing file?** No problem — any photo whose file isn't in `/photos`
  yet automatically shows a "add your photo here 💗" placeholder instead
  of a broken image, so you can fill in the array before you have every
  picture ready.
- **Image tips:** roughly square photos (e.g. 800×800) look best in the
  polaroid frames. JPG/PNG/WebP all work — just make sure the file
  extension in `src` matches what you actually upload.

## How to change the background

The desktop and scrapbook screens share one wallpaper: `photos/wallpaper.png`,
set as the `.sky-bg` background in `css/style.css`. Drop in a different
image with the same filename to swap it, or change the path/rule there
directly.

## How to change the password

At the very top of `js/script.js`:

```js
const PASSWORD = "639001";
```

Once someone enters it correctly, that browser remembers (via
`localStorage`) and skips straight to the desktop on every later visit
— no need to log in again. To force the password screen to show again
(e.g. while testing your own changes), open the browser console on the
page and run `localStorage.removeItem("scrapbookUnlocked")`, then
reload.

Change the string to whatever you like. The check is case-insensitive.

### About the lock screen and diary window images

Both of these use the same trick: the picture IS the UI, and real,
invisible `<input>`/`<button>` elements are laid exactly on top of the
box/buttons already drawn into that picture, positioned by percentage
so they stay aligned at any screen size.

- **Screen 1** is `photos/lock-screen.png`. `.win7-real-input` and
  `.win7-real-submit` in `css/style.css` sit over its password box and
  arrow.
- **The desktop's "Digi Scrap.exe" window** pages through the
  `DIARY_PAGES` array near the top of the "SCREEN 2" section in
  `js/script.js` — currently `closed-diary.png`, `first page.png`,
  `second page.png`, `third image.png`, `fourth image.png`. Each entry
  has its own `ratio` (that image's width ÷ height) and its own
  `buttons` percentages for minimize/maximize/close/open/cancel,
  because each picture is a separate export with the window chrome at
  a slightly different relative position — script.js repositions all
  five invisible buttons every time the page changes, using whichever
  entry is showing. Its menu bar, toolbar icons, and "Print..." button
  are just part of the pictures — not wired to anything.

**To add or reorder pages:** drop the image into `/photos` and add (or
move) an entry in `DIARY_PAGES`. **To change what page you land on
after closing/reopening the window:** that's always index `0`
(the first entry), set in `dismissDiaryWindow()`.

**To measure a new image's button percentages:** open it in any
viewer/editor that shows pixel coordinates, find each button's
corners, then divide by the image's total width (for `left`/`width`)
or height (for `top`/`height`) and multiply by 100. Also note the
account name ("Digi Scrap") and every window's title/menu/toolbar are
baked into the images themselves — changing them means editing the
image, not the code.

The MP3 player popup (`photos/record-player-popup.png`) works the same
way — its buttons are listed individually in `css/style.css` (search
for `MP3 PLAYER POPUP`) since each one needs its own position rather
than a per-page lookup table.

## How to change the song

The song streams from YouTube via the YouTube IFrame API — there's no
local audio file, and only the custom pink popup UI is ever visible
(the actual YouTube player is hidden off-screen). To swap the song,
change `YOUTUBE_VIDEO_ID` near the top of the "MP3 PLAYER POPUP"
section in `js/script.js` to a different video's ID (the part after
`?v=` in its YouTube URL). The "What Once Was" / "Her's" title and
artist text are baked into `photos/record-player-popup.png`, so
changing those means editing (or swapping) that image to match.

## Customizing colors & fonts

All colors and fonts are CSS variables at the top of `css/style.css`:

```css
:root {
  --sky-top: #4fb8f0;
  --blush-pink: #ff9ec7;
  --lavender: #b9a3f5;
  --gold: #ffd35c;
  --font-script: 'Pacifico', cursive;   /* headline */
  --font-body: 'Baloo 2', sans-serif;   /* everything else */
  --font-hand: 'Caveat', cursive;       /* handwritten captions */
  ...
}
```

Change a value and it updates everywhere that variable is used. Fonts
are loaded from Google Fonts in `index.html`'s `<head>` — swap the
`<link>` there and the `--font-*` variable names together if you want
different typefaces.

## Deploying

This is a fully static site — no build step. Easiest options:

- **Netlify / Vercel:** drag the whole project folder onto their
  dashboard, or connect a git repo.
- **GitHub Pages:** push this folder to a repo and enable Pages on the
  `main` branch.

Just make sure `photos/`, `css/`, and `js/` are deployed alongside
`index.html` with their relative paths intact.

## Browser support note

Built with plain HTML/CSS/JS — works in any modern browser (Chrome,
Safari, Firefox, Edge). Tested layout breakpoints at ~900px and ~560px
for tablet/phone; the book stacks into a single scrollable page on
small screens with the chapters list becoming a tap-to-open folder
window.
# scrap
