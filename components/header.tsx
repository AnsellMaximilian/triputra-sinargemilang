import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.svg";
import { Button } from "./ui/button";
import Link from "next/link";

const NavItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-primary font-bold relative after:absolute after:opacity-0 hover:after:opacity-100 after:inset-x-0 after:h-1.5 after:bg-primary after:-bottom-4 transition-all duration-200 after:transition-all after:duration-200"
      >
        {text}
      </Link>
    </li>
  );
};

export default function Header() {
  return (
    <header>
      <nav className="p-4 flex items-center gap-8">
        <Image src={logo} alt="logo" className="w-24" />
        <ul className="flex items-center gap-6">
          <NavItem text="About Us" href="#about-us" />
          <NavItem text="Our Clients" href="/" />
          <NavItem text="Services" href="/" />
          <NavItem text="Contact Us" href="/" />
        </ul>
        <Button className="ml-auto">Contact</Button>
      </nav>
    </header>
  );
}
