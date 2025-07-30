import Link from "next/link";
/**
 * Custom 404 page for Next.js App Router.
 * Pure server component, no client logic.
 */
export default function NotFound() {
  return (
    <div
      style={{
        padding: "6rem 2rem",
        textAlign: "center",
        color: "#424242",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: 92,
          fontWeight: 800,
          color: "#1976d2",
          letterSpacing: "-3px",
          fontFamily: "inherit",
        }}
      >
        404
      </div>
      <h1 style={{ fontSize: 32, margin: "1.5rem 0 1rem 0", color: "#1976d2" }}>
        Page not found
      </h1>
      <p style={{ marginBottom: "2rem" }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        style={{
          background: "#1976d2",
          color: "#fff",
          borderRadius: 5,
          padding: "0.65em 1.8em",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: 18,
          boxShadow: "0 2px 8px #0001",
        }}
      >
        Go Home
      </Link>
    </div>
  );
}
