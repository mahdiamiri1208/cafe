"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

function Navbar() {
  const route = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // تابع برای بررسی فعال بودن لینک
  const isActiveLink = (linkPath) => {
    if (linkPath === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(linkPath);
  };

  // تنظیم isClient پس از mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // محاسبه موقعیت منوی موبایل فقط در کلاینت
  useEffect(() => {
    if (!isClient) return;

    const updateMenuPosition = () => {
      if (navRef.current && mobileMenuRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        mobileMenuRef.current.style.top = `${navRect.bottom}px`;
      }
    };

    if (open) {
      updateMenuPosition();
      window.addEventListener("resize", updateMenuPosition);
      window.addEventListener("scroll", updateMenuPosition);
    }

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition);
    };
  }, [open, isClient]);

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
    setOpen((s) => !s);
  };

  const handleClose = () => setOpen(false);

  // جلوگیری از اسکرول body وقتی منو باز است
  useEffect(() => {
    if (!isClient) return;

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open, isClient]);

  // بستن منو با کلیک بیرون
  useEffect(() => {
    if (!isClient) return;

    const handleClickOutside = (event) => {
      if (open) {
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
  }, [open, isClient]);

  // استفاده از کلاس‌های CSS Modules به صورت مستقیم
  const navbarClasses = `container-fluid p-0 ${styles.nav_bar}`;
  const navClasses = `${styles.navbar} navbar-expand-lg navbar-dark py-3 d-flex flex-wrap align-items-center justify-content-between position-relative`;
  const brandClasses = `${styles.navbar_brand} m-0`;
  const searchboxClasses = styles.searchbox;
  const searchInputClasses = styles.search_input;
  const togglerClasses = `${styles.navbar_toggler} d-lg-none`;
  const togglerIconClasses = styles.navbar_toggler_icon;
  const desktopMenuClasses = `d-none d-lg-flex ${styles.desktop_menu}`;
  const navbarNavClasses = `navbar-nav ms-auto p-2 p-lg-0 ${styles.navbar_nav}`;

  return (
    <>
      <div
        className={navbarClasses}
        style={{ overflowX: "hidden" }}
        ref={navRef}
      >
        <nav className={navClasses}>
          {/* برند */}
          <Link href="/" className={brandClasses}>
            <h1 className="m-0 display-4 text-uppercase text-white">
              Next-Coffee
            </h1>
          </Link>

          {/* searchbox */}
          <div
            className={searchboxClasses}
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
              className={searchInputClasses}
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
            className={togglerClasses}
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className={togglerIconClasses} />
          </button>

          {/* منوی دسکتاپ - فقط در دسکتاپ نمایش داده می‌شود */}
          <div className={desktopMenuClasses}>
            <div className={navbarNavClasses}>
              <Link
                href="/"
                className={`${styles.nav_link} ${
                  isActiveLink("/") ? styles.active_nav_link : ""
                } nav-item`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${styles.nav_link} ${
                  isActiveLink("/about") ? styles.active_nav_link : ""
                } nav-item`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`${styles.nav_link} ${
                  isActiveLink("/services") ? styles.active_nav_link : ""
                } nav-item`}
              >
                Service
              </Link>
              <Link
                href="/menu"
                className={`${styles.nav_link} ${
                  isActiveLink("/menu") ? styles.active_nav_link : ""
                } nav-item`}
              >
                Menu
              </Link>
              <Link
                href="/testimonial"
                className={`${styles.nav_link} ${
                  isActiveLink("/testimonial") ? styles.active_nav_link : ""
                } nav-item`}
              >
                Testimonial
              </Link>
              <Link
                href="/reservation"
                className={`${styles.nav_link} ${
                  isActiveLink("/reservation") ? styles.active_nav_link : ""
                } nav-item`}
              >
                Reservation
              </Link>
              <Link
                href="/contact"
                className={`${styles.nav_link} ${
                  isActiveLink("/contact") ? styles.active_nav_link : ""
                } nav-item`}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* منوی موبایل - کاملاً جدا از navbar و موقعیت fixed */}
      {isClient && (
        <div
          ref={mobileMenuRef}
          className={`${styles.mobile_menu} ${
            open ? styles.menu_open : styles.menu_close
          } d-lg-none`}
        >
          <div className={navbarNavClasses}>
            <Link
              href="/"
              onClick={handleClose}
              className={`${styles.nav_link} ${
                isActiveLink("/") ? styles.active_nav_link : ""
              } nav-item`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={handleClose}
              className={`${styles.nav_link} ${
                isActiveLink("/about") ? styles.active_nav_link : ""
              } nav-item`}
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={handleClose}
              className={`${styles.nav_link} ${
                isActiveLink("/services") ? styles.active_nav_link : ""
              } nav-item`}
            >
              Service
            </Link>
            <Link
              href="/menu"
              onClick={handleClose}
              className={`${styles.nav_link} ${
                isActiveLink("/menu") ? styles.active_nav_link : ""
              } nav-item`}
            >
              Menu
            </Link>
            <Link
              href="/testimonial"
              onClick={handleClose}
              className={`${styles.nav_link} ${
                isActiveLink("/testimonial") ? styles.active_nav_link : ""
              } nav-item`}
            >
              Testimonial
            </Link>
            <Link
              href="/reservation"
              onClick={handleClose}
              className={`${styles.nav_link} ${
                isActiveLink("/reservation") ? styles.active_nav_link : ""
              } nav-item`}
            >
              Reservation
            </Link>
            <Link
              href="/contact"
              onClick={handleClose}
              className={`${styles.nav_link} ${
                isActiveLink("/contact") ? styles.active_nav_link : ""
              } nav-item`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;