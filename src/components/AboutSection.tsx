import { Heart, TrendingUp, Handshake } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          A Kont4You é sua contabilidade com propósito
        </h2>
        
        <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-16 leading-relaxed">
          Muito além dos impostos, estamos aqui para apoiar você desde o primeiro 
          passo do seu negócio. Atendimento humano, orientações simples, sem 
          jargões e com muito compromisso com a sua evolução como empresário.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-10 h-10 text-brand-blue" />
            </div>
            <h3 className="text-2xl font-bold text-white">Atendimento Humano</h3>
            <p className="text-blue-100 leading-relaxed">
              Pessoas reais cuidando do seu negócio, sempre dispostas a te ajudar com 
              linguagem simples e clara.
            </p>
          </div>

          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-10 h-10 text-brand-blue" />
            </div>
            <h3 className="text-2xl font-bold text-white">Feita para Crescer</h3>
            <p className="text-blue-100 leading-relaxed">
              Nossa solução acompanha sua jornada, desde os primeiros passos até o 
              crescimento da sua empresa.
            </p>
          </div>

          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto">
              <Handshake className="w-10 h-10 text-brand-blue" />
            </div>
            <h3 className="text-2xl font-bold text-white">Compromisso Real</h3>
            <p className="text-blue-100 leading-relaxed">
              Transparência total, sem pegadinhas. Nosso sucesso está diretamente 
              ligado ao sucesso do seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;