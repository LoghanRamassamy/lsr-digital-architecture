import React, { useState } from 'react';
import { siteContent } from '../../constants/siteContent';
import { SectionTag } from '../common/SectionTag';
import { BentoCard } from '../common/BentoCard';
import { Button } from '../common/Button';
import {
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Copy,
  Mail,
  Terminal,
  User,
  Building2,
  MessageSquare,
  Check,
  AlertCircle,
  ShieldCheck,
  Loader2,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenLegal?: (tab: 'legal' | 'privacy' | 'cookies') => void;
}

const PROJECT_TYPE_OPTIONS = [
  {
    value: 'Architecture & Conception Système',
    label: 'Architecture & DAT',
    desc: 'DAT, DDD, Résilience & Cloud',
  },
  {
    value: 'Ingénierie Web Full-Stack',
    label: 'Dév Web Critique',
    desc: 'Applications web sur-mesure & APIs transactionnelles',
  },
  {
    value: 'Audit & Performance',
    label: 'Audit & Dette Tech',
    desc: 'Refactorisation & Élimination de dette',
  },
  {
    value: 'Consultation ponctuelle',
    label: 'Cadrage Ponctuel',
    desc: "Revue de code & cadrage d'infrastructure",
  },
  {
    value: 'Je souhaite simplement être accompagné sur mon projet',
    label: 'Je souhaite simplement être accompagné sur mon projet',
    desc: 'Cadrage initial, audit du besoin et orientation technique sur-mesure',
    isFullWidth: true,
  },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenLegal }) => {
  const { sectionTag, headline, subheadline, directContact, email } = siteContent.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Architecture & Conception Système',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
  });

  const [rgpdConsent, setRgpdConsent] = useState(false);
  const [rgpdError, setRgpdError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = email || 'contact@lsr-digital-architecture.com';

  const isNameValid = formData.name.trim().length >= 2;
  const isEmailValid = EMAIL_REGEX.test(formData.email.trim());

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true });

    if (!isNameValid) {
      document.getElementById('form-name')?.focus();
      return;
    }

    if (!isEmailValid) {
      document.getElementById('form-email')?.focus();
      return;
    }

    if (!rgpdConsent) {
      setRgpdError(true);
      document.getElementById('rgpd-consent')?.focus();
      return;
    }

    setRgpdError(false);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
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
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'Architecture & Conception Système',
                        message: '',
                      });
                      setTouched({ name: false, email: false });
                      setRgpdConsent(false);
                    }}
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="font-mono text-xs text-[#38BDF8] tracking-wider uppercase flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" />
                      DEMANDE D'ÉCHANGE TECHNIQUE
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">RÉPONSE SOUS 48H</span>
                  </div>

                  {/* Nom & Email en grille 2 colonnes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nom & Rôle */}
                    <div className="form-group">
                      <div className="form-label-row">
                        <label htmlFor="form-name" className="form-label">
                          <span className="form-label__text">Nom & Rôle</span>
                          <span className="form-label__required">*</span>
                        </label>
                        <span className="form-badge form-badge--required">Requis</span>
                      </div>
                      <div className="form-control-wrapper">
                        <span className="form-control-icon">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          id="form-name"
                          type="text"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                          placeholder="Jean Dupont (CTO)"
                          className={`form-input ${
                            touched.name && !isNameValid
                              ? 'is-invalid'
                              : isNameValid
                                ? 'is-valid'
                                : ''
                          }`}
                          aria-invalid={touched.name && !isNameValid}
                        />
                        {isNameValid && (
                          <span className="form-control-status form-control-status--valid">
                            <Check className="w-4 h-4" strokeWidth={2.5} />
                          </span>
                        )}
                        {touched.name && !isNameValid && (
                          <span className="form-control-status form-control-status--invalid">
                            <AlertCircle className="w-4 h-4" />
                          </span>
                        )}
                      </div>
                      {touched.name && !isNameValid && (
                        <div className="form-error-msg">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>Veuillez renseigner votre nom (min. 2 caractères).</span>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <div className="form-label-row">
                        <label htmlFor="form-email" className="form-label">
                          <span className="form-label__text">Email</span>
                          <span className="form-label__required">*</span>
                        </label>
                        <span className="form-badge form-badge--required">Requis</span>
                      </div>
                      <div className="form-control-wrapper">
                        <span className="form-control-icon">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          id="form-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                          placeholder="jean@entreprise.com"
                          className={`form-input ${
                            touched.email && !isEmailValid
                              ? 'is-invalid'
                              : isEmailValid
                                ? 'is-valid'
                                : ''
                          }`}
                          aria-invalid={touched.email && !isEmailValid}
                        />
                        {isEmailValid && (
                          <span className="form-control-status form-control-status--valid">
                            <Check className="w-4 h-4" strokeWidth={2.5} />
                          </span>
                        )}
                        {touched.email && !isEmailValid && (
                          <span className="form-control-status form-control-status--invalid">
                            <AlertCircle className="w-4 h-4" />
                          </span>
                        )}
                      </div>
                      {touched.email && !isEmailValid && (
                        <div className="form-error-msg">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>Format d'email valide requis.</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Entreprise */}
                  <div className="form-group">
                    <div className="form-label-row">
                      <label htmlFor="form-company" className="form-label">
                        <span className="form-label__text">Entreprise / Organisation</span>
                      </label>
                      <span className="form-badge form-badge--optional">Optionnel</span>
                    </div>
                    <div className="form-control-wrapper">
                      <span className="form-control-icon">
                        <Building2 className="w-4 h-4" />
                      </span>
                      <input
                        id="form-company"
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nom de l'entreprise, startup ou institution"
                        className={`form-input ${formData.company.trim().length > 0 ? 'is-valid' : ''}`}
                      />
                      {formData.company.trim().length > 0 && (
                        <span className="form-control-status form-control-status--valid">
                          <Check className="w-4 h-4" strokeWidth={2.5} />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Type d'intervention ciblée (Boutons radio) */}
                  <div className="form-group">
                    <div className="form-label-row">
                      <span id="label-project-type" className="form-label">
                        <span className="form-label__text">Type d'intervention ciblée</span>
                        <span className="form-label__required">*</span>
                      </span>
                      <span className="form-badge form-badge--required">Requis</span>
                    </div>

                    <div
                      className="form-radio-grid"
                      role="radiogroup"
                      aria-labelledby="label-project-type"
                    >
                      {PROJECT_TYPE_OPTIONS.map((opt) => {
                        const isSelected = formData.projectType === opt.value;
                        return (
                          <label
                            key={opt.value}
                            className={`form-radio-card ${isSelected ? 'is-selected' : ''} ${
                              opt.isFullWidth ? 'form-radio-card--full' : ''
                            }`}
                            title={opt.desc}
                          >
                            <input
                              type="radio"
                              name="projectType"
                              value={opt.value}
                              checked={isSelected}
                              onChange={() => setFormData({ ...formData, projectType: opt.value })}
                              className="form-radio-input"
                            />
                            <span className="form-radio-indicator" aria-hidden="true">
                              <span className="form-radio-indicator__dot" />
                            </span>
                            <span className="form-radio-label">{opt.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message / Périmètre */}
                  <div className="form-group">
                    <div className="form-label-row">
                      <label htmlFor="form-message" className="form-label">
                        <span className="form-label__text">Votre projet en quelques mots</span>
                      </label>
                      <span className="form-badge form-badge--optional">Optionnel</span>
                    </div>
                    <div className="form-control-wrapper">
                      <span className="form-control-icon form-control-icon--textarea">
                        <MessageSquare className="w-4 h-4" />
                      </span>
                      <textarea
                        id="form-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Contexte technique, enjeux de charge, délais d'intervention, volumétrie..."
                        className="form-textarea"
                      />
                    </div>
                    <div className="form-footer-meta">
                      <span>{formData.message.length} caractères</span>
                    </div>
                  </div>

                  {/* RGPD Consent Checkbox customisée & accessible */}
                  <div className="pt-1">
                    <label
                      htmlFor="rgpd-consent"
                      className={`form-checkbox-container ${rgpdConsent ? 'is-checked' : ''} ${
                        rgpdError && !rgpdConsent ? 'border-red-400/50 bg-red-500/5' : ''
                      }`}
                    >
                      <input
                        id="rgpd-consent"
                        type="checkbox"
                        required
                        checked={rgpdConsent}
                        onChange={(e) => {
                          setRgpdConsent(e.target.checked);
                          if (e.target.checked) setRgpdError(false);
                        }}
                        className="form-hidden-checkbox"
                        aria-required="true"
                        aria-invalid={rgpdError && !rgpdConsent}
                      />
                      <div
                        className={`form-custom-checkbox ${rgpdConsent ? 'is-checked' : ''}`}
                        aria-hidden="true"
                      >
                        {rgpdConsent && (
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        )}
                      </div>
                      <span className="form-checkbox-label">
                        J'accepte que les données saisies soient exploitées par LSR Digital
                        Architecture afin de répondre à ma demande technique, conformément à la{' '}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onOpenLegal?.('privacy');
                          }}
                          className="text-[#38BDF8] hover:underline inline font-medium"
                        >
                          politique de confidentialité (RGPD)
                        </button>
                        . <span className="text-[#38BDF8]">*</span>
                      </span>
                    </label>
                    {rgpdError && !rgpdConsent && (
                      <div className="form-error-msg mt-2" role="alert">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Veuillez accepter la politique de confidentialité pour valider.</span>
                      </div>
                    )}
                  </div>

                  {/* Bouton de soumission */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    icon={
                      isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Transmission sécurisée...' : 'Initier la prise de contact'}
                  </Button>

                  {/* Reassurance de sécurité technique */}
                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#64748B] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]/80 shrink-0" />
                    <span>Confidentialité stricte · Chiffrement en transit · Zéro démarchage</span>
                  </div>
                </form>
              )}
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
};
