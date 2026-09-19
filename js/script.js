/* ============================================================
   PAAPA'S 30TH SCRAPBOOK — SCRIPT
   ------------------------------------------------------------
   EASY TWEAKS (everything you'll want to touch lives up top):
     1. PASSWORD   -> the gate password (case-insensitive)
     2. CHAPTERS   -> ordered list of chapter names for the sidebar
     3. PHOTOS     -> add one object per photo. That's it — pages,
                      the sidebar, and captions all build themselves.
   See README.md for the full "how do I add a photo" walkthrough.
============================================================= */

// 1) THE PASSWORD — change this to whatever you like.
const PASSWORD = "639001";

// 2) CHAPTERS — order controls the sidebar order. Rename freely;
//    just make sure each PHOTOS entry's "chapter" matches one of these.
const CHAPTERS = [
  "The Little Me",
  "Family & Firsts",
  "Friends",
  "School Days",
  "Adventures",
  "Growing Up",
  "Dreams",
  "Today",
];

// 3) PHOTOS — one object per photo. Order here = order in the book.
//    "src" just needs to match a filename you drop into /photos.
//    Missing file? A cute placeholder shows automatically, so it's
//    safe to fill this whole list out before you have every image.
const PHOTOS = [
  { src: "photos/photo1.jpg", caption: "the beginning of everything", chapter: "The Little Me" },
  { src: "photos/photo2.jpg", caption: "cheeks for absolutely no reason", chapter: "The Little Me" },
  { src: "photos/photo3.jpg", caption: "already causing chaos at age 2", chapter: "The Little Me" },
  { src: "photos/photo4.jpg", caption: "world's tiniest troublemaker", chapter: "The Little Me" },

  { src: "photos/photo5.jpg", caption: "first birthday, first cake disaster", chapter: "Family & Firsts" },
  { src: "photos/photo6.jpg", caption: "held by everyone who loves you", chapter: "Family & Firsts" },
  { src: "photos/photo7.jpg", caption: "family road trip #1", chapter: "Family & Firsts" },
  { src: "photos/photo8.jpg", caption: "your first best friend", chapter: "Family & Firsts" },

  { src: "photos/photo9.jpg", caption: "the squad, circa forever ago", chapter: "Friends" },
  { src: "photos/photo10.jpg", caption: "friends who became family", chapter: "Friends" },
  { src: "photos/photo11.jpg", caption: "inside jokes, no explanation needed", chapter: "Friends" },
  { src: "photos/photo12.jpg", caption: "still laughing about this one", chapter: "Friends" },

  { src: "photos/photo13.jpg", caption: "uniform, backpack, big dreams", chapter: "School Days" },
  { src: "photos/photo14.jpg", caption: "the science fair almost-disaster", chapter: "School Days" },
  { src: "photos/photo15.jpg", caption: "graduation nerves, big smiles", chapter: "School Days" },
  { src: "photos/photo16.jpg", caption: "notes passed in class, memories that stayed", chapter: "School Days" },

  { src: "photos/photo17.jpg", caption: "somewhere far from home", chapter: "Adventures" },
  { src: "photos/photo18.jpg", caption: "the trip we still talk about", chapter: "Adventures" },
  { src: "photos/photo19.jpg", caption: "lost the map, found the fun", chapter: "Adventures" },
  { src: "photos/photo20.jpg", caption: "collecting stamps and stories", chapter: "Adventures" },

  { src: "photos/photo21.jpg", caption: "figuring it all out, one year at a time", chapter: "Growing Up" },
  { src: "photos/photo22.jpg", caption: "taller, wiser, still you", chapter: "Growing Up" },
  { src: "photos/photo23.jpg", caption: "the years that shaped you", chapter: "Growing Up" },
  { src: "photos/photo24.jpg", caption: "becoming exactly who you were meant to be", chapter: "Growing Up" },

  { src: "photos/photo25.jpg", caption: "chasing the big ones", chapter: "Dreams" },
  { src: "photos/photo26.jpg", caption: "what you always said you'd do", chapter: "Dreams" },
  { src: "photos/photo27.jpg", caption: "still writing this chapter", chapter: "Dreams" },
  { src: "photos/photo28.jpg", caption: "the future looks good on you", chapter: "Dreams" },

  { src: "photos/photo29.jpg", caption: "here's to 30 and everything after", chapter: "Today" },
  { src: "photos/photo30.jpg", caption: "still my favorite person", chapter: "Today" },
  { src: "photos/photo31.jpg", caption: "the best is just getting started", chapter: "Today" },
  { src: "photos/photo32.jpg", caption: "happy birthday, Paapa 🎉", chapter: "Today" },
];

