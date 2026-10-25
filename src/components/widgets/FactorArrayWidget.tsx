/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface FactorArrayWidgetProps {
  initialNumber?: number;
}

export const FactorArrayWidget: React.FC<FactorArrayWidgetProps> = ({ initialNumber = 12 }) => {
  const [num, setNum] = useState<number>(initialNumber);

  // Calculate factors
  const factors: number[] = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }

  const isSquare = Number.isInteger(Math.sqrt(num));
  const isPrime = factors.length === 2;

  return (
    <div className="w-full bg-[#FAF8F3] border border-[#E3DED4] rounded-xl p-3 shadow-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-[#0F1E36] tracking-wide uppercase">
          Factor & Array Visualizer
        </span>
        <div className="flex items-center gap-2">
          {isPrime && (
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              Prime Number
            </span>
          )}
          {isSquare && (
            <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded">
              Square Number ({Math.sqrt(num)}²)
            </span>
          )}
        </div>
      </div>

      {/* Number selector buttons */}
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        {[6, 8, 12, 16, 18, 24, 25, 36].map((n) => (
          <button
            key={n}
            onClick={() => setNum(n)}
            className={`px-2.5 py-1 text-xs font-mono font-medium rounded border transition-colors ${
              num === n
                ? 'bg-[#0F1E36] text-white border-[#0F1E36]'
                : 'bg-white text-slate-700 border-[#E3DED4] hover:bg-slate-50'
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Visual Dot Array for primary factor pair */}
      <div className="bg-white border border-[#E3DED4] rounded-lg p-3 text-center">
        <div className="text-xs text-slate-500 mb-2">
          Factors of <strong className="text-[#0F1E36]">{num}</strong>:{' '}
          <span className="font-mono font-bold text-blue-700">
            {factors.join(', ')}
          </span>{' '}
          ({factors.length} total)
        </div>

        {/* Dynamic factor pairs list */}
        <div className="flex flex-wrap justify-center gap-2 text-xs font-mono">
          {factors
            .filter((f) => f <= Math.sqrt(num))
            .map((f) => {
              const pair = num / f;
              return (
                <div
                  key={f}
                  className="bg-[#FAF8F3] border border-[#E3DED4] px-2.5 py-1 rounded-md text-slate-700"
                >
                  {f} × {pair} = {num}
                </div>
              );
            })}
        </div>

        {/* Dot grid preview for largest factor <= sqrt(num) */}
        {num <= 36 && (
          <div className="mt-3 pt-2 border-t border-slate-100 flex flex-col items-center">
            <span className="text-[11px] text-slate-400 mb-1.5">
              Rectangular Array ({factors.filter((f) => f <= Math.sqrt(num)).slice(-1)[0]} × {num / factors.filter((f) => f <= Math.sqrt(num)).slice(-1)[0]}):
            </span>
            <div
              className="inline-grid gap-1.5"
              style={{
                gridTemplateColumns: `repeat(${num / factors.filter((f) => f <= Math.sqrt(num)).slice(-1)[0]}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: num }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3.5 h-3.5 rounded-full ${
                    isSquare ? 'bg-purple-600' : 'bg-blue-600'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
