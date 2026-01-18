import Section from "@/components/Section";
import Card from "@/components/Card";
import { Users } from "lucide-react";
import { peopleSections } from "@/data/people";

export default function PeoplePage() {
  return (
    <main className="pt-8 pb-10">
      <Section className="py-6">
        <h1 className="text-5xl font-bold text-slate-900">PEOPLE</h1>
        <hr className="mt-6 border-t-4 border-blue-700" />
      </Section>

      <Section className="py-10">
        <div className="space-y-10">
          {peopleSections.map((sec) => (
            <Card key={sec.title} className="p-5 md:p-8">
              <div className="flex items-start gap-4">
                {/* Section icon: desktop only (prevents mobile indent) */}
                <div className="hidden md:block shrink-0 text-blue-700">
                  <Users className="h-9 w-9" />
                </div>

                <div className="w-full">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {sec.title}
                  </h2>

                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    {sec.people.map((p) => (
                      <Card key={p.name} className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
                          {/* Icon: desktop only */}
                          <div className="hidden md:block shrink-0">
                            <Users className="h-8 w-8 text-blue-600 mt-1" />
                          </div>

                          {/* Content: full width on mobile */}
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
                            {p.researchFocus ? (
                              <div className="mt-3 text-slate-700">
                                <span className="font-semibold text-slate-900">
                                  Research Focus:
                                </span>{" "}
                                {p.researchFocus.replace(/^Research Focus:\s*/i, "")}
                              </div>
                            ) : null}

                            {/* Highlights */}
                            {p.highlights ? (
                              <div className="mt-2 text-slate-700">
                                <span className="font-semibold text-slate-900">
                                  Highlights:
                                </span>{" "}
                                {p.highlights.replace(/^Highlights:\s*/i, "")}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </Card>

                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
