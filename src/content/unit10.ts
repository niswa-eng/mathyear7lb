/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit10: Unit = {
  id: 'unit-10',
  unitNumber: 10,
  title: 'Percentages',
  learningObjectives: [
    'Convert between fractions, decimals, and percentages.',
    'Calculate percentages of shapes and whole numbers, including percentages below 1% and above 100%.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 10.1 Fractions decimals and percentages
    // -------------------------------------------------------------------------
    {
      id: '10.1',
      subtopicNumber: '10.1',
      title: 'Fractions decimals and percentages',
      type: 'lesson',
      steps: [
        {
          id: '10.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The "Per 100" Universal Currency',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Cents, Centuries & Battery Meters',
              scenario:
                'The word "percent" comes from the Latin "per centum", meaning "out of 100". Just as there are $100$ cents in a dollar and $100$ years in a century, a percentage is simply a fraction with a denominator of $100$. When your phone battery shows $75\\%$, it means $75$ out of $100$ battery units remain, which is also the fraction $\\frac{75}{100} = \\frac{3}{4}$, and the decimal $0.75$.',
              takeaway:
                'Fractions, decimals, and percentages are three different ways of writing the EXACT same value: $\\text{Percentage} \\leftrightarrow \\frac{\\text{Number}}{100} \\leftrightarrow \\text{Decimal}$.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Percent (\\%)',
                  definition: 'Parts per hundred. The symbol % means $\\div 100$ or $\\frac{1}{100}$.',
                  example: '$45\\% = \\frac{45}{100} = 0.45$.',
                },
                {
                  term: 'Benchmark Equivalences',
                  definition: 'Key conversions every mathematician memorizes instantly.',
                  example: '$50\\% = \\frac{1}{2} = 0.5$; $25\\% = \\frac{1}{4} = 0.25$; $75\\% = \\frac{3}{4} = 0.75$; $10\\% = \\frac{1}{10} = 0.1$; $20\\% = \\frac{1}{5} = 0.2$.',
                },
                {
                  term: 'Converting Fraction to Percentage',
                  definition: 'Create an equivalent fraction with denominator 100, or multiply the fraction by 100%.',
                  example: '$\\frac{3}{20} = \\frac{3 \\times 5}{20 \\times 5} = \\frac{15}{100} = 15\\%$.',
                },
                {
                  term: 'Converting Percentage to Simplest Fraction',
                  definition: 'Write the percentage over 100, then cancel common factors to simplest form.',
                  example: '$60\\% = \\frac{60}{100} = \\frac{3}{5}$ (dividing top and bottom by 20).',
                },
              ],
            },
          ],
          widget: {
            type: 'fraction_bar',
            title: 'Interactive Fraction & Percentage Bar',
            initialParams: { numerator: 3, denominator: 4 },
          },
        },
        {
          id: '10.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Conversion First & Three-Way Equivalence',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Convert $35\\%$ into: (i) a decimal, and (ii) a fraction in its simplest form.\n(b) Write $\\frac{7}{25}$ as a percentage and as a decimal.\n(c) Order from smallest to largest: $0.32$, $30\\%$, $\\frac{7}{20}$.',
                context: 'Converting between fractions, decimals, and percentages',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Convert 35% into decimal and simplified fraction',
                    content:
                      '(i) To convert % to decimal, divide by $100$: $35 \\div 100 = 0.35$.\n(ii) To convert % to fraction, put over $100$ and divide top and bottom by $5$:',
                    mathFormula: '35\\% = 0.35 = \\frac{35}{100} = \\frac{35 \\div 5}{100 \\div 5} = \\frac{7}{20}',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Convert 7/25 to percentage and decimal',
                    content:
                      'Make the denominator $100$ by multiplying top and bottom by $4$ ($25 \\times 4 = 100$):',
                    mathFormula: '\\frac{7}{25} = \\frac{7 \\times 4}{25 \\times 4} = \\frac{28}{100} = 28\\% = 0.28',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Compare and order the three numbers',
                    content:
                      'Convert all three to percentages to compare fairly:\n- $0.32 = 32\\%$\n- $30\\% = 30\\%$\n- $\\frac{7}{20} = \\frac{35}{100} = 35\\%$',
                    mathFormula: '30\\% < 32\\% < 35\\% \\implies 30\\%, \\; 0.32, \\; \\frac{7}{20}',
                  },
                ],
                finalAnswer: '(a) 0.35, 7/20; (b) 28%, 0.28; (c) 30%, 0.32, 7/20',
              },
            },
          ],
        },
        {
          id: '10.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'The Decimal Point Shift Trap',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Writing 7% as 0.7 instead of 0.07',
                wrongWay: '7% = 0.7',
                whyWrong:
                  'Confusing $7\\%$ ($7$ out of $100$) with $70\\%$ ($7$ out of $10$). $0.7$ means $7$ tenths $= 70\\%$, NOT $7\\%$.',
                correctWay:
                  '$7\\% = \\frac{7}{100} = 0.07$. Always remember that dividing by 100 moves the decimal digits two places to the right!',
                proTip:
                  'Double-check single-digit percentages: $1\\% = 0.01$, $5\\% = 0.05$, $9\\% = 0.09$. They always have a zero after the decimal point!',
                memoryHook: 'Per CENT has two zeros (100) — jump TWO decimal places!',
              },
            },
          ],
        },
        {
          id: '10.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Convert between fractions, decimals, and percentages on the Teacher\'s Board, then check your answers.',
            },
          ],
          questions: [
            {
              id: '10.1-ex1-q1',
              number: 1,
              question: 'What is $40\\%$ written as a fraction in its simplest form?',
              hint: '$\\frac{40}{100}$: divide both numerator and denominator by 20.',
              answer: '2/5',
              explanation: '$\\frac{40}{100} = \\frac{40 \\div 20}{100 \\div 20} = \\frac{2}{5}$.',
            },
            {
              id: '10.1-ex1-q2',
              number: 2,
              question: 'What is $\\frac{9}{50}$ written as a percentage?',
              hint: 'Multiply numerator and denominator by 2 to make denominator 100.',
              answer: '18%',
              explanation: '$\\frac{9 \\times 2}{50 \\times 2} = \\frac{18}{100} = 18\\%$.',
            },
            {
              id: '10.1-ex1-q3',
              number: 3,
              question: 'What is $0.06$ expressed as a percentage?',
              hint: 'Multiply by 100: move digits two places left.',
              answer: '6%',
              explanation: '$0.06 \\times 100 = 6\\%$.',
            },
          ],
        },
        {
          id: '10.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 real-world percentage and fraction problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '10.1-ex2-q1',
              number: 1,
              question:
                'In a Year 7 class of $25$ students, $17$ students bring their own lunch from home. What percentage of the class brings lunch from home?',
              hint: 'Write as fraction $\\frac{17}{25}$ and multiply top and bottom by 4.',
              answer: '68%',
              explanation: '$\\frac{17 \\times 4}{25 \\times 4} = \\frac{68}{100} = 68\\%$.',
            },
            {
              id: '10.1-ex2-q2',
              number: 2,
              question:
                'A football striker scored goals from $9$ out of $12$ penalty kicks this season. What percentage of penalty kicks were scored?',
              hint: 'Simplify $\\frac{9}{12} = \\frac{3}{4}$, then convert $\\frac{3}{4}$ to a percentage.',
              answer: '75%',
              explanation: '$\\frac{9}{12} = \\frac{3}{4} = 75\\%$.',
            },
            {
              id: '10.1-ex2-q3',
              number: 3,
              question:
                'In a school survey, $0.45$ of students walk to school, $35\\%$ travel by bus, and the rest travel by car. What fraction of students travel by car (in simplest form)?',
              hint: 'Convert all to percentages: Walk $= 45\\%$, Bus $= 35\\%$. Total so far $= 80\\%$. Remaining $= 20\\%$.',
              answer: '1/5',
              explanation:
                'Walk $= 45\\%$, Bus $= 35\\%$. Total $= 80\\%$. Car $= 100\\% - 80\\% = 20\\% = \\frac{20}{100} = \\frac{1}{5}$.',
            },
          ],
        },
        {
          id: '10.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Test your mastery of equivalent forms and area fractions on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '10.1-ex3-q1',
              number: 1,
              question:
                'Which of these values is strictly GREATER than $\\frac{5}{8}$: $60\\%$, $65\\%$, or $0.62$?',
              hint: '$\\frac{5}{8} = 0.625 = 62.5\\%$. Compare $65\\%$ to $62.5\\%$.',
              answer: '65%',
              explanation:
                '$\\frac{5}{8} = 0.625 = 62.5\\%$. Among the options, $65\\% > 62.5\\%$, while $60\\% < 62.5\\%$ and $0.62 = 62\\% < 62.5\\%$.',
            },
            {
              id: '10.1-ex3-q2',
              number: 2,
              question:
                'A rectangle has an area of $40\\text{ cm}^2$. A shaded triangle inside it has an area of $14\\text{ cm}^2$. What percentage of the rectangle is UNshaded?',
              hint: 'Unshaded area is $40 - 14 = 26\\text{ cm}^2$. Fraction unshaded is $\\frac{26}{40}$.',
              answer: '65%',
              explanation:
                'Unshaded area $= 40 - 14 = 26\\text{ cm}^2$. Fraction $= \\frac{26}{40} = \\frac{13}{20} = \\frac{65}{100} = 65\\%$.',
            },
            {
              id: '10.1-ex3-q3',
              number: 3,
              question:
                'A fruit punch contains $400\\text{ mL}$ apple juice, $350\\text{ mL}$ orange juice, and $250\\text{ mL}$ lemonade. What percentage of the total punch is orange juice?',
              hint: 'Find the total volume first: $400 + 350 + 250 = 1000\\text{ mL}$.',
              answer: '35%',
              explanation:
                'Total volume $= 400 + 350 + 250 = 1000\\text{ mL}$. Orange juice fraction $= \\frac{350}{1000} = \\frac{35}{100} = 35\\%$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 10.2 Percentages large and small
    // -------------------------------------------------------------------------
    {
      id: '10.2',
      subtopicNumber: '10.2',
      title: 'Percentages large and small',
      type: 'lesson',
      steps: [
        {
          id: '10.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The Mental Percentage Toolkit',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Lego Building Blocks for Any Percentage',
              scenario:
                'You never need a calculator for mental percentages if you know the master building blocks:\n- $50\\%$ $\\rightarrow$ Halve the amount ($\\div 2$)\n- $25\\%$ $\\rightarrow$ Halve again ($\\div 4$)\n- $10\\%$ $\\rightarrow$ Shift decimal one place ($\\div 10$)\n- $5\\%$ $\\rightarrow$ Halve $10\\%$\n- $1\\%$ $\\rightarrow$ Shift decimal two places ($\\div 100$)\nNeed $15\\%$ of $£80$? Find $10\\%$ ($£8$) and $5\\%$ ($£4$). Combine them: $£8 + £4 = £12$!',
              takeaway:
                'Percentages can also be larger than 100% (e.g. $150\\%$ means $1.5$ times the whole amount) or smaller than 1% (e.g. $0.5\\%$ means half of 1%).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Percentage of an Amount',
                  definition: 'Multiplying the percentage (as a fraction or decimal) by the total quantity.',
                  example: '$20\\%$ of $60 = \\frac{1}{5} \\times 60 = 12$.',
                },
                {
                  term: 'Percentages Greater than 100%',
                  definition: 'A percentage greater than 100% represents more than the entire original quantity.',
                  example: '$150\\%$ of $40 = 1.5 \\times 40 = 60$.',
                },
                {
                  term: 'Percentages Less than 1%',
                  definition: 'Tiny fractions of a percent, often used in interest rates, medicine, or chemical purity.',
                  example: '$0.5\\%$ of $600 = \\text{half of } 1\\% = \\text{half of } 6 = 3$.',
                },
                {
                  term: 'Percentage Increase / Decrease',
                  definition: 'Adding or subtracting a percentage of the original value.',
                  example: 'Increase $£50$ by $10\\%$: $10\\%$ is $£5$, new price is $£50 + £5 = £55$.',
                },
              ],
            },
          ],
        },
        {
          id: '10.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Mental Percentages & Large / Small Values',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Find $10\\%$, $5\\%$, and $1\\%$ of $£240$.\n(b) Use your answers to find $35\\%$ of $£240$.\n(c) Calculate $120\\%$ of $50\\text{ kg}$.\n(d) Calculate $0.5\\%$ of $800\\text{ m}$.',
                context: 'Mental percentage strategies, large (>100%) and small (<1%) percentages',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Find the building blocks for £240',
                    content:
                      '- $10\\%$ of $£240 = 240 \\div 10 = £24$.\n- $5\\%$ of $£240 = \\text{half of } £24 = £12$.\n- $1\\%$ of $£240 = 240 \\div 100 = £2.40$.',
                    mathFormula: '10\\% = £24, \\quad 5\\% = £12, \\quad 1\\% = £2.40',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Combine building blocks for 35%',
                    content:
                      '$35\\% = 30\\% + 5\\% = (3 \\times 10\\%) + 5\\%$:',
                    mathFormula: '3 \\times £24 + £12 = £72 + £12 = £84',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Calculate 120% of 50 kg',
                    content:
                      '$120\\% = 100\\% + 20\\%$. $100\\%$ is $50\\text{ kg}$. $10\\%$ is $5\\text{ kg}$, so $20\\%$ is $10\\text{ kg}$:',
                    mathFormula: '50\\text{ kg} + 10\\text{ kg} = 60\\text{ kg}',
                  },
                  {
                    stepNumber: 4,
                    label: 'Part (d): Calculate 0.5% of 800 m',
                    content:
                      'First find $1\\%$: $1\\%$ of $800 = 800 \\div 100 = 8\\text{ m}$.\nNow $0.5\\%$ is half of $1\\%$:',
                    mathFormula: '0.5\\% = \\frac{1}{2} \\times 8\\text{ m} = 4\\text{ m}',
                  },
                ],
                finalAnswer: '(a) £24, £12, £2.40; (b) £84; (c) 60 kg; (d) 4 m',
              },
            },
          ],
        },
        {
          id: '10.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Thinking a Percentage Can Never Exceed 100%',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Thinking 125% of 40 is impossible or equals 5',
                wrongWay: '125% of 40 = 0.125 * 40 = 5',
                whyWrong:
                  'Students confuse $125\\%$ with $12.5\\%$ or think 100% is an unbreakable maximum for calculations.',
                correctWay:
                  '$100\\%$ of $40$ is $40$. Since $125\\% > 100\\%$, the answer MUST be bigger than $40$! $125\\% = 1.25 \\times 40 = 50$.',
                proTip:
                  'For percentages greater than 100%, break it into $100\\% + \\text{extra}$: $150\\% = \\text{whole} + \\text{half}$.',
                memoryHook: '100% is 1 whole; 200% is 2 wholes; over 100% is always MORE than the start!',
              },
            },
          ],
        },
        {
          id: '10.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Use mental building blocks (10%, 5%, 1%, 50%) on the Teacher\'s Board, then check your answers.',
            },
          ],
          questions: [
            {
              id: '10.2-ex1-q1',
              number: 1,
              question: 'What is $10\\%$ of $£90$?',
              hint: 'Divide 90 by 10.',
              answer: '£9',
              explanation: '$90 \\div 10 = £9$.',
            },
            {
              id: '10.2-ex1-q2',
              number: 2,
              question: 'What is $25\\%$ of $64\\text{ kg}$?',
              hint: '$25\\% = \\frac{1}{4}$. Divide 64 by 4.',
              answer: '16 kg',
              explanation: '$64 \\div 4 = 16\\text{ kg}$.',
            },
            {
              id: '10.2-ex1-q3',
              number: 3,
              question: 'What is $1\\%$ of $700$?',
              hint: 'Divide 700 by 100.',
              answer: '7',
              explanation: '$700 \\div 100 = 7$.',
            },
          ],
        },
        {
          id: '10.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply percentage calculations to sales discounts, growth, and bank interest on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '10.2-ex2-q1',
              number: 1,
              question:
                'A winter coat originally costs $£80$. In a sale, it is reduced by $15\\%$. How much is the discount in pounds?',
              hint: '$10\\%$ of 80 is $£8$, $5\\%$ is $£4$. Add them.',
              answer: '£12',
              explanation: '$10\\% = £8$, $5\\% = £4$. $15\\% = £8 + £4 = £12$.',
            },
            {
              id: '10.2-ex2-q2',
              number: 2,
              question:
                'A video game streamer had $500$ followers last month. This month, follower count grew to $140\\%$ of last month’s count. How many followers do they have now?',
              hint: '$100\\%$ is $500$. $40\\%$ is $4 \\times 50 = 200$. Add them: $500 + 200$.',
              answer: '700 followers',
              explanation: '$140\\% = 1.4 \\times 500 = 700$ followers.',
            },
            {
              id: '10.2-ex2-q3',
              number: 3,
              question:
                'A bank account pays $0.5\\%$ annual interest on savings. If Mia has $£1200$ in the account, how much interest does she earn in one year?',
              hint: '$1\\%$ of $1200$ is $£12$. $0.5\\%$ is half of $1\\%$.',
              answer: '£6',
              explanation: '$1\\%$ of $£1200 = £12$. $0.5\\% = \\frac{1}{2} \\times £12 = £6$.',
            },
          ],
        },
        {
          id: '10.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Tackle these 3 challenge questions on commutative percentages, sequential changes, and small percentages on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '10.2-ex3-q1',
              number: 1,
              question:
                'Which is larger, or are they equal: $16\\%$ of $50$ or $50\\%$ of $16$?',
              hint: '$x\\%$ of $y = \\frac{x \\times y}{100} = y\\%$ of $x$. This is the famous commutative percentage trick!',
              answer: 'They are equal (both equal 8)',
              explanation:
                '$16\\%$ of $50 = \\frac{16 \\times 50}{100} = 8$. $50\\%$ of $16 = \\frac{1}{2} \\times 16 = 8$. They are equal!',
            },
            {
              id: '10.2-ex3-q2',
              number: 2,
              question:
                'A skateboard price of $£60$ is increased by $20\\%$. Later, the new price is decreased by $20\\%$. What is the final price of the skateboard?',
              hint: 'Step 1: $20\\%$ of 60 is 12, so price becomes $£72$. Step 2: Now find $20\\%$ of 72, which is $14.40$. Subtract that from 72.',
              answer: '£57.60',
              explanation:
                'Increase by $20\\%$: $60 + 12 = £72$. Decrease by $20\\%$ of $72$: $20\\%$ of $72 = 14.40$. Final price $= 72 - 14.40 = £57.60$ (not $£60$ because the percentage reduction applies to the higher amount!).',
            },
            {
              id: '10.2-ex3-q3',
              number: 3,
              question:
                'A scientist prepares a saline solution with $0.2\\%$ salt concentration by mass. How many grams of salt are present in $3500\\text{ grams}$ of solution?',
              hint: '$1\\%$ of $3500 = 35\\text{ g}$. $0.1\\% = 3.5\\text{ g}$. Multiply by 2.',
              answer: '7 g',
              explanation: '$1\\%$ of $3500 = 35\\text{ g}$. $0.2\\% = 2 \\times 0.1\\% = 2 \\times 3.5\\text{ g} = 7\\text{ g}$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Unit 10 End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '10-test',
      subtopicNumber: '10',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '10-test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Part A: Basic Recall & Calculation',
          badge: 'Test: Part A (Basic Recall)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 recall and conversion questions on the Teacher\'s Board, then check your answers.',
            },
          ],
          questions: [
            {
              id: '10-test-q1',
              number: 1,
              question: 'What is $75\\%$ written as a fraction in simplest form?',
              hint: 'Divide top and bottom of $\\frac{75}{100}$ by 25.',
              answer: '3/4',
              explanation: '$\\frac{75}{100} = \\frac{3}{4}$.',
            },
            {
              id: '10-test-q2',
              number: 2,
              question: 'Convert $\\frac{13}{20}$ to a percentage.',
              hint: 'Multiply numerator and denominator by 5.',
              answer: '65%',
              explanation: '$\\frac{13 \\times 5}{20 \\times 5} = \\frac{65}{100} = 65\\%$.',
            },
            {
              id: '10-test-q3',
              number: 3,
              question: 'What is $30\\%$ of $£180$?',
              hint: '$10\\%$ is $£18$. Multiply by 3.',
              answer: '£54',
              explanation: '$10\\% = 180 \\div 10 = £18$. $30\\% = 3 \\times 18 = £54$.',
            },
          ],
        },
        {
          id: '10-test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Part B: Real-World Applications',
          badge: 'Test: Part B (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply your percentage skills to these 3 real-world word problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '10-test-q4',
              number: 1,
              question:
                'Out of $40$ students in a music club, $28$ play a string instrument. What percentage of the students play a string instrument?',
              hint: '$\\frac{28}{40} = \\frac{7}{10} = 70\\%$.',
              answer: '70%',
              explanation: '$\\frac{28}{40} = \\frac{7}{10} = \\frac{70}{100} = 70\\%$.',
            },
            {
              id: '10-test-q5',
              number: 2,
              question:
                'A restaurant bill comes to $£60$. The customers leave a $12.5\\%$ tip. How much tip do they leave in pounds?',
              hint: '$12.5\\% = \\frac{1}{8}$ of $100\\%$. Divide 60 by 8 (or $10\\% + 2.5\\%$).',
              answer: '£7.50',
              explanation: '$10\\% = £6.00$. $2.5\\% = £6.00 \\div 4 = £1.50$. Tip $= £6.00 + £1.50 = £7.50$.',
            },
            {
              id: '10-test-q6',
              number: 3,
              question:
                'A fitness smartwatch was priced at $£120$. During a flash sale, it is discounted by $25\\%$. What is the sale price?',
              hint: '$25\\%$ of $120$ is $120 \\div 4 = £30$. Subtract $£30$ from $£120$.',
              answer: '£90',
              explanation: 'Discount $= 120 \\div 4 = £30$. Sale price $= 120 - 30 = £90$.',
            },
          ],
        },
        {
          id: '10-test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Part C: Reasoning & Challenge',
          badge: 'Test: Part C (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Complete these 3 challenge problems covering large percentages, tiny percentages, and multiple percentages on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '10-test-q7',
              number: 1,
              question:
                'A company sold $175\\%$ as many laptops this year as last year. If they sold $800$ laptops last year, how many laptops did they sell this year?',
              hint: '$100\\%$ is $800$. $75\\%$ is $\\frac{3}{4} \\times 800 = 600$. $800 + 600 = ?$',
              answer: '1400 laptops',
              explanation: '$175\\% = 1.75 \\times 800 = 800 + 600 = 1400$ laptops.',
            },
            {
              id: '10-test-q8',
              number: 2,
              question:
                'A tiny insect egg has a mass of $0.4\\%$ of $1.5\\text{ grams}$. What is the mass of the egg in milligrams? ($1\\text{ g} = 1000\\text{ mg}$)',
              hint: '$1.5\\text{ g} = 1500\\text{ mg}$. Now find $0.4\\%$ of $1500\\text{ mg}$: $1\\% = 15\\text{ mg}$, $0.1\\% = 1.5\\text{ mg}$.',
              answer: '6 mg',
              explanation:
                '$1.5\\text{ g} = 1500\\text{ mg}$. $1\\% = 15\\text{ mg}$. $0.4\\% = 4 \\times 0.1\\% = 4 \\times 1.5\\text{ mg} = 6\\text{ mg}$.',
            },
            {
              id: '10-test-q9',
              number: 3,
              question:
                'In a school, $60\\%$ of students study French. Of those who study French, $25\\%$ also study Spanish. What percentage of the ENTIRE school studies BOTH French and Spanish?',
              hint: 'Find $25\\%$ (one quarter) of $60\\%$.',
              answer: '15%',
              explanation: '$\\frac{1}{4}$ of $60\\% = 15\\%$. So $15\\%$ of all students study both languages.',
            },
          ],
        },
      ],
    },
  ],
};
