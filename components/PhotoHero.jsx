import { asset } from "../lib/site";
export default function PhotoHero({
  image,
  alt,
  kicker,
  title,
  children,
  inner = false,
}) {
  return (
    <section className={"photo-hero" + (inner ? " inner-photo-hero" : "")}>
      <img
        src={asset("assets/photos/" + image)}
        alt={alt}
        width="2000"
        height="1334"
        fetchPriority="high"
      />
      <div className="photo-hero-content">
        <span className="photo-kicker">{kicker}</span>
        <h1 className="photo-title">{title}</h1>
        {children}
      </div>
    </section>
  );
}
