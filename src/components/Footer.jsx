function Footer() {
  return (
    <footer className="bg-[#111827] text-[#F9FAFB] py-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Texto principal */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-[#2563EB] font-semibold">Kawan Nascimento</span>
          . Todos os direitos reservados.
        </p>

        {/* Links sociais */}
        <div className="mt-3 space-x-6 text-sm">
          <a
            href="https://github.com/nawanksan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#60A5FA] transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kawannascimentodev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#60A5FA] transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kawannascimento013@gmail.com"
            className="hover:text-[#60A5FA] transition"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