// Decorative sticker/washi glyphs sprinkled onto each page. Edit freely.
const MINI_STICKERS = ["✦", "❤️", "✨", "🌸", "★", "🎀"];
const WASHI_COLORS = ["rgba(255,214,92,0.7)", "rgba(255,158,199,0.7)", "rgba(185,163,245,0.7)"];

/* ============================================================
   DOM REFS
============================================================= */
const screenPassword = document.getElementById("screen-password");
const screenCover = document.getElementById("screen-cover");
const screenBook = document.getElementById("screen-book");

const loginWindow = document.getElementById("loginWindow");
const passwordInput = document.getElementById("passwordInput");
const okButton = document.getElementById("okButton");
const win7Error = document.getElementById("win7Error");
const powerBtn = document.getElementById("powerBtn");

const openBookBtn = document.getElementById("openBookBtn");
const digiScrapIcon = document.getElementById("digiScrapIcon");
const coverWindow = document.getElementById("coverWindow");
const diaryPageImage = document.getElementById("diaryPageImage");
const coverWindowMinimizeBtn = document.getElementById("coverWindowMinimizeBtn");
const coverWindowMaximizeBtn = document.getElementById("coverWindowMaximizeBtn");
const coverWindowCloseBtn = document.getElementById("coverWindowCloseBtn");
const coverWindowCancelBtn = document.getElementById("coverWindowCancelBtn");
const diaryPrevBtn = document.getElementById("diaryPrevBtn");
const diaryNextBtn = document.getElementById("diaryNextBtn");

const musicPlayerIcon = document.getElementById("musicPlayerIcon");
const recordPlayerWindow = document.getElementById("recordPlayerWindow");
const rpMinimizeBtn = document.getElementById("rpMinimizeBtn");
const rpMaximizeBtn = document.getElementById("rpMaximizeBtn");
const rpCloseBtn = document.getElementById("rpCloseBtn");
const rpRewindBtn = document.getElementById("rpRewindBtn");
const rpPlayPauseBtn = document.getElementById("rpPlayPauseBtn");
const rpForwardBtn = document.getElementById("rpForwardBtn");
const rpLoopBtn = document.getElementById("rpLoopBtn");
const rpMuteBtn = document.getElementById("rpMuteBtn");
const rpProgressFill = document.getElementById("rpProgressFill");
const rpSeekInput = document.getElementById("rpSeekInput");
const rpCurrentTimeEl = document.getElementById("rpCurrentTime");
const rpDurationTimeEl = document.getElementById("rpDurationTime");
const rpVolumeInput = document.getElementById("rpVolumeInput");

const chaptersToggle = document.getElementById("chaptersToggle");
const chaptersWindow = document.getElementById("chaptersWindow");
const chaptersCloseBtn = document.getElementById("chaptersCloseBtn");
const chaptersListEl = document.getElementById("chaptersList");

const bookEl = document.getElementById("book");
const pageLeftEl = document.getElementById("pageLeft");
const pageRightEl = document.getElementById("pageRight");
const spiralBindingEl = document.getElementById("spiralBinding");
const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const pageIndicator = document.getElementById("pageIndicator");

/* ============================================================
   SCREEN 1 — PASSWORD GATE
============================================================= */

function checkPassword() {
  const value = passwordInput.value.trim();
  if (value.toUpperCase() === PASSWORD.toUpperCase()) {
    unlockScrapbook();
  } else {
    shakeLogin("The password is incorrect. Try again.");
  }
}

// Shows an inline Windows-style error message under the password field
// and shakes the login block. Reused by the (decorative) power button too.
function shakeLogin(message) {
  win7Error.textContent = message;
  win7Error.classList.add("visible");
  loginWindow.classList.remove("shake");
  // restart the shake animation even if triggered twice in a row
  void loginWindow.offsetWidth;
  loginWindow.classList.add("shake");
  setTimeout(() => loginWindow.classList.remove("shake"), 500);
}

