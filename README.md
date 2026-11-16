# Echelon Studio website

The Echelon Studio website is a React/Vite portfolio for games, interactive experiences, technology projects, and studio enquiries.

Production: [echelon-dc34f.web.app](https://echelon-dc34f.web.app)

## Technology

- React 19 with React Router
- Vite
- Tailwind CSS and daisyUI
- Three.js with React Three Fiber for the Earth scene
- Firebase Hosting
- EmailJS for the contact form

## Available routes

- `/` - homepage and interactive Earth scene
- `/about` - studio and developer profile
- `/projects` - project portfolio and GitHub activity
- `/fatf` - Fugitive Apprehension Task Force project page
- `/contact` - contact form
- `/privacy` - privacy policy
- `/terms` - terms of service

## Project structure

- `src/main.jsx` - application entry point and route definitions
- `src/components/` - reusable pages and UI components
- `src/index.css` - global styles and Tailwind layers
- `src/assets/` - source-only assets
- `public/` - files served directly, including images and 3D assets
- `firebase.json` - Firebase Hosting configuration
- `dist/` - generated production output; do not edit manually

## Local development

Install dependencies from the lockfile:

```powershell
npm ci
```

Start the Vite development server:

```powershell
npm run dev
```

Run the production checks:

```powershell
npm run lint
npm run build
```

Preview the generated production build locally:

```powershell
npm run preview
```

## Environment configuration

The contact form reads these Vite variables from a local `.env` file:

```text
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

`.env` is ignored by Git and must not be committed. Configure the production build environment before running `npm run build` if these values are not already available locally.

## Firebase Hosting deployment

Firebase Hosting is configured to serve `dist/` for project/site `echelon-dc34f`, with an SPA rewrite to `index.html` so direct navigation to React routes works.

The release workflow is:

1. Make and validate changes on `development`.
2. Commit and push `development`.
3. Review and merge `development` into `main`.
4. Switch to the updated `main` branch and install from the lockfile.
5. Run lint and build from `main`.
6. Deploy Hosting only.

```powershell
git switch development
npm ci
npm run lint
npm run build
git add <changed-files>
git commit -m "describe the change"
git push -u origin development

git switch main
git pull --ff-only origin main
npm ci
npm run lint
npm run build

firebase deploy --only hosting --project echelon-dc34f -m "deploy main"
```

If Firebase reports invalid or expired credentials, refresh the CLI session:

```powershell
firebase logout --all
firebase login
firebase projects:list
```

An optional preview deployment can be used before releasing to the live channel:

```powershell
firebase hosting:channel:deploy main-preview --only hosting --project echelon-dc34f
```

## Recent release summary

The latest release, commit `98adcba` (`update studio branding`), was merged into `main` and deployed successfully. It:

- Renamed general branding to **Echelon Studio**.
- Uses **Echelon Studio Limited** for legal, copyright, privacy, terms, developer, and publisher references.
- Replaced the unmaintained GitHub Readme Stats endpoint with GitHub Stats Extended.
- Removed satellite and orbit elements from the Earth scene while retaining the Earth, Moon, stars, clouds, and atmosphere.
- Improved the About, legal, contact, navigation, metadata, and project presentation areas.
- Verified the live homepage, About, Privacy, and Terms routes returned HTTP 200 after deployment.

## Release notes

Firebase Hosting deploys only the generated `dist/` output. Do not deploy from an unreviewed feature branch, edit `dist/` manually, or commit local credentials.
