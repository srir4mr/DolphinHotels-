/**
 * Dolphin Hotels — centralized site configuration.
 * Update the values below and every booking/contact link across the
 * site (nav, hero, CTA band, contact section, footer, mobile bar)
 * updates automatically. Replace ALL "[ADD ...]" placeholders with the
 * hotel's real details before launch.
 */
window.HOTEL_CONFIG = {
  // Digits only, with country code, no spaces or symbols e.g. "919876543210"
  phoneDisplay: "[ADD PHONE NUMBER]",
  phoneHref: null, // e.g. "tel:+919876543210" — leave null until a real number is added

  whatsappDisplay: "[ADD WHATSAPP NUMBER]",
  whatsappHref: null, // e.g. "https://wa.me/919876543210?text=Hi%20Dolphin%20Hotels..."

  email: "[ADD EMAIL]",
  emailHref: null, // e.g. "mailto:stay@dolphinhotels.in"

  addressLine: "[ADD COMPLETE HOTEL ADDRESS], Dindigul, Tamil Nadu, India",

  receptionHours: "[ADD DETAILS] — Reception open 24 hours (confirm before launch)",

  // Replace with the hotel's real booking engine / OTA link when available.
  // Until then, CTAs route to the on-page enquiry section.
  bookingUrl: "#contact",

  // Replace with a Google Maps embed src for the exact property location.
  mapEmbedSrc: null,
  mapDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Dolphin+Hotels+Dindigul+Tamil+Nadu",

  social: {
    instagram: "#",
    facebook: "#",
  },
};
