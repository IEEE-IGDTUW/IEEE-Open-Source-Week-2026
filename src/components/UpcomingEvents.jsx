
import "./UpcomingEvents.css";

const events = [
  {
    tag: "Speaker Session",
    date: "14 Nov 2026",
    title: "Building Careers in Age of AI",
    image: "/event%201.jpeg",
    desc: "Featuring Akshat Gupta, Software Development Engineer at Amazon Search and UC Berkeley graduate, alongside Ruchi Bhatia, Technical Product Marketing Manager at AWS and Tech Content Creator. Gain valuable insights into building careers in the age of AI, emerging technologies, and opportunities in the evolving tech industry.",
    url: "https://meet.google.com/xqv-kirv-cxq",
    soon: false,
  },
  {
    tag: "Speaker Session",
    date: "15 Nov 2026",
    title: "Navigating Path to Success",
    image: "/event%202.jpeg",
    desc: "Featuring Palak Awasthi, Software Engineer at Salesforce, recognised among the Top 100 Influential Voices in AI, Google Women Techmakers Ambassador, and mentor to 7K+ learners. Gain valuable insights into AI, DSA, software engineering, and building a successful career in tech.",
    url: "https://meet.google.com/cqj-xpjq-sbk",
    soon: true,
  },
  {
    tag: "Workshop",
    date: "16 Nov 2026",
    title: "Hack Your Own Code Before Someone Else Does",
    image: "/workshop-nakul-singh.png",
    desc: "A cybersecurity workshop led by Nakul Singh, a security professional with 3+ years of hands-on experience in web, mobile and API security testing. He has published cybersecurity research in a Routledge book and has received multiple CVE credits for discovering vulnerabilities.",
    url: "https://meet.google.com/eya-axsc-hdy",
    soon: false,
  },
  {
    tag: "Collaboration",
    date: "17 Nov 2026",
    title: "IEEE IGDTUW × Notion",
    image: "/ieee-igdtuw-notion.png",
    desc: "An exciting collaboration between IEEE IGDTUW and Notion. Join us for an engaging session and explore the possibilities of productivity, technology and collaboration.",
    url: "",
    soon: false,
  },
  {
    tag: "Speaker Session",
    date: "17 Nov 2026",
    title: "Speaker Session with Vipul Gupta",
    image: "/vipul-gupta.png",
    desc: "Featuring Vipul Gupta, Product Owner with 10+ years of experience in tech and product development, GitHub Star and active open-source contributor. He has spoken at global tech conferences, including Open Source Summit Europe, and built thriving developer communities with 15K+ members.",
    url: "",
    soon: false,
  },
  {
    tag: "Speaker Session",
    date: "17 Nov 2026",
    title: "Cybersecurity & Security Operations",
    image: "/sparsh-shishodia-nitika-rathee.png",
    desc: "Featuring Sparsh Shishodia, a full-stack developer passionate about building scalable applications, skilled in React.js, Node.js and modern backend technologies, alongside Nitika Rathee, an engineering student at GGSIPU with hands-on experience in Cybersecurity and Security Operations (SOC).",
    url: "",
    soon: false,
  },
  {
    tag: "Masterclass",
    date: "18 Nov 2026",
    title: "Content Creation Masterclass",
    image: "/naman-pal.png",
    desc: "Featuring Naman Pal, a software engineer passionate about AI, technology and innovation, and a digital content creator who makes tech simple, engaging and relatable. Explore the intersection of AI, creativity and content creation.",
    url: "",
    soon: false,
  },
  {
    tag: "Speaker Session",
    date: "19 Nov 2026",
    title: "Speaker Session with Jaskaran Singh",
    image: "/jaskaran-singh.png",
    desc: "Featuring Jaskaran Singh, ICPC World Finals 2023 participant and AIR 1 in ICPC Regionals. An ex-Google professional and entrepreneur, Codeforces Master (2216 rating), IIIT'24 graduate and Inter-IIIT Gold Medalist with 64K+ LinkedIn followers.",
    url: "",
    soon: false,
  },
  {
    tag: "Live Performance",
    date: "19 Nov 2026",
    title: "Live Musical Performance",
    image: "/prathmesh-singh.png",
    desc: "Get ready for a musical experience with Prathmesh Singh, an IITian by degree and a singer-songwriter by heart, spreading love through melodies.",
    url: "",
    soon: false,
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
                  {event.soon ? "Stay tuned" : "Event Details"}
                </span>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
