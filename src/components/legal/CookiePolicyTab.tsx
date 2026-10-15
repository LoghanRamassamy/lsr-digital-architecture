import React from 'react';

export const CookiePolicyTab: React.FC = () => {
  return (
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
            LSR Digital Architecture ne dépose aucun cookie publicitaire, aucun cookie de ciblage
            marketing ni aucun outil tiers intrusif de traçage commercial.
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
          techniques strictement indispensables au fonctionnement du service (par exemple, la
          mémorisation de l'affichage du bandeau de confidentialité ou vos préférences d'affichage).
        </p>
        <div className="mt-3 p-4 rounded bg-[#131926] border border-white/[0.06] font-mono text-xs space-y-2 text-[#E2E8F0]">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
            <span className="text-[#38BDF8]">lsr_cookie_consent</span>
            <span className="text-[#64748B]">Durée : 6 mois</span>
          </div>
          <p className="text-[#94A3B8]">
            Stockage local mémorisant l'accusé de réception des mentions de confidentialité, afin de
            ne pas vous réafficher le bandeau à chaque visite.
          </p>
        </div>
        <p className="mt-3 text-xs">
          Conformément aux lignes directrices de la CNIL (article 82 de la loi Informatique et
          Libertés), ces traceurs purement techniques sont expressément exemptés de l'obligation de
          recueil de consentement préalable.
        </p>
      </div>

      <div>
        <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
          3. Gestion depuis votre navigateur
        </h3>
        <p>
          Vous pouvez configurer votre navigateur pour bloquer l'enregistrement de traceurs ou
          supprimer les données déjà enregistrées via les paramètres de confidentialité de votre
          logiciel (Chrome, Firefox, Safari, Edge).
        </p>
      </div>
    </div>
  );
};
