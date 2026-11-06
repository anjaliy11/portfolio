# Anjali Yadav, portfolio

A static site: plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.

```
index.html      all content (hero, work, open source, skills, achievements, certificates, about, contact)
css/styles.css  styles
js/main.js      turtle animation, terminal, section tips, header progress
favicon.svg
vercel.json     tells Vercel to serve the folder as-is
```

## Run it locally

Pick one:

```bash
# 1. Node
npm start                      # opens http://localhost:3000

# 2. Python
python3 -m http.server 3000    # then open http://localhost:3000
```

You can also double-click `index.html`. Fonts load from Google Fonts, so you need internet.

## Deploy

### Vercel (keeps your existing project and URL)

1. Commit and push:
   ```bash
   git add -A && git commit -m "New portfolio" && git push
   ```
2. Vercel redeploys on push. `vercel.json` turns off the SvelteKit build. If the build still fails, open Project Settings, Build and Deployment, set Framework Preset to Other, clear Build Command and set Output Directory to `.`.

### Vercel (new project)

Push this folder to a new GitHub repo, then Vercel dashboard: Add New, Project, import the repo, Deploy. Or from the terminal: `npx vercel --prod`.

### Netlify or GitHub Pages

- Netlify: drag this folder onto app.netlify.com/drop.
- GitHub Pages: push to a repo, Settings, Pages, deploy from the `main` branch, root folder.


