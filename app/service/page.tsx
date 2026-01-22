import React from "react";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { BookMarked, Users, ClipboardList, FileSearch } from "lucide-react";
import { serviceBlocks } from "@/data/service";

type Block = (typeof serviceBlocks)[number];

function ServiceGroup({
  icon,
  title,
  description,
  blocks,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
  blocks: Block[];
}) {
  if (!blocks.length) return null;

  return (
    // tighter on mobile, original padding on md+
    <Card className="p-5 md:p-8">
      <div className="flex items-start gap-4">
        {/* Icon column: desktop only (removes mobile indent) */}
        <div className="hidden md:block shrink-0 text-blue-700">{icon}</div>

        <div className="w-full">
          <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>

          {!!description && (
            <p className="text-slate-700 mt-2 max-w-3xl">{description}</p>
          )}

          <div className="mt-6 space-y-5">
            {blocks.map((b, idx) => (
              <div
                key={`${b.title}-${idx}`}
                // If you want subtle structure on desktop, keep it there only:
                className="md:pl-5 md:border-l-4 md:border-blue-700"
              >
                <div className="text-lg font-semibold text-slate-900">
                  {b.title}
                </div>

                <div className="mt-2 space-y-1">
                  {b.lines.map((line, j) => (
                    <div key={`${idx}-${j}`} className="text-slate-700">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Card>
  );
}

export default function ServicePage() {
  // 1) Editorial roles
  const editorial = serviceBlocks.filter((b) =>
    ["Associated Editor", "Editor", "Guest Editor"].includes(b.title)
  );

  // 2) Conference organization (non-TPC chair roles)
  const conferenceOrganization = serviceBlocks.filter((b) =>
    ["Co-Chairs"].includes(b.title)
  );

  // 3) Technical program committees (TPC roles)
  const tpc = serviceBlocks.filter((b) =>
    ["TPC Co-Chairs", "TPC Members"].includes(b.title)
  );

  // 4) Reviewing
  const reviewing = serviceBlocks.filter((b) => ["Reviewers"].includes(b.title));

  return (
    <main className="pt-8 pb-10">

      {/* slightly smaller vertical gaps between sections */}
      <Section className="py-8">
        <div className="space-y-6 md:space-y-8">
          <ServiceGroup
            icon={<BookMarked className="h-9 w-9" />}
            title="Editorial Appointments"
            description=""
            blocks={editorial}
          />

          <ServiceGroup
            icon={<Users className="h-9 w-9" />}
            title="Conference and Workshop Organization"
            description=""
            blocks={conferenceOrganization}
          />

          <ServiceGroup
            icon={<ClipboardList className="h-9 w-9" />}
            title="Technical Program Committees"
            description=""
            blocks={tpc}
          />

          <ServiceGroup
            icon={<FileSearch className="h-9 w-9" />}
            title="Peer Review Activities"
            description=""
            blocks={reviewing}
          />
        </div>
      </Section>
    </main>
  );
}
