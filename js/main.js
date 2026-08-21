(function () {
  "use strict";

  var cfg = window.HOTEL_CONFIG || {};

  /* ---------- Apply centralized contact config to the DOM ---------- */
  function applyConfig() {
    document.querySelectorAll("[data-hotel-text]").forEach(function (el) {
      var key = el.getAttribute("data-hotel-text");
      if (cfg[key]) el.textContent = cfg[key];
    });

    document.querySelectorAll('[data-hotel-link="call"]').forEach(function (el) {
      el.href = cfg.phoneHref || "#contact";
    });
    document.querySelectorAll('[data-hotel-link="whatsapp"]').forEach(function (el) {
      el.href = cfg.whatsappHref || "#contact";
    });
    document.querySelectorAll('[data-hotel-link="email"]').forEach(function (el) {
      el.href = cfg.emailHref || "#contact";
    });
    document.querySelectorAll('[data-hotel-link="booking"]').forEach(function (el) {
      el.href = cfg.bookingUrl || "#contact";
    });
    document.querySelectorAll('[data-hotel-link="directions"]').forEach(function (el) {
      el.href = cfg.mapDirectionsUrl || "#";
    });
    document.querySelectorAll('[data-hotel-link="instagram"]').forEach(function (el) {
      el.href = (cfg.social && cfg.social.instagram) || "#";
    });
    document.querySelectorAll('[data-hotel-link="facebook"]').forEach(function (el) {
      el.href = (cfg.social && cfg.social.facebook) || "#";
    });

    var maps = document.querySelectorAll("[data-hotel-map]");
    maps.forEach(function (wrap) {
      if (cfg.mapEmbedSrc) {
        var iframe = document.createElement("iframe");
        iframe.src = cfg.mapEmbedSrc;
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        iframe.title = "Dolphin Hotels location map";
        wrap.innerHTML = "";
        wrap.appendChild(iframe);
      }
    });
  }

  /* ---------- Sticky header shadow on scroll ---------- */
  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  function initMobileMenu() {
    var toggle = document.querySelector(".nav__toggle");
    var menu = document.querySelector(".mobile-menu");
    if (!toggle || !menu) return;

    function close() {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    function open() {
      toggle.setAttribute("aria-expanded", "true");
      menu.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      expanded ? close() : open();
    });

    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Gallery lightbox ---------- */
  function initLightbox() {
    var triggers = document.querySelectorAll("[data-lightbox]");
    var lightbox = document.querySelector(".lightbox");
    if (!triggers.length || !lightbox) return;

    var img = lightbox.querySelector("img");
    var caption = lightbox.querySelector(".lightbox__caption");
    var closeBtn = lightbox.querySelector(".lightbox__close");
    var lastFocused = null;

    function open(src, alt, cap) {
      lastFocused = document.activeElement;
      img.src = src;
      img.alt = alt || "";
      caption.textContent = cap || "";
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }
    function close() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
      img.src = "";
      if (lastFocused) lastFocused.focus();
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var fullImg = trigger.querySelector("img");
        var cap = trigger.getAttribute("data-caption") || "";
        open(fullImg.src, fullImg.alt, cap);
      });
    });

    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) close();
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyConfig();
    initHeaderScroll();
    initMobileMenu();
    initReveal();
    initLightbox();
    initYear();
  });
})();
