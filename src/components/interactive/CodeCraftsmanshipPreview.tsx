import React, { useState } from 'react';
import { BentoCard } from '../common/BentoCard';
import { SectionTag } from '../common/SectionTag';
import { Copy, Check } from 'lucide-react';

const SNIPPETS = [
  {
    id: 'domain',
    name: 'DomainEntity.ts',
    desc: 'Cœur Métier pur sans aucune dépendance framework',
    code: `// Domain Layer: Pure business invariant & Zero framework coupling
export class ResilientSystem {
  private constructor(
    readonly id: SystemId,
    private status: HealthStatus,
    private readonly redundancyFactor: number
  ) {
    if (redundancyFactor < 2) {
      throw new InvariantViolationError("Production systems require N+1 redundancy.");
    }
  }

  public static initialize(id: SystemId, factor: number): Result<ResilientSystem> {
    return Result.ok(new ResilientSystem(id, HealthStatus.NOMINAL, factor));
  }

  public evaluateFailoverCondition(metrics: TelemetrySnapshot): FailoverAction {
    return metrics.latencyP99Ms > 150
      ? FailoverAction.PROMOTE_SECONDARY_REPLICA
      : FailoverAction.MAINTAIN_STATE;
  }
}`,
  },
  {
    id: 'circuit-breaker',
    name: 'CircuitBreaker.ts',
    desc: 'Pattern de tolérance aux pannes & lissage de charge',
    code: `// Resilience Port: Circuit Breaker with exponential backoff & Half-Open state
export class ResilientCircuitBreaker<TInput, TOutput> {
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private failureThreshold = 3;
  private consecutiveFailures = 0;

  async execute(command: () => Promise<TOutput>): Promise<TOutput> {
    if (this.state === 'OPEN') {
      throw new CircuitOpenError("Service temporarily protected by circuit breaker.");
    }

    try {
      const result = await command();
      this.resetHealth();
      return result;
    } catch (error) {
      this.recordFailure();
      throw error;
    }
  }
}`,
  },
  {
    id: 'outbox',
    name: 'TransactionalOutbox.ts',
    desc: 'Garantie de cohérence à terme et zéro perte d’événement',
    code: `// Event-Driven: Outbox pattern for atomic DB write & message publication
export async function executeOrderWithOutbox(
  db: TransactionalClient,
  order: OrderDomainModel
): Promise<void> {
  await db.transaction(async (tx) => {
    // 1. Atomic domain persistence
    await tx.orders.insert(order.toPersistence());

    // 2. Outbox event recording in the same ACID transaction
    await tx.outboxEvents.insert({
      aggregateId: order.id.toString(),
      eventType: "ORDER_FINALIZED",
      payload: order.toEventPayload(),
      occurredAt: new Date(),
      status: "PENDING_DISPATCH"
    });
  });
}`,
  },
];

export const CodeCraftsmanshipPreview: React.FC = () => {
  const [selectedSnippet, setSelectedSnippet] = useState(SNIPPETS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#090A0F] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <SectionTag variant="cyan">CRAFTSMANSHIP & RIGUEUR DE CODE</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F8FAFC] tracking-tight mb-3">
            L'Excellence d'Ingénierie au Niveau Microscopique
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Une architecture robuste ne se limite pas à des boîtes sur un schéma. Elle vit dans
            chaque interface typée, chaque invariant et chaque gestion d'exception.
          </p>
        </div>

        {/* Code Terminal Bento */}
        <BentoCard className="overflow-hidden bg-[#07080C] border-white/10 shadow-2xl">
          {/* Terminal Title Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] px-4 py-3 bg-[#0D111A]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="ml-2 font-mono text-xs text-[#94A3B8]">
                src/domain/{selectedSnippet.name}
              </span>
            </div>

            {/* Snippet Tabs */}
            <div className="flex items-center gap-1.5 mt-2 sm:mt-0">
              {SNIPPETS.map((snippet) => (
                <button
                  key={snippet.id}
                  onClick={() => setSelectedSnippet(snippet)}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                    selectedSnippet.id === snippet.id
                      ? 'bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40'
                      : 'text-[#64748B] hover:text-[#94A3B8]'
                  }`}
                >
                  {snippet.name}
                </button>
              ))}

              <button
                onClick={handleCopy}
                title="Copier le snippet"
                className="ml-2 p-1.5 rounded text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Description banner */}
          <div className="px-5 py-2.5 bg-[#090A0F] border-b border-white/[0.05] text-xs font-mono text-[#38BDF8] flex items-center justify-between">
            <span>// {selectedSnippet.desc}</span>
            <span className="text-[10px] text-[#64748B]">TS_STRICT: TRUE</span>
          </div>

          {/* Code Viewer */}
          <div className="p-5 sm:p-7 overflow-x-auto font-mono text-xs sm:text-sm text-[#E2E8F0] leading-relaxed bg-[#07080C]">
            <pre className="selection:bg-[#38BDF8]/20">
              <code>{selectedSnippet.code}</code>
            </pre>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};
