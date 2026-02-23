import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <span className="text-2xl font-bold tracking-tight">EL RAPHA</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Votre santé, notre priorité. Une clinique dédiée à fournir des soins médicaux d'excellence avec compassion et innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Liens Rapides
              <span className="absolute bottom-0 left-0 w-8 h-1 bg-brand-blue mt-2"></span>
            </h4>
            <ul className="space-y-4">
              <li><a href="#accueil" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block">Accueil</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block">Nos Services</a></li>
              <li><a href="#medecin" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block">Notre Médecin</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block">Prendre RDV</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Nous Contacter
              <span className="absolute bottom-0 left-0 w-8 h-1 bg-brand-blue mt-2"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-brand-blue shrink-0" size={20} />
                <span className="text-gray-400">123 Avenue de l'Hôpital, Gombe, Kinshasa, RDC</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-brand-blue shrink-0" size={20} />
                <span className="text-gray-400">+243 999 123 456</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-brand-blue shrink-0" size={20} />
                <span className="text-gray-400">contact@el-rapha.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Horaires
              <span className="absolute bottom-0 left-0 w-8 h-1 bg-brand-blue mt-2"></span>
            </h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="text-brand-blue" size={20} />
                <span className="font-bold">Heures d'ouverture</span>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex justify-between">
                  <span>Lun - Ven :</span>
                  <span className="text-white font-medium">24h / 24</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi :</span>
                  <span className="text-white font-medium">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche :</span>
                  <span className="text-white font-medium">Urgences uniquement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EL RAPHA. Tous droits réservés. Design moderne par AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
