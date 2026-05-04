import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="site-header__logo">Banker Bands</Link>
          <nav className="site-header__nav" aria-label="Main navigation">
            <NavLink to="/what-are-banker-bands" className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>What Are They</NavLink>
            <NavLink to="/history"               className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>History</NavLink>
            <NavLink to="/modern-uses"           className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>Modern Uses</NavLink>
            <NavLink to="/gallery"               className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>Gallery</NavLink>
          </nav>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        © {new Date().getFullYear()} BankerBands.com · All rights reserved
      </footer>
    </div>
  );
}