function unlockScrapbook() {
  // Remembered across visits so the password only has to be entered once
  // per browser — see the "already unlocked?" check in the INIT section.
  localStorage.setItem("scrapbookUnlocked", "true");
  switchScreen(screenPassword, screenCover);
  playSong(); // start the moment the desktop opens, not on a later click
}

okButton.addEventListener("click", checkPassword);
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkPassword();
});
passwordInput.addEventListener("input", () => win7Error.classList.remove("visible"));
// The power button is just for looks — it "refuses" to shut down the birthday.
powerBtn.addEventListener("click", () => shakeLogin("You can't shut down a birthday. 🎂"));

/* ============================================================
   SCREEN SWITCHING (shared fade transition)
============================================================= */

function switchScreen(fromEl, toEl, onActive) {
  fromEl.classList.add("fading-out");
  setTimeout(() => {
    fromEl.classList.remove("active", "fading-out");
    toEl.classList.add("active", "fading-in");
    if (onActive) onActive();
    setTimeout(() => toEl.classList.remove("fading-in"), 700);
  }, 550);
}

/* ============================================================
   SCREEN 2 — COVER PAGE / THE DIGI SCRAP.EXE WINDOW
   ------------------------------------------------------------
   The window pages through a fixed sequence of pre-made screenshots.
   Each picture already has minimize/maximize/close drawn into its
   top-right corner and Open/Cancel drawn at the bottom — but at a
   slightly different spot on every image (they're different exports,
   not identical templates), so each entry below carries its own
   measured button percentages ([left, top, width, height], all % of
   that image's own pixel dimensions) plus its own aspect ratio. To
   add another page: drop the image in /photos, add an entry here, and
   measure its five button boxes the same way (open the image in any
   viewer that shows pixel coordinates, divide by width/height, x100).
============================================================= */

const DIARY_PAGES = [
  {
    src: "photos/closed-diary.png",
    ratio: 1374 / 1145,
    buttons: {
      minimize: [89.16, 0.44, 3.71, 4.10],
      maximize: [92.94, 0.44, 3.64, 4.10],
      close: [96.72, 0.44, 2.91, 4.10],
      open: [41.85, 86.03, 15.28, 5.68],
      cancel: [80.42, 86.03, 15.28, 5.68],
    },
  },
  {
    src: "photos/first page.png",
    ratio: 1374 / 1145,
    buttons: {
      minimize: [89.16, 0.44, 3.71, 4.10],
      maximize: [92.94, 0.44, 3.64, 4.10],
      close: [96.72, 0.44, 2.91, 4.10],
      open: [41.85, 86.03, 15.28, 5.68],
      cancel: [80.42, 86.03, 15.28, 5.68],
    },
  },
  {
    src: "photos/second page.png",
    ratio: 1246 / 1036,
    buttons: {
      minimize: [88.68, 0.48, 3.05, 3.57],
      maximize: [91.89, 0.48, 2.81, 3.57],
      close: [95.10, 0.48, 2.81, 3.57],
      open: [40.53, 86.39, 17.25, 5.79],
      cancel: [77.05, 86.39, 19.26, 5.79],
    },
  },
  {
    src: "photos/third image.png",
    ratio: 1050 / 868,
    buttons: {
      minimize: [88.38, 0.35, 3.24, 3.46],
      maximize: [91.90, 0.35, 2.86, 3.46],
      close: [95.24, 0.35, 2.86, 3.46],
      open: [41.43, 85.60, 20.0, 5.76],
      cancel: [77.62, 85.25, 19.52, 5.76],
    },
  },
  {
    src: "photos/fourth image.png",
    ratio: 1050 / 868,
    buttons: {
      minimize: [88.38, 0.35, 3.24, 3.46],
      maximize: [91.90, 0.35, 2.86, 3.46],
      close: [95.24, 0.35, 2.86, 3.46],
      open: [41.43, 85.60, 20.0, 5.76],
      cancel: [77.62, 85.25, 19.52, 5.76],
    },
  },
];

let diaryPageIndex = 0;

