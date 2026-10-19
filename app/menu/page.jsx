import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "Menu | Brick & Board Sandwich Co.",
  description:
    "Menu page for a fictional sandwich shop demo with short categories, signature sandwiches, salads, soups, and quick add-ons.",
};
export default function Page() {
  return (
    <>
      <div className="page-menu">
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
                      'url("/sandwich-shop-demo/assets/images/display-case.jpg")',
                  }}
                />
                <div className="container page-hero-grid hero-split">
                  <div>
                    <div className="eyebrow reveal in-view">Menu</div>
                    <h1 className="reveal in-view" style={{ "--delay": 1 }}>
                      A short menu with clear favourites.
                    </h1>
                    <p
                      className="page-hero-copy reveal in-view"
                      style={{ "--delay": 2 }}
                    >
                      Enough variety for lunch, but still easy to scan at a
                      glance.
                    </p>
                  </div>
                  <div
                    className="page-hero-photo reveal in-view"
                    style={{ "--delay": 3 }}
                  >
                    <img
                      src={asset("assets/images/signature-board.jpg")}
                      alt="Signature sandwich on a wooden board"
                    />
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="container">
                  <div className="menu-pills reveal">
                    <a href="#sandwiches">Sandwiches</a>
                    <a href="#salads">Salads &amp; soup</a>
                    <a href="#extras">Extras</a>
                    <a href="#drinks">Drinks</a>
                  </div>
                  <div className="menu-grid two anchor-target" id="sandwiches">
                    <article className="menu-panel tilt-card reveal">
                      <div className="eyebrow">Signature sandwiches</div>
                      <h2>Pressed favourites that are easy to pick from.</h2>
                      <p>
                        Good names, short descriptions, and enough variety for
                        repeat weekday lunch orders.
                      </p>
                      <div className="menu-list">
                        <div className="menu-item">
                          <div>
                            <h3>The Front Street Melt</h3>
                            <p>
                              Roasted turkey, provolone, greens, tomato, and
                              house mustard.
                            </p>
                          </div>
                          <strong>$14.25</strong>
                        </div>
                        <div className="menu-item">
                          <div>
                            <h3>The Market Counter</h3>
                            <p>
                              Mortadella, capicola, provolone, greens, and
                              pickled peppers.
                            </p>
                          </div>
                          <strong>$15.50</strong>
                        </div>
                        <div className="menu-item">
                          <div>
                            <h3>The River Club</h3>
                            <p>
                              Chicken breast, bacon, Swiss, tomato, lettuce, and
                              garlic mayo.
                            </p>
                          </div>
                          <strong>$14.95</strong>
                        </div>
                        <div className="menu-item">
                          <div>
                            <h3>The Roast Beef Press</h3>
                            <p>
                              Roast beef, cheddar, onions, horseradish aioli,
                              and arugula.
                            </p>
                          </div>
                          <strong>$15.25</strong>
                        </div>
                      </div>
                    </article>
                    <article
                      className="menu-panel tilt-card reveal"
                      style={{ "--delay": 1 }}
                    >
                      <div className="inline-photo menu-spotlight">
                        <img
                          src={asset("assets/images/hero-sandwich.jpg")}
                          alt="Large sandwich close-up"
                        />
                      </div>
                      <div className="eyebrow">Counter favourite</div>
                      <h2>What the counter feels like</h2>
                      <p>
                        Real food photography keeps the menu feeling lively
                        while the item list stays short and useful.
                      </p>
                      <div className="inline-stats">
                        <span className="pill-tag">12 core builds</span>
                        <span className="pill-tag">Soup daily</span>
                        <span className="pill-tag">Add chips or cookie</span>
                      </div>
                    </article>
                  </div>
                </div>
              </section>
              <section
                className="section section-sand anchor-target"
                id="salads"
              >
                <div className="container menu-grid two">
                  <article className="menu-panel tilt-card reveal">
                    <div className="eyebrow">Salads &amp; soup</div>
                    <h2>Salads and soup that still feel like lunch.</h2>
                    <div className="menu-list">
                      <div className="menu-item">
                        <div>
                          <h3>Market Greens</h3>
                          <p>
                            Mixed greens, tomato, cucumber, pickled onion, and
                            house vinaigrette.
                          </p>
                        </div>
                        <strong>$11.50</strong>
                      </div>
                      <div className="menu-item">
                        <div>
                          <h3>Chicken Chop Salad</h3>
                          <p>
                            Grilled chicken, romaine, roasted corn, peppers, and
                            herb dressing.
                          </p>
                        </div>
                        <strong>$13.75</strong>
                      </div>
                      <div className="menu-item">
                        <div>
                          <h3>Soup of the Day</h3>
                          <p>
                            Made for quick counter add-on with bread on the
                            side.
                          </p>
                        </div>
                        <strong>$5.95</strong>
                      </div>
                    </div>
                  </article>
                  <article
                    className="menu-panel tilt-card reveal"
                    style={{ "--delay": 1 }}
                  >
                    <div className="eyebrow">Combos</div>
                    <h2>Simple lunch pairings.</h2>
                    <div className="menu-list">
                      <div className="menu-item">
                        <div>
                          <h3>Half sandwich + soup</h3>
                          <p>
                            Built for shorter lunch breaks and smaller
                            appetites.
                          </p>
                        </div>
                        <strong>$12.95</strong>
                      </div>
                      <div className="menu-item">
                        <div>
                          <h3>Sandwich + chips + drink</h3>
                          <p>Most practical weekday combo for pickup.</p>
                        </div>
                        <strong>$17.95</strong>
                      </div>
                      <div className="menu-item">
                        <div>
                          <h3>Salad + cookie</h3>
                          <p>Quick add-on for office lunch orders.</p>
                        </div>
                        <strong>$14.25</strong>
                      </div>
                    </div>
                  </article>
                </div>
              </section>
              <section className="section anchor-target" id="extras">
                <div className="container">
                  <div className="section-head reveal">
                    <div className="eyebrow">Extras</div>
                    <h2>The extras people usually ask for.</h2>
                    <p>
                      Chips, soup, and simple add-ons are close by without
                      overwhelming the sandwich list.
                    </p>
                  </div>
                  <div className="info-grid three">
                    <article className="info-card tilt-card reveal">
                      <div className="kicker">Sides</div>
                      <h3>Chips, pickles, pasta salad</h3>
                      <p>Easy extras for counter orders or lunch boxes.</p>
                    </article>
                    <article
                      className="info-card tilt-card reveal"
                      style={{ "--delay": 1 }}
                    >
                      <div className="kicker">Dessert</div>
                      <h3>Cookies and squares</h3>
                      <p>
                        Simple bakery add-ons that work well for office trays.
                      </p>
                    </article>
                    <article
                      className="info-card tilt-card reveal"
                      style={{ "--delay": 2 }}
                    >
                      <div className="kicker">Custom</div>
                      <h3>Diet notes and labels</h3>
                      <p>
                        The format leaves room for vegetarian, no-pork, or
                        allergy callouts.
                      </p>
                    </article>
                  </div>
                </div>
              </section>
              <section
                className="section section-dark anchor-target"
                id="drinks"
                style={{
                  "--hero-image":
                    'url("/sandwich-shop-demo/assets/images/hero-sandwich.jpg")',
                }}
              >
                <div className="container">
                  <div className="section-head reveal">
                    <div className="eyebrow">Drinks</div>
                    <h2>Drinks and add-ons for quick service.</h2>
                    <p>
                      A short list keeps the page tidy while still covering the
                      usual lunch add-ons.
                    </p>
                  </div>
                  <div className="package-grid three">
                    <article className="panel reveal">
                      <div className="panel-kicker">Fridge</div>
                      <h3>Water, soda, iced tea</h3>
                      <p>
                        Grab-and-go cooler selection for fast counter service.
                      </p>
                    </article>
                    <article className="panel reveal" style={{ "--delay": 1 }}>
                      <div className="panel-kicker">Hot</div>
                      <h3>Coffee and tea</h3>
                      <p>
                        Small coffee program that suits breakfast and early
                        lunch traffic.
                      </p>
                    </article>
                    <article className="panel reveal" style={{ "--delay": 2 }}>
                      <div className="panel-kicker">Groups</div>
                      <h3>Bottled drinks for trays</h3>
                      <p>
                        Easy catering add-on for meetings, church events, and
                        staff lunches.
                      </p>
                    </article>
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
