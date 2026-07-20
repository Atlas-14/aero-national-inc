import { Footer, Header } from "../components";

export const metadata = { title: "Projects" };

const items = [
  ["Integrated Industrial Support", "Materials, containers, equipment and logistics coordinated for active industrial projects."],
  ["Commercial Build-Out Support", "Site services and construction coordination supporting occupied and accelerated environments."],
  ["Recurring Container Programs", "Scheduled delivery, exchange, pickup and documentation across multiple job sites."],
  ["Equipment Deployment", "Job-ready equipment and attachments delivered around the construction schedule."],
  ["Development Support", "Feasibility, project planning, construction delivery and capital-improvement execution."],
  ["Multi-Site Contractor Accounts", "One account relationship supporting multiple locations, project teams and service categories."]
];

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <section className="inner-hero projects-hero">
        <div className="inner-hero-overlay" />
        <div className="inner-hero-content">
          <p className="eyebrow yellow">PROJECTS & PROGRAMS</p>
          <h1>CAPABILITY IN MOTION.</h1>
          <p>Representative service programs and project-delivery models supported by Aero National.</p>
        </div>
      </section>
      <section className="section section-light">
        <div className="case-grid">
          {items.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
