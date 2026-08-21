/**
 * Dolphin Hotels — centralized site configuration.
 * Update the values below and every booking/contact link across the
 * site (nav, hero, CTA band, contact section, footer, mobile bar)
 * updates automatically. Replace ALL "[ADD ...]" placeholders with the
 * hotel's real details before launch.
 */
window.HOTEL_CONFIG = {
  // PLACEHOLDER NUMBER — replace with the hotel's real phone number before launch.
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",

  // PLACEHOLDER NUMBER — replace with the hotel's real WhatsApp number before launch.
  whatsappDisplay: "+91 98765 43210",
  whatsappHref: "https://wa.me/919876543210?text=Hi%20Dolphin%20Hotels%2C%20I%27d%20like%20to%20enquire%20about%20a%20room.",

  email: "[ADD EMAIL]",
  emailHref: null, // e.g. "mailto:stay@dolphinhotels.in"

  // Street/building details still needed — Plus Code + coordinates below are
  // confirmed (from the property's Google Plus Code, 9X7F+Q6 Dindigul).
  addressLine: "[ADD BUILDING/STREET DETAILS], 9X7F+Q6, Dindigul, Tamil Nadu, India",

  receptionHours: "[ADD DETAILS] — Reception open 24 hours (confirm before launch)",

  // Dolphin Hotels takes bookings by phone — "Book Your Stay" / "Book This Room"
  // call the placeholder number above. Swap phoneHref (and this) for a real
  // booking engine / OTA link if online booking is added later.
  bookingUrl: "tel:+919876543210",

  // Decoded from the property's Google Plus Code (9X7F+Q6 Dindigul) — confirm
  // the pin lands correctly on Google Maps before relying on it for signage.
  mapEmbedSrc: "https://maps.google.com/maps?q=10.364437,77.973062&z=17&output=embed",
  mapDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=10.364437,77.973062",

  social: {
    instagram: "#",
    facebook: "#",
  },
};
