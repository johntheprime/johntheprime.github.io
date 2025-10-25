import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <h1>
          <Link to="/" className="logo">John&apos;s</Link>
        </h1>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/blogs">Blogs</NavLink></li>
          <li><NavLink to="/tools">Tools</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
