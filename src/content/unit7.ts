/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit7: Unit = {
  id: 'unit-7',
  unitNumber: 7,
  title: 'Fractions',
  learningObjectives: [
    'Compare and order fractions and decimals.',
    'Add mixed numbers and simplify answers.',
    'Multiply and divide proper fractions.',
    'Simplify calculations involving fractions using arithmetic rules and order of operations.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 7.1 Ordering fractions
    // -------------------------------------------------------------------------
    {
      id: '7.1',
      subtopicNumber: '7.1',
      title: 'Ordering fractions',
      type: 'lesson',
      steps: [
        {
          id: '7.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Pizza Slices & Common Denominators',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Comparing Pizza Slices of Different Sizes',
              scenario:
                'If you eat $3$ slices of a pizza cut into $4$ equal pieces ($\\frac{3}{4}$), and your friend eats $5$ slices of a pizza cut into $8$ equal pieces ($\\frac{5}{8}$), who ate more? You cannot compare just $3$ and $5$ because eighths are smaller than quarters! To make a fair comparison, cut your pizza slices in half so both pizzas have eighths: $\\frac{3}{4} = \\frac{6}{8}$. Now $6$ eighths is clearly bigger than $5$ eighths!',
              takeaway:
                'To compare or order fractions with different denominators, convert them into equivalent fractions with a COMMON DENOMINATOR (the LCM of the denominators).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Numerator & Denominator',
                  definition: 'Numerator (top) tells you how many parts you have. Denominator (bottom) tells you how many equal parts the whole is divided into.',
                  example: 'In $\\frac{3}{7}$, $3$ is the numerator and $7$ is the denominator.',
                },
                {
                  term: 'Common Denominator',
                  definition: 'A shared multiple of the denominators of several fractions.',
                  example: 'For $\\frac{1}{3}$ and $\\frac{1}{4}$, a common denominator is $12$.',
                },
              ],
            },
            {
              type: 'rule_box',
              title: 'Steps to Order Fractions',
              rule: 'Three steps to compare any fractions:',
              tips: [
                'Step 1: Find the Lowest Common Multiple (LCM) of all the denominators.',
                'Step 2: Multiply top and bottom of each fraction to reach the common denominator.',
                'Step 3: Compare the top numerators from smallest to largest.',
              ],
            },
          ],
          widget: {
            type: 'fraction_bar',
            title: 'Interactive Fraction Wall & Bar',
          },
        },
        {
          id: '7.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Comparing Two Fractions with Different Denominators',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  '(a) Which fraction is larger: $\\dfrac{2}{3}$ or $\\dfrac{3}{5}$?\n(b) Write in ascending order (smallest first): $\\dfrac{1}{2},\\ \\dfrac{3}{4},\\ \\dfrac{5}{8},\\ \\dfrac{7}{12}$',
                context: 'Simplest Equivalent Fraction Strategy',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Find common denominator for 3 and 5',
                    content: 'LCM of 3 and 5 is 15. Convert both fractions:\n$\\dfrac{2 \\times 5}{3 \\times 5} = \\dfrac{10}{15}$\n$\\dfrac{3 \\times 3}{5 \\times 3} = \\dfrac{9}{15}$',
                    mathFormula: '\\frac{10}{15} > \\frac{9}{15} \\implies \\frac{2}{3}\\text{ is larger}',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Find common denominator for 2, 4, 8, and 12',
                    content: 'LCM of 2, 4, 8, and 12 is 24. Convert each fraction to 24ths:\n$\\frac{1}{2} = \\frac{12}{24},\\quad \\frac{3}{4} = \\frac{18}{24},\\quad \\frac{5}{8} = \\frac{15}{24},\\quad \\frac{7}{12} = \\frac{14}{24}$',
                    mathFormula: '\\frac{12}{24} < \\frac{14}{24} < \\frac{15}{24} < \\frac{18}{24}',
                  },
                  {
                    stepNumber: 3,
                    label: 'Write in original form',
                    content: 'Replace each 24th with its original fraction.',
                    mathFormula: '\\frac{1}{2} < \\frac{7}{12} < \\frac{5}{8} < \\frac{3}{4}',
                  },
                ],
                finalAnswer: '(a) 2/3 is larger; (b) 1/2, 7/12, 5/8, 3/4',
              },
            },
          ],
        },
        {
          id: '7.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Comparing Only the Numerators or Denominators',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Thinking 1/8 is larger than 1/4 because 8 is bigger than 4',
                wrongWay: '1/8 > 1/4',
                whyWrong: 'A larger denominator means dividing the pizza into MORE slices, making each slice SMALLER! 1 fourth is twice as big as 1 eighth.',
                correctWay: '1/4 = 2/8 > 1/8',
                proTip: 'For unit fractions (1 on top), the SMALLER the denominator, the BIGGER each individual slice is.',
                memoryHook: 'Sharing with 4 friends gives you more cake than sharing with 8!',
              },
            },
          ],
        },
        {
          id: '7.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Comparing Fractions',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Compare each pair using $<$ or $>$.',
            },
          ],
          questions: [
            {
              id: '7.1-ex1-q1',
              number: 1,
              question: 'Which is larger: $\\dfrac{3}{7}$ or $\\dfrac{5}{7}$?',
              hint: 'Denominators are already the same. Compare numerators 3 and 5.',
              answer: '\\dfrac{5}{7}',
              explanation: 'Because both have 7ths, 5 pieces is larger than 3 pieces: $\\frac{5}{7} > \\frac{3}{7}$.',
            },
            {
              id: '7.1-ex1-q2',
              number: 2,
              question: 'Which is larger: $\\dfrac{1}{3}$ or $\\dfrac{1}{5}$?',
              hint: 'Sharing into 3 parts makes each piece bigger than sharing into 5.',
              answer: '\\dfrac{1}{3}',
              explanation: '$\\frac{1}{3} = \\frac{5}{15}$, while $\\frac{1}{5} = \\frac{3}{15}$. Therefore $\\frac{1}{3} > \\frac{1}{5}$.',
            },
            {
              id: '7.1-ex1-q3',
              number: 3,
              question: 'Compare using $<$ or $>$: $\\dfrac{3}{4} \\ \\square \\ \\dfrac{7}{8}$',
              hint: 'Convert 3/4 to eighths: 6/8.',
              answer: '\\dfrac{3}{4} < \\dfrac{7}{8}',
              explanation: '$\\frac{3}{4} = \\frac{6}{8}$. Since $6 < 7$, $\\frac{3}{4} < \\frac{7}{8}$.',
            },
          ],
        },
        {
          id: '7.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Chocolate Bars & Test Scores',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Order real-world fractions in test marks and baking ingredients.',
            },
          ],
          questions: [
            {
              id: '7.1-ex2-q1',
              number: 1,
              context: 'Math Quiz Marks',
              question:
                'In a math competition, Sophie scored $\\frac{7}{10}$, Noah scored $\\frac{3}{4}$, and Oliver scored $\\frac{13}{20}$. Who achieved the highest score?',
              hint: 'Convert all to 20ths: 7/10 = 14/20, 3/4 = 15/20.',
              answer: 'Noah (3/4 = 15/20)',
              explanation: 'Sophie: $\\frac{14}{20}$. Noah: $\\frac{15}{20}$. Oliver: $\\frac{13}{20}$. Noah had the highest score.',
            },
            {
              id: '7.1-ex2-q2',
              number: 2,
              context: 'Recipe Milk Fractions',
              question:
                'A cake recipe calls for $\\frac{2}{3}\\text{ cup}$ of milk, and a pancake recipe calls for $\\frac{5}{8}\\text{ cup}$ of milk. Which recipe uses more milk?',
              hint: 'Convert to 24ths: 2/3 = 16/24 and 5/8 = 15/24.',
              answer: 'The cake recipe (2/3 cup)',
              explanation: '$\\frac{2}{3} = \\frac{16}{24}$ and $\\frac{5}{8} = \\frac{15}{24}$. The cake recipe uses $\\frac{1}{24}$ cup more.',
            },
            {
              id: '7.1-ex2-q3',
              number: 3,
              context: 'Fraction vs Decimal Length',
              question:
                'A wooden dowel is $\\frac{4}{5}\\text{ m}$ long, and a plastic pipe is $0.78\\text{ m}$ long. Which is longer?',
              hint: 'Convert 4/5 into a decimal: 4/5 = 8/10 = 0.80.',
              answer: 'The wooden dowel (4/5 m = 0.8 m)',
              explanation: '$\\frac{4}{5} = 0.80\\text{ m}$. Comparing $0.80\\text{ m}$ with $0.78\\text{ m}$: the wooden dowel is longer.',
            },
          ],
        },
        {
          id: '7.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Benchmark Fractions & Mediants',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Reason with half benchmarks and find fractions between fractions.',
            },
          ],
          questions: [
            {
              id: '7.1-ex3-q1',
              number: 1,
              context: 'Half Benchmark Comparison',
              question:
                'Without finding a common denominator, explain which is larger: $\\frac{4}{9}$ or $\\frac{5}{8}$.',
              hint: 'Compare each fraction to one half (1/2).',
              answer: '\\dfrac{5}{8}\\text{ is larger}',
              explanation: 'Half of 9 is 4.5, so $\\frac{4}{9} < \\frac{1}{2}$. Half of 8 is 4, so $\\frac{5}{8} > \\frac{1}{2}$. Since $\\frac{5}{8}$ is above a half and $\\frac{4}{9}$ is below, $\\frac{5}{8} > \\frac{4}{9}$.',
            },
            {
              id: '7.1-ex3-q2',
              number: 2,
              context: 'Fraction In-Between',
              question:
                'Find a fraction with an integer numerator and denominator that lies strictly between $\\frac{2}{5}$ and $\\frac{3}{5}$.',
              hint: 'Double the numerator and denominator: between 4/10 and 6/10.',
              answer: '\\dfrac{1}{2}\\text{ (or }\\dfrac{5}{10}\\text{)}',
              explanation: 'Rewrite as $\\frac{4}{10}$ and $\\frac{6}{10}$. The fraction $\\frac{5}{10} = \\frac{1}{2}$ lies directly in between.',
            },
            {
              id: '7.1-ex3-q3',
              number: 3,
              context: 'Negative Fractions',
              question:
                'Which is smaller (more negative): $-\\dfrac{3}{4}$ or $-\\dfrac{2}{3}$?',
              hint: 'Convert to 12ths: -9/12 vs -8/12.',
              answer: '-\\dfrac{3}{4}',
              explanation: '$-\\frac{3}{4} = -\\frac{9}{12}$ and $-\\frac{2}{3} = -\\frac{8}{12}$. On a number line, $-\\frac{9}{12}$ is further to the left, so $-\\frac{3}{4} < -\\frac{2}{3}$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 7.2 Adding mixed numbers
    // -------------------------------------------------------------------------
    {
      id: '7.2',
      subtopicNumber: '7.2',
      title: 'Adding mixed numbers',
      type: 'lesson',
      steps: [
        {
          id: '7.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Whole Cakes and Extra Slices',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Combining Bakery Boxes',
              scenario:
                'If you have $2$ whole pizzas plus $\\frac{1}{4}$ of a pizza ($2\\frac{1}{4}$), and your friend brings $1$ whole pizza plus $\\frac{2}{4}$ of a pizza ($1\\frac{2}{4}$), how much do you have altogether? Simply add the whole pizzas first ($2 + 1 = 3$), then add the fraction slices ($\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$). You get $3\\frac{3}{4}$ pizzas! If the slices make more than $1$ whole, carry $1$ over to the whole number column.',
              takeaway:
                'To add mixed numbers: add the whole numbers together, convert fractions to a common denominator and add them, then simplify any improper fraction results.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Mixed Number',
                  definition: 'A number made up of a whole number and a proper fraction together.',
                  example: '$2\\frac{3}{4}$ ($2$ wholes and three quarters).',
                },
                {
                  term: 'Improper Fraction',
                  definition: 'A fraction where the top numerator is greater than or equal to the denominator.',
                  example: '$\\frac{7}{4} = 1\\frac{3}{4}$.',
                },
              ],
            },
          ],
        },
        {
          id: '7.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Adding Mixed Numbers with Regrouping',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Calculate each sum step-by-step:\n(a) $1\\dfrac{1}{5} + 2\\dfrac{3}{5}$\n(b) $2\\dfrac{1}{3} + 1\\dfrac{1}{2}$\n(c) $3\\dfrac{3}{4} + 2\\dfrac{2}{3}$',
                context: 'Simplest Mixed Number Addition',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Same denominator, no carrying',
                    content: 'Add whole numbers: $1 + 2 = 3$. Add fractions: $\\frac{1}{5} + \\frac{3}{5} = \\frac{4}{5}$. Combine.',
                    mathFormula: '1\\frac{1}{5} + 2\\frac{3}{5} = 3\\frac{4}{5}',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Different denominators (LCM = 6)',
                    content: 'Convert fractions to 6ths: $\\frac{1}{3} = \\frac{2}{6}$ and $\\frac{1}{2} = \\frac{3}{6}$. Whole sum: $2 + 1 = 3$. Fraction sum: $\\frac{2}{6} + \\frac{3}{6} = \\frac{5}{6}$.',
                    mathFormula: '2\\frac{2}{6} + 1\\frac{3}{6} = 3\\frac{5}{6}',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Fraction sum exceeds 1 (carrying)',
                    content: 'Common denominator for 4 and 3 is 12: $\\frac{3}{4} = \\frac{9}{12}$ and $\\frac{2}{3} = \\frac{8}{12}$. Add fractions: $\\frac{9}{12} + \\frac{8}{12} = \\frac{17}{12} = 1\\frac{5}{12}$. Add whole numbers: $3 + 2 + 1 = 6$.',
                    mathFormula: '3\\frac{9}{12} + 2\\frac{8}{12} = 5 + 1\\frac{5}{12} = 6\\frac{5}{12}',
                  },
                ],
                finalAnswer: '(a) 3\\frac{4}{5}, (b) 3\\frac{5}{6}, (c) 6\\frac{5}{12}',
              },
            },
          ],
        },
        {
          id: '7.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Adding Across Numerators and Denominators',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Adding the bottom denominators together',
                wrongWay: '1/3 + 1/3 = 2/6',
                whyWrong: '2/6 simplifies to 1/3! Adding two pieces of pizza cannot give you the same amount you started with! The denominator tells you slice size and never changes during addition.',
                correctWay: '1/3 + 1/3 = 2/3',
                proTip: 'Keep the denominator steady: $\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$.',
                memoryHook: 'The bottom stays grounded; only the tops add together!',
              },
            },
          ],
        },
        {
          id: '7.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Mixed Number Additions',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Add each pair of mixed numbers and write answers in simplest form.',
            },
          ],
          questions: [
            {
              id: '7.2-ex1-q1',
              number: 1,
              question: 'Calculate: $2\\dfrac{1}{7} + 3\\dfrac{4}{7}$',
              hint: 'Add wholes (2 + 3) and fractions (1/7 + 4/7).',
              answer: '5\\dfrac{5}{7}',
              explanation: 'Wholes: $2 + 3 = 5$. Fractions: $\\frac{1}{7} + \\frac{4}{7} = \\frac{5}{7}$. Result: $5\\frac{5}{7}$.',
            },
            {
              id: '7.2-ex1-q2',
              number: 2,
              question: 'Calculate: $1\\dfrac{1}{4} + 2\\dfrac{1}{2}$',
              hint: 'Convert 1/2 to fourths: 2/4.',
              answer: '3\\dfrac{3}{4}',
              explanation: '$\\frac{1}{2} = \\frac{2}{4}$. Wholes: $1 + 2 = 3$. Fractions: $\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$. Result: $3\\frac{3}{4}$.',
            },
            {
              id: '7.2-ex1-q3',
              number: 3,
              question: 'Calculate: $2\\dfrac{3}{5} + 1\\dfrac{2}{5}$',
              hint: '3/5 + 2/5 = 5/5 = 1 whole!',
              answer: '4',
              explanation: 'Fractions: $\\frac{3}{5} + \\frac{2}{5} = \\frac{5}{5} = 1$. Wholes: $2 + 1 + 1 = 4$.',
            },
          ],
        },
        {
          id: '7.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Running Distances & Baking Batches',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Combine mixed numbers in recipes and running workouts.',
            },
          ],
          questions: [
            {
              id: '7.2-ex2-q1',
              number: 1,
              context: 'Morning & Evening Run',
              question:
                'Leo runs $3\\frac{1}{2}\\text{ km}$ in the morning and $2\\frac{3}{4}\\text{ km}$ in the evening. How many kilometers did he run in total?',
              hint: '1/2 = 2/4. Add wholes and fractions.',
              answer: '6\\dfrac{1}{4}\\text{ km}',
              explanation: 'Fractions: $\\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4} = 1\\frac{1}{4}$. Wholes: $3 + 2 + 1 = 6$. Total $= 6\\frac{1}{4}\\text{ km}$.',
            },
            {
              id: '7.2-ex2-q2',
              number: 2,
              context: 'Baking Bread Flour',
              question:
                'A baker mixes $2\\frac{2}{3}\\text{ kg}$ of white flour and $1\\frac{1}{6}\\text{ kg}$ of rye flour. What is the total mass of the flour mixture?',
              hint: '2/3 = 4/6.',
              answer: '3\\dfrac{5}{6}\\text{ kg}',
              explanation: '$\\frac{2}{3} = \\frac{4}{6}$. Wholes: $2 + 1 = 3$. Fractions: $\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$. Total $= 3\\frac{5}{6}\\text{ kg}$.',
            },
            {
              id: '7.2-ex2-q3',
              number: 3,
              context: 'Joining Timber Planks',
              question:
                'Two pieces of timber measuring $1\\frac{5}{8}\\text{ m}$ and $2\\frac{7}{8}\\text{ m}$ are joined end to end. What is the combined total length?',
              hint: '5/8 + 7/8 = 12/8 = 1 4/8 = 1 1/2.',
              answer: '4\\dfrac{1}{2}\\text{ m}',
              explanation: 'Wholes: $1 + 2 = 3$. Fractions: $\\frac{5}{8} + \\frac{7}{8} = \\frac{12}{8} = 1\\frac{4}{8} = 1\\frac{1}{2}$. Total $= 3 + 1\\frac{1}{2} = 4\\frac{1}{2}\\text{ m}$.',
            },
          ],
        },
        {
          id: '7.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Mixed Number Perimeter & Algebraic Equations',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Solve perimeter problems and equations involving mixed numbers.',
            },
          ],
          questions: [
            {
              id: '7.2-ex3-q1',
              number: 1,
              context: 'Triangle Perimeter',
              question:
                'A triangle has sides of length $2\\frac{1}{2}\\text{ cm}$, $3\\frac{2}{3}\\text{ cm}$, and $4\\frac{1}{6}\\text{ cm}$. Calculate its exact perimeter in simplest form.',
              hint: 'Common denominator is 6: 1/2 = 3/6, 2/3 = 4/6.',
              answer: '10\\dfrac{1}{3}\\text{ cm}',
              explanation: 'Fractions in 6ths: $\\frac{3}{6} + \\frac{4}{6} + \\frac{1}{6} = \\frac{8}{6} = 1\\frac{2}{6} = 1\\frac{1}{3}$. Wholes: $2 + 3 + 4 + 1 = 10$. Perimeter $= 10\\frac{1}{3}\\text{ cm}$.',
            },
            {
              id: '7.2-ex3-q2',
              number: 2,
              context: 'Missing Mixed Number',
              question:
                'Find the value of $x$: $x + 2\\dfrac{3}{4} = 6\\dfrac{1}{8}$',
              hint: 'Subtract 2 3/4 from 6 1/8.',
              answer: '3\\dfrac{3}{8}',
              explanation: '$x = 6\\frac{1}{8} - 2\\frac{6}{8} = 5\\frac{9}{8} - 2\\frac{6}{8} = 3\\frac{3}{8}$.',
            },
            {
              id: '7.2-ex3-q3',
              number: 3,
              context: 'Three Mixed Numbers Sum',
              question:
                'Evaluate: $1\\dfrac{5}{6} + 2\\dfrac{3}{4} + 3\\dfrac{1}{2}$',
              hint: 'Common denominator is 12: 5/6 = 10/12, 3/4 = 9/12, 1/2 = 6/12.',
              answer: '8\\dfrac{1}{12}',
              explanation: 'Fractions: $\\frac{10 + 9 + 6}{12} = \\frac{25}{12} = 2\\frac{1}{12}$. Wholes: $1 + 2 + 3 + 2 = 8$. Total $= 8\\frac{1}{12}$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 7.3 Multiplying fractions
    // -------------------------------------------------------------------------
    {
      id: '7.3',
      subtopicNumber: '7.3',
      title: 'Multiplying fractions',
      type: 'lesson',
      steps: [
        {
          id: '7.3-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Fraction of a Fraction & The Shaded Grid',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Half of a Half is a Quarter',
              scenario:
                'If you have half of a chocolate bar ($\\frac{1}{2}$), and you give half of that to your sister, what fraction of the whole bar does she get? $\\frac{1}{2} \\text{ of } \\frac{1}{2} = \\frac{1}{4}$! The word "OF" in mathematics means MULTIPLY. When you multiply two fractions, you multiply top $\\times$ top and bottom $\\times$ bottom.',
              takeaway:
                'To multiply fractions: multiply numerators together, multiply denominators together, and simplify by canceling common factors: $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$.',
            },
            {
              type: 'rule_box',
              title: 'The Golden Multiplication Rule',
              rule: 'Straight across top and bottom:',
              tips: [
                'Rule 1: Top $\\times$ Top, Bottom $\\times$ Bottom: $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$',
                'Rule 2: Cross-canceling before multiplying saves you from huge numbers!',
                'Rule 3: To multiply by a whole number, write the whole number over 1 ($5 = \\frac{5}{1}$).',
              ],
            },
          ],
        },
        {
          id: '7.3-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Direct Multiplication & Cross-Canceling',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Calculate each product and give your answer in simplest form:\n(a) $\\dfrac{1}{3} \\times \\dfrac{2}{5}$\n(b) $\\dfrac{3}{4} \\times \\dfrac{8}{9}$\n(c) $\\dfrac{5}{6} \\times 18$',
                context: 'Simplest Fraction Multiplication',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Simplest straight multiplication',
                    content: 'Multiply numerators: $1 \\times 2 = 2$. Multiply denominators: $3 \\times 5 = 15$.',
                    mathFormula: '\\frac{1 \\times 2}{3 \\times 5} = \\frac{2}{15}',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Cross-cancel before multiplying',
                    content: 'Notice 3 and 9 share factor 3 ($3 \\to 1, 9 \\to 3$). 4 and 8 share factor 4 ($4 \\to 1, 8 \\to 2$).',
                    mathFormula: '\\frac{3}{4} \\times \\frac{8}{9} = \\frac{1}{1} \\times \\frac{2}{3} = \\frac{2}{3}',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Fraction times whole number',
                    content: 'Write 18 as $\\frac{18}{1}$. Cancel 18 and 6 by dividing by 6 ($18 \\div 6 = 3, 6 \\div 6 = 1$). Multiply: $5 \\times 3 = 15$.',
                    mathFormula: '\\frac{5}{6} \\times 18 = 5 \\times 3 = 15',
                  },
                ],
                finalAnswer: '(a) 2/15, (b) 2/3, (c) 15',
              },
            },
          ],
        },
        {
          id: '7.3-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Cross-Multiplying During Multiplication',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Cross-multiplying diagonally instead of multiplying straight across',
                wrongWay: 'Doing 2 × 5 and 3 × 4 when multiplying 2/3 × 4/5',
                whyWrong: 'Cross-multiplication is only for checking equivalent fractions or solving proportions across an equals sign! In multiplication, go STRAIGHT ACROSS.',
                correctWay: '2/3 × 4/5 = (2 × 4) / (3 × 5) = 8/15',
                proTip: 'Multiplication marches straight forward like a train on straight tracks: top × top and bottom × bottom.',
                memoryHook: 'Multiply straight across the tracks!',
              },
            },
          ],
        },
        {
          id: '7.3-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Fraction Multiplication Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Multiply each pair of fractions and write answers in simplest form.',
            },
          ],
          questions: [
            {
              id: '7.3-ex1-q1',
              number: 1,
              question: 'Calculate: $\\dfrac{1}{2} \\times \\dfrac{3}{5}$',
              hint: 'Multiply 1 * 3, then 2 * 5.',
              answer: '\\dfrac{3}{10}',
              explanation: '$\\frac{1 \\times 3}{2 \\times 5} = \\frac{3}{10}$.',
            },
            {
              id: '7.3-ex1-q2',
              number: 2,
              question: 'Calculate: $\\dfrac{2}{3} \\times \\dfrac{3}{4}$',
              hint: 'Cancel the 3s first.',
              answer: '\\dfrac{1}{2}',
              explanation: 'The 3s cancel to 1: $\\frac{2}{4} = \\frac{1}{2}$.',
            },
            {
              id: '7.3-ex1-q3',
              number: 3,
              question: 'Calculate: $\\dfrac{3}{4} \\times 12$',
              hint: 'Find 3/4 of 12. 12 / 4 = 3, then 3 * 3.',
              answer: '9',
              explanation: '$\\frac{3}{4} \\times 12 = 3 \\times 3 = 9$.',
            },
          ],
        },
        {
          id: '7.3-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Field Areas & Recipe Portions',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Apply fraction multiplication to real-world areas and recipe quantities.',
            },
          ],
          questions: [
            {
              id: '7.3-ex2-q1',
              number: 1,
              context: 'Garden Plot Area',
              question:
                'A vegetable garden bed has a length of $\\frac{4}{5}\\text{ m}$ and a width of $\\frac{2}{3}\\text{ m}$. What is the area of the garden bed?',
              hint: 'Area = length * width.',
              answer: '\\dfrac{8}{15}\\text{ m}^2',
              explanation: '$\\text{Area} = \\frac{4}{5} \\times \\frac{2}{3} = \\frac{8}{15}\\text{ m}^2$.',
            },
            {
              id: '7.3-ex2-q2',
              number: 2,
              context: 'Class Survey Fraction',
              question:
                'In a class of $30$ students, $\\frac{3}{5}$ of the students walk to school. How many students walk to school?',
              hint: 'Calculate 3/5 of 30.',
              answer: '18\\text{ students}',
              explanation: '$\\frac{3}{5} \\times 30 = 3 \\times 6 = 18$ students.',
            },
            {
              id: '7.3-ex2-q3',
              number: 3,
              context: 'Fuel Tank Remaining',
              question:
                'A car\'s fuel tank is $\\frac{3}{4}$ full. During a journey, the car uses $\\frac{2}{3}$ of the fuel that was in the tank. What fraction of a full tank was used?',
              hint: 'Calculate 2/3 of 3/4.',
              answer: '\\dfrac{1}{2}\\text{ of a full tank}',
              explanation: '$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{2}{4} = \\frac{1}{2}$ of a full tank.',
            },
          ],
        },
        {
          id: '7.3-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Chained Fractions & Multiplying Mixed Numbers',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Convert mixed numbers to improper fractions before multiplying.',
            },
          ],
          questions: [
            {
              id: '7.3-ex3-q1',
              number: 1,
              context: 'Multiplying Mixed Numbers',
              question:
                'Calculate: $1\\dfrac{1}{2} \\times 2\\dfrac{2}{3}$',
              hint: 'Convert to improper fractions first: 3/2 * 8/3.',
              answer: '4',
              explanation: '$1\\frac{1}{2} = \\frac{3}{2}$ and $2\\frac{2}{3} = \\frac{8}{3}$. Product: $\\frac{3}{2} \\times \\frac{8}{3} = \\frac{8}{2} = 4$.',
            },
            {
              id: '7.3-ex3-q2',
              number: 2,
              context: 'Telescoping Fraction Product',
              question:
                'Calculate the value of: $\\left(1 - \\frac{1}{2}\\right) \\times \\left(1 - \\frac{1}{3}\\right) \\times \\left(1 - \\frac{1}{4}\\right) \\times \\left(1 - \\frac{1}{5}\\right)$',
              hint: 'Evaluate each bracket: 1/2 * 2/3 * 3/4 * 4/5. Notice diagonal cancelation!',
              answer: '\\dfrac{1}{5}',
              explanation: 'Product is $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5}$. The 2s, 3s, and 4s cancel out, leaving $\\frac{1}{5}$.',
            },
            {
              id: '7.3-ex3-q3',
              number: 3,
              context: 'Fractional Power',
              question:
                'Calculate: $\\left(\\dfrac{2}{3}\\right)^3$',
              hint: 'Multiply 2/3 by itself 3 times.',
              answer: '\\dfrac{8}{27}',
              explanation: '$\\frac{2^3}{3^3} = \\frac{2 \\times 2 \\times 2}{3 \\times 3 \\times 3} = \\frac{8}{27}$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 7.4 Dividing fractions
    // -------------------------------------------------------------------------
    {
      id: '7.4',
      subtopicNumber: '7.4',
      title: 'Dividing fractions',
      type: 'lesson',
      steps: [
        {
          id: '7.4-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The Pizza Slicing Rule & Keep-Change-Flip',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'How Many Quarters in 2 Pizzas?',
              scenario:
                'Suppose you have $2$ whole pizzas. If you cut them into quarter-pizza slices ($\\frac{1}{4}$), how many slices do you get? You get $2 \\times 4 = 8$ slices! Notice that $2 \\div \\frac{1}{4} = 8$. Dividing by a fraction is the exact same as multiplying by its flipped reciprocal.',
              takeaway:
                'Keep-Change-Flip (KCF): KEEP the first fraction, CHANGE the division sign to multiplication ($\\times$), and FLIP the second fraction upside down (reciprocal).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Reciprocal',
                  definition: 'The fraction turned upside down (swapping the numerator and denominator).',
                  example: 'The reciprocal of $\\frac{2}{3}$ is $\\frac{3}{2}$. The reciprocal of $5$ ($\\frac{5}{1}$) is $\\frac{1}{5}$.',
                },
              ],
            },
            {
              type: 'rule_box',
              title: 'The KCF Algorithm',
              rule: 'Three steps to divide any fractions:',
              tips: [
                'KEEP the first fraction exactly as it is.',
                'CHANGE the division sign $\\div$ to multiplication $\\times$.',
                'FLIP the second fraction to its reciprocal ($\\frac{c}{d} \\to \\frac{d}{c}$). Then multiply straight across!',
              ],
            },
          ],
        },
        {
          id: '7.4-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Dividing Whole Numbers & Fractions',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Calculate each division and simplify:\n(a) $3 \\div \\dfrac{1}{2}$\n(b) $\\dfrac{3}{4} \\div \\dfrac{3}{8}$\n(c) $\\dfrac{5}{6} \\div \\dfrac{2}{3}$',
                context: 'Simplest Keep-Change-Flip',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Whole number divided by unit fraction',
                    content: 'Keep 3, change $\\div$ to $\\times$, flip $\\frac{1}{2}$ to $\\frac{2}{1}$. $3 \\times 2 = 6$.',
                    mathFormula: '3 \\div \\frac{1}{2} = 3 \\times 2 = 6',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Fraction divided by fraction',
                    content: 'Keep $\\frac{3}{4}$, change to $\\times$, flip $\\frac{3}{8}$ to $\\frac{8}{3}$. Cancel the 3s and cancel 8 and 4.',
                    mathFormula: '\\frac{3}{4} \\div \\frac{3}{8} = \\frac{3}{4} \\times \\frac{8}{3} = \\frac{8}{4} = 2',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Result as a mixed number',
                    content: '$\\frac{5}{6} \\times \\frac{3}{2}$. Cancel 3 and 6 by 3: $\\frac{5}{2} \\times \\frac{1}{2} = \\frac{5}{4} = 1\\frac{1}{4}$.',
                    mathFormula: '\\frac{5}{6} \\times \\frac{3}{2} = \\frac{5}{4} = 1\\frac{1}{4}',
                  },
                ],
                finalAnswer: '(a) 6, (b) 2, (c) 1\\frac{1}{4}',
              },
            },
          ],
        },
        {
          id: '7.4-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Flipping the First Fraction by Mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Flipping the first fraction instead of the second',
                wrongWay: 'Turning 2/3 ÷ 4/5 into 3/2 × 4/5',
                whyWrong: 'You only flip the DIVISOR (the second fraction you are dividing by)! The first fraction must stay unchanged.',
                correctWay: '2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6',
                proTip: 'Say "Keep, Change, Flip" in your head. The FIRST word is KEEP!',
                memoryHook: 'KEEP the first, CHANGE the middle, FLIP the last!',
              },
            },
          ],
        },
        {
          id: '7.4-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: KCF Division Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Divide each fraction by applying Keep-Change-Flip.',
            },
          ],
          questions: [
            {
              id: '7.4-ex1-q1',
              number: 1,
              question: 'Calculate: $4 \\div \\dfrac{1}{3}$',
              hint: 'Multiply 4 by 3.',
              answer: '12',
              explanation: '$4 \\div \\frac{1}{3} = 4 \\times 3 = 12$.',
            },
            {
              id: '7.4-ex1-q2',
              number: 2,
              question: 'Calculate: $\\dfrac{1}{2} \\div \\dfrac{1}{4}$',
              hint: 'Keep 1/2, multiply by 4/1.',
              answer: '2',
              explanation: '$\\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$.',
            },
            {
              id: '7.4-ex1-q3',
              number: 3,
              question: 'Calculate: $\\dfrac{2}{5} \\div \\dfrac{2}{3}$',
              hint: 'Keep 2/5, multiply by 3/2.',
              answer: '\\dfrac{3}{5}',
              explanation: '$\\frac{2}{5} \\times \\frac{3}{2} = \\frac{3}{5}$.',
            },
          ],
        },
        {
          id: '7.4-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Bottling Juice & Woodworking Strips',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Solve packaging and portion division word problems.',
            },
          ],
          questions: [
            {
              id: '7.4-ex2-q1',
              number: 1,
              context: 'Bottling Olive Oil',
              question:
                'A chef has $6\\text{ liters}$ of olive oil. He fills small bottles that hold $\\frac{3}{4}\\text{ liter}$ each. How many bottles can he completely fill?',
              hint: 'Calculate 6 / (3/4) = 6 * (4/3).',
              answer: '8\\text{ bottles}',
              explanation: '$6 \\div \\frac{3}{4} = 6 \\times \\frac{4}{3} = 2 \\times 4 = 8$ bottles.',
            },
            {
              id: '7.4-ex2-q2',
              number: 2,
              context: 'Ribbon Strips',
              question:
                'A tailor has a ribbon of length $\\frac{9}{10}\\text{ m}$. She cuts it into smaller strips each measuring $\\frac{3}{20}\\text{ m}$. How many strips does she get?',
              hint: 'Calculate (9/10) / (3/20).',
              answer: '6\\text{ strips}',
              explanation: '$\\frac{9}{10} \\div \\frac{3}{20} = \\frac{9}{10} \\times \\frac{20}{3} = 3 \\times 2 = 6$ strips.',
            },
            {
              id: '7.4-ex2-q3',
              number: 3,
              context: 'Track Laps',
              question:
                'A runner runs $3\\text{ km}$. If one lap of the course is $\\frac{3}{8}\\text{ km}$, how many laps did the runner complete?',
              hint: 'Calculate 3 / (3/8).',
              answer: '8\\text{ laps}',
              explanation: '$3 \\div \\frac{3}{8} = 3 \\times \\frac{8}{3} = 8$ laps.',
            },
          ],
        },
        {
          id: '7.4-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Dividing Mixed Numbers & Algebraic Fractions',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Convert mixed numbers to improper fractions before applying KCF.',
            },
          ],
          questions: [
            {
              id: '7.4-ex3-q1',
              number: 1,
              context: 'Dividing Mixed Numbers',
              question:
                'Calculate: $2\\dfrac{1}{4} \\div 1\\dfrac{1}{2}$',
              hint: 'Convert to improper fractions: 9/4 / 3/2 = 9/4 * 2/3.',
              answer: '1\\dfrac{1}{2}\\text{ (or }\\dfrac{3}{2}\\text{)}',
              explanation: '$\\frac{9}{4} \\div \\frac{3}{2} = \\frac{9}{4} \\times \\frac{2}{3} = \\frac{3}{2} = 1\\frac{1}{2}$.',
            },
            {
              id: '7.4-ex3-q2',
              number: 2,
              context: 'Reciprocal Equation',
              question:
                'Find $x$ such that: $\\dfrac{4}{7} \\div x = \\dfrac{8}{21}$',
              hint: 'Divide 4/7 by 8/21.',
              answer: 'x = 1\\dfrac{1}{2}\\text{ (or }\\dfrac{3}{2}\\text{)}',
              explanation: '$x = \\frac{4}{7} \\div \\frac{8}{21} = \\frac{4}{7} \\times \\frac{21}{8} = \\frac{1}{1} \\times \\frac{3}{2} = \\frac{3}{2} = 1\\frac{1}{2}$.',
            },
            {
              id: '7.4-ex3-q3',
              number: 3,
              context: 'Algebraic Fraction Division',
              question:
                'Simplify: $\\dfrac{2a}{5} \\div \\dfrac{4a}{15}$ where $a > 0$.',
              hint: 'Keep 2a/5, multiply by 15/(4a). Cancel the a.',
              answer: '1\\dfrac{1}{2}\\text{ (or }\\dfrac{3}{2}\\text{)}',
              explanation: '$\\frac{2a}{5} \\times \\frac{15}{4a} = \\frac{2a \\times 15}{5 \\times 4a} = \\frac{30a}{20a} = \\frac{3}{2} = 1\\frac{1}{2}$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 7.5 Making fraction calculations easier
    // -------------------------------------------------------------------------
    {
      id: '7.5',
      subtopicNumber: '7.5',
      title: 'Making fraction calculations easier',
      type: 'lesson',
      steps: [
        {
          id: '7.5-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Smart Canceling & Order of Operations',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Packing Light for a Hike',
              scenario:
                'If you multiply $\\frac{14}{25} \\times \\frac{15}{28}$, you could multiply $14 \\times 15 = 210$ and $25 \\times 28 = 700$, and then struggle to simplify $\\frac{210}{700}$. That is like carrying a heavy boulder in your backpack! Or you can simplify FIRST before multiplying: $14$ and $28$ cancel to $1$ and $2$; $15$ and $25$ cancel to $3$ and $5$. Then $1 \\times 3 = 3$ and $5 \\times 2 = 10$, giving $\\frac{3}{10}$ in $5$ seconds!',
              takeaway:
                'Always cancel common factors BEFORE multiplying. Follow BIDMAS rules when expressions combine brackets, addition, and multiplication.',
            },
            {
              type: 'rule_box',
              title: 'BIDMAS Fraction Rules',
              rule: 'Standard order of operations applies to fractions:',
              tips: [
                'Brackets first: evaluate anything inside $( )$ first.',
                'Multiplication & Division next: from left to right.',
                'Addition & Subtraction last: using common denominators.',
              ],
            },
          ],
        },
        {
          id: '7.5-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: BIDMAS with Fractions',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Evaluate each expression in simplest form:\n(a) $\\dfrac{1}{2} + \\dfrac{1}{4} \\times \\dfrac{2}{3}$\n(b) $\\left(\\dfrac{3}{4} - \\dfrac{1}{2}\\right) \\div \\dfrac{5}{8}$',
                context: 'Simplest Multi-Step Fraction BIDMAS',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Multiply before adding (BIDMAS)',
                    content: 'First do multiplication: $\\frac{1}{4} \\times \\frac{2}{3} = \\frac{2}{12} = \\frac{1}{6}$.',
                    mathFormula: '\\frac{1}{4} \\times \\frac{2}{3} = \\frac{1}{6}',
                  },
                  {
                    stepNumber: 2,
                    label: 'Now add to 1/2 with common denominator 6',
                    content: '$\\frac{1}{2} = \\frac{3}{6}$. Add: $\\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}$.',
                    mathFormula: '\\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (b): Brackets first',
                    content: 'Inside brackets: $\\frac{3}{4} - \\frac{1}{2} = \\frac{3}{4} - \\frac{2}{4} = \\frac{1}{4}$. Now divide: $\\frac{1}{4} \\div \\frac{5}{8} = \\frac{1}{4} \\times \\frac{8}{5} = \\frac{2}{5}$.',
                    mathFormula: '\\frac{1}{4} \\times \\frac{8}{5} = \\frac{2}{5}',
                  },
                ],
                finalAnswer: '(a) 2/3, (b) 2/5',
              },
            },
          ],
        },
        {
          id: '7.5-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Adding Before Multiplying in Mixed Expressions',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Calculating left to right and adding before multiplying',
                wrongWay: 'In 1/2 + 1/4 × 2/3, adding 1/2 + 1/4 = 3/4 first',
                whyWrong: 'BIDMAS strictly requires Multiplication before Addition! Adding first gives (3/4) × (2/3) = 1/2, which is incorrect.',
                correctWay: 'Multiply 1/4 × 2/3 = 1/6 first. Then 1/2 + 1/6 = 2/3.',
                proTip: 'Circle the multiplication or division step first and solve it before touching the addition.',
                memoryHook: 'Multiplication cuts in line before addition every time!',
              },
            },
          ],
        },
        {
          id: '7.5-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: BIDMAS Fraction Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Evaluate each expression following BIDMAS.',
            },
          ],
          questions: [
            {
              id: '7.5-ex1-q1',
              number: 1,
              question: 'Calculate: $\\dfrac{1}{3} + \\dfrac{1}{3} \\times 2$',
              hint: 'Multiply (1/3 * 2 = 2/3) first, then add 1/3.',
              answer: '1',
              explanation: '$\\frac{1}{3} \\times 2 = \\frac{2}{3}$. Then $\\frac{1}{3} + \\frac{2}{3} = \\frac{3}{3} = 1$.',
            },
            {
              id: '7.5-ex1-q2',
              number: 2,
              question: 'Calculate: $\\left(\\dfrac{1}{2} + \\dfrac{1}{2}\\right) \\times \\dfrac{3}{4}$',
              hint: 'Brackets first: 1/2 + 1/2 = 1.',
              answer: '\\dfrac{3}{4}',
              explanation: '$1 \\times \\frac{3}{4} = \\frac{3}{4}$.',
            },
            {
              id: '7.5-ex1-q3',
              number: 3,
              question: 'Calculate: $\\dfrac{3}{5} \\times \\dfrac{5}{7}$',
              hint: 'Cancel the 5s.',
              answer: '\\dfrac{3}{7}',
              explanation: 'The 5s cancel out: $\\frac{3}{7}$.',
            },
          ],
        },
        {
          id: '7.5-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Cooking Ratios & Shared Supplies',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Solve multi-step problems in cooking batches and classroom supplies.',
            },
          ],
          questions: [
            {
              id: '7.5-ex2-q1',
              number: 1,
              context: 'Baking Recipe Adjustment',
              question:
                'A recipe uses $\\frac{3}{4}\\text{ cup}$ of sugar. A baker prepares $2$ full batches plus a half batch ($2\\frac{1}{2}$ batches). How much sugar does she use?',
              hint: 'Multiply 3/4 by 2 1/2 = 3/4 * 5/2.',
              answer: '1\\dfrac{7}{8}\\text{ cups}',
              explanation: '$\\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}$ cups.',
            },
            {
              id: '7.5-ex2-q2',
              number: 2,
              context: 'Weekly Pocket Money Savings',
              question:
                'Ethan receives $\$24$ weekly pocket money. He spends $\\frac{1}{3}$ on transport and $\\frac{1}{4}$ on books, and saves the rest. How much money does he save?',
              hint: 'Find 1/3 of 24 ($8) and 1/4 of 24 ($6), then subtract.',
              answer: '\\$10',
              explanation: 'Transport: $\\frac{1}{3} \\times 24 = \\$8$. Books: $\\frac{1}{4} \\times 24 = \\$6$. Total spent $= 8 + 6 = \\$14$. Savings $= 24 - 14 = \\$10$.',
            },
            {
              id: '7.5-ex2-q3',
              number: 3,
              context: 'Garden Fence Painting',
              question:
                'On Saturday, Chloe paints $\\frac{2}{5}$ of a fence. On Sunday, she paints $\\frac{1}{2}$ of the REMAINING fence. What fraction of the fence is still unpainted?',
              hint: 'Remaining after Saturday is 3/5. She paints 1/2 of 3/5 = 3/10.',
              answer: '\\dfrac{3}{10}\\text{ of the fence}',
              explanation: 'Remaining after Saturday: $1 - \\frac{2}{5} = \\frac{3}{5}$. Sunday painted: $\\frac{1}{2} \\times \\frac{3}{5} = \\frac{3}{10}$. Left unpainted: $\\frac{3}{5} - \\frac{3}{10} = \\frac{6}{10} - \\frac{3}{10} = \\frac{3}{10}$.',
            },
          ],
        },
        {
          id: '7.5-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Distributive Law with Fractions & Powers',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Factor out common fractions and solve multi-step expressions.',
            },
          ],
          questions: [
            {
              id: '7.5-ex3-q1',
              number: 1,
              context: 'Factoring Out a Fraction',
              question:
                'Calculate using the distributive law: $\\dfrac{4}{7} \\times 18 - \\dfrac{4}{7} \\times 4$',
              hint: 'Factor out 4/7: (4/7) * (18 - 4).',
              answer: '8',
              explanation: '$\\frac{4}{7} \\times (18 - 4) = \\frac{4}{7} \\times 14 = 4 \\times 2 = 8$.',
            },
            {
              id: '7.5-ex3-q2',
              number: 2,
              context: 'Complex Fraction Calculation',
              question:
                'Evaluate: $\\dfrac{\\frac{2}{3} + \\frac{1}{6}}{\\frac{5}{6} - \\frac{1}{3}}$',
              hint: 'Evaluate top (4/6 + 1/6 = 5/6) and bottom (5/6 - 2/6 = 3/6), then divide.',
              answer: '1\\dfrac{2}{3}\\text{ (or }\\dfrac{5}{3}\\text{)}',
              explanation: 'Numerator: $\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$. Denominator: $\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6}$. Fraction: $\\frac{5}{6} \\div \\frac{3}{6} = \\frac{5}{3} = 1\\frac{2}{3}$.',
            },
            {
              id: '7.5-ex3-q3',
              number: 3,
              context: 'Fractional Equation',
              question:
                'Solve for $y$: $\\dfrac{3}{4}y - \\dfrac{1}{2} = 1$',
              hint: 'Add 1/2 to both sides: 3/4 y = 3/2. Then multiply by 4/3.',
              answer: 'y = 2',
              explanation: '$\\frac{3}{4}y = 1 + \\frac{1}{2} = \\frac{3}{2} \\implies y = \\frac{3}{2} \\times \\frac{4}{3} = 2$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '7.test',
      subtopicNumber: 'Test',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '7.test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Test Part A: Core Recall',
          badge: 'Test Part A: Core Recall',
          blocks: [
            {
              type: 'text',
              content:
                'Part A tests core fraction arithmetic: ordering, adding mixed numbers, multiplying, and dividing. Work out all 3 questions on the Teacher\'s Board before checking answers.',
            },
          ],
          questions: [
            {
              id: '7.test-q1',
              number: 1,
              question: 'Which is larger: $\\dfrac{5}{8}$ or $\\dfrac{7}{12}$?',
              hint: 'Convert to 24ths: 15/24 vs 14/24.',
              answer: '\\dfrac{5}{8}',
              explanation: '$\\frac{5}{8} = \\frac{15}{24}$ and $\\frac{7}{12} = \\frac{14}{24}$. $\\frac{5}{8}$ is larger.',
            },
            {
              id: '7.test-q2',
              number: 2,
              question: 'Calculate: $1\\dfrac{3}{5} + 2\\dfrac{1}{2}$',
              hint: 'Convert to 10ths: 6/10 + 5/10 = 11/10 = 1 1/10.',
              answer: '4\\dfrac{1}{10}',
              explanation: 'Wholes: $1 + 2 = 3$. Fractions: $\\frac{6}{10} + \\frac{5}{10} = \\frac{11}{10} = 1\\frac{1}{10}$. Total $= 4\\frac{1}{10}$.',
            },
            {
              id: '7.test-q3',
              number: 3,
              question: 'Calculate: $\\dfrac{4}{9} \\div \\dfrac{2}{3}$',
              hint: 'Keep 4/9, multiply by 3/2.',
              answer: '\\dfrac{2}{3}',
              explanation: '$\\frac{4}{9} \\times \\frac{3}{2} = \\frac{12}{18} = \\frac{2}{3}$.',
            },
          ],
        },
        {
          id: '7.test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Test Part B: Real-World Problems',
          badge: 'Test Part B: Real-World Problems',
          blocks: [
            {
              type: 'text',
              content:
                'Part B tests applying fraction arithmetic to recipes, carpentry, and packaging.',
            },
          ],
          questions: [
            {
              id: '7.test-q4',
              number: 1,
              context: 'Timber Cut Pieces',
              question:
                'A wooden beam is $4\\frac{1}{2}\\text{ m}$ long. A carpenter cuts it into equal pieces that are each $\\frac{3}{4}\\text{ m}$ long. How many pieces does he get?',
              hint: 'Convert 4 1/2 to 9/2, then divide by 3/4.',
              answer: '6\\text{ pieces}',
              explanation: '$\\frac{9}{2} \\div \\frac{3}{4} = \\frac{9}{2} \\times \\frac{4}{3} = 3 \\times 2 = 6$ pieces.',
            },
            {
              id: '7.test-q5',
              number: 2,
              context: 'School Sports Field Area',
              question:
                'A rectangular athletic field has a length of $\\frac{9}{10}\\text{ km}$ and a width of $\\frac{2}{3}\\text{ km}$. Find its area in square kilometers in simplest form.',
              hint: 'Multiply 9/10 * 2/3.',
              answer: '\\dfrac{3}{5}\\text{ km}^2',
              explanation: '$\\text{Area} = \\frac{9}{10} \\times \\frac{2}{3} = \\frac{3}{5}\\text{ km}^2$.',
            },
            {
              id: '7.test-q6',
              number: 3,
              context: 'Milk Jug Sharing',
              question:
                'A container holds $3\\frac{1}{4}\\text{ liters}$ of lemonade. After $1\\frac{2}{3}\\text{ liters}$ is poured into glasses, how much lemonade remains in the container?',
              hint: 'Subtract 1 2/3 from 3 1/4 using common denominator 12.',
              answer: '1\\dfrac{7}{12}\\text{ liters}',
              explanation: '$3\\frac{3}{12} - 1\\frac{8}{12} = 2\\frac{15}{12} - 1\\frac{8}{12} = 1\\frac{7}{12}$ liters.',
            },
          ],
        },
        {
          id: '7.test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Test Part C: Reasoning & Challenge',
          badge: 'Test Part C: Reasoning & Challenge',
          blocks: [
            {
              type: 'text',
              content:
                'Part C presents multi-step fraction reasoning and algebraic puzzles.',
            },
          ],
          questions: [
            {
              id: '7.test-q7',
              number: 1,
              context: 'BIDMAS Order of Operations',
              question:
                'Evaluate: $\\dfrac{3}{4} - \\dfrac{1}{2} \\times \\dfrac{2}{3} + \\dfrac{1}{6}$',
              hint: 'Multiplication first: 1/2 * 2/3 = 1/3. Then 3/4 - 1/3 + 1/6.',
              answer: '\\dfrac{7}{12}',
              explanation: 'Multiplication: $\\frac{1}{2} \\times \\frac{2}{3} = \\frac{1}{3}$. In 12ths: $\\frac{9}{12} - \\frac{4}{12} + \\frac{2}{12} = \\frac{7}{12}$.',
            },
            {
              id: '7.test-q8',
              number: 2,
              context: 'Reciprocal Product Property',
              question:
                'If $\\frac{a}{b} = \\frac{3}{5}$, what is the value of $\\frac{a}{b} \\times \\frac{b}{a}$? What is the mathematical name for $\\frac{b}{a}$ in relation to $\\frac{a}{b}$?',
              hint: 'Any number multiplied by its reciprocal equals 1.',
              answer: '1;\\ \\frac{b}{a}\\text{ is the reciprocal of }\\frac{a}{b}',
              explanation: '$\\frac{3}{5} \\times \\frac{5}{3} = \\frac{15}{15} = 1$. The reciprocal of a fraction multiplies with it to equal $1$.',
            },
            {
              id: '7.test-q9',
              number: 3,
              context: 'Mystery Fraction Problem',
              question:
                'I am thinking of a fraction. When I multiply it by $\\frac{2}{3}$ and add $\\frac{1}{4}$, the answer is $\\frac{3}{4}$. What is the fraction?',
              hint: 'Solve (2/3)x + 1/4 = 3/4.',
              answer: '\\dfrac{3}{4}',
              explanation: '$\\frac{2}{3}x = \\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$. Then $x = \\frac{1}{2} \\div \\frac{2}{3} = \\frac{1}{2} \\times \\frac{3}{2} = \\frac{3}{4}$. Check: $\\frac{3}{4} \\times \\frac{2}{3} + \\frac{1}{4} = \\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$.',
            },
          ],
        },
      ],
    },
  ],
};
