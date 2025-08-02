import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactCTASection = () => {
  return (
    <section className="bg-brand-blue py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text and contact info */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Pronto para começar?
            </h2>
            
            <p className="text-xl text-brand-light-blue leading-relaxed">
              Fale com nossos especialistas e descubra como 
              a Kont4You pode transformar a gestão da sua 
              empresa.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <Phone className="w-5 h-5 text-brand-yellow" />
                <span className="text-lg">(11) 3000-0000</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Mail className="w-5 h-5 text-brand-yellow" />
                <span className="text-lg">contato@kont4you.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <MessageCircle className="w-5 h-5 text-brand-yellow" />
                <span className="text-lg">(11) 99999-9999</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-brand-blue mb-8 text-center">
              Solicite uma proposta
            </h3>
            
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Seu nome completo"
                  className="h-12 text-base"
                />
              </div>
              
              <div>
                <Input 
                  type="email"
                  placeholder="Seu e-mail"
                  className="h-12 text-base"
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Seu telefone/WhatsApp"
                  className="h-12 text-base"
                />
              </div>
              
              <div>
                <Select>
                  <SelectTrigger className="h-12 text-base text-gray-500">
                    <SelectValue placeholder="Tipo de empresa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mei">MEI</SelectItem>
                    <SelectItem value="me">Microempresa</SelectItem>
                    <SelectItem value="epp">Empresa de Pequeno Porte</SelectItem>
                    <SelectItem value="ltda">Limitada</SelectItem>
                    <SelectItem value="sa">Sociedade Anônima</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select>
                  <SelectTrigger className="h-12 text-base text-gray-500">
                    <SelectValue placeholder="Área de atuação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saude">Saúde</SelectItem>
                    <SelectItem value="comercio">Comércio</SelectItem>
                    <SelectItem value="servicos">Serviços</SelectItem>
                    <SelectItem value="industria">Indústria</SelectItem>
                    <SelectItem value="tecnologia">Tecnologia</SelectItem>
                    <SelectItem value="consultoria">Consultoria</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full h-12 text-lg font-semibold"
              >
                Falar com Especialista
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você concorda com nossa Política de Privacidade
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;