"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("has-js");
    document.body.classList.toggle("capture-mode", new URLSearchParams(location.search).has("capture"));
    document.body.classList.add("js-ready");
    const items = [...document.querySelectorAll("[data-reveal],.reveal")];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible", "in-view");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.06 },
    );
    items.forEach((item) => observer.observe(item));
    const scroll = () => {
      const y = window.scrollY;
      document
        .querySelectorAll("[data-parallax]")
        .forEach((el) => el.style.setProperty("--hero-shift", y + "px"));
      const total = document.documentElement.scrollHeight - innerHeight;
      document
        .querySelector(".scroll-progress")
        ?.style.setProperty("--progress", String(total > 0 ? y / total : 0));
    };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scroll);
    };
  }, [pathname]);
  return null;
}
