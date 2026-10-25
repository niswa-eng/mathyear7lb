/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  CheckCircle,
  HelpCircle,
  Eye,
  EyeOff,
  ChevronRight,
  Lightbulb,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';
import { Step, PracticeQuestion, SolutionStep } from '../types/content.ts';
import { MathView, FormattedMathText } from './MathView.tsx';
import { InteractiveWidget } from './widgets/InteractiveWidget.tsx';

interface LessonPanelProps {
  step: Step;
  textSize: 'compact' | 'normal' | 'large';
  animationSpeed: 'normal' | 'fast' | 'off';
}

export const LessonPanel: React.FC<LessonPanelProps> = ({
  step,
  textSize,
}) => {
  // Revealable worked example step index
  const [revealedSolutionSteps, setRevealedSolutionSteps] = useState<number>(1);

  // Exercise slides: individual question answer reveal states
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  // Reset local state when step changes
  useEffect(() => {
    setRevealedSolutionSteps(1);
    setRevealedAnswers({});
  }, [step.id]);

  const toggleAnswer = (questionId: string) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const areAllRevealed =
    step.questions &&
    step.questions.length > 0 &&
    step.questions.every((q) => revealedAnswers[q.id]);

  const toggleAllAnswers = () => {
    if (!step.questions) return;
    if (areAllRevealed) {
      setRevealedAnswers({});
    } else {
      const all: Record<string, boolean> = {};
      step.questions.forEach((q) => {
        all[q.id] = true;
      });
      setRevealedAnswers(all);
    }
  };

  // Text scaling classes
  const fontSizes = {
    compact: {
      body: 'text-xs',
      title: 'text-base',
      heading: 'text-sm',
      subtext: 'text-[11px]',
    },
    normal: {
      body: 'text-sm',
      title: 'text-lg',
      heading: 'text-base',
      subtext: 'text-xs',
    },
    large: {
      body: 'text-base',
      title: 'text-xl',
      heading: 'text-lg',
      subtext: 'text-sm',
    },
  }[textSize];

  // Helper badge color based on stepType
  const getBadgeStyle = () => {
    switch (step.stepType) {
      case 'concept':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'worked_example':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'common_mistake':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'exercise_level_1':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'exercise_level_2':
        return 'bg-violet-50 text-violet-700 border-violet-200';
      case 'exercise_level_3':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'test_part_a':
      case 'test_part_b':
      case 'test_part_c':
        return 'bg-slate-900 text-white border-slate-800';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border border-[#E3DED4] rounded-2xl shadow-xs overflow-hidden">
      {/* Header with Step Type Badge & Slide Title */}
      <div className="px-4 py-2.5 border-b border-[#E3DED4] bg-[#FAF8F3] shrink-0 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className={`px-2 py-0.5 text-xs font-semibold rounded-md border shrink-0 ${getBadgeStyle()}`}
          >
            {step.badge}
          </span>
          <h2
            className={`font-bold text-[#0F1E36] tracking-tight truncate ${fontSizes.title}`}
            title={step.title}
          >
            {step.title}
          </h2>
        </div>

        {/* Global Reveal All Answers button for Exercise / Test slides */}
        {step.questions && step.questions.length > 0 && (
          <button
            onClick={toggleAllAnswers}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg border transition-all flex items-center gap-1.5 shrink-0 ${
              areAllRevealed
                ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 shadow-2xs'
            }`}
          >
            {areAllRevealed ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>Hide All Answers</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Reveal All Answers</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Render Blocks */}
        {step.blocks.map((block, idx) => {
          if (block.type === 'text') {
            return (
              <div key={idx} className={`${fontSizes.body} text-slate-800 leading-relaxed`}>
                <FormattedMathText text={block.content} />
              </div>
            );
          }

          if (block.type === 'latex') {
            return (
              <div
                key={idx}
                className="my-3 p-3 bg-[#FAF8F3] border border-[#E3DED4] rounded-xl text-center overflow-x-auto"
              >
                <MathView math={block.latex} display={block.displayMode ?? true} />
              </div>
            );
          }

          if (block.type === 'analogy') {
            return (
              <div
                key={idx}
                className="p-3.5 bg-gradient-to-br from-amber-50/70 to-orange-50/40 border border-amber-200/80 rounded-xl"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    Everyday Analogy: {block.title}
                  </h3>
                </div>
                <p className={`${fontSizes.body} text-amber-950 mb-2 leading-relaxed`}>
                  <FormattedMathText text={block.scenario} />
                </p>
                <div className="pt-2 border-t border-amber-200/60 text-xs text-amber-900 font-medium">
                  <strong>Math Takeaway:</strong> <FormattedMathText text={block.takeaway} />
                </div>
              </div>
            );
          }

          if (block.type === 'key_terms') {
            return (
              <div key={idx} className="p-3 bg-[#FAF8F3] border border-[#E3DED4] rounded-xl space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F1E36] uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>Key Mathematical Terms</span>
                </div>
                <div className="grid gap-2">
                  {block.terms.map((item, tIdx) => (
                    <div
                      key={tIdx}
                      className="bg-white border border-[#E3DED4] p-2.5 rounded-lg text-xs"
                    >
                      <div className="font-bold text-blue-900 mb-0.5">{item.term}</div>
                      <div className="text-slate-700">
                        <FormattedMathText text={item.definition} />
                      </div>
                      {item.example && (
                        <div className="mt-1 pt-1 border-t border-slate-100 text-[11px] text-slate-500 font-mono">
                          Example: <FormattedMathText text={item.example} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          if (block.type === 'rule_box') {
            return (
              <div key={idx} className="p-3.5 bg-blue-50/60 border border-blue-200 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                    {block.title}
                  </h3>
                </div>
                <p className={`${fontSizes.body} text-blue-950 leading-relaxed font-medium`}>
                  <FormattedMathText text={block.rule} />
                </p>
                {block.mathFormula && (
                  <div className="p-2 bg-white rounded-lg border border-blue-200 text-center font-mono">
                    <MathView math={block.mathFormula} display />
                  </div>
                )}
                {block.tips && block.tips.length > 0 && (
                  <ul className="text-xs text-blue-900 list-disc list-inside space-y-1 pt-1">
                    {block.tips.map((tip, tipIdx) => (
                      <li key={tipIdx}>
                        <FormattedMathText text={tip} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          }

          if (block.type === 'worked_example') {
            const { example } = block;
            return (
              <div
                key={idx}
                className="border border-[#E3DED4] rounded-xl overflow-hidden bg-white shadow-2xs"
              >
                <div className="bg-[#FAF8F3] px-3.5 py-2 border-b border-[#E3DED4] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F1E36] uppercase tracking-wide">
                    Worked Problem
                  </span>
                  {example.context && (
                    <span className="text-[11px] text-slate-500 font-medium">
                      {example.context}
                    </span>
                  )}
                </div>

                <div className="p-3.5 space-y-3">
                  {/* Problem Statement */}
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                    <p className={`${fontSizes.body} font-medium text-slate-900`}>
                      <FormattedMathText text={example.problem} />
                    </p>
                    {example.problemMath && (
                      <div className="mt-2 text-center">
                        <MathView math={example.problemMath} display />
                      </div>
                    )}
                  </div>

                  {/* Step-by-Step Revealable Solution */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                      <span>Step-by-Step Solution:</span>
                      <span className="text-slate-400 font-mono">
                        Step {revealedSolutionSteps} of {example.solutionSteps.length}
                      </span>
                    </div>

                    {example.solutionSteps
                      .slice(0, revealedSolutionSteps)
                      .map((stepItem: SolutionStep) => (
                        <div
                          key={stepItem.stepNumber}
                          className="p-2.5 bg-[#FAF8F3] border border-[#E3DED4] rounded-lg text-xs space-y-1 transition-all"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                              {stepItem.stepNumber}
                            </span>
                            <span className="font-bold text-[#0F1E36]">{stepItem.label}</span>
                          </div>
                          <p className="text-slate-700 pl-7">
                            <FormattedMathText text={stepItem.content} />
                          </p>
                          {stepItem.mathFormula && (
                            <div className="pl-7 py-1 text-center font-mono">
                              <MathView math={stepItem.mathFormula} display />
                            </div>
                          )}
                          {stepItem.note && (
                            <p className="text-[11px] text-slate-500 italic pl-7">
                              Tip: <FormattedMathText text={stepItem.note} />
                            </p>
                          )}
                        </div>
                      ))}

                    {/* Reveal Next Step Button */}
                    {revealedSolutionSteps < example.solutionSteps.length && (
                      <button
                        onClick={() => setRevealedSolutionSteps((prev) => prev + 1)}
                        className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                        <span>Reveal Next Step ({revealedSolutionSteps + 1} / {example.solutionSteps.length})</span>
                      </button>
                    )}

                    {/* Final Answer Banner when all steps revealed */}
                    {revealedSolutionSteps >= example.solutionSteps.length && (
                      <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-xs">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div>
                          <span className="font-bold text-emerald-900">Final Answer: </span>
                          <span className="font-semibold text-emerald-950">
                            <FormattedMathText text={example.finalAnswer} />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }

          if (block.type === 'common_mistake') {
            const { mistake } = block;
            return (
              <div
                key={idx}
                className="border border-amber-200 rounded-xl overflow-hidden bg-white shadow-2xs space-y-3 p-3.5"
              >
                <div className="flex items-center gap-2 text-amber-800">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">
                    {mistake.mistakeTitle}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {/* Wrong Way */}
                  <div className="p-2.5 bg-red-50/80 border border-red-200 rounded-lg">
                    <span className="font-bold text-red-800 block mb-1">❌ Common Mistake:</span>
                    <p className="text-red-950">
                      <FormattedMathText text={mistake.wrongWay} />
                    </p>
                    <p className="text-[11px] text-red-700 mt-1 italic">
                      Why: <FormattedMathText text={mistake.whyWrong} />
                    </p>
                  </div>

                  {/* Correct Way */}
                  <div className="p-2.5 bg-emerald-50/80 border border-emerald-200 rounded-lg">
                    <span className="font-bold text-emerald-800 block mb-1">✅ Correct Method:</span>
                    <p className="text-emerald-950 font-medium">
                      <FormattedMathText text={mistake.correctWay} />
                    </p>
                  </div>
                </div>

                {/* Pro Tip & Memory Hook */}
                <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-xs space-y-1">
                  <div className="font-bold text-blue-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Teacher's Pro Tip</span>
                  </div>
                  <p className="text-blue-950 leading-relaxed">
                    <FormattedMathText text={mistake.proTip} />
                  </p>
                  {mistake.memoryHook && (
                    <p className="text-[11px] text-blue-800 font-semibold pt-1 border-t border-blue-200/60">
                      💡 Memory Hook: "{mistake.memoryHook}"
                    </p>
                  )}
                </div>
              </div>
            );
          }

          return null;
        })}

        {/* Embedded Interactive Math Widget */}
        {step.widget && (
          <div className="mt-2">
            <InteractiveWidget config={step.widget} />
          </div>
        )}

        {/* Dedicated 3-Question Exercise Slides (Directly displaying ALL 3 together) */}
        {step.questions && step.questions.length > 0 && (
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between pb-1 border-b border-[#E3DED4]">
              <span className="text-xs font-bold text-[#0F1E36] uppercase tracking-wide">
                Classroom Practice Questions (All 3 on screen)
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Work out on Teacher's Board & Check
              </span>
            </div>

            {step.questions.map((q: PracticeQuestion) => {
              const isRevealed = Boolean(revealedAnswers[q.id]);
              return (
                <div
                  key={q.id}
                  className="bg-white border border-[#E3DED4] rounded-xl p-3 shadow-2xs space-y-2 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2 flex-1">
                      <span className="w-6 h-6 rounded-md bg-[#0F1E36] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        [{q.number}]
                      </span>
                      <div className="flex-1">
                        {q.context && (
                          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block mb-0.5">
                            {q.context}
                          </span>
                        )}
                        <p className={`${fontSizes.body} font-medium text-slate-900 leading-relaxed`}>
                          <FormattedMathText text={q.question} />
                        </p>
                        {q.mathFormula && (
                          <div className="my-1.5 p-1.5 bg-[#FAF8F3] rounded text-center font-mono">
                            <MathView math={q.mathFormula} display />
                          </div>
                        )}
                        {q.hint && !isRevealed && (
                          <p className="text-[11px] text-slate-400 mt-1 italic flex items-center gap-1">
                            <HelpCircle className="w-3 h-3" />
                            <span>Hint: {q.hint}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => toggleAnswer(q.id)}
                      className={`px-2 py-1 text-xs font-medium rounded-md border transition-colors shrink-0 flex items-center gap-1 ${
                        isRevealed
                          ? 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                          : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                      }`}
                    >
                      {isRevealed ? (
                        <>
                          <EyeOff className="w-3 h-3" />
                          <span>Hide</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3 h-3" />
                          <span>Check Answer</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Revealed Answer Box */}
                  {isRevealed && (
                    <div className="mt-2 p-2.5 bg-emerald-50/90 border border-emerald-200 rounded-lg text-xs space-y-1 animate-in fade-in duration-150">
                      <div className="flex items-center gap-1.5 text-emerald-900 font-bold">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Answer: </span>
                        <span className="text-emerald-950 font-mono text-sm">
                          <FormattedMathText text={q.answer} />
                        </span>
                      </div>
                      <p className="text-slate-700 text-[11.5px] leading-relaxed pl-5">
                        <strong>Explanation:</strong> <FormattedMathText text={q.explanation} />
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
