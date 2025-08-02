import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import planningImage from "@/assets/planning.jpg";
import officeImage from "@/assets/office.jpg";
import handshakeImage from "@/assets/handshake.jpg";

const KnowledgeSection = () => {
  const articles = [
    {
      image: planningImage,
      category: "PLANEJAMENTO",
      categoryColor: "bg-brand-yellow text-brand-blue",
      title: "Como Reduzir Impostos Legalmente em 2024",
      description: "Estratégias comprovadas para otimizar sua carga tributária e aumentar a margem de lucro da sua empresa.",
      link: "#"
    },
    {
      image: officeImage,
      category: "MEI PARA ME",
      categoryColor: "bg-green-500 text-white",
      title: "Quando Migrar do MEI para Microempresa",
      description: "Sinais de que chegou a hora de fazer a transição e como realizar o processo sem complicações.",
      link: "#"
    },
    {
      image: handshakeImage,
      category: "GESTÃO",
      categoryColor: "bg-blue-500 text-white",
      title: "Fluxo de Caixa para Pequenos Empresários",
      description: "Controle financeiro essencial para manter sua empresa saudável e preparada para crescer.",
      link: "#"
    }
  ];

  return (
    <section id="conteudos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            Centro de Conhecimento
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Conteúdos exclusivos para acelerar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={article.categoryColor}>
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-brand-blue group-hover:text-brand-blue-dark transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{article.description}</p>
                <a 
                  href={article.link}
                  className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark font-semibold transition-colors"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg" className="px-8">
            Ver Todos os Conteúdos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;