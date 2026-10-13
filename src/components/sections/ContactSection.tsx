import React, { useState } from 'react';
import { siteContent } from '../../constants/siteContent';
import { SectionTag } from '../common/SectionTag';
import { BentoCard } from '../common/BentoCard';
import { MapPin, Clock, Send, CheckCircle, Copy, Mail, Terminal } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { sectionTag, headline, subheadline, directContact } = siteContent.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Architecture & Conception Système',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'contact@lsr-digital.fr';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionTag variant="cyan">{sectionTag}</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F8FAFC] tracking-tight mb-4">
                {headline}
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed mb-8">{subheadline}</p>

              {/* Direct Details Bento */}
              <div className="space-y-4 mb-8">
                <BentoCard interactive={false} className="p-4 bg-[#0D111A]">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-[#131926] text-[#38BDF8] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#64748B] uppercase block">
                        Localisation & Modalités
                      </span>
                      <p className="text-sm font-medium text-[#F8FAFC]">{directContact.location}</p>
                    </div>
                  </div>
                </BentoCard>

                <BentoCard interactive={false} className="p-4 bg-[#0D111A]">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-[#131926] text-emerald-400 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#64748B] uppercase block">
                        Disponibilité d'intervention
                      </span>
                      <p className="text-sm font-medium text-[#F8FAFC]">
                        {directContact.availability}
                      </p>
                    </div>
                  </div>
                </BentoCard>
              </div>
            </div>

            {/* Email quick copy */}
            <div className="p-4 rounded-[10px] bg-[#0D111A] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8]" />
                <span className="font-mono text-xs text-[#E2E8F0]">{contactEmail}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 hover:bg-white/10 text-[#38BDF8] border border-white/10 flex items-center gap-1.5 transition-colors"
                title="Copier l'adresse email"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copié</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copier</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7">
            <BentoCard glowColor="blue" className="p-7 sm:p-9">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[#F8FAFC]">
                    Demande de consultation enregistrée
                  </h3>
                  <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                    Merci {formData.name}. Votre brief a été transmis à notre équipe d'architecture.
                    Nous reviendrons vers vous sous 48h ouvrées.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono rounded bg-white/10 text-white hover:bg-white/15 transition-colors"
                  >
                    <span>Envoyer un autre message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="font-mono text-xs text-[#38BDF8] tracking-wider uppercase flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" />
                      FORMULAIRE D'INITIALISATION TECHNIQUE
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">CONFIDENTIEL</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase tracking-wider">
                        Votre Nom & Rôle *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Jean Dupont (CTO / Lead Arch)"
                        className="w-full bg-[#131926] border border-white/10 rounded-[6px] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#38BDF8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase tracking-wider">
                        Email Professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nom@entreprise.com"
                        className="w-full bg-[#131926] border border-white/10 rounded-[6px] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#38BDF8] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase tracking-wider">
                      Entreprise / Organisation
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ex: FinTech, SaaS Scale-up, Grand Compte..."
                      className="w-full bg-[#131926] border border-white/10 rounded-[6px] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#38BDF8] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase tracking-wider">
                      Nature du besoin principal
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#131926] border border-white/10 rounded-[6px] px-3.5 py-2.5 text-sm text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none transition-colors"
                    >
                      <option value="Architecture & Conception Système">
                        Conception & Architecture Système (DAT, DDD, Résilience)
                      </option>
                      <option value="Ingénierie Web Full-Stack">
                        Développement d'application web critique sur-mesure
                      </option>
                      <option value="Audit & Performance">
                        Audit technique, Refactorisation & Élimination de dette
                      </option>
                      <option value="Consultation ponctuelle">
                        Revue de code & cadrage d'infrastructure
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase tracking-wider">
                      Détails de votre contexte & Enjeux
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre problématique technique, volumétrie estimée, délais envisagés..."
                      className="w-full bg-[#131926] border border-white/10 rounded-[6px] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#38BDF8] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-[8px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-mono text-sm font-semibold tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.3)] border border-[#38BDF8]/40 transition-all hover:scale-[1.01]"
                  >
                    <span>Transmettre le brief technique</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
};
