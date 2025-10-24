import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <h1>John&apos;s</h1>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/tools">Tools</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
