"use client";
import { useState } from "react";
import { Footer, Header, services } from "../components";

export default function ProjectSupportPage() {
  const [status, setStatus] = useState("");

  async function submitForm(event) {
    event.preventDefault();
    setStatus("Submitting...");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const response = await fetch("/api/project-support", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (response.ok) {
      setStatus("Thank you. Your project-support request has been received.");
      event.currentTarget.reset();
    } else {
      setStatus(result.error || "Unable to submit. Please email projects@aeronational.inc.");
    }
  }

  return (
    <main>
      <Header />
      <section className="form-hero">
        <div>
          <p className="eyebrow yellow">REQUEST PROJECT SUPPORT</p>
          <h1>TELL US WHAT THE JOB SITE NEEDS.</h1>
          <p>
            Submit your service requirements and Aero National can organize the next step around scope, location, timing and availability.
          </p>
        </div>
      </section>
      <section className="form-section">
        <form onSubmit={submitForm} className="project-form">
          <div className="field-grid">
            <label>Company Name<input name="company" required /></label>
            <label>Contact Name<input name="name" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Phone<input name="phone" type="tel" /></label>
            <label>Project Name<input name="project" /></label>
            <label>Job-Site Location<input name="location" required /></label>
            <label>Primary Service
              <select name="service" required defaultValue="">
                <option value="" disabled>Select a service</option>
                {services.map((service) => <option key={service.slug}>{service.title}</option>)}
                <option>Multiple Services</option>
              </select>
            </label>
            <label>Requested Date<input name="date" type="date" /></label>
          </div>
          <label>Project Requirements<textarea name="details" rows="8" required /></label>
          <label className="consent"><input type="checkbox" required /> I authorize Aero National to contact me regarding this request.</label>
          <button className="button button-yellow" type="submit">Submit Project Request</button>
          <p className="form-status" aria-live="polite">{status}</p>
        </form>
      </section>
      <Footer />
    </main>
  );
}
