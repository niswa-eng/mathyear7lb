/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit3: Unit = {
  id: 'unit-3',
  unitNumber: 3,
  title: 'Place Value and Rounding',
  learningObjectives: [
    'Multiply and divide whole numbers and decimals by powers of 10.',
    'Round numbers to a given number of decimal places.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 3.1 Multiplying and dividing by powers of 10
    // -------------------------------------------------------------------------
    {
      id: '3.1',
      subtopicNumber: '3.1',
      title: 'Multiplying and dividing by powers of 10',
      type: 'lesson',
      steps: [
        {
          id: '3.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The Place Value Slider & Powers of 10',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Magnifying Glass and Shifting Digits',
              scenario:
                'Imagine you have $\$4.50$. If you multiply it by $10$, you get $\$45.00$. If you multiply by $100$, you get $\$450.00$. The decimal point doesn\'t actually move—the DIGITS slide across the place value columns! Multiplying by $10$ slides every digit ONE place to the left (making them $10\\times$ bigger). Dividing by $10$ slides every digit ONE place to the right (making them $10\\times$ smaller).',
              takeaway:
                'Powers of 10 ($10^1 = 10$, $10^2 = 100$, $10^3 = 1000$) tell you exactly how many places the digits slide. The number of zeros indicates the number of column shifts.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Power of 10',
                  definition: 'A number written as $10^n$, representing $10$ multiplied by itself $n$ times.',
                  example: '$10^1 = 10,\\ 10^2 = 100,\\ 10^3 = 1000,\\ 10^4 = 10\\,000$.',
                },
                {
                  term: 'Place Value',
                  definition: 'The numerical value a digit has by virtue of its position in a number (hundreds, tens, units, tenths, hundredths).',
                  example: 'In $3.48$, the $4$ is in the tenths column ($0.4$) and $8$ is in the hundredths column ($0.08$).',
                },
              ],
            },
            {
              type: 'rule_box',
              title: 'Quick Mental Math Rules for Powers of 10',
              rule: 'Count the zeros to determine the shift:',
              tips: [
                'Multiply by $10$: Shift digits 1 place left (or move decimal point 1 place right)',
                'Multiply by $100$: Shift digits 2 places left (or move decimal point 2 places right)',
                'Multiply by $1000$: Shift digits 3 places left (or move decimal point 3 places right)',
                'Divide by $10$: Shift digits 1 place right (or move decimal point 1 place left)',
                'Divide by $100$: Shift digits 2 places right (or move decimal point 2 places left)',
                'Divide by $1000$: Shift digits 3 places right (or move decimal point 3 places left)',
              ],
            },
          ],
        },
        {
          id: '3.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Shifting Whole Numbers and Decimals',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem: 'Calculate each of the following without using a calculator:\n(a) $3.4 \\times 10$\n(b) $0.27 \\times 100$\n(c) $58 \\div 100$\n(d) $4.9 \\div 1000$',
                context: 'Simplest Powers of 10 Calculations',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Multiply by 10 (1 zero)',
                    content: 'Move the decimal point 1 place to the right (or digits 1 place left). $3.4 \\to 34$.',
                    mathFormula: '3.4 \\times 10 = 34',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Multiply by 100 (2 zeros)',
                    content: 'Move the decimal point 2 places to the right: $0.27 \\to 2.7 \\to 27$.',
                    mathFormula: '0.27 \\times 100 = 27',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Divide by 100 (2 zeros)',
                    content: '58 is $58.0$. Move the decimal point 2 places to the left: $58 \\to 5.8 \\to 0.58$.',
                    mathFormula: '58 \\div 100 = 0.58',
                  },
                  {
                    stepNumber: 4,
                    label: 'Part (d): Divide by 1000 (3 zeros)',
                    content: 'Move decimal point 3 places to the left, inserting placeholder zeros: $4.9 \\to 0.49 \\to 0.049 \\to 0.0049$.',
                    mathFormula: '4.9 \\div 1000 = 0.0049',
                  },
                ],
                finalAnswer: '(a) 34, (b) 27, (c) 0.58, (d) 0.0049',
              },
            },
          ],
        },
        {
          id: '3.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Adding a Zero to a Decimal Trap',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Thinking multiplying by 10 always means "just stick a zero on the end"',
                wrongWay: '3.5 × 10 = 3.50',
                whyWrong: '3.50 is the EXACT SAME value as 3.5! Adding a zero to the end of a decimal does not change its value ($3.50 = 3.5$).',
                correctWay: '3.5 × 10 = 35',
                proTip: '"Stick a zero on the end" ONLY works for whole numbers (e.g. 35 × 10 = 350). For decimals, you MUST shift the decimal point or digits!',
                memoryHook: 'Zeros at the end of decimals are lazy—they don\'t change the value!',
              },
            },
          ],
        },
        {
          id: '3.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Powers of 10 Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Calculate each of the simplest multiplications and divisions below.',
            },
          ],
          questions: [
            {
              id: '3.1-ex1-q1',
              number: 1,
              question: 'Calculate: $7.2 \\times 10$',
              hint: 'Move the decimal point 1 place to the right.',
              answer: '72',
              explanation: 'Multiplying by 10 shifts the decimal point 1 place right: $7.2 \\times 10 = 72$.',
            },
            {
              id: '3.1-ex1-q2',
              number: 2,
              question: 'Calculate: $450 \\div 100$',
              hint: 'Move the decimal point 2 places to the left.',
              answer: '4.5\\text{ (or }4.50\\text{)}',
              explanation: '$450.0$ shifted 2 places left becomes $4.5$.',
            },
            {
              id: '3.1-ex1-q3',
              number: 3,
              question: 'Calculate: $0.08 \\times 100$',
              hint: 'Move the decimal point 2 places to the right.',
              answer: '8',
              explanation: 'Move 2 places right: $0.08 \\to 0.8 \\to 8$.',
            },
          ],
        },
        {
          id: '3.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Metric Unit Conversions',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Use powers of 10 to convert meters, grams, liters, and cents.',
            },
          ],
          questions: [
            {
              id: '3.1-ex2-q1',
              number: 1,
              context: 'Centimeters to Meters',
              question:
                'There are $100\\text{ cm}$ in $1\\text{ meter}$. A wooden door is $215\\text{ cm}$ tall. What is its height in meters?',
              hint: 'Divide 215 by 100.',
              answer: '2.15\\text{ m}',
              explanation: '$215 \\div 100 = 2.15\\text{ m}$.',
            },
            {
              id: '3.1-ex2-q2',
              number: 2,
              context: 'Kilograms to Grams',
              question:
                'A newborn baby panda weighs $0.145\\text{ kg}$. Given that $1\\text{ kg} = 1000\\text{ grams}$, what is the panda\'s weight in grams?',
              hint: 'Multiply 0.145 by 1000.',
              answer: '145\\text{ grams}',
              explanation: '$0.145 \\times 1000 = 145\\text{ grams}$.',
            },
            {
              id: '3.1-ex2-q3',
              number: 3,
              context: 'Liquid Volume in Milliliters',
              question:
                'A water jug holds $1.75\\text{ liters}$ of juice. There are $1000\\text{ mL}$ in $1\\text{ liter}$. How many milliliters does the jug hold?',
              hint: 'Multiply 1.75 by 1000.',
              answer: '1750\\text{ mL}',
              explanation: '$1.75 \\times 1000 = 1750\\text{ mL}$.',
            },
          ],
        },
        {
          id: '3.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Missing Powers & Inverse Operations',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Find the missing power of 10 or unknown starting decimal.',
            },
          ],
          questions: [
            {
              id: '3.1-ex3-q1',
              number: 1,
              context: 'Missing Multiplier',
              question:
                'Fill in the missing power of 10: $0.035 \\times \\square = 350$',
              hint: 'Count how many places the decimal point moved: from 0.035 to 350.',
              answer: '10\\,000\\text{ (or }10^4\\text{)}',
              explanation: 'Move 1 place: 0.35, 2 places: 3.5, 3 places: 35, 4 places: 350. The multiplier is $10\\,000$ (or $10^4$).',
            },
            {
              id: '3.1-ex3-q2',
              number: 2,
              context: 'Working Backwards',
              question:
                'A number is divided by $100$, and the answer is $0.062$. What was the original starting number?',
              hint: 'Multiply 0.062 by 100 to undo the division.',
              answer: '6.2',
              explanation: '$0.062 \\times 100 = 6.2$. Check: $6.2 \\div 100 = 0.062$.',
            },
            {
              id: '3.1-ex3-q3',
              number: 3,
              context: 'Combined Operations',
              question:
                'Evaluate: $\\dfrac{4.8 \\times 100}{10^3}$',
              hint: 'Calculate the numerator 4.8 * 100 first, then divide by 1000.',
              answer: '0.48',
              explanation: 'Numerator: $4.8 \\times 100 = 480$. Denominator: $10^3 = 1000$. Division: $480 \\div 1000 = 0.48$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 3.2 Rounding
    // -------------------------------------------------------------------------
    {
      id: '3.2',
      subtopicNumber: '3.2',
      title: 'Rounding',
      type: 'lesson',
      steps: [
        {
          id: '3.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The Rollercoaster Hill & Rounding Rule',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'The Rollercoaster Deciding Digit',
              scenario:
                'Imagine a rollercoaster cart at the top of a hill numbered $0$ to $9$. Numbers $0, 1, 2, 3, 4$ roll back down to the lower number (round down). Numbers $5, 6, 7, 8, 9$ tip over the crest and zoom forward to the higher number (round up!).',
              takeaway:
                'To round to a given number of decimal places: look at the NEXT digit to the right (the decider). If it is $5$ or more, round up! If it is $4$ or less, leave the digit as it is.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Decimal Places (d.p.)',
                  definition: 'The number of digits to the right of the decimal point.',
                  example: '$3.456$ has 3 decimal places.',
                },
                {
                  term: 'Deciding Digit',
                  definition: 'The digit immediately to the right of the rounding column that determines whether to round up or keep the digit unchanged.',
                  example: 'To round $6.384$ to 2 d.p., the deciding digit is $4$ ($6.38\\mathbf{4}$).',
                },
              ],
            },
            {
              type: 'rule_box',
              title: 'The 3-Step Rounding Protocol',
              rule: 'Follow these exact 3 steps every time:',
              tips: [
                'Step 1: Put a line after the target decimal place column (e.g., $4.78\\,|\\,2$).',
                'Step 2: Look at the first digit after the line (the deciding digit).',
                'Step 3: If 5 or more, add 1 to the target digit. If 4 or less, keep it unchanged. Then drop all digits to the right!',
              ],
            },
          ],
        },
        {
          id: '3.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Rounding to 1 and 2 Decimal Places',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem: 'Round $14.7382$ to:\n(a) the nearest whole number\n(b) 1 decimal place (1 d.p.)\n(c) 2 decimal places (2 d.p.)',
                context: 'Simplest Multi-Stage Rounding',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Nearest whole number',
                    content: 'Target is the units digit: $14\\,|\\,.7382$. Decider is $7$. Since $7 \\ge 5$, round 14 up to 15.',
                    mathFormula: '14.7382 \\approx 15',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): 1 decimal place',
                    content: 'Target is tenths: $14.7\\,|\\,382$. Decider is $3$. Since $3 < 5$, keep 7 as it is.',
                    mathFormula: '14.7382 \\approx 14.7',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): 2 decimal places',
                    content: 'Target is hundredths: $14.73\\,|\\,82$. Decider is $8$. Since $8 \\ge 5$, round 3 up to 4.',
                    mathFormula: '14.7382 \\approx 14.74',
                  },
                ],
                finalAnswer: '(a) 15, (b) 14.7, (c) 14.74',
              },
            },
          ],
        },
        {
          id: '3.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'The "Rolling Nine" Cascade Trap',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Dropping trailing zeros when rounding to a specific decimal place',
                wrongWay: 'Rounding 3.97 to 1 d.p. and writing "4"',
                whyWrong: 'The question specifically asked for 1 decimal place! Writing 4 has 0 decimal places.',
                correctWay: '3.97 rounded to 1 d.p. is 4.0',
                proTip: 'If you round a 9 up to 10, the 1 carries to the left, but you MUST write the 0 to show the required precision: $3.97 \\to 4.0$.',
                memoryHook: 'Respect the decimal place count requested!',
              },
            },
          ],
        },
        {
          id: '3.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Rounding Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Round each decimal to the specified degree of accuracy.',
            },
          ],
          questions: [
            {
              id: '3.2-ex1-q1',
              number: 1,
              question: 'Round $6.38$ to $1$ decimal place.',
              hint: 'Look at the hundredths digit (8). Does it round 3 up or keep it?',
              answer: '6.4',
              explanation: 'The deciding digit is $8$ ($8 \\ge 5$), so round $3$ up to $4$: $6.4$.',
            },
            {
              id: '3.2-ex1-q2',
              number: 2,
              question: 'Round $12.42$ to the nearest whole number.',
              hint: 'Look at the tenths digit (4).',
              answer: '12',
              explanation: 'The deciding digit is $4$ ($4 < 5$), so round down to $12$.',
            },
            {
              id: '3.2-ex1-q3',
              number: 3,
              question: 'Round $0.574$ to $2$ decimal places.',
              hint: 'Look at the third decimal digit (4).',
              answer: '0.57',
              explanation: 'The deciding digit is $4$ ($4 < 5$), so keep $0.57$.',
            },
          ],
        },
        {
          id: '3.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Real-World Money & Measurement Rounding',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Round real-world prices, sports timers, and petrol quantities.',
            },
          ],
          questions: [
            {
              id: '3.2-ex2-q1',
              number: 1,
              context: 'Supermarket Price Per Item',
              question:
                'A pack of 3 juice cartons costs $\$4.00$. The price per carton is $\$1.3333...$. Round this price to the nearest cent ($2$ decimal places).',
              hint: 'Nearest cent means 2 decimal places.',
              answer: '\\$1.33',
              explanation: 'Third decimal is $3$ ($3 < 5$). Rounded to nearest cent: $\$1.33$.',
            },
            {
              id: '3.2-ex2-q2',
              number: 2,
              context: 'Olympic Sprint Timing',
              question:
                'A runner finishes a $100\\text{ m}$ dash in $10.286\\text{ seconds}$. Round the time to $1$ decimal place for the TV sports broadcast.',
              hint: 'Look at the hundredths digit 8.',
              answer: '10.3\\text{ seconds}',
              explanation: 'The deciding digit is $8$ ($8 \\ge 5$), which rounds $2$ up to $3$: $10.3\\text{ s}$.',
            },
            {
              id: '3.2-ex2-q3',
              number: 3,
              context: 'Petrol Pump Volume',
              question:
                'A fuel pump displays $42.968\\text{ liters}$. Round the volume to $2$ decimal places.',
              hint: 'Deciding digit is 8 (third decimal). Round 6 up to 7.',
              answer: '42.97\\text{ liters}',
              explanation: 'Third decimal is $8$ ($8 \\ge 5$). $6$ rounds up to $7$: $42.97\\text{ L}$.',
            },
          ],
        },
        {
          id: '3.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Estimation & Rolling Nines',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Handle cascading nines and determine possible ranges of rounded numbers.',
            },
          ],
          questions: [
            {
              id: '3.2-ex3-q1',
              number: 1,
              context: 'The Rolling Nine',
              question:
                'Round $8.996$ to $2$ decimal places.',
              hint: 'The decider is 6. 99 rounds up to 100, carrying over to the whole number.',
              answer: '9.00',
              explanation: 'The deciding digit is $6$ ($6 \\ge 5$), which rounds $99$ hundredths up to $100$. The result is $9.00$ (both zeros must be written for 2 d.p.).',
            },
            {
              id: '3.2-ex3-q2',
              number: 2,
              context: 'Number Bounds',
              question:
                'A decimal rounded to $1$ decimal place is $5.4$. What is the smallest possible number it could have been before rounding?',
              hint: 'What number with 2 decimal places is the cutoff for rounding up to 5.4?',
              answer: '5.35',
              explanation: 'Any number from $5.35$ up to (but not including) $5.45$ rounds to $5.4$. The smallest possible number is $5.35$.',
            },
            {
              id: '3.2-ex3-q3',
              number: 3,
              context: 'Rough Estimation by Rounding',
              question:
                'Estimate the value of $\\dfrac{19.8 \\times 4.1}{0.48}$ by rounding each number to 1 significant figure or nearest whole number first.',
              hint: 'Round 19.8 to 20, 4.1 to 4, and 0.48 to 0.5.',
              answer: '160',
              explanation: 'Round: $19.8 \\approx 20$, $4.1 \\approx 4$, $0.48 \\approx 0.5$. Then $\\dfrac{20 \\times 4}{0.5} = \\dfrac{80}{0.5} = 160$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '3.test',
      subtopicNumber: 'Test',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '3.test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Test Part A: Core Recall',
          badge: 'Test Part A: Core Recall',
          blocks: [
            {
              type: 'text',
              content:
                'Part A tests powers of 10 multiplication/division and rounding to decimal places. Work out all 3 questions on the Teacher\'s Board before checking answers.',
            },
          ],
          questions: [
            {
              id: '3.test-q1',
              number: 1,
              question: 'Calculate: $0.054 \\times 100$',
              hint: 'Move the decimal point 2 places right.',
              answer: '5.4',
              explanation: '$0.054 \\times 100 = 5.4$.',
            },
            {
              id: '3.test-q2',
              number: 2,
              question: 'Calculate: $72.5 \\div 1000$',
              hint: 'Move the decimal point 3 places left.',
              answer: '0.0725',
              explanation: '$72.5 \\div 1000 = 0.0725$.',
            },
            {
              id: '3.test-q3',
              number: 3,
              question: 'Round $18.473$ to $1$ decimal place.',
              hint: 'Look at the hundredths digit 7.',
              answer: '18.5',
              explanation: 'The deciding digit is $7$ ($7 \\ge 5$). $4$ rounds up to $5$: $18.5$.',
            },
          ],
        },
        {
          id: '3.test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Test Part B: Real-World Problems',
          badge: 'Test Part B: Real-World Problems',
          blocks: [
            {
              type: 'text',
              content:
                'Part B tests applying place value and rounding to real-world measurements and shopping.',
            },
          ],
          questions: [
            {
              id: '3.test-q4',
              number: 1,
              context: 'School Track Measurement',
              question:
                'A road race track is $4250\\text{ meters}$ long. Convert this distance to kilometers by dividing by $1000$. Round your answer to $1$ decimal place.',
              hint: '4250 / 1000, then round to 1 d.p.',
              answer: '4.3\\text{ km}',
              explanation: '$4250 \\div 1000 = 4.25\\text{ km}$. Rounding $4.25$ to 1 d.p.: the deciding digit is $5$, so it rounds up to $4.3\\text{ km}$.',
            },
            {
              id: '3.test-q5',
              number: 2,
              context: 'Wholesale Purchase',
              question:
                'A stationery store orders $100$ packs of highlighters for a total cost of $\$189.50$. What is the wholesale cost of ONE pack? Round your answer to the nearest cent.',
              hint: 'Divide 189.50 by 100.',
              answer: '\\$1.90',
              explanation: '$189.50 \\div 100 = 1.895$. Rounding to 2 decimal places (nearest cent) gives $\$1.90$.',
            },
            {
              id: '3.test-q6',
              number: 3,
              context: 'Medicine Dosage',
              question:
                'A bottle contains $0.25\\text{ liters}$ of medicine. If $1\\text{ dose}$ is $10\\text{ mL}$ ($0.01\\text{ liters}$), how many full doses are in the bottle? (Hint: Calculate $0.25 \\div 0.01$).',
              hint: '0.25 / 0.01 is equivalent to 0.25 * 100.',
              answer: '25\\text{ doses}',
              explanation: 'Multiply both by 100: $25 \\div 1 = 25$ doses.',
            },
          ],
        },
        {
          id: '3.test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Test Part C: Reasoning & Challenge',
          badge: 'Test Part C: Reasoning & Challenge',
          blocks: [
            {
              type: 'text',
              content:
                'Part C presents place value puzzles and rounding bounds across Unit 3.',
            },
          ],
          questions: [
            {
              id: '3.test-q7',
              number: 1,
              context: 'Double Operation Mystery',
              question:
                'A mystery number $N$ is multiplied by $100$, and then the result is divided by $10^3$. The final number is $3.7$. What was the original number $N$?',
              hint: 'Multiplying by 100 and dividing by 1000 is overall dividing by 10. So N / 10 = 3.7.',
              answer: 'N = 37',
              explanation: 'Multiplying by $100$ and dividing by $1000$ net shifts 1 place right (divides by 10). If $N \\div 10 = 3.7$, then $N = 3.7 \\times 10 = 37$.',
            },
            {
              id: '3.test-q8',
              number: 2,
              context: 'Rounding Interval Range',
              question:
                'A bag of sugar is weighed and its mass is recorded as $2.6\\text{ kg}$ correct to $1$ decimal place. Write an inequality showing the possible actual mass $m$ of the bag.',
              hint: 'Smallest is 2.55, highest is strictly less than 2.65.',
              answer: '2.55 \\le m < 2.65\\text{ kg}',
              explanation: 'Any weight from $2.55\\text{ kg}$ up to (strictly less than) $2.65\\text{ kg}$ rounds to $2.6\\text{ kg}$. Thus $2.55 \\le m < 2.65\\text{ kg}$.',
            },
            {
              id: '3.test-q9',
              number: 3,
              context: 'Rolling Nine Chain',
              question:
                'Round $19.995$ to:\n(a) $2$ decimal places\n(b) $1$ decimal place\n(c) the nearest whole number',
              hint: 'Watch the carrying across the 9s for all parts.',
              answer: '(a) 20.00, (b) 20.0, (c) 20',
              explanation: '(a) Third decimal is 5: 99 hundredths rounds up to 100, giving $20.00$.\n(b) Second decimal is 9: 9 tenths rounds up to 10, giving $20.0$.\n(c) First decimal is 9: 19 rounds up to $20$.',
            },
          ],
        },
      ],
    },
  ],
};
