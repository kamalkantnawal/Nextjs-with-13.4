import "@styles/globals.css";
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      <h1 className="orange_gradient font-medium">Welcome to AI 2.O</h1>
      {children}
    </section>
  );
}
