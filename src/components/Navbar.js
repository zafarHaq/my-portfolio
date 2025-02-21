"use client"; // Required for interactive components in Next.js (App Router)

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white p-4 flex justify-center space-x-6">
      <Link href="/" className="hover:text-cyan-400">
        Home
      </Link>
      <Link href="/about" className="hover:text-cyan-400">
        About
      </Link>
      <Link href="/projects" className="hover:text-cyan-400">
        Projects
      </Link>
      <Link href="/contact" className="hover:text-cyan-400">
        Contact
      </Link>
    </nav>
  );
}
