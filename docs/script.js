
document.documentElement.classList.add("has-js");
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("js-ready");

  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");
  const siteHeader = document.querySelector(".site-header");
  const yearTarget = document.getElementById("year");
  const revealItems = [...document.querySelectorAll(".reveal")];
  const parallaxTargets = [...document.querySelectorAll("[data-parallax]")];
  const tiltCards = [...document.querySelectorAll(".tilt-card")];
  const slider = document.querySelector("[data-quote-slider]");
  const faqItems = [...document.querySelectorAll(".faq-item")];
  const progressBar = document.querySelector(".scroll-progress");

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
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
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

  const updateScrollEffects = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (siteHeader) {
      siteHeader.classList.toggle("is-scrolled", scrollY > 12);
    }

    parallaxTargets.forEach((target) => {
      target.style.setProperty("--hero-shift", `${scrollY}px`);
    });

    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
    if (progressBar) {
      progressBar.style.setProperty("--progress", progress.toFixed(4));
    }
  };

  updateScrollEffects();
  window.addEventListener("scroll", updateScrollEffects, { passive: true });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  if (tiltCards.length && window.matchMedia("(hover: hover)").matches) {
    const resetCard = (card) => {
      card.style.transform = "";
      card.style.setProperty("--cursor-x", "50%");
      card.style.setProperty("--cursor-y", "50%");
    };

    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = (((y / rect.height) - 0.5) * -8);
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
        card.style.setProperty("--cursor-x", `${(x / rect.width) * 100}%`);
        card.style.setProperty("--cursor-y", `${(y / rect.height) * 100}%`);
      });

      card.addEventListener("mouseleave", () => resetCard(card));
      card.addEventListener("blur", () => resetCard(card), true);
    });
  }

  if (slider) {
    const slides = [...slider.querySelectorAll(".quote-slide")];
    const dots = [...slider.querySelectorAll(".slider-dot")];
    let activeIndex = 0;
    let timer;

    const showSlide = (nextIndex) => {
      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === nextIndex);
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === nextIndex);
        dot.setAttribute("aria-selected", index === nextIndex ? "true" : "false");
        dot.tabIndex = index === nextIndex ? 0 : -1;
      });
      activeIndex = nextIndex;
    };

    const startSlider = () => {
      if (slides.length < 2) return;
      clearInterval(timer);
      timer = window.setInterval(() => {
        const nextIndex = (activeIndex + 1) % slides.length;
        showSlide(nextIndex);
      }, 4200);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        startSlider();
      });
    });

    showSlide(0);
    startSlider();
  }

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-button");
    if (!button) return;
    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      faqItems.forEach((faq) => {
        faq.classList.remove("is-open");
        const faqButton = faq.querySelector(".faq-button");
        if (faqButton) faqButton.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
});
