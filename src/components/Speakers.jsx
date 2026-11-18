import useReveal from '../hooks/useReveal';
import '../styles/osw-shared.css';
import './Speakers.css';

/* ---------- EDIT SPEAKER CONTENT HERE ---------- */
const SPEAKERS = [
  {
    id: '01',
    name: 'Ruchi Bhatia',
    role: 'Technical Product Marketing Manager at AWS and Tech Content Creator',
    img: '/Ruchi%20Bhatia.jpg',
  },
  {
    id: '02',
    name: 'Akshat Gupta',
    role: 'Software Development Engineer at Amazon Search',
    img: '/Akshat%20Gupta.jpg',
  },
  {
    id: '03',
    name: 'Palak Awasthi',
    role: 'Software Engineer at Salesforce',
    img: '/Palak%20Awasthi.jpg',
  },

{
  id: '04',
  name: 'Vipul Gupta',
  role: 'Product Owner, GitHub Star and Open Source Contributor',
  img: 'https://commandcode.ai/www/about/team/vipulgupta.png',
},
{
  id: '05',
  name: 'Jaskaran Singh',
  role: 'ICPC World Finals 2023 Participant and Codeforces Master',
  img: 'https://algoqueen.icpc.global/Jaskaran%20Singh.jpg?auto=format&fit=crop&q=80&w=880',
},
{
  id: '06',
  name: 'Naman Pal',
  role: 'Software Engineer and Tech Content Creator',
  img: 'https://ik.imagekit.io/gfuz8xxgp/naman_image.jpg?updatedAt=1751610026426',
},

];
/* ----------------------------------------------- */

export default function Speakers() {
  const [sectionRef, inView] = useReveal();

  return (
    <section id="speakers" className="osw-sec speakers" ref={sectionRef}>
      <div className={`osw-w osw-rv${inView ? ' in' : ''}`}>
        <p className="osw-k speakers-k">Speakers</p>
        <h2 className="osw-h2">
          Voices<br />
          <span className="osw-out">of the stack.</span>
        </h2>

        <div className="speakers-grid">
          {SPEAKERS.map((speaker) => (
            <figure className="speakers-card" key={speaker.id}>
              <div className="speakers-portrait">
                {speaker.img ? (
                  <img src={speaker.img} alt={speaker.name} />
                ) : (
                  <span aria-hidden="true">?</span>
                )}
              </div>
              <h3 className="speakers-name">{speaker.name}</h3>
              <p className="speakers-role">{speaker.role}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
