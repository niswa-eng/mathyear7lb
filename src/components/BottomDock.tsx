/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Hand,
  Pen,
  Highlighter,
  Eraser,
  Slash,
  Square,
  Circle,
  Ruler,
  Split,
  Undo2,
  Redo2,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { WhiteboardTool } from '../types/whiteboard.ts';
import { Step } from '../types/content.ts';

interface BottomDockProps {
  // Whiteboard props
  activeTool: WhiteboardTool;
  onSelectTool: (tool: WhiteboardTool) => void;
  activeColor: string;
  onSelectColor: (color: string) => void;
  activeWidth: number;
  onSelectWidth: (width: number) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;

  // Lesson navigation props
  steps: Step[];
  currentStepIndex: number;
  onSelectStep: (index: number) => void;
  onPrevStep: () => void;
  onNextStep: () => void;
}

const INK_COLORS = [
  { label: 'Navy', hex: '#0F1E36' },
  { label: 'Blue', hex: '#2563EB' },
  { label: 'Red', hex: '#DC2626' },
  { label: 'Green', hex: '#16A34A' },
  { label: 'Orange', hex: '#D97706' },
  { label: 'Purple', hex: '#9333EA' },
];

const STROKE_WIDTHS = [
  { label: 'Fine', value: 2 },
  { label: 'Medium', value: 4 },
  { label: 'Broad', value: 8 },
];

