import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: site.name,
  description: `${site.name} — ${site.title} at ${site.university}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-slate-50">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
