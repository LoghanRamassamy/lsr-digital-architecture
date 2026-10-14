import React, { useState } from 'react';
import { ArrowRight, Maximize2, Terminal } from 'lucide-react';
import { Button } from '../common/Button';

import {
  BLUEPRINT_NODES,
  isNodeActiveInLayer,
  type BlueprintNode,
  type BlueprintLayer,
} from '../../domain/blueprint/blueprintModel';

export const ArchitectureCanvas: React.FC = () => {
  const [activeNode, setActiveNode] = useState<BlueprintNode>(BLUEPRINT_NODES[1]);
  const [activeLayer, setActiveLayer] = useState<BlueprintLayer>('all');
  const [showGrid, setShowGrid] = useState<boolean>(true);

  return (
    <div className="w-full rounded-[10px] bg-[#090A0F] border border-white/[0.08] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
      {/* Top Console Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] px-4 py-3 bg-[#0D111A]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="font-mono text-xs text-[#F8FAFC] tracking-wider uppercase font-semibold">
              SCHÉMA D'ARCHITECTURE SYSTÈME // INTERACTIF
            </span>
          </div>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-[#94A3B8] border border-white/10">
            BLUEPRINT OPTION_B :: LIVE TELEMETRY
          </span>
        </div>

        {/* Layer Controls */}
        <div className="flex items-center gap-1.5 mt-2 sm:mt-0">
          <Button
            variant="tab"
            size="sm"
            active={activeLayer === 'all'}
            onClick={() => setActiveLayer('all')}
          >
            Vue Globale
          </Button>
          <Button
            variant="tab"
            size="sm"
            active={activeLayer === 'ddd'}
            onClick={() => setActiveLayer('ddd')}
          >
            Clean Arch / DDD
          </Button>
          <Button
            variant="tab"
            size="sm"
            active={activeLayer === 'resilience'}
            onClick={() => setActiveLayer('resilience')}
          >
            Résilience & Flux
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowGrid(!showGrid)}
            title="Activer/Désactiver le quadrillage blueprint"
            aria-label="Quadrillage blueprint"
            className="p-1.5 ml-1"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* SVG Diagram Stage */}
        <div
          className={`lg:col-span-8 p-4 relative overflow-hidden flex items-center justify-center bg-[#090A0F] ${
            showGrid ? 'blueprint-grid-bg' : ''
          }`}
        >
          {/* Subtle Ambient Blueprint Glows */}
          <div className="pointer-events-none absolute top-1/4 left-1/4 w-72 h-72 bg-[#2563EB]/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl" />

          {/* SVG Blueprint Engine */}
          <svg
            viewBox="0 0 800 380"
            className="w-full h-auto max-w-[800px] select-none"
            style={{ filter: 'drop-shadow(0 0 1px rgba(56, 189, 248, 0.2))' }}
          >
            <defs>
              {/* Gradient for wireframe connectors */}
              <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
              </linearGradient>

              {/* Luminous Glow Filter */}
              <filter id="nodeGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Architectural Flow Connectors (1.5px wireframes) */}
            <g className="flow-lines">
              {/* Client -> Gateway */}
              <path
                d="M 140 190 L 210 190"
                stroke="url(#wireGradient)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                className="animate-flow-dash"
              />

              {/* Gateway -> Domain Core */}
              <path
                d="M 330 190 C 380 190, 390 130, 420 130"
                stroke={activeLayer === 'resilience' ? '#64748B' : 'url(#wireGradient)'}
                strokeWidth="1.5"
                strokeDasharray={activeLayer === 'resilience' ? '2 2' : '4 3'}
                fill="none"
              />

              {/* Gateway -> Event Broker */}
              <path
                d="M 330 190 C 380 190, 390 270, 420 270"
                stroke="url(#wireGradient)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                fill="none"
              />

              {/* Domain Core -> Database */}
              <path
                d="M 540 130 L 650 130"
                stroke="url(#wireGradient)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                fill="none"
              />

              {/* Domain Core -> Event Broker (Outbox sync) */}
              <path
                d="M 480 165 L 480 235"
                stroke="#38BDF8"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                strokeOpacity="0.6"
              />

              {/* Event Broker -> Telemetry & Audit */}
              <path
                d="M 540 270 L 650 270"
                stroke="url(#wireGradient)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                fill="none"
              />

              {/* Database -> Telemetry Monitoring Line */}
              <path
                d="M 710 165 L 710 235"
                stroke="#2563EB"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                strokeOpacity="0.4"
              />
            </g>

            {/* Blueprint Coordinate Annotation Markings */}
            <g className="text-[10px] font-mono fill-[#64748B]">
              <text x="30" y="30">
                SYS_LAYOUT :: DISTRIBUTED_HEXAGONAL
              </text>
              <text x="630" y="30">
                STATUS: NOMINAL (0 ERRORS)
              </text>
              <line
                x1="30"
                y1="40"
                x2="770"
                y2="40"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
              <line
                x1="30"
                y1="350"
                x2="770"
                y2="350"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
            </g>

            {/* Render Nodes */}
            {BLUEPRINT_NODES.map((node) => {
              const isSelected = activeNode.id === node.id;
              const isHighlighted = isNodeActiveInLayer(node, activeLayer);

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => setActiveNode(node)}
                  className="cursor-pointer transition-all duration-300"
                  style={{ opacity: isHighlighted ? 1 : 0.25 }}
                >
                  {/* Halo Luminous Aura */}
                  {isSelected && (
                    <circle
                      cx="0"
                      cy="0"
                      r="40"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="1"
                      strokeOpacity="0.3"
                      className="animate-ping"
                      style={{ animationDuration: '3s' }}
                    />
                  )}

                  {/* Outer Wireframe Ring */}
                  <circle
                    cx="0"
                    cy="0"
                    r="28"
                    fill="#0D111A"
                    stroke={isSelected ? '#38BDF8' : 'rgba(255, 255, 255, 0.15)'}
                    strokeWidth="1.5"
                    filter={isSelected ? 'url(#nodeGlow)' : undefined}
                    className="hover:stroke-[#38BDF8] transition-colors"
                  />

                  {/* Inner Node Core */}
                  <circle
                    cx="0"
                    cy="0"
                    r="16"
                    fill={isSelected ? '#131926' : '#090A0F'}
                    stroke={isSelected ? '#2563EB' : 'rgba(56, 189, 248, 0.4)'}
                    strokeWidth="1"
                  />

                  {/* Center Node Indicator Dot */}
                  <circle
                    cx="0"
                    cy="0"
                    r="3.5"
                    fill={isSelected ? '#38BDF8' : '#2563EB'}
                    className={isSelected ? 'animate-pulse' : ''}
                  />

                  {/* Node Label Text */}
                  <text
                    x="0"
                    y="42"
                    textAnchor="middle"
                    className="fill-[#F8FAFC] text-[11px] font-mono font-medium tracking-tight"
                  >
                    {node.name.split(' / ')[0]}
                  </text>
                  <text
                    x="0"
                    y="54"
                    textAnchor="middle"
                    className="fill-[#64748B] text-[9px] font-mono tracking-widest"
                  >
                    {node.tag}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Node Telemetry Inspector Panel */}
        <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/[0.08] bg-[#0D111A] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
              <span className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                TÉLÉMÉTRIE DU COMPOSANT
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30">
                {activeNode.tag}
              </span>
            </div>

            <h3 className="text-lg font-heading font-semibold text-[#F8FAFC] mb-1">
              {activeNode.name}
            </h3>
            <p className="text-xs font-mono text-[#94A3B8] mb-5">Rôle : {activeNode.role}</p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-5 font-mono text-xs">
              <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
                <span className="text-[10px] text-[#64748B] block">LATENCE P99</span>
                <span className="text-sm font-semibold text-[#38BDF8]">
                  {activeNode.metrics.latency}
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
                <span className="text-[10px] text-[#64748B] block">DÉBIT CHARGE</span>
                <span className="text-sm font-semibold text-[#F8FAFC]">
                  {activeNode.metrics.throughput}
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
                <span className="text-[10px] text-[#64748B] block">DISPONIBILITÉ SLA</span>
                <span className="text-sm font-semibold text-emerald-400">
                  {activeNode.metrics.sla}
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#131926] border border-white/[0.05]">
                <span className="text-[10px] text-[#64748B] block">PATTERN DÉDIÉ</span>
                <span className="text-xs font-medium text-[#94A3B8] truncate">
                  {activeNode.metrics.pattern}
                </span>
              </div>
            </div>

            {/* Architecture Details Checklist */}
            <div className="space-y-2 mb-4">
              <span className="text-xs font-mono text-[#64748B] block uppercase tracking-wider">
                Contrats & Garanties Techniques :
              </span>
              {activeNode.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-[#94A3B8] leading-relaxed"
                >
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action button */}
          <div className="pt-4 border-t border-white/[0.08]">
            <Button
              href="#contact"
              variant="secondary"
              size="md"
              fullWidth
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Exiger cette rigueur sur votre stack
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
