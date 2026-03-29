# Shree Radhey Technology Website

## Project info

**URL**: https://www.shreeradheytechnology.com

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Build the project and deploy the `dist` folder to your preferred hosting provider.

## Hosting configuration

### Environment variables

Create a `.env` file locally (not committed) or set the same variables in your hosting provider:

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_NABL_CERTIFICATE_URL`
- `VITE_NABL_SCOPE_URL`

### SPA routing

If your host requires SPA fallback rules, ensure all routes point to `index.html`.

Examples:

- **Netlify**: add a `_redirects` file with `/* /index.html 200`
- **Vercel**: add a `vercel.json` with a rewrite to `/index.html`
- **Nginx**: use `try_files $uri /index.html;`

### Assets

- Place static assets in `public/` so they are available at the root path (e.g. `/logo.png`).
