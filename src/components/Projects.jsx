import { useEffect, useState } from "react";

function Projects() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const mock = [
      {
        id: 1,
        titulo: "Marquei - APP para barbearias e salões de beleza",
        descricao:
          "Aplicativo moderno para agendamentos, desenvolvido com Flutter e integração de API.",
        imagem: "/Blue Modern Mobile Application Presentation.jpg",
        link: "https://github.com/nawanksan/APP_Marquei",
      },
      {
        id: 2,
        titulo: "APP Turismo",
        descricao:
          "Aplicativo para explorar pontos turísticos, criado durante meus estudos de Flutter.",
        imagem: "https://via.placeholder.com/300x200",
        link: "https://github.com/nawanksan/APP_Turismo",
      },
      {
        id: 3,
        titulo: "APP de Humor",
        descricao:
          "Aplicativo divertido que permite registrar e acompanhar seu humor ao longo do tempo.",
        imagem: "https://via.placeholder.com/300x200",
        link: "https://github.com/nawanksan/App-humor",
      },
      {
        id: 3,
        titulo: "Site para equipamento de obra",
        descricao:
          "Em desenvolvimento",
        imagem: "https://via.placeholder.com/300x200",
        // link: "#",
      },
    ];
    setProjetos(mock);
  }, []);

  return (
    <section id="projects" className="py-20 bg-[#111827] px-4 text-[#F9FAFB]">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10 text-[#2563EB]">Projetos</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-[#1F2937] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <img
                src={projeto.imagem}
                // alt={projeto.titulo}
                className="w-full h-40 object-cover"
              />
              <div className="p-5 text-left">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {projeto.titulo}
                </h4>
                <p className="text-gray-300 mb-4">{projeto.descricao}</p>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-lg transition shadow-lg  transform hover:scale-105"
                >
                  Ver no GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
