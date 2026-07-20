import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer, Header, services } from "../../components";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((item) => item.slug === params.slug);
  return service ? { title: service.title, description: service.description } : {};
}

export default function ServicePage({ params }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();

  return (
    <main>
      <Header />
      <section className="inner-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="inner-hero-overlay" />
        <div className="inner-hero-content">
          <p className="eyebrow yellow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <Link href="/request-project-support" className="button button-yellow">Request Project Support</Link>
        </div>
      </section>

      <section className="section section-light">
        <div className="content-columns">
          <div>
            <p className="eyebrow dark">AERO NATIONAL</p>
            <h2>ONE OPERATING PARTNER. CLEARER ACCOUNTABILITY.</h2>
          </div>
          <div>
            <p>
              Aero National delivers {service.title.toLowerCase()} as part of a broader construction-services platform. Customers can coordinate multiple site requirements through one relationship, one project record and one accountable operating team.
            </p>
            <p>
              Each engagement is organized around scope, schedule, access requirements, safety, documentation and billing clarity. Service details are confirmed before mobilization so the field team can execute without unnecessary friction.
            </p>
          </div>
        </div>

        <div className="feature-list">
          <article><span>01</span><h3>Scope Confirmation</h3><p>We verify quantities, specifications, timing, job-site access and service expectations before scheduling.</p></article>
          <article><span>02</span><h3>Coordinated Dispatch</h3><p>Orders, deliveries and pickups are assigned to a documented schedule with clear ownership.</p></article>
          <article><span>03</span><h3>Proof of Service</h3><p>Delivery records, photographs, signatures and field notes support every completed service.</p></article>
          <article><span>04</span><h3>Account Visibility</h3><p>Customers receive organized records across projects, locations, active rentals and invoices.</p></article>
        </div>
      </section>

      <section className="closing-cta compact">
        <div>
          <p className="eyebrow yellow">DISCUSS YOUR REQUIREMENTS</p>
          <h2>KEEP THE NEXT PHASE <span>MOVING.</span></h2>
          <p>Tell us what your job site needs and when it needs to arrive.</p>
          <Link href="/request-project-support" className="button button-yellow">Start a Request</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
