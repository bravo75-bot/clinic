import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Beaker, ClipboardList, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Activity className="text-brand-blue" size={32} />,
    title: 'Consultation',
    description: 'Bilans de santé complets et diagnostics spécialisés avec nos experts.'
  },
  {
    icon: <Beaker className="text-brand-blue" size={32} />,
    title: 'Laboratoire',
    description: 'Analyses médicales précises réalisées avec les dernières technologies.'
  },
  {
    icon: <ClipboardList className="text-brand-blue" size={32} />,
    title: 'Soins généraux',
    description: 'Traitements adaptés, vaccinations et suivi médical régulier pour tous.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              Nos Services Spécisalisés
            </h2>
            <p className="text-lg text-brand-dark/70">
              Nous offrons une large gamme de soins médicaux pour répondre à tous vos besoins de santé avec professionnalisme.
            </p>
          </div>
          <a href="#contact" className="hidden md:flex items-center space-x-2 text-brand-blue font-bold group">
            <span>Voir tous les services</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-brand-blue/5 hover:shadow-2xl hover:border-brand-blue/20 transition-all duration-500"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
              <p className="text-brand-dark/70 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="flex items-center space-x-2 text-sm font-bold text-brand-dark group">
                <span>En savoir plus</span>
                <div className="w-6 h-px bg-brand-dark group-hover:w-10 transition-all"></div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="bg-brand-blue rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
          {/* Abstract pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="text-center lg:text-left mb-10 lg:mb-0 relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Besoin d'un diagnostic urgent ?</h3>
            <p className="text-white/80 text-lg max-w-xl">
              Nos médecins sont prêts à vous recevoir aujourd'hui pour toute urgence ou consultation régulière.
            </p>
          </div>

          <div className="relative z-10">
            <a href="#contact" className="bg-white text-brand-blue px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-brand-light transition-colors active:scale-95 block">
              Prendre rendez-vous maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
