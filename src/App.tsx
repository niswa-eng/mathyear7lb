/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { allUnits } from './content/index.ts';
import { TopNav } from './components/TopNav.tsx';
import { LessonPanel } from './components/LessonPanel.tsx';
import { TeacherBoard } from './components/TeacherBoard.tsx';
import { BottomDock } from './components/BottomDock.tsx';
import { WhiteboardTool } from './types/whiteboard.ts';

export default function App() {
  // Navigation State
  const [activeUnitIndex, setActiveUnitIndex] = useState<number>(0);
  const [activeSubtopicIndex, setActiveSubtopicIndex] = useState<number>(0);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Viewport & Display Settings
  const [textSize, setTextSize] = useState<'compact' | 'normal' | 'large'>('compact');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [animationSpeed, setAnimationSpeed] = useState<'normal' | 'fast' | 'off'>('normal');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Whiteboard State
  const [activeTool, setActiveTool] = useState<WhiteboardTool>('pen');
  const [activeColor, setActiveColor] = useState<string>('#0F1E36');
  const [activeWidth, setActiveWidth] = useState<number>(4);
  const [canUndo, setCanUndo] = useState<boolean>(false);
  const [canRedo, setCanRedo] = useState<boolean>(false);
  const [undoTrigger, setUndoTrigger] = useState<number>(0);
  const [redoTrigger, setRedoTrigger] = useState<number>(0);
  const [clearTrigger, setClearTrigger] = useState<number>(0);

  // Active curriculum data
  const currentUnit = allUnits[activeUnitIndex] || allUnits[0];
  const currentSubtopic =
    currentUnit.subtopics[activeSubtopicIndex] || currentUnit.subtopics[0];
  const steps = currentSubtopic.steps;
  const currentStep = steps[activeStepIndex] || steps[0];

  // Unique slide key for anchoring teacher board strokes
  const slideKey = `${currentUnit.id}_${currentSubtopic.id}_step_${activeStepIndex}`;

  // Unit / Subtopic selection handlers
  const handleSelectUnit = (unitIdx: number) => {
    setActiveUnitIndex(unitIdx);
    setActiveSubtopicIndex(0);
    setActiveStepIndex(0);
  };

  const handleSelectSubtopic = (subtopicIdx: number) => {
    setActiveSubtopicIndex(subtopicIdx);
    setActiveStepIndex(0);
  };

  const handleSelectStep = (stepIdx: number) => {
    if (stepIdx >= 0 && stepIdx < steps.length) {
      setActiveStepIndex(stepIdx);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex((prev) => prev - 1);
    } else if (activeSubtopicIndex > 0) {
      // Go to last step of previous subtopic
      const prevSubtopicIdx = activeSubtopicIndex - 1;
      const prevSubtopic = currentUnit.subtopics[prevSubtopicIdx];
      setActiveSubtopicIndex(prevSubtopicIdx);
      setActiveStepIndex(prevSubtopic.steps.length - 1);
    }
  };

  const handleNextStep = () => {
    if (activeStepIndex < steps.length - 1) {
      setActiveStepIndex((prev) => prev + 1);
    } else if (activeSubtopicIndex < currentUnit.subtopics.length - 1) {
      // Go to first step of next subtopic
      setActiveSubtopicIndex((prev) => prev + 1);
      setActiveStepIndex(0);
    }
  };

  // Zoom handlers
  const handleZoomIn = () => setZoomLevel((z) => Math.min(150, z + 10));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(70, z - 10));
  const handleResetZoom = () => setZoomLevel(100);

  // Animation speed toggle
  const handleAnimationSpeedToggle = () => {
    setAnimationSpeed((curr) => {
      if (curr === 'normal') return 'fast';
      if (curr === 'fast') return 'off';
      return 'normal';
    });
  };

  // Fullscreen toggle
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextStep();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevStep();
      } else if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) {
        e.preventDefault();
        if (e.shiftKey) {
          setRedoTrigger((c) => c + 1);
        } else {
          setUndoTrigger((c) => c + 1);
        }
      } else if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || e.key === 'Y')) {
        e.preventDefault();
        setRedoTrigger((c) => c + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStepIndex, activeSubtopicIndex, currentUnit.subtopics]);

  const handleUndoRedoUpdate = useCallback((canU: boolean, canR: boolean) => {
    setCanUndo(canU);
    setCanRedo(canR);
  }, []);

  return (
    <div className="flex flex-col h-[100dvh] w-screen overflow-hidden bg-[#FAF8F3] text-[#0F1E36]">
      {/* Top Navigation Bar */}
      <TopNav
        units={allUnits}
        activeUnitIndex={activeUnitIndex}
        activeSubtopicIndex={activeSubtopicIndex}
        onSelectUnit={handleSelectUnit}
        onSelectSubtopic={handleSelectSubtopic}
        textSize={textSize}
        onTextSizeChange={setTextSize}
        zoomLevel={zoomLevel}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={handleResetZoom}
        animationSpeed={animationSpeed}
        onAnimationSpeedToggle={handleAnimationSpeedToggle}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Main 50/50 Split Viewport Area (Zero overall scroll) */}
      <main className="flex-1 w-full min-h-0 p-2 sm:p-2.5 overflow-hidden">
        <div
          className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2.5 transition-transform duration-150 origin-top-left"
          style={{
            transform: zoomLevel !== 100 ? `scale(${zoomLevel / 100})` : 'none',
            transformOrigin: 'center center',
            width: zoomLevel !== 100 ? `${(100 / zoomLevel) * 100}%` : '100%',
            height: zoomLevel !== 100 ? `${(100 / zoomLevel) * 100}%` : '100%',
          }}
        >
          {/* Left Side: Lesson Material Panel */}
          <div className="h-full min-h-0 overflow-hidden">
            <LessonPanel
              step={currentStep}
              textSize={textSize}
              animationSpeed={animationSpeed}
            />
          </div>

          {/* Right Side: Teacher's Board & Scratchpad */}
          <div className="h-full min-h-0 overflow-hidden">
            <TeacherBoard
              slideKey={slideKey}
              activeTool={activeTool}
              activeColor={activeColor}
              activeWidth={activeWidth}
              onUndoRedoUpdate={handleUndoRedoUpdate}
              undoTrigger={undoTrigger}
              redoTrigger={redoTrigger}
              clearTrigger={clearTrigger}
            />
          </div>
        </div>
      </main>

      {/* Bottom Tool Dock */}
      <BottomDock
        activeTool={activeTool}
        onSelectTool={setActiveTool}
        activeColor={activeColor}
        onSelectColor={setActiveColor}
        activeWidth={activeWidth}
        onSelectWidth={setActiveWidth}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={() => setUndoTrigger((c) => c + 1)}
        onRedo={() => setRedoTrigger((c) => c + 1)}
        onClear={() => setClearTrigger((c) => c + 1)}
        steps={steps}
        currentStepIndex={activeStepIndex}
        onSelectStep={handleSelectStep}
        onPrevStep={handlePrevStep}
        onNextStep={handleNextStep}
      />
    </div>
  );
}
