# Fitness Sports Center

A responsive, single-page static website for the Fitness Sports Center.  
Styled to match the Figma design — dark black/brown palette with golden-yellow accent.

## Figma Design

- <https://www.figma.com/design/yvDdfzPfyNFL9aFqMSNNfe/Untitled?node-id=0-1&t=JXtBJ9CQfZiF7Sm0-1>

## Running in VS Code (recommended)

> **No build step required** — this is a plain HTML/CSS/JS project.

### Step 1 — Install the Live Server extension

When you open the project folder in VS Code you should see a pop-up:  
*"Do you want to install the recommended extensions?"* → click **Install**.

If the pop-up doesn't appear:
1. Open the Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search **Live Server** (by Ritwick Dey) and click **Install**

### Step 2 — Start Live Server

Two ways to launch it:

| Method | Steps |
|---|---|
| Status bar | Click the **Go Live** button at the bottom-right of VS Code |
| Right-click | Right-click `index.html` in the Explorer → **Open with Live Server** |

The site opens at **`http://127.0.0.1:5500`** and hot-reloads whenever you save a file.

### Alternative — open directly in a browser

Double-click `index.html` to open it as a `file://` URL.  
Everything works except features that require a real server (none in this project).

## Project structure

```
fitness-sports-center/
├── index.html               — page markup (all sections)
├── .gitignore
├── README.md
├── .vscode/
│   ├── extensions.json      — recommends Live Server
│   ├── settings.json        — Live Server config (port 5500, root /)
│   └── launch.json          — browser debug launch configs
└── assets/
    ├── css/
    │   └── styles.css       — all styles (dark/gold theme, responsive)
    ├── js/
    │   └── main.js          — smooth scroll, nav toggle, form feedback
    └── images/
        └── .gitkeep         — drop static images here
```

## Sections

| Section | Description |
|---|---|
| **Nav** | Sticky header, logo emblem, anchor links, mobile hamburger |
| **Hero** | Full-viewport background, CTA buttons |
| **About** | Stats row, gym photo, copy matching Figma |
| **Services** | 3×2 card grid with large icon boxes |
| **Plans** | Basic / Pro (featured) / Elite pricing cards |
| **Contact** | Icon contact info, map placeholder, message form |
| **Footer** | Logo, copyright, social icons |
