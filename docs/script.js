
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const header = document.querySelector(".site-header");
const yearTarget = document.getElementById("year");
const parallaxMedia = document.querySelectorAll("[data-parallax]");
const revealItems = document.querySelectorAll(".reveal");
const reviewRotator = document.querySelector("[data-review-rotator]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  const openMenu = () => {
    siteNav.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
  };

  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });
}

const handleHeader = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 12);
};

handleHeader();
window.addEventListener("scroll", handleHeader, { passive: true });

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

let ticking = false;

const updateParallax = () => {
  const scrollY = window.scrollY || window.pageYOffset;
  parallaxMedia.forEach((item) => {
    item.style.setProperty("--hero-shift", `${scrollY}px`);
  });
  ticking = false;
};

const onScrollParallax = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
};

updateParallax();
window.addEventListener("scroll", onScrollParallax, { passive: true });

if (reviewRotator) {
  const cards = Array.from(reviewRotator.querySelectorAll(".review-card"));
  let index = 0;

  const showReview = (nextIndex) => {
    cards.forEach((card, cardIndex) => {
      card.classList.toggle("is-active", cardIndex === nextIndex);
    });
  };

  showReview(index);

  if (cards.length > 1) {
    window.setInterval(() => {
      index = (index + 1) % cards.length;
      showReview(index);
    }, 3600);
  }
}
