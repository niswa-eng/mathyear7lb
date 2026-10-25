/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

export const BalanceScaleWidget: React.FC = () => {
  const [leftX, setLeftX] = useState<number>(2);
  const [leftConstants, setLeftConstants] = useState<number>(3);
  const [rightConstants, setRightConstants] = useState<number>(11);

  // Assume unknown x value = (11 - 3)/2 = 4 for balance
  const solutionX = 4;
  const leftTotal = leftX * solutionX + leftConstants;
  const rightTotal = rightConstants;

  const tilt = Math.max(-15, Math.min(15, (rightTotal - leftTotal) * 1.5));
  const isBalanced = leftTotal === rightTotal;

  return (
    <div className="w-full bg-[#FAF8F3] border border-[#E3DED4] rounded-xl p-3 shadow-xs">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-bold text-[#0F1E36] tracking-wide uppercase">
          Algebra Balance Scale
        </span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${isBalanced ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
          {isBalanced ? 'Balanced: Left = Right' : tilt > 0 ? 'Right is Heavier' : 'Left is Heavier'}
        </span>
      </div>

      <div className="text-center font-mono text-xs mb-2">
        Equation: <span className="font-bold text-blue-700">{leftX}x + {leftConstants}</span> = <span className="font-bold text-purple-700">{rightConstants}</span>
        {isBalanced && <span className="ml-2 text-emerald-700 font-bold">(Solution: x = {solutionX})</span>}
      </div>

      {/* SVG Scale */}
      <svg viewBox="0 0 400 130" className="w-full max-h-[120px] select-none">
        {/* Base and Fulcrum */}
        <polygon points="190,125 210,125 200,90" fill="#0F1E36" />
        <circle cx="200" cy="90" r="5" fill="#DC2626" />

        {/* Tilted Beam */}
        <g transform={`rotate(${tilt}, 200, 90)`}>
          <line x1="60" y1="90" x2="340" y2="90" stroke="#0F1E36" strokeWidth="4" strokeLinecap="round" />
          
          {/* Left Pan Strings and Pan */}
          <line x1="80" y1="90" x2="60" y2="120" stroke="#64748B" strokeWidth="1.5" />
          <line x1="80" y1="90" x2="100" y2="120" stroke="#64748B" strokeWidth="1.5" />
          <path d="M 50 120 Q 80 130 110 120 Z" fill="#94A3B8" />

          {/* Right Pan Strings and Pan */}
          <line x1="320" y1="90" x2="300" y2="120" stroke="#64748B" strokeWidth="1.5" />
          <line x1="320" y1="90" x2="340" y2="120" stroke="#64748B" strokeWidth="1.5" />
          <path d="M 290 120 Q 320 130 350 120 Z" fill="#94A3B8" />
        </g>
      </svg>

      <div className="flex items-center justify-around gap-2 mt-2 pt-2 border-t border-[#E3DED4] text-xs">
        <div className="flex items-center gap-1">
          <span className="text-slate-500">x count:</span>
          <button onClick={() => setLeftX((x) => Math.max(1, x - 1))} className="px-1.5 py-0.5 bg-white border border-[#E3DED4] rounded">-</button>
          <span className="font-mono font-bold w-4 text-center">{leftX}</span>
          <button onClick={() => setLeftX((x) => Math.min(5, x + 1))} className="px-1.5 py-0.5 bg-white border border-[#E3DED4] rounded">+</button>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-slate-500">Left constants:</span>
          <button onClick={() => setLeftConstants((c) => Math.max(0, c - 1))} className="px-1.5 py-0.5 bg-white border border-[#E3DED4] rounded">-</button>
          <span className="font-mono font-bold w-4 text-center">{leftConstants}</span>
          <button onClick={() => setLeftConstants((c) => Math.min(15, c + 1))} className="px-1.5 py-0.5 bg-white border border-[#E3DED4] rounded">+</button>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-slate-500">Right total:</span>
          <button onClick={() => setRightConstants((r) => Math.max(1, r - 1))} className="px-1.5 py-0.5 bg-white border border-[#E3DED4] rounded">-</button>
          <span className="font-mono font-bold w-4 text-center">{rightConstants}</span>
          <button onClick={() => setRightConstants((r) => Math.min(25, r + 1))} className="px-1.5 py-0.5 bg-white border border-[#E3DED4] rounded">+</button>
        </div>
      </div>
    </div>
  );
};
