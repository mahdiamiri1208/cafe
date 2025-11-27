"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const route = useRouter();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [navBottom, setNavBottom] = useState(0);

  // محاسبه ارتفاع navbar و در صورت باز بودن منو، محاسبه navBottom
  useEffect(() => {
    const updateNavHeightAndBottom = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
        if (open) {
          const navRect = navRef.current.getBoundingClientRect();
          setNavBottom(navRect.bottom);
        }
      }
    };

    updateNavHeightAndBottom();
    window.addEventListener("resize", updateNavHeightAndBottom);

    return () => window.removeEventListener("resize", updateNavHeightAndBottom);
  }, [open]);

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

  const handleToggle = () => {
    if (!open) {
      // when opening the menu
      const navRect = navRef.current.getBoundingClientRect();
      setNavBottom(navRect.bottom);
    }
    setOpen((s) => !s);
  };

  const handleClose = () => setOpen(false);

  // جلوگیری از اسکرول body وقتی منو باز است
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // بستن منو با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open) {
        // چک کنید که کلیک outside of navbar و outside of mobile menu باشد
        if (
          navRef.current &&
          !navRef.current.contains(event.target) &&
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(event.target)
        ) {
          setOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <div
        className={`container-fluid p-0 ${styles.nav_bar}`}
        style={{ overflowX: "hidden" }}
        ref={navRef}
      >
        <nav
          className={`${styles.navbar} navbar-expand-lg navbar-dark py-3 d-flex flex-wrap align-items-center justify-content-between position-relative`}
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

          {/* همبرگر toggle - فقط در موبایل */}
          <button
            className={`${styles.navbar_toggler} d-lg-none`}
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className={styles.navbar_toggler_icon} />
          </button>

          {/* منوی دسکتاپ - فقط در دسکتاپ نمایش داده می‌شود */}
          <div className={`d-none d-lg-flex ${styles.desktop_menu}`}>
            <div
              className={`navbar-nav ms-auto p-2 p-lg-0 ${styles.navbar_nav}`}
            >
              <Link
                href="/"
                className={`${styles.nav_link} ${styles.active_nav_link} nav-item`}
              >
                Home
              </Link>
              <Link href="/about" className={`${styles.nav_link} nav-item`}>
                About
              </Link>
              <Link href="/services" className={`${styles.nav_link} nav-item`}>
                Service
              </Link>
              <Link href="/menu" className={`${styles.nav_link} nav-item`}>
                Menu
              </Link>
              <Link href="/testimonial" className={`${styles.nav_link} nav-item`}>
                Testimonial
              </Link>
              <Link href="/reservation" className={`${styles.nav_link} nav-item`}>
                Reservation
              </Link>

              <Link href="/contact" className={`${styles.nav_link} nav-item`}>
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* منوی موبایل - کاملاً جدا از navbar و موقعیت fixed */}
      <div
        ref={mobileMenuRef}
        className={`${styles.mobile_menu} ${
          open ? styles.menu_open : styles.menu_close
        } d-lg-none`}
        style={{ top: `${navBottom}px` }}
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
          <Link
            href="/menu"
            onClick={handleClose}
            className={`${styles.nav_link} nav-item`}
          >
            Menu
          </Link>
          <Link
            href="/testimonial"
            onClick={handleClose}
            className={`${styles.nav_link} nav-item`}
          >
            Testimonial
          </Link>
          <Link
            href="/reservation"
            onClick={handleClose}
            className={`${styles.nav_link} nav-item`}
          >
            Reservation
          </Link>
          <Link
            href="/contact"
            onClick={handleClose}
            className={`${styles.nav_link} nav-item`}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* CSS محلی */}
      <style jsx>{`
        /* موبایل */
        @media (max-width: 992px) {
          .${styles.mobile_menu} {
            position: fixed;
            left: 0;
            width: 100%;
            background: #33211d;
            z-index: 999;
            overflow-y: auto;
            max-height: 0;
            opacity: 0;
            transition: max-height 300ms ease, opacity 300ms ease;
            padding: 0;
          }

          .${styles.menu_open} {
            max-height: calc(100vh - ${navBottom}px);
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

          .dropdown_menu {
            position: static !important;
            background: inherit;
            padding-left: 20px;
            margin-top: 5px;
            border: none;
          }
        }

        /* دسکتاپ */
        @media (min-width: 992px) {
          .${styles.mobile_menu} {
            display: none !important;
          }

          .${styles.desktop_menu} {
            display: flex !important;
          }

          .${styles.navbar_nav} {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
          }

          .${styles.navbar_toggler} {
            display: none;
          }

          .dropdown_menu {
            position: absolute;
            background: #33211d;
            padding: 10px;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
