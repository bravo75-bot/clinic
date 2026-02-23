import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, CalendarCheck, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', service: '', date: '' });
      } else {
        setStatus('error');
        setMessage(data.message || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setMessage('Impossible de contacter le serveur');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/[0.03] rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-brand-dark mb-6">Prêt à prendre rendez-vous ?</h2>
            <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les plus brefs délais pour confirmer votre créneau.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white rounded-[3rem] shadow-2xl p-8 lg:p-16 border border-brand-blue/5"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-bold text-brand-dark mb-4">Demande Envoyée !</h3>
                <p className="text-lg text-brand-dark/70 mb-8">
                  Merci pour votre confiance. Nous vous contacterons très prochainement.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-brand-blue font-bold hover:underline"
                >
                  Envoyer une autre demande
                </button>
              </motion.div>
            ) : (
              <form className="grid md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark/80 ml-1">Nom Complet</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: Alain Mutamba"
                    className="w-full px-6 py-4 rounded-xl bg-brand-light border border-transparent focus:border-brand-blue/30 outline-none transition-all placeholder:text-brand-dark/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark/80 ml-1">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ex: +243 000 000 000"
                    className="w-full px-6 py-4 rounded-xl bg-brand-light border border-transparent focus:border-brand-blue/30 outline-none transition-all placeholder:text-brand-dark/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark/80 ml-1">Service souhaité</label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-brand-light border border-transparent focus:border-brand-blue/30 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="Consultation générale">Consultation générale</option>
                    <option value="Laboratoire / Analyses">Laboratoire / Analyses</option>
                    <option value="Pédiatrie">Pédiatrie</option>
                    <option value="Gynécologie">Gynécologie</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark/80 ml-1">Date préférée</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl bg-brand-light border border-transparent focus:border-brand-blue/30 outline-none transition-all cursor-pointer"
                  />
                </div>

                {status === 'error' && (
                  <div className="md:col-span-2 flex items-center space-x-2 text-rose-600 bg-rose-50 p-4 rounded-xl">
                    <AlertCircle size={20} />
                    <span className="font-medium">{message}</span>
                  </div>
                )}

                <div className="md:col-span-2 pt-4">
                  <button
                    disabled={status === 'loading'}
                    className="btn-primary w-full py-5 text-xl flex items-center justify-center space-x-3 group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center space-x-3">
                      {status === 'loading' ? (
                        <Loader2 size={24} className="animate-spin" />
                      ) : (
                        <CalendarCheck size={24} />
                      )}
                      <span>{status === 'loading' ? 'Envoi en cours...' : 'Confirmer mon rendez-vous'}</span>
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </form>
            )}

            <div className="mt-12 pt-12 border-t border-brand-light flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-dark/60">Ou appelez-nous directement</p>
                  <p className="text-lg font-bold text-brand-dark">+243 999 123 456</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-brand-dark/50 text-sm font-medium">
                <Send size={16} />
                <span>Nous vous répondons sous 2 heures</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
