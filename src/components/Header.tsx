import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-brand-blue">
              Kont<span className="text-brand-yellow">4</span>You
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-brand-blue transition-colors">
              Home
            </a>
            <a href="#planos" className="text-gray-600 hover:text-brand-blue transition-colors">
              Nossos Planos
            </a>
            <a href="#conteudos" className="text-gray-600 hover:text-brand-blue transition-colors">
              Conteúdos
            </a>
            <a href="#sobre" className="text-gray-600 hover:text-brand-blue transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-gray-600 hover:text-brand-blue transition-colors">
              Contato
            </a>
          </nav>

          <Button variant="hero" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Fale com um especialista
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;