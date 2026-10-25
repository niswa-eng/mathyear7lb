/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Step, Subtopic } from '../types/content.ts';

export function createPlaceholderSubtopic(
  subtopicNumber: string,
  title: string,
  isTest = false
): Subtopic {
  if (isTest) {
    const steps: Step[] = [
      {
        id: `${subtopicNumber}-1`,
        stepNumber: 1,
        stepType: 'test_part_a',
        title: `${title} - Part A: Core Recall`,
        badge: 'Test Part A',
        blocks: [
          {
            type: 'text',
            content: `End-of-chapter Test Part A: Mixed core recall questions covering the whole chapter. Content coming in the upcoming phase for this unit.`,
          },
        ],
        questions: [
          {
            id: `${subtopicNumber}-q1`,
            number: 1,
            question: `Core recall question 1 for ${title} will appear here.`,
            answer: 'Pending Phase Release',
            explanation: 'Detailed step-by-step solution will be revealed here.',
          },
          {
            id: `${subtopicNumber}-q2`,
            number: 2,
            question: `Core recall question 2 for ${title} will appear here.`,
            answer: 'Pending Phase Release',
            explanation: 'Detailed step-by-step solution will be revealed here.',
          },
          {
            id: `${subtopicNumber}-q3`,
            number: 3,
            question: `Core recall question 3 for ${title} will appear here.`,
            answer: 'Pending Phase Release',
            explanation: 'Detailed step-by-step solution will be revealed here.',
          },
        ],
      },
      {
        id: `${subtopicNumber}-2`,
        stepNumber: 2,
        stepType: 'test_part_b',
        title: `${title} - Part B: Real-World Problems`,
        badge: 'Test Part B',
        blocks: [
          {
            type: 'text',
            content: `End-of-chapter Test Part B: Real-world application scenarios covering the whole chapter. Content coming in the upcoming phase for this unit.`,
          },
        ],
        questions: [
          {
            id: `${subtopicNumber}-q4`,
            number: 1,
            question: `Real-world application question 1 for ${title} will appear here.`,
            answer: 'Pending Phase Release',
            explanation: 'Detailed step-by-step solution will be revealed here.',
          },
          {
            id: `${subtopicNumber}-q5`,
            number: 2,
            question: `Real-world application question 2 for ${title} will appear here.`,
            answer: 'Pending Phase Release',
            explanation: 'Detailed step-by-step solution will be revealed here.',
          },
          {
            id: `${subtopicNumber}-q6`,
            number: 3,
            question: `Real-world application question 3 for ${title} will appear here.`,
            answer: 'Pending Phase Release',
            explanation: 'Detailed step-by-step solution will be revealed here.',
          },
        ],
      },
      {
        id: `${subtopicNumber}-3`,
        stepNumber: 3,
        stepType: 'test_part_c',
        title: `${title} - Part C: Reasoning & Challenge`,
        badge: 'Test Part C',
        blocks: [
          {
            type: 'text',
            content: `End-of-chapter Test Part C: Reasoning, proof, and challenge problems covering the whole chapter. Content coming in the upcoming phase for this unit.`,
          },
        ],
        questions: [
          {
            id: `${subtopicNumber}-q7`,
            number: 1,
            question: `Reasoning challenge question 1 for ${title} will appear here.`,
            answer: 'Pending Phase Release',
            explanation: 'Detailed step-by-step solution will be revealed here.',
          },
          {
            id: `${subtopicNumber}-q8`,
            number: 2,
            question: `Reasoning challenge question 2 for ${title} will appear here.`,
            answer: 'Pending Phase Release',
            explanation: 'Detailed step-by-step solution will be revealed here.',
          },
          {
            id: `${subtopicNumber}-q9`,
            number: 3,
            question: `Reasoning challenge question 3 for ${title} will appear here.`,
            answer: 'Pending Phase Release',
            explanation: 'Detailed step-by-step solution will be revealed here.',
          },
        ],
      },
    ];

    return {
      id: `${subtopicNumber}.test`,
      subtopicNumber: 'Test',
      title,
      type: 'chapterTest',
      steps,
    };
  }

  // Regular lesson: 6 slides
  const steps: Step[] = [
    {
      id: `${subtopicNumber}-1`,
      stepNumber: 1,
      stepType: 'concept',
      title: `${title}: Real-Life Concept & Intuition`,
      badge: 'Real-Life Concept',
      blocks: [
        {
          type: 'analogy',
          title: `Real-World Intuition for ${title}`,
          scenario: `In Cambridge Stage 7 Mathematics, "${title}" connects deeply to everyday patterns, measurement, and problem-solving. Detailed full lesson content is arriving in the next phase!`,
          takeaway: `Mastering ${title} prepares you for algebraic thinking, geometric reasoning, and practical data analysis.`,
        },
      ],
    },
    {
      id: `${subtopicNumber}-2`,
      stepNumber: 2,
      stepType: 'worked_example',
      title: `${title}: Step-by-Step Worked Example`,
      badge: 'Worked Example',
      blocks: [
        {
          type: 'worked_example',
          example: {
            problem: `Sample worked problem demonstrating core methodology for ${title}.`,
            context: 'Step-by-Step Mastery',
            solutionSteps: [
              {
                stepNumber: 1,
                label: 'Analyze the given values',
                content: 'Identify the known quantities and mathematical relationships.',
              },
              {
                stepNumber: 2,
                label: 'Apply the stage rule',
                content: 'Execute calculation using standard Cambridge Stage 7 techniques.',
              },
            ],
            finalAnswer: 'Detailed solution content coming soon in next phase',
          },
        },
      ],
    },
    {
      id: `${subtopicNumber}-3`,
      stepNumber: 3,
      stepType: 'common_mistake',
      title: `${title}: Common Pitfall & Pro Tip`,
      badge: 'Common Mistake & Pro Tip',
      blocks: [
        {
          type: 'common_mistake',
          mistake: {
            mistakeTitle: `Common Student Mistake in ${title}`,
            wrongWay: 'Rushing calculations or ignoring unit conversions',
            whyWrong: 'Overlooking intermediate signs, dimensions, or place value',
            correctWay: 'Follow systematic verification on the Teacher\'s Board',
            proTip: 'Always check if the answer makes sense in the real-world context!',
            memoryHook: 'Check units and estimate first!',
          },
        },
      ],
    },
    {
      id: `${subtopicNumber}-4`,
      stepNumber: 4,
      stepType: 'exercise_level_1',
      title: `${title}: Level 1 (Basic Recall)`,
      badge: 'Exercise: Level 1',
      blocks: [
        {
          type: 'text',
          content: `Practice basic core techniques for ${title}. Solve all 3 questions on the Teacher\'s Board.`,
        },
      ],
      questions: [
        {
          id: `${subtopicNumber}-ex1-q1`,
          number: 1,
          question: `Level 1 Drill Question 1 for ${title}.`,
          answer: 'Pending Phase Release',
          explanation: 'Answer explanation will be displayed here.',
        },
        {
          id: `${subtopicNumber}-ex1-q2`,
          number: 2,
          question: `Level 1 Drill Question 2 for ${title}.`,
          answer: 'Pending Phase Release',
          explanation: 'Answer explanation will be displayed here.',
        },
        {
          id: `${subtopicNumber}-ex1-q3`,
          number: 3,
          question: `Level 1 Drill Question 3 for ${title}.`,
          answer: 'Pending Phase Release',
          explanation: 'Answer explanation will be displayed here.',
        },
      ],
    },
    {
      id: `${subtopicNumber}-5`,
      stepNumber: 5,
      stepType: 'exercise_level_2',
      title: `${title}: Level 2 (Real-World Scenarios)`,
      badge: 'Exercise: Level 2',
      blocks: [
        {
          type: 'text',
          content: `Real-world word problems applying ${title} to everyday scenarios.`,
        },
      ],
      questions: [
        {
          id: `${subtopicNumber}-ex2-q1`,
          number: 1,
          context: 'Real-World Scenario A',
          question: `Level 2 Applied Problem 1 for ${title}.`,
          answer: 'Pending Phase Release',
          explanation: 'Answer explanation will be displayed here.',
        },
        {
          id: `${subtopicNumber}-ex2-q2`,
          number: 2,
          context: 'Real-World Scenario B',
          question: `Level 2 Applied Problem 2 for ${title}.`,
          answer: 'Pending Phase Release',
          explanation: 'Answer explanation will be displayed here.',
        },
        {
          id: `${subtopicNumber}-ex2-q3`,
          number: 3,
          context: 'Real-World Scenario C',
          question: `Level 2 Applied Problem 3 for ${title}.`,
          answer: 'Pending Phase Release',
          explanation: 'Answer explanation will be displayed here.',
        },
      ],
    },
    {
      id: `${subtopicNumber}-6`,
      stepNumber: 6,
      stepType: 'exercise_level_3',
      title: `${title}: Level 3 (Challenge & Problem Solving)`,
      badge: 'Exercise: Level 3',
      blocks: [
        {
          type: 'text',
          content: `Higher-order reasoning and non-routine problem solving for ${title}.`,
        },
      ],
      questions: [
        {
          id: `${subtopicNumber}-ex3-q1`,
          number: 1,
          context: 'Mathematical Reasoning',
          question: `Level 3 Challenge Puzzle 1 for ${title}.`,
          answer: 'Pending Phase Release',
          explanation: 'Answer explanation will be displayed here.',
        },
        {
          id: `${subtopicNumber}-ex3-q2`,
          number: 2,
          context: 'Algebraic Proof / Multi-Step',
          question: `Level 3 Challenge Puzzle 2 for ${title}.`,
          answer: 'Pending Phase Release',
          explanation: 'Answer explanation will be displayed here.',
        },
        {
          id: `${subtopicNumber}-ex3-q3`,
          number: 3,
          context: 'Non-Routine Investigation',
          question: `Level 3 Challenge Puzzle 3 for ${title}.`,
          answer: 'Pending Phase Release',
          explanation: 'Answer explanation will be displayed here.',
        },
      ],
    },
  ];

  return {
    id: subtopicNumber,
    subtopicNumber,
    title,
    type: 'lesson',
    steps,
  };
}
