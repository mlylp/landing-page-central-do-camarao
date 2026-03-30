/**
 * FAQSection — Peixaria Central do Camarão
 * Design: "Frescor do Atlântico" — White section, accordion FAQ
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CATALOG_URL = "https://peixaria-central-do-camaro.goomer.app/menu";

const FAQS = [
  {
    question: "Quais as formas de pagamento aceitas?",
    answer: "Na loja física, aceitamos dinheiro, Pix, cartões de crédito e débito. Nas entregas, aceitamos Pix ou cartão de crédito. Para crédito na entrega, enviamos o link de pagamento via WhatsApp.",
  },
  {
    question: "Entrega para onde moro? Qual o valor de entrega?",
    answer: "Boas notícias: entregamos para todo o Recife! Enviamos pelo 99 Moto, com total segurança: te enviamos fotos dos seus itens antes de enviar, compartilhamos o link para acompanhamento de corrida com você e te informamos o código para informar ao motorista e receber a entrega com sucesso.",
  },
  {
    question: "Como faço para pedir entrega? Vocês mandam fotos para eu escolher os itens?",
    answer: null, // Special case with link
    answerWithLink: true,
  },
];

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f8f9ff] transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-bold text-[#043372] text-base pr-4" style={{ fontFamily: "'Lato', sans-serif" }}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-[#1552a4]"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="pt-4">
                {faq.answerWithLink ? (
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Temos nosso site catálogo com todos os itens e fotos:{" "}
                    <a
                      href={CATALOG_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1552a4] font-bold hover:text-[#ff8d07] underline transition-colors"
                    >
                      peixaria-central-do-camaro.goomer.app/menu
                    </a>
                    . Você pode fazer seu pedido diretamente por lá que ele será redirecionado ao WhatsApp. Conforme estivermos separando seu pedido, te mandamos fotos para você aprovar ou escolher o pacote que deseja.{" "}
                    <br /><br />
                    Você também pode enviar os itens que deseja comprar diretamente pelo WhatsApp se preferir.
                  </p>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const WHATSAPP_URL = `https://wa.me/5581996380257?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20produtos.`;

  return (
    <section id="faq" className="py-20 bg-white">
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
            ❓ Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#043372] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
            Tire suas dúvidas sobre pedidos, entregas e formas de pagamento.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
            Ainda tem dúvidas? Fale diretamente com a gente!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
