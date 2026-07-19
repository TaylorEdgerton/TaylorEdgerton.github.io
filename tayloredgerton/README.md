# tayloredgerton.com.au

Source for [tayloredgerton.com.au](https://tayloredgerton.com.au), a personal portfolio and resume built with [Astro](https://astro.build).

## Commands

Run from the repository root:

```bash
make install     # Install locked dependencies
make dev-run     # Start the local site at localhost:4321
make build       # Build the site and deployed PDF resume
make resume      # Build and refresh the local and public PDF copies
make preview     # Preview the production build
make all         # Install dependencies and build everything
make clean       # Remove generated output
make help        # List available targets
```

## Content

- Edit `src/data/profile.ts` for personal details, experience, education, projects, skills, website copy, and resume copy.
- Add blog posts under `src/content/blog/`.
- Add long-form project pages under `src/content/projects/`.

The homepage, HTML resume at `/resume/`, and PDF resume share the structured profile data.

## Resume

After changing resume content, run `make resume` and commit the refreshed `public/assets/pdf/Taylor_Edgerton_Resume.pdf`. An ignored distribution copy is also written to `generated/`.

## Deployment

Push to `main`. GitHub Actions builds the Astro site, generates the current PDF, and deploys the output to GitHub Pages.
