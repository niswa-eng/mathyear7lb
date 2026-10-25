/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';

interface NumberLineWidgetProps {
  min?: number;
  max?: number;
  initialStart?: number;
  initialHop?: number;
}

export const NumberLineWidget: React.FC<NumberLineWidgetProps> = ({
  min = -10,
  max = 10,
  initialStart = -2,
  initialHop = 5,
}) => {
  const [start, setStart] = useState<number>(initialStart);
  const [hop, setHop] = useState<number>(initialHop);
  const [showHop, setShowHop] = useState<boolean>(true);

  const end = start + hop;

  const totalTicks = max - min;
  const getX = (val: number) => {
    const clamped = Math.max(min, Math.min(max, val));
    const percent = (clamped - min) / totalTicks;
    return 40 + percent * 460; // svg width 540
  };

  const startX = getX(start);
  const endX = getX(end);
  const midX = (startX + endX) / 2;
  const hopHeight = Math.min(65, Math.abs(endX - startX) * 0.45 + 25);
  const arcY = 75 - hopHeight;

  return (
    <div className="w-full bg-[#FAF8F3] border border-[#E3DED4] rounded-xl p-3 shadow-xs">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#0F1E36] tracking-wide uppercase">
            Interactive Number Line
          </span>
          <span className="text-xs text-slate-500">
            {start} {hop >= 0 ? `+ ${hop}` : `- ${Math.abs(hop)}`} = <strong className="text-blue-700 font-bold">{end}</strong>
          </span>
        </div>
        <button
          onClick={() => {
            setStart(initialStart);
            setHop(initialHop);
            setShowHop(true);
          }}
          className="text-xs text-slate-500 hover:text-[#0F1E36] flex items-center gap-1 transition-colors"
          title="Reset"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* SVG Canvas for Number line */}
      <div className="w-full overflow-x-auto py-1">
        <svg viewBox="0 0 540 120" className="w-full max-h-[140px] select-none">
          {/* Defs for arrow markers */}
          <defs>
            <marker id="arrow-left" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 10 0 L 0 5 L 10 10 z" fill="#0F1E36" />
            </marker>
            <marker id="arrow-right" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#0F1E36" />
            </marker>
            <marker id="arc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 9 5 L 0 9 z" fill={hop >= 0 ? '#2563EB' : '#DC2626'} />
            </marker>
          </defs>

          {/* Jump Arc */}
          {showHop && hop !== 0 && (
            <g>
              <path
                d={`M ${startX} 75 Q ${midX} ${arcY} ${endX} 75`}
                fill="none"
                stroke={hop >= 0 ? '#2563EB' : '#DC2626'}
                strokeWidth="2.5"
                strokeDasharray="4 2"
                markerEnd="url(#arc-arrow)"
              />
              {/* Arc label badge */}
              <rect
                x={midX - 22}
                y={arcY - 14}
                width="44"
                height="18"
                rx="4"
                fill={hop >= 0 ? '#EFF6FF' : '#FEF2F2'}
                stroke={hop >= 0 ? '#93C5FD' : '#FCA5A5'}
                strokeWidth="1"
              />
              <text
                x={midX}
                y={arcY - 1}
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill={hop >= 0 ? '#1D4ED8' : '#B91C1C'}
              >
                {hop > 0 ? `+${hop}` : hop}
              </text>
            </g>
          )}

          {/* Main Axis Line */}
          <line
            x1="25"
            y1="75"
            x2="515"
            y2="75"
            stroke="#0F1E36"
            strokeWidth="2.5"
            markerStart="url(#arrow-left)"
            markerEnd="url(#arrow-right)"
          />

          {/* Zero highlight band */}
          <line
            x1={getX(0)}
            y1="60"
            x2={getX(0)}
            y2="90"
            stroke="#0F1E36"
            strokeWidth="3.5"
          />

          {/* Tick marks & numbers */}
          {Array.from({ length: totalTicks + 1 }, (_, i) => {
            const val = min + i;
            const x = getX(val);
            const isZero = val === 0;
            const isMajor = val % 5 === 0;
            return (
              <g key={val}>
                <line
                  x1={x}
                  y1={isZero ? 62 : isMajor ? 67 : 70}
                  x2={x}
                  y2={isZero ? 88 : isMajor ? 83 : 80}
                  stroke={isZero ? '#0F1E36' : val < 0 ? '#DC2626' : '#2563EB'}
                  strokeWidth={isZero ? 2.5 : isMajor ? 1.8 : 1}
                  opacity={isZero ? 1 : isMajor ? 0.8 : 0.4}
                />
                <text
                  x={x}
                  y="99"
                  textAnchor="middle"
                  fontSize={isZero ? '12' : isMajor ? '11' : '9.5'}
                  fontWeight={isZero ? '800' : isMajor ? '600' : '400'}
                  fill={isZero ? '#0F1E36' : val < 0 ? '#991B1B' : '#1E40AF'}
                  className="font-mono tabular-nums"
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* Start Point Marker */}
          <circle cx={startX} cy="75" r="5" fill="#4B5563" stroke="#FFFFFF" strokeWidth="2" />
          <text x={startX} y="114" textAnchor="middle" fontSize="9" fontWeight="600" fill="#4B5563">
            Start ({start})
          </text>

          {/* End Point Marker */}
          <circle
            cx={endX}
            cy="75"
            r="6"
            fill={hop >= 0 ? '#2563EB' : '#DC2626'}
            stroke="#FFFFFF"
            strokeWidth="2.5"
          />
          <text
            x={endX}
            y="54"
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fill={hop >= 0 ? '#1D4ED8' : '#B91C1C'}
          >
            End ({end})
          </text>
        </svg>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#E3DED4] text-xs">
        <div>
          <span className="text-slate-500 font-medium block mb-1">Starting Integer:</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setStart((s) => Math.max(min, s - 1))}
              className="px-2 py-1 bg-white border border-[#E3DED4] rounded-md hover:bg-slate-50 transition-colors font-mono"
            >
              -1
            </button>
            <input
              type="range"
              min={min}
              max={max}
              value={start}
              onChange={(e) => setStart(Number(e.target.value))}
              className="flex-1 accent-slate-800 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <button
              onClick={() => setStart((s) => Math.min(max, s + 1))}
              className="px-2 py-1 bg-white border border-[#E3DED4] rounded-md hover:bg-slate-50 transition-colors font-mono"
            >
              +1
            </button>
            <span className="font-mono font-bold w-6 text-center tabular-nums">{start}</span>
          </div>
        </div>

        <div>
          <span className="text-slate-500 font-medium block mb-1">Add / Subtract Jump:</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setHop((h) => Math.max(-10, h - 1))}
              className="px-2 py-1 bg-white border border-[#E3DED4] rounded-md hover:bg-slate-50 transition-colors font-mono"
            >
              <Minus className="w-3 h-3" />
            </button>
            <input
              type="range"
              min={-10}
              max={10}
              value={hop}
              onChange={(e) => setHop(Number(e.target.value))}
              className="flex-1 accent-blue-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <button
              onClick={() => setHop((h) => Math.min(10, h + 1))}
              className="px-2 py-1 bg-white border border-[#E3DED4] rounded-md hover:bg-slate-50 transition-colors font-mono"
            >
              <Plus className="w-3 h-3" />
            </button>
            <span className="font-mono font-bold w-7 text-center tabular-nums text-blue-700">
              {hop > 0 ? `+${hop}` : hop}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
