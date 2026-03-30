/**
 * Header — Peixaria Central do Camarão
 * Design: "Frescor do Atlântico" — Navy background, white text, orange CTA
 * Sticky header with logo, nav links and WhatsApp CTA button
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495851131/6M8MKM88eCgmUQbzCGpee9/logo-central-camarao_0088a708.jpg";
const WHATSAPP_NUMBER = "5581996380257";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido.`;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Produtos", href: "#produtos" },
    { label: "Localização", href: "#localizacao" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#043372] shadow-lg shadow-black/20"
          : "bg-[#043372]/95 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={LOGO_URL}
              alt="Central do Camarão"
              className="h-10 md:h-12 w-auto rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "'Lato', sans-serif" }}>
                Peixaria
              </p>
              <p className="text-[#ff8d07] font-black text-base leading-tight" style={{ fontFamily: "'Lato', sans-serif" }}>
                Central do Camarão
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-[#ff8d07]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#ff8d07] hover:bg-[#e67d00] text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              <Phone size={15} />
              Pedir pelo WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 pt-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-[#ff8d07] text-base font-semibold py-2 transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#ff8d07] text-white font-bold px-5 py-3 rounded-full text-sm mt-2"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <Phone size={15} />
                Pedir pelo WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
