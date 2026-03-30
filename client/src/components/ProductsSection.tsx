/**
 * ProductsSection — Peixaria Central do Camarão
 * Design: "Frescor do Atlântico" — White section, product cards with hover CTA
 * Products sourced from Instagram posts
 */
import { motion } from "framer-motion";
import { ShoppingCart, ExternalLink } from "lucide-react";

const SHRIMP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495851131/6M8MKM88eCgmUQbzCGpee9/produtos-camarao-mVo7UfKUmehpNXALLdHYbu.webp";
const FISH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495851131/6M8MKM88eCgmUQbzCGpee9/produtos-peixe-5DQRzXePSB9AEZ7T4NNom5.webp";
const CATALOG_URL = "https://peixaria-central-do-camaro.goomer.app/menu";
const WHATSAPP_NUMBER = "5581996380257";

function makeWhatsAppUrl(product: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20pedir%20${encodeURIComponent(product)}.`;
}

const PRODUCTS = [
  {
    name: "Camarão Fresco",
    description: "Camarão grande e fresco, já limpo e pronto para preparar.",
    image: SHRIMP_IMG,
    tag: "🦐 Mais Pedido",
    tagColor: "bg-[#ff8d07] text-white",
  },
  {
    name: "Cioba Fresca Tratada",
    description: "Cioba fresca já tratada, pronta para temperar e cozinhar. R$55/kg.",
    image: FISH_IMG,
    tag: "🐟 Destaque",
    tagColor: "bg-[#1552a4] text-white",
  },
  {
    name: "Bacalhau Dessalgado",
    description: "Bacalhau dessalgado de alta qualidade. R$63/kg. Perfeito para a Semana Santa.",
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
    tag: "🐠 Especial",
    tagColor: "bg-[#043372] text-white",
  },
  {
    name: "Filé de Saramunete",
    description: "Filé já pronto para cozinhar. O peixe com sabor de camarão! R$50/kg.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
    tag: "❤️ Favorito",
    tagColor: "bg-red-500 text-white",
  },
  {
    name: "Polvo Fresco Tratado",
    description: "Polvo fresco já tratado e limpo, pronto para grelhar ou cozinhar. R$60/kg.",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80",
    tag: "🐙 Premium",
    tagColor: "bg-purple-600 text-white",
  },
  {
    name: "Sardinha Espalmada",
    description: "Sardinha espalmada, tratada e sem escamas. Pronta para fritar. R$25/kg.",
    image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80",
    tag: "🐟 Econômico",
    tagColor: "bg-green-600 text-white",
  },
  {
    name: "Mexilhão",
    description: "Mexilhão 500g por apenas R$25. Com metade da concha ou sem concha.",
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&q=80",
    tag: "🦪 Fresco",
    tagColor: "bg-[#1552a4] text-white",
  },
  {
    name: "Combo Caldinho",
    description: "1kg de sururu fresco + 400g filé de camarão por apenas R$70. Perfeito para caldinho!",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    tag: "🍲 Combo",
    tagColor: "bg-[#ff8d07] text-white",
  },
];

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-20 bg-white">
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
            🐟 Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#043372] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frutos do Mar Selecionados
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
            Produtos frescos, tratados e prontos para cozinhar. Clique em qualquer item para pedir pelo WhatsApp.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag */}
                <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${product.tagColor}`} style={{ fontFamily: "'Lato', sans-serif" }}>
                  {product.tag}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#043372]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={makeWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#ff8d07] text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    <ShoppingCart size={15} />
                    Pedir Agora
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-black text-[#043372] text-base mb-1.5" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {product.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {product.description}
                </p>
                <a
                  href={makeWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1552a4] hover:text-[#ff8d07] text-xs font-bold transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <ShoppingCart size={13} />
                  Pedir pelo WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Full Catalog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
            Quer ver todos os nossos produtos com fotos e preços atualizados?
          </p>
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#043372] hover:bg-[#1552a4] text-white font-bold px-8 py-4 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <ExternalLink size={16} />
            Ver Catálogo Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
