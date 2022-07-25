import React from "react";

function Footer() {
  return (
    <footer>
      <h4 id="footer">
        <span>Connect With Me</span>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#git">GitHub</a>
          </li>
          <li>
            <a href="#linkedin">LinkedIn</a>
          </li>
          <li>
            <a href="#email">Email</a>
          </li>
        </ul>
      </h4>
    </footer>
  );
}

export default Footer;
