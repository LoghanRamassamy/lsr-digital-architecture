import React, { useEffect, useRef } from 'react';
import { X, Shield, FileText, Cookie, Lock } from 'lucide-react';
import { Button } from '../common/Button';
import { useModalA11y } from '../../hooks/useModalA11y';
import { LegalNoticeTab } from './LegalNoticeTab';
import { PrivacyPolicyTab } from './PrivacyPolicyTab';
import { CookiePolicyTab } from './CookiePolicyTab';

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
  const modalCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Reset scroll to top when switching tabs
  useEffect(() => {
    if (activeTab && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  // Comprehensive modal accessibility (focus trap, escape key, body scroll lock, focus restoration)
  useModalA11y({
    isOpen,
    onClose,
    containerRef: modalCardRef,
  });

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
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 'clamp(1.5rem, 5vh, 3rem)',
        paddingBottom: 'clamp(1.5rem, 5vh, 3rem)',
      }}
      className="px-4 sm:px-6 md:px-10"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#090A0F]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div
        ref={modalCardRef}
        style={{
          height: 'min(82vh, 820px)',
          maxHeight: 'calc(100vh - 2 * clamp(1.5rem, 5vh, 3rem))',
        }}
        className="relative w-full max-w-4xl bg-[#0D111A] border border-white/10 rounded-[12px] shadow-2xl flex flex-col overflow-hidden z-10 text-[#F8FAFC]"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 bg-[#090A0F]/80 shrink-0">
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
            size="icon"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
            className="w-9 h-9 p-0"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/[0.08] bg-[#090A0F]/40 px-6 gap-2 py-2 overflow-x-auto shrink-0">
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
        <div
          ref={contentRef}
          style={{
            overflowY: 'auto',
            minHeight: 0,
            overscrollBehavior: 'contain',
          }}
          className="flex-1 overflow-y-auto min-h-0 p-6 sm:p-8 space-y-8 text-sm text-[#94A3B8] leading-relaxed"
        >
          {activeTab === 'legal' && <LegalNoticeTab />}
          {activeTab === 'privacy' && <PrivacyPolicyTab />}
          {activeTab === 'cookies' && <CookiePolicyTab />}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-white/[0.08] px-6 py-3.5 bg-[#090A0F] flex items-center justify-between text-xs font-mono text-[#64748B] shrink-0">
          <span>DERNIÈRE RÉVISION : AVRIL 2026 // CONFORME RGPD & LCEN</span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Fermer
          </Button>
        </div>
      </div>
    </div>
  );
};
