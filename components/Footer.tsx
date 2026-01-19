import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-200">
        {site.footerText}
      </div>
    </footer>
  );
}
