/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  ChevronRight, 
  Heart, 
  Baby, 
  Activity,
  Menu,
  X,
  Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LOGO_URL = "https://i.postimg.cc/sfmp2CT7/logo-vitalis.jpg";

const SPECIALTIES = [
  {
    title: "Ginecologia & Obstetrícia",
    icon: <Baby className="w-8 h-8 text-primary-foreground" />,
    description: "Cuidado completo com a saúde da mulher em todas as fases da vida. Desde consultas preventivas até o acompanhamento da gestação, oferecemos um atendimento humanizado, seguro e acolhedor."
  },
  {
    title: "Ecocardiograma Fetal",
    icon: <Heart className="w-8 h-8 text-primary-foreground" />,
    description: "Exame essencial para avaliação do coração do bebê durante a gestação. Utiliza tecnologia avançada para diagnóstico precoce e acompanhamento detalhado."
  },
  {
    title: "Cardiologia",
    icon: <Activity className="w-8 h-8 text-primary-foreground" />,
    description: "Atendimento especializado para prevenção, diagnóstico e tratamento de doenças cardiovasculares, com foco na qualidade de vida e acompanhamento contínuo."
  }
];

const TEAM = [
  {
    name: "Dr. Thiago Moura Saura",
    photo: "https://i.postimg.cc/L5Tv9dG5/Chat-GPT-Image-13-de-abr-de-2026-07-21-09.png",
    subtitle: "Cuidado que vai além do consultório",
    description: "Dr. Thiago é reconhecido por seu acompanhamento dedicado e profissional durante toda a gestação. Com calma, esperança e atenção aos detalhes, oferece um atendimento personalizado que marca a vida das familias. Cada consulta é uma oportunidade de cuidar não apenas da sua saúde, mas de toda a jornada que voce esta vivendo.",
    formation: [
      "Graduação em Medicina - Universidade Federal do Paraná - UFPR",
      "Residência Médica em Ginecologia e Obstetrícia - Hospital de Clínicas da Universidade Federal do Paraná – UFPR",
      "CRM PR 25911 | RQE 2139"
    ]
  },
  {
    name: "Dr. Vanessa Pillati",
    photo: "https://i.postimg.cc/HkQnVp6g/Chat-GPT-Image-13-de-abr-de-2026-07-22-52.png",
    subtitle: "Experiência e Dedicação",
    description: "Dra. Vanessa alia conhecimento técnico e acolhi-mento, acompanhando cada etapa do processo de trazer vidas ao mundo. Sua missão é oferecer segurança, empatia e apoio às famílias, garantindo que cada parto seja uma experiência humanizada.",
    formation: [
      "Graduação em Medicina - Faculdade Assis Gurgacz",
      "Residência em Ginecologia e Obstetrícia - Hospital Federal - Campo Grande/MS",
      "Pós-graduação em Arte da Ginecologia Obstetrícia - Hospital Albert Einstein",
      "Participação em congressos internacionais Veneza e Milão",
      "CRM PR 32261 | RQE 22541"
    ]
  },
  {
    name: "Dr Rafael Cristiano Duarte",
    photo: "https://i.postimg.cc/rmS29mRQ/Chat-GPT-Image-13-de-abr-de-2026-07-25-48.png",
    subtitle: "Dr Rafael tem uma missão que vai além do consultório",
    description: "Ofereço um atendimento humanizado e acolhe-dor, acompanhando você desde os primeiros sonhos da maternidade até o pós-parto, com todo carinho que esse momento merece. Com exames de alta qualidade e ultrassonogra-rias detalhadas, garanto acompanhamento minucioso para a saúde do seu bebê.",
    formation: [
      "(Manter exatamente como fornecido, sem alterações)"
    ]
  },
  {
    name: "Dr Hilário Parise Junio",
    photo: "https://i.postimg.cc/yYGpkKkf/Chat-GPT-Image-13-de-abr-de-2026-07-27-31.png",
    subtitle: "Experiência e Dedicação",
    description: "Dr. Hilário acredita que a fertilidade é um caminho construído a dois. Como médico, esposo, filho e amigo, ele entende que cada casal carrega o sonho de formar uma familia.",
    formation: [
      "Graduação em Medicina - Unifenas",
      "Residência em Ginecologia e Obstetrícia - Hospital Metropolitano de Sarandi",
      "Formação em Reprodução Assistida - Hospital de Clínicas de Porto Alegre",
      "CRM PR 39646"
    ]
  },
  {
    name: "Dra. Mariana Lopes",
    photo: "https://i.postimg.cc/KjStgmd5/Chat-GPT-Image-13-de-abr-de-2026-07-30-33.png",
    subtitle: "Experiência e Dedicação",
    description: "Dra. Mariana Lopes é cardiologista com mais de 6 anos de atuação focada na saúde cardiovascular. Filha, esposa e apaixonada pela medicina, dedica-se a cada paciente com conhecimento, cuidado e empatia.",
    formation: [
      "Medicina: FURB",
      "Clínica Médica",
      "Cardiologia: PUCRS",
      "CRM PR 38991"
    ]
  }
];

