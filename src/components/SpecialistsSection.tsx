import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import doctorImage from "@/assets/doctor.jpg";
import analyticsImage from "@/assets/analytics.jpg";
import businessmanImage from "@/assets/businessman.jpg";

const SpecialistsSection = () => {
  const specialists = [
    {
      image: doctorImage,
      title: "Médicos e Profissionais da Saúde",
      description: "Facilitamos sua transição para PJ com orientação especializada em regulamentação médica e otimização tributária.",
      features: [
        "Abertura de PJ médica",
        "Gestão de plantões e consultas",
        "Planejamento tributário específico"
      ]
    },
    {
      image: analyticsImage,
      title: "Corretores de Imóveis e Seguros",
      description: "Soluções contábeis que entendem o mercado imobiliário e de seguros, maximizando sua rentabilidade.",
      features: [
        "Gestão de comissões",
        "Emissão de NF especializada",
        "Controle de carteira de clientes"
      ]
    },
    {
      image: businessmanImage,
      title: "Prestadores de Serviços",
      description: "Apoio completo para profissionais autônomos que precisam se adequar às exigências do mercado.",
      features: [
        "Regularização empresarial",
        "Controle financeiro simplificado",
        "Orientação para crescimento"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            Especialistas nos Seus Desafios
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Entendemos as particularidades de cada profissão e oferecemos soluções personalizadas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {specialists.map((specialist, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={specialist.image} 
                  alt={specialist.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-bold text-brand-blue">{specialist.title}</h3>
                <p className="text-gray-600 leading-relaxed">{specialist.description}</p>
                <div className="space-y-3">
                  {specialist.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
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

export default SpecialistsSection;