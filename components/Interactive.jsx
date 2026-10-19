"use client";
import { useState, Children } from "react";
export function DemoForm({ children, ...props }) {
  const [message, setMessage] = useState("");
  return (
    <form
      {...props}
      onSubmit={(e) => {
        e.preventDefault();
        setMessage(
          "Thanks for trying this concept. This is a demo: no message was sent and no details were saved.",
        );
        e.currentTarget.reset();
      }}
    >
      {children}
      <p role="status" aria-live="polite" className="form-feedback">
        {message}
      </p>
    </form>
  );
}
export function FAQ({ question, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={"faq-item" + (open ? " is-open" : "")}>
      <button
        className="faq-button"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>{question}</span>
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div className="faq-answer" hidden={!open}>
        {children}
      </div>
    </div>
  );
}
export function Reviews({ children }) {
  const slides = Children.toArray(children);
  const [active, setActive] = useState(0);
  return (
    <div className="reviews-shell reveal" aria-label="Demo customer reviews">
      {slides.map((slide, index) => (
        <article
          key={index}
          className={"quote-slide" + (index === active ? " is-active" : "")}
          hidden={index !== active}
        >
          {slide}
        </article>
      ))}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={"slider-dot" + (active === index ? " is-active" : "")}
            aria-label={"Show review " + (index + 1)}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}
