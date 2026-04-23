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
            className={`mono-ui rounded-full border px-4 py-2 text-[12px] leading-[1.33] transition ${
              active
                ? "border-white bg-white text-black"
                : "border-[#999999] text-white hover:border-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
