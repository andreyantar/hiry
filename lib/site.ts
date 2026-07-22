// Single source of truth for the canonical site URL.
// Priority: explicit env → Vercel's production domain (auto-switches to a custom
// domain like hiry-agency.ru once connected) → the intended final domain.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://hiry-agency.ru");
