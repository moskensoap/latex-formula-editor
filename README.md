# Offline LaTeX Formula Editor

This project is inspired by various online LaTeX formula editors and aims to provide a lightweight, offline-first alternative.

## Features

- Click-to-insert LaTeX elements at the cursor to reduce memory load.
- Real-time rendering using KaTeX or MathJax (selectable via dropdown).
- Copy-to-clipboard button for easy formula reuse.
- Minimal and clean file structure for easy customization.
- Works locally by simply opening `index.html` in a browser (cross-platform).
- Supports deployment via web servers like Nginx or Apache, or inside an Nginx-based Docker container (Docker support coming soon).

## Rendering Engines

KaTeX and MathJax are bundled in this project for convenience. You may update them by replacing the corresponding folders with the latest release from:

- KaTeX: https://github.com/KaTeX/KaTeX
- MathJax: https://github.com/mathjax/MathJax

If the release version changes the folder structure, update the paths in the source code accordingly.

## Contributions

Suggestions and feedback are welcome. Please open an issue to start the discussion.

---

Enjoy using this project!
