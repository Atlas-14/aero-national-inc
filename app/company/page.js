import Link from "next/link";
import { Footer, Header } from "../components";

export const metadata = { title: "Company" };

export default function CompanyPage() {
  return (
    <main>
      <Header />
      <section className="inner-hero company-hero">
        <div className="inner-hero-overlay" />
        <div className="inner-hero-content">
          <p className="eyebrow yellow">AERO NATIONAL INC.</p>
          <h1>BUILT AROUND THE JOB SITE.</h1>
          <p>
            An integrated construction-services corporation designed to supply, equip, coordinate and deliver complex work.
          </p>
        </div>
      </section>
      <section className="section section-light">
        <div className="content-columns">
          <div>
            <p className="eyebrow dark">OUR OPERATING MODEL</p>
            <h2>THE OPERATING PARTNER BEHIND THE PROJECT.</h2>
          </div>
          <div>
            <p>
              Aero National was built around a simple idea: contractors and developers should not have to manage disconnected vendors for every critical job-site requirement.
            </p>
            <p>
              Our model combines materials, equipment, containers, logistics, construction and development support under one disciplined operating platform.
            </p>
          </div>
        </div>
        <div className="values-grid">
          <article><h3>Accountability</h3><p>We take ownership of commitments, communication and outcomes.</p></article>
          <article><h3>Clarity</h3><p>We surface constraints early and communicate directly.</p></article>
          <article><h3>Discipline</h3><p>We rely on preparation, documentation and repeatable systems.</p></article>
          <article><h3>Performance</h3><p>We measure ourselves by service reliability and project momentum.</p></article>
        </div>
      </section>
      <section className="closing-cta compact">
        <div>
          <h2>BUILD A STRONGER OPERATING RELATIONSHIP.</h2>
          <Link href="/request-project-support" className="button button-yellow">Request Project Support</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
