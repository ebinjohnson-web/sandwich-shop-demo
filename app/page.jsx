import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PhotoHero from "../components/PhotoHero";
import { DemoForm } from "../components/Interactive";
import { asset } from "../lib/site";
export const metadata = {
  title: "Brick & Board | Big flavour. No small bites.",
  description:
    "A fictional sandwich shop concept with generous food photography, a short menu, and catering information.",
};
export default function Page() {
  return (
    <div className="image-led-page food-photos">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <PhotoHero
          image="sandwich-lunch.jpg"
          alt="A toasted sandwich with fresh salad and fries"
          kicker="Brick & Board Sandwich Co."
          title="Lunch, done right."
        >
          <p>Pressed hot. Piled high.</p>
          <div className="photo-actions">
            <Link className="photo-button" href="/menu">
              See the menu ↗
            </Link>
            <Link className="photo-button outline" href="/contact">
              Order ahead
            </Link>
          </div>
        </PhotoHero>
        <div className="photo-ribbon">
          <span>Fresh bread.</span>
          <span>Generous fillings.</span>
          <span>Good company.</span>
        </div>
        <section className="photo-section">
          <div className="photo-section-head">
            <div>
              <span className="photo-kicker">Made for your lunch break</span>
              <h2>Worth the first bite.</h2>
            </div>
            <Link href="/menu">Full menu ↗</Link>
          </div>
          <div className="photo-duo">
            <Link className="photo-card" href="/menu">
              <img
                src={asset("assets/photos/sandwich-board.jpg")}
                alt="A freshly made sandwich filled with crisp vegetables"
                width="2000"
                height="1160"
                loading="lazy"
              />
              <div className="photo-card-caption">
                <strong>Fresh favourites.</strong>
                <span aria-hidden="true">↗</span>
              </div>
            </Link>
            <Link className="photo-card" href="/catering">
              <img
                src={asset("assets/photos/sandwich-lunch.jpg")}
                alt="A generous sandwich lunch with fries"
                width="2000"
                height="1333"
                loading="lazy"
              />
              <div className="photo-card-caption">
                <strong>Lunch for the whole crew.</strong>
                <span aria-hidden="true">↗</span>
              </div>
            </Link>
          </div>
        </section>
        <section className="photo-callout">
          <h2>Bring everyone to the table.</h2>
          <Link className="photo-button" href="/catering">
            Explore catering ↗
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
