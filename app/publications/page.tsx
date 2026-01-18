// app/publications/page.tsx
import Section from "@/components/Section";
import Card from "@/components/Card";
import { BookOpen, Award } from "lucide-react";
import { site } from "@/data/site";
import { publicationGroups as publications } from "@/data/publications.generated";

function sortDescYear<T extends { year: number }>(arr: T[]) {
  return [...arr].sort((a, b) => b.year - a.year);
}

export default function PublicationsPage() {
  return (
    <main className="pt-8 pb-10">
      <Section className="py-6">
        <h1 className="text-5xl font-bold text-slate-900">PUBLICATION</h1>
        <hr className="mt-6 border-t-4 border-blue-700" />
      </Section>

      <Section className="py-10">
        <div className="space-y-10">
          {publications.map((sec) => (
            <Card key={sec.sectionTitle} className="p-5 md:p-8">
              {/* IMPORTANT: stack on mobile to avoid "indent" caused by left icon column */}
              <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
                {/* Icon: desktop only */}
                <div className="hidden md:block shrink-0 text-blue-700">
                  <BookOpen className="h-9 w-9" />
                </div>

                {/* Mobile header row: icon + title inline */}
                <div className="flex items-center gap-3 md:hidden">
                  <div className="shrink-0 text-blue-700">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {sec.sectionTitle}
                  </h2>
                </div>

                <div className="w-full">
                  {/* Desktop title */}
                  <h2 className="hidden md:block text-2xl font-semibold text-slate-900">
                    {sec.sectionTitle}
                  </h2>

                  <div className="mt-5 space-y-2 md:space-y-3">
                    {sortDescYear(sec.items).map((p, idx) => (
                      <div
                        key={`${p.title}-${idx}`}
                        className={[
                          "relative md:pl-5",
                          p.isBestPaper
                            ? "bg-amber-50/60 rounded-lg py-3 md:py-4 md:pr-4"
                            : "py-3",
                        ].join(" ")}
                      >
                        {/* Short vertical line — desktop only */}
                        <span
                          className={[
                            "hidden md:block absolute left-0 top-4 w-[3px]",
                            "h-[5.75rem]", // ≈ height of 3 text rows
                            p.isBestPaper ? "bg-amber-400" : "bg-blue-700",
                            "rounded-full",
                          ].join(" ")}
                        />

                        {/* Row 1: FULL venue + year (highlighted) */}
                        <div className="text-lg font-semibold text-blue-700">
                          {p.venue}
                          {p.year ? `, ${p.year}` : ""}
                        </div>

                        {p.isBestPaper ? (
                          <div className="mt-1 inline-flex items-center gap-2 text-amber-700 font-semibold text-sm">
                            <Award className="h-4 w-4" />
                            Best Paper Award
                          </div>
                        ) : null}

                        <div className="mt-1 text-lg font-semibold text-slate-900">
                          {p.title}
                        </div>
                        <div className="mt-2 text-slate-700 whitespace-pre-wrap">
                          {p.authors}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
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
