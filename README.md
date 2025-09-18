# Volleyball Resume Site

A React + Tailwind responsive resume site for a volleyball athlete.

## 🚀 How to Deploy on GitHub Pages

1. Fork or clone this repo to your GitHub account.
2. In your local environment:
   ```bash
   npm install
   npm run build
   ```
   This creates a `dist/` folder.
3. Install `gh-pages` if not already installed:
   ```bash
   npm install --save-dev gh-pages
   ```
4. Add these lines to your `package.json`:
   ```json
   {
     "homepage": "https://<USERNAME>.github.io/volleyball_resume_site",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
5. Deploy with:
   ```bash
   npm run deploy
   ```
6. Visit your site at:  
   `https://<USERNAME>.github.io/volleyball_resume_site`

---

If deploying to your **username.github.io** root instead of a repo, remove the `base` setting in `vite.config.js`.
