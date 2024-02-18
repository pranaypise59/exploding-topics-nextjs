import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="main_footer dark_footer">
      <div className="container">
        <div className="footer_block_list d-flex">
          <div className="footer_block f_logo_block">
            <Link href="/">
              <Image
                src="/static/logo.svg"
                alt="Exploding Topics"
                width={240}
                height={200}
              />
            </Link>
          </div>
          <div className="footer_block f_menu_block">
            <h6>Explore</h6>
            <ul className="footer_menu">
              <li>
                <a href="/new">Add a Topic</a>
              </li>
              <li>
                <a href="/newsletter">Newsletter</a>
              </li>
              <li>
                <a href="/blog/library">Blog</a>
              </li>
              <li>
                <a href="/affiliate">Affiliates</a>
              </li>
            </ul>
          </div>
          <div className="footer_block f_menu_block">
            <h6>Company</h6>
            <ul className="footer_menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer_block f_address_block">
            <h6>Connect</h6>
            <p>
              548 Market St. Suite 95149 <br />
              San Francisco, California
            </p>
          </div>
        </div>
        <div className="footer_bottom d-flex">
          <div className="f_b_links">
            <ul className="d-flex">
              <li>
                <a className="footerLink" href="/privacy">
                  Privacy Notice
                </a>
              </li>
              <li>
                <a className="footerLink" href="/terms">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright_text">
            <span>© </span>
            <span>2024</span>
            <span>
              {" "}
              {/* */} <Link href="/">Exploding Topics</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
