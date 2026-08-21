# Dolphin Hotels — Landing Page

A static, dependency-free landing page for Dolphin Hotels (Dindigul, Tamil Nadu), built around room enquiries and direct bookings.

## Structure

```
index.html          Full page markup (semantic HTML, SEO meta, JSON-LD)
css/style.css        Design tokens + all component/section styles
js/config.js          Single source of truth for contact/booking links
js/main.js            Behaviour: nav, mobile menu, reveal-on-scroll, gallery lightbox
assets/logo/           Dolphin Hotels icon (navy/gold for light backgrounds, cream/gold for dark)
assets/images/         Placeholder photography (SVG) — swap for real photos
assets/favicon.png, assets/apple-touch-icon.png
```

## Before launch — replace placeholders

1. **Contact & booking details** — edit `js/config.js`:
   - `phoneDisplay`/`phoneHref` and `whatsappDisplay`/`whatsappHref` currently hold a **placeholder number** (`+91 98765 43210`) — replace with the hotel's real phone/WhatsApp number.
   - `email`/`emailHref`, `addressLine`, `receptionHours` — still marked `[ADD ...]`, fill in when available.
   - `bookingUrl` — Dolphin Hotels takes bookings by phone, so "Book Your Stay" / "Book This Room" currently dial the placeholder number above. If online booking is added later, point this (and `phoneHref`) at a real booking engine/OTA link instead.
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
