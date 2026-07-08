import { commitment, site, whyChoose, workProcess } from "@/lib/data";

export default function WhyAlfi() {
  return (
    <section className="why-alfi section" id="why-alfi">
      <div className="container">
        <div className="why-alfi-grid">
          <div className="why-alfi-col">
            <span className="section-tag reveal-up">Why ALFI</span>
            <h2 className="section-title reveal-up">
              Why Choose <em>ALFI?</em>
            </h2>
            <ul className="why-alfi-list reveal-up">
              {whyChoose.map((item) => (
                <li key={item}>
                  <span className="why-alfi-check" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="why-alfi-col">
            <span className="section-tag reveal-up">How We Work</span>
            <h2 className="section-title reveal-up">
              Our Work <em>Process</em>
            </h2>
            <ol className="process-list reveal-up">
              {workProcess.map((step) => (
                <li className="process-step" key={step.step}>
                  <span className="process-icon" aria-hidden="true">
                    {step.icon}
                  </span>
                  <div>
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="why-alfi-commitment reveal-up">
            <h3>{commitment.title}</h3>
            <p>{commitment.text}</p>
            <blockquote>&ldquo;{site.commitmentQuote}&rdquo;</blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}