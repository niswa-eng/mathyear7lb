/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit4: Unit = {
  id: 'unit-4',
  unitNumber: 4,
  title: 'Decimals',
  learningObjectives: [
    'Compare and order decimals and fractions.',
    'Estimate, add, and subtract positive and negative decimals.',
    'Multiply and divide decimals by whole numbers.',
    'Simplify calculations involving decimals and fractions using arithmetic rules and order of operations.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 4.1 Ordering Decimals
    // -------------------------------------------------------------------------
    {
      id: '4.1',
      subtopicNumber: '4.1',
      title: 'Ordering Decimals',
      type: 'lesson',
      steps: [
        {
          id: '4.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Comparing Money & Place Value Padding',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'The Price Tag Trap: $0.4 vs $0.35',
              scenario:
                'Imagine two snack bars: one costs $\$0.4$ and the other costs $\$0.35$. Many students think $0.35$ is bigger because $35$ looks bigger than $4$! But $\$0.4$ is $\$0.40$ (40 cents), which is more expensive than $35$ cents. Adding trailing zeros to give both numbers the same number of decimal places makes comparing crystal clear.',
              takeaway:
                'Never compare decimals by length! Pad numbers with trailing zeros so they have the same number of decimal places, then compare column by column from left to right.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Place Value Padding',
                  definition: 'Adding zeros to the end of a decimal to make comparison easier without changing its value.',
                  example: '$0.4 = 0.40 = 0.400$.',
                },
                {
                  term: 'Ascending vs Descending Order',
                  definition: 'Ascending means smallest to largest. Descending means largest to smallest.',
                  example: 'Ascending: $0.2 < 0.35 < 0.4$.',
                },
              ],
            },
          ],
        },
        {
          id: '4.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Ordering Decimals and Fractions',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  '(a) Which decimal is larger: $0.6$ or $0.58$?\n(b) Write in ascending order (smallest first): $0.72,\\ 0.705,\\ 0.8,\\ 0.09$\n(c) Compare $\\dfrac{3}{5}$ and $0.65$. Which is larger?',
                context: 'Simplest Comparison Strategy',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Pad with a trailing zero',
                    content: 'Write $0.6$ as $0.60$. Compare $0.60$ with $0.58$. Both have 0 units. In the tenths column, $6 > 5$.',
                    mathFormula: '0.60 > 0.58 \\implies 0.6\\text{ is larger}',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Pad all numbers to 3 decimal places',
                    content: 'Rewrite: $0.720,\\ 0.705,\\ 0.800,\\ 0.090$. Look at the whole thousandths: $90 < 705 < 720 < 800$.',
                    mathFormula: '0.09 < 0.705 < 0.72 < 0.8',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Convert fraction to decimal',
                    content: 'Convert $\\frac{3}{5}$ into tenths: $\\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10} = 0.60$. Compare with $0.65$.',
                    mathFormula: '0.60 < 0.65 \\implies 0.65\\text{ is larger}',
                  },
                ],
                finalAnswer: '(a) 0.6 is larger; (b) 0.09, 0.705, 0.72, 0.8; (c) 0.65 is larger',
              },
            },
          ],
        },
        {
          id: '4.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Thinking "Longer Decimal = Bigger Number"',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Assuming 0.125 is greater than 0.2',
                wrongWay: 'Saying 0.125 > 0.2 because 125 is bigger than 2',
                whyWrong: '0.2 is 2 tenths (0.200), whereas 0.125 is only 1 tenth and 25 thousandths! 200 thousandths is bigger than 125 thousandths.',
                correctWay: '0.2 = 0.200 > 0.125',
                proTip: 'Always compare the very FIRST digit after the decimal point (the tenths column) before looking at any other digits.',
                memoryHook: 'Tenths beat hundredths every single time!',
              },
            },
          ],
        },
        {
          id: '4.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Decimal Comparison Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Insert the correct symbol ($<$, $>$, or $=$) between each pair.',
            },
          ],
          questions: [
            {
              id: '4.1-ex1-q1',
              number: 1,
              question: 'Compare using $<$ or $>$: $0.7 \\ \\square \\ 0.68$',
              hint: 'Write 0.7 as 0.70.',
              answer: '0.7 > 0.68',
              explanation: '$0.7 = 0.70$. Since $70 > 68$, $0.7 > 0.68$.',
            },
            {
              id: '4.1-ex1-q2',
              number: 2,
              question: 'Which is smaller: $0.05$ or $0.5$?',
              hint: '0.05 has 0 tenths, while 0.5 has 5 tenths.',
              answer: '0.05',
              explanation: '$0.05 = 5\\text{ hundredths}$. $0.5 = 50\\text{ hundredths}$. $0.05$ is smaller.',
            },
            {
              id: '4.1-ex1-q3',
              number: 3,
              question: 'Which is larger: $\\dfrac{1}{2}$ or $0.48$?',
              hint: '1/2 is equal to 0.5 (or 0.50).',
              answer: '\\dfrac{1}{2}\\text{ (or }0.5\\text{)}',
              explanation: '$\\frac{1}{2} = 0.50$. Since $0.50 > 0.48$, $\\frac{1}{2}$ is larger.',
            },
          ],
        },
        {
          id: '4.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Athletic Race Times & Chemistry Masses',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Order times and measurements from real-world competitions and laboratories.',
            },
          ],
          questions: [
            {
              id: '4.1-ex2-q1',
              number: 1,
              context: 'Swimming Gala Times',
              question:
                'Four swimmers finish a race with times: Adam ($28.35\\text{ s}$), Ben ($28.4\\text{ s}$), Charlie ($28.09\\text{ s}$), and Dan ($28.305\\text{ s}$). Who won the race (fastest time)?',
              hint: 'In a race, the lowest time wins! Compare with 3 decimal places.',
              answer: 'Charlie (28.09 seconds)',
              explanation: 'Pad times: Charlie ($28.090$), Dan ($28.305$), Adam ($28.350$), Ben ($28.400$). The smallest time is $28.09\\text{ s}$.',
            },
            {
              id: '4.1-ex2-q2',
              number: 2,
              context: 'Jewellery Metal Purity',
              question:
                'A jeweler tests three gold rings weighing $4.62\\text{ g}$, $4.6\\text{ g}$, and $4.09\\text{ g}$. Arrange the weights in descending order (heaviest to lightest).',
              hint: 'Descending order starts with the largest value.',
              answer: '4.62\\text{ g},\\ 4.6\\text{ g},\\ 4.09\\text{ g}',
              explanation: '$4.62 > 4.60 > 4.09$. So the order is $4.62\\text{ g}, 4.6\\text{ g}, 4.09\\text{ g}$.',
            },
            {
              id: '4.1-ex2-q3',
              number: 3,
              context: 'Fraction & Decimal Recipe Quantities',
              question:
                'A chef compares three measuring cups of sugar: $\\dfrac{3}{4}\\text{ kg}$, $0.7\\text{ kg}$, and $0.78\\text{ kg}$. Write them in order of size, starting with the smallest.',
              hint: 'Convert 3/4 to a decimal: 0.75.',
              answer: '0.7\\text{ kg},\\ \\dfrac{3}{4}\\text{ kg (0.75)},\\ 0.78\\text{ kg}',
              explanation: '$\\frac{3}{4} = 0.75$. Comparing $0.70 < 0.75 < 0.78$. The order is $0.7\\text{ kg}, \\frac{3}{4}\\text{ kg}, 0.78\\text{ kg}$.',
            },
          ],
        },
        {
          id: '4.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Decimal In-Between Puzzles & Negatives',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Explore numbers squeezed between decimals and compare negative decimals.',
            },
          ],
          questions: [
            {
              id: '4.1-ex3-q1',
              number: 1,
              context: 'Finding a Number In-Between',
              question:
                'Find a decimal number that lies strictly between $0.34$ and $0.35$.',
              hint: 'Add an extra zero: between 0.340 and 0.350.',
              answer: '0.345\\text{ (or any value such as 0.341, 0.342...)}',
              explanation: 'Write as $0.340$ and $0.350$. Any number such as $0.345$ lies strictly between them.',
            },
            {
              id: '4.1-ex3-q2',
              number: 2,
              context: 'Negative Decimals',
              question:
                'Which is colder (smaller): $-2.4^\\circ\\text{C}$ or $-2.7^\\circ\\text{C}$?',
              hint: 'On a number line, numbers further to the left are smaller.',
              answer: '-2.7^\\circ\\text{C}',
              explanation: 'On a thermometer, $-2.7$ is lower down and further left from zero than $-2.4$. Therefore, $-2.7 < -2.4$.',
            },
            {
              id: '4.1-ex3-q3',
              number: 3,
              context: 'Fraction Decimal Inequality',
              question:
                'Arrange from smallest to largest: $-\\dfrac{1}{2},\\ -0.6,\\ 0.25,\\ \\dfrac{1}{5}$',
              hint: '-1/2 = -0.5, 1/5 = 0.2.',
              answer: '-0.6 < -\\dfrac{1}{2} < \\dfrac{1}{5} < 0.25',
              explanation: 'Decimals: $-0.6 < -0.5 < 0.2 < 0.25$. Converting back: $-0.6 < -\\frac{1}{2} < \\frac{1}{5} < 0.25$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 4.2 Adding and subtracting decimals
    // -------------------------------------------------------------------------
    {
      id: '4.2',
      subtopicNumber: '4.2',
      title: 'Adding and subtracting decimals',
      type: 'lesson',
      steps: [
        {
          id: '4.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The Vertical Highway & Decimal Point Alignment',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Lining Up the Decimal Buttons',
              scenario:
                'Imagine a cash register receipt. To add $\$12.50$ and $\$3.25$, the dollars must line up with dollars, and cents must line up with cents! If you don\'t line up the decimal point, you might accidentally add $3$ dollars to $12$ cents. The decimal points form a straight vertical highway.',
              takeaway:
                'Always line up the decimal points vertically before adding or subtracting. Fill any blank spaces with placeholder zeros.',
            },
            {
              type: 'rule_box',
              title: 'Golden Addition & Subtraction Rules',
              rule: 'Three strict steps for column addition and subtraction:',
              tips: [
                'Line up all decimal points in a straight vertical line.',
                'Pad short decimals with zeros on the right (e.g. $8.4 - 2.15 \\to 8.40 - 2.15$).',
                'Bring the decimal point straight down into your answer line.',
              ],
            },
          ],
        },
        {
          id: '4.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Aligning Columns & Borrowing Across Zeros',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Calculate each of the following step-by-step:\n(a) $4.3 + 2.5$\n(b) $8.64 + 3.7$\n(c) $15 - 4.68$',
                context: 'Simplest Decimal Addition & Subtraction',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Simplest direct addition',
                    content: 'Line up decimal points: $4.3 + 2.5$. Add tenths ($3 + 5 = 8$), add units ($4 + 2 = 6$).',
                    mathFormula: '4.3 + 2.5 = 6.8',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Padding and carrying',
                    content: 'Write $3.7$ as $3.70$. Add hundredths ($4 + 0 = 4$). Add tenths ($6 + 7 = 13$, write 3 carry 1). Add units ($8 + 3 + 1 = 12$).',
                    mathFormula: '8.64 + 3.70 = 12.34',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Subtracting from a whole number (borrowing across zeros)',
                    content: 'Write $15$ as $15.00$. Line up with $4.68$. Borrow from the units column: $15.00 - 4.68 = 10.32$.',
                    mathFormula: '15.00 - 4.68 = 10.32',
                    note: 'Check: $10.32 + 4.68 = 15.00$. Correct!',
                  },
                ],
                finalAnswer: '(a) 6.8, (b) 12.34, (c) 10.32',
              },
            },
          ],
        },
        {
          id: '4.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Misaligning Right Edges Trap',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Lining up numbers by their right edges instead of decimal points',
                wrongWay: 'Writing 7.2 + 0.35 with the 2 above the 5',
                whyWrong: '2 is in the tenths column, but 5 is in the hundredths column! You are adding tenths to hundredths.',
                correctWay: '7.20 + 0.35 = 7.55',
                proTip: 'Draw a faint vertical dotted line through all the decimal points first before writing your digits.',
                memoryHook: 'The decimal points must march in a straight column like soldiers!',
              },
            },
          ],
        },
        {
          id: '4.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Decimal Addition & Subtraction',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Calculate each answer on the Teacher\'s Board. Remember to align decimal points.',
            },
          ],
          questions: [
            {
              id: '4.2-ex1-q1',
              number: 1,
              question: 'Calculate: $3.2 + 4.6$',
              hint: 'Add tenths: 2 + 6 = 8. Add units: 3 + 4 = 7.',
              answer: '7.8',
              explanation: '$3.2 + 4.6 = 7.8$.',
            },
            {
              id: '4.2-ex1-q2',
              number: 2,
              question: 'Calculate: $9.5 - 3.2$',
              hint: 'Subtract tenths: 5 - 2 = 3. Subtract units: 9 - 3 = 6.',
              answer: '6.3',
              explanation: '$9.5 - 3.2 = 6.3$.',
            },
            {
              id: '4.2-ex1-q3',
              number: 3,
              question: 'Calculate: $5.8 + 2.45$',
              hint: 'Pad 5.8 with a zero: 5.80 + 2.45.',
              answer: '8.25',
              explanation: '$5.80 + 2.45 = 8.25$.',
            },
          ],
        },
        {
          id: '4.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Shopping Receipts & Woodwork Cutting',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Solve real-world subtraction and addition word problems.',
            },
          ],
          questions: [
            {
              id: '4.2-ex2-q1',
              number: 1,
              context: 'Store Change',
              question:
                'Lucas pays with a $\$20$ bill for a book costing $\$14.35$. How much change should he receive?',
              hint: 'Calculate 20.00 - 14.35.',
              answer: '\\$5.65',
              explanation: '$20.00 - 14.35 = \\$5.65$.',
            },
            {
              id: '4.2-ex2-q2',
              number: 2,
              context: 'Timber Cutting Waste',
              question:
                'A timber board is $3.2\\text{ m}$ long. A carpenter cuts off a piece measuring $1.45\\text{ m}$. What length of the board remains?',
              hint: 'Calculate 3.20 - 1.45.',
              answer: '1.75\\text{ m}',
              explanation: '$3.20 - 1.45 = 1.75\\text{ m}$.',
            },
            {
              id: '4.2-ex2-q3',
              number: 3,
              context: 'Daily Hiking Trail',
              question:
                'A hiker walks $4.8\\text{ km}$ on Monday, $6.25\\text{ km}$ on Tuesday, and $5.9\\text{ km}$ on Wednesday. What is the total distance walked over the three days?',
              hint: 'Add: 4.80 + 6.25 + 5.90.',
              answer: '16.95\\text{ km}',
              explanation: '$4.80 + 6.25 + 5.90 = 16.95\\text{ km}$.',
            },
          ],
        },
        {
          id: '4.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Negative Decimals & Missing Digits',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Combine integer sign rules with decimal arithmetic.',
            },
          ],
          questions: [
            {
              id: '4.2-ex3-q1',
              number: 1,
              context: 'Negative Decimals',
              question:
                'Calculate: $-3.4 + (-2.8)$',
              hint: 'Adding two negative decimals makes a more negative decimal.',
              answer: '-6.2',
              explanation: '$-3.4 - 2.8 = -(3.4 + 2.8) = -6.2$.',
            },
            {
              id: '4.2-ex3-q2',
              number: 2,
              context: 'Subtracting a Negative Decimal',
              question:
                'Calculate: $5.2 - (-1.85)$',
              hint: 'Subtracting a negative turns into addition: 5.20 + 1.85.',
              answer: '7.05',
              explanation: '$5.20 - (-1.85) = 5.20 + 1.85 = 7.05$.',
            },
            {
              id: '4.2-ex3-q3',
              number: 3,
              context: 'Missing Number Equation',
              question:
                'Find $x$ such that: $12.4 - x = 7.85$',
              hint: 'Rearrange: x = 12.40 - 7.85.',
              answer: 'x = 4.55',
              explanation: '$x = 12.40 - 7.85 = 4.55$. (Check: $12.40 - 4.55 = 7.85$).',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 4.3 Multiplying decimals
    // -------------------------------------------------------------------------
    {
      id: '4.3',
      subtopicNumber: '4.3',
      title: 'Multiplying decimals',
      type: 'lesson',
      steps: [
        {
          id: '4.3-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Area of a Tile & Counting Decimal Places',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Floor Tiles & Counting Decimal Places',
              scenario:
                'Suppose you have a tiny floor tile that is $0.3\\text{ m}$ wide and $0.4\\text{ m}$ long. What is its area? $3 \\times 4 = 12$, but the area cannot be $12\\text{ m}^2$ because the tile is smaller than $1\\text{ m}$! Because $0.3$ has $1$ decimal place and $0.4$ has $1$ decimal place, the product must have $1 + 1 = 2$ decimal places: $0.12\\text{ m}^2$.',
              takeaway:
                'Multiply as if there are no decimals (whole numbers). Then count the total decimal places in both numbers and insert the decimal point that many places from the right.',
            },
            {
              type: 'rule_box',
              title: 'The Universal Decimal Multiplication Rule',
              rule: 'Follow this 3-step shortcut every time:',
              tips: [
                'Step 1: Ignore the decimal points and multiply as whole numbers.',
                'Step 2: Count the total number of decimal digits after the points in both factors.',
                'Step 3: Move that many places in from the right to place the decimal point.',
              ],
            },
          ],
        },
        {
          id: '4.3-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Whole Number Times Decimal',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Calculate each product:\n(a) $0.3 \\times 4$\n(b) $0.06 \\times 8$\n(c) $2.4 \\times 0.3$',
                context: 'Simplest Decimal Multiplication',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Multiply single decimal digit by whole number',
                    content: 'Multiply whole numbers: $3 \\times 4 = 12$. Total decimal places: 1. Put point 1 place from right.',
                    mathFormula: '0.3 \\times 4 = 1.2',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Multiplying hundredths',
                    content: 'Multiply whole numbers: $6 \\times 8 = 48$. Total decimal places: 2 (from 0.06). Point goes 2 places in.',
                    mathFormula: '0.06 \\times 8 = 0.48',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Decimal times decimal',
                    content: 'Multiply whole numbers: $24 \\times 3 = 72$. Count places: 1 place in $2.4$ plus 1 place in $0.3$ equals 2 decimal places.',
                    mathFormula: '2.4 \\times 0.3 = 0.72',
                  },
                ],
                finalAnswer: '(a) 1.2, (b) 0.48, (c) 0.72',
              },
            },
          ],
        },
        {
          id: '4.3-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Putting the Decimal Point in the Wrong Spot',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Calculating 0.2 × 0.3 and writing 0.6',
                wrongWay: '0.2 × 0.3 = 0.6',
                whyWrong: '2 tenths × 3 tenths = 6 hundredths (0.06), NOT 6 tenths! 1 d.p. + 1 d.p. = 2 d.p.',
                correctWay: '0.2 × 0.3 = 0.06',
                proTip: 'Always check the size: multiplying by a decimal less than 1 makes the number SMALLER, not bigger!',
                memoryHook: 'Count the decimal tails: 1 tail + 1 tail = 2 tails!',
              },
            },
          ],
        },
        {
          id: '4.3-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Mental Decimal Multiplication',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Multiply mentally using the decimal place rule.',
            },
          ],
          questions: [
            {
              id: '4.3-ex1-q1',
              number: 1,
              question: 'Calculate: $0.4 \\times 2$',
              hint: '4 times 2 is 8, with 1 decimal place.',
              answer: '0.8',
              explanation: '$4 \\times 2 = 8$. One decimal place gives $0.8$.',
            },
            {
              id: '4.3-ex1-q2',
              number: 2,
              question: 'Calculate: $0.5 \\times 0.5$',
              hint: '5 times 5 is 25, with 2 decimal places.',
              answer: '0.25',
              explanation: '$5 \\times 5 = 25$. Two decimal places gives $0.25$.',
            },
            {
              id: '4.3-ex1-q3',
              number: 3,
              question: 'Calculate: $0.07 \\times 3$',
              hint: '7 times 3 is 21, with 2 decimal places.',
              answer: '0.21',
              explanation: '$7 \\times 3 = 21$. Two decimal places gives $0.21$.',
            },
          ],
        },
        {
          id: '4.3-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Fabric Lengths & Fuel Costs',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Apply decimal multiplication to shopping and measurements.',
            },
          ],
          questions: [
            {
              id: '4.3-ex2-q1',
              number: 1,
              context: 'Curtain Fabric Price',
              question:
                'Curtain fabric costs $\$8.40$ per meter. Emma buys $2.5\\text{ meters}$. How much does she pay in total?',
              hint: 'Calculate 8.40 * 2.5.',
              answer: '\\$21.00',
              explanation: '$8.4 \\times 2.5$: $84 \\times 25 = 2100$. Two decimal places gives $\$21.00$.',
            },
            {
              id: '4.3-ex2-q2',
              number: 2,
              context: 'Rectangle Lawn Area',
              question:
                'A rectangular garden lawn has a length of $6.4\\text{ m}$ and a width of $3.5\\text{ m}$. What is the area of the lawn?',
              hint: 'Area = length * width. Calculate 6.4 * 3.5.',
              answer: '22.4\\text{ m}^2',
              explanation: '$64 \\times 35 = 2240$. Two decimal places gives $22.40\\text{ m}^2 = 22.4\\text{ m}^2$.',
            },
            {
              id: '4.3-ex2-q3',
              number: 3,
              context: 'Candy Bag Weight',
              question:
                'Each mini bag of gummy candies weighs $0.045\\text{ kg}$. A party box contains $12$ mini bags. What is the total weight of the box?',
              hint: 'Calculate 0.045 * 12.',
              answer: '0.54\\text{ kg}',
              explanation: '$45 \\times 12 = 540$. Three decimal places gives $0.540\\text{ kg} = 0.54\\text{ kg}$.',
            },
          ],
        },
        {
          id: '4.3-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Reasoning with Products of Decimals',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Deduce related products and handle multi-decimal powers.',
            },
          ],
          questions: [
            {
              id: '4.3-ex3-q1',
              number: 1,
              context: 'Deduction from a Known Fact',
              question:
                'Given that $38 \\times 47 = 1786$, state the value of $0.38 \\times 4.7$ without doing long multiplication.',
              hint: 'Count total decimal places: 2 in 0.38 + 1 in 4.7 = 3 places.',
              answer: '1.786',
              explanation: 'Total decimal places $= 2 + 1 = 3$. Place point 3 digits from right: $1.786$.',
            },
            {
              id: '4.3-ex3-q2',
              number: 2,
              context: 'Decimals Squared and Cubed',
              question:
                'Calculate the value of: $(0.1)^3$',
              hint: '0.1 * 0.1 * 0.1.',
              answer: '0.001',
              explanation: '$1 \\times 1 \\times 1 = 1$. Total decimal places $= 1 + 1 + 1 = 3$. Result is $0.001$.',
            },
            {
              id: '4.3-ex3-q3',
              number: 3,
              context: 'Negative Decimal Product',
              question:
                'Calculate: $(-0.4) \\times (-0.08)$',
              hint: 'Negative times negative is positive. Total 3 decimal places.',
              answer: '+0.032\\text{ (or }0.032\\text{)}',
              explanation: 'Two negatives make a positive. $4 \\times 8 = 32$. Three decimal places gives $+0.032$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 4.4 Dividing decimals
    // -------------------------------------------------------------------------
    {
      id: '4.4',
      subtopicNumber: '4.4',
      title: 'Dividing decimals',
      type: 'lesson',
      steps: [
        {
          id: '4.4-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Sharing Money Equally & Short Division',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Splitting the Restaurant Bill',
              scenario:
                'Suppose $4$ friends share a meal bill of $\$18.60$ equally. You use short division just like whole numbers, and keep the decimal point locked in place directly above the bus-stop line: $18.60 \\div 4 = \\$4.65$. Each friend pays $\$4.65$.',
              takeaway:
                'When dividing a decimal by a whole number, use standard short division. Keep the decimal point in the quotient directly above the decimal point in the dividend.',
            },
            {
              type: 'rule_box',
              title: 'The Short Division Decimal Rule',
              rule: 'Keep the decimal point pinned directly above:',
              tips: [
                'Put the decimal point in your answer line directly above the decimal point inside the bus-stop.',
                'Divide digit by digit from left to right.',
                'If there is a remainder at the end, append a zero to the dividend and keep dividing!',
              ],
            },
          ],
        },
        {
          id: '4.4-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Dividing a Decimal by a Whole Number',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Calculate each division:\n(a) $4.8 \\div 2$\n(b) $7.35 \\div 3$\n(c) $9 \\div 4$ (dividing a whole number to get a decimal)',
                context: 'Simplest Decimal Division',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Simplest mental division',
                    content: 'Divide 4 units by 2 = 2. Divide 8 tenths by 2 = 4 tenths.',
                    mathFormula: '4.8 \\div 2 = 2.4',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Short division with remainder carry',
                    content: '$7 \\div 3 = 2$ remainder 1. Carry 1 to the tenths: $13 \\div 3 = 4$ remainder 1. Carry 1 to hundredths: $15 \\div 3 = 5$.',
                    mathFormula: '7.35 \\div 3 = 2.45',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Appending zeros to complete division',
                    content: 'Write $9$ as $9.00$. $9 \\div 4 = 2$ remainder 1. Bring down 0: $10 \\div 4 = 2$ remainder 2. Bring down 0: $20 \\div 4 = 5$.',
                    mathFormula: '9 \\div 4 = 2.25',
                  },
                ],
                finalAnswer: '(a) 2.4, (b) 2.45, (c) 2.25',
              },
            },
          ],
        },
        {
          id: '4.4-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Forgetting to Put a Zero in the Quotient',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Writing 4.12 ÷ 4 = 1.3 instead of 1.03',
                wrongWay: '4.12 ÷ 4 = 1.3',
                whyWrong: '4 goes into 1 ZERO times! If you don\'t write the 0 in the tenths column, your answer is 10 times too big.',
                correctWay: '4.12 ÷ 4 = 1.03',
                proTip: 'Whenever a number does not go into the digit, you MUST record a 0 in that place value column before carrying to the next digit.',
                memoryHook: 'Never skip a seat at the table—put a 0 placeholder!',
              },
            },
          ],
        },
        {
          id: '4.4-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Decimal Division Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Divide each decimal by the whole number.',
            },
          ],
          questions: [
            {
              id: '4.4-ex1-q1',
              number: 1,
              question: 'Calculate: $6.4 \\div 2$',
              hint: 'Half of 6 is 3, and half of 0.4 is 0.2.',
              answer: '3.2',
              explanation: '$6.4 \\div 2 = 3.2$.',
            },
            {
              id: '4.4-ex1-q2',
              number: 2,
              question: 'Calculate: $8.4 \\div 4$',
              hint: 'Divide 8 by 4, then 4 by 4.',
              answer: '2.1',
              explanation: '$8.4 \\div 4 = 2.1$.',
            },
            {
              id: '4.4-ex1-q3',
              number: 3,
              question: 'Calculate: $15.5 \\div 5$',
              hint: '15 divided by 5 is 3; 0.5 divided by 5 is 0.1.',
              answer: '3.1',
              explanation: '$15.5 \\div 5 = 3.1$.',
            },
          ],
        },
        {
          id: '4.4-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Equal Sharing & Unit Prices',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Solve practical problems dividing rope lengths and grocery multipacks.',
            },
          ],
          questions: [
            {
              id: '4.4-ex2-q1',
              number: 1,
              context: 'Equal Ribbon Pieces',
              question:
                'A roll of decorative ribbon is $14.8\\text{ m}$ long. It is cut into $4$ equal pieces. How long is each piece?',
              hint: 'Divide 14.8 by 4.',
              answer: '3.7\\text{ m}',
              explanation: '$14.8 \\div 4 = 3.7\\text{ m}$.',
            },
            {
              id: '4.4-ex2-q2',
              number: 2,
              context: 'Bakery Flour Sharing',
              question:
                'A bag of $12.75\\text{ kg}$ of flour is distributed equally among $5$ bakers. How much flour does each baker receive?',
              hint: 'Calculate 12.75 / 5.',
              answer: '2.55\\text{ kg}',
              explanation: '$12.75 \\div 5 = 2.55\\text{ kg}$.',
            },
            {
              id: '4.4-ex2-q3',
              number: 3,
              context: 'Fuel Economy',
              question:
                'A scooter uses $7.5\\text{ liters}$ of petrol to travel $300\\text{ km}$. How many liters of petrol does it use per kilometer?',
              hint: 'Calculate 7.5 / 300 = (7.5 / 3) / 100.',
              answer: '0.025\\text{ liters per km}',
              explanation: '$7.5 \\div 3 = 2.5$. Then $2.5 \\div 100 = 0.025\\text{ liters/km}$.',
            },
          ],
        },
        {
          id: '4.4-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Dividing by Decimals & Deduction',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Divide by a decimal by multiplying both numbers by 10 or 100 first!',
            },
          ],
          questions: [
            {
              id: '4.4-ex3-q1',
              number: 1,
              context: 'Dividing by a Decimal',
              question:
                'Calculate: $6 \\div 0.2$',
              hint: 'Multiply both numbers by 10: 60 / 2.',
              answer: '30',
              explanation: 'Multiply numerator and denominator by 10: $\\dfrac{6 \\times 10}{0.2 \\times 10} = \\dfrac{60}{2} = 30$. (Ask: How many 0.2s are in 6? Exactly 30!).',
            },
            {
              id: '4.4-ex3-q2',
              number: 2,
              context: 'Deduction Fact',
              question:
                'Given that $48.6 \\div 6 = 8.1$, what is the value of $4.86 \\div 6$?',
              hint: '4.86 is 10 times smaller than 48.6.',
              answer: '0.81',
              explanation: 'Because the dividend is divided by 10, the answer is divided by 10: $8.1 \\div 10 = 0.81$.',
            },
            {
              id: '4.4-ex3-q3',
              number: 3,
              context: 'Coins in a Pile',
              question:
                'How many $20$-cent coins ($\\$0.20$) make up a total of $\$7.00$?',
              hint: 'Calculate 7.00 / 0.20 = 70 / 2.',
              answer: '35\\text{ coins}',
              explanation: '$\\dfrac{7.00}{0.20} = \\dfrac{700}{20} = 35$ coins.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 4.5 Making decimal calculations easier
    // -------------------------------------------------------------------------
    {
      id: '4.5',
      subtopicNumber: '4.5',
      title: 'Making decimal calculations easier',
      type: 'lesson',
      steps: [
        {
          id: '4.5-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Number Bonds & Friendly Pairs',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Supermarket Cashier Mental Tricks',
              scenario:
                'If you have to add $\$3.70 + \\$8.95 + \\$6.30$, don\'t add them in order! Notice that $\$3.70$ and $\$6.30$ make an exact whole $\$10.00$. Then $\$10.00 + \\$8.95 = \\$18.95$ instantly! Rearranging numbers to pair up friendly pairs makes decimal math fast and error-free.',
              takeaway:
                'Use arithmetic properties (commutative and associative laws) to group pairs that sum to whole numbers ($0.3 + 0.7 = 1$, $0.25 + 0.75 = 1$, $0.8 + 0.2 = 1$).',
            },
            {
              type: 'rule_box',
              title: 'Mental Math Decimal Strategies',
              rule: 'Smart calculation tricks:',
              tips: [
                'Friendly pairs: Look for numbers whose decimal parts sum to 1.0 (e.g. 0.4 + 0.6).',
                'Multiplying by 0.5 is the same as dividing by 2 (finding half).',
                'Multiplying by 0.25 is the same as dividing by 4 (finding a quarter).',
                'Multiplying by 0.1 is the same as dividing by 10.',
              ],
            },
          ],
        },
        {
          id: '4.5-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Grouping Friendly Pairs & Fractions',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  '(a) Calculate mentally: $4.6 + 8.9 + 5.4$\n(b) Calculate: $16 \\times 0.5$\n(c) Calculate: $4.8 \\times 25$ using smart decomposition',
                context: 'Simplest Friendly Pairs',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Group 4.6 and 5.4 first',
                    content: 'Notice $0.6 + 0.4 = 1.0$. So $4.6 + 5.4 = 10.0$. Then add $8.9$.',
                    mathFormula: '(4.6 + 5.4) + 8.9 = 10 + 8.9 = 18.9',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Multiplying by 0.5 means dividing by 2',
                    content: '$0.5 = \\frac{1}{2}$. Half of 16 is 8.',
                    mathFormula: '16 \\times 0.5 = 16 \\div 2 = 8',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Multiplying by 25 using 100 / 4',
                    content: '$25 = 100 \\div 4$. First divide $4.8$ by 4 ($1.2$), then multiply by 100.',
                    mathFormula: '4.8 \\times 25 = (4.8 \\div 4) \\times 100 = 1.2 \\times 100 = 120',
                  },
                ],
                finalAnswer: '(a) 18.9, (b) 8, (c) 120',
              },
            },
          ],
        },
        {
          id: '4.5-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Doing Tedious Long Multiplication When Shortcuts Exist',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Using vertical column multiplication for 28 × 0.5',
                wrongWay: 'Setting up a 2-digit by 2-digit column algorithm for 28 × 0.5',
                whyWrong: 'It takes 2 minutes and is prone to arithmetic slips! Multiplying by 0.5 is just halving.',
                correctWay: '28 × 0.5 = half of 28 = 14',
                proTip: 'Whenever you see × 0.5, think ÷ 2. Whenever you see × 0.25, think ÷ 4.',
                memoryHook: '0.5 is a HALF, 0.25 is a QUARTER!',
              },
            },
          ],
        },
        {
          id: '4.5-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Mental Shortcut Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Use friendly pairs and mental shortcuts to calculate each answer.',
            },
          ],
          questions: [
            {
              id: '4.5-ex1-q1',
              number: 1,
              question: 'Calculate mentally: $2.3 + 7.7$',
              hint: 'Notice that 0.3 + 0.7 = 1.0.',
              answer: '10',
              explanation: '$2.3 + 7.7 = (2 + 7) + (0.3 + 0.7) = 9 + 1 = 10$.',
            },
            {
              id: '4.5-ex1-q2',
              number: 2,
              question: 'Calculate: $24 \\times 0.5$',
              hint: 'Multiplying by 0.5 means finding half of 24.',
              answer: '12',
              explanation: '$24 \\times 0.5 = 24 \\div 2 = 12$.',
            },
            {
              id: '4.5-ex1-q3',
              number: 3,
              question: 'Calculate: $32 \\times 0.25$',
              hint: 'Multiplying by 0.25 means dividing by 4.',
              answer: '8',
              explanation: '$32 \\times 0.25 = 32 \\div 4 = 8$.',
            },
          ],
        },
        {
          id: '4.5-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Smart Grocery Totals & Bulk Buying',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Group items cleverly to compute totals without pen and paper.',
            },
          ],
          questions: [
            {
              id: '4.5-ex2-q1',
              number: 1,
              context: 'Shopping Cart Tally',
              question:
                'Find the total cost of four items: $\$2.45 + \\$5.80 + \\$7.55 + \\$4.20$. Show your friendly grouping.',
              hint: 'Group $2.45 with $7.55, and $5.80 with $4.20.',
              answer: '\\$20.00',
              explanation: 'Group 1: $2.45 + 7.55 = \\$10.00$. Group 2: $5.80 + 4.20 = \\$10.00$. Total $= \\$10 + \\$10 = \\$20.00$.',
            },
            {
              id: '4.5-ex2-q2',
              number: 2,
              context: 'Half-Price Sale',
              question:
                'A winter coat usually costs $\$86.40$. During a flash sale, it is priced at $0.5$ of its original cost. What is the sale price?',
              hint: 'Find half of 86.40.',
              answer: '\\$43.20',
              explanation: '$86.40 \\times 0.5 = 86.40 \\div 2 = \\$43.20$.',
            },
            {
              id: '4.5-ex2-q3',
              number: 3,
              context: 'Fruit Weights',
              question:
                'A recipe needs $0.75\\text{ kg}$ of apples. If you make $8$ batches of the recipe, how many kilograms of apples do you need?',
              hint: '0.75 = 3/4. Calculate 8 * 3/4.',
              answer: '6\\text{ kg}',
              explanation: '$8 \\times 0.75 = 8 \\times \\frac{3}{4} = (8 \\div 4) \\times 3 = 2 \\times 3 = 6\\text{ kg}$.',
            },
          ],
        },
        {
          id: '4.5-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Distributive Law with Decimals & BIDMAS',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Factor out common decimals and use BIDMAS with fractions.',
            },
          ],
          questions: [
            {
              id: '4.5-ex3-q1',
              number: 1,
              context: 'Factoring Out Decimals',
              question:
                'Calculate mentally: $3.7 \\times 4.8 + 3.7 \\times 5.2$',
              hint: 'Factor out 3.7: 3.7 * (4.8 + 5.2).',
              answer: '37',
              explanation: '$3.7 \\times (4.8 + 5.2) = 3.7 \\times 10 = 37$.',
            },
            {
              id: '4.5-ex3-q2',
              number: 2,
              context: 'Order of Operations',
              question:
                'Evaluate: $6.4 - 2.4 \\times 0.5 + 1.8$',
              hint: 'Multiplication first: 2.4 * 0.5 = 1.2. Then 6.4 - 1.2 + 1.8.',
              answer: '7',
              explanation: '$2.4 \\times 0.5 = 1.2$. Then $6.4 - 1.2 + 1.8 = 5.2 + 1.8 = 7.0 = 7$.',
            },
            {
              id: '4.5-ex3-q3',
              number: 3,
              context: 'Decimal Division Trick',
              question:
                'Calculate: $\\dfrac{7.2 \\times 0.25}{0.9}$',
              hint: '7.2 * 0.25 = 7.2 / 4 = 1.8. Then 1.8 / 0.9.',
              answer: '2',
              explanation: 'Numerator: $7.2 \\div 4 = 1.8$. Fraction: $1.8 \\div 0.9 = 18 \\div 9 = 2$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '4.test',
      subtopicNumber: 'Test',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '4.test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Test Part A: Core Recall',
          badge: 'Test Part A: Core Recall',
          blocks: [
            {
              type: 'text',
              content:
                'Part A tests core decimal ordering, column addition/subtraction, and multiplication/division. Work out all 3 questions on the Teacher\'s Board before checking answers.',
            },
          ],
          questions: [
            {
              id: '4.test-q1',
              number: 1,
              question: 'Which is larger: $0.78$ or $0.8$?',
              hint: '0.8 = 0.80. Compare 80 hundredths with 78 hundredths.',
              answer: '0.8',
              explanation: '$0.8 = 0.80$. Since $0.80 > 0.78$, $0.8$ is larger.',
            },
            {
              id: '4.test-q2',
              number: 2,
              question: 'Calculate: $12.5 - 4.78$',
              hint: 'Pad 12.5 to 12.50 before subtracting 4.78.',
              answer: '7.72',
              explanation: '$12.50 - 4.78 = 7.72$.',
            },
            {
              id: '4.test-q3',
              number: 3,
              question: 'Calculate: $0.06 \\times 7$',
              hint: '6 * 7 = 42, with 2 decimal places.',
              answer: '0.42',
              explanation: '$6 \\times 7 = 42$. Two decimal places gives $0.42$.',
            },
          ],
        },
        {
          id: '4.test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Test Part B: Real-World Problems',
          badge: 'Test Part B: Real-World Problems',
          blocks: [
            {
              type: 'text',
              content:
                'Part B tests applying decimal operations to shopping change, travel, and perimeter.',
            },
          ],
          questions: [
            {
              id: '4.test-q4',
              number: 1,
              context: 'School Stationery Cost',
              question:
                'Liam buys a notebook for $\$3.85$, two pens for $\$1.40$ each, and an eraser for $\$0.95$. If he pays with a $\$10$ bill, what change does he get?',
              hint: 'Total = 3.85 + 2.80 + 0.95. Then 10 - total.',
              answer: '\\$2.40',
              explanation: 'Total cost $= 3.85 + 2.80 + 0.95 = \\$7.60$. Change $= 10.00 - 7.60 = \\$2.40$.',
            },
            {
              id: '4.test-q5',
              number: 2,
              context: 'Equal Wire Cuts',
              question:
                'An electrical wire of length $9.6\\text{ m}$ is cut into $8$ equal pieces. What is the length of each piece in meters?',
              hint: 'Calculate 9.6 / 8.',
              answer: '1.2\\text{ m}',
              explanation: '$9.6 \\div 8 = 1.2\\text{ m}$.',
            },
            {
              id: '4.test-q6',
              number: 3,
              context: 'Speed and Distance',
              question:
                'A remote-controlled car travels at an average speed of $3.6\\text{ m/s}$ for $4.5\\text{ seconds}$. How far does it travel?',
              hint: 'Distance = speed * time: 3.6 * 4.5.',
              answer: '16.2\\text{ m}',
              explanation: '$36 \\times 45 = 1620$. Two decimal places gives $16.20\\text{ m} = 16.2\\text{ m}$.',
            },
          ],
        },
        {
          id: '4.test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Test Part C: Reasoning & Challenge',
          badge: 'Test Part C: Reasoning & Challenge',
          blocks: [
            {
              type: 'text',
              content:
                'Part C presents multi-step decimal puzzles and BIDMAS evaluations.',
            },
          ],
          questions: [
            {
              id: '4.test-q7',
              number: 1,
              context: 'Mental Shortcut with Factoring',
              question:
                'Calculate mentally: $4.25 \\times 6.7 + 4.25 \\times 3.3$',
              hint: 'Factor out 4.25: 4.25 * (6.7 + 3.3).',
              answer: '42.5',
              explanation: '$4.25 \\times (6.7 + 3.3) = 4.25 \\times 10 = 42.5$.',
            },
            {
              id: '4.test-q8',
              number: 2,
              context: 'Decimal Division with Fraction',
              question:
                'Calculate: $\\dfrac{0.84 \\div 0.2}{0.7}$',
              hint: '0.84 / 0.2 = 8.4 / 2 = 4.2. Then 4.2 / 0.7.',
              answer: '6',
              explanation: 'Top: $0.84 \\div 0.2 = 4.2$. Division: $4.2 \\div 0.7 = 42 \\div 7 = 6$.',
            },
            {
              id: '4.test-q9',
              number: 3,
              context: 'Negative Decimal Equation',
              question:
                'Find $k$ such that: $-1.5 \\times k = 0.45$',
              hint: 'Divide 0.45 by -1.5.',
              answer: 'k = -0.3',
              explanation: '$k = 0.45 \\div (-1.5) = -(4.5 \\div 15) = -0.3$. Check: $(-1.5) \\times (-0.3) = +0.45$.',
            },
          ],
        },
      ],
    },
  ],
};
