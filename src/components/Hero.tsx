import { links } from '../data';
import TraceCard from './TraceCard';

export default function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero__text">
        <h1>Fullstack developer with eleven years of React and Node.js.</h1>
        <p className="hero__lede">
          I&rsquo;m based in Bangkok. I&rsquo;ve built marketplace integrations, a payroll engine and real-time
          systems, and I wrote an AI agent from scratch to see how agents fail.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={links.demo} target="_blank" rel="noreferrer">
            Try Resolve live
          </a>
          <a className="btn btn--secondary" href={links.repo} target="_blank" rel="noreferrer">
            Read the code
          </a>
          <a className="text-link" href={links.cv}>
            Download my CV
          </a>
        </div>
      </div>
      <TraceCard />
    </section>
  );
}
