
import { useState } from "react";
import logo from "../assets/ieee-logo.png";

const LINKS = [
  ["About", "#about"],
  ["Timeline", "#timeline"],
  ["Events", "#events"],
  ["Speakers", "#speakers"],
  ["FAQ", "#faq"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Primary">
      <div className="w">
        <a className="lg" href="#hero" aria-label="IEEE IGDTUW – Home">
          <img src={logo} alt="IEEE IGDTUW" />
        </a>

        <button
          className="bg"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="ls"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>

        <div
          className={"ls" + (open ? " o" : "")}
          id="ls"
          onClick={(e) => {
            if (e.target.tagName === "A") setOpen(false);
          }}
        >
          {LINKS.map(([text, href]) => (
            <a key={href} href={href}>
              {text}
            </a>
          ))}

          {/* Join Discord */}
          <a
            href="https://discord.gg/2zKh4dp7J"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: "#5865F2",
              color: "#fff",
              border: "1px solid #5865F2",
              borderRadius: "8px",
              padding: "10px 18px",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#4752C4";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#5865F2";
            }}
          >
            Join Discord
          </a>

          {/* Register */}
          <a className="btn" href="#register">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}
