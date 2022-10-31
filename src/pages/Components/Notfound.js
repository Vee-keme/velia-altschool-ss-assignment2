export function Notfound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "93vh",
        backgroundColor: "#0d1117",
        color: "#8b949e",
      }}
    >
      <h1>The Requested content is unavailable</h1>
      <a
        style={{
          display: "block",
          textDecoration: "none",
          fontSize: "1.1rem",
          color: "#8b949e",
        }}
        href="/"
      >
        Go To Home
      </a>
    </div>
  );
}
