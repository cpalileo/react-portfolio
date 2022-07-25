import React from "react";

function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex-row">
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="connect">Contact</a>
          </li>
          <li>
            <a href="resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
