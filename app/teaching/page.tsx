import Section from "@/components/Section";
import Card from "@/components/Card";
import { BookOpen } from "lucide-react";
import { teaching } from "@/data/teaching";

/**
 * Extract term like "2025 Fall" from:
 *   "Instructor, 2025 Fall, UNL"
 */
function extractTerm(roleLine: string): string {
  const match = roleLine.match(/(\d{4}\s+(Fall|Spring|Summer))/);
  return match ? match[1] : "—";
}

/**
 * Remove term from roleLine to keep the rest clean
 */
function stripTerm(roleLine: string): string {
  return roleLine
    .replace(/,\s*\d{4}\s+(Fall|Spring|Summer)/, "")
    .replace(/^Instructor,\s*/, "");
}

function TermTag({ term }: { term: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 text-sm font-semibold whitespace-nowrap">
      {term}
    </span>
  );
}

export default function TeachingPage() {
  return (
    <main className="pt-8 pb-10">
      <Section className="py-6">
        <h1 className="text-5xl font-bold text-slate-900">TEACHING</h1>
        <hr className="mt-6 border-t-4 border-blue-700" />
      </Section>

      <Section className="py-8">
        <Card className="p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="h-9 w-9 text-blue-700" />
            <h2 className="text-2xl font-semibold text-slate-900">
              Courses
            </h2>
          </div>

          {/* Course list */}
          <div className="space-y-4">
            {teaching.map((c, idx) => {
              const term = extractTerm(c.roleLine);
              const rest = stripTerm(c.roleLine);

              return (
                <div
                  key={`${c.course}-${idx}`}
                  className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4"
                >
                  {/* Term tag */}
                  <div className="md:w-28 md:shrink-0">
                    <TermTag term={term} />
                  </div>

                  {/* Course info */}
                  <div>
                    <div className="text-lg font-semibold text-slate-900">
                      {c.course}
                    </div>
                    <div className="text-slate-700 mt-1">
                      {rest}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </Section>
    </main>
  );
}
