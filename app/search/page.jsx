"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HomeMenuItem from "../components/menu section/MenuItem";
import Header from "../components/header/Header";

export default function SearchResult() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const [menuCategories, setMenuCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("https://cafe-db.vercel.app/menu");
        if (!res.ok) throw new Error("Failed to fetch menu");
        const data = await res.json();

        setMenuCategories(data);

        if (query) {
          const result = data
            .map((category) => {
              const filtered = category.items.filter((item) =>
                item.title.toLowerCase().includes(query)
              );
              if (filtered.length > 0) return { ...category, items: filtered };
              return null;
            })
            .filter(Boolean);

          setFilteredItems(result);
        } else {
          setFilteredItems([]);
        }
      } catch (error) {
        console.error(error);
        setFilteredItems([]);
      }
    };

    fetchMenu();
  }, [query]);

  return (
    <>
      <Header route="Search" />
      <div className="container-fluid pt-5">
        <div className="container">
          <h1>Search Results for "{query}"</h1>
          {filteredItems.length === 0 && <p>No results found.</p>}
          <div className="row">
            {filteredItems.map((category) => (
              <div className="col-lg-6" key={category.category}>
                <h2>{category.category}</h2>
                {category.items.map((item) => (
                  <div className="row align-items-center mb-5" key={item.id}>
                    <HomeMenuItem
                      title={item.title}
                      desc={item.desc}
                      image={item.image}
                      price={item.price}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
