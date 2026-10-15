import React from 'react';

export const PrivacyPolicyTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          1. Engagement de conformité RGPD
        </h3>
        <p>
          La société <strong>LSR Digital Architecture SASU</strong> accorde une importance
          primordiale à la protection de la vie privée et des données à caractère personnel de ses
          interlocuteurs. Cette politique décrit la manière dont nous traitons les données
          collectées conformément au
          <strong> Règlement Général sur la Protection des Données (RGPD n° 2016/679)</strong> et à
          la loi française « Informatique et Libertés » du 6 janvier 1978 modifiée.
        </p>
      </div>

      <div>
        <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          2. Responsable du traitement
        </h3>
        <p>
          Le responsable du traitement des données est la société{' '}
          <strong>LSR Digital Architecture SASU</strong>, située à Conflans-Sainte-Honorine (78700),
          Île-de-France (immatriculée au RCS de Versailles sous le SIREN 107 484 230). Pour toute
          question relative à vos données personnelles, vous pouvez nous contacter directement par
          email :
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
          <strong>Finalité :</strong> Ces données sont collectées exclusivement dans le but de
          répondre à vos demandes de prise de contact, de cadrage d'architecture logicielle, d'audit
          technique ou de devis précontractuel.
        </p>
        <p className="mt-1">
          <strong>Base légale :</strong> Le traitement repose sur votre consentement explicite
          (Article 6.1.a du RGPD) lors de la soumission du formulaire et sur l'intérêt légitime de
          gérer notre relation B2B.
        </p>
      </div>

      <div>
        <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          4. Durée de conservation
        </h3>
        <p>
          Conformément aux préconisations de la CNIL, les données des prospects sont conservées pour
          une durée maximale de <strong>3 ans</strong> à compter du dernier échange initié par le
          prospect. Au-delà, elles sont définitivement supprimées ou anonymisées.
        </p>
      </div>

      <div>
        <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          5. Vos droits et modalités d'exercice
        </h3>
        <p>Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 font-mono text-xs">
          <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
            <span className="text-[#38BDF8] font-bold block mb-0.5">
              Droit d'accès & rectification
            </span>
            <span>Consulter et corriger vos informations à tout moment.</span>
          </div>
          <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
            <span className="text-[#38BDF8] font-bold block mb-0.5">Droit à l'effacement</span>
            <span>Demander la suppression complète de vos données (droit à l'oubli).</span>
          </div>
          <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
            <span className="text-[#38BDF8] font-bold block mb-0.5">
              Droit d'opposition & limitation
            </span>
            <span>Refuser ou restreindre le traitement de vos données.</span>
          </div>
          <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
            <span className="text-[#38BDF8] font-bold block mb-0.5">Droit à la portabilité</span>
            <span>Recevoir vos données dans un format standard lisible par machine.</span>
          </div>
        </div>
        <p className="mt-4">
          Pour faire valoir l'un de ces droits, il vous suffit de nous adresser une demande par
          email à :{' '}
          <a
            href="mailto:contact@lsr-digital-architecture.com"
            className="text-[#38BDF8] hover:underline font-mono"
          >
            contact@lsr-digital-architecture.com
          </a>
          . Nous y répondrons sous un délai maximum de 30 jours.
        </p>
        <p className="mt-2 text-xs text-[#64748B]">
          Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous
          avez le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de
          l'Informatique et des Libertés) :{' '}
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
  );
};
