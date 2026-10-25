/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

export const ProtractorAngleWidget: React.FC = () => {
  const [angle, setAngle] = useState<number>(65);

  const getAngleCategory = (deg: number) => {
    if (deg === 90) return 'Right Angle (90°)';
    if (deg < 90) return 'Acute Angle (< 90°)';
    if (deg === 180) return 'Straight Angle (180°)';
    if (deg < 180) return 'Obtuse Angle (90° - 180°)';
    if (deg === 360) return 'Full Turn (360°)';
    return 'Reflex Angle (> 180°)';
  };

  const rad = (angle * Math.PI) / 180;
  const armLen = 95;
  const armX = 150 + armLen * Math.cos(-rad);
  const armY = 120 + armLen * Math.sin(-rad);

  // SVG arc path
  const largeArcFlag = angle > 180 ? 1 : 0;
  const arcRadius = 35;
  const arcEndX = 150 + arcRadius * Math.cos(-rad);
  const arcEndY = 120 + arcRadius * Math.sin(-rad);
  const arcPath = `M 185 120 A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 0 ${arcEndX} ${arcEndY}`;

  return (
    <div className="w-full bg-[#FAF8F3] border border-[#E3DED4] rounded-xl p-3 shadow-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-[#0F1E36] tracking-wide uppercase">
          Protractor & Angle Explorer
        </span>
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
          {getAngleCategory(angle)}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <svg viewBox="0 0 300 150" className="w-48 h-28 select-none">
          {/* Protractor semi-circle */}
          <path d="M 50 120 A 100 100 0 0 1 250 120 Z" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
          
          {/* Ticks at 30, 45, 60, 90, 120, 135, 150 */}
          {[0, 30, 45, 60, 90, 120, 135, 150, 180].map((deg) => {
            const r = (deg * Math.PI) / 180;
            const x1 = 150 + 95 * Math.cos(-r);
            const y1 = 120 + 95 * Math.sin(-r);
            const x2 = 150 + 100 * Math.cos(-r);
            const y2 = 120 + 100 * Math.sin(-r);
            return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#64748B" strokeWidth="1.5" />;
          })}

          {/* Base ray */}
          <line x1="150" y1="120" x2="250" y2="120" stroke="#0F1E36" strokeWidth="2.5" />

          {/* Angle Arc */}
          <path d={arcPath} fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="3 2" />

          {/* Rotating ray */}
          <line x1="150" y1="120" x2={armX} y2={armY} stroke="#DC2626" strokeWidth="2.5" />

          {/* Center Vertex */}
          <circle cx="150" cy="120" r="4" fill="#0F1E36" />
        </svg>

        <div className="flex-1 w-full space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Angle value:</span>
            <span className="font-mono font-bold text-base text-blue-700">{angle}°</span>
          </div>
          <input
            type="range"
            min={0}
            max={360}
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
          />
          <div className="flex flex-wrap gap-1 pt-1">
            {[30, 45, 90, 120, 180, 270, 360].map((preset) => (
              <button
                key={preset}
                onClick={() => setAngle(preset)}
                className="px-1.5 py-0.5 text-[11px] font-mono bg-white border border-[#E3DED4] rounded hover:bg-slate-50"
              >
                {preset}°
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