function positionDiaryBtn(el, [left, top, width, height]) {
  el.style.left = `${left}%`;
  el.style.top = `${top}%`;
  el.style.width = `${width}%`;
  el.style.height = `${height}%`;
}

function renderDiaryPage(index) {
  diaryPageIndex = Math.max(0, Math.min(index, DIARY_PAGES.length - 1));
  const page = DIARY_PAGES[diaryPageIndex];
  diaryPageImage.src = page.src;
  coverWindow.style.aspectRatio = page.ratio;
  positionDiaryBtn(coverWindowMinimizeBtn, page.buttons.minimize);
  positionDiaryBtn(coverWindowMaximizeBtn, page.buttons.maximize);
  positionDiaryBtn(coverWindowCloseBtn, page.buttons.close);
  positionDiaryBtn(openBookBtn, page.buttons.open);
  positionDiaryBtn(coverWindowCancelBtn, page.buttons.cancel);
  diaryPrevBtn.disabled = diaryPageIndex === 0;
  diaryNextBtn.disabled = diaryPageIndex === DIARY_PAGES.length - 1;
}

// The desktop starts empty except for the Digi Scrap icon. Clicking it
// opens the window fresh, at the closed diary, and starts the song.
digiScrapIcon.addEventListener("click", () => {
  coverWindow.classList.add("open");
  diaryPrevBtn.classList.add("visible");
  diaryNextBtn.classList.add("visible");
  renderDiaryPage(0);
  playSong();
});

function dismissDiaryWindow() {
  coverWindow.classList.remove("open", "maximized");
  diaryPrevBtn.classList.remove("visible");
  diaryNextBtn.classList.remove("visible");
  renderDiaryPage(0); // so it re-opens showing the closed diary next time
}
coverWindowMinimizeBtn.addEventListener("click", dismissDiaryWindow);
coverWindowCloseBtn.addEventListener("click", dismissDiaryWindow);
// "Cancel" is also drawn into the picture — same dismiss behavior.
coverWindowCancelBtn.addEventListener("click", dismissDiaryWindow);

coverWindowMaximizeBtn.addEventListener("click", () => {
  coverWindow.classList.toggle("maximized");
});

// "Open..." is drawn into every page's picture — treated as "advance
// one page," same as the next arrow.
openBookBtn.addEventListener("click", () => renderDiaryPage(diaryPageIndex + 1));
diaryPrevBtn.addEventListener("click", () => renderDiaryPage(diaryPageIndex - 1));
diaryNextBtn.addEventListener("click", () => renderDiaryPage(diaryPageIndex + 1));

/* ============================================================
   MP3 PLAYER POPUP — streams via the YouTube IFrame API
   ------------------------------------------------------------
   YOUTUBE_VIDEO_ID is the only thing to change to swap the song.
   The player lives in the hidden #ytPlayerContainer (see index.html /
   .yt-hidden-player in css/style.css) — only our custom popup UI is
   ever visible. Closing/minimizing the popup only hides the window;
   the song keeps playing in the background, like a real mini-player.
============================================================= */

const YOUTUBE_VIDEO_ID = "5mKX21of0sM"; // "What Once Was" — Her's

let ytPlayer = null;
let ytReady = false;
let ytPollInterval = null;
let isSeekingRecordPlayer = false;
let pendingPlay = false;

// Actually starts playback, with a fallback for when the browser blocks
// audible autoplay. That happens specifically on the "pending" path
// below — the click that queued the play request was a real user
// gesture, but by the time the YouTube API finishes loading and this
// actually runs, the browser no longer credits it as one, since a
// browser's "this came from a click" window doesn't survive an async
// wait. If that happens, fall back to a muted start and unmute on the
// visitor's very next click/keypress (which, in practice, is almost
// immediate — they just clicked an icon).
function playWithAutoplayFallback() {
  ytPlayer.playVideo();
  setTimeout(() => {
    if (ytPlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
      ytPlayer.mute();
      ytPlayer.playVideo();
      const unmute = () => {
        ytPlayer.unMute();
        document.removeEventListener("click", unmute);
        document.removeEventListener("keydown", unmute);
      };
      document.addEventListener("click", unmute, { once: true });
      document.addEventListener("keydown", unmute, { once: true });
    }
  }, 500);
}

