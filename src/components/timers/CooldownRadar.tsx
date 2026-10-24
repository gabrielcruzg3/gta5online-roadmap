import React, { useState, useEffect } from 'react';
import { INITIAL_TIMERS } from '../../data/roadmap-nodes';
import { CooldownTimer } from '../../types/roadmap';
import { playTimerChime } from '../../utils/audio';
import { Play, Pause, RotateCcw, Bell, X, Volume2, Clock } from 'lucide-react';

interface CooldownRadarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CooldownRadar: React.FC<CooldownRadarProps> = ({ isOpen, onClose }) => {
  const [timers, setTimers] = useState<CooldownTimer[]>(INITIAL_TIMERS);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) =>
        prev.map((t) => {
          if (!t.isRunning) return t;

          if (t.remainingSeconds <= 1) {
            // Timer finished!
            if (soundEnabled) {
              playTimerChime();
            }

            // Game clock auto-repeats; cooldowns stop at 0
            if (t.category === 'game_clock') {
              return { ...t, remainingSeconds: t.durationSeconds };
            }

            return { ...t, remainingSeconds: 0, isRunning: false };
          }

          return { ...t, remainingSeconds: t.remainingSeconds - 1 };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [soundEnabled]);

  const toggleTimer = (id: string) => {
    setTimers((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          if (t.remainingSeconds === 0) {
            return { ...t, remainingSeconds: t.durationSeconds, isRunning: true };
          }
          return { ...t, isRunning: !t.isRunning };
        }
        return t;
      })
    );
  };

  const resetTimer = (id: string) => {
    setTimers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, remainingSeconds: t.durationSeconds, isRunning: false } : t))
    );
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 w-full max-w-md bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-xl p-4 text-slate-100 animate-in slide-in-from-bottom-5 duration-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
          <h3 className="font-black text-sm text-slate-100 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-cyan-400" /> GTA Cooldown Radar
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1 border transition-colors ${
              soundEnabled
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-slate-800 text-slate-500 border-slate-700'
            }`}
            title="Toggle Audio Chime Alert"
          >
            <Volume2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Timer List */}
      <div className="mt-3 space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
        {timers.map((t) => {
          const isDone = t.remainingSeconds === 0;
          const percent = Math.round(
            ((t.durationSeconds - t.remainingSeconds) / t.durationSeconds) * 100
          );

          return (
            <div
              key={t.id}
              className={`p-2.5 rounded-xl border bg-slate-950/60 transition-all ${
                isDone
                  ? 'border-emerald-500/80 bg-emerald-950/20'
                  : t.isRunning
                  ? 'border-cyan-500/50'
                  : 'border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-slate-200">{t.label}</span>
                  {t.category === 'game_clock' && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Auto-Loop
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono font-black text-sm ${
                      isDone
                        ? 'text-emerald-400 animate-pulse'
                        : t.isRunning
                        ? 'text-cyan-400'
                        : 'text-slate-400'
                    }`}
                  >
                    {isDone ? 'READY!' : formatTime(t.remainingSeconds)}
                  </span>

                  <button
                    onClick={() => toggleTimer(t.id)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      t.isRunning
                        ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
                        : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30'
                    }`}
                  >
                    {t.isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => resetTimer(t.id)}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    isDone ? 'bg-emerald-400' : 'bg-cyan-500'
                  }`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
