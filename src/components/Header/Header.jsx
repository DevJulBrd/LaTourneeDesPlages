import "./Header.css";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo/Logo";
import LogoMobil from "../Logo/LogoMobil";

const PHOTOS_URL =
  "https://photos.google.com/share/AF1QipPNnySgUJ2fwH5JD7GMCU-lXh7I4fzC2hjv1Jl4NiLySm4llCAUMw7tqjzhyGcvLA?pli=1&key=N2dRRXVWV1F4ZnVBMWJ1TnNuYWFjUlM4WFZhaWtR";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  const openMenu = () => {
    setActiveMenu(true);
  };

  const closeMenu = () => {
    setActiveMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector(".overlay");
      if (banner) {
        const bannerBottom = banner.getBoundingClientRect().bottom;
        const threshold = window.innerHeight * 0.15;
        setIsScrolled(bannerBottom <= threshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {isMobile ? (
        <div className={`header-container ${isHidden ? "hiden" : ""}`}>
          <div className="logo-container">
            <Link to="/" className="header-logo-link" onClick={closeMenu}>
              <LogoMobil />
            </Link>
          </div>
          <nav className="links-container">
            {activeMenu ? (
              <div className="header-menu-container">
                <div className="header-icon-close-menu-container">
                  <FontAwesomeIcon
                    icon={["fas", "times"]}
                    className="header-icon-close-menu"
                    onClick={closeMenu}
                  />
                </div>
                <div className="links-blur">
                  <Link to="/" className="link" onClick={closeMenu}>
                    Accueil
                  </Link>
                  <Link to="/agenda" className="link" onClick={closeMenu}>
                    Agenda
                  </Link>
                  <Link
                    to="/infospratiques"
                    className="link"
                    onClick={closeMenu}
                  >
                    Infos Pratiques
                  </Link>
                  <Link
                    to="/nospartenaires"
                    className="link"
                    onClick={closeMenu}
                  >
                    Partenaires
                  </Link>
                  <Link to="/inscriptions" className="link" onClick={closeMenu}>
                    Inscriptions
                  </Link>
                  <a
                    href={PHOTOS_URL}
                    className="link photos-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Photos
                  </a>
                </div>
              </div>
            ) : (
              <FontAwesomeIcon
                icon={["fas", "bars"]}
                className="header-icon-menu"
                onClick={openMenu}
              />
            )}
          </nav>
        </div>
      ) : (
        <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
          <div className="logo-container">
            <Link to="/" className="header-logo-link">
              <Logo />
            </Link>
          </div>
          <nav className="links-container">
            <div className="links-blur">
              <Link to="/" className="link">
                Accueil
              </Link>
              <Link to="/agenda" className="link">
                Agenda
              </Link>
              <Link to="/infospratiques" className="link">
                Infos Pratiques
              </Link>
              <Link to="/nospartenaires" className="link">
                Partenaires
              </Link>
              <Link to="/inscriptions" className="link">
                Inscriptions
              </Link>
              <a
                href={PHOTOS_URL}
                className="link photos-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Photos
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
