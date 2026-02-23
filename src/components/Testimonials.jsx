import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Jean-Pierre Kabangu",
    role: "Patient régulier",
    text: "Une clinique exceptionnelle ! L'accueil est chaleureux et les soins sont prodigués avec une expertise remarquable. Je recommande vivement le Dr Malolokwa.",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=jp"
  },
  {
    name: "Marie Arlette",
    role: "Maman de patient",
    text: "Le service est incroyablement rapide et efficace. J'ai pu obtenir un rendez-vous le jour-même pour mon fils. L'équipement est vraiment moderne.",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=ma"
  },
  {
    name: "Alain Mutamba",
    role: "Patient chirurgical",
    text: "J'ai été impressionné par la propreté des lieux et le professionnalisme des infirmiers. On se sent vraiment en sécurité et écouté chez EL RAPHA.",
    rating: 4,
    img: "https://i.pravatar.cc/150?u=am"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative quotes background */}
      <Quote className="absolute top-10 left-10 text-brand-blue/5 w-64 h-64 -rotate-12" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">Ce que nos patients disent</h2>
          <p className="text-lg text-brand-dark/70">Votre satisfaction est notre plus belle réussite. Découvrez les témoignages de ceux qui nous font confiance.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-light p-8 rounded-[2rem] border border-brand-blue/5 hover:border-brand-blue/20 transition-all duration-300 relative group"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < t.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-brand-dark/80 italic text-lg leading-relaxed mb-8 relative">
                "{t.text}"
              </p>

              <div className="flex items-center space-x-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-brand-dark">{t.name}</h4>
                  <p className="text-sm text-brand-dark/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
