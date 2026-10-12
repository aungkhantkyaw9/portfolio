import { useState } from 'react';
import { projects } from '../data';
import type { Project } from '../data';
import TraceSection from './TraceSection';

function ProjectItem({ project }: { project: Project }) {
  const [hasImage, setHasImage] = useState(Boolean(project.image));

  return (
    <article className="project">
      <h3>{project.title}</h3>
      <p className="project__intro">{project.description}</p>
      <div className="project__links">
        {project.demo && (
          <a className="btn btn--primary" href={project.demo} target="_blank" rel="noreferrer">
            Try the live demo
          </a>
        )}
        {project.repo && (
          <a className="btn btn--secondary" href={project.repo} target="_blank" rel="noreferrer">
            Read the code on GitHub
          </a>
        )}
      </div>
      {project.note && <p className="note">{project.note}</p>}

      <div className={hasImage ? 'project__grid' : 'project__grid project__grid--single'}>
        {hasImage && project.image && (
          <figure className="project__shot">
            <img
              src={project.image}
              alt={project.imageAlt ?? ''}
              loading="lazy"
              onError={() => setHasImage(false)}
            />
            {project.caption && <figcaption>{project.caption}</figcaption>}
          </figure>
        )}
        <div>
          <ul className="project__built">
            {project.built.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="project__stack">{project.stack.join(', ')}</p>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <TraceSection id="projects" label="Retrieved: projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </TraceSection>
  );
}
