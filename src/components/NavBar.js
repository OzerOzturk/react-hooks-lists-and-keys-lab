import React from "react";

function NavBar() {
  const Links = ["home", "about", "projects"];

  return (
    <nav>
      {Links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
