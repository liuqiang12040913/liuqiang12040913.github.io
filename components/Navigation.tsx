"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: name */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src={site.avatarUrl}
            alt={site.name}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="font-semibold text-slate-900 text-lg">
            {site.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary navigation"
        >
          {site.nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  // keep original typography + spacing
                  "text-xl font-semibold transition-colors",
                  // pill shape (keeps layout stable)
                  "px-4 py-1.5 rounded-lg",
                  active
                    ? "bg-blue-600 text-white"
                    : "text-slate-800 hover:text-blue-700 hover:bg-slate-100",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <details className="relative">
            <summary
              className="cursor-pointer select-none text-slate-700 px-3 py-2 rounded-md hover:bg-slate-50"
              aria-haspopup="true"
              aria-label="Open menu"
            >
              Menu
            </summary>

            <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white border shadow-soft overflow-hidden z-50">
              {site.nav.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "block px-4 py-3 text-slate-700",
                      active
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
