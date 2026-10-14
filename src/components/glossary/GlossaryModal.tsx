import React, { useState, useEffect, useRef, useMemo } from 'react';
import { X, Search, BookOpen, Copy, Check, ExternalLink, RotateCcw } from 'lucide-react';
import { Button } from '../common/Button';
import { GLOSSARY_ITEMS, GLOSSARY_CATEGORIES } from '../../constants/glossaryData';
import { GlossaryCategory, TermKind } from '../../types';
import { useModalA11y } from '../../hooks/useModalA11y';

interface GlossaryModalProps {
  isOpen: boolean;
  initialTermId?: string | null;
  onClose: () => void;
  onSelectTerm?: (termId: string) => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  initialTermId,
  onClose,
  onSelectTerm,
}) => {
  const modalCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GlossaryCategory>('all');
  const [selectedKind, setSelectedKind] = useState<'all' | TermKind>('all');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [copiedTermId, setCopiedTermId] = useState<string | null>(null);

  // If initialTermId changes or opens, set search or scroll
  useEffect(() => {
    if (isOpen && initialTermId) {
      const targetEl = document.getElementById(`glossary-term-${initialTermId}`);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    }
  }, [isOpen, initialTermId]);

  // Comprehensive modal accessibility (focus trap, escape key, body scroll lock, focus restoration)
  useModalA11y({
    isOpen,
    onClose,
    containerRef: modalCardRef,
    initialFocusRef: searchInputRef,
  });

  // Compute available letters from glossary
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    GLOSSARY_ITEMS.forEach((item) => {
      const firstChar = item.term.charAt(0).toUpperCase();
      if (/[A-Z]/.test(firstChar)) {
        letters.add(firstChar);
      }
    });
    return letters;
  }, []);

  const allAlphabet = useMemo(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), []);

  // Filtered terms
  const filteredTerms = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return GLOSSARY_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Kind filter (technique vs méthodologique)
      if (selectedKind !== 'all' && item.kind !== selectedKind) {
        return false;
      }

      // Alphabet filter
      if (selectedLetter !== null) {
        const firstChar = item.term.charAt(0).toUpperCase();
        if (firstChar !== selectedLetter) {
          return false;
        }
      }

      // Search query filter
      if (query) {
        const matchTitle = item.term.toLowerCase().includes(query);
        const matchAcronym = item.acronym?.toLowerCase().includes(query);
        const matchShortDef = item.shortDefinition.toLowerCase().includes(query);
        const matchFullDef = item.fullDefinition.toLowerCase().includes(query);
        const matchSite = item.siteContext.toLowerCase().includes(query);
        const matchTags = item.tags.some((t) => t.toLowerCase().includes(query));

        return (
          matchTitle || matchAcronym || matchShortDef || matchFullDef || matchSite || matchTags
        );
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedKind, selectedLetter]);

  const handleCopyLink = (termId: string) => {
    onSelectTerm?.(termId);
    const url = `${window.location.origin}${window.location.pathname}#glossaire-${termId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedTermId(termId);
      setTimeout(() => setCopiedTermId(null), 2000);
    });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedKind('all');
    setSelectedLetter(null);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="glossary-modal-title"
      className="glossary-modal"
    >
      {/* Backdrop */}
      <div className="glossary-modal__backdrop" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div ref={modalCardRef} className="glossary-modal__card">
        {/* Header */}
        <div className="glossary-modal__header">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#131926] text-[#38BDF8] border border-white/10 shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#38BDF8] tracking-widest uppercase block">
                  RÉFÉRENTIEL TECHNIQUE & MÉTHODOLOGIQUE
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#94A3B8]">
                  {GLOSSARY_ITEMS.length} termes
                </span>
              </div>
              <h2
                id="glossary-modal-title"
                className="text-base sm:text-lg font-heading font-bold text-[#F8FAFC]"
              >
                Glossaire des Termes & Concepts du Site
              </h2>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Fermer le glossaire"
            className="w-9 h-9 p-0 shrink-0"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Controls: Search & Category Filter */}
        <div className="glossary-modal__controls">
          {/* Search Input */}
          <div className="glossary-modal__search-bar">
            <Search className="search-icon" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (selectedLetter) setSelectedLetter(null);
              }}
              placeholder="Rechercher un concept, sigle ou mot-clé (ex: Clean Architecture, DDD, p99, DAT, PRA)..."
              aria-label="Rechercher dans le glossaire"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-button"
                onClick={() => setSearchQuery('')}
                aria-label="Effacer la recherche"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filters Row */}
          <div className="glossary-modal__filters">
            {/* Category Pills */}
            <div className="glossary-modal__category-pills">
              {GLOSSARY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id as GlossaryCategory)}
                  className={`glossary-modal__pill ${
                    selectedCategory === cat.id ? 'glossary-modal__pill--active' : ''
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Kind Filter (Technique vs Méthodologique) */}
            <div className="glossary-modal__kind-pills">
              <button
                type="button"
                onClick={() => setSelectedKind('all')}
                className={`glossary-modal__pill ${
                  selectedKind === 'all' ? 'glossary-modal__pill--active' : ''
                }`}
                title="Afficher tous les types de termes"
              >
                Tous
              </button>
              <button
                type="button"
                onClick={() => setSelectedKind('technique')}
                className={`glossary-modal__pill ${
                  selectedKind === 'technique' ? 'glossary-modal__pill--active' : ''
                }`}
                title="Filtrer les termes techniques"
              >
                Techniques
              </button>
              <button
                type="button"
                onClick={() => setSelectedKind('methodologique')}
                className={`glossary-modal__pill ${
                  selectedKind === 'methodologique' ? 'glossary-modal__pill--active' : ''
                }`}
                title="Filtrer les termes méthodologiques et organisationnels"
              >
                Méthodologiques
              </button>
            </div>
          </div>
        </div>

        {/* Alphabet Navigation Strip */}
        <div className="glossary-modal__alphabet" aria-label="Index alphabétique">
          <button
            type="button"
            className={selectedLetter === null ? 'active' : ''}
            onClick={() => setSelectedLetter(null)}
            title="Toutes les lettres"
          >
            Tous
          </button>
          {allAlphabet.map((letter) => {
            const hasTerms = availableLetters.has(letter);
            const isCurrent = selectedLetter === letter;

            return (
              <button
                key={letter}
                type="button"
                disabled={!hasTerms}
                className={isCurrent ? 'active' : ''}
                onClick={() => {
                  setSelectedLetter(isCurrent ? null : letter);
                }}
                aria-label={`Filtrer par lettre ${letter}`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Scrollable Terms Content */}
        <div ref={contentRef} className="glossary-modal__content">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 px-4 space-y-4">
              <div className="inline-flex p-3 rounded-full bg-white/5 text-[#94A3B8] mb-2">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-heading font-semibold text-[#F8FAFC]">
                Aucun terme ne correspond à vos critères
              </h3>
              <p className="text-xs text-[#94A3B8] max-w-md mx-auto">
                Essayez d'élargir votre recherche ou de réinitialiser les filtres appliqués.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleResetFilters}
                icon={<RotateCcw className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          ) : (
            filteredTerms.map((item) => {
              const isHighlighted = initialTermId === item.id;
              const isCopied = copiedTermId === item.id;

              return (
                <article
                  key={item.id}
                  id={`glossary-term-${item.id}`}
                  className={`glossary-card ${isHighlighted ? 'glossary-card--highlighted' : ''}`}
                >
                  {/* Card Header */}
                  <div className="glossary-card__header">
                    <div className="glossary-card__term-info">
                      <h3 className="glossary-card__title">
                        <span>{item.term}</span>
                        {item.acronym && (
                          <span className="glossary-card__acronym">{item.acronym}</span>
                        )}
                      </h3>

                      <div className="glossary-card__badges">
                        <span
                          className={`glossary-card__kind-badge glossary-card__kind-badge--${item.kind}`}
                        >
                          {item.kind === 'technique'
                            ? 'Terme Technique'
                            : 'Méthodologique / Métier'}
                        </span>
                        <span className="glossary-card__category-badge">
                          • {item.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <div className="glossary-card__actions">
                      <button
                        type="button"
                        onClick={() => handleCopyLink(item.id)}
                        className="p-1.5 rounded hover:bg-white/5 text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                        title="Copier le lien direct vers ce terme"
                        aria-label={`Copier le lien vers ${item.term}`}
                      >
                        {isCopied ? (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                            <Check className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Copié</span>
                          </span>
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Short & Detailed Definitions */}
                  <p className="glossary-card__short-def">{item.shortDefinition}</p>
                  <p className="glossary-card__full-def">{item.fullDefinition}</p>

                  {/* Context on LSR Site */}
                  <div className="glossary-card__context-box">
                    <span className="context-label">Présent sur le site :</span>
                    <span>{item.siteContext}</span>
                  </div>

                  {/* Key Benefit */}
                  {item.keyBenefit && (
                    <div className="glossary-card__benefit-box">
                      <span className="benefit-label">Impact clé :</span>
                      <span>{item.keyBenefit}</span>
                    </div>
                  )}

                  {/* Tag chips */}
                  <div className="glossary-card__tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag-chip">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="glossary-modal__footer">
          <div className="flex items-center gap-2">
            <span className="text-[#38BDF8] font-bold">LSR // GLOSSARY</span>
            <span>•</span>
            <span>
              Affichage de {filteredTerms.length} sur {GLOSSARY_ITEMS.length} termes
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1"
            >
              <span>Sitemap</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <button
              type="button"
              onClick={onClose}
              className="hover:text-[#38BDF8] transition-colors"
            >
              Fermer le glossaire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
