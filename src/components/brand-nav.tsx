"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Models", href: "/models" },
  { label: "Academy", href: "/academy" },
  { label: "About", href: "/about" },
];

export function BrandNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
      {navItems.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-full border px-4 py-1.5 transition ${
              active
                ? "border-emerald-300/60 bg-emerald-300/15 text-white"
                : "border-white/10 text-slate-300 hover:border-emerald-300/40 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
