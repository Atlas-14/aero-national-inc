import Link from "next/link";

export const services = [
  {
    slug: "materials",
    title: "Materials",
    eyebrow: "Materials Delivery",
    description:
      "Aggregates, concrete-related products, lumber, steel and job-site supplies sourced and delivered around your schedule.",
    icon: "▰",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85"
  },
  {
    slug: "equipment",
    title: "Equipment",
    eyebrow: "Heavy Equipment",
    description:
      "Job-ready machines, attachments, coordinated delivery, pickup and rental support for demanding projects.",
    icon: "◢",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85"
  },
  {
    slug: "containers",
    title: "Containers",
    eyebrow: "Container Solutions",
    description:
      "Roll-off and storage containers for debris, organization, mobilization and recurring job-site needs.",
    icon: "▥",
    image:
      "https://images.unsplash.com/photo-1565619624098-cf4168a49958?auto=format&fit=crop&w=1400&q=85"
  },
  {
    slug: "logistics",
    title: "Logistics",
    eyebrow: "Hauling & Dispatch",
    description:
      "Transportation, hauling, dispatch and coordinated site delivery across the full project lifecycle.",
    icon: "⇢",
    image:
      "https://images.unsplash.com/photo-1586191582151-f73872dfd183?auto=format&fit=crop&w=1400&q=85"
  },
  {
    slug: "construction",
    title: "Construction",
    eyebrow: "Project Delivery",
    description:
      "General contracting, construction management, preconstruction and disciplined field execution.",
    icon: "△",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
  },
  {
    slug: "development",
    title: "Development",
    eyebrow: "Development Support",
    description:
      "Planning, feasibility, construction delivery, capital improvements and long-term real estate initiatives.",
    icon: "▦",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85"
  }
];

export function Logo({ light = false }) {
  return (
    <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Aero National home">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark-left" />
        <span className="brand-mark-right" />
      </span>
      <span className="brand-type">
        <strong>AERO NATIONAL</strong>
        <small>INTEGRATED CONSTRUCTION SERVICES</small>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <>
      <div className="utility-bar">
        <span>INTEGRATED CONSTRUCTION SERVICES, MATERIALS, EQUIPMENT, CONTAINERS & LOGISTICS.</span>
        <Link href="/request-project-support">REQUEST PROJECT SUPPORT →</Link>
      </div>
      <header className="site-header">
        <Logo light />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/#services">Services</Link>
          <Link href="/services/materials">Materials</Link>
          <Link href="/services/equipment">Equipment</Link>
          <Link href="/services/containers">Containers</Link>
          <Link href="/services/construction">Construction</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/company">Company</Link>
        </nav>
        <Link className="button button-yellow header-cta" href="/request-project-support">
          Request Project Support
        </Link>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Logo light />
          <p>
            Integrated construction services, materials, equipment, containers and logistics—built to keep projects moving.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/company">About Aero National</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/request-project-support">Project Support</Link>
          <a href="mailto:projects@aeronational.inc">projects@aeronational.inc</a>
        </div>
        <div>
          <h4>Corporate</h4>
          <p>Aero National Inc.</p>
          <p>AeroNational.inc</p>
          <p>24/7 dispatch structure available by account.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Aero National Inc. All rights reserved.</span>
        <span>Privacy Policy · Terms of Use</span>
      </div>
    </footer>
  );
}

export function StatBand() {
  return (
    <section className="stat-band">
      <div>
        <span className="stat-icon">◎</span>
        <p><strong>ONE PARTNER.</strong><br />Fewer vendors. Greater control.</p>
      </div>
      <div>
        <span className="stat-icon">◷</span>
        <p><strong>ON TIME. EVERY TIME.</strong><br />Responsive service and disciplined dispatch.</p>
      </div>
      <div>
        <span className="stat-icon">◇</span>
        <p><strong>SAFETY FIRST.</strong><br />Job-site safety is our operating standard.</p>
      </div>
      <div>
        <span className="stat-icon">▥</span>
        <p><strong>BUILT FOR PERFORMANCE.</strong><br />Keeping projects moving and on schedule.</p>
      </div>
    </section>
  );
}
