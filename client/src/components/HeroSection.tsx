/**
 * HeroSection — Peixaria Central do Camarão
 * Design: "Frescor do Atlântico" — Split layout, dark overlay on hero image
 * Left: headline + CTAs | Right: hero food image
 * Background: dark navy with hero image overlay
 */
import { motion } from "framer-motion";
import { ShoppingBag, BookOpen, Star } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663495851131/6M8MKM88eCgmUQbzCGpee9/hero-frutos-do-mar-nTwNaPABfKEDKtJSLgTSMM.webp";
const WHATSAPP_NUMBER = "5581996380257";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido.`;
const CATALOG_URL = "https://peixaria-central-do-camaro.goomer.app/menu";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#043372]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Frutos do mar frescos"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#043372] via-[#043372]/80 to-[#043372]/40" />
      </div>

      <div className="container relative z-10 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#ff8d07]/20 border border-[#ff8d07]/40 text-[#ff8d07] px-4 py-1.5 rounded-full text-sm font-bold mb-6"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              <Star size={14} fill="currentColor" />
              Delivery para todo o Recife
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Máxima Qualidade{" "}
              <span className="text-[#ff8d07]">em Frutos do Mar</span>{" "}
              para a sua casa!
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Peixes frescos, camarões, frutos do mar e muito mais. Produtos
              já tratados e prontos para cozinhar, entregues na sua porta.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#ff8d07] hover:bg-[#e67d00] text-white font-black px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {/* WhatsApp Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fazer Pedido pelo WhatsApp
              </a>
              <a
                href={CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 backdrop-blur-sm"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <BookOpen size={18} />
                Ver Catálogo Completo
              </a>
            </motion.div>

            {/* Quick Info Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/20"
            >
              {[
                { icon: "🕐", text: "Ter–Sáb: 8h–17h" },
                { icon: "🕐", text: "Dom: 8h–16h" },
                { icon: "📍", text: "Iputinga, Recife" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70 text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image (visible on large screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src={HERO_IMAGE}
                alt="Frutos do mar frescos — Central do Camarão"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#043372]/60 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl px-4 py-3 shadow-lg">
                <p className="text-[#043372] font-black text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
                  🐟 Sempre Frescos
                </p>
                <p className="text-[#1552a4] text-xs font-semibold" style={{ fontFamily: "'Lato', sans-serif" }}>
                  Produtos tratados e prontos
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
