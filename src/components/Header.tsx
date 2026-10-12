export default function Header() {
  return (
    <header className="container site-header">
      <a className="site-header__name" href="#top">
        Aung Khant Kyaw
      </a>
      <nav aria-label="Main">
        <ul className="site-header__nav">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
