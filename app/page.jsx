import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../components/Interactive";
import { asset } from "../lib/site";
export const metadata = {
  title: "Brick & Board Sandwich Co. | Sandwich Shop Demo",
  description:
    "Warm, polished sandwich shop demo with premium food photography, real local-shop energy, and strong mobile-friendly layout.",
};
export default function Page() {
  return (
    <>
      <div className="page-home">
        <div>
          <a className="skip-link" href="#mainContent">
            Skip to content
          </a>
          <div className="scroll-progress" aria-hidden="true" />
          <div className="site-shell">
            <SiteHeader />
            <main id="mainContent">
              <section className="hero hero-home">
                <div
                  className="hero-media"
                  data-parallax
                  style={{
                    "--hero-image":
                      'url("/sandwich-shop-demo/assets/images/hero-sandwich.jpg")',
                  }}
                />
                <div className="container hero-grid">
                  <div className="hero-orbits" aria-hidden="true">
                    <div className="orbit-chip one">Fresh bread daily</div>
                    <div
                      className="orbit-chip two"
                      style={{ "--delay": "1.1s" }}
                    >
                      Pickup in 15 minutes
                    </div>
                    <div
                      className="orbit-chip three"
                      style={{ "--delay": "0.8s" }}
                    >
                      Lunch platters for teams
                    </div>
                  </div>
                  <div className="eyebrow reveal in-view">
                    Fictional Ontario sandwich shop demo
                  </div>
                  <h1 className="reveal in-view" style={{ "--delay": 1 }}>
                    Big flavour. No small bites.
                  </h1>
                  <p
                    className="hero-copy reveal in-view"
                    style={{ "--delay": 2 }}
                  >
                    Pressed hot. Piled high. Your new lunch ritual, ready when
                    you are.
                  </p>
                  <div
                    className="hero-actions reveal in-view"
                    style={{ "--delay": 3 }}
                  >
                    <Link className="button button-primary" href="/contact">
                      Order now{" "}
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="M4 10h12M11 4l5 6-5 6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <Link className="button button-secondary" href="/menu">
                      See the menu
                    </Link>
                  </div>
                  <div
                    className="hero-badges reveal in-view"
                    style={{ "--delay": 4 }}
                  >
                    <span>Pressed favourites</span>
                    <span>Lunch boxes</span>
                  </div>
                </div>
              </section>
              <div className="marquee" aria-label="Shop highlights">
                <div className="marquee-track">
                  <span className="marquee-item">Pressed to order</span>
                  <span className="marquee-item">House spreads</span>
                  <span className="marquee-item">Lunch trays</span>
                  <span className="marquee-item">Quick pickup</span>
                  <span className="marquee-item">Warm local feel</span>
                  <span className="marquee-item">Easy catering</span>
                  <span className="marquee-item">Pressed to order</span>
                  <span className="marquee-item">House spreads</span>
                  <span className="marquee-item">Lunch trays</span>
                  <span className="marquee-item">Quick pickup</span>
                  <span className="marquee-item">Warm local feel</span>
                  <span className="marquee-item">Easy catering</span>
                </div>
              </div>
              <section className="section">
                <div className="container">
                  <div className="section-head reveal">
                    <div className="eyebrow">Best sellers</div>
                    <h2>Lunch that looks good and orders fast.</h2>
                    <p>
                      Best sellers, quick descriptions, and real food photos
                      help people decide without reading too much.
                    </p>
                  </div>
                  <div className="feature-grid three">
                    <article className="food-card tilt-card reveal">
                      <div className="food-card-media">
                        <img
                          src={asset("assets/images/signature-board.jpg")}
                          alt="Pressed deli sandwich on a wooden board"
                        />
                      </div>
                      <div className="food-card-body">
                        <div className="food-meta">Hot favourite</div>
                        <h3>The Front Street Melt</h3>
                        <p>
                          Roasted turkey, provolone, greens, tomato, and house
                          mustard on pressed bread.
                        </p>
                        <div className="food-footer">
                          <strong>$14.25</strong>
                          <Link className="link-arrow" href="/menu">
                            View item{" "}
                            <svg
                              viewBox="0 0 20 20"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M4 10h12M11 4l5 6-5 6"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                    <article
                      className="food-card tilt-card reveal"
                      style={{ "--delay": 1 }}
                    >
                      <div className="food-card-media">
                        <img
                          src={asset("assets/images/display-case.jpg")}
                          alt="Assorted deli sandwiches on display"
                        />
                      </div>
                      <div className="food-card-body">
                        <div className="food-meta">Cold cut stack</div>
                        <h3>The Market Counter</h3>
                        <p>
                          Mortadella, capicola, provolone, pickled peppers, and
                          greens on a sesame roll.
                        </p>
                        <div className="food-footer">
                          <strong>$15.50</strong>
                          <Link className="link-arrow" href="/menu">
                            View item{" "}
                            <svg
                              viewBox="0 0 20 20"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M4 10h12M11 4l5 6-5 6"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                    <article
                      className="food-card tilt-card reveal"
                      style={{ "--delay": 2 }}
                    >
                      <div className="food-card-media">
                        <img
                          src={asset("assets/images/catering-platter.jpg")}
                          alt="Box of assorted sandwiches for catering"
                        />
                      </div>
                      <div className="food-card-body">
                        <div className="food-meta">Group order</div>
                        <h3>Lunch Tray Box</h3>
                        <p>
                          Mixed halves, labels, chips, cookies, and a clean
                          setup for team sharing.
                        </p>
                        <div className="food-footer">
                          <strong>From $78</strong>
                          <Link className="link-arrow" href="/catering">
                            See catering{" "}
                            <svg
                              viewBox="0 0 20 20"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M4 10h12M11 4l5 6-5 6"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </section>
              <section className="section section-sand">
                <div className="container split">
                  <div className="split-media reveal">
                    <img
                      src={asset("assets/images/cafe-plate.jpg")}
                      alt="Fresh sandwich plate held in a bright café interior"
                    />
                    <div className="split-media-badge">
                      <strong>Real shop energy</strong>
                      <span>
                        Warmer photography and a more believable local lunch
                        feel.
                      </span>
                    </div>
                  </div>
                  <div className="split-copy">
                    <div className="eyebrow reveal">Short story</div>
                    <h2 className="reveal" style={{ "--delay": 1 }}>
                      A local lunch spot with a cleaner, warmer rhythm.
                    </h2>
                    <p className="reveal" style={{ "--delay": 2 }}>
                      The shop is fictional, but the flow is built like a real
                      neighbourhood lunch counter: see the favourites, check the
                      menu, ask about catering, and move on with your day.
                    </p>
                    <div className="check-list">
                      <div className="reveal" style={{ "--delay": 3 }}>
                        <strong>Easy to scan</strong> Short sections and cleaner
                        calls to action.
                      </div>
                      <div className="reveal" style={{ "--delay": 4 }}>
                        <strong>Real food imagery</strong> Premium without
                        looking fake or overdesigned.
                      </div>
                      <div className="reveal" style={{ "--delay": 5 }}>
                        <strong>Easy to edit</strong> Clear pages with room for
                        seasonal menus and offers.
                      </div>
                    </div>
                    <div
                      className="section-actions reveal"
                      style={{ "--delay": 6 }}
                    >
                      <Link className="button button-primary" href="/about">
                        Read the story
                      </Link>
                      <Link className="button button-ghost" href="/contact">
                        View hours &amp; contact
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="container">
                  <div className="section-head reveal">
                    <div className="eyebrow">What makes it different</div>
                    <h2>
                      Everything people need for lunch, without the extra
                      clicking.
                    </h2>
                    <p>
                      The homepage stays practical: good food up front, clear
                      next steps, and enough detail to make the shop feel
                      trustworthy.
                    </p>
                  </div>
                  <div className="info-grid three">
                    <article className="info-card tilt-card reveal">
                      <div className="kicker">Food first</div>
                      <h3>See the favourites fast</h3>
                      <p>
                        Best sellers and real photos do the heavy lifting before
                        someone even reaches the menu page.
                      </p>
                    </article>
                    <article
                      className="info-card tilt-card reveal"
                      style={{ "--delay": 1 }}
                    >
                      <div className="kicker">Clear flow</div>
                      <h3>Find catering quickly</h3>
                      <p>
                        Lunch trays, boxed orders, and quote paths stay visible
                        so office orders do not get buried.
                      </p>
                    </article>
                    <article
                      className="info-card tilt-card reveal"
                      style={{ "--delay": 2 }}
                    >
                      <div className="kicker">Local tone</div>
                      <h3>Know where to go next</h3>
                      <p>
                        Order buttons, menu links, and contact details stay
                        obvious all the way down the page.
                      </p>
                    </article>
                  </div>
                </div>
              </section>
              <section
                className="section section-dark"
                style={{
                  "--hero-image":
                    'url("/sandwich-shop-demo/assets/images/menu-counter.jpg")',
                }}
              >
                <div className="container">
                  <div className="section-head reveal">
                    <div className="eyebrow">Catering preview</div>
                    <h2>Catering that feels easy to scan.</h2>
                    <p>
                      Short package options help offices, volunteer teams, and
                      family groups get to the right starting point faster.
                    </p>
                  </div>
                  <div className="package-grid three">
                    <article className="panel reveal">
                      <div className="panel-kicker">01</div>
                      <h3>Classic tray</h3>
                      <p>
                        12 halves, chips, pickles, labels, and a short setup
                        note for the table.
                      </p>
                      <strong>From $78</strong>
                    </article>
                    <article className="panel reveal" style={{ "--delay": 1 }}>
                      <div className="panel-kicker">02</div>
                      <h3>Lunch box drop-off</h3>
                      <p>
                        One sandwich, one side, one cookie, and napkin-packed
                        for meetings and training days.
                      </p>
                      <strong>From $18 pp</strong>
                    </article>
                    <article className="panel reveal" style={{ "--delay": 2 }}>
                      <div className="panel-kicker">03</div>
                      <h3>Meeting spread</h3>
                      <p>
                        Mixed wraps, sweets, cold drinks, and easy labelling for
                        quick pass-around service.
                      </p>
                      <strong>Custom quote</strong>
                    </article>
                  </div>
                  <div
                    className="section-actions reveal"
                    style={{ "--delay": 3 }}
                  >
                    <Link className="button button-primary" href="/catering">
                      Explore catering
                    </Link>
                    <Link className="button button-secondary" href="/contact">
                      Ask for a quote
                    </Link>
                  </div>
                </div>
              </section>
              <section className="section section-sand">
                <div className="container reviews-layout">
                  <div className="section-head reveal">
                    <div className="eyebrow">Reviews preview</div>
                    <h2>A lunch spot people remember.</h2>
                    <p>
                      The tone stays friendly and practical, like a shop people
                      would actually keep in their weekday rotation.
                    </p>
                  </div>
                  <Reviews>
                    <div>
                      <div className="quote-card">
                        <p>
                          “This feels like the kind of lunch spot you save for
                          busy workdays. Fast to browse. Easy to order.”
                        </p>
                        <span className="quote-credit">
                          Jordan M. · Demo customer quote
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="quote-card">
                        <p>
                          “The catering section is exactly what a small office
                          needs — simple packages and no guessing.”
                        </p>
                        <span className="quote-credit">
                          Sarah T. · Demo team coordinator quote
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="quote-card">
                        <p>
                          “Warm photos, short copy, and clear buttons. It feels
                          polished without being too fancy.”
                        </p>
                        <span className="quote-credit">
                          Avery L. · Demo local-shop quote
                        </span>
                      </div>
                    </div>
                  </Reviews>
                </div>
              </section>
              <section className="section">
                <div className="container cta-banner reveal">
                  <div>
                    <div className="eyebrow">Next step</div>
                    <h2>Ready to show the menu or ask about catering?</h2>
                    <p>
                      The same warm, food-first direction continues on the menu,
                      catering, and contact pages.
                    </p>
                  </div>
                  <div className="cta-actions">
                    <Link className="button button-primary" href="/menu">
                      See the menu
                    </Link>
                    <Link className="button button-ghost" href="/contact">
                      See contact page
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
