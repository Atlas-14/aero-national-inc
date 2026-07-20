import Link from "next/link";
import { Footer, Header, StatBand, services } from "./components";

const featured = [
  {
    type: "INDUSTRIAL",
    title: "Distribution Center",
    location: "Texas",
    description: "Material supply, equipment coordination, container service and project logistics.",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=85"
  },
  {
    type: "COMMERCIAL",
    title: "Office Build-Out",
    location: "Multi-market",
    description: "Materials delivery, temporary containers, equipment and construction management.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
  },
  {
    type: "CONTAINER SERVICES",
    title: "Roll-Off Program",
    location: "Active Job Sites",
    description: "Recurring exchanges, debris management and schedule-based service.",
    image: "https://images.unsplash.com/photo-1586528116493-da8b3be00e39?auto=format&fit=crop&w=1200&q=85"
  },
  {
    type: "EQUIPMENT RENTAL",
    title: "Earthwork Package",
    location: "Regional Service",
    description: "Excavators, attachments and coordinated delivery for active sitework.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=85"
  }
];

export default function HomePage() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">AERO NATIONAL INC.</p>
          <h1>BUILT TO<br />KEEP PROJECTS<br /><span>MOVING.</span></h1>
          <p className="hero-copy">
            Integrated construction services, materials delivery, heavy equipment, containers and job-site logistics—coordinated through one dependable operating partner.
          </p>
          <div className="button-row">
            <Link href="/request-project-support" className="button button-yellow">
              Request Project Support
            </Link>
            <Link href="#services" className="button button-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <StatBand />

      <section id="services" className="section section-light">
        <div className="split-intro">
          <div>
            <p className="eyebrow dark">INTEGRATED SITE SERVICES</p>
            <h2>ONE PARTNER.<br />EVERY PHASE OF THE JOB SITE.</h2>
            <p>
              From early mobilization through final closeout, Aero National coordinates the materials, equipment, containers, logistics and construction support required to keep work progressing.
            </p>
            <Link href="/request-project-support" className="button button-yellow">
              How We Work
            </Link>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="service-card">
                <div className="service-image" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="service-card-body">
                  <span className="service-icon">{service.icon}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="advantage">
        <div className="advantage-copy">
          <p className="eyebrow yellow">THE AERO ADVANTAGE</p>
          <h2>INTEGRATED SOLUTIONS.<br /><span>STRONGER OUTCOMES.</span></h2>
          <p>
            Aero National brings critical job-site services under one roof to reduce delays, improve coordination and lower friction across the entire project lifecycle.
          </p>
          <ul className="check-list">
            <li>Consolidate vendors and simplify communication</li>
            <li>Reduce downtime and keep schedules intact</li>
            <li>Improve cost control and material availability</li>
            <li>Scale services across multiple job sites</li>
          </ul>
          <Link href="/request-project-support" className="button button-outline-yellow">
            View All Capabilities
          </Link>
        </div>
        <div className="advantage-visual">
          <div className="numbers-card">
            <p>OPERATING MODEL</p>
            <strong>ONE</strong><span>Account Relationship</span>
            <strong>ALL</strong><span>Critical Site Services</span>
            <strong>24/7</strong><span>Dispatch Structure</span>
            <strong>100%</strong><span>Documented Workflow</span>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">SELECTED CAPABILITIES</p>
            <h2>FEATURED PROJECTS & SERVICES</h2>
          </div>
          <Link href="/projects">VIEW ALL PROJECTS →</Link>
        </div>
        <div className="project-grid">
          {featured.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }} />
              <div className="project-card-body">
                <small>{project.type}</small>
                <h3>{project.title}</h3>
                <p className="location">{project.location}</p>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ecosystem">
        <div className="ecosystem-brand">
          <h2>THE250KPLAY</h2>
          <p>COMMERCIAL OWNERSHIP. BUSINESS INFRASTRUCTURE.</p>
          <p>
            Aero National supports a broader ecosystem of commercial property, construction and business infrastructure initiatives.
          </p>
          <a className="button button-black" href="https://the250kplay.com" target="_blank" rel="noreferrer">
            Visit The250kPlay
          </a>
        </div>
        <div className="ecosystem-item">
          <span>▦</span>
          <h3>Commercial Unit Ownership</h3>
          <p>Access to qualifying commercial assets.</p>
        </div>
        <div className="ecosystem-item">
          <span>▣</span>
          <h3>Business Infrastructure</h3>
          <p>Resources supporting business growth.</p>
        </div>
        <div className="ecosystem-item">
          <span>◎</span>
          <h3>Integrated Client Support</h3>
          <p>Ongoing support through the connected ecosystem.</p>
        </div>
      </section>

      <section className="closing-cta">
        <div>
          <p className="eyebrow yellow">READY WHEN THE JOB SITE IS.</p>
          <h2>ONE CALL SHOULD MOVE THE ENTIRE PROJECT <span>FORWARD.</span></h2>
          <p>
            Whether you need one container, a fleet of equipment, recurring materials or complete project support, Aero National is structured to help.
          </p>
          <Link href="/request-project-support" className="button button-yellow">
            Request Project Support
          </Link>
        </div>
        <div className="cta-points">
          <p><strong>Fast Response</strong><br />We respond quickly and get to work.</p>
          <p><strong>Dependable Delivery</strong><br />On time, every time.</p>
          <p><strong>Complete Solutions</strong><br />Everything your site needs.</p>
          <p><strong>Built on Relationships</strong><br />Long-term partnerships, not one-time transactions.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
