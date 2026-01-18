import Link from 'next/link';
import { site } from '@/data/site';

export default function Navigation() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src={site.avatarUrl}
            alt={site.name}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="font-semibold text-slate-900 text-lg">{site.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl font-semibold text-slate-800 hover:text-blue-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <details className="relative">
            <summary className="cursor-pointer select-none text-slate-700">Menu</summary>
            <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white border shadow-soft overflow-hidden z-50">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
