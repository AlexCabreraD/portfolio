export default function Navigation() {
  return (
    <header className="md:flex justify-between items-center p-4 text-[#999797]">
      <div className="flex flex-col hover:cursor-pointer hover:text-white hover:drop-shadow-glow">
        <a href="#">
          <h1 className="text-xl font-bold">Alejandro Cabrera</h1>
          <p className="text-xs justify-self-start md:float-start">
            Full Stack Web Developer
          </p>
        </a>
      </div>
      <nav>
        <ul className="flex justify-between mt-[32px] sm:space-x-8 md:mt-0">
          <li>
            <a
              href="#skills"
              className="hover:cursor-pointer hover:text-white hover:drop-shadow-glow"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:cursor-pointer hover:text-white hover:drop-shadow-glow"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:cursor-pointer hover:text-white hover:drop-shadow-glow"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:cursor-pointer hover:text-white hover:drop-shadow-glow"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
