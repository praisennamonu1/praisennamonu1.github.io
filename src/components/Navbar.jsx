import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const items = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed w-full backdrop-blur z-50">
      <div className="max-w-5xl mx-auto text-white flex items-center justify-between p-4">
        <Link className="flex gap-2 align-center" href="/">
          <img src="/logo.svg" className="h-6 w-6" alt="" />
          <span className="text-xl font-bold">Praise Nnamonu</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {items.map((i) => (
            <Link key={i.href} href={i.href}>
              <span className="hover:underline">{i.label}</span>
            </Link>
          ))}
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
