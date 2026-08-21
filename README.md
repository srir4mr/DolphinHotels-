# Dolphin Hotels — Landing Page

A static, dependency-free landing page for Dolphin Hotels (Dindigul, Tamil Nadu), built around room enquiries and direct bookings.

## Structure

```
index.html          Full page markup (semantic HTML, SEO meta, JSON-LD)
css/style.css        Design tokens + all component/section styles
js/config.js          Single source of truth for contact/booking links
js/main.js            Behaviour: nav, mobile menu, reveal-on-scroll, gallery lightbox
assets/logo/           Dolphin Hotels mark (teal for light backgrounds, cream for dark)
assets/images/         Placeholder photography (SVG) — swap for real photos
assets/favicon.svg
```

## Before launch — replace placeholders

1. **Contact & booking details** — edit `js/config.js`:
   - `phoneHref`, `whatsappHref`, `email`/`emailHref`, `addressLine`, `receptionHours`
   - `bookingUrl` (currently routes to the on-page enquiry section — point it at a real booking engine/OTA link once available)
   - `mapEmbedSrc` (Google Maps embed URL for the exact property location)
2. **Photography** — replace files in `assets/images/` with real photos of the same name (or update the `src` attributes in `index.html`). Each placeholder is a labelled SVG so it's obvious what to shoot/replace.
3. **Rooms, amenities, reviews** — edit directly in `index.html` (Rooms, Amenities, Reviews sections). All prices, bed counts, occupancy and amenity lists are marked as placeholders — do not treat them as real hotel data.
4. **SEO** — update the canonical URL, Open Graph URL/image, and the `Hotel` JSON-LD block in `<head>` once the site has a live domain.

## Local preview

Any static file server works, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
