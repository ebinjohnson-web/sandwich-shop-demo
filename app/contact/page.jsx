import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "Contact | Brick & Board Sandwich Co.",
  description:
    "Contact page for a fictional sandwich shop demo with order details, hours, social links, and a practical inquiry form.",
};
export default function Page() {
  return (
    <>
      <div className="page-contact">
        <div>
          <a className="skip-link" href="#mainContent">
            Skip to content
          </a>
          <div className="scroll-progress" aria-hidden="true" />
          <div className="site-shell">
            <SiteHeader />
            <main id="mainContent">
              <section className="page-hero">
                <div
                  className="page-hero-media"
                  data-parallax
                  style={{
                    "--hero-image":
                      'url("/sandwich-shop-demo/assets/images/menu-counter.jpg")',
                  }}
                />
                <div className="container page-hero-grid hero-split">
                  <div>
                    <div className="eyebrow reveal in-view">Contact</div>
                    <h1 className="reveal in-view" style={{ "--delay": 1 }}>
                      Order, ask a question, or stop by.
                    </h1>
                    <p
                      className="page-hero-copy reveal in-view"
                      style={{ "--delay": 2 }}
                    >
                      Hours, contact details, and one clear form for pickup
                      questions or catering inquiries.
                    </p>
                  </div>
                  <div
                    className="page-hero-photo reveal in-view"
                    style={{ "--delay": 3 }}
                  >
                    <img
                      src={asset("assets/images/shop-interior.jpg")}
                      alt="Cafe counter interior"
                    />
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="container contact-layout two">
                  <div className="contact-stack">
                    <article className="contact-card tilt-card reveal">
                      <div className="eyebrow">Visit</div>
                      <h2>Brick &amp; Board Sandwich Co.</h2>
                      <p>
                        128 Front Street West
                        <br />
                        Riverton, ON N0N 1N0
                      </p>
                      <div className="inline-stats">
                        <span>Mon–Fri: 8am–6pm</span>
                        <span>Sat: 9am–4pm</span>
                      </div>
                    </article>
                    <article
                      className="contact-card tilt-card reveal"
                      style={{ "--delay": 1 }}
                    >
                      <div className="eyebrow">Call or email</div>
                      <h2>(519) 555-0142</h2>
                      <p>hello@brickandboarddemo.ca</p>
                      <div className="social-links">
                        <Link href="/contact">Instagram</Link>
                        <Link href="/contact">Facebook</Link>
                        <Link href="/contact">TikTok</Link>
                      </div>
                    </article>
                    <article
                      className="contact-card tilt-card reveal"
                      style={{ "--delay": 2 }}
                    >
                      <div className="eyebrow">Fast answers</div>
                      <h2>What people usually need</h2>
                      <p>
                        Pickup timing, shop hours, catering questions, and the
                        basics people want before heading over.
                      </p>
                    </article>
                  </div>
                  <article
                    className="form-panel tilt-card reveal"
                    style={{ "--delay": 1 }}
                  >
                    <div className="eyebrow">Inquiry form</div>
                    <h2>Send a message</h2>
                    <p>
                      Try the inquiry experience. This concept does not send
                      messages.
                    </p>
                    <DemoForm className="site-form">
                      <label>
                        <span>Name</span>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                        />
                      </label>
                      <label>
                        <span>Email</span>
                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                        />
                      </label>
                      <label>
                        <span>Phone</span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="(519) 555-0000"
                        />
                      </label>
                      <label>
                        <span>Reason</span>
                        <select name="reason">
                          <option>General question</option>
                          <option>Pickup order</option>
                          <option>Catering quote</option>
                          <option>Hours / location</option>
                        </select>
                      </label>
                      <label className="form-full">
                        <span>Message</span>
                        <textarea
                          name="message"
                          rows={6}
                          placeholder="Tell us what you need."
                          defaultValue={""}
                        />
                      </label>
                      <div className="form-full form-actions align-start">
                        <button className="button button-primary" type="submit">
                          Send inquiry
                        </button>
                        <span className="form-note">
                          Demo only. No message is sent.
                        </span>
                      </div>
                    </DemoForm>
                  </article>
                </div>
              </section>
              <section className="section section-sand">
                <div className="container split">
                  <div className="mini-map reveal">
                    <div>
                      <div
                        className="eyebrow"
                        style={{ justifyContent: "center" }}
                      >
                        Location placeholder
                      </div>
                      <h2>Map area</h2>
                      <p>
                        Swap this block for a real embed later, or keep it as a
                        clean address section.
                      </p>
                    </div>
                  </div>
                  <div className="split-copy">
                    <div className="eyebrow reveal">Best practice</div>
                    <h2 className="reveal" style={{ "--delay": 1 }}>
                      Everything people need before they visit.
                    </h2>
                    <p className="reveal" style={{ "--delay": 2 }}>
                      The page keeps the basics close together so someone can
                      call, send a note, or head over without extra steps.
                    </p>
                    <div className="pill-list">
                      <div className="reveal" style={{ "--delay": 3 }}>
                        One clear message form
                      </div>
                      <div className="reveal" style={{ "--delay": 4 }}>
                        Hours visible near the top of the page
                      </div>
                      <div className="reveal" style={{ "--delay": 5 }}>
                        Address, phone, and socials in one place
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <SiteFooter />
          </div>
        </div>
      </div>
    </>
  );
}
