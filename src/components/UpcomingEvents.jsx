import "./UpcomingEvents.css";

const events = [
  {
    tag: "Speaker Session",
    date: "14 Nov 2026",
    title: "Building Careers in Age of AI",
    image: "/event%201.jpeg",
    desc: "Featuring Akshat Gupta, Software Development Engineer at Amazon Search and a UC Berkeley graduate specializing in AI and distributed systems, alongside Ruchi Bhatia, Technical Product Marketing Manager at AWS and a renowned Tech Content Creator. Together, they will share valuable insights into building successful careers in the age of AI, exploring emerging technologies, industry trends, and exciting opportunities in the ever-evolving tech landscape.",
    url: "https://meet.google.com/xqv-kirv-cxq",
    soon: false,
  },
  {
    tag: "Coming Soon",
    date: "Date TBA",
    title: "To be announced",
    desc: "Another session is on the way. Stay tuned.",
    url: "",
    soon: true,
  },
  {
    tag: "Coming Soon",
    date: "Date TBA",
    title: "To be announced",
    desc: "Another session is on the way. Stay tuned.",
    url: "",
    soon: true,
  },
  {
    tag: "Coming Soon",
    date: "Date TBA",
    title: "To be announced",
    desc: "Another session is on the way. Stay tuned.",
    url: "",
    soon: true,
  },
];

// 3D tilt effect
const tiltMove = (e) => {
  if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();

  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  el.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`;
};

const tiltLeave = (e) => {
  e.currentTarget.style.transform = "";
};

export default function UpcomingEvents() {
  return (
      <section id="events" className="osw-sec upcoming-events">
        <div className="osw-w">

          <p className="osw-k">Upcoming events</p>

          <h2 className="osw-h2">
            Next <span className="osw-out">up.</span>
          </h2>

          <div
              className="upcoming-events-list"
              tabIndex={0}
              aria-label="Upcoming events, scroll horizontally"
          >
            {events.map((event, i) => (
                <article
                    className={`upcoming-event-card${event.soon ? " is-soon" : ""}`}
                    key={i}
                    onPointerMove={tiltMove}
                    onPointerLeave={tiltLeave}
                >
              <span
                  className="upcoming-event-number"
                  aria-hidden="true"
              >
                0{i + 1}
              </span>

                  {/* Event Poster */}
                  {event.image && (
                      <div className="upcoming-event-poster-wrapper">
                        <img
                            className="upcoming-event-poster"
                            src={event.image}
                            alt={`${event.title} poster`}
                            loading="lazy"
                        />
                      </div>
                  )}

                  {/* Event Date and Tag */}
                  <span className="upcoming-event-meta">
                {event.tag} · {event.date}
              </span>

                  {/* Event Title */}
                  <h3>{event.title}</h3>

                  {/* Speaker */}
                  {event.speaker && (
                      <p className="upcoming-event-speaker">
                        with {event.speaker}
                      </p>
                  )}

                  {/* Time and Venue */}
                  {event.time && (
                      <p className="upcoming-event-info">
                        {event.time}
                        <br />
                        {event.venue}
                      </p>
                  )}

                  {/* Description */}
                  <p className="upcoming-event-description">
                    {event.desc}
                  </p>

                  {/* Event Link */}
                  {event.url ? (
                      <a
                          className="upcoming-event-link"
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        Join Session ↗
                      </a>
                  ) : (
                      <span
                          className="upcoming-event-link"
                          aria-disabled="true"
                      >
                  {event.soon ? "Stay tuned" : "Link coming soon"}
                </span>
                  )}
                </article>
            ))}
          </div>

        </div>
      </section>
  );
}
