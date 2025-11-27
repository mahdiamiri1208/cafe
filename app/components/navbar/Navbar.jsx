"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const route = useRouter();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const searchHandlerWithEnter = (event) => {
    if (event.keyCode === 13 && search.trim()) {
      route.push(`/search?q=${search}`);
    }
  };

  const searchHandler = () => {
    if (search.trim()) {
      route.push(`/search?q=${search}`);
    }
  };

  const handleToggle = () => setOpen((s) => !s);
  const handleClose = () => setOpen(false);

  return (
    <div
      className={`container-fluid p-0 ${styles.nav_bar}`}
      style={{ overflowX: "hidden" }}
    >
      <nav
        className={`${styles.navbar} navbar-expand-lg navbar-dark py-3 d-flex flex-wrap align-items-center justify-content-between`}
      >
        {/* برند */}
        <Link href="/" className={`${styles.navbar_brand} m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">
            Next-Coffee
          </h1>
        </Link>

        {/* searchbox */}
        <div
          className={styles.searchbox}
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            maxWidth: "400px",
            margin: "10px",
          }}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchHandlerWithEnter}
            type="text"
            className={styles.search_input}
            placeholder="Search..."
            style={{
              flex: 1,
              padding: "8px 40px 8px 12px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <i
            onClick={searchHandler}
            className="fa-solid fa-magnifying-glass"
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "white",
              fontSize: "18px",
            }}
          ></i>
        </div>

        {/* همبرگر (toggle) */}
        <button
          className={`${styles.navbar_toggler}`}
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className={styles.navbar_toggler_icon} />
        </button>

        {/* منوی موبایل / منوی لینک‌ها */}
        <div
          className={`${styles.mobile_menu} ${
            open ? styles.menu_open : styles.menu_close
          }`}
        >
          <div className={`navbar-nav ms-auto p-2 p-lg-0 ${styles.navbar_nav}`}>
            <Link
              href="/"
              onClick={handleClose}
              className={`${styles.nav_link} ${styles.active_nav_link} nav-item`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={handleClose}
              className={`${styles.nav_link} nav-item`}
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={handleClose}
              className={`${styles.nav_link} nav-item`}
            >
              Service
            </Link>

            <div className={`nav-item dropdown ${styles.dropdown}`}>
              <a href="#" className={`${styles.nav_link} dropdown-toggle`}>
                Pages
              </a>

              <ul className={`dropdown-menu ${styles.dropdown_menu}`}>
                <li>
                  <Link
                    href="/reservation"
                    onClick={handleClose}
                    className="dropdown-item text-white"
                  >
                    Reservation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonial"
                    onClick={handleClose}
                    className="dropdown-item text-white"
                  >
                    Testimonial
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              onClick={handleClose}
              className={`${styles.nav_link} nav-item`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CSS محلی برای موبایل/دسکتاپ */}
        <style jsx>{`
          /* mobile behaviour */
          @media (max-width: 992px) {
            .${styles.mobile_menu} {
              width: 100%;
              overflow: hidden;
              max-height: 0;
              opacity: 0;
              transition: max-height 300ms ease, opacity 300ms ease,
                padding 300ms ease;
              padding: 0;
            }

            .${styles.menu_open} {
              max-height: 800px; /* کافی برای محتوای منو */
              opacity: 1;
              padding: 10px 0;
            }

            .${styles.menu_close} {
              max-height: 0;
              opacity: 0;
              padding: 0;
            }

            .${styles.navbar_nav} {
              flex-direction: column;
              width: 100%;
              text-align: center;
            }

            .${styles.searchbox} {
              max-width: 100%;
              margin: 10px auto;
            }
          }

          /* desktop: ensure mobile_menu always visible and inline behavior */
          @media (min-width: 992px) {
            .${styles.mobile_menu} {
              display: block !important;
              max-height: none !important;
              opacity: 1 !important;
              padding: 0;
            }

            .${styles.navbar_nav} {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 1rem;
            }

            /* hide the toggler in desktop */
            .${styles.navbar_toggler} {
              display: none;
            }
          }
        `}</style>
      </nav>
    </div>
  );
}

export default Navbar;
