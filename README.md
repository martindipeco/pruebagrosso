# Studio Arc — Website Guide

## File Structure

```
site/
├── index.html          ← Home page
├── about.html          ← About Us page
├── contact.html        ← Contact page
├── projects.html       ← Projects gallery
├── project-detail.html ← Individual project (used for ALL projects)
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── components.js   ← Navbar + Footer (shared)
│   ├── main.js         ← All interactions
│   └── placeholders.js ← Remove once you have real photos
└── images/             ← Put your photos here
```

---

## How to open the site

Open `index.html` in any browser. No server needed.

---

## How to replace placeholder images

Every placeholder is a colored box with a label. To replace one:

1. Put your photo in the `images/` folder (e.g. `images/meridian-exterior.jpg`)
2. Find the `<div class="img-placeholder" ...>` tag
3. Replace it with: `<img src="images/meridian-exterior.jpg" alt="Description">`

Example — before:
```html
<div class="img-placeholder" style="..." data-label="Meridian House"></div>
```

After:
```html
<img src="images/meridian-house.jpg" alt="The Meridian House — exterior view">
```

---

## How to replace videos in the carousel

Open `index.html` and find the three `<video>` tags.
Change the `src` attribute to your own video file:

```html
<video src="videos/my-project.mp4" preload="metadata" playsinline loop></video>
```

Put your video files in a `videos/` folder.

---

## How to add a new project

1. Open `project-detail.html` — scroll to the bottom to find the `PROJECTS` object in the `<script>` tag.
2. Copy one of the existing entries (e.g. the block starting with `1: {`) and paste it.
3. Change the number (e.g. `9:`) and fill in the new content.
4. Open `projects.html` and copy one of the `<a class="project-card">` blocks.
5. Change the `href` to `project-detail.html?id=9` and update the text.

---

## How to change colours

Open `css/style.css` and look for the `:root` block at the very top:

```css
:root {
  --black: #0a0a0a;
  --white: #f5f2ee;
  --accent: #c8a96e;   ← This is the gold colour used everywhere
  ...
}
```

Change `--accent` to any colour you like (e.g. `#2563eb` for blue).

---

## How to change the studio name

Do a Find & Replace (Ctrl+H) across all `.html` and `.js` files:
- Replace `Studio Arc` with your studio name
- Replace `studioarc.design` with your real email domain

---

## Hosting (free options)

- **Netlify**: drag and drop the `site/` folder at netlify.com — live in 30 seconds
- **GitHub Pages**: push to a GitHub repo, enable Pages in settings
- **Cloudflare Pages**: connect your GitHub repo

---

## Once you have real photos, delete `js/placeholders.js`

Also remove this line from `project-detail.html`:
```html
<script src="js/placeholders.js"></script>
```
