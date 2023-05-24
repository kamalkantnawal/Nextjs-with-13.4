export default function ComponentsLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      <h1>Component layout</h1>
      {children}
    </section>
  );
}
