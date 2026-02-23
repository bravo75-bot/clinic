import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';

const Doctor = () => {
  return (
    <section id="medecin" className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000"
                alt="Dr. Désiré Malolokwa"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-6 -right-6 z-20 bg-brand-blue p-8 rounded-3xl shadow-2xl text-white text-center">
              <p className="text-4xl font-extrabold mb-1">15+</p>
              <p className="text-sm font-medium uppercase tracking-wider">Ans d'expérience</p>
            </div>
          </motion.div>

          {/* Doctor Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">Notre Expert</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-brand-dark mb-6">
              Dr. Désiré Malolokwa
            </h3>

            <p className="text-xl text-brand-dark/80 font-medium mb-6 italic">
              "Ma mission est d'apporter des soins de haute qualité avec empathie et professionnalisme à chaque patient."
            </p>

            <p className="text-lg text-brand-dark/70 mb-10 leading-relaxed">
              Le Dr Désiré Malolokwa est un praticien éminent spécialisé dans la médecine interne. Grâce à son expertise internationale et son dévouement constant, il assure à la Clinique EL RAPHA des standards de soins d'excellence mondiale.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/5 p-3 rounded-xl mt-1">
                  <GraduationCap className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-dark mb-1">Qualifications</h4>
                  <p className="text-brand-dark/70">Doctorat en Médecine (Spécialisation Médecine Interne), Certifié Expert en Soins de Santé.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/5 p-3 rounded-xl mt-1">
                  <Award className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-dark mb-1">Distinctions</h4>
                  <p className="text-brand-dark/70">Prix d'Excellence Médicale 2023, Membre de l'Association Internationale des Médecins.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {['Médecine Générale', 'Cardiologie', 'Diagnostics complexes', 'Urgence'].map((skill) => (
                <div key={skill} className="flex items-center space-x-2 bg-brand-light px-4 py-2 rounded-full border border-brand-blue/10">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <span className="font-semibold text-brand-dark/80">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
