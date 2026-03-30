/**
 * DifferentialsSection — Peixaria Central do Camarão
 * Design: "Frescor do Atlântico" — Light blue-tinted background, icon cards
 */
import { motion } from "framer-motion";

const DELIVERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495851131/6M8MKM88eCgmUQbzCGpee9/delivery-moto-ZiABZp5nbjkzz5dz6wWLdc.webp";

const DIFFERENTIALS = [
  {
    icon: "🐟",
    title: "Sempre Frescos",
    description: "Nossos produtos chegam frescos diariamente. Peixes e frutos do mar selecionados com rigoroso controle de qualidade.",
  },
  {
    icon: "✂️",
    title: "Já Tratados",
    description: "Receba seus produtos limpos, sem escamas e prontos para cozinhar. Economize tempo na sua cozinha.",
  },
  {
    icon: "🛵",
    title: "Delivery Recife",
    description: "Entregamos para todo o Recife via 99 Moto. Você acompanha a corrida em tempo real e recebe fotos antes do envio.",
  },
  {
    icon: "📸",
    title: "Transparência Total",
    description: "Enviamos fotos dos seus itens antes de despachar. Você aprova ou escolhe o pacote que deseja.",
  },
  {
    icon: "💳",
    title: "Formas de Pagamento",
    description: "Aceitamos dinheiro, Pix, cartão de crédito e débito. Nas entregas, Pix ou link de pagamento via WhatsApp.",
  },
  {
    icon: "❤️",
    title: "Atendimento com Carinho",
    description: "Preparamos cada pedido com atenção e cuidado. Nosso objetivo é levar qualidade e satisfação para a sua mesa.",
  },
];

export default function DifferentialsSection() {
  return (
    <section className="py-20 bg-[#f0f4ff]">
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
            🏆 Por que nos escolher?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#043372] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nossos Diferenciais
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
            Qualidade, praticidade e cuidado em cada pedido. É assim que a Central do Camarão funciona.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Differentials Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {DIFFERENTIALS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-black text-[#043372] text-sm mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Delivery Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={DELIVERY_IMG}
                alt="Delivery Central do Camarão — Recife"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#043372]/70 to-transparent" />
              {/* Floating info card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p className="text-[#043372] font-black text-sm mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>
                    🛵 Delivery para todo o Recife
                  </p>
                  <p className="text-gray-600 text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Via 99 Moto com rastreamento em tempo real. Fotos antes do envio. Código de confirmação de entrega.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
