"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { asset } from "../lib/site";
function NavLink({ href, className = "", children, ...props }) {
  const pathname = usePathname();
  const active =
    !href.includes("#") &&
    pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
  return (
    <Link
      href={href}
      className={className + (active ? " active is-active" : "")}
      aria-current={active ? "page" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 12);
    const key = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menuToggle")?.focus();
      }
    };
    const outside = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const resize = () => {
      if (innerWidth > 860) setOpen(false);
    };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("keydown", key);
    document.addEventListener("click", outside);
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", resize);
      document.removeEventListener("keydown", key);
      document.removeEventListener("click", outside);
    };
  }, []);
  return (
    <div ref={ref} className="header-mount">
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container header-row">
          <Link
            className="brand"
            href="/"
            aria-label="Brick & Board Sandwich Co. home"
          >
            <span className="brand-mark">B&amp;B</span>
            <span className="brand-text">
              <strong>Brick &amp; Board</strong>
              <span>Sandwich Co.</span>
            </span>
          </Link>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            aria-controls="siteNav"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            <span />
            <span />
          </button>
          <nav
            className={`site-nav${open ? " open" : ""}`}
            onClick={() => setOpen(false)}
            id="siteNav"
            aria-label="Primary"
          >
            <NavLink className="" href="/">
              Home
            </NavLink>
            <NavLink className="" href="/about">
              About
            </NavLink>
            <NavLink className="" href="/menu">
              Menu
            </NavLink>
            <NavLink className="" href="/catering">
              Catering
            </NavLink>
            <NavLink className="" href="/contact">
              Contact
            </NavLink>
            <NavLink className="nav-cta" href="/contact">
              Order now
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
}
