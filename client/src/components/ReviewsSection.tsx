/**
 * ReviewsSection — Peixaria Central do Camarão
 * Design: "Frescor do Atlântico" — Navy background, white cards
 * Google Maps reviews with 5 stars
 */
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Roberta Martins",
    rating: 5,
    text: "Excelente. Sempre muito atenciosos e nos enviam o produto. Confio de olhos fechados.",
    avatar: "R",
  },
  {
    name: "Haroldo Gondim",
    rating: 5,
    text: "Experiência positiva, produto de qualidade e entrega rápida e eficiente.",
    avatar: "H",
  },
  {
    name: "Marilia Vasconcelos",
    rating: 5,
    text: "Melhor preço da região. Produtos de muita qualidade, sempre frescos e a entrega é bem rápida.",
    avatar: "M",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="#ff8d07" color="#ff8d07" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="avaliacoes" className="py-20 bg-[#043372] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, white 2px, transparent 0)",
          backgroundSize: "50px 50px"
        }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#ff8d07]/20 border border-[#ff8d07]/30 text-[#ff8d07] text-sm font-bold px-4 py-1.5 rounded-full mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
            ⭐ Avaliações Google Maps
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Quem conhece, confia!
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
            Veja o que nossos clientes dizem sobre a Central do Camarão.
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="#ff8d07" color="#ff8d07" />)}
            </div>
            <span className="text-white font-black text-2xl" style={{ fontFamily: "'Lato', sans-serif" }}>5.0</span>
            <span className="text-white/60 text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>no Google Maps</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-5 text-[#043372]/10">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Stars */}
              <StarRating count={review.rating} />

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mt-3 mb-5 relative z-10" style={{ fontFamily: "'Lato', sans-serif" }}>
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#043372] flex items-center justify-center text-white font-black text-base flex-shrink-0" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {review.avatar}
                </div>
                <div>
                  <p className="font-bold text-[#043372] text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>{review.name}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-gray-400 text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>Google Maps</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
