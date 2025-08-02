import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-brand-light-blue to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-blue leading-tight">
              Contabilidade é só o{" "}
              <span className="text-brand-yellow">começo.</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Seja para abrir sua empresa ou organizar de vez sua contabilidade, 
              a Kont4You te ajuda a fazer tudo certo — com orientação simples e 
              atendimento humano de verdade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Fale com um especialista
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                Conheça nossos planos
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>Abertura grátis</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>100% online</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>Suporte humano</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Equipe celebrando sucesso"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-800">+25 mil empresas</span>
                </div>
                <div className="text-xs text-gray-600">atendidas com sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;