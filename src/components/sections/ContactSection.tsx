import React, { useState } from 'react';
import { siteContent } from '../../constants/siteContent';
import { SectionTag } from '../common/SectionTag';
import { BentoCard } from '../common/BentoCard';
import { Button } from '../common/Button';
import { MapPin, Clock, Send, CheckCircle, Copy, Mail, Terminal } from 'lucide-react';

interface ContactSectionProps {
  onOpenLegal?: (tab: 'legal' | 'privacy' | 'cookies') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenLegal }) => {
  const { sectionTag, headline, subheadline, directContact, email } = siteContent.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Architecture & Conception Système',
    message: '',
  });

  const [rgpdConsent, setRgpdConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = email || 'contact@lsr-digital-architecture.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !rgpdConsent) return;
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
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleCopyEmail}
                title="Copier l'adresse email"
                icon={
                  copiedEmail ? (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )
                }
                iconPosition="left"
              >
                <span className={copiedEmail ? 'text-emerald-400' : ''}>
                  {copiedEmail ? 'Copié' : 'Copier'}
                </span>
              </Button>
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
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="font-mono text-xs text-[#38BDF8] tracking-wider uppercase flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" />
                      DEMANDE D'ÉCHANGE TECHNIQUE
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">RÉPONSE SOUS 48H</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase tracking-wider">
                        Nom & Rôle *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jean Dupont (CTO)"
                        className="w-full bg-[#131926] border border-white/10 rounded-[6px] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#38BDF8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase tracking-wider">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jean@entreprise.com"
                        className="w-full bg-[#131926] border border-white/10 rounded-[6px] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#38BDF8] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase tracking-wider">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nom de l'entreprise ou projet"
                      className="w-full bg-[#131926] border border-white/10 rounded-[6px] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#38BDF8] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5 uppercase tracking-wider">
                      Type d'intervention
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
                      Votre projet en quelques mots
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Contexte technique, enjeux de charge, délais..."
                      className="w-full bg-[#131926] border border-white/10 rounded-[6px] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#38BDF8] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* RGPD Mandatory Consent */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      id="rgpd-consent"
                      type="checkbox"
                      required
                      checked={rgpdConsent}
                      onChange={(e) => setRgpdConsent(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-white/20 bg-[#131926] text-[#38BDF8] focus:ring-[#38BDF8] focus:ring-offset-0 cursor-pointer"
                    />
                    <label
                      htmlFor="rgpd-consent"
                      className="text-xs text-[#94A3B8] leading-relaxed cursor-pointer select-none"
                    >
                      J'accepte que les données saisies soient exploitées par LSR Digital
                      Architecture afin de répondre à ma demande technique, conformément à la{' '}
                      <button
                        type="button"
                        onClick={() => onOpenLegal?.('privacy')}
                        className="text-[#38BDF8] hover:underline inline font-mono"
                      >
                        politique de confidentialité (RGPD)
                      </button>
                      . *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={!rgpdConsent}
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Initier la prise de contact
                  </Button>

                  <p className="text-[11px] font-mono text-[#64748B] text-center pt-1">
                    Vos données restent strictement confidentielles. Zéro démarchage intempestif.
                  </p>
                </form>
              )}
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
};
