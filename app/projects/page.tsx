import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="pt-8 pb-10">
      <Section className="py-6">
        <div className="flex items-center gap-8 mb-8">
          <h1 className="text-5xl font-bold text-slate-900">PROJECT</h1>
        </div>
        <hr className="border-t-4 border-blue-700" />
      </Section>

      <Section className="py-10">
        <div className="space-y-8">
          {projects.map((p) => (
            <Card key={p.id} className="p-8 border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{p.title}</h2>

              <div className="space-y-2 text-slate-700">
                <p>
                  <span className="font-semibold">Funding Source:</span>{' '}
                  {p.fundingUrl ? (
                    <a
                      href={p.fundingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      {p.awardLabel ?? p.fundingSource}
                    </a>
                  ) : (
                    <span>{p.fundingSource}</span>
                  )}
                </p>
                {p.totalBudget ? (
                  <p>
                    <span className="font-semibold">Total Budget:</span> {p.totalBudget}
                  </p>
                ) : null}
                {p.role ? (
                  <p>
                    <span className="font-semibold">Role:</span> {p.role}
                  </p>
                ) : null}
                {p.duration ? (
                  <p>
                    <span className="font-semibold">Duration:</span> {p.duration}
                  </p>
                ) : null}
                {p.abstract ? (
                  <p>
                    <span className="font-semibold">Abstract:</span> {p.abstract}
                  </p>
                ) : null}
              </div>

              {p.tags?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              ) : null}

              {p.ctaLabel && p.ctaUrl ? (
                <div className="mt-6">
                  <a
                    href={p.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                  >
                    {p.ctaLabel}
                  </a>
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
