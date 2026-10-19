# ApplyPilot

ApplyPilot is a monorepo with separate client and server workspaces.

## Project structure

- `client/` — React application built with Vite and Tailwind CSS.
- `server/` — Node.js API built with Express and Mongoose for MongoDB.
- `.github/copilot-instructions.md` — project rules for future contributions and suggestions.

Firebase Authentication is used for identity. Copy each workspace's `.env.example` to `.env` and provide the required local values before starting the applications.

## Requirements

- Node.js 20 or newer
- npm
- MongoDB for running the API

## Setup

Install dependencies from the repository root:

```sh
npm install
```

Configure `server/.env` and `client/.env` from the example files, then run each workspace in a separate terminal:

```sh
npm run dev --workspace server
npm run dev --workspace client
```

The API health endpoint is available at `http://localhost:3000/api/health` by default.
