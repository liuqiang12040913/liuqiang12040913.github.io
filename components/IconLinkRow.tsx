import Link from 'next/link';
import { GraduationCap, Linkedin, Github, FileText } from 'lucide-react';
import { site } from '@/data/site';

export default function IconLinkRow() {
  const items = [
    { href: site.scholarUrl, label: 'Google Scholar', Icon: GraduationCap },
    { href: site.linkedinUrl, label: 'LinkedIn', Icon: Linkedin },
    { href: site.githubUrl, label: 'GitHub', Icon: Github },
    { href: site.cvUrl, label: 'CV (PDF)', Icon: FileText },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50 transition-colors whitespace-nowrap"
          title={label}
        >
          <Icon className="h-4 w-4" />
          {label}
        </Link>
      ))}
    </div>
  );
}
