type Props = { children: React.ReactNode };

export default function Badge({ children }: Props) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-sm">
      {children}
    </span>
  );
}
