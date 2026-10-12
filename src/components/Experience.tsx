import { roles } from '../data';
import TraceSection from './TraceSection';

export default function Experience() {
  return (
    <TraceSection id="experience" label="Tool call: experience()">
      <h2>Experience</h2>
      <p className="section__intro">Eleven years across e-commerce, SaaS and fintech.</p>
      <ul className="roles">
        {roles.map((role) => (
          <li key={role.company + role.dates} className="roles__item">
            <p className="roles__dates">{role.dates}</p>
            <div>
              <h3>
                {role.title}, {role.company}
              </h3>
              <p>{role.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </TraceSection>
  );
}
