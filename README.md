# SST Template

SST-based TypeScript monorepo template with a Next.js frontend and serverless API workspaces for rapid serverless app development.

## Contents

- `app/packages/frontend` — Next.js frontend
- `app/packages/api` — serverless API (lamda)

## Prerequisites

- Node.js 20+
- Docker
- AWS credentials configured for SST deploy (if you plan to deploy)

## Install

From the repository root:

```bash
# install dependencies
npm install
```

## Development

Start SST (local infra + API + frontend integration):

```bash
# run SST dev (root package.json "dev" script)
npm run dev
```
