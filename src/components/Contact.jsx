import { FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { HiHome } from "react-icons/hi";

function Contact() {
  return (
    <section id="contact" className="bg-[#1F2937] py-20 px-4 text-[#F9FAFB]">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 text-[#2563EB]">Contato</h3>
        <p className="text-lg mb-8 text-gray-300">
          Tem um projeto em mente ou quer conversar?
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kawannascimento013@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-2 rounded-3xl transition shadow-lg  transform hover:scale-105 "
          >
            <HiMail className="w-6 h-6 text-red-500" />
            <span>Enviar Email</span>
          </a>

          <a
            href="https://wa.me/5586994215430"
            target="_blank"
            className="flex items-center space-x-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-2 rounded-3xl transition shadow-lg  transform hover:scale-105"
          >
            <FaWhatsapp className="w-6 h-6 text-green-500" />
            <span>Falar no WhatsApp</span>
          </a>

          <a
            href="#inicio"
            className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-3xl transition shadow-lg  transform hover:scale-105"
          >
            <HiHome className="w-6 h-6 text-blue-500" />
            <span>Voltar ao Início</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
