import { Link } from "react-router-dom";

export default function Highlights() {
  return (
    <section className="highlights">
      <Link to="/tools" className="card link-card">
        🛠️ <strong>Tools</strong><br />Custom utilities for developers.
      </Link>

      <Link to="/blog" className="card link-card">
        📝 <strong>Blog</strong><br />Articles and thoughts worth sharing.
      </Link>

      <Link to="/about" className="card link-card">
        🏠 <strong>About</strong><br />Learn more about this site.
      </Link>
    </section>
  );
}
