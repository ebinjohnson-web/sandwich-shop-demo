import Link from "next/link";
import { asset } from "../lib/site";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark">B&amp;B</span>
            <span className="brand-text">
              <strong>Brick &amp; Board</strong>
              <span>Sandwich Co.</span>
            </span>
          </Link>
          <p className="footer-note">
            Fictional sandwich shop demo with a warm, local feel and clearer
            customer paths.
          </p>
        </div>
        <div>
          <h3>Visit</h3>
          <p>
            128 Front Street West
            <br />
            Riverton, ON N0N 1N0
          </p>
        </div>
        <div>
          <h3>Hours</h3>
          <p>
            Mon–Fri: 8am–6pm
            <br />
            Sat: 9am–4pm
            <br />
            Sun: Closed
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            (519) 555-0142
            <br />
            hello@brickandboarddemo.ca
          </p>
          <div className="social-links">
            <Link href="/contact">Instagram</Link>
            <Link href="/contact">Facebook</Link>
            <Link href="/contact">TikTok</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-row">
          <span>
            © <span>2026</span> Brick &amp; Board Sandwich Co.
          </span>
          <span>Fictional shop · Concept website</span>
        </div>
      </div>
    </footer>
  );
}
