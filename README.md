# Ijaz & Amir Poultry Farm — Website

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

---

## Brand system

Colours were **sampled from the client's own artwork**, not guessed. The deep
green is `#013E20`, taken directly from the wave in `banner1.png`. All tokens
live in one place, `src/app/globals.css` under `@theme`:

| Token | Value | Use |
| --- | --- | --- |
| `deep` | `#013E20` | primary brand green, dark sections, buttons |
| `deep-soft` | `#04502A` | hover state on deep surfaces |
| `forest` | `#115324` | sustainability band |
| `green` | `#2F8F43` | accent text, eyebrows, icons |
| `leaf` / `lime` | `#57A83C` / `#9CBF5F` | highlights on dark backgrounds |
| `gold` / `gold-soft` | `#C9A227` / `#E3C05C` | the hairline accent from the print material |
| `cream` | `#F6F8F3` | alternating light section |

Type: **Plus Jakarta Sans** (headings, closest to the wordmark's weight),
**Inter** (body), **Caveat** (the handwritten brand script lines only).

Reusable classes: `.shell` (page gutter), `.eyebrow` (section label),
`.gold-rule` (the gold underline).

---

## Content source of truth

Everything factual — phone numbers, email, address, proprietor, registration
number — lives in **`src/lib/site.ts`**. Change it there and the whole site,
including the SEO metadata and the LocalBusiness structured data, follows.

Nothing on the site is invented. The registration details come from the
Schedule-VI certificate supplied by the client. **No statistics, capacities,
bird numbers or certifications were fabricated**, per the brief — if the client
wants figures on the site, add them to `site.ts` once confirmed.

---

## How the banners are used

`banner1.png` (1671×941, landscape) and `banner2.png` (941×1672, portrait) are
the **same scene in two crops** — a desktop cut and a mobile cut — not two
slides. So they are used as responsive art rather than a carousel:

- **Hero** — `banner1` above `md`, `banner2` below, each at its native aspect
  ratio so the sheds, silos and hen are never cropped away. Slow Ken Burns push
  + light scroll parallax.
- **About** — `banner2` in the portrait frame. This matters: with
  `object-cover`, a frame *narrower* than the source crops horizontally and
  `object-position`'s Y value does nothing. Using the portrait asset in a
  portrait frame is what allows the view to sit on the farm instead of the sky.
- **Modern Farming** — `banner1` full-bleed as a wide cinematic band. The band
  is deliberately wider than 16:9 so the crop is vertical and
  `object-[center_88%]` pulls the frame down onto the sheds and silos.
- **Sustainability** — `banner1` far back at low opacity under a gradient.

The hero scrim is intentionally narrow and masked away before it reaches the
green wave, so the commissioned artwork keeps its saturation.

---

## Motion

No animation library — a single `Reveal` primitive
(`src/components/Reveal.tsx`) drives one shared IntersectionObserver, with the
actual motion defined in CSS so `prefers-reduced-motion` switches **all** of it
off in one place.

```tsx
<Reveal direction="up" delay={120}>…</Reveal>
// direction: "up" | "down" | "left" | "right" | "scale"
```

⚠️ **Do not hide a revealed element with a zero-area `clip-path`.** Its
intersection ratio is then always 0, the observer can never fire, and the
element stays invisible forever. (This bit us during the build.) The observer
uses `threshold: 0` for the same reason — a tall element near the end of the
document can never reach a ratio target.

---

## Contact form

There is **no mail service wired up**, so rather than fake a "message sent"
confirmation, the form composes the enquiry and hands it to a channel the farm
actually monitors: WhatsApp by default, `mailto:` as a fallback.

To move to a real backend later, replace the `submit` handler in
`src/components/Contact.tsx` — the markup does not need to change.

---

## Handover / still needed from the client

1. **The official logo vector.** The header lockup reproduces the wordmark from
   the letterhead, and `LogoMark` in `src/components/Logo.tsx` is a *simplified
   vector interpretation* of the rooster-and-leaf mark. Drop the real file in as
   `/public/logo.svg` and swap the `LogoMark` body for an `<img>` — nothing else
   changes.
2. **More farm photography.** Only the two banner crops exist, so the same scene
   carries the hero, the About frame and the cinematic band. Four or five real
   photos (sheds interior, feed handling, birds, staff at work) would remove the
   repetition and lift the whole page.
3. **A live domain** — set `NEXT_PUBLIC_SITE_URL` at deploy time so Open Graph
   image URLs resolve absolutely.
4. Optional: confirmed figures (capacity, years operating, flocks per year) for
   a statistics band in the About section.
