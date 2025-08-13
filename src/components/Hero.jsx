import { FaReact, FaPython } from "react-icons/fa";
import { SiDjango, SiFlutter, SiTailwindcss, SiVite } from "react-icons/si";

function Hero() {
  return (
    <section
      id="Hero"
      className="bg-gradient-to-b from-[#111827] via-[#182131] to-[#1E3A8A] text-[#f1f1f1] py-20"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Conhecimentos</h2>

        {/* Conhecimentos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center bg-[#1f2937] p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <SiFlutter className="text-[#02569B] w-10 h-10 mb-3" />
            <p className="font-semibold">Flutter</p>
          </div>

          <div className="flex flex-col items-center bg-[#1f2937] p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <SiTailwindcss className="text-[#38BDF8] w-10 h-10 mb-3" />
            <p className="font-semibold">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center bg-[#1f2937] p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaReact className="text-[#61DAFB] w-10 h-10 mb-3" />
            <p className="font-semibold">React</p>
          </div>

          <div className="flex flex-col items-center bg-[#1f2937] p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <SiDjango className="text-green-500 w-10 h-10 mb-3" />
            <p className="font-semibold">Django</p>
          </div>
          <div className="flex flex-col items-center bg-[#1f2937] p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <SiVite className="text-green-500 w-10 h-10 mb-3" />
            <p className="font-semibold">Vite</p>
          </div>
          <div className="flex flex-col items-center bg-[#1f2937] p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaPython className="text-green-500 w-10 h-10 mb-3" />
            <p className="font-semibold">Python</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
