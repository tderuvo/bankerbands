import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="site-header__logo" aria-label="Banker Bands — home">
            <img
              src="/images/logo_wordmark.png"
              alt="Banker Bands"
              className="site-header__logo-img"
              height={36}
              width={54}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </Link>
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
        <img
          src="/images/logo_badge.png"
          alt=""
          className="site-footer__badge"
          width={44}
          height={44}
          loading="lazy"
          decoding="async"
        />
        © {new Date().getFullYear()} BankerBands.com · All rights reserved
      </footer>
    </div>
  );
}
