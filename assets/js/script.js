const weddingDate = new Date("2026-09-07T18:30:00+05:30");
const weddingLocation = "https://www.google.com/maps/search/?api=1&query=SGS+Hall+Suchindram+Nagercoil+Tamil+Nadu";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const mapLink = document.getElementById("mapLink");
if (mapLink) {
  mapLink.href = weddingLocation;
}

if (window.innerWidth > 768 && !prefersReducedMotion) {
  document.body.classList.remove("mobile");
} else {
  document.body.classList.add("mobile");
}

const cursorDot = document.querySelector(".cursor-dot");
if (cursorDot && !document.body.classList.contains("mobile")) {
  window.addEventListener("pointermove", (event) => {
    cursorDot.style.left = `${event.clientX}px`;
    cursorDot.style.top = `${event.clientY}px`;
  });
}

const countdownEls = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

const countdownStatus = document.getElementById("countdownStatus");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    Object.values(countdownEls).forEach((el) => {
      if (el) el.textContent = "00";
    });

    if (countdownStatus) {
      countdownStatus.textContent = "Today is the day! ❤️";
    }
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  if (countdownEls.days) countdownEls.days.textContent = String(days).padStart(2, "0");
  if (countdownEls.hours) countdownEls.hours.textContent = String(hours).padStart(2, "0");
  if (countdownEls.minutes) countdownEls.minutes.textContent = String(minutes).padStart(2, "0");
  if (countdownEls.seconds) countdownEls.seconds.textContent = String(seconds).padStart(2, "0");

  if (countdownStatus) {
    countdownStatus.textContent = "September 7, 2026 — 6:30 PM";
  }
}

if (Object.values(countdownEls).some(Boolean)) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealEls.forEach((el) => revealObserver.observe(el));

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-arrow.prev");
const nextButton = document.querySelector(".lightbox-arrow.next");
let currentGalleryIndex = 0;

if (galleryItems.length) {
  const images = Array.from(galleryItems).map((img) => img.src);

  galleryItems.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentGalleryIndex = index;
      if (lightbox && lightboxImage) {
        lightboxImage.src = img.src;
        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
      }
    });
  });

  const updateLightbox = (nextIndex) => {
    currentGalleryIndex = (nextIndex + images.length) % images.length;
    if (lightboxImage) {
      lightboxImage.src = images[currentGalleryIndex];
    }
  };

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      if (lightbox) {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
      }
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => updateLightbox(currentGalleryIndex - 1));
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => updateLightbox(currentGalleryIndex + 1));
  }

  document.addEventListener("keydown", (event) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;

    if (event.key === "Escape") {
      lightbox.classList.remove("active");
      lightbox.setAttribute("aria-hidden", "true");
    }

    if (event.key === "ArrowLeft") {
      updateLightbox(currentGalleryIndex - 1);
    }

    if (event.key === "ArrowRight") {
      updateLightbox(currentGalleryIndex + 1);
    }
  });

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
      }
    });
  }
}

const loader = document.getElementById("loader");
const skipLoader = document.getElementById("skipLoader");
const hasSeenLoader = sessionStorage.getItem("kadhalumLoaderSeen");

if (loader) {
  const showInvitation = () => {
    loader.classList.add("is-open");
  };

  const hideLoader = () => {
    loader.classList.add("is-exiting");
    setTimeout(() => loader.classList.add("hidden"), 620);
    document.body.classList.add("is-loaded");
  };

  if (!hasSeenLoader && !prefersReducedMotion) {
    setTimeout(showInvitation, 260);
    const loaderTimeout = window.setTimeout(() => {
      sessionStorage.setItem("kadhalumLoaderSeen", "true");
      hideLoader();
    }, 5400);

    if (skipLoader) {
      skipLoader.addEventListener("click", () => {
        window.clearTimeout(loaderTimeout);
        sessionStorage.setItem("kadhalumLoaderSeen", "true");
        hideLoader();
      });
    }
  } else {
    sessionStorage.setItem("kadhalumLoaderSeen", "true");
    loader.classList.add("is-open");
    setTimeout(hideLoader, 900);
    if (skipLoader) {
      skipLoader.addEventListener("click", hideLoader);
    }
  }
}

const musicToggle = document.querySelector(".music-toggle");
const weddingAudio = document.getElementById("weddingAudio");

if (musicToggle && weddingAudio) {
  const setPlayingState = (isPlaying) => {
    musicToggle.classList.toggle("is-playing", isPlaying);
    musicToggle.setAttribute("aria-pressed", String(isPlaying));
  };

  musicToggle.addEventListener("click", async () => {
    try {
      if (weddingAudio.paused) {
        await weddingAudio.play();
        setPlayingState(true);
      } else {
        weddingAudio.pause();
        setPlayingState(false);
      }
    } catch (error) {
      console.warn("Audio playback was blocked:", error);
    }
  });
}

const pageProgress = document.querySelector(".page-progress span");
if (pageProgress && !document.body.classList.contains("mobile")) {
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    pageProgress.style.height = `${Math.min(Math.max(progress, 8), 100)}%`;
  };
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
}

const heroSection = document.querySelector(".hero");
if (heroSection && !prefersReducedMotion) {
  const updateHeroParallax = () => {
    const rect = heroSection.getBoundingClientRect();
    const distance = Math.max(-24, Math.min(24, rect.top * 0.08));
    const image = heroSection.querySelector(".hero-bg img");
    if (image) {
      image.style.transform = `scale(1.08) translateY(${distance}px)`;
    }
    const title = heroSection.querySelector(".hero-content");
    if (title) {
      title.style.transform = `translateY(${Math.min(rect.top * 0.08, 0)}px)`;
    }
  };
  updateHeroParallax();
  window.addEventListener("scroll", updateHeroParallax, { passive: true });
}

const revealTargets = document.querySelectorAll(".reveal");
if (prefersReducedMotion) {
  revealTargets.forEach((el) => el.classList.add("in-view"));
}
