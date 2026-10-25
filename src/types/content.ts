/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type StepType =
  | 'concept'
  | 'worked_example'
  | 'common_mistake'
  | 'exercise_level_1'
  | 'exercise_level_2'
  | 'exercise_level_3'
  | 'test_part_a'
  | 'test_part_b'
  | 'test_part_c';

export interface KeyTerm {
  term: string;
  definition: string;
  example?: string;
}

export interface SolutionStep {
  stepNumber: number;
  label: string;
  content: string;
  mathFormula?: string;
  note?: string;
}

export interface WorkedExampleData {
  problem: string;
  problemMath?: string;
  context?: string;
  solutionSteps: SolutionStep[];
  finalAnswer: string;
}

export interface CommonMistakeData {
  mistakeTitle: string;
  wrongWay: string;
  whyWrong: string;
  correctWay: string;
  proTip: string;
  memoryHook?: string;
}

export type WidgetType =
  | 'number_line'
  | 'fraction_bar'
  | 'balance_scale'
  | 'protractor_angle'
  | 'coordinate_grid'
  | 'factor_array';

export interface InteractiveWidgetConfig {
  type: WidgetType;
  title: string;
  description?: string;
  initialParams?: Record<string, any>;
}

export interface PracticeQuestion {
  id: string;
  number: 1 | 2 | 3;
  question: string;
  mathFormula?: string;
  context?: string;
  hint?: string;
  answer: string;
  explanation: string;
}

export type Block =
  | { type: 'text'; content: string }
  | { type: 'latex'; latex: string; displayMode?: boolean }
  | { type: 'analogy'; title: string; scenario: string; takeaway: string }
  | { type: 'key_terms'; terms: KeyTerm[] }
  | { type: 'worked_example'; example: WorkedExampleData }
  | { type: 'common_mistake'; mistake: CommonMistakeData }
  | { type: 'rule_box'; title: string; rule: string; mathFormula?: string; tips?: string[] };

export interface Step {
  id: string;
  stepNumber: number;
  stepType: StepType;
  title: string;
  badge: string;
  subtitle?: string;
  blocks: Block[];
  questions?: PracticeQuestion[];
  widget?: InteractiveWidgetConfig;
}

export interface Subtopic {
  id: string;
  subtopicNumber: string;
  title: string;
  type: 'lesson' | 'chapterTest';
  steps: Step[];
}

export interface Unit {
  id: string;
  unitNumber: number;
  title: string;
  learningObjectives: string[];
  subtopics: Subtopic[];
}
