import { Mail, MapPin, Phone } from 'lucide-react';
import Section from '@/components/Section';
import Card from '@/components/Card';
import IconLinkRow from '@/components/IconLinkRow';
import { site } from '@/data/site';
import { Newspaper } from "lucide-react";

function NewsTag({ tag }: { tag?: string }) {
  if (!tag) return null;

  const styles: Record<string, string> = {
    Grant: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    Award: "bg-amber-50 text-amber-700 border border-amber-200",
    Paper: "bg-blue-50 text-blue-700 border border-blue-200",
    Media: "bg-purple-50 text-purple-700 border border-purple-200",
    Service: "bg-slate-100 text-slate-700 border border-slate-200",
    Student: "bg-cyan-50 text-cyan-700 border border-cyan-200",
    Other: "bg-gray-50 text-gray-700 border border-gray-200",
  };

  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap",
        styles[tag] ?? styles.Other,
      ].join(" ")}
    >
      {tag}
    </span>
  );
}



export default function HomePage() {
  return (
    <main className="pt-8 pb-10">
      <Section className="py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4">{site.name}</h1>
            <p className="text-xl text-blue-700 mb-6">{site.title}</p>

            <p className="text-lg text-slate-700 leading-relaxed mb-2">
              {site.department}
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              {site.university}
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-slate-700">
                <Mail className="h-6 w-6 text-blue-600" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-blue-700 transition-colors"
                >
                  {site.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Phone className="h-6 w-6 text-blue-600" />
                <a
                  href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-blue-700 transition-colors"
                >
                  {site.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="h-6 w-6 text-blue-600" />
                <a
                  href={site.addressUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition-colors"
                >
                  {site.addressLabel}
                </a>
              </div>
            </div>

            <IconLinkRow />
          </div>

         <div className="hidden md:flex justify-center">
          <img
            src={site.portraitUrl}
            alt={`Dr. ${site.name}`}
            className="rounded-xl shadow-soft w-full max-w-[180px] md:max-w-[240px] object-cover"
          />
        </div>

        </div>
      </Section>

      <Section className="py-6">
        <Card className="p-10">
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              I am an Assistant Professor in the School of Computing, University of Nebraska-Lincoln. 
              Before joining UNL, I was a Member of Technical Staff at Nokia Bell Labs. 
              I obtained my Ph.D. degree in Electrical Engineering at the University of North Carolina at Charlotte, supervised by Dr. Tao Han. 
            </p>
            
            <p>
              My research goal is to design, develop, and implement networking algorithms and systems for next-gen AI-native wireless networks, and support diversified emerging mobile applications, such as Extended Reality, Autonomous Driving, and Internet of Things. 
              My research philosophy is to integrate theoretical optimization and system experiments in real-world at-scale networks and systems.
              I am the principal investigator of Husker-Net, the first multi-campus private 5G network at the University of Nebraska-Lincoln, supported by NSF Campus Cyberinfrastructure (CC*) program.
            </p>
            <p className="font-medium text-blue-800">
              I am actively looking for self-motivated Ph.D. students to join my research group. If you are interested in working with me, please send me an email with your CV and research interests.
            </p>
          </div>
        </Card>
      </Section>

      <Section title="Research Interests" className="py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {site.interests.map((i) => (
            <Card key={i.title} className="p-7">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{i.title}</h3>
              <p className="text-slate-700 leading-relaxed">{i.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* News */}
      <Section className="py-10">
        <Card className="p-10">
          {/* Header row */}
          <div className="flex items-center gap-4">
            <Newspaper className="h-10 w-10 text-blue-600" />
            <h2 className="text-3xl font-semibold text-slate-900">News</h2>
          </div>

          {/* List: no indent */}
          <div className="mt-5 space-y-2">
            {site.news.map((n) => (
              <div key={`${n.date}-${n.text}`} className="flex items-start gap-3">
                {/* Tag (desktop only) */}
                <div className="hidden md:flex w-20 shrink-0 pt-0.5 justify-end">
                  <NewsTag tag={n.tag} />
                </div>

                {/* Date + text */}
                <div className="text-slate-900 leading-relaxed">
                  <span className="font-semibold">{n.date}</span>{" "}
                  <span className="text-slate-700">{n.text}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

      </Section>


    </main>
  );
}
