import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShieldCheck, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light">
      {/* Background blobs for aesthetics */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-brand-blue/10 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">
                Disponible aujourd'hui
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-dark leading-[1.1] mb-6">
              L'excellence médicale au service de votre <span className="text-brand-blue">bien-être</span>.
            </h1>

            <p className="text-xl text-brand-dark/70 mb-10 leading-relaxed max-w-xl">
              Votre santé, notre priorité. Découvrez une approche moderne et humaine des soins médicaux avec une équipe dévouée.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Calendar size={22} />
                <span>Prendre rendez-vous</span>
              </a>
              <a href="#services" className="px-8 py-4 rounded-xl border-2 border-brand-blue/20 text-brand-blue font-bold hover:bg-brand-blue/5 transition-all duration-300 text-center">
                Nos Services
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-6 text-brand-dark/60">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="text-brand-blue" size={20} />
                <span className="text-sm font-medium">Sécurisé</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-brand-blue" size={20} />
                <span className="text-sm font-medium">Réponse rapide</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000"
                alt="Clinique EL RAPHA"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-brand-blue/10 animate-bounce-slow">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-blue/10 p-3 rounded-full">
                  <Clock className="text-brand-blue" size={24} />
                </div>
                <div>
                  <p className="text-sm text-brand-dark/60 font-medium">Attente moyenne</p>
                  <p className="text-xl font-bold text-brand-dark">15 Minutes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
