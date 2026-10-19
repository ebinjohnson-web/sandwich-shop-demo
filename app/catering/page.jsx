import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "Catering | Brick & Board Sandwich Co.",
  description:
    "Catering page for a fictional sandwich shop demo with trays, lunch boxes, group ordering flow, and practical FAQs.",
};
export default function Page() {
  return (
    <>
      <div className="page-catering">
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
                      'url("/sandwich-shop-demo/assets/images/catering-platter.jpg")',
                  }}
                />
                <div className="container page-hero-grid hero-split">
                  <div>
                    <div className="eyebrow reveal in-view">Catering</div>
                    <h1 className="reveal in-view" style={{ "--delay": 1 }}>
                      Lunch for groups, without the guesswork.
                    </h1>
                    <p
                      className="page-hero-copy reveal in-view"
                      style={{ "--delay": 2 }}
                    >
                      Straightforward package options for offices, training
                      days, family gatherings, and church events.
                    </p>
                  </div>
                  <div
                    className="page-hero-photo reveal in-view"
                    style={{ "--delay": 3 }}
                  >
                    <img
                      src={asset("assets/images/display-case.jpg")}
                      alt="Assorted deli sandwiches in a display case"
                    />
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="container">
                  <div className="section-head reveal">
                    <div className="eyebrow">Package options</div>
                    <h2>Choose a catering format quickly.</h2>
                    <p>
                      Each package gives people a simple starting point before
                      they ask for a quote.
                    </p>
                  </div>
                  <div className="package-grid three">
                    <article className="panel tilt-card reveal">
                      <div className="panel-kicker">Tray</div>
                      <h3>Classic tray</h3>
                      <p>
                        12 halves, pickles, chips, labels, and a short setup
                        note for the table.
                      </p>
                      <strong>From $78</strong>
                    </article>
                    <article
                      className="panel tilt-card reveal"
                      style={{ "--delay": 1 }}
                    >
                      <div className="panel-kicker">Boxed</div>
                      <h3>Lunch box drop-off</h3>
                      <p>
                        Individual packed sandwiches with side, cookie, and
                        napkin.
                      </p>
                      <strong>From $18 per person</strong>
                    </article>
                    <article
                      className="panel tilt-card reveal"
                      style={{ "--delay": 2 }}
                    >
                      <div className="panel-kicker">Custom</div>
                      <h3>Meeting spread</h3>
                      <p>
                        Mixed wraps, sweets, drinks, and dietary labels for
                        larger team orders.
                      </p>
                      <strong>Custom quote</strong>
                    </article>
                  </div>
                </div>
              </section>
              <section className="section section-sand">
                <div className="container">
                  <div className="section-head reveal">
                    <div className="eyebrow">How ordering works</div>
                    <h2>Four simple steps.</h2>
                    <p>
                      Group orders should feel almost as simple as ordering one
                      lunch.
                    </p>
                  </div>
                  <div className="timeline-grid two">
                    <article className="timeline-card tilt-card reveal">
                      <div className="timeline-step">01</div>
                      <h3>Choose a format</h3>
                      <p>
                        Tray, lunch boxes, or mixed spread depending on
                        headcount and timing.
                      </p>
                    </article>
                    <article
                      className="timeline-card tilt-card reveal"
                      style={{ "--delay": 1 }}
                    >
                      <div className="timeline-step">02</div>
                      <h3>Share the basics</h3>
                      <p>
                        Date, time, guest count, pickup or delivery, and any
                        dietary notes.
                      </p>
                    </article>
                    <article
                      className="timeline-card tilt-card reveal"
                      style={{ "--delay": 2 }}
                    >
                      <div className="timeline-step">03</div>
                      <h3>Confirm details</h3>
                      <p>
                        The quote stays simple so customers know exactly what is
                        included.
                      </p>
                    </article>
                    <article
                      className="timeline-card tilt-card reveal"
                      style={{ "--delay": 3 }}
                    >
                      <div className="timeline-step">04</div>
                      <h3>Pick up or receive</h3>
                      <p>
                        Labels, packing, and layout are planned to make serving
                        easy.
                      </p>
                    </article>
                  </div>
                </div>
              </section>
              <section
                className="section section-dark"
                style={{
                  "--hero-image":
                    'url("/sandwich-shop-demo/assets/images/shop-interior.jpg")',
                }}
              >
                <div className="container">
                  <div className="section-head reveal">
                    <div className="eyebrow">Use cases</div>
                    <h2>Built for workdays, meetings, and community events.</h2>
                    <p>
                      These use cases help people picture the right order right
                      away.
                    </p>
                  </div>
                  <div className="use-grid three">
                    <article className="use-case reveal">
                      <h3>Office lunch</h3>
                      <p>
                        Quick tray setups for teams that need lunch between
                        meetings.
                      </p>
                    </article>
                    <article
                      className="use-case reveal"
                      style={{ "--delay": 1 }}
                    >
                      <h3>Church gathering</h3>
                      <p>
                        Simple lunch boxes or trays for volunteer teams and
                        small events.
                      </p>
                    </article>
                    <article
                      className="use-case reveal"
                      style={{ "--delay": 2 }}
                    >
                      <h3>Training day</h3>
                      <p>
                        Drop-off friendly options that keep breaks moving on
                        time.
                      </p>
                    </article>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="container contact-layout two">
                  <article className="menu-panel tilt-card reveal">
                    <div className="eyebrow">Common catering questions</div>
                    <h2>Questions people usually ask first.</h2>
                    <div className="pill-list">
                      <div>What sizes are available</div>
                      <div>What is included in each package</div>
                      <div>How far ahead to order</div>
                      <div>How to ask about dietary needs</div>
                    </div>
                  </article>
                  <article
                    className="menu-panel tilt-card reveal"
                    style={{ "--delay": 1 }}
                  >
                    <div className="eyebrow">Quick FAQs</div>
                    <div className="faq-list">
                      <FAQ question="How much notice should customers give?">
                        <p>
                          For the demo, 24 hours is shown as a standard
                          baseline, with larger orders requesting more notice.
                        </p>
                      </FAQ>
                      <FAQ question="Can orders include labels or dietary notes?">
                        <p>
                          Yes. The content leaves room to mention vegetarian,
                          no-pork, or allergy note handling.
                        </p>
                      </FAQ>
                      <FAQ question="Does the layout support delivery info later?">
                        <p>
                          Yes. A real delivery radius, fee note, or cutoff time
                          can be added without restructuring the page.
                        </p>
                      </FAQ>
                    </div>
                  </article>
                </div>
              </section>
              <section className="section">
                <div className="container cta-banner reveal">
                  <div>
                    <div className="eyebrow">Ready to ask?</div>
                    <h2>Need a quote or want to compare with the menu?</h2>
                    <p>
                      The menu and contact pages are close by, so people can
                      keep moving without getting lost.
                    </p>
                  </div>
                  <div className="cta-actions">
                    <Link className="button button-primary" href="/contact">
                      Request a quote
                    </Link>
                    <Link className="button button-ghost" href="/menu">
                      See menu items
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