// Called by the Digi Scrap icon and the MP3 icon alike — either one
// should start the song. The YouTube API loads asynchronously, so if
// it isn't ready yet (e.g. the very first click right after the page
// loads), this remembers to play as soon as onReady fires instead of
// silently doing nothing.
function playSong() {
  if (ytReady) {
    playWithAutoplayFallback();
  } else {
    pendingPlay = true;
  }
}

// Called automatically by the YouTube IFrame API script once it's loaded.
window.onYouTubeIframeAPIReady = function () {
  ytPlayer = new YT.Player("ytPlayerContainer", {
    width: "1",
    height: "1",
    videoId: YOUTUBE_VIDEO_ID,
    playerVars: {
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      rel: 0,
    },
    events: {
      onReady: () => {
        ytReady = true;
        ytPlayer.setVolume(Number(rpVolumeInput.value));
        updateRecordPlayerUI();
        if (pendingPlay) {
          pendingPlay = false;
          playWithAutoplayFallback();
        }
      },
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.PLAYING) {
          startYtPolling();
        } else {
          stopYtPolling();
        }
        if (e.data === YT.PlayerState.ENDED) {
          // Loop back to the start automatically.
          ytPlayer.seekTo(0, true);
          ytPlayer.playVideo();
        }
        updateRecordPlayerUI();
      },
      // If this fires, open the browser console (F12) to see which
      // code logged below — that tells us exactly why it won't play
      // (e.g. 101/150 = embedding blocked, 2 = bad video ID).
      onError: (e) => {
        console.error("YouTube player error, code:", e.data);
      },
    },
  });
};

function startYtPolling() {
  if (ytPollInterval) return;
  ytPollInterval = setInterval(updateRecordPlayerUI, 1000);
}
function stopYtPolling() {
  clearInterval(ytPollInterval);
  ytPollInterval = null;
}

function formatTime(seconds) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function updateRecordPlayerUI() {
  const duration = ytReady ? ytPlayer.getDuration() : 0;
  const current = ytReady ? ytPlayer.getCurrentTime() : 0;
  rpCurrentTimeEl.textContent = formatTime(current);
  rpDurationTimeEl.textContent = isFinite(duration) && duration > 0 ? formatTime(duration) : "0:00";
  const pct = isFinite(duration) && duration > 0 ? (current / duration) * 100 : 0;
  rpProgressFill.style.width = `${pct}%`;
  if (!isSeekingRecordPlayer) rpSeekInput.value = String(Math.round(pct * 10));
}

musicPlayerIcon.addEventListener("click", () => {
  recordPlayerWindow.classList.add("open");
  playSong();
});

function dismissRecordPlayer() {
  recordPlayerWindow.classList.remove("open", "maximized");
}
rpMinimizeBtn.addEventListener("click", dismissRecordPlayer);
rpCloseBtn.addEventListener("click", dismissRecordPlayer);
rpMaximizeBtn.addEventListener("click", () => {
  recordPlayerWindow.classList.toggle("maximized");
});

rpPlayPauseBtn.addEventListener("click", () => {
  if (!ytReady) return;
  const state = ytPlayer.getPlayerState();
  if (state === YT.PlayerState.PLAYING) ytPlayer.pauseVideo();
  else ytPlayer.playVideo();
});
rpRewindBtn.addEventListener("click", () => {
  if (!ytReady) return;
  ytPlayer.seekTo(Math.max(0, ytPlayer.getCurrentTime() - 10), true);
});
rpForwardBtn.addEventListener("click", () => {
  if (!ytReady) return;
  const duration = ytPlayer.getDuration();
  const cap = isFinite(duration) && duration > 0 ? duration : ytPlayer.getCurrentTime() + 10;
  ytPlayer.seekTo(Math.min(cap, ytPlayer.getCurrentTime() + 10), true);
});
// The heart button restarts the track from the beginning.
rpLoopBtn.addEventListener("click", () => {
  if (!ytReady) return;
  ytPlayer.seekTo(0, true);
});
rpMuteBtn.addEventListener("click", () => {
  if (!ytReady) return;
  if (ytPlayer.isMuted()) ytPlayer.unMute();
  else ytPlayer.mute();
});

