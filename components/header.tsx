import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.svg";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
        <ul className="hidden md:flex items-center gap-6">
          <NavItem text="About Us" href="#about" />
          <NavItem text="Our Clients" href="#clients" />
          <NavItem text="Services" href="#services" />
          <NavItem text="Contact Us" href="#contact" />
        </ul>
        <Link href="#contact" className={cn(buttonVariants(), "ml-auto")}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
