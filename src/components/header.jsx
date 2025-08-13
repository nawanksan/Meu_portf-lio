import { HiArrowNarrowRight } from "react-icons/hi";

function Header() {
  return (
    <div
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1E3A8A] via-[#182131] to-[#111827] text-[#f1f1f1]"
    >
      {/* Botão no topo direito */}
      <a
        href="#contact"
        className="absolute top-6 right-10 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105 hidden md:flex items-center space-x-2"
      >
        <span>Vamos Conversar</span>
        <HiArrowNarrowRight className="w-5 h-5" />
      </a>

      {/* Conteúdo centralizado */}
      <div className="text-center p-8">
        <h1 className="text-6xl font-extrabold tracking-tight mb-4">
          Kawan Nascimento
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
          Desenvolvedor Full Stasck especializado em soluções escaláveis, APIs robustas e interfaces modernas.
        </p>
        
        {/* Navegação */}
        <ul className="flex justify-center space-x-8 text-lg font-medium">
          {[
            { label: "Sobre", href: "#about" },
            { label: "Projetos", href: "#projects" },
            {label: "Conhecimentos", href: "#Hero"},
            { label: "Contato", href: "#contact" },
            
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative group hover:text-[#60A5FA] transition"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#60A5FA] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
