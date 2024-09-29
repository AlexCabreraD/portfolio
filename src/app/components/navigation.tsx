import { scrollToSection } from "@/app/utils";

export default function Navigation() {
  const navItems = [
    { id: "tools", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const buttonClasses =
    "hover:cursor-pointer hover:text-white hover:drop-shadow-glow";

  return (
    <header
      className="md:flex justify-between items-center p-4 text-[#999797]"
      id={"about"}
    >
      <div className="flex flex-col hover:text-white hover:drop-shadow-glow ">
        <h1 className="text-xl font-bold">Alejandro Cabrera</h1>
        <p className="text-xs justify-start md:flex md:float-start">
          Full Stack Web Developer
        </p>
      </div>
      <nav>
        <ul className="flex justify-between mt-[32px] sm:space-x-8 md:mt-0">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={buttonClasses}
                aria-label={`Scroll to ${item.label}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
