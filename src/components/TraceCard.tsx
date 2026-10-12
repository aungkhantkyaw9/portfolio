import type { CSSProperties } from 'react';
import { traceSteps } from '../data';

export default function TraceCard() {
  return (
    <figure className="trace" aria-label="Example agent trace from Resolve">
      <figcaption className="trace__head">
        <span className="trace__live" aria-hidden="true" />
        <span className="trace__title">Agent trace</span>
        <span className="trace__sub">from a real test of Resolve</span>
      </figcaption>
      <ol className="trace__list">
        {traceSteps.map((step, i) => (
          <li key={step.label} className="trace__step" style={{ '--i': i } as CSSProperties}>
            <span className="trace__label">{step.label}</span>
            <pre className={step.final ? 'trace__body trace__body--final' : 'trace__body'}>
              {step.body}
              {step.final && <span className="trace__cursor" aria-hidden="true" />}
            </pre>
          </li>
        ))}
      </ol>
    </figure>
  );
}
