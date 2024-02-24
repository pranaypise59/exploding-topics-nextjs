import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const AllCategoriesSelector = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="filterContainer periodFilterContainer" style={{width: '100%'}}>
        <div className="trendDbPageButtonDropdown btn-group">
          <div className="dropdownFilterButton noselect" onClick={() => setOpen(!open)}>
            <span className="filterButtonText dropdownFilterButtonText">
              All Categories
            </span>
            <svg
              width={14}
              height={8}
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: 14 }}
            >
              <path
                d="M13 7L7 0.999999L1 7"
                stroke="#A0A2AF"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div  ref={dropdownRef} className="categoriesDropdown categoriesDropdown--guest-homepage" style={{ display: open ? "flex" : "none" }}>
            <Link className="filterItem cat filterItemActive" href="/">
              featured
            </Link>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/ai-topics"
            >
              AI
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/beauty-topics"
            >
              beauty
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/company-topics"
            >
              company
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/concept-topics"
            >
              concept
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/design-topics"
            >
              design
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/eco-topics"
            >
              eco
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/ecommerce-topics"
            >
              ecommerce
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/education-topics"
            >
              education
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/fashion-topics"
            >
              fashion
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/finance-topics"
            >
              finance
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/fitness-topics"
            >
              fitness
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/food-topics"
            >
              food
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/gaming-topics"
            >
              gaming
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/health-topics"
            >
              health
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/home-topics"
            >
              home
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/lifestyle-topics"
            >
              lifestyle
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/luxury-topics"
            >
              luxury
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/marketing-topics"
            >
              marketing
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/media-topics"
            >
              media
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/pets-topics"
            >
              pets
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/product-topics"
            >
              product
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/sales-topics"
            >
              sales
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/science-topics"
            >
              science
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/social-topics"
            >
              social
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/software-topics"
            >
              software
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/sports-topics"
            >
              sports
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/startup-topics"
            >
              startup
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/technology-topics"
            >
              technology
            </a>
            <a
              className="filterItem cat"
              style={{ textDecoration: "none" }}
              href="/travel-topics"
            >
              travel
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCategoriesSelector;
