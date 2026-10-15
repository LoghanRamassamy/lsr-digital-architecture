import React from 'react';
import { ExternalLink } from 'lucide-react';

export const LegalNoticeTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          1. Éditeur de la plateforme
        </h3>
        <p>
          Conformément aux dispositions de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
          confiance dans l'économie numérique (LCEN), il est précisé aux utilisateurs du site
          l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
        </p>
        <div className="mt-3 p-4 rounded bg-[#131926] border border-white/[0.06] font-mono text-xs space-y-1.5 text-[#E2E8F0]">
          <p>
            <span className="text-[#64748B]">Dénomination sociale :</span> LSR Digital Architecture
          </p>
          <p>
            <span className="text-[#64748B]">Forme juridique :</span> Société par Actions Simplifiée
            Unipersonnelle (SASU)
          </p>
          <p>
            <span className="text-[#64748B]">Capital social :</span> 2 000,00 €
          </p>
          <p>
            <span className="text-[#64748B]">Siège social :</span> Conflans-Sainte-Honorine (78700),
            Île-de-France, France
          </p>
          <p>
            <span className="text-[#64748B]">Numéro SIREN :</span> 107 484 230
          </p>
          <p>
            <span className="text-[#64748B]">Numéro SIRET (siège) :</span> 107 484 230 00019
          </p>
          <p>
            <span className="text-[#64748B]">Registre du Commerce et des Sociétés :</span> RCS
            Versailles 107 484 230
          </p>
          <p>
            <span className="text-[#64748B]">Numéro TVA intracommunautaire :</span> FR64107484230
          </p>
          <p>
            <span className="text-[#64748B]">Code NAF / APE :</span> 62.01Z (Programmation
            informatique)
          </p>
          <p>
            <span className="text-[#64748B]">Président & Directeur de la publication :</span> Loghan
            Ramassamy
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
        </div>
      </div>

      <div>
        <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          2. Hébergement
        </h3>
        <p>
          Le présent site est hébergé par une infrastructure cloud sécurisée de haute disponibilité
          :
        </p>
        <div className="mt-3 p-4 rounded bg-[#131926] border border-white/[0.06] font-mono text-xs space-y-1.5 text-[#E2E8F0]">
          <p>
            <span className="text-[#64748B]">Hébergeur :</span> Vercel Inc.
          </p>
          <p>
            <span className="text-[#64748B]">Adresse :</span> 440 N Barranca Ave #4133, Covina, CA
            91723, États-Unis
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
            <span className="text-[#64748B]">Certifications :</span> ISO 27001, SOC 2 Type II,
            conformité RGPD via clauses contractuelles types (CCT).
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          3. Propriété intellectuelle
        </h3>
        <p>
          L'ensemble des éléments graphiques, schémas d'architecture, logos, marques, textes et code
          source composant ce site internet sont la propriété exclusive de{' '}
          <strong>LSR Digital Architecture SASU</strong>, au titre des droits de propriété
          intellectuelle.
        </p>
        <p className="mt-2">
          Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
          même partielle, de ces différents éléments est strictement interdite sans l'accord exprès
          par écrit de LSR Digital Architecture.
        </p>
      </div>

      <div>
        <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          4. Limitation de responsabilité
        </h3>
        <p>
          LSR Digital Architecture met en œuvre tous les moyens dont elle dispose pour assurer une
          information fiable et une mise à jour régulière de son site. Toutefois, des erreurs ou
          omissions peuvent survenir. L'internaute devra donc s'assurer de l'exactitude des
          informations auprès de notre équipe technique.
        </p>
      </div>
    </div>
  );
};
