import React from 'react';
import { motion } from 'framer-motion';
import { Users, Stethoscope, Zap, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: <Users className="text-brand-blue" size={28} />,
    title: 'Personnel qualifié',
    description: 'Une équipe de médecins experts et dévoués à votre santé.'
  },
  {
    icon: <Stethoscope className="text-brand-blue" size={28} />,
    title: 'Équipement moderne',
    description: 'Technologies de pointe pour des diagnostics précis et rapides.'
  },
  {
    icon: <Zap className="text-brand-blue" size={28} />,
    title: 'Service rapide',
    description: 'Prise en charge immédiate pour minimiser votre temps d\'attente.'
  },
  {
    icon: <HeartPulse className="text-brand-blue" size={28} />,
    title: 'Soins personnalisés',
    description: 'Un accompagnement sur mesure adapté à chaque patient.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
            Pourquoi nous choisir ?
          </h2>
          <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-brand-light border border-brand-blue/5 hover:border-brand-blue/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-md mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-dark/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