export const BottomDock: React.FC<BottomDockProps> = ({
  activeTool,
  onSelectTool,
  activeColor,
  onSelectColor,
  activeWidth,
  onSelectWidth,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onClear,
  steps,
  currentStepIndex,
  onSelectStep,
  onPrevStep,
  onNextStep,
}) => {
  const currentStep = steps[currentStepIndex];
  const totalSteps = steps.length;

  return (
    <footer className="border-t border-[#E3DED4] bg-white px-3 py-1.5 shrink-0 z-20 shadow-xs">
      <div className="flex flex-col min-[1120px]:flex-row min-[1120px]:items-center min-[1120px]:justify-between gap-1.5 max-w-full overflow-x-auto">
        {/* Row 1 (or Left section on wide screens): Whiteboard Tools */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 shrink-0">
          {/* Mode Toggle: Touch / Select vs Draw */}
          <div className="flex items-center bg-[#FAF8F3] border border-[#E3DED4] rounded-lg p-0.5 text-xs shrink-0">
            <button
              onClick={() => onSelectTool('select')}
              className={`px-2 py-1 rounded-md flex items-center gap-1 transition-colors ${
                activeTool === 'select'
                  ? 'bg-slate-900 text-white font-medium'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Touch / Select Mode (Scroll & Tap widgets)"
            >
              <Hand className="w-3.5 h-3.5" />
              <span className="text-[11px]">Touch</span>
            </button>
            <button
              onClick={() => onSelectTool('pen')}
              className={`px-2 py-1 rounded-md flex items-center gap-1 transition-colors ${
                activeTool !== 'select'
                  ? 'bg-blue-600 text-white font-medium'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Draw Mode (Write notes on board)"
            >
              <Pen className="w-3.5 h-3.5" />
              <span className="text-[11px]">Draw</span>
            </button>
          </div>

          <div className="h-4 w-px bg-[#E3DED4] shrink-0" />

          {/* Whiteboard Drawing Tools */}
          <div className="flex items-center bg-[#FAF8F3] border border-[#E3DED4] rounded-lg p-0.5 text-xs shrink-0">
            <button
              onClick={() => onSelectTool('pen')}
              className={`p-1.5 rounded-md transition-colors ${
                activeTool === 'pen'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Pen"
            >
              <Pen className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectTool('highlighter')}
              className={`p-1.5 rounded-md transition-colors ${
                activeTool === 'highlighter'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Highlighter"
            >
              <Highlighter className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectTool('eraser')}
              className={`p-1.5 rounded-md transition-colors ${
                activeTool === 'eraser'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Eraser"
            >
              <Eraser className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectTool('line')}
              className={`p-1.5 rounded-md transition-colors ${
                activeTool === 'line'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Straight Line"
            >
              <Slash className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectTool('dashed')}
              className={`p-1.5 rounded-md transition-colors ${
                activeTool === 'dashed'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Dashed Line"
            >
              <Split className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectTool('rect')}
              className={`p-1.5 rounded-md transition-colors ${
                activeTool === 'rect'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Rectangle"
            >
              <Square className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectTool('circle')}
              className={`p-1.5 rounded-md transition-colors ${
                activeTool === 'circle'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Circle / Ellipse"
            >
              <Circle className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectTool('ruler')}
              className={`p-1.5 rounded-md transition-colors ${
                activeTool === 'ruler'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Ruler (Draws line with cm measurement readout)"
            >
              <Ruler className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="h-4 w-px bg-[#E3DED4] shrink-0" />

          {/* 6 Ink Color Swatches */}
          <div className="flex items-center gap-1 bg-[#FAF8F3] border border-[#E3DED4] rounded-lg p-1 shrink-0">
            {INK_COLORS.map((c) => (
              <button
                key={c.hex}
                onClick={() => {
                  onSelectColor(c.hex);
                  if (activeTool === 'eraser' || activeTool === 'select') {
                    onSelectTool('pen');
                  }
                }}
                className={`w-5 h-5 rounded-full transition-all ${
                  activeColor === c.hex && activeTool !== 'eraser' && activeTool !== 'select'
                    ? 'ring-2 ring-offset-1 ring-slate-800 scale-110'
                    : 'hover:scale-105'
                }`}
                style={{ backgroundColor: c.hex }}
                title={`${c.label} Ink`}
              />
            ))}
          </div>

          <div className="h-4 w-px bg-[#E3DED4] shrink-0" />

          {/* 3 Stroke Thicknesses */}
          <div className="flex items-center bg-[#FAF8F3] border border-[#E3DED4] rounded-lg p-0.5 shrink-0">
            {STROKE_WIDTHS.map((w) => (
              <button
                key={w.value}
                onClick={() => onSelectWidth(w.value)}
                className={`px-2 py-1 rounded-md transition-colors flex items-center justify-center ${
                  activeWidth === w.value
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title={`${w.label} Stroke (${w.value}px)`}
              >
                <div
                  className="rounded-full bg-current"
                  style={{ width: `${w.value * 1.5 + 2}px`, height: `${w.value * 1.5 + 2}px` }}
                />
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-[#E3DED4] shrink-0" />

          {/* Undo / Redo / Clear */}
          <div className="flex items-center gap-0.5 shrink-0">
            <button
              onClick={onUndo}
              disabled={!canUndo}
              className="p-1.5 text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed rounded-md hover:bg-slate-100 transition-colors"
              title="Undo (Ctrl+Z)"
            >
              <Undo2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onRedo}
              disabled={!canRedo}
              className="p-1.5 text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed rounded-md hover:bg-slate-100 transition-colors"
              title="Redo (Ctrl+Y)"
            >
              <Redo2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClear}
              className="p-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              title="Clear Canvas for this slide"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Row 2 (or Right section on wide screens): Lesson Navigation */}
        <div className="flex items-center justify-between min-[1120px]:justify-end gap-2 shrink-0 py-0.5">
          {/* Previous Step Button */}
          <button
            onClick={onPrevStep}
            disabled={currentStepIndex === 0}
            className="px-2.5 py-1 text-xs font-semibold text-[#0F1E36] bg-[#FAF8F3] hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed border border-[#E3DED4] rounded-lg transition-colors flex items-center gap-1 shrink-0"
            title="Previous Slide (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev</span>
          </button>

          {/* Step Progress Indicators & Counter */}
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#FAF8F3] border border-[#E3DED4] rounded-lg text-xs overflow-x-auto max-w-[480px]">
            {/* Step Counter Badge */}
            <span className="font-mono font-bold text-slate-700 shrink-0 tabular-nums">
              {currentStepIndex + 1}/{totalSteps}
            </span>

            <div className="h-3 w-px bg-[#E3DED4] shrink-0" />

            {/* Step Pills */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {steps.map((stepItem, idx) => {
                const isActive = idx === currentStepIndex;
                const isPassed = idx < currentStepIndex;
                return (
                  <button
                    key={stepItem.id}
                    onClick={() => onSelectStep(idx)}
                    className={`px-2 py-0.5 text-[11px] rounded-md transition-all whitespace-nowrap shrink-0 flex items-center gap-1 ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold shadow-2xs'
                        : isPassed
                        ? 'bg-white text-slate-700 border border-[#E3DED4] hover:bg-slate-100 font-medium'
                        : 'bg-white/60 text-slate-400 hover:text-slate-600 font-normal'
                    }`}
                    title={`Slide ${idx + 1}: ${stepItem.title}`}
                  >
                    <span>{idx + 1}</span>
                    <span className="hidden md:inline max-w-[80px] truncate">
                      {stepItem.badge.replace('Exercise: ', '').replace('Test ', '')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Next Step Button */}
          <button
            onClick={onNextStep}
            disabled={currentStepIndex === totalSteps - 1}
            className="px-2.5 py-1 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-1 shadow-2xs shrink-0"
            title="Next Slide (Right Arrow)"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
