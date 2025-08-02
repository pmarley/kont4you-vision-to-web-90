import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "ESSENTIAL",
      originalPrice: "R$372,00",
      price: "R$297",
      period: "/mês",
      features: [
        "Contabilidade completa",
        "Abertura de CNPJ gratuita",
        "Certificado digital incluso",
        "Atendimento WhatsApp",
        "Emissão de notas fiscais"
      ],
      buttonVariant: "cta" as const,
      popular: false
    },
    {
      name: "MASTER",
      originalPrice: "R$560,00",
      price: "R$449",
      period: "/mês",
      features: [
        "Tudo do plano Essential",
        "Assessor dedicado",
        "Folha de pagamento",
        "Consultoria tributária",
        "Relatórios financeiros"
      ],
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "PRIME",
      originalPrice: "R$825,00",
      price: "R$675",
      period: "/mês",
      features: [
        "Tudo do plano Master",
        "Gerente de conta exclusivo",
        "Planejamento estratégico",
        "Assessoria financeira",
        "Suporte prioritário 24h"
      ],
      buttonVariant: "cta" as const,
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">Nossos Planos</h2>
          <p className="text-xl text-gray-600">
            Escolha o plano ideal para o momento da sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
              plan.popular ? 'border-2 border-brand-yellow scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-brand-yellow text-brand-blue font-semibold px-4 py-2">
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8 text-center space-y-6">
                <h3 className="text-2xl font-bold text-brand-blue">{plan.name}</h3>
                
                <div className="space-y-2">
                  <div className="text-sm text-gray-500 line-through">
                    a partir de {plan.originalPrice} por
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-brand-blue">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 text-left">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full py-6 text-lg font-semibold"
                >
                  Contratar Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;