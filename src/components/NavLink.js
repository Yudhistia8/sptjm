"use client";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

const NavLink = ({ to, name }) => {
  const path = usePathname();

  return (
    <nav>
      <Link
        className={buttonVariants({
          variant: path === to ? "destructive" : "default",
          size: "sm",
        })}
        href={to}
      >
        {name}
      </Link>
    </nav>
  );
};

export default NavLink;
