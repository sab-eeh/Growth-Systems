export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl px-4 py-2 sm:px-6 sm:py-10 ${className}`}
    >
      {children}
    </section>
  );
}
