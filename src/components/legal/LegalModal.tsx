import React, { useEffect } from 'react';
import { X, Shield, FileText, Cookie, ExternalLink, Lock } from 'lucide-react';
import { Button } from '../common/Button';

export type LegalTab = 'legal' | 'privacy' | 'cookies';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onClose: () => void;
  onTabChange: (tab: LegalTab) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#090A0F]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0D111A] border border-white/10 rounded-[12px] shadow-2xl flex flex-col overflow-hidden z-10 text-[#F8FAFC]">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 bg-[#090A0F]/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#131926] text-[#38BDF8] border border-white/10">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#38BDF8] tracking-widest uppercase block">
                CONFORMITÉ & CADRE JURIDIQUE (FRANCE / UE)
              </span>
              <h2
                id="legal-modal-title"
                className="text-base sm:text-lg font-heading font-bold text-[#F8FAFC]"
              >
                Informations Légales & Protection des Données
              </h2>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
            className="p-1.5"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/[0.08] bg-[#090A0F]/40 px-6 gap-2 py-2 overflow-x-auto">
          <Button
            variant="tab"
            size="sm"
            active={activeTab === 'legal'}
            onClick={() => onTabChange('legal')}
            icon={<FileText className="w-3.5 h-3.5" />}
            iconPosition="left"
          >
            Mentions Légales (LCEN)
          </Button>

          <Button
            variant="tab"
            size="sm"
            active={activeTab === 'privacy'}
            onClick={() => onTabChange('privacy')}
            icon={<Lock className="w-3.5 h-3.5" />}
            iconPosition="left"
          >
            Politique de Confidentialité (RGPD)
          </Button>

          <Button
            variant="tab"
            size="sm"
            active={activeTab === 'cookies'}
            onClick={() => onTabChange('cookies')}
            icon={<Cookie className="w-3.5 h-3.5" />}
            iconPosition="left"
          >
            Gestion des Cookies
          </Button>
        </div>

        {/* Tab Contents (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-sm text-[#94A3B8] leading-relaxed">
          {/* TAB 1: MENTIONS LÉGALES */}
          {activeTab === 'legal' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  1. Éditeur de la plateforme
                </h3>
                <p>
                  Conformément aux dispositions de l'article 6 de la loi n° 2004-575 du 21 juin 2004
                  pour la confiance dans l'économie numérique (LCEN), il est précisé aux
                  utilisateurs du site l'identité des différents intervenants dans le cadre de sa
                  réalisation et de son suivi :
                </p>
                <div className="mt-3 p-4 rounded bg-[#131926] border border-white/[0.06] font-mono text-xs space-y-1.5 text-[#E2E8F0]">
                  <p>
                    <span className="text-[#64748B]">Dénomination sociale :</span> LSR Digital
                    Architecture SAS
                  </p>
                  <p>
                    <span className="text-[#64748B]">Forme juridique :</span> Société par Actions
                    Simplifiée (SAS)
                  </p>
                  <p>
                    <span className="text-[#64748B]">Siège social :</span> Conflans-Sainte-Honorine
                    (78700), Île-de-France, France
                  </p>
                  <p>
                    <span className="text-[#64748B]">Email de contact :</span>{' '}
                    <a
                      href="mailto:contact@lsr-digital-architecture.com"
                      className="text-[#38BDF8] hover:underline"
                    >
                      contact@lsr-digital-architecture.com
                    </a>
                  </p>
                  <p>
                    <span className="text-[#64748B]">Immatriculation :</span> En cours
                    d'immatriculation au RCS de Versailles
                  </p>
                  <p>
                    <span className="text-[#64748B]">Directeur de la publication :</span> Le
                    représentant légal de LSR Digital Architecture SAS
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  2. Hébergement
                </h3>
                <p>
                  Le présent site est hébergé par une infrastructure cloud sécurisée de haute
                  disponibilité :
                </p>
                <div className="mt-3 p-4 rounded bg-[#131926] border border-white/[0.06] font-mono text-xs space-y-1.5 text-[#E2E8F0]">
                  <p>
                    <span className="text-[#64748B]">Hébergeur :</span> Vercel Inc.
                  </p>
                  <p>
                    <span className="text-[#64748B]">Adresse :</span> 440 N Barranca Ave #4133,
                    Covina, CA 91723, États-Unis
                  </p>
                  <p>
                    <span className="text-[#64748B]">Site Web :</span>{' '}
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#38BDF8] inline-flex items-center gap-1 hover:underline"
                    >
                      https://vercel.com <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                  <p>
                    <span className="text-[#64748B]">Certifications :</span> ISO 27001, SOC 2 Type
                    II, conformité RGPD via clauses contractuelles types (CCT).
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  3. Propriété intellectuelle
                </h3>
                <p>
                  L'ensemble des éléments graphiques, schémas d'architecture, logos, marques, textes
                  et code source composant ce site internet sont la propriété exclusive de{' '}
                  <strong>LSR Digital Architecture SAS</strong>, au titre des droits de propriété
                  intellectuelle.
                </p>
                <p className="mt-2">
                  Toute reproduction, distribution, modification, adaptation, retransmission ou
                  publication, même partielle, de ces différents éléments est strictement interdite
                  sans l'accord exprès par écrit de LSR Digital Architecture.
                </p>
              </div>

              <div>
                <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  4. Limitation de responsabilité
                </h3>
                <p>
                  LSR Digital Architecture met en œuvre tous les moyens dont elle dispose pour
                  assurer une information fiable et une mise à jour régulière de son site.
                  Toutefois, des erreurs ou omissions peuvent survenir. L'internaute devra donc
                  s'assurer de l'exactitude des informations auprès de notre équipe technique.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: POLITIQUE DE CONFIDENTIALITÉ (RGPD) */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  1. Engagement de conformité RGPD
                </h3>
                <p>
                  La société <strong>LSR Digital Architecture SAS</strong> accorde une importance
                  primordiale à la protection de la vie privée et des données à caractère personnel
                  de ses interlocuteurs. Cette politique décrit la manière dont nous traitons les
                  données collectées conformément au
                  <strong>
                    {' '}
                    Règlement Général sur la Protection des Données (RGPD n° 2016/679)
                  </strong>{' '}
                  et à la loi française « Informatique et Libertés » du 6 janvier 1978 modifiée.
                </p>
              </div>

              <div>
                <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  2. Responsable du traitement
                </h3>
                <p>
                  Le responsable du traitement des données est la société{' '}
                  <strong>LSR Digital Architecture SAS</strong>. Pour toute question relative à vos
                  données personnelles, vous pouvez nous contacter directement par email :
                </p>
                <p className="mt-2 font-mono text-xs text-[#38BDF8]">
                  contact@lsr-digital-architecture.com
                </p>
              </div>

              <div>
                <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  3. Données collectées & Finalités
                </h3>
                <p>
                  Les données susceptibles d'être collectées sur ce site sont celles transmises
                  volontairement via le formulaire de contact :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-[#E2E8F0]">
                  <li>
                    <strong>Identité :</strong> Nom et prénom, rôle ou fonction professionnelle.
                  </li>
                  <li>
                    <strong>Coordonnées :</strong> Adresse email professionnelle.
                  </li>
                  <li>
                    <strong>Contexte d'entreprise :</strong> Nom de la structure, type de projet et
                    description technique.
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>Finalité :</strong> Ces données sont collectées exclusivement dans le but
                  de répondre à vos demandes de prise de contact, de cadrage d'architecture
                  logicielle, d'audit technique ou de devis précontractuel.
                </p>
                <p className="mt-1">
                  <strong>Base légale :</strong> Le traitement repose sur votre consentement
                  explicite (Article 6.1.a du RGPD) lors de la soumission du formulaire et sur
                  l'intérêt légitime de gérer notre relation B2B.
                </p>
              </div>

              <div>
                <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  4. Durée de conservation
                </h3>
                <p>
                  Conformément aux préconisations de la CNIL, les données des prospects sont
                  conservées pour une durée maximale de <strong>3 ans</strong> à compter du dernier
                  échange initié par le prospect. Au-delà, elles sont définitivement supprimées ou
                  anonymisées.
                </p>
              </div>

              <div>
                <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  5. Vos droits et modalités d'exercice
                </h3>
                <p>
                  Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 font-mono text-xs">
                  <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
                    <span className="text-[#38BDF8] font-bold block mb-0.5">
                      Droit d'accès & rectification
                    </span>
                    <span>Consulter et corriger vos informations à tout moment.</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
                    <span className="text-[#38BDF8] font-bold block mb-0.5">
                      Droit à l'effacement
                    </span>
                    <span>Demander la suppression complète de vos données (droit à l'oubli).</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
                    <span className="text-[#38BDF8] font-bold block mb-0.5">
                      Droit d'opposition & limitation
                    </span>
                    <span>Refuser ou restreindre le traitement de vos données.</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
                    <span className="text-[#38BDF8] font-bold block mb-0.5">
                      Droit à la portabilité
                    </span>
                    <span>Recevoir vos données dans un format standard lisible par machine.</span>
                  </div>
                </div>
                <p className="mt-4">
                  Pour faire valoir l'un de ces droits, il vous suffit de nous adresser une demande
                  par email à :{' '}
                  <a
                    href="mailto:contact@lsr-digital-architecture.com"
                    className="text-[#38BDF8] hover:underline font-mono"
                  >
                    contact@lsr-digital-architecture.com
                  </a>
                  . Nous y répondrons sous un délai maximum de 30 jours.
                </p>
                <p className="mt-2 text-xs text-[#64748B]">
                  Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés,
                  vous avez le droit d'introduire une réclamation auprès de la CNIL (Commission
                  Nationale de l'Informatique et des Libertés) :{' '}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94A3B8] hover:underline"
                  >
                    www.cnil.fr
                  </a>
                  .
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: GESTION DES COOKIES */}
          {activeTab === 'cookies' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                  1. Sobriété & Absence de traceurs publicitaires
                </h3>
                <p>
                  Fidèle à sa philosophie d'ingénierie sobre et respectueuse des utilisateurs,
                  <strong>
                    {' '}
                    LSR Digital Architecture ne dépose aucun cookie publicitaire, aucun cookie de
                    ciblage marketing ni aucun outil tiers intrusif de traçage commercial.
                  </strong>
                </p>
              </div>

              <div>
                <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                  2. Traceurs techniques strictement nécessaires
                </h3>
                <p>
                  Les seuls éléments enregistrés localement sur votre terminal sont des identifiants
                  techniques strictement indispensables au fonctionnement du service (par exemple,
                  la mémorisation de l'affichage du bandeau de confidentialité ou vos préférences
                  d'affichage).
                </p>
                <div className="mt-3 p-4 rounded bg-[#131926] border border-white/[0.06] font-mono text-xs space-y-2 text-[#E2E8F0]">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                    <span className="text-[#38BDF8]">lsr_cookie_consent</span>
                    <span className="text-[#64748B]">Durée : 6 mois</span>
                  </div>
                  <p className="text-[#94A3B8]">
                    Stockage local mémorisant l'accusé de réception des mentions de confidentialité,
                    afin de ne pas vous réafficher le bandeau à chaque visite.
                  </p>
                </div>
                <p className="mt-3 text-xs">
                  Conformément aux lignes directrices de la CNIL (article 82 de la loi Informatique
                  et Libertés), ces traceurs purement techniques sont expressément exemptés de
                  l'obligation de recueil de consentement préalable.
                </p>
              </div>

              <div>
                <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                  3. Gestion depuis votre navigateur
                </h3>
                <p>
                  Vous pouvez configurer votre navigateur pour bloquer l'enregistrement de traceurs
                  ou supprimer les données déjà enregistrées via les paramètres de confidentialité
                  de votre logiciel (Chrome, Firefox, Safari, Edge).
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-white/[0.08] px-6 py-3.5 bg-[#090A0F] flex items-center justify-between text-xs font-mono text-[#64748B]">
          <span>DERNIÈRE RÉVISION : AVRIL 2026 // CONFORME RGPD & LCEN</span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Fermer
          </Button>
        </div>
      </div>
    </div>
  );
};
