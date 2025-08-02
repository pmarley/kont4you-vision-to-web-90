import { Calculator, Building, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade Completa",
      description: "Cuidamos de todas as obrigações contábeis e fiscais da sua empresa com total transparência."
    },
    {
      icon: Building,
      title: "Abertura de CNPJ",
      description: "Processo 100% online e gratuito. Escolhemos o melhor regime tributário para seu negócio."
    },
    {
      icon: TrendingUp,
      title: "Planejamento Tributário",
      description: "Estratégias personalizadas para reduzir legalmente seus impostos e aumentar sua margem."
    },
    {
      icon: Users,
      title: "Consultoria Especializada",
      description: "Orientação estratégica para tomada de decisões e crescimento sustentável do seu negócio."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contabilidade completa para iniciantes e experientes
          </p>
          <p className="text-brand-yellow font-semibold text-lg mt-2">
            "Feita para quem está começando, preparada para quem já cresceu"
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;