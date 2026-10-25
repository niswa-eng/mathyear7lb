/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  HelpCircle,
  Zap,
  ChevronDown,
  Layers,
  BookOpen,
  X,
  Target,
} from 'lucide-react';
import { Unit, Subtopic } from '../types/content.ts';

interface TopNavProps {
  units: Unit[];
  activeUnitIndex: number;
  activeSubtopicIndex: number;
  onSelectUnit: (unitIdx: number) => void;
  onSelectSubtopic: (subtopicIdx: number) => void;
  textSize: 'compact' | 'normal' | 'large';
  onTextSizeChange: (size: 'compact' | 'normal' | 'large') => void;
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  animationSpeed: 'normal' | 'fast' | 'off';
  onAnimationSpeedToggle: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  units,
  activeUnitIndex,
  activeSubtopicIndex,
  onSelectUnit,
  onSelectSubtopic,
  textSize,
  onTextSizeChange,
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  animationSpeed,
  onAnimationSpeedToggle,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [showLearningObjectives, setShowLearningObjectives] = useState<boolean>(false);

  const currentUnit = units[activeUnitIndex];
  const currentSubtopic = currentUnit?.subtopics[activeSubtopicIndex];

  return (
    <>
      <header className="h-12 border-b border-[#E3DED4] bg-white px-3 flex items-center justify-between gap-2 shrink-0 select-none z-20">
        {/* Left Zone: Brand + Unit & Subtopic Selectors */}
        <div className="flex items-center gap-2 min-w-0 flex-1 max-w-2xl">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-1.5 shrink-0 pr-1">
            <div className="w-6 h-6 rounded-md bg-[#0F1E36] text-white flex items-center justify-center font-bold text-xs tracking-tighter shadow-2xs">
              M7
            </div>
            <span className="font-bold text-sm text-[#0F1E36] hidden xl:inline whitespace-nowrap">
              Whiteboard Math
            </span>
          </div>

          <div className="h-4 w-px bg-[#E3DED4] shrink-0" />

          {/* Unit Selector Dropdown */}
          <div className="relative flex-1 min-w-[120px] max-w-[210px]">
            <select
              value={activeUnitIndex}
              onChange={(e) => onSelectUnit(Number(e.target.value))}
              className="w-full appearance-none bg-[#FAF8F3] hover:bg-slate-100 border border-[#E3DED4] text-[#0F1E36] text-xs font-semibold rounded-lg pl-2 pr-6 py-1.5 cursor-pointer truncate transition-colors focus:outline-hidden focus:ring-1 focus:ring-blue-500"
              title={currentUnit ? `Unit ${currentUnit.unitNumber}: ${currentUnit.title}` : ''}
            >
              {units.map((unit, idx) => (
                <option key={unit.id} value={idx}>
                  Unit {unit.unitNumber}: {unit.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Subtopic Selector Dropdown */}
          <div className="relative flex-1 min-w-[140px] max-w-[260px]">
            <select
              value={activeSubtopicIndex}
              onChange={(e) => onSelectSubtopic(Number(e.target.value))}
              className="w-full appearance-none bg-[#FAF8F3] hover:bg-slate-100 border border-[#E3DED4] text-[#0F1E36] text-xs font-medium rounded-lg pl-2 pr-6 py-1.5 cursor-pointer truncate transition-colors focus:outline-hidden focus:ring-1 focus:ring-blue-500"
              title={
                currentSubtopic
                  ? `${currentSubtopic.subtopicNumber} ${currentSubtopic.title}`
                  : ''
              }
            >
              {currentUnit?.subtopics.map((sub, idx) => (
                <option key={sub.id} value={idx}>
                  {sub.subtopicNumber} {sub.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Learning Objectives Info Button */}
          <button
            onClick={() => setShowLearningObjectives(true)}
            className="p-1 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors shrink-0"
            title="View Unit Learning Objectives"
          >
            <Target className="w-4 h-4" />
          </button>
        </div>

        {/* Right Zone: Quick Utility Buttons */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Text Size Adjuster (A- / A+) */}
          <div className="flex items-center bg-[#FAF8F3] border border-[#E3DED4] rounded-lg p-0.5 text-xs">
            <button
              onClick={() => {
                if (textSize === 'large') onTextSizeChange('normal');
                else if (textSize === 'normal') onTextSizeChange('compact');
              }}
              disabled={textSize === 'compact'}
              className="px-1.5 py-0.5 rounded text-slate-700 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed font-bold"
              title="Smaller Text (A-)"
            >
              A-
            </button>
            <span className="text-[10px] text-slate-400 px-1 font-mono uppercase">
              {textSize === 'compact' ? 'S' : textSize === 'normal' ? 'M' : 'L'}
            </span>
            <button
              onClick={() => {
                if (textSize === 'compact') onTextSizeChange('normal');
                else if (textSize === 'normal') onTextSizeChange('large');
              }}
              disabled={textSize === 'large'}
              className="px-1.5 py-0.5 rounded text-slate-700 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed font-bold"
              title="Larger Text (A+)"
            >
              A+
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="hidden sm:flex items-center bg-[#FAF8F3] border border-[#E3DED4] rounded-lg p-0.5 text-xs">
            <button
              onClick={onZoomOut}
              className="p-1 rounded text-slate-600 hover:text-slate-900"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-slate-600 px-1 tabular-nums w-9 text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={onZoomIn}
              className="p-1 rounded text-slate-600 hover:text-slate-900"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Fit Screen Button */}
          <button
            onClick={onResetZoom}
            className="px-2 py-1 text-xs font-medium text-slate-700 hover:text-[#0F1E36] bg-[#FAF8F3] hover:bg-slate-100 border border-[#E3DED4] rounded-lg transition-colors hidden md:flex items-center gap-1"
            title="Reset Zoom to 100%"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="whitespace-nowrap">Fit Screen</span>
          </button>

          {/* Animation Speed Toggle */}
          <button
            onClick={onAnimationSpeedToggle}
            className={`px-2 py-1 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1 ${
              animationSpeed === 'off'
                ? 'bg-slate-100 text-slate-500 border-slate-200'
                : 'bg-[#FAF8F3] text-blue-700 border-[#E3DED4] hover:bg-blue-50'
            }`}
            title={`Animation Speed: ${animationSpeed}`}
          >
            <Zap className="w-3 h-3" />
            <span className="hidden lg:inline text-[11px]">
              {animationSpeed === 'normal' ? '1x' : animationSpeed === 'fast' ? '1.5x' : 'Off'}
            </span>
          </button>

          {/* Help Button */}
          <button
            onClick={() => setShowHelp(true)}
            className="p-1.5 text-slate-600 hover:text-blue-700 hover:bg-blue-50 border border-[#E3DED4] rounded-lg transition-colors"
            title="Whiteboard & Classroom Help (?)"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 text-slate-700 hover:text-[#0F1E36] hover:bg-slate-100 border border-[#E3DED4] rounded-lg transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen (F11)'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-2xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 border border-[#E3DED4] shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E3DED4]">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-base text-[#0F1E36]">
                  Interactive Whiteboard Guide
                </h3>
              </div>
              <button
                onClick={() => setShowHelp(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700 max-h-[70vh] overflow-y-auto pr-1">
              <div className="p-2.5 bg-blue-50/60 rounded-xl border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-1">📐 50/50 Dual-Zone Split Screen</h4>
                <p>
                  The left panel holds curriculum material, real-world analogies, KaTeX formulas, and practice questions. The right panel is your live classroom teacher's board with persistent slide notes.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0F1E36] mb-1.5">Interactive Board Tools</h4>
                <ul className="grid grid-cols-2 gap-2 text-slate-600">
                  <li className="bg-slate-50 p-2 rounded-lg">
                    <strong>Touch vs Draw:</strong> Toggle between selecting/scrolling and drawing mode.
                  </li>
                  <li className="bg-slate-50 p-2 rounded-lg">
                    <strong>Ruler Tool:</strong> Drag straight lines with instant real-time cm distance readout.
                  </li>
                  <li className="bg-slate-50 p-2 rounded-lg">
                    <strong>5 Paper Grids:</strong> Switch between Math Grid, Lined Notebook, Dot Grid, Coordinate Axes, or Plain White.
                  </li>
                  <li className="bg-slate-50 p-2 rounded-lg">
                    <strong>Palm Rejection:</strong> Built for interactive flat panels (IFP), styluses, and touch screens.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#0F1E36] mb-1.5">Keyboard Shortcuts</h4>
                <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px]">
                  <div className="flex justify-between bg-slate-50 px-2 py-1 rounded">
                    <span>Next Slide</span>
                    <span className="font-bold text-slate-800">Right Arrow (▶)</span>
                  </div>
                  <div className="flex justify-between bg-slate-50 px-2 py-1 rounded">
                    <span>Prev Slide</span>
                    <span className="font-bold text-slate-800">Left Arrow (◀)</span>
                  </div>
                  <div className="flex justify-between bg-slate-50 px-2 py-1 rounded">
                    <span>Undo</span>
                    <span className="font-bold text-slate-800">Ctrl + Z</span>
                  </div>
                  <div className="flex justify-between bg-slate-50 px-2 py-1 rounded">
                    <span>Redo</span>
                    <span className="font-bold text-slate-800">Ctrl + Y</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowHelp(false)}
              className="w-full py-2 bg-[#0F1E36] text-white font-medium text-xs rounded-xl hover:bg-slate-800 transition-colors"
            >
              Got it, Close Guide
            </button>
          </div>
        </div>
      )}

      {/* Learning Objectives Modal */}
      {showLearningObjectives && currentUnit && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-2xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 border border-[#E3DED4] shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E3DED4]">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-base text-[#0F1E36]">
                  Unit {currentUnit.unitNumber} Learning Objectives
                </h3>
              </div>
              <button
                onClick={() => setShowLearningObjectives(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-700 max-h-[60vh] overflow-y-auto">
              <p className="text-slate-500 font-medium">
                Cambridge Lower Secondary Mathematics (Stage 7) learning objectives for this unit:
              </p>
              <div className="space-y-2 pt-1">
                {currentUnit.learningObjectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 bg-[#FAF8F3] rounded-lg border border-[#E3DED4]">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="font-medium text-slate-800 leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowLearningObjectives(false)}
              className="w-full py-2 bg-[#0F1E36] text-white font-medium text-xs rounded-xl hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
