import React from "react";

const Header = () => {
  return (
    <header className="bg-primary text-contrast p-2 flex justify-between fixed w-screen bottom-0 sm:bottom-auto sm:top-0">
      <a href="/" className="text-xl hidden sm:flex">
        CityData
      </a>
      <nav className="flex justify-around w-full sm:w-1/2 xl:w-1/4 gap-2">
        <a className="p-1 hover:text-secondary" href="/countries">
          Countries
        </a>
        <a className="p-1 hover:text-secondary" href="/cities">
          Cities
        </a>
        <a className="p-1 hover:text-secondary" href="/about">
          About
        </a>
        <a className="p-1 hover:text-secondary" href="/contact">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
