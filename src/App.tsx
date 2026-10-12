import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <div className="container">
          <div className="flow">
            <div className="flow__spine" aria-hidden="true" />
            <ProjectsSection />
            <Experience />
            <Skills />
            <Contact />
          </div>
        </div>
      </main>
      <footer className="container site-footer">
        <p>© 2026 Aung Khant Kyaw. Built with React, TypeScript and Vite.</p>
      </footer>
    </>
  );
}
