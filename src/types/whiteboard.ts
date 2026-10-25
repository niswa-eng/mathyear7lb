/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type WhiteboardTool =
  | 'select'
  | 'pen'
  | 'highlighter'
  | 'eraser'
  | 'line'
  | 'rect'
  | 'circle'
  | 'ruler'
  | 'dashed';

export type GridType = 'math_grid' | 'lined' | 'dots' | 'plain' | 'axes';

export interface Point {
  x: number;
  y: number;
}

export interface Stroke {
  tool: WhiteboardTool;
  color: string;
  width: number;
  points: Point[];
}

export interface WhiteboardState {
  tool: WhiteboardTool;
  color: string;
  width: number;
  gridType: GridType;
  strokes: Stroke[];
  undoStack: Stroke[][];
  redoStack: Stroke[][];
}
