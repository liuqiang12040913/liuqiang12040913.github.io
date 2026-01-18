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
    <div className="flex items-center gap-4">
      {items.map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
          aria-label={label}
          title={label}
        >
          <Icon className="h-6 w-6" />
        </Link>
      ))}
    </div>
  );
}
