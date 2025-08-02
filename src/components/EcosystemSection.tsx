import { Shield, CreditCard, Megaphone, Scale, Laptop, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EcosystemSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Seguros",
      description: "Empresariais e pessoais com condições especiais para nossos clientes.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: CreditCard,
      title: "Crédito",
      description: "Linhas de crédito e financiamento para impulsionar seu crescimento.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Megaphone,
      title: "Marketing Digital",
      description: "Estratégias de marketing e presença online para aumentar suas vendas.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Scale,
      title: "Consultoria Jurídica",
      description: "Assessoria legal especializada para proteger seu negócio.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Laptop,
      title: "Tecnologia",
      description: "Sistemas e ferramentas para otimizar a gestão da sua empresa.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Users,
      title: "Outros Serviços",
      description: "Rede de parceiros qualificados para todas as suas necessidades.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            Ecossistema de Soluções
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Hub completo de parceiros qualificados para todas as necessidades do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${service.color}`}>
                  <service.icon className="w-8 h-8" />
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

export default EcosystemSection;