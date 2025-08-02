import { Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="text-2xl font-bold">
              Kont<span className="text-brand-yellow">4</span>You
            </div>
            <p className="text-gray-300 leading-relaxed">
              Contabilidade com propósito 
              para pequenos empresários 
              em todo o Brasil.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Serviços</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-brand-yellow transition-colors">
                Abertura de Empresa
              </a>
              <a href="#" className="block text-gray-300 hover:text-brand-yellow transition-colors">
                Contabilidade Completa
              </a>
              <a href="#" className="block text-gray-300 hover:text-brand-yellow transition-colors">
                Planejamento Tributário
              </a>
              <a href="#" className="block text-gray-300 hover:text-brand-yellow transition-colors">
                Consultoria
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Especialidades</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-brand-yellow transition-colors">
                Médicos PJ
              </a>
              <a href="#" className="block text-gray-300 hover:text-brand-yellow transition-colors">
                Corretores
              </a>
              <a href="#" className="block text-gray-300 hover:text-brand-yellow transition-colors">
                Prestadores de Serviço
              </a>
              <a href="#" className="block text-gray-300 hover:text-brand-yellow transition-colors">
                Pequenos Empresários
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <p>Av. Rio Branco, 125 - 19° andar</p>
              <p>Centro, Rio de Janeiro - RJ</p>
              <p>(11) 3000-0000</p>
              <p>contato@kont4you.com.br</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Kont4You - Grupo IRKO. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;