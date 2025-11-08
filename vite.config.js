import { defineConfig } from 'vite'

// When running in GitHub Actions the environment variable GITHUB_REPOSITORY
// is available in the form "owner/repo". We extract the repo name and
// set base to "/repo-name/" so built assets load correctly on GitHub Pages.
// Locally you can override this if you plan to run `npm run deploy` by
// editing this file or setting GITHUB_REPOSITORY in your environment.
export default defineConfig({
  base: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/',
})
