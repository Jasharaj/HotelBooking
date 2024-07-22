import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-black p-4 ">
      <aside>
        <p>
          Copyright © ${new Date().getFullYear()} - All rights reserved by Mayfair
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
