import { Shield, Award, Lock } from "lucide-react";

const TrustSection = () => {
  const trustItems = [
    {
      icon: Award,
      title: "Grupo IRKO",
      subtitle: "70 anos de experiência",
      color: "text-brand-blue"
    },
    {
      icon: Shield,
      title: "CRC Ativo",
      subtitle: "Registro profissional",
      color: "text-green-600"
    },
    {
      icon: Lock,
      title: "100% Seguro",
      subtitle: "Dados protegidos",
      color: "text-brand-yellow"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Credibilidade que você pode confiar
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
                item.color === 'text-brand-blue' ? 'bg-blue-100' :
                item.color === 'text-green-600' ? 'bg-green-100' :
                'bg-yellow-100'
              } group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-10 h-10 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;