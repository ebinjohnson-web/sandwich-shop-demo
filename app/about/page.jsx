import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "About | Brick & Board Sandwich Co.",
  description:
    "About page for a fictional sandwich shop demo with local brand story, practical flow, and premium presentation.",
};
export default function Page() {
  return (
    <>
      <div className="page-about">
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
                      'url("/sandwich-shop-demo/assets/images/shop-interior.jpg")',
                  }}
                />
                <div className="container page-hero-grid hero-split">
                  <div>
                    <div className="eyebrow reveal in-view">
                      About the brand
                    </div>
                    <h1 className="reveal in-view" style={{ "--delay": 1 }}>
                      A local lunch spot with a clearer feel.
                    </h1>
                    <p
                      className="page-hero-copy reveal in-view"
                      style={{ "--delay": 2 }}
                    >
                      A simple brand story for a sandwich shop that wants to
                      feel warm, useful, and easy to trust.
                    </p>
                  </div>
                  <div
                    className="page-hero-photo reveal in-view"
                    style={{ "--delay": 3 }}
                  >
                    <img
                      src={asset("assets/images/menu-counter.jpg")}
                      alt="Sandwich counter with menu boards and food case"
                    />
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="container split reverse">
                  <div className="split-copy">
                    <div className="eyebrow reveal">Shop story</div>
                    <h2 className="reveal" style={{ "--delay": 1 }}>
                      Made for people who want a good lunch without the rush.
                    </h2>
                    <p className="reveal" style={{ "--delay": 2 }}>
                      Brick &amp; Board is built around a simple promise: good
                      bread, satisfying sandwiches, and a lunch break that feels
                      a little easier. The shop tone stays warm, but never
                      fussy.
                    </p>
                    <div className="check-list">
                      <div className="reveal" style={{ "--delay": 3 }}>
                        <strong>Fresh prep</strong> Daily bread, crisp greens,
                        and quick counter-ready service.
                      </div>
                      <div className="reveal" style={{ "--delay": 4 }}>
                        <strong>Short menu</strong> Enough variety without
                        making ordering slow.
                      </div>
                      <div className="reveal" style={{ "--delay": 5 }}>
                        <strong>Group options</strong> Catering paths that feel
                        easy for offices and events.
                      </div>
                    </div>
                  </div>
                  <div className="split-media reveal">
                    <img
                      src={asset("assets/images/display-case.jpg")}
                      alt="Cross-sections of deli sandwiches in a display case"
                    />
                    <div className="split-media-badge">
                      <strong>Believable demo tone</strong>
                      <span>
                        Designed to pitch well to real cafés, delis, and lunch
                        shops.
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-sand">
                <div className="container">
                  <div className="section-head reveal">
                    <div className="eyebrow">What the brand stands for</div>
                    <h2>Warm, local, and easy to trust.</h2>
                    <p>
                      These are the small cues that make the concept feel
                      grounded instead of generic.
                    </p>
                  </div>
                  <div className="info-grid three">
                    <article className="info-card tilt-card reveal">
                      <div className="kicker">Fresh first</div>
                      <h3>Food leads the brand</h3>
                      <p>
                        Photography and layout are built around the product, not
                        decorative filler.
                      </p>
                    </article>
                    <article
                      className="info-card tilt-card reveal"
                      style={{ "--delay": 1 }}
                    >
                      <div className="kicker">Clear service</div>
                      <h3>Fast to understand</h3>
                      <p>
                        Order, menu, and catering paths stay visible without
                        making the page feel busy.
                      </p>
                    </article>
                    <article
                      className="info-card tilt-card reveal"
                      style={{ "--delay": 2 }}
                    >
                      <div className="kicker">Practical polish</div>
                      <h3>Premium, not precious</h3>
                      <p>
                        The tone feels elevated without sounding like a
                        fine-dining restaurant.
                      </p>
                    </article>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="container">
                  <div className="section-head reveal">
                    <div className="eyebrow">
                      Why the site feels easy to use
                    </div>
                    <h2>From homepage to pickup.</h2>
                    <p>
                      The pages stay direct so people can get what they need
                      without hunting around.
                    </p>
                  </div>
                  <div className="timeline-grid two">
                    <article className="timeline-card tilt-card reveal">
                      <div className="timeline-step">01</div>
                      <h3>See the food fast</h3>
                      <p>
                        Hero visuals and best sellers make the shop feel real
                        before the user reads much text.
                      </p>
                    </article>
                    <article
                      className="timeline-card tilt-card reveal"
                      style={{ "--delay": 1 }}
                    >
                      <div className="timeline-step">02</div>
                      <h3>Pick a path</h3>
                      <p>
                        Visitors can go to menu, order, or catering without
                        guessing where to click next.
                      </p>
                    </article>
                    <article
                      className="timeline-card tilt-card reveal"
                      style={{ "--delay": 2 }}
                    >
                      <div className="timeline-step">03</div>
                      <h3>Get the details quickly</h3>
                      <p>
                        Hours, address, contact info, and social links stay near
                        the footer on every page.
                      </p>
                    </article>
                    <article
                      className="timeline-card tilt-card reveal"
                      style={{ "--delay": 3 }}
                    >
                      <div className="timeline-step">04</div>
                      <h3>Find contact details quickly</h3>
                      <p>
                        Hours, address, and contact details stay easy to spot on
                        every page.
                      </p>
                    </article>
                  </div>
                </div>
              </section>
              <section
                className="section section-dark"
                style={{
                  "--hero-image":
                    'url("/sandwich-shop-demo/assets/images/hero-sandwich.jpg")',
                }}
              >
                <div className="container">
                  <div className="section-head reveal">
                    <div className="eyebrow">Visual direction</div>
                    <h2>Food-first photography with warmer contrast.</h2>
                    <p>
                      Real photos and softer contrast help the concept feel
                      closer to a finished neighbourhood sandwich shop.
                    </p>
                  </div>
                  <div className="gallery-strip">
                    <div className="gallery-frame reveal">
                      <img
                        src={asset("assets/images/signature-board.jpg")}
                        alt="Pressed sandwich on a wooden board"
                      />
                    </div>
                    <div
                      className="gallery-frame reveal"
                      style={{ "--delay": 1 }}
                    >
                      <img
                        src={asset("assets/images/menu-counter.jpg")}
                        alt="Sandwich counter and menu boards"
                      />
                    </div>
                    <div
                      className="gallery-frame reveal"
                      style={{ "--delay": 2 }}
                    >
                      <img
                        src={asset("assets/images/catering-platter.jpg")}
                        alt="Box of assorted catering sandwiches"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="container cta-banner reveal">
                  <div>
                    <div className="eyebrow">Next step</div>
                    <h2>See how the rest of the site supports the shop.</h2>
                    <p>
                      The same tone carries into the menu, catering, and contact
                      pages.
                    </p>
                  </div>
                  <div className="cta-actions">
                    <Link className="button button-primary" href="/menu">
                      See the menu
                    </Link>
                    <Link className="button button-ghost" href="/catering">
                      See catering
                    </Link>
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
