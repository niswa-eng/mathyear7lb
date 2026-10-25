/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  Grid,
  AlignJustify,
  MoreHorizontal,
  Square,
  Crosshair,
  Trash2,
  Download,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { WhiteboardTool, GridType, Stroke, Point } from '../types/whiteboard.ts';

interface TeacherBoardProps {
  slideKey: string;
  activeTool: WhiteboardTool;
  activeColor: string;
  activeWidth: number;
  onUndoRedoUpdate?: (canUndo: boolean, canRedo: boolean) => void;
  // External triggers from bottom dock
  undoTrigger?: number;
  redoTrigger?: number;
  clearTrigger?: number;
}

export const TeacherBoard: React.FC<TeacherBoardProps> = ({
  slideKey,
  activeTool,
  activeColor,
  activeWidth,
  onUndoRedoUpdate,
  undoTrigger,
  redoTrigger,
  clearTrigger,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [gridType, setGridType] = useState<GridType>('math_grid');
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [history, setHistory] = useState<Stroke[][]>([]);
  const [redoHistory, setRedoHistory] = useState<Stroke[][]>([]);
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);
  const [rulerLength, setRulerLength] = useState<number | null>(null);

  const isDrawingRef = useRef<boolean>(false);
  const currentPointsRef = useRef<Point[]>([]);

  // Load strokes from localStorage when slideKey changes
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`wb_${slideKey}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setStrokes(parsed);
          setHistory([]);
          setRedoHistory([]);
          return;
        }
      }
    } catch {
      // ignore
    }
    setStrokes([]);
    setHistory([]);
    setRedoHistory([]);
  }, [slideKey]);

  // Save strokes to localStorage
  const saveStrokes = useCallback((newStrokes: Stroke[]) => {
    try {
      localStorage.setItem(`wb_${slideKey}`, JSON.stringify(newStrokes));
    } catch {
      // ignore
    }
  }, [slideKey]);

  // Update undo/redo availability to parent
  useEffect(() => {
    onUndoRedoUpdate?.(history.length > 0, redoHistory.length > 0);
  }, [history.length, redoHistory.length, onUndoRedoUpdate]);

  // Handle external Undo trigger
  useEffect(() => {
    if (undoTrigger && undoTrigger > 0) {
      handleUndo();
    }
  }, [undoTrigger]);

  // Handle external Redo trigger
  useEffect(() => {
    if (redoTrigger && redoTrigger > 0) {
      handleRedo();
    }
  }, [redoTrigger]);

  // Handle external Clear trigger
  useEffect(() => {
    if (clearTrigger && clearTrigger > 0) {
      setShowClearConfirm(true);
    }
  }, [clearTrigger]);

  const handleUndo = () => {
    if (history.length === 0) return;
    const previous = history[history.length - 1];
    setRedoHistory((prev) => [...prev, strokes]);
    setHistory((prev) => prev.slice(0, -1));
    setStrokes(previous);
    saveStrokes(previous);
  };

  const handleRedo = () => {
    if (redoHistory.length === 0) return;
    const next = redoHistory[redoHistory.length - 1];
    setHistory((prev) => [...prev, strokes]);
    setRedoHistory((prev) => prev.slice(0, -1));
    setStrokes(next);
    saveStrokes(next);
  };

  const handleConfirmClear = () => {
    if (strokes.length > 0) {
      setHistory((prev) => [...prev, strokes]);
      setRedoHistory([]);
      setStrokes([]);
      saveStrokes([]);
    }
    setShowClearConfirm(false);
  };

  // Redraw canvas content
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // If grid is 'axes', draw coordinate axes natively
    if (gridType === 'axes') {
      ctx.save();
      const centerX = width / 2;
      const centerY = height / 2;
      const gridSpacing = 28;

      ctx.strokeStyle = '#E2E8F0';
      ctx.lineWidth = 1;
      // Grid lines
      for (let x = centerX % gridSpacing; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = centerY % gridSpacing; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // X and Y main axes
      ctx.strokeStyle = '#0F1E36';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();

      // Tick marks and labels
      ctx.fillStyle = '#64748B';
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.textAlign = 'center';

      let stepNum = 1;
      for (let x = centerX + gridSpacing; x < width - 10; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, centerY - 4);
        ctx.lineTo(x, centerY + 4);
        ctx.stroke();
        if (stepNum % 2 === 0) ctx.fillText(String(stepNum), x, centerY + 14);
        stepNum++;
      }
      stepNum = -1;
      for (let x = centerX - gridSpacing; x > 10; x -= gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, centerY - 4);
        ctx.lineTo(x, centerY + 4);
        ctx.stroke();
        if (Math.abs(stepNum) % 2 === 0) ctx.fillText(String(stepNum), x, centerY + 14);
        stepNum--;
      }
      stepNum = 1;
      ctx.textAlign = 'right';
      for (let y = centerY - gridSpacing; y > 10; y -= gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(centerX - 4, y);
        ctx.lineTo(centerX + 4, y);
        ctx.stroke();
        if (stepNum % 2 === 0) ctx.fillText(String(stepNum), centerX - 6, y + 3);
        stepNum++;
      }
      stepNum = -1;
      for (let y = centerY + gridSpacing; y < height - 10; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(centerX - 4, y);
        ctx.lineTo(centerX + 4, y);
        ctx.stroke();
        if (Math.abs(stepNum) % 2 === 0) ctx.fillText(String(stepNum), centerX - 6, y + 3);
        stepNum--;
      }

      // Axis labels
      ctx.fillStyle = '#0F1E36';
      ctx.font = 'bold 12px Plus Jakarta Sans, sans-serif';
      ctx.fillText('x', width - 12, centerY - 8);
      ctx.fillText('y', centerX + 12, 16);
      ctx.restore();
    }

    // Render strokes
    for (const stroke of strokes) {
      if (!stroke.points || stroke.points.length === 0) continue;
      drawStroke(ctx, stroke);
    }
  }, [strokes, gridType]);

  const drawStroke = (ctx: CanvasRenderingContext2D, stroke: Stroke) => {
    const { tool, color, width, points } = stroke;
    if (points.length === 0) return;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = width * 4;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
    } else if (tool === 'highlighter') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.35;
      ctx.strokeStyle = color;
      ctx.lineWidth = width * 3.5;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
    } else if (tool === 'line' || tool === 'ruler') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      const start = points[0];
      const end = points[points.length - 1];
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();

      if (tool === 'ruler') {
        // Draw tick marks along ruler line
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const dist = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        const tickSpacing = 20;
        const tickCount = Math.floor(dist / tickSpacing);

        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        for (let i = 1; i <= tickCount; i++) {
          const t = (i * tickSpacing) / dist;
          const px = start.x + dx * t;
          const py = start.y + dy * t;
          const nx = Math.cos(angle + Math.PI / 2) * 5;
          const ny = Math.sin(angle + Math.PI / 2) * 5;
          ctx.beginPath();
          ctx.moveTo(px - nx, py - ny);
          ctx.lineTo(px + nx, py + ny);
          ctx.stroke();
        }
      }
    } else if (tool === 'dashed') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.setLineDash([8, 6]);
      const start = points[0];
      const end = points[points.length - 1];
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    } else if (tool === 'rect') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      const start = points[0];
      const end = points[points.length - 1];
      ctx.strokeRect(start.x, start.y, end.x - start.x, end.y - start.y);
    } else if (tool === 'circle') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      const start = points[0];
      const end = points[points.length - 1];
      const radiusX = Math.abs(end.x - start.x) / 2;
      const radiusY = Math.abs(end.y - start.y) / 2;
      const centerX = Math.min(start.x, end.x) + radiusX;
      const centerY = Math.min(start.y, end.y) + radiusY;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      // Default: pen
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
    }

    ctx.restore();
  };

  // Resize canvas when container size changes
  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;

      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      redrawCanvas();
    };

    handleResize();

    const observer = new ResizeObserver(() => {
      handleResize();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [redrawCanvas]);

  // Pointer event handlers with palm rejection
  const getCanvasCoords = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (activeTool === 'select') return;

    // Palm rejection: if browser provides contact geometry, ignore very large contact patches (palms)
    if (e.width > 40 && e.height > 40 && e.pointerType === 'touch') {
      return;
    }

    // Capture pointer
    e.currentTarget.setPointerCapture(e.pointerId);
    isDrawingRef.current = true;
    const pt = getCanvasCoords(e);
    currentPointsRef.current = [pt];

    if (activeTool === 'ruler') {
      setRulerLength(0);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const pt = getCanvasCoords(e);
    currentPointsRef.current.push(pt);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // For tools that need clean shape preview (line, rect, circle, ruler, dashed)
    if (['line', 'rect', 'circle', 'ruler', 'dashed'].includes(activeTool)) {
      redrawCanvas();
      const previewStroke: Stroke = {
        tool: activeTool,
        color: activeColor,
        width: activeWidth,
        points: currentPointsRef.current,
      };
      drawStroke(ctx, previewStroke);

      if (activeTool === 'ruler') {
        const start = currentPointsRef.current[0];
        const distPx = Math.hypot(pt.x - start.x, pt.y - start.y);
        // Approx 1 cm ≈ 38px
        const cm = (distPx / 38).toFixed(1);
        setRulerLength(Number(cm));
      }
    } else {
      // Freehand pen, highlighter, eraser: draw incrementally
      const pts = currentPointsRef.current;
      if (pts.length >= 2) {
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        if (activeTool === 'eraser') {
          ctx.globalCompositeOperation = 'destination-out';
          ctx.lineWidth = activeWidth * 4;
        } else if (activeTool === 'highlighter') {
          ctx.globalCompositeOperation = 'source-over';
          ctx.globalAlpha = 0.35;
          ctx.strokeStyle = activeColor;
          ctx.lineWidth = activeWidth * 3.5;
        } else {
          ctx.globalCompositeOperation = 'source-over';
          ctx.strokeStyle = activeColor;
          ctx.lineWidth = activeWidth;
        }
        ctx.beginPath();
        ctx.moveTo(pts[pts.length - 2].x, pts[pts.length - 2].y);
        ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
        ctx.stroke();
        ctx.restore();
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    setRulerLength(null);

    if (currentPointsRef.current.length > 0) {
      const newStroke: Stroke = {
        tool: activeTool,
        color: activeColor,
        width: activeWidth,
        points: [...currentPointsRef.current],
      };

      setHistory((prev) => [...prev, strokes]);
      setRedoHistory([]);
      const updated = [...strokes, newStroke];
      setStrokes(updated);
      saveStrokes(updated);
    }
    currentPointsRef.current = [];
    redrawCanvas();
  };

  // Export board snapshot to PNG
  const handleExportPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create an offscreen canvas to combine background grid + strokes
    const offscreen = document.createElement('canvas');
    offscreen.width = canvas.width;
    offscreen.height = canvas.height;
    const offCtx = offscreen.getContext('2d');
    if (!offCtx) return;

    // Fill white background
    offCtx.fillStyle = '#FFFFFF';
    offCtx.fillRect(0, 0, offscreen.width, offscreen.height);

    // Draw active canvas content
    offCtx.drawImage(canvas, 0, 0);

    const link = document.createElement('a');
    link.download = `teacher-board-${slideKey}.png`;
    link.href = offscreen.toDataURL('image/png');
    link.click();
  };

  // Compute CSS class for paper grid pattern
  const getGridBgClass = () => {
    switch (gridType) {
      case 'math_grid':
        return 'bg-math-grid bg-[#FFFFFF]';
      case 'lined':
        return 'bg-ruled-paper bg-[#FCFCFD]';
      case 'dots':
        return 'bg-dot-grid bg-[#FFFFFF]';
      case 'plain':
        return 'bg-[#FFFFFF]';
      case 'axes':
        return 'bg-[#FFFFFF]';
      default:
        return 'bg-math-grid bg-[#FFFFFF]';
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border border-[#E3DED4] rounded-2xl shadow-xs overflow-hidden relative">
      {/* Board Top Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-[#E3DED4] bg-[#FAF8F3] shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
          <h2 className="text-xs font-bold tracking-tight text-[#0F1E36] uppercase font-sans">
            Teacher's Board & Scratchpad
          </h2>
          <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
            (Saved for this slide)
          </span>
        </div>

        {/* Paper Grid Switcher & Utilities */}
        <div className="flex items-center gap-1">
          {/* Paper Grid Switcher */}
          <div className="flex items-center bg-white border border-[#E3DED4] rounded-lg p-0.5 text-xs">
            <button
              onClick={() => setGridType('math_grid')}
              className={`p-1 rounded transition-colors ${
                gridType === 'math_grid'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Square Math Grid"
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setGridType('lined')}
              className={`p-1 rounded transition-colors ${
                gridType === 'lined'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Lined / Ruled Paper"
            >
              <AlignJustify className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setGridType('dots')}
              className={`p-1 rounded transition-colors ${
                gridType === 'dots'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Dot Grid"
            >
              <MoreHorizontal className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setGridType('axes')}
              className={`p-1 rounded transition-colors ${
                gridType === 'axes'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Coordinate Graph Axes"
            >
              <Crosshair className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setGridType('plain')}
              className={`p-1 rounded transition-colors ${
                gridType === 'plain'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Plain White Board"
            >
              <Square className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Export PNG */}
          <button
            onClick={handleExportPNG}
            className="p-1.5 text-slate-600 hover:text-[#0F1E36] hover:bg-slate-100 rounded-lg transition-colors"
            title="Download Canvas Snapshot (PNG)"
          >
            <Download className="w-3.5 h-3.5" />
          </button>

          {/* Quick Clear Notes */}
          <button
            onClick={() => setShowClearConfirm(true)}
            disabled={strokes.length === 0}
            className={`p-1.5 rounded-lg transition-colors ${
              strokes.length > 0
                ? 'text-red-600 hover:text-red-700 hover:bg-red-50'
                : 'text-slate-300 cursor-not-allowed'
            }`}
            title="Clear Notes for this slide"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Board Canvas Area */}
      <div
        ref={containerRef}
        className={`flex-1 w-full h-full relative cursor-crosshair ${getGridBgClass()}`}
        style={{ touchAction: activeTool === 'select' ? 'auto' : 'none' }}
      >
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="absolute inset-0 w-full h-full"
        />

        {/* Ruler live measurement indicator */}
        {rulerLength !== null && (
          <div className="absolute bottom-4 right-4 bg-[#0F1E36] text-white px-3 py-1 rounded-full text-xs font-mono font-semibold shadow-md pointer-events-none">
            Length: {rulerLength} cm
          </div>
        )}

        {/* Empty state hint when no strokes */}
        {strokes.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="text-center">
              <p className="text-sm font-medium text-slate-500">
                Write notes, calculations, or draw diagrams here
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Strokes are automatically saved for this slide
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Clear Confirmation Modal */}
      {showClearConfirm && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-2xs flex items-center justify-center z-30 p-4">
          <div className="bg-white rounded-xl shadow-xl border border-[#E3DED4] p-4 max-w-xs w-full text-center">
            <div className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-2">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#0F1E36]">Clear Teacher's Board?</h3>
            <p className="text-xs text-slate-600 mt-1 mb-4">
              This will erase all notes on this slide. You can undo if needed.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmClear}
                className="flex-1 px-3 py-1.5 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Yes, Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