const GALLERY = [
  "https://i.postimg.cc/dQ60CsP7/vatalis-1.webp",
  "https://i.postimg.cc/h4sGmDWX/vitalis-2.webp",
  "https://i.postimg.cc/MZ5GB62K/Vitalis-3.webp"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const whatsappLink = "https://wa.me/5511997724703?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20na%20Vitalis.";

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={LOGO_URL} 
              alt="Vitalis Logo" 
              className="h-12 w-auto cursor-pointer" 
              onClick={() => scrollTo('hero')}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Sobre', 'Especialidades', 'Equipe', 'Estrutura', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-muted-foreground hover:text-primary-foreground transition-colors uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-primary hover:bg-primary/80 text-black rounded-full px-6"
            >
              Agende agora
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-4 space-y-4 shadow-lg"
            >
              {['Sobre', 'Especialidades', 'Equipe', 'Estrutura', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-lg font-serif text-gray-900 hover:bg-primary/50 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="w-full bg-primary hover:bg-primary/80 text-black rounded-full py-6 text-lg"
              >
                Agende agora
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative h-[85vh] flex items-center overflow-hidden bg-primary/30">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10" />
            <img 
              src={GALLERY[0]} 
              alt="Clínica Vitalis" 
              className="w-full h-full object-cover object-center scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6">
                Vitalis Centro de Especialidades
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 italic">
                "Mais que uma clínica, um cuidado que acompanha a vida."
              </p>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg"
                className="bg-white hover:bg-gray-100 text-black rounded-full px-10 py-7 text-lg shadow-xl shadow-black/5 group"
              >
                Agende agora
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={GALLERY[1]} 
                    alt="Interior da Clínica" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-2xl -z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-primary-foreground font-medium tracking-widest uppercase text-sm mb-4 block">Sobre Nós</span>
                <h2 className="text-4xl md:text-5xl mb-8">Excelência e Acolhimento</h2>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    A Vitalis Centro de Especialidades nasce com o propósito de cuidar da vida em todas as suas fases, unindo conhecimento, acolhimento e excelência médica.
                  </p>
                  <p>
                    Mais do que uma mudança de nome, este momento representa a realização do sonho de cinco sócios e a expansão da clínica com novas especialidades, permitindo oferecer um atendimento ainda mais completo, humano e integrado para você e sua família.
                  </p>
                  <p>
                    Aqui, cada paciente é recebido com atenção, respeito e sensibilidade. Nossa equipe é formada por profissionais dedicados, que atuam com amor pelo que fazem e compromisso com a saúde e o bem-estar.
                  </p>
                  <p className="font-serif text-gray-900 text-xl italic">
                    Seja bem-vindo à Vitalis.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section id="especialidades" className="py-24 bg-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary-foreground font-medium tracking-widest uppercase text-sm mb-4 block">Nossas Áreas</span>
              <h2 className="text-4xl md:text-5xl">Especialidades</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {SPECIALTIES.map((spec, index) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-2xl premium-shadow hover:shadow-xl transition-all border border-gray-50 group"
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {spec.icon}
                  </div>
                  <h3 className="text-2xl mb-4">{spec.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {spec.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="equipe" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary-foreground font-medium tracking-widest uppercase text-sm mb-4 block">Corpo Clínico</span>
              <h2 className="text-4xl md:text-5xl">Nossa Equipe Médica</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {TEAM.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl text-gray-900">{member.name}</h3>
                    <p className="text-primary-foreground font-medium text-sm italic">{member.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {member.description}
                    </p>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full rounded-full bg-primary text-black hover:bg-primary/80 transition-all mt-4 py-6 text-base font-medium shadow-sm border border-primary-foreground/10">
                          Saiba mais
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] rounded-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-serif text-gray-900">{member.name}</DialogTitle>
                          <p className="text-primary font-medium italic text-sm mt-1">{member.subtitle}</p>
                        </DialogHeader>
                        <div className="space-y-8 py-6">
                          <div className="space-y-4">
                            <h4 className="font-medium text-gray-900 uppercase tracking-widest text-xs border-b border-gray-100 pb-2">Sobre o Profissional</h4>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                              {member.description}
                            </p>
                          </div>
                          
                          <div className="space-y-4">
                            <h4 className="font-medium text-gray-900 uppercase tracking-widest text-xs border-b border-gray-100 pb-2">Formação Acadêmica</h4>
                            <ul className="space-y-3">
                              {member.formation.map((item, i) => (
                                <li key={i} className="flex items-start text-muted-foreground leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Structure Section */}
        <section id="estrutura" className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary-foreground font-medium tracking-widest uppercase text-sm mb-4 block">Nossa Casa</span>
              <h2 className="text-4xl md:text-5xl">Estrutura da Clínica</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {GALLERY.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="rounded-2xl overflow-hidden shadow-xl aspect-square"
                >
                  <img 
                    src={img} 
                    alt={`Estrutura ${index + 1}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <img 
                  src={LOGO_URL} 
                  alt="Vitalis Logo" 
                  className="h-16 w-auto mb-10 brightness-0 invert" 
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-4xl font-serif mb-8 text-white">Estamos prontos para cuidar de você.</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Endereço</h4>
                      <p className="text-gray-400">Av. dos Imigrantes, 501 - Vila Yolanda<br />Foz do Iguaçu - PR</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Telefone</h4>
                      <p className="text-gray-400">(11) 99772-4703</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-serif mb-6">Horário de Atendimento</h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Segunda - Sexta</span>
                    <span>08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Sábado</span>
                    <span>08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span>Fechado</span>
                  </div>
                </div>
                <Button 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="w-full bg-white hover:bg-gray-100 text-black rounded-full py-7 mt-10 text-lg shadow-lg"
                >
                  Agende agora
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Vitalis Centro de Especialidades. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </motion.a>
    </div>
  );
}
