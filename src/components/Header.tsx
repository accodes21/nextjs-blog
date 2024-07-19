"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import TransitionLink from "./TransitionLink";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="/vercel.svg"
          alt="logo"
          width={56}
          height={56}
          className="w-[56px] h-[56px]"
        />
      </Link>

      <nav>
        <ul className="flex gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <TransitionLink
                href={link.href}
                className={`${
                  pathname === link.href ? "text-zinc-900" : "text-zinc-400"
                } hover:text-zinc-900 transition-all text-xl title`}
              >
                {link.label}
              </TransitionLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
