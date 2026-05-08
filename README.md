# Tactika – Football Tactics Learning (Next.js + Vercel)

## Stack
- Next.js (App Router) + TypeScript + Tailwind
- Vercel Postgres (auth + content), Vercel Functions
- Stripe subscriptions
- OpenAI API (AI tactical assistant)

## Local setup
```bash
cd tactika
npm install
npm run dev
```

## Environment variables
Create `.env.local`:
```
DATABASE_URL=postgres://...
JWT_SECRET=replace-this
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_ID=price_123   # recurring price for $4.99
STRIPE_WEBHOOK_SECRET=whsec_123
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Database
- Run `psql $DATABASE_URL -f prisma.sql` to create tables.
- Seed content via SQL or app routes.

## Deploy to Vercel
1) Push this repo to GitHub.  
2) In Vercel, import repo → Framework: Next.js.  
3) Add env vars above.  
4) Create Vercel Postgres database; copy `DATABASE_URL`.  
5) `psql` into Vercel Postgres and run `prisma.sql`.  
6) Create Stripe price and webhook endpoint: `https://<vercel-app>/api/stripe/webhook`.  
7) Deploy; Vercel will build automatically.

## Stripe webhook (local)
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## API surface
- `POST /api/auth/signup` {email, password}
- `POST /api/auth/login` {email, password}
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `GET /api/lessons` (freemium gating)
- `POST /api/chat` {question, match?} (premium required)
- `POST /api/stripe/checkout`
- `POST /api/stripe/webhook`

## Notes
- Auth uses JWT in httpOnly cookie (7 days).  
- Premium gating checks `session.isPremium`.  
- Chat route injects context from local content and OpenAI.  
- Tailwind tokens follow light/dark palette from brief.  
- `postinstall` disables telemetry to keep builds quiet.
