# Setup Instructions

## Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your Firebase credentials in `.env`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

The `.env` file is gitignored for security. Make sure to set environment variables in your deployment platform (Vercel, Netlify, etc.)
