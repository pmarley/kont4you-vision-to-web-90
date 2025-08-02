import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "A abertura de empresa é realmente grátis?",
      answer: "Sim! Na Kont4You você paga apenas as taxas oficiais do governo. Nosso trabalho de orientação, documentação e registro é totalmente gratuito para novos clientes."
    },
    {
      question: "Quanto tempo leva para abrir minha empresa?",
      answer: "O processo varia de 5 a 15 dias úteis, dependendo da cidade e tipo de atividade. Te acompanhamos em todas as etapas e atualizamos sobre o andamento regularmente."
    },
    {
      question: "Posso trocar de contador a qualquer momento?",
      answer: "Claro! Cuidamos de todo o processo de migração sem custo adicional. Nossa equipe faz a transição de forma suave, sem prejudicar suas obrigações fiscais."
    },
    {
      question: "Vocês atendem em todo o Brasil?",
      answer: "Sim! Nosso atendimento é 100% online e atendemos empresas em todos os estados brasileiros com o mesmo padrão de qualidade e agilidade."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Respostas para as principais dúvidas dos nossos clientes
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-brand-blue">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-blue transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;