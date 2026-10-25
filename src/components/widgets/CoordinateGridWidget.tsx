/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

export const CoordinateGridWidget: React.FC = () => {
  const [point, setPoint] = useState<{ x: number; y: number }>({ x: 3, y: 2 });

  const min = -5;
  const max = 5;
  const size = 180;
  const step = size / (max - min);

  const toSvgX = (x: number) => (x - min) * step;
  const toSvgY = (y: number) => (max - y) * step;

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const mathX = Math.round(min + clickX / step);
    const mathY = Math.round(max - clickY / step);
    setPoint({
      x: Math.max(min, Math.min(max, mathX)),
      y: Math.max(min, Math.min(max, mathY)),
    });
  };

  const getQuadrant = (x: number, y: number) => {
    if (x === 0 && y === 0) return 'Origin (0,0)';
    if (x === 0) return 'y-axis';
    if (y === 0) return 'x-axis';
    if (x > 0 && y > 0) return 'Quadrant I (+, +)';
    if (x < 0 && y > 0) return 'Quadrant II (-, +)';
    if (x < 0 && y < 0) return 'Quadrant III (-, -)';
    return 'Quadrant IV (+, -)';
  };

  return (
    <div className="w-full bg-[#FAF8F3] border border-[#E3DED4] rounded-xl p-3 shadow-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-[#0F1E36] tracking-wide uppercase">
          Coordinate Grid (x, y)
        </span>
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
          Point P({point.x}, {point.y}) · {getQuadrant(point.x, point.y)}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          onClick={handleSvgClick}
          className="w-40 h-40 bg-white border border-[#E3DED4] rounded-lg cursor-crosshair select-none"
        >
          {/* Grid lines */}
          {Array.from({ length: max - min + 1 }).map((_, i) => {
            const v = min + i;
            const coord = i * step;
            return (
              <g key={v}>
                <line x1={coord} y1={0} x2={coord} y2={size} stroke={v === 0 ? '#0F1E36' : '#E2E8F0'} strokeWidth={v === 0 ? 1.5 : 0.7} />
                <line x1={0} y1={coord} x2={size} y2={coord} stroke={v === 0 ? '#0F1E36' : '#E2E8F0'} strokeWidth={v === 0 ? 1.5 : 0.7} />
              </g>
            );
          })}

          {/* Coordinate Point */}
          <circle cx={toSvgX(point.x)} cy={toSvgY(point.y)} r="5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
          <line x1={toSvgX(point.x)} y1={toSvgY(point.y)} x2={toSvgX(point.x)} y2={toSvgY(0)} stroke="#2563EB" strokeDasharray="2 2" strokeWidth="1" />
          <line x1={toSvgX(point.x)} y1={toSvgY(point.y)} x2={toSvgX(0)} y2={toSvgY(point.y)} stroke="#2563EB" strokeDasharray="2 2" strokeWidth="1" />
        </svg>

        <div className="flex-1 space-y-2 text-xs">
          <p className="text-slate-600">
            Click anywhere on the grid or adjust coordinates below:
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="font-bold text-blue-700">x:</span>
              <button onClick={() => setPoint((p) => ({ ...p, x: Math.max(min, p.x - 1) }))} className="px-1.5 py-0.5 bg-white border border-[#E3DED4] rounded">-</button>
              <span className="font-mono font-bold w-4 text-center">{point.x}</span>
              <button onClick={() => setPoint((p) => ({ ...p, x: Math.min(max, p.x + 1) }))} className="px-1.5 py-0.5 bg-white border border-[#E3DED4] rounded">+</button>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-purple-700">y:</span>
              <button onClick={() => setPoint((p) => ({ ...p, y: Math.max(min, p.y - 1) }))} className="px-1.5 py-0.5 bg-white border border-[#E3DED4] rounded">-</button>
              <span className="font-mono font-bold w-4 text-center">{point.y}</span>
              <button onClick={() => setPoint((p) => ({ ...p, y: Math.min(max, p.y + 1) }))} className="px-1.5 py-0.5 bg-white border border-[#E3DED4] rounded">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
