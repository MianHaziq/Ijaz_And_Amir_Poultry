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

## The logo

`public/logo.png` is the client's own rooster-and-leaf mark, lifted off the flat
white plate it was supplied on. Its counters — the rooster's face, the gaps
between the leaves — are **transparent**, exactly as they are in the artwork, so:

* on light surfaces (the header) the mark is placed bare;
* on dark surfaces (the footer, the preloader) it is seated on the cream disc,
  the way the business card always presents it. `<LogoMark plate />` does this.

Anything else would let the background flood the rooster's face.

`src/app/icon.png` and `src/app/apple-icon.png` are cut from the same file by
Next's icon file convention — there is no `favicon.ico`. Both are flattened
onto **opaque white**, for the same reason the plate exists: a transparent
favicon would let a dark browser tab flood the rooster's face. All of them,
plus the `logo` in the page's `LocalBusiness` structured data, trace back to
that one asset.

`Logo` sets the full lockup as the card does: mark, **IJAZ & AMIR**, spaced
`POULTRY FARM`, the `HEALTHY BIRDS • BETTER TOMORROW` strap, and the green-to-gold
rule that closes it. `compact` drops the last two for the condensed header that
appears once the visitor scrolls past the hero.

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

## Preloader

`src/components/Preloader.tsx` is a brand curtain over the first paint. It is
rendered server-side as the first thing in `<body>`, so there is no flash of an
unstyled page before it appears.

The progress is **real**: it tracks webfont readiness and the window `load`
event, with an asymptotic creep in between so the bar keeps moving on a slow
line without ever pretending to be finished. One `requestAnimationFrame` loop
writes a single `--p` custom property (0-100) straight to the DOM — the ring,
the bar and the readout all derive from that one number, and React re-renders
only when the phase changes, not sixty times a second.

It shows for at least 1.15s (0s if the visitor asks for reduced motion) and at
most 5s, so a slow connection can never hold the site hostage. Then the curtain
leaves upward on the brand wave — the same shape that separates every section
below it.

⚠️ The curtain and the scroll-reveals are coupled through `src/lib/appReady.ts`.
Reveals do **not** start observing until the curtain lifts, otherwise every
section inside the first viewport would play its entrance out of sight and be
sitting still by the time it was uncovered. That module carries its own timeout
failsafe: content held by a reveal is at `opacity: 0`, so if the preloader ever
dies before reporting in, the page must release itself rather than stay blank.
`<noscript>` in the layout neutralises both for the same reason.

---

## Contact

**There is no enquiry form.** There is no mail service wired up for this build,
and a form whose submit button only opens WhatsApp is a longer road to the same
place — so `src/components/Contact.tsx` puts the farm's real channels in front
of the visitor directly: the two phone numbers, WhatsApp, email, and the
address with a map.

It holds no state, so it is a server component. If a real mail backend is
provisioned later, a form can be added back as a client child of this section
without disturbing the rest of it.

---

## Handover / still needed from the client

1. **A vector of the mark.** The real mark is now in place, but as a raster
   (`public/logo.png`, cut out of the supplied 1254px PNG). An `.svg` would stay
   sharp at any size and weigh almost nothing — drop it in, point the import in
   `src/components/Logo.tsx` at it, and regenerate the two app icons from it.
2. **More farm photography.** Only the two banner crops exist, so the same scene
   carries the hero, the About frame and the cinematic band. Four or five real
   photos (sheds interior, feed handling, birds, staff at work) would remove the
   repetition and lift the whole page.
3. **A live domain** — set `NEXT_PUBLIC_SITE_URL` at deploy time so Open Graph
   image URLs resolve absolutely.
4. Optional: confirmed figures (capacity, years operating, flocks per year) for
   a statistics band in the About section.
