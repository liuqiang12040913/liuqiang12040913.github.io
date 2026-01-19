import Section from "@/components/Section";
import Card from "@/components/Card";
import { Users } from "lucide-react";
import { peopleSections } from "@/data/people";

export default function PeoplePage() {
  return (
    <main className="pt-8 pb-10">
      <Section className="py-6">
        <div className="space-y-8">
          {peopleSections.map((sec) => (
            <Card key={sec.title} className="p-5 md:p-8">
              {/* Section title ONLY (no icon) */}
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                {sec.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {sec.people.map((p) => (
                  <Card key={p.name} className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
                      {/* Student icon: desktop only */}
                      <div className="hidden md:block shrink-0">
                        <Users className="h-8 w-8 text-blue-600 mt-1" />
                      </div>

                      <div className="w-full">
                        {/* Name */}
                        <div className="text-xl font-bold text-slate-900">
                          {p.name}
                        </div>

                        {/* Role */}
                        <div className="text-sm text-slate-600 mt-1">
                          {p.roleLine}
                        </div>

                        {/* Research Focus */}
                        {p.researchFocus && (
                          <div className="mt-3 text-slate-700">
                            <span className="font-semibold text-slate-900">
                              Research Focus:
                            </span>{" "}
                            {p.researchFocus.replace(
                              /^Research Focus:\s*/i,
                              ""
                            )}
                          </div>
                        )}

                        {/* Highlights */}
                        {p.highlights && (
                          <div className="mt-2 text-slate-700">
                            <span className="font-semibold text-slate-900">
                              Highlights:
                            </span>{" "}
                            {p.highlights.replace(
                              /^Highlights:\s*/i,
                              ""
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
