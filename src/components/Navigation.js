"use client";

import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <nav>
      <div className="flex gap-3 items-center">
        <NavLink to="/" name="Home" />
        <NavLink to="/pengganti" name="Pengganti" />
        <NavLink to="/perwakilan" name="Perwalilan" />
      </div>
    </nav>
  );
};

export default Navigation;
