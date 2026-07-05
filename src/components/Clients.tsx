import { clients } from "@/lib/data";

export default function Clients() {
  return (
    <section className="clients section" id="clients">
      <div className="container">
        <div className="section-header section-header--light">
          <span className="section-tag reveal-up">Trusted By</span>
          <h2 className="section-title reveal-up">
            Key <em>Clients</em>
          </h2>
        </div>
        <div className="clients-grid reveal-up">
          {clients.map((client) => (
            <div className="client-item" key={client}>
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}