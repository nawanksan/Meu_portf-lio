function About() {
  return (
    <section id="about" className="py-20 bg-[#1F2937] text-[#F9FAFB] px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Foto */}
        <div className="flex-shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}IMG-20241202-WA0067.jpg`} // coloque o caminho da sua foto
            alt="Kawan Nascimento"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-[#2563EB]"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold mb-6 text-[#2563EB]">Sobre Mim</h3>
          <p className="text-lg mb-4">
            Olá! Eu sou <span className="font-semibold">Kawan Nascimento</span>, desenvolvedor Full Stack apaixonado por transformar ideias em soluções digitais. 
            Minha jornada na programação começou na faculdade e rapidamente se tornou uma verdadeira paixão. 
            Desde então, venho explorando e dominando tecnologias para criar experiências únicas e funcionais.
          </p>
          <p className="text-lg">
            Tenho grande interesse em aprender novas ferramentas, enfrentar desafios e aprimorar minhas habilidades constantemente. 
            Para mim, cada projeto é uma oportunidade de crescimento, inovação e impacto positivo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
