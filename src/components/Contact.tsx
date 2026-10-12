import { links } from '../data';
import TraceSection from './TraceSection';

export default function Contact() {
  return (
    <TraceSection id="contact" label="Replied: contact" final>
      <h2>Open to senior fullstack roles.</h2>
      <p className="contact__email">
        <a href={links.email}>aungkhantkyaw6294@gmail.com</a>
      </p>
      <ul className="contact">
        <li>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={links.cv}>Download my CV</a>
        </li>
      </ul>
    </TraceSection>
  );
}
