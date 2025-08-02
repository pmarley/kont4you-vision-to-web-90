import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Ricardo Santos",
      role: "Cardiologista",
      avatar: "DR",
      testimonial: "A transição para PJ nunca foi tão simples. A Kont4You me orientou em cada passo e hoje economizo 40% nos impostos.",
      rating: 5
    },
    {
      name: "Marina Silva",
      role: "Corretora de Imóveis",
      avatar: "MS",
      testimonial: "Finalmente encontrei uma contabilidade que entende o mercado imobiliário. Atendimento excepcional e resultados reais.",
      rating: 5
    },
    {
      name: "Thiago Costa",
      role: "Consultor de TI",
      avatar: "TC",
      testimonial: "Migrei de MEI para ME com total suporte da equipe. Agora posso focar 100% no crescimento da minha empresa.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Histórias reais de empreendedores que transformaram seus negócios
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;