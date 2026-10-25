/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

export const FractionBarWidget: React.FC = () => {
  const [denominator, setDenominator] = useState<number>(4);
  const [numerator, setNumerator] = useState<number>(3);

  const percent = ((numerator / denominator) * 100).toFixed(1);
  const decimal = (numerator / denominator).toFixed(3).replace(/\.?0+$/, '');

  const togglePart = (idx: number) => {
    if (idx < numerator) {
      setNumerator(idx);
    } else {
      setNumerator(idx + 1);
    }
  };

  return (
    <div className="w-full bg-[#FAF8F3] border border-[#E3DED4] rounded-xl p-3 shadow-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-[#0F1E36] tracking-wide uppercase">
          Fraction Wall & Bar Tool
        </span>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span>Fraction: <strong className="text-blue-700 text-sm">{numerator}/{denominator}</strong></span>
          <span className="text-slate-400">·</span>
          <span>Decimal: <strong className="text-emerald-700">{decimal}</strong></span>
          <span className="text-slate-400">·</span>
          <span>Percent: <strong className="text-purple-700">{percent}%</strong></span>
        </div>
      </div>

      {/* Denominator selector */}
      <div className="flex items-center gap-1.5 mb-2 text-xs">
        <span className="text-slate-500 font-medium">Denominator:</span>
        {[2, 3, 4, 5, 6, 8, 10, 12].map((d) => (
          <button
            key={d}
            onClick={() => {
              setDenominator(d);
              setNumerator((n) => Math.min(n, d));
            }}
            className={`px-2 py-0.5 rounded border font-mono transition-colors ${
              denominator === d
                ? 'bg-[#0F1E36] text-white border-[#0F1E36]'
                : 'bg-white text-slate-700 border-[#E3DED4] hover:bg-slate-50'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Clickable fraction bar */}
      <div className="bg-white border border-[#E3DED4] rounded-lg p-2.5">
        <div className="h-10 w-full flex rounded-md overflow-hidden border border-slate-300 shadow-inner">
          {Array.from({ length: denominator }).map((_, i) => {
            const isFilled = i < numerator;
            return (
              <button
                key={i}
                type="button"
                onClick={() => togglePart(i)}
                className={`flex-1 h-full border-r last:border-r-0 border-white/60 transition-colors flex items-center justify-center font-mono text-xs font-bold ${
                  isFilled
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                }`}
                title={`Part ${i + 1} of ${denominator}`}
              >
                1/{denominator}
              </button>
            );
          })}
        </div>
        <p className="text-[11px] text-slate-500 text-center mt-1.5">
          Tap slices to shade or unshade. Shaded: <span className="font-semibold text-blue-700">{numerator}</span> of <span className="font-semibold text-slate-800">{denominator}</span> equal parts.
        </p>
      </div>
    </div>
  );
};
