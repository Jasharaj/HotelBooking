import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-gray-500 dark:bg-base-300 p-4 ">
      <aside>
        <p>
          Copyright © ${new Date().getFullYear()} - All rights reserved by Mayfair
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
