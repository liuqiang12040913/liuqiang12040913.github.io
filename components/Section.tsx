type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ title, children, className }: Props) {
  return (
    <section className={"max-w-7xl mx-auto px-6 py-6 " + (className ?? "")}>
      {title ? (
        <h2 className="text-3xl font-semibold text-slate-900 mb-6">{title}</h2>
      ) : null}
      {children}
    </section>
  );
}
