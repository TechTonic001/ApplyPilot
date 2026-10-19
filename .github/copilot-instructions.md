# ApplyPilot project rules

- **Stack:** React (Vite) and Tailwind on the client; Node.js, Express, and Mongoose (MongoDB) on the server; Firebase Authentication. Do not introduce Prisma, PostgreSQL, or any other database or ORM.
- Use ES modules everywhere.
- Validate all request bodies with Zod.
- Every route that touches user data must verify the Firebase ID token and check that the resource belongs to the requesting user.
- Never log tokens, CVs, emails, or personal data.
- Secrets come only from environment variables; never hardcode them.
- Never scrape websites. Use official APIs only.
- Never send an email unless the user explicitly approved that specific application.
- Never guess or generate an email address; only use addresses found in the job posting text.
- Keep functions small, add JSDoc to services, and write tests for any non-trivial logic.
