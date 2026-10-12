import { skills } from '../data';
import TraceSection from './TraceSection';

export default function Skills() {
  return (
    <TraceSection id="skills" label="Result: skills">
      <h2>Skills</h2>
      <dl className="skills">
        {skills.map((group) => (
          <div key={group.label} className="skills__row">
            <dt>{group.label}</dt>
            <dd>{group.items}</dd>
          </div>
        ))}
      </dl>
    </TraceSection>
  );
}
