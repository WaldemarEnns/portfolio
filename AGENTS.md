# AGENTS.md

## Project Overview

This is a **Nuxt 3 Portfolio Website** for Waldemar Enns, built with modern web technologies and deployed on Vercel.

## Tech Stack

- **Framework**: Nuxt 3.19.3 (Vue 3)
- **Styling**: Tailwind CSS 3.4.17 with DaisyUI
- **Content**: @nuxt/content for markdown-based content
- **i18n**: Multi-language support (English, German, Spanish)
- **Database**: SQLite (better-sqlite3)
- **Email**: Postmark for contact form
- **Security**: Cloudflare Turnstile for form protection
- **Analytics**: Plausible
- **Icons**: FontAwesome
- **Animations**: motion-v
- **Testing**: Vitest with @nuxt/test-utils

## Available Scripts

```bash
npm run dev        # Start development server on http://localhost:3000
npm run build      # Build for production
npm run generate   # Generate static site
npm run preview    # Preview production build locally
```

## Project Structure

```
├── assets/           # Static assets (CSS, images)
├── components/       # Vue components
├── content/          # Markdown content files
├── i18n/            # Translation files (en-US.json, de-DE.json, es-ES.json)
├── layouts/         # Nuxt layouts
├── lib/             # Utility libraries
├── pages/           # Nuxt pages (auto-routing)
├── plugins/         # Nuxt plugins
├── public/          # Public static files
├── server/          # Server-side code (API routes)
├── types/           # TypeScript types
└── utils/           # Utility functions
```

## Key Configuration

### Localization
- Default locale: German (de)
- Supported locales: en, de, es
- Base URL: https://waldemarenns.de

### Route Rules
- `/` - Dynamic (not prerendered)
- `/imprint` - Prerendered
- `/privacy-policy` - Prerendered
- `/posts` - Dynamic (not prerendered)

### Environment Variables Required
- `POSTMARK_SERVER_TOKEN` - For email functionality
- `NUXT_TURNSTILE_SECRET_KEY` - Turnstile secret
- `NUXT_TURNSTILE_SITE_KEY` - Turnstile site key

## Development Guidelines

1. **Components**: Use Vue 3 Composition API with TypeScript
2. **Styling**: Use Tailwind CSS utility classes; DaisyUI for UI components
3. **Content**: Write content in markdown files under `/content`
4. **Icons**: Use FontAwesome via `@fortawesome/vue-fontawesome`
5. **Forms**: Use vee-validate with yup for validation
6. **Animations**: Use motion-v for Vue animations

## Build & Deployment

- Production builds target Vercel
- Static generation available via `npm run generate`
- Sitemap auto-generated at `/sitemap_index.xml`
- Robots.txt auto-generated

## Testing

```bash
# Run tests (Vitest)
npx vitest
```

## Common Tasks

### Adding a new page
Create a `.vue` file in `/pages` - Nuxt handles routing automatically.

### Adding content
Create markdown files in `/content` - they become available via @nuxt/content.

### Adding translations
Edit JSON files in `/i18n/` directory.

### Styling components
Use Tailwind classes. For component variants, use `class-variance-authority`.

## Working with Dependabot PRs

When asked to work on dependabot PRs labeled with "dependencies":

1. **Find and checkout the PR**
   - Use `gh pr list --label "dependencies" --state open` to find open dependabot PRs
   - Select a PR and checkout with `gh pr checkout <PR_NUMBER>`

2. **Rebase to latest main**
   - Fetch latest main: `git fetch origin main`
   - Attempt rebase: `git rebase origin/main`
   - If conflicts occur:
     - For `package-lock.json`: Delete and regenerate with `rm package-lock.json && npm install`
     - For `package.json`: Resolve manually keeping the updated dependencies
     - Continue rebase: `git rebase --continue`

3. **Test the build**
   - Run `npm install` (use `--legacy-peer-deps` if peer dependency conflicts occur)
   - Run `npm run build` to verify the build succeeds
   - If build fails due to dependency issues, investigate and fix

4. **Fix breaking dependency updates**
   - Check for peer dependency conflicts (common with vitest and @nuxt/test-utils)
   - Update conflicting dependencies to compatible versions
   - Test build again after fixes

5. **Push changes**
   - Push with `git push origin <branch-name>` (use `--force-with-lease` if rebased)

6. **Verify deployment**
   - Use `gh pr checks <PR_NUMBER>` to monitor CI/CD status
   - For Vercel deployments, check with `vercel list` and verify the deployment URL
   - If deployment fails, check logs with `vercel logs <deployment-url>`

7. **Update PR**
   - Add comments documenting any manual fixes made
   - Update PR description if significant changes were made
   - Provide clean, atomic commits for any manual fixes
