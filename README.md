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

### Vercel (redeploy to the same domain)

This is a static site: `index.html` is in the repository root, and there is no build step or dependency install.

1. In Vercel, open the **existing project** that owns your domain. Do not create a new project if you want to keep the same domain.
2. Under **Settings → Build and Deployment**, use:
   - **Root Directory:** repository root (`.`)
   - **Framework Preset:** Other
   - **Build Command:** blank / no override
   - **Install Command:** blank / no override
   - **Output Directory:** `.`
3. Save the settings, then redeploy the latest commit from the production branch as a **Production** deployment. If available, redeploy without the build cache.
4. Once the deployment is ready, check **Settings → Domains** and confirm the domain is assigned to this project.

To publish changes, commit and push to the connected production branch:
   ```bash
   git add -A && git commit -m "New portfolio" && git push
   ```



