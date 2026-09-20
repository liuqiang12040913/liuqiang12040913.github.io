// app/publications/page.tsx
//
// Publications grouped by research direction, newest first within each
// direction. Venue shown as a compact tag beside the title, authors on a
// second line (my name bolded), and 2-3 research keywords on the right. Data comes from data/publications.generated.ts, which is
// produced from data/publications.bib by `npm run pubs`.

import type { ComponentType } from "react";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { Award, Bot, Cpu, RadioTower, BookOpen } from "lucide-react";
import { site } from "@/data/site";
import {
  researchAreas,
  type Publication,
  type ResearchArea,
} from "@/data/publications.generated";

// "Qiang Liu, Ph.D." -> "Qiang Liu"
const ME = site.name.split(",")[0].trim().toLowerCase();

const AREA_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  wireless: RadioTower,
  embodied: Bot,
  cps: Cpu,
};

function VenueTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-blue-700 px-2 py-0.5 text-sm font-bold tracking-wide text-white whitespace-nowrap align-middle">
      {children}
    </span>
  );
}

function AwardBadge({ label }: { label: string }) {
  // "Best Paper Award" -> "Best Paper" (badge already implies an award)
  const short = label.replace(/\s+award$/i, "");
  return (
    <span
      className="inline-flex items-center gap-1 rounded-md border border-amber-300 bg-amber-100 px-2 py-0.5 text-sm font-semibold text-amber-800 whitespace-nowrap align-middle"
      title={label}
    >
      <Award className="h-3.5 w-3.5" />
      {short}
    </span>
  );
}

function KeywordTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 whitespace-nowrap">
      {children}
    </span>
  );
}

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((a, i) => {
        const isMe = a.trim().toLowerCase() === ME;
        return (
          <span key={`${a}-${i}`}>
            {i > 0 ? ", " : null}
            <span className={isMe ? "font-semibold text-blue-700" : undefined}>
              {a}
            </span>
          </span>
        );
      })}
    </>
  );
}

function PublicationEntry({ p }: { p: Publication }) {
  return (
    <li className="py-4 first:pt-0 last:pb-0">
      {/* Row 1: venue tag (+ award badge) + title */}
      <div className="text-lg leading-snug">
        <span className="mr-2 inline-flex flex-wrap items-center gap-1.5 align-middle">
          <VenueTag>{p.venueTag}</VenueTag>
          {p.award ? <AwardBadge label={p.award} /> : null}
        </span>
        <span className="font-semibold text-slate-900 align-middle">
          {p.title}
        </span>
      </div>

      {/* Row 2: authors (left) + keywords (right) */}
      <div className="mt-1.5 flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <p className="text-slate-700 leading-relaxed">
          <AuthorList authors={p.authors} />
        </p>
        {p.keywords.length ? (
          <div className="flex flex-wrap gap-1.5 sm:shrink-0 sm:justify-end sm:max-w-[45%] sm:pt-0.5">
            {p.keywords.map((k) => (
              <KeywordTag key={k}>{k}</KeywordTag>
            ))}
          </div>
        ) : null}
      </div>
    </li>
  );
}

function AreaSection({ area }: { area: ResearchArea }) {
  const Icon = AREA_ICONS[area.id] ?? BookOpen;
  return (
    <Card className="p-5 md:p-8">
      <div id={area.id} className="flex items-center gap-4 scroll-mt-28">
        <div className="hidden md:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">
          {area.title}
        </h2>
      </div>

      <ul className="mt-6 divide-y divide-slate-100">
        {area.items.map((p) => (
          <PublicationEntry key={p.id} p={p} />
        ))}
      </ul>
    </Card>
  );
}

export default function PublicationsPage() {
  return (
    <main className="pt-8 pb-10">
      <Section className="py-10">
        <div className="space-y-8">
          {researchAreas.map((area) => (
            <AreaSection key={area.id} area={area} />
          ))}

          <Card className="p-5 md:p-8">
            <h2 className="text-2xl font-semibold text-slate-900">
              View Full Publication List
            </h2>
            <p className="text-slate-600 mt-2">
              For the complete list, please refer to Google Scholar.
            </p>
            <div className="mt-6">
              <a
                href={site.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                View Full Publication List on Google Scholar →
              </a>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
