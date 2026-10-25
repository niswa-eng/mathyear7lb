/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit1: Unit = {
  id: 'unit-1',
  unitNumber: 1,
  title: 'Integers',
  learningObjectives: [
    'Estimate, add, and subtract positive and negative integers.',
    'Multiply and divide integers, including negative numbers.',
    'Find the lowest common multiple (LCM) and highest common factor (HCF).',
    'Find factors of numbers greater than 100 using divisibility rules.',
    'Understand squares, square roots, cubes, and cube roots.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 1.1 Adding and subtracting integers
    // -------------------------------------------------------------------------
    {
      id: '1.1',
      subtopicNumber: '1.1',
      title: 'Adding and subtracting integers',
      type: 'lesson',
      steps: [
        {
          id: '1.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Integers, Elevators & Pocket Money',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'The Department Store Elevator & Bank Balance',
              scenario:
                'Imagine you are in an elevator at ground level ($0$). If you go up $4$ floors to the toy section, you are at $+4$. If you go down $2$ floors to the underground car park, you are at $-2$. Similarly, having $\$10$ in your pocket is $+10$, while owing a friend $\$5$ is $-5$.',
              takeaway:
                'Positive numbers mean going UP or having money. Negative numbers mean going DOWN or owing money. Zero is the neutral starting point.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Integer',
                  definition:
                    'A whole number that can be positive, negative, or zero (no decimals or fractions).',
                  example: '..., -3, -2, -1, 0, 1, 2, 3, ...',
                },
                {
                  term: 'Additive Inverse (Opposite)',
                  definition:
                    'A number that, when added to a given number, gives zero.',
                  example: 'The opposite of $+5$ is $-5$, because $5 + (-5) = 0$.',
                },
              ],
            },
            {
              type: 'rule_box',
              title: 'Golden Rules for Adding & Subtracting Integers',
              rule: 'Adding a negative is the same as subtracting. Subtracting a negative is the same as adding!',
              tips: [
                'Adding a negative: $a + (-b) = a - b$ (adding a debt reduces your balance)',
                'Subtracting a negative: $a - (-b) = a + b$ (taking away a bill gives you relief!)',
              ],
            },
          ],
          widget: {
            type: 'number_line',
            title: 'Interactive Integer Number Line',
            initialParams: { min: -10, max: 10, initialStart: -3, initialHop: 7 },
          },
        },
        {
          id: '1.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Adding & Subtracting on a Number Line',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Calculate each of the following step-by-step:\n(a) $-3 + 7$\n(b) $2 - 6$\n(c) $-4 - (-5)$',
                context: 'Simplest Integer Starting Examples',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Starting negative and adding',
                    content:
                      'Start at $-3$ on the number line. Adding $7$ means jumping 7 units to the RIGHT. Jump 3 to reach 0, then 4 more to reach $+4$.',
                    mathFormula: '-3 + 7 = 4',
                    note: 'Notice: $-3 + 7$ is the same as $7 - 3 = 4$.',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Starting positive and subtracting more than you have',
                    content:
                      'Start at $+2$. Subtracting $6$ means jumping 6 units to the LEFT. Jump 2 to reach 0, then 4 more to reach $-4$.',
                    mathFormula: '2 - 6 = -4',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Subtracting a negative number',
                    content:
                      'Subtracting a negative turns into addition: $-4 - (-5) = -4 + 5$. Start at $-4$ and move 5 units right to reach $+1$.',
                    mathFormula: '-4 - (-5) = -4 + 5 = 1',
                  },
                ],
                finalAnswer: '(a) 4, (b) -4, (c) 1',
              },
            },
          ],
        },
        {
          id: '1.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Double Negatives Trap & Pro Tip',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Thinking two minus signs always make a minus',
                wrongWay: '$-4 - (-7) = -11$',
                whyWrong:
                  'Students see two minus signs and add $4 + 7$ to get $-11$, forgetting that subtracting a negative means adding.',
                correctWay:
                  '$-4 - (-7) = -4 + 7 = 3$',
                proTip:
                  'Whenever you see two minus signs right next to each other like $- (-)$, join them together with a circle to form a big PLUS sign $+$.',
                memoryHook: 'Taking away a bad thing is a GOOD thing! (- - = +)',
              },
            },
          ],
        },
        {
          id: '1.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Core Arithmetic Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Use the number line tool if needed, then check your answers.',
            },
          ],
          questions: [
            {
              id: '1.1-ex1-q1',
              number: 1,
              question: 'Calculate: $-6 + 11$',
              hint: 'Start at -6 on the number line and jump 11 units to the right.',
              answer: '5',
              explanation: '$-6 + 11 = 11 - 6 = 5$.',
            },
            {
              id: '1.1-ex1-q2',
              number: 2,
              question: 'Calculate: $4 - 9$',
              hint: 'Start at 4 and move 9 units to the left.',
              answer: '-5',
              explanation: 'Moving 4 units left reaches 0, and 5 more units left reaches $-5$. So $4 - 9 = -5$.',
            },
            {
              id: '1.1-ex1-q3',
              number: 3,
              question: 'Calculate: $-5 - (-8)$',
              hint: 'Remember: subtracting a negative turns into addition.',
              answer: '3',
              explanation: 'Subtracting $-8$ is the same as adding $8$: $-5 + 8 = 3$.',
            },
          ],
        },
        {
          id: '1.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Everyday Life Applications',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply your integer addition and subtraction skills to money, altitude, and submarine navigation.',
            },
          ],
          questions: [
            {
              id: '1.1-ex2-q1',
              number: 1,
              context: 'Submarine Navigation',
              question:
                'A research submarine cruises at a depth of $-140\\text{ m}$ below sea level. It ascends $65\\text{ m}$, then dives down $30\\text{ m}$. What is its new depth?',
              hint: 'Ascending means adding +65; diving means subtracting 30.',
              answer: '-105\\text{ m}',
              explanation: '$-140 + 65 - 30 = -75 - 30 = -105\\text{ m}$ (or $105\\text{ m}$ below sea level).',
            },
            {
              id: '1.1-ex2-q2',
              number: 2,
              context: 'Student Bank Account',
              question:
                'Maya has $\$18$ in her bank account. She buys a school calculator for $\$25$ using overdraft, and then deposits $\$12$ from her allowance. What is her final bank balance?',
              hint: 'Overdraft allows balance to go below zero.',
              answer: '+\\$5\\text{ (or }\\$5\\text{)}',
              explanation: '$18 - 25 + 12 = -7 + 12 = +\\$5$. Her account is in credit by $\$5$.',
            },
            {
              id: '1.1-ex2-q3',
              number: 3,
              context: 'Mountain & Valley Range',
              question:
                'The highest peak in Death Valley is at $+3368\\text{ m}$ above sea level, and Badwater Basin is at $-86\\text{ m}$ below sea level. What is the total vertical distance between the peak and the basin?',
              hint: 'Distance between two points is the higher value minus the lower value.',
              answer: '3454\\text{ m}',
              explanation: 'Distance $= 3368 - (-86) = 3368 + 86 = 3454\\text{ m}$.',
            },
          ],
        },
        {
          id: '1.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Reasoning & Magic Squares',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Test your algebraic reasoning with mystery integer patterns and inequalities.',
            },
          ],
          questions: [
            {
              id: '1.1-ex3-q1',
              number: 1,
              context: 'Mystery Integers',
              question:
                'The sum of two integers is $-3$, and their difference is $7$. What are the two integers?',
              hint: 'Test pairs of numbers that have a difference of 7, such as 2 and -5.',
              answer: '2\\text{ and }-5',
              explanation: 'Checking $2 + (-5) = -3$ and $2 - (-5) = 2 + 5 = 7$. The two integers are $2$ and $-5$.',
            },
            {
              id: '1.1-ex3-q2',
              number: 2,
              context: 'Missing Number Equation',
              question:
                'Find the integer $n$ that satisfies: $-14 - n = -6$',
              hint: 'Rearrange: what do you subtract from -14 to make it warmer / higher up at -6?',
              answer: 'n = -8',
              explanation: '$-14 - n = -6 \\implies -14 + 6 = n \\implies n = -8$. Check: $-14 - (-8) = -14 + 8 = -6$.',
            },
            {
              id: '1.1-ex3-q3',
              number: 3,
              context: 'Consecutive Integers Puzzle',
              question:
                'Three consecutive integers add up to $-12$. Find the three integers.',
              hint: 'Let the middle number be x. Then the three numbers are x - 1, x, and x + 1.',
              answer: '-5,\\ -4,\\ -3',
              explanation: 'Let middle number be $x$. $(x - 1) + x + (x + 1) = 3x = -12 \\implies x = -4$. The three integers are $-5, -4, -3$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 1.2 Multiplying and dividing integers
    // -------------------------------------------------------------------------
    {
      id: '1.2',
      subtopicNumber: '1.2',
      title: 'Multiplying and dividing integers',
      type: 'lesson',
      steps: [
        {
          id: '1.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Sign Rules for Multiplication & Division',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Movie Playback: Fast Forward & Rewind',
              scenario:
                'Think of a video recording. Playing forward at $+2\\times$ speed makes the character walk forward ($+ \\times + = +$). Rewinding at $-2\\times$ speed while walking forward makes them go backward ($+ \\times - = -$). But rewinding ($-$) a character who is already walking backward ($-$) makes them look like they are walking FORWARD on screen ($- \\times - = +$)!',
              takeaway:
                'Same signs give a positive result. Different signs give a negative result.',
            },
            {
              type: 'rule_box',
              title: 'The Universal Sign Multiplier Chart',
              rule: 'The rule for dividing integers is EXACTLY the same as the rule for multiplying integers!',
              tips: [
                'Positive $\\times$ Positive = Positive ($+ \\times + = +$)',
                'Negative $\\times$ Negative = Positive ($- \\times - = +$)',
                'Positive $\\times$ Negative = Negative ($+ \\times - = -$)',
                'Negative $\\times$ Positive = Negative ($- \\times + = -$)',
              ],
            },
          ],
        },
        {
          id: '1.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Multiplying and Dividing Integers',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Calculate each of the following step-by-step:\n(a) $(-4) \\times 3$\n(b) $(-5) \\times (-6)$\n(c) $(-28) \\div 7$\n(d) $(-36) \\div (-9)$',
                context: 'Simplest Multiplication & Division Rules',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Negative times Positive',
                    content:
                      'Multiply numbers: $4 \\times 3 = 12$. Different signs give a negative result.',
                    mathFormula: '(-4) \\times 3 = -12',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Negative times Negative',
                    content:
                      'Multiply numbers: $5 \\times 6 = 30$. Same signs give a positive result.',
                    mathFormula: '(-5) \\times (-6) = +30',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Negative divided by Positive',
                    content:
                      'Divide numbers: $28 \\div 7 = 4$. Different signs give a negative result.',
                    mathFormula: '(-28) \\div 7 = -4',
                  },
                  {
                    stepNumber: 4,
                    label: 'Part (d): Negative divided by Negative',
                    content:
                      'Divide numbers: $36 \\div 9 = 4$. Same signs give a positive result.',
                    mathFormula: '(-36) \\div (-9) = +4',
                  },
                ],
                finalAnswer: '(a) -12, (b) 30, (c) -4, (d) 4',
              },
            },
          ],
        },
        {
          id: '1.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Sign Confusion in Long Chains',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Assuming any expression with minus signs ends up negative',
                wrongWay: '(-2) \\times (-2) \\times (-2) \\times (-2) = -16',
                whyWrong: 'Students see lots of negative signs and assume the answer must be negative.',
                correctWay: '(-2)^4 = +16',
                proTip:
                  'Count the number of negative signs in your product: an EVEN number of negatives gives $+$, and an ODD number of negatives gives $-$.',
                memoryHook: 'Even = Positive (+), Odd = Negative (-).',
              },
            },
          ],
        },
        {
          id: '1.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Basic Multiplication & Division',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Evaluate each expression below, paying careful attention to signs.',
            },
          ],
          questions: [
            {
              id: '1.2-ex1-q1',
              number: 1,
              question: 'Calculate: $(-7) \\times 6$',
              hint: 'A negative multiplied by a positive gives a negative.',
              answer: '-42',
              explanation: '$7 \\times 6 = 42$. Since the signs are different, the answer is $-42$.',
            },
            {
              id: '1.2-ex1-q2',
              number: 2,
              question: 'Calculate: $(-36) \\div (-4)$',
              hint: 'A negative divided by a negative gives a positive.',
              answer: '9',
              explanation: '$36 \\div 4 = 9$. Two negatives divide to give a positive $+9$.',
            },
            {
              id: '1.2-ex1-q3',
              number: 3,
              question: 'Calculate: $(-5) \\times (-8)$',
              hint: 'Negative times negative equals positive.',
              answer: '40',
              explanation: '$5 \\times 8 = 40$. Two negative numbers make positive $40$.',
            },
          ],
        },
        {
          id: '1.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Real-World Word Problems',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Use integer multiplication and division to model rates of change in business and science.',
            },
          ],
          questions: [
            {
              id: '1.2-ex2-q1',
              number: 1,
              context: 'Business Deficit',
              question:
                'A new bakery loses $\$450$ each month for the first $4$ months of operation. What is the company\'s total financial change over this period?',
              hint: 'Losing 450 each month can be modeled as -450 times 4.',
              answer: '-\\$1800',
              explanation: '$4 \\times (-450) = -1800$. The total financial change is $-\\$1800$.',
            },
            {
              id: '1.2-ex2-q2',
              number: 2,
              context: 'Deep Freezer Cooling',
              question:
                'A laboratory freezer cools a liquid from $0^\\circ\\text{C}$ to $-48^\\circ\\text{C}$ steadily over $6$ hours. What was the average temperature change per hour?',
              hint: 'Divide the total temperature change (-48) by 6 hours.',
              answer: '-8^\\circ\\text{C per hour}',
              explanation: '$-48 \\div 6 = -8^\\circ\\text{C}$ per hour.',
            },
            {
              id: '1.2-ex2-q3',
              number: 3,
              context: 'Shared Debt Settlement',
              question:
                'Four roommates share an apartment and jointly incur an electricity bill debt of $\$260$. If they split it equally, what integer represents each person\'s share of the debt?',
              hint: 'Split -260 equally among 4 people.',
              answer: '-\\$65',
              explanation: '$-260 \\div 4 = -65$. Each roommate has a debt of $\$65$ (represented as $-\\$65$).',
            },
          ],
        },
        {
          id: '1.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Order of Operations & Unknowns',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Combine BIDMAS (order of operations) with integer rules to solve these multi-step challenges.',
            },
          ],
          questions: [
            {
              id: '1.2-ex3-q1',
              number: 1,
              context: 'BIDMAS with Integers',
              question:
                'Evaluate: $(-3)^2 - 4 \\times (-5)',
              hint: 'Evaluate the power first: (-3)^2 = (-3) * (-3). Then multiply, then subtract.',
              answer: '29',
              explanation: '$(-3)^2 = 9$. Then $4 \\times (-5) = -20$. Finally: $9 - (-20) = 9 + 20 = 29$.',
            },
            {
              id: '1.2-ex3-q2',
              number: 2,
              context: 'Integer Division Equation',
              question:
                'Find $k$ such that: $\\dfrac{k \\times (-6)}{-3} = -14$',
              hint: 'Simplify the fraction first: -6 divided by -3 is +2.',
              answer: 'k = -7',
              explanation: '$\\dfrac{-6}{-3} = 2$. So $2k = -14 \\implies k = -14 \\div 2 = -7$.',
            },
            {
              id: '1.2-ex3-q3',
              number: 3,
              context: 'Odd vs Even Powers',
              question:
                'If $x = -1$, calculate the value of: $x^1 + x^2 + x^3 + x^4 + \\dots + x^{10}$',
              hint: 'Notice that odd powers equal -1 and even powers equal +1.',
              answer: '0',
              explanation: 'The sequence is $(-1) + 1 + (-1) + 1 + \\dots + (-1) + 1$. Each pair sums to $0$. With 10 terms, there are 5 pairs of zero, so the total sum is $0$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 1.3 Lowest common multiples
    // -------------------------------------------------------------------------
    {
      id: '1.3',
      subtopicNumber: '1.3',
      title: 'Lowest common multiples',
      type: 'lesson',
      steps: [
        {
          id: '1.3-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Multiples & Synchronized Timing',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Lighthouse Flashes & Hot Dog Buns',
              scenario:
                'Lighthouse A flashes every $4$ seconds. Lighthouse B flashes every $6$ seconds. When will they flash together at the exact same second? Multiples of $4$ are $4, 8, 12, 16...$ and multiples of $6$ are $6, 12, 18...$ Both share $12$ seconds! That smallest shared time is the Lowest Common Multiple (LCM).',
              takeaway:
                'The LCM is the smallest non-zero number that is a multiple of two or more numbers.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Multiple',
                  definition: 'The product of a number and any positive integer.',
                  example: 'Multiples of 5 are 5, 10, 15, 20, 25, ...',
                },
                {
                  term: 'Lowest Common Multiple (LCM)',
                  definition: 'The smallest whole number that is a multiple of both numbers.',
                  example: 'LCM(4, 6) = 12.',
                },
              ],
            },
          ],
          widget: {
            type: 'factor_array',
            title: 'Multiple & Factor Visualizer',
            initialParams: { initialNumber: 12 },
          },
        },
        {
          id: '1.3-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Finding the LCM',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Find the Lowest Common Multiple (LCM) of:\n(a) $4$ and $6$ (by listing multiples)\n(b) $18$ and $24$ (by prime factors)',
                context: 'From Simple Lists to Prime Factorization',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): List multiples of 4 and 6',
                    content:
                      'Multiples of 4: 4, 8, 12, 16, 20, 24...\nMultiples of 6: 6, 12, 18, 24...\nThe smallest number in BOTH lists is 12.',
                    mathFormula: '\\text{LCM}(4, 6) = 12',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Express 18 and 24 as product of primes',
                    content:
                      '$18 = 2 \\times 3^2$, and $24 = 2^3 \\times 3$.',
                    mathFormula: '18 = 2^1 \\times 3^2,\\quad 24 = 2^3 \\times 3^1',
                  },
                  {
                    stepNumber: 3,
                    label: 'Take the highest power of each prime',
                    content:
                      'Highest power of 2 is $2^3 = 8$. Highest power of 3 is $3^2 = 9$. Multiply them together.',
                    mathFormula: '\\text{LCM}(18, 24) = 2^3 \\times 3^2 = 8 \\times 9 = 72',
                  },
                ],
                finalAnswer: '(a) LCM(4, 6) = 12, (b) LCM(18, 24) = 72',
              },
            },
          ],
        },
        {
          id: '1.3-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Confusing LCM with HCF',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Mixing up Multiples (larger) with Factors (smaller)',
                wrongWay: 'Saying LCM(6, 8) = 2',
                whyWrong: '2 is a common factor, not a multiple! A multiple can NEVER be smaller than the original numbers.',
                correctWay: 'LCM(6, 8) = 24',
                proTip:
                  'Multiples MULTIPLY (they grow bigger, like $6, 12, 18, 24...$). Factors DIVIDE (they are smaller building blocks).',
                memoryHook: 'Multiples grow UP, Factors divide DOWN!',
              },
            },
          ],
        },
        {
          id: '1.3-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Direct LCM Calculations',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Find the lowest common multiple for each pair or group of numbers.',
            },
          ],
          questions: [
            {
              id: '1.3-ex1-q1',
              number: 1,
              question: 'Find the LCM of $6$ and $9$.',
              hint: 'List multiples of 9: 9, 18, 27... Which is divisible by 6?',
              answer: '18',
              explanation: 'Multiples of 6: 6, 12, 18. Multiples of 9: 9, 18. Smallest shared multiple is 18.',
            },
            {
              id: '1.3-ex1-q2',
              number: 2,
              question: 'Find the LCM of $8$ and $12$.',
              hint: 'Multiples of 12: 12, 24, 36. Check if 8 divides 24.',
              answer: '24',
              explanation: 'Multiples of 8: 8, 16, 24. Multiples of 12: 12, 24. Lowest common multiple is 24.',
            },
            {
              id: '1.3-ex1-q3',
              number: 3,
              question: 'Find the LCM of $4, 5,$ and $10$.',
              hint: 'Find the smallest number that 4, 5, and 10 all divide into.',
              answer: '20',
              explanation: '20 is divisible by 4 (5 times), 5 (4 times), and 10 (2 times). Hence LCM(4, 5, 10) = 20.',
            },
          ],
        },
        {
          id: '1.3-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Real-World Scheduling Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Solve timing, packaging, and circular track problems using LCM.',
            },
          ],
          questions: [
            {
              id: '1.3-ex2-q1',
              number: 1,
              context: 'Hot Dog Buns & Sausages',
              question:
                'Hot dog sausages come in packs of $10$, but bread rolls come in packs of $8$. What is the minimum number of each pack you must buy so no sausages or rolls are left over?',
              hint: 'Find LCM(10, 8) first, then divide by the pack sizes.',
              answer: '4\\text{ packs of sausages and }5\\text{ packs of rolls (40 total)}',
              explanation: '$\\text{LCM}(10, 8) = 40$. Sausages: $40 \\div 10 = 4$ packs. Rolls: $40 \\div 8 = 5$ packs.',
            },
            {
              id: '1.3-ex2-q2',
              number: 2,
              context: 'Bus Timetable Synchronization',
              question:
                'Bus Line A departs the terminal every $15\\text{ minutes}$, and Bus Line B departs every $20\\text{ minutes}$. If both buses depart together at 08:00 AM, at what time will they next depart together?',
              hint: 'Find the LCM of 15 and 20 minutes.',
              answer: '09:00\\text{ AM (after 60 minutes)}',
              explanation: '$\\text{LCM}(15, 20) = 60\\text{ minutes} = 1\\text{ hour}$. 08:00 + 1 hour = 09:00 AM.',
            },
            {
              id: '1.3-ex2-q3',
              number: 3,
              context: 'Running Track Laps',
              question:
                'Leo runs one lap around a stadium track in $90\\text{ seconds}$. Zoe runs one lap in $60\\text{ seconds}$. If they start together at the start line, after how many seconds will they cross the start line together again?',
              hint: 'Find LCM of 90 and 60.',
              answer: '180\\text{ seconds (3 minutes)}',
              explanation: '$\\text{LCM}(90, 60) = 180\\text{ seconds}$. Zoe completes 3 laps and Leo completes 2 laps.',
            },
          ],
        },
        {
          id: '1.3-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Prime Product Mysteries',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Reason with prime factors and mystery relationships.',
            },
          ],
          questions: [
            {
              id: '1.3-ex3-q1',
              number: 1,
              context: 'Unknown Pair',
              question:
                'The LCM of two numbers is $60$. One of the numbers is $12$. Find the smallest possible value of the second number.',
              hint: 'Prime factors: 60 = 2^2 * 3 * 5, 12 = 2^2 * 3. The second number MUST supply the missing factor of 5.',
              answer: '5',
              explanation: '$12 = 2^2 \\times 3$. To make $60 = 2^2 \\times 3 \\times 5$, the second number must contribute the factor of $5$. The smallest integer is $5$. (Check: LCM(12, 5) = 60).',
            },
            {
              id: '1.3-ex3-q2',
              number: 2,
              context: 'Three Consecutive Numbers',
              question:
                'What is the LCM of three consecutive integers: $2, 3,$ and $4$?',
              hint: 'Find LCM of 2, 3, 4.',
              answer: '12',
              explanation: '$4$ covers the factor of $2$. So $\\text{LCM}(2, 3, 4) = \\text{LCM}(3, 4) = 12$.',
            },
            {
              id: '1.3-ex3-q3',
              number: 3,
              context: 'Remainder Puzzle',
              question:
                'What is the smallest positive integer that leaves a remainder of $1$ when divided by $3, 4,$ and $5$?',
              hint: 'Find the LCM of 3, 4, and 5, then add 1.',
              answer: '61',
              explanation: '$\\text{LCM}(3, 4, 5) = 60$. Adding $1$ gives $61$. Notice: $61 \\div 3 = 20\\text{ r }1$, $61 \\div 4 = 15\\text{ r }1$, $61 \\div 5 = 12\\text{ r }1$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 1.4 Highest common factors
    // -------------------------------------------------------------------------
    {
      id: '1.4',
      subtopicNumber: '1.4',
      title: 'Highest common factors',
      type: 'lesson',
      steps: [
        {
          id: '1.4-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Tile Cutting & Equal Sharing',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Floor Tiling Without Cutting Tiles',
              scenario:
                'Suppose you want to tile a bathroom floor measuring $24\\text{ cm}$ by $36\\text{ cm}$ using identical square tiles with whole centimeter side lengths. What is the largest tile size you can use without cutting any tile? The side must divide evenly into both $24$ and $36$. The factors of $24$ are $1, 2, 3, 4, 6, 8, 12, 24$. The factors of $36$ are $1, 2, 3, 4, 6, 9, 12, 18, 36$. The largest shared factor is $12\\text{ cm}$!',
              takeaway:
                'The Highest Common Factor (HCF) is the largest number that divides exactly into two or more numbers without a remainder.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Factor',
                  definition: 'A whole number that divides into another number with no remainder.',
                  example: 'Factors of 12 are 1, 2, 3, 4, 6, 12.',
                },
                {
                  term: 'Highest Common Factor (HCF / GCD)',
                  definition: 'The greatest number that is a factor of both given numbers.',
                  example: 'HCF(24, 36) = 12.',
                },
              ],
            },
          ],
          widget: {
            type: 'factor_array',
            title: 'Factor Pair Arrays',
            initialParams: { initialNumber: 24 },
          },
        },
        {
          id: '1.4-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Finding the HCF',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Find the Highest Common Factor (HCF) of:\n(a) $12$ and $18$ (by listing factors)\n(b) $60$ and $84$ (by prime factors)',
                context: 'From Simple Factor Lists to Prime Factorization',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): List all factors of 12 and 18',
                    content:
                      'Factors of 12: 1, 2, 3, 4, 6, 12.\nFactors of 18: 1, 2, 3, 6, 9, 18.\nThe shared factors are 1, 2, 3, and 6. The HIGHEST shared factor is 6.',
                    mathFormula: '\\text{HCF}(12, 18) = 6',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Prime factorize 60 and 84',
                    content:
                      '$60 = 2^2 \\times 3 \\times 5$, and $84 = 2^2 \\times 3 \\times 7$.',
                    mathFormula: '60 = 2^2 \\times 3^1 \\times 5^1,\\quad 84 = 2^2 \\times 3^1 \\times 7^1',
                  },
                  {
                    stepNumber: 3,
                    label: 'Multiply the shared prime factors',
                    content:
                      'Shared primes are $2$ (lowest power $2^2 = 4$) and $3$ (lowest power $3^1 = 3$). Multiply: $4 \\times 3 = 12$.',
                    mathFormula: '\\text{HCF}(60, 84) = 2^2 \\times 3 = 12',
                  },
                ],
                finalAnswer: '(a) HCF(12, 18) = 6, (b) HCF(60, 84) = 12',
              },
            },
          ],
        },
        {
          id: '1.4-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Forgetting Factor 1 and Missing Prime Powers',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Thinking co-prime numbers have no HCF',
                wrongWay: 'Saying HCF(9, 14) = 0 or "none"',
                whyWrong: '1 is ALWAYS a factor of every integer!',
                correctWay: 'HCF(9, 14) = 1',
                proTip:
                  'Numbers whose HCF is 1 are called co-prime (relatively prime). The HCF can NEVER be 0.',
                memoryHook: 'The number 1 is the universal key factor!',
              },
            },
          ],
        },
        {
          id: '1.4-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Direct HCF Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Calculate the highest common factor for each set of numbers.',
            },
          ],
          questions: [
            {
              id: '1.4-ex1-q1',
              number: 1,
              question: 'Find the HCF of $18$ and $30$.',
              hint: 'List factors of 18 (1, 2, 3, 6, 9, 18) and see which largest one divides 30.',
              answer: '6',
              explanation: 'Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. Highest shared is 6.',
            },
            {
              id: '1.4-ex1-q2',
              number: 2,
              question: 'Find the HCF of $28$ and $42$.',
              hint: 'Both are in the 7 times table and are even.',
              answer: '14',
              explanation: '$28 = 14 \\times 2$ and $42 = 14 \\times 3$. The highest common factor is 14.',
            },
            {
              id: '1.4-ex1-q3',
              number: 3,
              question: 'Find the HCF of $16, 24,$ and $40$.',
              hint: 'Find the largest integer that divides 16, 24, and 40.',
              answer: '8',
              explanation: '8 divides 16 ($2$), 24 ($3$), and 40 ($5$). Thus HCF(16, 24, 40) = 8.',
            },
          ],
        },
        {
          id: '1.4-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Party Packs & Group Division',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Divide supplies and gifts into equal parcels without remainder.',
            },
          ],
          questions: [
            {
              id: '1.4-ex2-q1',
              number: 1,
              context: 'Charity Gift Baskets',
              question:
                'A community center receives $48$ juice boxes and $72$ fruit bars. What is the greatest number of identical gift packs they can make with no items left over?',
              hint: 'Find the HCF of 48 and 72.',
              answer: '24\\text{ packs (each with 2 juice boxes and 3 fruit bars)}',
              explanation: '$\\text{HCF}(48, 72) = 24$. Each pack contains $48 \\div 24 = 2$ juice boxes and $72 \\div 24 = 3$ fruit bars.',
            },
            {
              id: '1.4-ex2-q2',
              number: 2,
              context: 'School Sports Squads',
              question:
                'A teacher has $45$ girls and $30$ boys. She wants to arrange all students into equal teams such that every team has the exact same number of girls and the same number of boys. What is the maximum number of teams possible?',
              hint: 'Find HCF(45, 30).',
              answer: '15\\text{ teams (each with 3 girls and 2 boys)}',
              explanation: '$\\text{HCF}(45, 30) = 15$. Teams have $45 \\div 15 = 3$ girls and $30 \\div 15 = 2$ boys.',
            },
            {
              id: '1.4-ex2-q3',
              number: 3,
              context: 'Wood Planks Without Waste',
              question:
                'A carpenter has two timber planks: one is $120\\text{ cm}$ long and the other is $180\\text{ cm}$ long. He cuts both planks into equal pieces of maximum possible length with zero scrap wood. How long is each cut piece?',
              hint: 'Find HCF(120, 180).',
              answer: '60\\text{ cm}',
              explanation: '$\\text{HCF}(120, 180) = 60\\text{ cm}$. He cuts 2 pieces from the first plank and 3 pieces from the second.',
            },
          ],
        },
        {
          id: '1.4-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'HCF & LCM Fundamental Theorem',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Explore the powerful theorem linking HCF, LCM, and products.',
            },
          ],
          questions: [
            {
              id: '1.4-ex3-q1',
              number: 1,
              context: 'The Product Theorem',
              question:
                'For any two positive integers $a$ and $b$, $\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$. If two numbers have $\\text{HCF} = 6$ and $\\text{LCM} = 120$, and one number is $24$, find the other number.',
              hint: 'Use (HCF * LCM) / first number = second number.',
              answer: '30',
              explanation: '$6 \\times 120 = 720$. Second number $= 720 \\div 24 = 30$. (Check: HCF(24, 30) = 6, LCM(24, 30) = 120).',
            },
            {
              id: '1.4-ex3-q2',
              number: 2,
              context: 'Consecutive Integers Factor',
              question:
                'What is the HCF of ANY two consecutive positive integers $n$ and $n + 1$ (for example, 14 and 15)?',
              hint: 'If a number d divides both n and n + 1, it must divide their difference.',
              answer: '1',
              explanation: 'Any common factor must divide $(n + 1) - n = 1$. The only positive integer dividing 1 is 1. Thus, consecutive integers are always co-prime.',
            },
            {
              id: '1.4-ex3-q3',
              number: 3,
              context: 'Simplifying Algebraic Fraction',
              question:
                'Find the HCF of $48x$ and $72x^2$ where $x$ is a positive integer.',
              hint: 'Find the numerical HCF of 48 and 72, and the variable HCF of x and x^2.',
              answer: '24x',
              explanation: 'Numerical: $\\text{HCF}(48, 72) = 24$. Variable: lowest power of $x$ is $x^1$. Combining gives $24x$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 1.5 Tests for divisibility
    // -------------------------------------------------------------------------
    {
      id: '1.5',
      subtopicNumber: '1.5',
      title: 'Tests for divisibility',
      type: 'lesson',
      steps: [
        {
          id: '1.5-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Quick Mental Math Divisibility Tests',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'The Secret Detective Codes',
              scenario:
                'You don\'t need to perform long division to know if $3576$ people can be divided into teams of $3$, $4$, or $9$! Divisibility rules are like secret detective shortcuts looking at last digits or digit sums.',
              takeaway:
                'Divisibility rules allow you to test large numbers instantly without using a calculator.',
            },
            {
              type: 'rule_box',
              title: 'Master Divisibility Rules Chart',
              rule: 'Memorize these tests for numbers greater than 100:',
              tips: [
                'Divisible by 2: Last digit is even (0, 2, 4, 6, 8).',
                'Divisible by 3: Sum of all digits is a multiple of 3 (e.g., 471: 4+7+1=12).',
                'Divisible by 4: Last TWO digits form a number divisible by 4 (e.g., 5328: 28/4=7).',
                'Divisible by 5: Last digit is 0 or 5.',
                'Divisible by 6: Divisible by BOTH 2 and 3.',
                'Divisible by 9: Sum of all digits is a multiple of 9 (e.g., 738: 7+3+8=18).',
                'Divisible by 10: Last digit is 0.',
              ],
            },
          ],
          widget: {
            type: 'factor_array',
            title: 'Divisibility & Factor Inspector',
            initialParams: { initialNumber: 36 },
          },
        },
        {
          id: '1.5-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Testing a 4-Digit Number: 3,456',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem: 'Test whether the number $3456$ is divisible by: (a) $3$, (b) $4$, (c) $6$, (d) $9$.',
                context: 'Multi-Rule Systematic Testing',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Test for divisibility by 3 and 9 (Sum of digits)',
                    content: 'Calculate the sum of digits: $3 + 4 + 5 + 6 = 18$.',
                    mathFormula: '3 + 4 + 5 + 6 = 18',
                    note: 'Since 18 is a multiple of 3, it is divisible by 3. Since 18 is also a multiple of 9, it is divisible by 9.',
                  },
                  {
                    stepNumber: 2,
                    label: 'Test for divisibility by 4 (Last two digits)',
                    content: 'The last two digits are $56$. Check: $56 \\div 4 = 14$ with no remainder.',
                    mathFormula: '56 = 4 \\times 14',
                    note: 'Therefore, 3456 is divisible by 4.',
                  },
                  {
                    stepNumber: 3,
                    label: 'Test for divisibility by 6 (Divisible by 2 and 3)',
                    content:
                      'The last digit is $6$ (even), so it is divisible by $2$. From Step 1, it is divisible by $3$. Since it passes both, it is divisible by $6$.',
                  },
                ],
                finalAnswer: 'Divisible by 3, 4, 6, and 9 (all of them!)',
              },
            },
          ],
        },
        {
          id: '1.5-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'The Rule for 4 vs Rule for 2',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Checking only the last digit for divisibility by 4',
                wrongWay: 'Saying 314 is divisible by 4 because 4 is at the end',
                whyWrong: '314 / 4 = 78.5! You must check the LAST TWO DIGITS (14), not just the final digit.',
                correctWay: '14 is not divisible by 4, so 314 is NOT divisible by 4.',
                proTip:
                  'Rule for 2 = look at LAST 1 DIGIT. Rule for 4 = look at LAST 2 DIGITS. Rule for 8 = look at LAST 3 DIGITS.',
                memoryHook: '2 is $2^1$ (1 digit), 4 is $2^2$ (2 digits), 8 is $2^3$ (3 digits)!',
              },
            },
          ],
        },
        {
          id: '1.5-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Quick Divisibility Checks',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Apply divisibility tests mentally without doing long division.',
            },
          ],
          questions: [
            {
              id: '1.5-ex1-q1',
              number: 1,
              question: 'Is $471$ divisible by $3$? Explain why or why not.',
              hint: 'Sum the digits of 471.',
              answer: 'Yes, because 4 + 7 + 1 = 12, which is a multiple of 3.',
              explanation: '$4 + 7 + 1 = 12$. Since $12 \\div 3 = 4$, $471$ is divisible by $3$ ($471 \\div 3 = 157$).',
            },
            {
              id: '1.5-ex1-q2',
              number: 2,
              question: 'Which of the following numbers is divisible by $4$: $718$ or $724$?',
              hint: 'Look at the last two digits: 18 vs 24.',
              answer: '724',
              explanation: 'Last two digits of 718 are 18 ($18 \\div 4 = 4.5$, not whole). Last two digits of 724 are 24 ($24 \\div 4 = 6$). So 724 is divisible by 4.',
            },
            {
              id: '1.5-ex1-q3',
              number: 3,
              question: 'Is $582$ divisible by $6$? State the two tests it must satisfy.',
              hint: 'Check if it is even, and check its digit sum for 3.',
              answer: 'Yes, it is even (ends in 2) and 5 + 8 + 2 = 15 (divisible by 3).',
              explanation: 'Ends in 2 (divisible by 2). Sum $= 15$ (divisible by 3). Since divisible by both 2 and 3, it is divisible by 6 ($582 \\div 6 = 97$).',
            },
          ],
        },
        {
          id: '1.5-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Real-World Grouping & Packaging',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Check batch packaging and tournament brackets using divisibility tests.',
            },
          ],
          questions: [
            {
              id: '1.5-ex2-q1',
              number: 1,
              context: 'Bakery Egg Cartons',
              question:
                'A commercial poultry farm packages $1392$ eggs into cartons of $6$. Can all the eggs be packaged with none left over? Use divisibility tests.',
              hint: 'Check divisibility by 2 and 3 for 1392.',
              answer: 'Yes, because 1392 is even and 1 + 3 + 9 + 2 = 15 (divisible by 3).',
              explanation: '1392 ends in 2 (divisible by 2) and $1+3+9+2 = 15$ (divisible by 3). Therefore it is divisible by 6 ($1392 \\div 6 = 232$ cartons).',
            },
            {
              id: '1.5-ex2-q2',
              number: 2,
              context: 'School Trip Bus Seating',
              question:
                'A school has $428$ students attending an event. Can they be seated in rows of $4$ without leaving empty seats in any row?',
              hint: 'Check the last two digits 28 for divisibility by 4.',
              answer: 'Yes, because the last two digits 28 are divisible by 4 (28 / 4 = 7).',
              explanation: 'Last two digits $= 28$. $28 \\div 4 = 7$. Thus 428 is divisible by 4 ($428 \\div 4 = 107$ rows).',
            },
            {
              id: '1.5-ex2-q3',
              number: 3,
              context: 'Concert Hall Ticket Sales',
              question:
                'A theater cashier collects a total of $\$2835$ from tickets that cost $\$9$ each. Can this total be correct without cents? Test for divisibility by $9$.',
              hint: 'Sum the digits of 2835.',
              answer: 'Yes, 2 + 8 + 3 + 5 = 18, which is divisible by 9.',
              explanation: '$2 + 8 + 3 + 5 = 18$. Since 18 is a multiple of 9, $2835$ is divisible by 9 ($2835 \\div 9 = 315$ tickets).',
            },
          ],
        },
        {
          id: '1.5-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Missing Digits Puzzles',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Determine the mystery missing digit in each multi-digit number.',
            },
          ],
          questions: [
            {
              id: '1.5-ex3-q1',
              number: 1,
              context: 'Mystery Digit for Divisibility by 9',
              question:
                'The five-digit number $52\\,d\\,14$ is divisible by $9$. Find the value of digit $d$.',
              hint: 'The sum of all digits 5 + 2 + d + 1 + 4 must equal 18 (or 27).',
              answer: 'd = 6',
              explanation: '$5 + 2 + d + 1 + 4 = 12 + d$. The next multiple of 9 is 18. So $12 + d = 18 \\implies d = 6$. Number is $52\\,614$.',
            },
            {
              id: '1.5-ex3-q2',
              number: 2,
              context: 'Divisibility by 4 Constraint',
              question:
                'What is the largest possible digit $k$ such that the four-digit number $734k$ is divisible by $4$?',
              hint: 'The last two digits 4k must form a multiple of 4: 40, 44, 48.',
              answer: 'k = 8',
              explanation: 'Last two digits are $4k$. Multiples of 4 with tens digit 4 are 40, 44, 48. The largest digit is $8$ ($7348$).',
            },
            {
              id: '1.5-ex3-q3',
              number: 3,
              context: 'Divisible by 12',
              question:
                'A number is divisible by $12$ if and only if it is divisible by both $3$ and $4$. Find a digit $x$ such that $147x$ is divisible by $12$.',
              hint: 'Check which endings 7x (like 72 or 76) are divisible by 4, then check digit sum for 3.',
              answer: 'x = 6',
              explanation: 'For divisibility by 4, last two digits $7x$ must be divisible by 4: $72$ or $76$. If $x = 2$, sum is $1+4+7+2 = 14$ (not divisible by 3). If $x = 6$, sum is $1+4+7+6 = 18$ (divisible by 3!). Thus $x = 6$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 1.6 Square roots and cube roots
    // -------------------------------------------------------------------------
    {
      id: '1.6',
      subtopicNumber: '1.6',
      title: 'Square roots and cube roots',
      type: 'lesson',
      steps: [
        {
          id: '1.6-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Squares, Cubes & Geometric Dimensions',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Tiled Squares & Rubik\'s Cubes',
              scenario:
                'If you have a square rug with area $25\\text{ m}^2$, each side must be $\\sqrt{25} = 5\\text{ m}$. If you build a solid cube of wooden blocks using $27$ mini cubes, the cube is $3$ blocks wide, $3$ blocks long, and $3$ blocks tall: $\\sqrt[3]{27} = 3$.',
              takeaway:
                'Squaring means multiplying a number by itself ($n^2$). Finding square root ($\\sqrt{n}$) goes backwards to find the side length. Cubing multiplies three times ($n^3$), and cube root ($\\sqrt[3]{n}$) finds the edge of the cube.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Square Number',
                  definition: 'The result of multiplying an integer by itself.',
                  example: '1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225.',
                },
                {
                  term: 'Cube Number',
                  definition: 'The result of multiplying an integer by itself twice ($n \\times n \\times n$).',
                  example: '1, 8, 27, 64, 125, 216, 343, 512, 729, 1000.',
                },
              ],
            },
          ],
          widget: {
            type: 'factor_array',
            title: 'Square Grid Inspector',
            initialParams: { initialNumber: 16 },
          },
        },
        {
          id: '1.6-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Finding Exact and Estimated Roots',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Calculate each root step-by-step:\n(a) $\\sqrt{36}$\n(b) $\\sqrt[3]{27}$\n(c) Between which two consecutive integers does $\\sqrt{54}$ lie?',
                context: 'From Exact Roots to Estimations',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Find the square root of 36',
                    content:
                      'Ask: "What positive number multiplied by itself gives 36?" Because $6 \\times 6 = 36$, $\\sqrt{36} = 6$.',
                    mathFormula: '\\sqrt{36} = 6',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Find the cube root of 27',
                    content:
                      'Ask: "What number multiplied by itself three times gives 27?" Because $3 \\times 3 \\times 3 = 27$, $\\sqrt[3]{27} = 3$.',
                    mathFormula: '\\sqrt[3]{27} = 3',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Estimate non-square root sqrt(54)',
                    content:
                      'Find surrounding known squares: $7^2 = 49$ and $8^2 = 64$. Since $49 < 54 < 64$, taking square roots gives $7 < \\sqrt{54} < 8$.',
                    mathFormula: '7 < \\sqrt{54} < 8',
                    note: '$\\sqrt{54}$ lies between 7 and 8 (approx 7.3).',
                  },
                ],
                finalAnswer: '(a) 6, (b) 3, (c) Between 7 and 8',
              },
            },
          ],
        },
        {
          id: '1.6-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Halving Instead of Square Rooting',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Dividing by 2 instead of finding square root',
                wrongWay: '\\sqrt{16} = 8',
                whyWrong: '8 is half of 16 ($16 / 2$), NOT the square root! $8 \\times 8 = 64$, not 16.',
                correctWay: '\\sqrt{16} = 4\\text{ because }4 \\times 4 = 16',
                proTip:
                  'Always check your answer by squaring it! Ask yourself: "What number multiplied by itself gives this?"',
                memoryHook: 'Square root finds the ROOT side, not half the branch!',
              },
            },
          ],
        },
        {
          id: '1.6-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Squares & Roots Fundamentals',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Evaluate each square root and cube root.',
            },
          ],
          questions: [
            {
              id: '1.6-ex1-q1',
              number: 1,
              question: 'Calculate: $\\sqrt{81} + \\sqrt{144}$',
              hint: 'Find the square root of 81, then 144, then add them.',
              answer: '21',
              explanation: '$\\sqrt{81} = 9$ and $\\sqrt{144} = 12$. $9 + 12 = 21$.',
            },
            {
              id: '1.6-ex1-q2',
              number: 2,
              question: 'Calculate: $\\sqrt[3]{125}$',
              hint: 'What number multiplied by itself 3 times gives 125?',
              answer: '5',
              explanation: '$5 \\times 5 \\times 5 = 125$. Therefore $\\sqrt[3]{125} = 5$.',
            },
            {
              id: '1.6-ex1-q3',
              number: 3,
              question: 'Calculate: $4^3 - 3^3$',
              hint: 'Evaluate 4 cubed and 3 cubed first.',
              answer: '37',
              explanation: '$4^3 = 64$ and $3^3 = 27$. $64 - 27 = 37$.',
            },
          ],
        },
        {
          id: '1.6-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Area, Volume & Geometric Roots',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Solve geometric area and volume problems using roots.',
            },
          ],
          questions: [
            {
              id: '1.6-ex2-q1',
              number: 1,
              context: 'Square Garden Fencing',
              question:
                'A square vegetable garden has an area of $196\\text{ m}^2$. How much fencing is required to enclose all four sides of the garden?',
              hint: 'Find the side length using square root, then multiply by 4.',
              answer: '56\\text{ m}',
              explanation: 'Side length $= \\sqrt{196} = 14\\text{ m}$. Perimeter $= 4 \\times 14 = 56\\text{ m}$.',
            },
            {
              id: '1.6-ex2-q2',
              number: 2,
              context: 'Water Tank Volume',
              question:
                'A cubic water container has a capacity volume of $1000\\text{ liters}$ ($1\\text{ m}^3$). What is the length of one inside edge of the cube in centimeters?',
              hint: 'Recall 1 m = 100 cm, or edge = cbrt(1 m^3).',
              answer: '100\\text{ cm (or }1\\text{ m)}',
              explanation: 'Edge $= \\sqrt[3]{1\\text{ m}^3} = 1\\text{ m} = 100\\text{ cm}$.',
            },
            {
              id: '1.6-ex2-q3',
              number: 3,
              context: 'Checkerboard Squares',
              question:
                'A standard tournament chessboard is a square divided into $64$ equal smaller squares. If the total area of the board is $576\\text{ cm}^2$, what is the side length of ONE individual small square?',
              hint: 'Find the total side length sqrt(576) first, or divide 576 by 64.',
              answer: '3\\text{ cm}',
              explanation: 'Total side length $= \\sqrt{576} = 24\\text{ cm}$. There are 8 squares along each side: $24 \\div 8 = 3\\text{ cm}$. (Alternatively: area of 1 square $= 576 \\div 64 = 9\\text{ cm}^2$, side $= \\sqrt{9} = 3\\text{ cm}$).',
            },
          ],
        },
        {
          id: '1.6-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Cube Roots of Negatives & Inequalities',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Reason about negative cube roots and consecutive integer bounds.',
            },
          ],
          questions: [
            {
              id: '1.6-ex3-q1',
              number: 1,
              context: 'Cube Root of a Negative Number',
              question:
                'Explain why $\\sqrt{-16}$ is not a real number, but $\\sqrt[3]{-64}$ IS a real number. Find the value of $\\sqrt[3]{-64}$.',
              hint: 'Can you square a real number to get a negative? What happens when you cube a negative?',
              answer: '-4',
              explanation: 'Any real number squared is positive, so $\\sqrt{-16}$ has no real solution. However, $(-4) \\times (-4) \\times (-4) = -64$, so $\\sqrt[3]{-64} = -4$.',
            },
            {
              id: '1.6-ex3-q2',
              number: 2,
              context: 'Bounding Cube Roots',
              question:
                'Between which two consecutive integers does $\\sqrt[3]{90}$ lie?',
              hint: 'Recall 4^3 = 64 and 5^3 = 125.',
              answer: 'Between 4 and 5',
              explanation: '$4^3 = 64$ and $5^3 = 125$. Since $64 < 90 < 125$, $\\sqrt[3]{90}$ lies between $4$ and $5$.',
            },
            {
              id: '1.6-ex3-q3',
              number: 3,
              context: 'Square and Cube Equal',
              question:
                'Find a positive integer $n$ (greater than 1) that is BOTH a perfect square and a perfect cube less than $100$.',
              hint: 'A number that is both a square and a cube is a sixth power (k^6).',
              answer: '64',
              explanation: '$64 = 8^2$ (square) and $64 = 4^3$ (cube). It is $2^6 = 64$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '1.test',
      subtopicNumber: 'Test',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '1.test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Test Part A: Core Recall',
          badge: 'Test Part A: Core Recall',
          blocks: [
            {
              type: 'text',
              content:
                'Part A tests core integer addition, multiplication rules, and basic roots across Unit 1. Solve all 3 questions on the Teacher\'s Board before revealing answers.',
            },
          ],
          questions: [
            {
              id: '1.test-q1',
              number: 1,
              question: 'Calculate: $(-9) + (-4) - (-7)$',
              hint: 'Simplify signs: -9 - 4 + 7.',
              answer: '-6',
              explanation: '$-9 + (-4) = -13$. Then $-13 - (-7) = -13 + 7 = -6$.',
            },
            {
              id: '1.test-q2',
              number: 2,
              question: 'Find the LCM and HCF of $12$ and $18$.',
              hint: 'Find prime factors: 12 = 2^2 * 3, 18 = 2 * 3^2.',
              answer: '\\text{HCF} = 6,\\ \\text{LCM} = 36',
              explanation: 'Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. Shared highest is 6. Multiples: 12, 24, 36 and 18, 36. Smallest shared is 36.',
            },
            {
              id: '1.test-q3',
              number: 3,
              question: 'Calculate: $\\sqrt{100} - \\sqrt[3]{27}$',
              hint: 'Evaluate sqrt(100) and cbrt(27).',
              answer: '7',
              explanation: '$\\sqrt{100} = 10$, $\\sqrt[3]{27} = 3$. $10 - 3 = 7$.',
            },
          ],
        },
        {
          id: '1.test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Test Part B: Real-World Problems',
          badge: 'Test Part B: Real-World Problems',
          blocks: [
            {
              type: 'text',
              content:
                'Part B tests applying integers, divisibility rules, and square areas to real-world scenarios.',
            },
          ],
          questions: [
            {
              id: '1.test-q4',
              number: 1,
              context: 'City Temperature Swing',
              question:
                'In Ottawa, the temperature at 04:00 was $-11^\\circ\\text{C}$. At 14:00, it was $+4^\\circ\\text{C}$. What was the total rise in temperature?',
              hint: 'Temperature rise = End temperature minus Start temperature.',
              answer: '15^\\circ\\text{C}',
              explanation: 'Rise $= 4 - (-11) = 4 + 11 = 15^\\circ\\text{C}$.',
            },
            {
              id: '1.test-q5',
              number: 2,
              context: 'Warehouse Inventory Divisibility',
              question:
                'A factory produces $2544$ toy blocks. The manager wants to pack them into boxes of $6$ with none left over. Without dividing, explain whether this is possible using divisibility rules.',
              hint: 'Check if 2544 is divisible by 2 and 3.',
              answer: 'Yes, because 2544 is even and 2 + 5 + 4 + 4 = 15 (divisible by 3).',
              explanation: 'Ends in 4 (divisible by 2). Sum of digits $= 15$ (divisible by 3). Since divisible by both 2 and 3, it is divisible by 6 ($2544 \\div 6 = 424$ boxes).',
            },
            {
              id: '1.test-q6',
              number: 3,
              context: 'Square Playground Construction',
              question:
                'A playground in the shape of a square has an area of $225\\text{ m}^2$. A running track borders the entire perimeter. What is the total length of one complete lap around the playground?',
              hint: 'Find the side length sqrt(225), then multiply by 4.',
              answer: '60\\text{ m}',
              explanation: 'Side length $= \\sqrt{225} = 15\\text{ m}$. Perimeter $= 4 \\times 15 = 60\\text{ m}$.',
            },
          ],
        },
        {
          id: '1.test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Test Part C: Reasoning & Challenge',
          badge: 'Test Part C: Reasoning & Challenge',
          blocks: [
            {
              type: 'text',
              content:
                'Part C presents multi-step mathematical reasoning puzzles covering the entire chapter.',
            },
          ],
          questions: [
            {
              id: '1.test-q7',
              number: 1,
              context: 'Unknown Integer Mystery',
              question:
                'I am thinking of a negative integer $x$. When I multiply $x$ by $-3$, and then subtract $5$, the result is $16$. What is $x$?',
              hint: 'Set up an equation: -3x - 5 = 16.',
              answer: 'x = -7',
              explanation: '$-3x - 5 = 16 \\implies -3x = 21 \\implies x = 21 \\div (-3) = -7$. Check: $(-7) \\times (-3) - 5 = 21 - 5 = 16$.',
            },
            {
              id: '1.test-q8',
              number: 2,
              context: 'HCF and LCM Constraint',
              question:
                'Two numbers have an HCF of $4$ and an LCM of $48$. Neither number is $4$ or $48$. Find the two numbers.',
              hint: 'Product = 4 * 48 = 192. Both numbers must be multiples of 4.',
              answer: '12\\text{ and }16',
              explanation: 'Multiples of 4: $12 = 4 \\times 3$ and $16 = 4 \\times 4$. Their HCF is $4$, and their LCM is $48$. Also $12 \\times 16 = 192 = 4 \\times 48$.',
            },
            {
              id: '1.test-q9',
              number: 3,
              context: 'Consecutive Squares Difference',
              question:
                'Notice that $5^2 - 4^2 = 25 - 16 = 9 = 5 + 4$, and $8^2 - 7^2 = 64 - 49 = 15 = 8 + 7$. Use this property to calculate: $101^2 - 100^2$.',
              hint: 'Difference of consecutive squares (n + 1)^2 - n^2 = 2n + 1 = (n + 1) + n.',
              answer: '201',
              explanation: 'For any two consecutive integers, $(n+1)^2 - n^2 = (n+1) + n$. Therefore, $101^2 - 100^2 = 101 + 100 = 201$.',
            },
          ],
        },
      ],
    },
  ],
};
