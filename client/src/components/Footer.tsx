/**
 * Footer — Peixaria Central do Camarão
 * Design: "Frescor do Atlântico" — Dark navy footer, white text
 */
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495851131/6M8MKM88eCgmUQbzCGpee9/logo-central-camarao_0088a708.jpg";
const WHATSAPP_URL = `https://wa.me/5581996380257?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido.`;
const CATALOG_URL = "https://peixaria-central-do-camaro.goomer.app/menu";
const INSTAGRAM_URL = "https://www.instagram.com/peixaria_centraldocamarao/";
const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Rua+Ministro+João+Alberto+521+Iputinga+Recife";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#021f4a] text-white">
      {/* Main Footer */}
      <div className="container py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={LOGO_URL}
                alt="Central do Camarão"
                className="h-14 w-14 rounded-full object-cover border-2 border-[#ff8d07]/30"
              />
              <div>
                <p className="text-white/70 text-xs font-semibold" style={{ fontFamily: "'Lato', sans-serif" }}>Peixaria</p>
                <p className="text-[#ff8d07] font-black text-lg leading-tight" style={{ fontFamily: "'Lato', sans-serif" }}>Central do Camarão</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Lato', sans-serif" }}>
              Máxima qualidade em frutos do mar para a sua casa. Produtos frescos, tratados e entregues com carinho para todo o Recife.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#ff8d07] text-sm transition-colors font-semibold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              <Instagram size={16} />
              @peixaria_centraldocamarao
            </a>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-black text-base mb-5" style={{ fontFamily: "'Lato', sans-serif" }}>Contato & Localização</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#ff8d07] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Rua Ministro João Alberto, 521<br />
                    Iputinga — Recife, PE
                  </p>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-[#ff8d07] text-xs font-semibold hover:underline" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Atrás do Atacadão da BR-101 →
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#ff8d07] flex-shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#ff8d07] text-sm transition-colors" style={{ fontFamily: "'Lato', sans-serif" }}>
                  (81) 9 9638-0257
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[#ff8d07] mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
                  <p>Ter – Sáb: 08:00 – 17:00</p>
                  <p>Domingo: 08:00 – 16:00</p>
                  <p className="text-red-400 text-xs mt-1">Segunda-feira: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-black text-base mb-5" style={{ fontFamily: "'Lato', sans-serif" }}>Links Rápidos</h4>
            <div className="space-y-3">
              {[
                { label: "Fazer Pedido pelo WhatsApp", href: WHATSAPP_URL, highlight: true },
                { label: "Ver Catálogo Completo", href: CATALOG_URL, highlight: false },
                { label: "Nossos Produtos", href: "#produtos", highlight: false },
                { label: "Como Chegar", href: MAPS_URL, highlight: false },
                { label: "Avaliações", href: "#avaliacoes", highlight: false },
                { label: "Perguntas Frequentes", href: "#faq", highlight: false },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`block text-sm transition-colors ${link.highlight ? "text-[#ff8d07] font-bold hover:text-[#ffaa44]" : "text-white/60 hover:text-white font-medium"}`}
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {link.highlight ? "→ " : ""}{link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
            © {year} Peixaria Central do Camarão. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
            Iputinga, Recife — PE
          </p>
        </div>
      </div>
    </footer>
  );
}
