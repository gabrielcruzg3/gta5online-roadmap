import React, { useState } from 'react';
import { CheckCircle2, RotateCcw, Wallet, Zap, ShieldAlert, Sparkles, Building2 } from 'lucide-react';

interface VaultCircuitModalProps {
  onClose: () => void;
}

export const VaultCircuitModal: React.FC<VaultCircuitModalProps> = ({ onClose }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const stops = [
    {
      id: 'stop-agency',
      stopNum: '01',
      title: 'Agency (Celebrity Solutions)',
      amount: 20000,
      comboText: 'Walk out door → Call Franklin on phone → Request Payphone Hit (+$45,000 for 4 mins work).',
      tag: 'Safe Cap: $250k',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    },
    {
      id: 'stop-nightclub',
      stopNum: '02',
      title: 'Nightclub (The Cash Cow)',
      amount: 50000,
      comboText: '10-Second Bouncer Trick: Enter club in Passive Mode to instantly eject troublemaker for +25% popularity in 10s without driving drunk VIPs!',
      tag: 'Safe Cap: $250k',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    },
    {
      id: 'stop-salvage',
      stopNum: '03',
      title: 'Salvage Yard (Chop Shop)',
      amount: 24000,
      comboText: 'Hook 1 Tow Truck car (takes 2 mins) to preserve the $24,000/day safe rate and yield +$35k scrap revenue.',
      tag: 'Safe Cap: $100k-$250k',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    },
    {
      id: 'stop-arcade',
      stopNum: '04',
      title: 'Arcade (Pixel Pete / Videogeddon)',
      amount: 5000,
      comboText: '1-Game Trick: Place cheapest arcade machine on all floor slots. Check Master Control Terminal to resupply Bunker in 1 click.',
      tag: 'Safe Cap: $100k',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      id: 'stop-bail',
      stopNum: '05',
      title: 'Bail Enforcement Office',
      amount: 7500,
      comboText: 'Collect bounty safe cash and press interact on both hired staff agents to dispatch them on new bounties.',
      tag: 'Safe Cap: $100k',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    },
  ];

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetAll = () => {
    setCheckedItems({});
  };

  const totalCollected = stops.reduce((sum, stop) => {
    return sum + (checkedItems[stop.id] ? stop.amount : 0);
  }, 0);

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 space-y-6">
      {/* Banner */}
      <div className="p-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                48-Minute Routine
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                Execute Once Every In-Game Day
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100 flex items-center gap-2">
              <Wallet className="w-6 h-6 text-emerald-400" /> The Golden Vault Sweep Circuit
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Empty all 5 passive wall safes in under 8 minutes, trigger cooldown bonuses, and keep daily safe rates capped at maximum payout.
            </p>
          </div>

          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-right shrink-0">
            <span className="text-[10px] font-bold uppercase text-slate-400">Current Run Cash</span>
            <div className="text-2xl font-black font-mono text-emerald-400">
              ${totalCollected.toLocaleString()}
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              {completedCount} of 5 Safes Swept
            </span>
          </div>
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {stops.map((stop) => {
          const isDone = !!checkedItems[stop.id];

          return (
            <div
              key={stop.id}
              onClick={() => toggleCheck(stop.id)}
              className={`p-4 rounded-xl border bg-slate-900/80 hover:bg-slate-900 cursor-pointer transition-all flex items-start gap-4 ${
                isDone
                  ? 'border-emerald-500/60 bg-emerald-950/15'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg font-black text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                  isDone
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {isDone ? '✓' : stop.stopNum}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-slate-100">{stop.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.2 rounded border ${stop.badgeColor}`}>
                      {stop.tag}
                    </span>
                  </div>
                  <div className="font-mono font-black text-sm text-emerald-400">
                    +${stop.amount.toLocaleString()}
                  </div>
                </div>

                <p className="text-xs text-slate-300 mt-1 leading-relaxed bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
                  <span className="text-amber-400 font-bold">Combo Action: </span>
                  {stop.comboText}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pro Fast Travel Banner */}
      <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2 text-xs">
        <h4 className="font-bold text-amber-400 flex items-center gap-1.5">
          <Zap className="w-4 h-4" /> Pro Speedrun Tip: The "Invite-Only Session Hop" Fast Travel
        </h4>
        <p className="text-slate-300 leading-relaxed">
          Instead of flying across Los Santos, set your <strong>Spawn Location</strong> in the Interaction Menu to your next target property (e.g., Nightclub).
          Then hit <em>Pause → Online → Find New Session → Invite Only</em>. On modern SSDs, you will load directly inside your office next to the safe in 10–12 seconds!
        </p>
      </div>

      {/* Reset Run Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={resetAll}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset Circuit Run
        </button>
      </div>
    </div>
  );
};
