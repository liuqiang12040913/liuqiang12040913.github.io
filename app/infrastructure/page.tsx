// app/infrastructure/page.tsx
//
// Lab infrastructure, one card per section: icon + title, description,
// then a photo grid. All content comes from data/infrastructure.ts.

import type { ComponentType } from "react";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { RadioTower, Radio, Car, Bot, ImageOff } from "lucide-react";
import {
  infrastructure,
  type InfraIcon,
  type InfraImage,
  type InfraSection,
} from "@/data/infrastructure";

const ICONS: Record<InfraIcon, ComponentType<{ className?: string }>> = {
  cots: RadioTower,
  sdr: Radio,
  vehicle: Car,
  robot: Bot,
};

function Gallery({ images, note }: { images: InfraImage[]; note?: string }) {
  if (images.length === 0) {
    return (
      <div className="mt-6 flex h-40 items-center justify-center gap-3 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 text-slate-500">
        <ImageOff className="h-5 w-5" />
        <span>{note ?? "Photos coming soon."}</span>
      </div>
    );
  }
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
      {images.map((img) => (
        <figure key={img.src} className="min-w-0">
          <a href={img.src} target="_blank" rel="noopener noreferrer" title="Open full-size image">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl border border-slate-100 object-cover shadow-soft transition-transform hover:scale-[1.02]"
            />
          </a>
          {img.caption ? (
            <figcaption className="mt-2 text-sm text-slate-600">{img.caption}</figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

function InfraCard({ section }: { section: InfraSection }) {
  const Icon = ICONS[section.icon];
  return (
    <Card className="p-5 md:p-8">
      <div id={section.id} className="flex items-center gap-4 scroll-mt-28">
        <div className="hidden md:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
          {section.subtitle ? (
            <p className="mt-0.5 text-blue-700">{section.subtitle}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-5 space-y-3 text-slate-700 leading-relaxed">
        {section.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Gallery images={section.images} note={section.imagesNote} />
    </Card>
  );
}

export default function InfrastructurePage() {
  return (
    <main className="pt-8 pb-10">
      <Section className="py-10">
        <div className="space-y-8">
          {infrastructure.map((s) => (
            <InfraCard key={s.id} section={s} />
          ))}
        </div>
      </Section>
    </main>
  );
}
