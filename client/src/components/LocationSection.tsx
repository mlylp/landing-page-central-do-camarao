/**
 * LocationSection — Peixaria Central do Camarão
 * Design: "Frescor do Atlântico" — Clean white section with navy accents
 * Shows address, hours, map and directions CTA
 */
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";


const WHATSAPP_NUMBER = "5581996380257";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido.`;
const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Rua+Ministro+João+Alberto+521+Iputinga+Recife";

const HOURS = [
  { day: "Terça-feira", hours: "08:00 – 17:00", open: true },
  { day: "Quarta-feira", hours: "08:00 – 17:00", open: true },
  { day: "Quinta-feira", hours: "08:00 – 17:00", open: true },
  { day: "Sexta-feira", hours: "08:00 – 17:00", open: true },
  { day: "Sábado", hours: "08:00 – 17:00", open: true },
  { day: "Domingo", hours: "08:00 – 16:00", open: true },
  { day: "Segunda-feira", hours: "Fechado", open: false },
];

function getTodayStatus() {
  const day = new Date().getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  if (day === 1) return { open: false, text: "Fechado hoje (Segunda-feira)" };
  if (day === 0) return { open: true, text: "Aberto hoje até 16:00" };
  return { open: true, text: "Aberto hoje até 17:00" };
}

export default function LocationSection() {
  const todayStatus = getTodayStatus();

  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#043372]/10 text-[#043372] text-sm font-bold px-4 py-1.5 rounded-full mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
            📍 Onde Estamos
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#043372] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Visite Nossa Loja
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
            Estamos em Iputinga, Recife. Fácil acesso pela BR-101, atrás do Atacadão.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {/* Today Status */}
            <div className={`flex items-center gap-3 px-5 py-4 rounded-xl font-bold text-sm ${todayStatus.open ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`} style={{ fontFamily: "'Lato', sans-serif" }}>
              <span className={`w-2.5 h-2.5 rounded-full ${todayStatus.open ? "bg-green-500" : "bg-red-500"} animate-pulse`} />
              {todayStatus.text}
            </div>

            {/* Address */}
            <div className="bg-[#f8f9ff] rounded-2xl p-6 border border-[#e8ecf8]">
              <div className="flex items-start gap-4">
                <div className="bg-[#043372] text-white p-3 rounded-xl flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-black text-[#043372] text-base mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>Endereço</h3>
                  <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Rua Ministro João Alberto, 521<br />
                    Iputinga — Recife, PE<br />
                    <span className="text-[#1552a4] font-semibold">Atrás do Atacadão da BR-101</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#f8f9ff] rounded-2xl p-6 border border-[#e8ecf8]">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#043372] text-white p-3 rounded-xl flex-shrink-0">
                  <Clock size={20} />
                </div>
                <h3 className="font-black text-[#043372] text-base self-center" style={{ fontFamily: "'Lato', sans-serif" }}>Horário de Funcionamento</h3>
              </div>
              <div className="space-y-2">
                {HOURS.map((item) => (
                  <div key={item.day} className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700 text-sm font-medium" style={{ fontFamily: "'Lato', sans-serif" }}>{item.day}</span>
                    <span className={`text-sm font-bold ${item.open ? "text-[#043372]" : "text-red-500"}`} style={{ fontFamily: "'Lato', sans-serif" }}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#f8f9ff] rounded-2xl p-6 border border-[#e8ecf8]">
              <div className="flex items-center gap-4">
                <div className="bg-[#043372] text-white p-3 rounded-xl flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-black text-[#043372] text-base mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>WhatsApp / Telefone</h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1552a4] font-bold text-sm hover:text-[#ff8d07] transition-colors"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    (81) 9 9638-0257
                  </a>
                </div>
              </div>
            </div>

            {/* Directions CTA */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#043372] hover:bg-[#1552a4] text-white font-bold px-6 py-4 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg w-full"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              <Navigation size={16} />
              Como Chegar — Abrir no Google Maps
            </a>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.692685681607!2d-34.94728618907677!3d-8.030587380141947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab192690c54009%3A0x3f170125caf69f00!2sPeixaria%20Central%20do%20Camar%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1774905576600!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