rpSeekInput.addEventListener("pointerdown", () => {
  isSeekingRecordPlayer = true;
});
rpSeekInput.addEventListener("input", () => {
  if (!ytReady) return;
  const duration = ytPlayer.getDuration();
  if (!isFinite(duration) || duration <= 0) return;
  ytPlayer.seekTo((Number(rpSeekInput.value) / 1000) * duration, true);
  updateRecordPlayerUI();
});
rpSeekInput.addEventListener("change", () => {
  isSeekingRecordPlayer = false;
});

rpVolumeInput.addEventListener("input", () => {
  if (ytReady) ytPlayer.setVolume(Number(rpVolumeInput.value));
});

updateRecordPlayerUI();

/* ============================================================
   SCREEN 3 — THE SCRAPBOOK
============================================================= */

// Chunk PHOTOS into pages of 4, padding the final page with
// "more memories coming soon" placeholders if it doesn't divide evenly.
function buildPages(photos, perPage) {
  const pages = [];
  for (let i = 0; i < photos.length; i += perPage) {
    const slice = photos.slice(i, i + perPage);
    while (slice.length < perPage) slice.push(null);
    pages.push(slice);
  }
  return pages.length ? pages : [[null, null, null, null]];
}

const PAGES = buildPages(PHOTOS, 4);

// Pair pages into left/right spreads.
const SPREADS = [];
for (let i = 0; i < PAGES.length; i += 2) {
  SPREADS.push([PAGES[i], PAGES[i + 1] || null]);
}

let currentSpread = 0;

// Deterministic "random" tilt per photo index so the layout doesn't
// jitter between renders, but still looks scattered/handmade.
function tiltFor(index) {
  const angles = [-6, 4, -3, 6, -5, 3, -4, 5];
  return angles[index % angles.length];
}

function chapterForPage(page) {
  const firstReal = page.find((p) => p !== null);
  return firstReal ? firstReal.chapter : "More to Come";
}

