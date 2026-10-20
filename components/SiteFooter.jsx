import Link from "next/link";
export default function SiteFooter() {
  return (
    <footer className="quiet-footer">
      <div className="quiet-footer-top">
        <strong>Brick &amp; Board Sandwich Co.</strong>
        <nav aria-label="Footer">
          <Link href="/menu">Menu</Link>
          <Link href="/about">Our story</Link>
          <Link href="/catering">Catering</Link>
          <Link href="/contact">Visit</Link>
        </nav>
      </div>
      <p className="quiet-footer-note">
        © 2026 · Fictional concept. Stock photography for illustration.
      </p>
      <details className="photo-credits">
        <summary>Photo credits</summary>
        <ul>
          <li>
            <a
              href="https://www.pexels.com/photo/wheat-bread-sandwich-1209029/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Suzy Hazelwood · sandwich board
            </a>
          </li>
          <li>
            <a
              href="https://www.pexels.com/photo/close-up-photo-of-a-sandwich-on-a-bread-11256671/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tolga Aslantürk · sandwich lunch
            </a>
          </li>
        </ul>
        <p>
          Photography from{" "}
          <a
            href="https://www.pexels.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels
          </a>
          , used under the{" "}
          <a
            href="https://www.pexels.com/license/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels License
          </a>
          . The people pictured are not presented as this fictional
          organisation’s staff or members.
        </p>
      </details>
    </footer>
  );
}
