"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const route = useRouter();
  const [search, setSearch] = useState("");

  const searchHandlerWithEnter = (event) => {
    if (event.keyCode === 13) {
      if (search.trim()) {
        route.push(`/search?q=${search}`);
      }
    }
  };

  const searchHandler = () => {
    if (search.trim()) {
      route.push(`/search?q=${search}`);
    }
  };
  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">
            Next-Coffee
          </h1>
        </Link>

        <div
          className={styles.searchbox}
          style={{ position: "relative", display: "inline-block" }}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchHandlerWithEnter}
            type="text"
            className={styles.search_input}
            placeholder="Search..."
            style={{ paddingRight: "40px" }}
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
              paddingBottom: "13px",
            }}
          ></i>
        </div>

        <button
          type="button"
          className={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className={`${styles.navbar_toggler_icon}`}></span>
        </button>

        <div
          className={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            <Link
              href="/"
              className={`${styles.nav_link} ${styles.active_nav_link}`}
            >
              Home
            </Link>
            <Link href="/about" className={`${styles.nav_link}`}>
              About
            </Link>
            <Link href="/services" className={`${styles.nav_link}`}>
              Service
            </Link>
            <Link href="/menu" className={`${styles.nav_link}`}>
              Menu
            </Link>

            <div className={`${styles.dropdown}`}>
              <a
                href="#"
                className={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div
                className={`${styles.dropdown_menu} ${styles.text_capitalize}`}
              >
                <Link href="/reservation" className={`${styles.dropdown_item}`}>
                  Reservation
                </Link>
                <Link href="/testimonial" className={`${styles.dropdown_item}`}>
                  Testimonial
                </Link>
              </div>
            </div>

            <Link href="/contact" className={`${styles.nav_link}`}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