function renderPolaroid(photo, index) {
  if (!photo) {
    return `
      <div class="polaroid" style="transform: rotate(${tiltFor(index)}deg)">
        <div class="photo-frame">
          <div class="photo-placeholder" style="display:flex">
            <span class="ph-heart">🌸</span>
            <span class="ph-text">more memories coming soon</span>
          </div>
        </div>
        <div class="caption">to be continued...</div>
      </div>`;
  }
  return `
    <div class="polaroid" style="transform: rotate(${tiltFor(index)}deg)">
      <div class="photo-frame">
        <img src="${photo.src}" alt="${escapeHtml(photo.caption)}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="photo-placeholder">
          <span class="ph-heart">💗</span>
          <span class="ph-text">add your photo here</span>
          <span class="ph-filename">${escapeHtml(photo.src)}</span>
        </div>
      </div>
      <div class="caption">${escapeHtml(photo.caption)}</div>
    </div>`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// A couple of decorative stickers + a washi tape strip, positioned
// deterministically per page index so they don't jump around on re-render.
function renderPageDecor(pageIndex) {
  const positions = [
    { top: "6px", left: "6px" },
    { top: "10px", right: "14px" },
    { bottom: "8px", left: "40%" },
  ];
  let html = "";
  positions.forEach((pos, i) => {
    const glyph = MINI_STICKERS[(pageIndex + i) % MINI_STICKERS.length];
    const styleStr = Object.entries(pos).map(([k, v]) => `${k}:${v}`).join(";");
    html += `<span class="mini-sticker" style="${styleStr}">${glyph}</span>`;
  });
  const washiColor = WASHI_COLORS[pageIndex % WASHI_COLORS.length];
  html += `<div class="washi" style="top:-6px; right:20%; background:${washiColor}; transform: rotate(-6deg);"></div>`;
  return html;
}

function renderPageHTML(page, pageIndex) {
  const chapter = chapterForPage(page);
  const photosHtml = page.map((photo, i) => renderPolaroid(photo, pageIndex * 4 + i)).join("");
  return `
    ${renderPageDecor(pageIndex)}
    <h2 class="chapter-label">${escapeHtml(chapter)}</h2>
    <div class="photo-grid">${photosHtml}</div>
  `;
}

function renderEndPageHTML() {
  return `
    <div class="mini-sticker" style="top:10px;left:10px;">✨</div>
    <h2 class="chapter-label">The Next Chapter</h2>
    <div class="photo-grid">
      ${renderPolaroid(null, 900)}${renderPolaroid(null, 901)}${renderPolaroid(null, 902)}${renderPolaroid(null, 903)}
    </div>
  `;
}

function buildSpiralBinding() {
  const ringCount = 14;
  spiralBindingEl.innerHTML = Array.from({ length: ringCount }, () => `<div class="spiral-ring"></div>`).join("");
}

function updateIndicator() {
  pageIndicator.textContent = `Spread ${currentSpread + 1} of ${SPREADS.length}`;
}

function updateChapterHighlight() {
  const [pageA, pageB] = SPREADS[currentSpread];
  const activeChapters = new Set([chapterForPage(pageA), pageB ? chapterForPage(pageB) : null]);
  chaptersListEl.querySelectorAll("li").forEach((li) => {
    li.classList.toggle("active-chapter", activeChapters.has(li.dataset.chapter));
  });
}

function renderSpread(index) {
  currentSpread = Math.max(0, Math.min(index, SPREADS.length - 1));
  const [pageA, pageB] = SPREADS[currentSpread];
  const leftIndex = currentSpread * 2;
  const rightIndex = currentSpread * 2 + 1;
  pageLeftEl.innerHTML = renderPageHTML(pageA, leftIndex);
  pageRightEl.innerHTML = pageB ? renderPageHTML(pageB, rightIndex) : renderEndPageHTML();
  updateIndicator();
  updateChapterHighlight();
  prevPageBtn.disabled = currentSpread === 0;
  nextPageBtn.disabled = currentSpread === SPREADS.length - 1;
}

function goToSpread(index) {
  index = Math.max(0, Math.min(index, SPREADS.length - 1));
  if (index === currentSpread) return;
  pageLeftEl.classList.add("flip-out");
  pageRightEl.classList.add("flip-out");
  setTimeout(() => {
    renderSpread(index);
    pageLeftEl.classList.remove("flip-out");
    pageRightEl.classList.remove("flip-out");
    pageLeftEl.classList.add("flip-in");
    pageRightEl.classList.add("flip-in");
    setTimeout(() => {
      pageLeftEl.classList.remove("flip-in");
      pageRightEl.classList.remove("flip-in");
    }, 350);
  }, 350);
}

prevPageBtn.addEventListener("click", () => goToSpread(currentSpread - 1));
nextPageBtn.addEventListener("click", () => goToSpread(currentSpread + 1));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    chaptersWindow.classList.remove("open");
  }
  if (!screenBook.classList.contains("active")) return;
  if (e.key === "ArrowLeft") goToSpread(currentSpread - 1);
  if (e.key === "ArrowRight") goToSpread(currentSpread + 1);
});

/* ---- chapters sidebar (a little "folder window" you open on demand) ---- */
function jumpToChapter(chapterName) {
  const pageIndex = PAGES.findIndex((page) => page.some((p) => p && p.chapter === chapterName));
  if (pageIndex === -1) return;
  goToSpread(Math.floor(pageIndex / 2));
  chaptersWindow.classList.remove("open");
}

function buildChaptersList() {
  chaptersListEl.innerHTML = CHAPTERS.map(
    (name) => `<li data-chapter="${escapeHtml(name)}"><span class="chapter-icon">📁</span>${escapeHtml(name)}</li>`
  ).join("");
  chaptersListEl.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => jumpToChapter(li.dataset.chapter));
  });
}

chaptersToggle.addEventListener("click", () => {
  chaptersWindow.classList.toggle("open");
});
chaptersCloseBtn.addEventListener("click", () => {
  chaptersWindow.classList.remove("open");
});

/* ============================================================
   INIT
============================================================= */
buildSpiralBinding();
buildChaptersList();
renderSpread(0);

// Already unlocked on a previous visit? Skip straight to the desktop
// instead of showing the password screen again. To force the password
// screen again (e.g. while testing), clear it from the browser console:
// localStorage.removeItem("scrapbookUnlocked")
if (localStorage.getItem("scrapbookUnlocked") === "true") {
  screenPassword.classList.remove("active");
  screenCover.classList.add("active");
  playSong();
} else {
  passwordInput.focus();
}
