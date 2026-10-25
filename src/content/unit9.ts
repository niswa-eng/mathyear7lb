/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit9: Unit = {
  id: 'unit-9',
  unitNumber: 9,
  title: 'Sequences and Functions',
  learningObjectives: [
    'Identify patterns and generate number sequences.',
    'Find rules for sequences, including the nth-term rule.',
    'Understand functions and find inputs and outputs.',
    'Represent relationships using words, algebraic expressions, and linear functions.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 9.1 Generating sequences (1)
    // -------------------------------------------------------------------------
    {
      id: '9.1',
      subtopicNumber: '9.1',
      title: 'Generating sequences (1)',
      type: 'lesson',
      steps: [
        {
          id: '9.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Stepping Stones & Term-to-Term Rules',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Hopscotch & Regular Pocket Money',
              scenario:
                'Imagine your savings box starts with $£5$, and every week you deposit exactly $£3$. Your savings grow: $£5, £8, £11, £14, £17, \\dots$. Each number is called a "term". To get from one stepping stone to the next, you simply add $3$. That rule is called the "term-to-term rule".',
              takeaway:
                'A sequence is an ordered list of numbers. To describe a sequence using a term-to-term rule, you must give TWO things: (1) The first term, and (2) What operation to apply to each term to get the next term (e.g., "Start at 5, add 3").',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Term',
                  definition: 'Each individual number in a sequence.',
                  example: 'In $4, 7, 10, 13$, the 1st term is $4$, and the 3rd term is $10$.',
                },
                {
                  term: 'Term-to-Term Rule',
                  definition: 'A rule that tells you how to calculate the next term from the term before it.',
                  example: 'For $10, 8, 6, 4, \\dots$, the rule is "subtract 2".',
                },
                {
                  term: 'Arithmetic (Linear) Sequence',
                  definition: 'A sequence where the difference between consecutive terms is always the same constant number.',
                  example: '$7, 12, 17, 22, \\dots$ has a constant difference of $+5$.',
                },
                {
                  term: 'Infinite vs Finite Sequence',
                  definition: 'A finite sequence ends after a set count; an infinite sequence continues forever, shown with dots ($\\dots$).',
                  example: '$2, 4, 6, 8, \\dots$ continues without ending.',
                },
              ],
            },
          ],
          widget: {
            type: 'number_line',
            title: 'Sequence Hop Number Line',
            initialParams: { min: 0, max: 20, initialStart: 2, initialHop: 4 },
          },
        },
        {
          id: '9.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Sequence First & Generating Terms',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Write down the next two terms of $3, 7, 11, 15, \\dots$ and state the term-to-term rule.\n(b) A sequence has first term $20$ and term-to-term rule "subtract $4$". Write the first $5$ terms.',
                context: 'Finding patterns and extending arithmetic sequences',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Find the difference between consecutive terms',
                    content:
                      'Check the jumps: $7 - 3 = 4$, $11 - 7 = 4$, $15 - 11 = 4$. The common difference is $+4$, so the rule is "add 4".',
                    mathFormula: '15 + 4 = 19, \\quad 19 + 4 = 23',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (a): State the next two terms and rule',
                    content:
                      'The next two terms are $19$ and $23$. The term-to-term rule is "Add 4" (or "Start at 3 and add 4").',
                    mathFormula: '3, 7, 11, 15, 19, 23, \\dots',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (b): Generate terms starting at 20',
                    content:
                      'Start at $20$. Repeatedly subtract $4$ to find the first 5 terms:\nTerm 1: $20$\nTerm 2: $20 - 4 = 16$\nTerm 3: $16 - 4 = 12$\nTerm 4: $12 - 4 = 8$\nTerm 5: $8 - 4 = 4$.',
                    mathFormula: '20, 16, 12, 8, 4',
                  },
                ],
                finalAnswer: '(a) Next terms: 19, 23 (Rule: add 4); (b) 20, 16, 12, 8, 4',
              },
            },
          ],
        },
        {
          id: '9.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Forgetting the Starting Value',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Saying the rule is just "add 3" without mentioning where to start',
                wrongWay: 'Rule: "Add 3"',
                whyWrong:
                  'Many different sequences add 3! For example: $1, 4, 7, 10$ and $20, 23, 26, 29$ both have the rule "add 3", but they are completely different sequences.',
                correctWay:
                  'Always specify the starting term when asked for the full rule: "First term is 1, term-to-term rule is add 3".',
                proTip:
                  'Always check at least two jumps in a given list to confirm whether the difference is constant (+3, +3) before assuming it is an arithmetic sequence!',
                memoryHook: 'Every journey needs a starting point and a direction!',
              },
            },
          ],
        },
        {
          id: '9.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Use the sequence number line if needed, then check your answers.',
            },
          ],
          questions: [
            {
              id: '9.1-ex1-q1',
              number: 1,
              question: 'Find the next two terms of the sequence: $4, 9, 14, 19, \\dots$',
              hint: 'Look at the difference: $9 - 4 = 5$. Add $5$ to $19$, then add $5$ again.',
              answer: '24, 29',
              explanation: 'The common difference is $+5$. $19 + 5 = 24$, and $24 + 5 = 29$.',
            },
            {
              id: '9.1-ex1-q2',
              number: 2,
              question: 'A sequence starts at $30$ with term-to-term rule "subtract $6$". What is the 4th term?',
              hint: 'List terms: 1st is 30, 2nd is 30 - 6 = 24, 3rd is 24 - 6 = 18...',
              answer: '12',
              explanation: '$T_1 = 30$, $T_2 = 24$, $T_3 = 18$, $T_4 = 12$.',
            },
            {
              id: '9.1-ex1-q3',
              number: 3,
              question: 'What is the term-to-term rule for $50, 43, 36, 29, \\dots$?',
              hint: 'Calculate $50 - 43$ and $43 - 36$.',
              answer: 'Subtract 7 (or -7)',
              explanation: '$50 - 43 = 7$, and the numbers are decreasing, so the rule is "subtract 7".',
            },
          ],
        },
        {
          id: '9.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply arithmetic sequences to these 3 real-world word problems. Work out your working on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '9.1-ex2-q1',
              number: 1,
              question:
                'A cinema row has $14$ seats in Row 1, $18$ seats in Row 2, $22$ in Row 3, and $26$ in Row 4. How many seats are in Row 7?',
              hint: 'The rule is add 4 each row. Continue: Row 5 = 30, Row 6 = 34, Row 7 = ?',
              answer: '38 seats',
              explanation: 'Sequence: $14, 18, 22, 26, 30, 34, 38$. Row 7 has $38$ seats.',
            },
            {
              id: '9.1-ex2-q2',
              number: 2,
              question:
                'A phone battery starts at $92\\%$ and drops by $7\\%$ every hour of video streaming. What is the battery percentage after $5$ hours of streaming?',
              hint: 'Subtract $7\\%$ five times: $92 - (5 \\times 7)$.',
              answer: '57%',
              explanation: '$5 \\times 7 = 35\\%$. Battery remaining $= 92\\% - 35\\% = 57\\%$.',
            },
            {
              id: '9.1-ex2-q3',
              number: 3,
              question:
                'Marcus puts $£15$ in his savings jar on Week 1. Every week he adds $£8$. In which week will his savings reach exactly $£71$?',
              hint: 'Total increase needed: $71 - 15 = 56$. How many weeks of adding $£8$ is that?',
              answer: 'Week 8',
              explanation:
                'He needs to add $£71 - £15 = £56$. Number of jumps $= 56 \\div 8 = 7$ additional weeks. $1 + 7 = 8$th week.',
            },
          ],
        },
        {
          id: '9.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Tackle these 3 challenge puzzles on sequences. Show your deductions clearly on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '9.1-ex3-q1',
              number: 1,
              question:
                'An arithmetic sequence has 2nd term $11$ and 5th term $26$. What is the 1st term?',
              hint: 'From 2nd to 5th term is 3 steps. The difference is $26 - 11 = 15$. Divide by 3.',
              answer: '6',
              explanation:
                '$3$ steps $= 26 - 11 = 15$, so each step is $+5$. 1st term $= 11 - 5 = 6$. (Sequence is $6, 11, 16, 21, 26$).',
            },
            {
              id: '9.1-ex3-q2',
              number: 2,
              question:
                'Is the number $104$ a term in the sequence $8, 14, 20, 26, \\dots$? If so, which term is it?',
              hint: 'Subtract 8 from 104 and check if the result divides by 6.',
              answer: 'Yes, it is the 17th term',
              explanation:
                '$104 - 8 = 96$. $96 \\div 6 = 16$ jumps. Term position $= 1 + 16 = 17$th term.',
            },
            {
              id: '9.1-ex3-q3',
              number: 3,
              question:
                'Sequence A is $4, 11, 18, 25, \\dots$ (adds 7) and Sequence B is $100, 94, 88, 82, \\dots$ (subtracts 6). What is the first number that appears in BOTH sequences?',
              hint: 'List terms of A: 4, 11, 18, 25, 32, 39, 46, 53... Test which ones can be reached from 100 by subtracting 6.',
              answer: '46',
              explanation:
                'Sequence A terms: $4, 11, 18, 25, 32, 39, 46, 53$. Testing $46$: $100 - 46 = 54 = 6 \\times 9$, so $46$ is in B (10th term). $46$ is the 7th term of A.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 9.2 Generating sequences (2)
    // -------------------------------------------------------------------------
    {
      id: '9.2',
      subtopicNumber: '9.2',
      title: 'Generating sequences (2)',
      type: 'lesson',
      steps: [
        {
          id: '9.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Visual Patterns & Matchstick Shapes',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Building a Fence or Square Tiles',
              scenario:
                'Imagine building a row of square pens with fences. The 1st square takes $4$ fences. To add a 2nd square joined to it, you do NOT need 4 new fences—you share a wall, so you only need $3$ more fences ($7$ total). The 3rd square adds another $3$ fences ($10$ total). The pattern is $4, 7, 10, 13, \\dots$.',
              takeaway:
                'Geometric diagrams (like matchstick houses, squares, or dot grids) often form sequences. Finding the number added at each step helps you predict the size of any pattern without drawing it!',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Pattern Sequence',
                  definition: 'A sequence formed by counting geometric elements (matches, dots, tiles, lines) in consecutive shapes.',
                  example: 'Triangles made with matchsticks: Pattern 1 has 3 matches, Pattern 2 has 5, Pattern 3 has 7 ($+2$ each time).',
                },
                {
                  term: 'Geometric (Multiplying) Sequence',
                  definition: 'A sequence where each term is found by MULTIPLYING the previous term by a fixed number (the common ratio).',
                  example: '$1, 2, 4, 8, 16, \\dots$ (multiply by 2 each time).',
                },
              ],
            },
          ],
        },
        {
          id: '9.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Matchstick Pattern First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) A pattern of triangles is made with matchsticks:\n- Pattern 1: $1$ triangle ($3$ matchsticks)\n- Pattern 2: $2$ joined triangles ($5$ matchsticks)\n- Pattern 3: $3$ joined triangles ($7$ matchsticks)\nHow many matchsticks are needed for Pattern 5?\n\n(b) Write down the next two terms of the doubling sequence: $3, 6, 12, 24, \\dots$',
                context: 'Analyzing visual geometric patterns and multiplying sequences',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Find the term-to-term rule for triangles',
                    content:
                      'List the matchstick count: $3, 5, 7, \\dots$. Each new triangle adds $2$ more matchsticks because one side is shared.',
                    mathFormula: 'T_1 = 3, \\quad T_2 = 5, \\quad T_3 = 7, \\quad T_4 = 9, \\quad T_5 = 11',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (a): State the matchstick count for Pattern 5',
                    content:
                      'Continuing the $+2$ rule: Pattern 4 uses $7 + 2 = 9$ matches; Pattern 5 uses $9 + 2 = 11$ matches.',
                    mathFormula: 'T_5 = 11 \\text{ matchsticks}',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (b): Determine the rule for the doubling sequence',
                    content:
                      'Check the relationship: $3 \\times 2 = 6$, $6 \\times 2 = 12$, $12 \\times 2 = 24$. The rule is "multiply by 2".',
                    mathFormula: '24 \\times 2 = 48, \\quad 48 \\times 2 = 96',
                  },
                ],
                finalAnswer: '(a) 11 matchsticks; (b) 48, 96 (Rule: multiply by 2)',
              },
            },
          ],
        },
        {
          id: '9.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Assuming All Sequences are "Add Something"',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Looking at 2, 4, 8, 16 and thinking the rule is "add 2"',
                wrongWay: 'Rule: "Add 2" (because 2 + 2 = 4)',
                whyWrong:
                  'Students only check the first two numbers. But $4 + 2 = 6 \\neq 8$! The jumps are $+2, +4, +8$, which are not constant.',
                correctWay:
                  'Always check if the terms are being multiplied: $2 \\times 2 = 4$, $4 \\times 2 = 8$, $8 \\times 2 = 16$. This is a geometric doubling sequence!',
                proTip:
                  'If the jumps get bigger and bigger rapidly (e.g. 2, 4, 8, 16 or 1, 3, 9, 27), test MULTIPLICATION instead of addition.',
                memoryHook: 'Add makes steps; multiply makes rockets!',
              },
            },
          ],
        },
        {
          id: '9.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Identify whether each sequence is adding or multiplying.',
            },
          ],
          questions: [
            {
              id: '9.2-ex1-q1',
              number: 1,
              question: 'A square pattern uses $4, 7, 10, 13$ matchsticks. How many matchsticks are needed for the 5th pattern?',
              hint: 'Add 3 to 13.',
              answer: '16',
              explanation: 'The pattern increases by $3$ each time: $13 + 3 = 16$.',
            },
            {
              id: '9.2-ex1-q2',
              number: 2,
              question: 'What is the next term in the multiplying sequence: $2, 6, 18, 54, \\dots$?',
              hint: 'Each term is multiplied by 3: $54 \\times 3$.',
              answer: '162',
              explanation: '$2 \\times 3 = 6$, $6 \\times 3 = 18$, $18 \\times 3 = 54$, $54 \\times 3 = 162$.',
            },
            {
              id: '9.2-ex1-q3',
              number: 3,
              question: 'What is the next term in the halving sequence: $80, 40, 20, 10, \\dots$?',
              hint: 'Divide the previous term by 2.',
              answer: '5',
              explanation: '$10 \\div 2 = 5$.',
            },
          ],
        },
        {
          id: '9.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Use patterns and multiplying sequences to solve these 3 real-world problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '9.2-ex2-q1',
              number: 1,
              question:
                'Bacteria in a science lab culture double in number every $30$ minutes. If there are $50$ bacteria at 12:00, how many bacteria will there be at 14:00 (after 2 hours)?',
              hint: 'In 2 hours, there are 4 doubling periods of 30 mins: 50 -> 100 -> 200 -> 400 -> 800.',
              answer: '800 bacteria',
              explanation:
                'Periods: $2\\text{ h} = 4 \\times 30\\text{ min}$. Terms: $50, 100, 200, 400, 800$. At 14:00 there are $800$ bacteria.',
            },
            {
              id: '9.2-ex2-q2',
              number: 2,
              question:
                'A tournament starts with $64$ tennis players. After each round, half of the remaining players are eliminated: $64, 32, 16, \\dots$. How many rounds are played until only $1$ winner remains?',
              hint: 'Count the divisions by 2 from 64 to 1: 64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1.',
              answer: '6 rounds',
              explanation:
                'Rounds: R1 (32 left), R2 (16 left), R3 (8 left), R4 (4 left), R5 (2 left), R6 (1 winner). Total $6$ rounds.',
            },
            {
              id: '9.2-ex2-q3',
              number: 3,
              question:
                'A staircase is built of wooden blocks: Step 1 has $1$ block, Step 2 adds $2$ blocks ($3$ total), Step 3 adds $3$ blocks ($6$ total), Step 4 adds $4$ blocks ($10$ total). How many total blocks are in Step 6?',
              hint: 'These are triangular numbers: Step 5 has $10 + 5 = 15$, Step 6 has $15 + 6 = ?$',
              answer: '21 blocks',
              explanation: 'Step 5: $10 + 5 = 15$ blocks. Step 6: $15 + 6 = 21$ blocks.',
            },
          ],
        },
        {
          id: '9.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Test your deductive reasoning with these 3 sequence puzzles on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '9.2-ex3-q1',
              number: 1,
              question:
                'Square patterns are made from dots: Pattern 1 has $1^2 = 1$ dot, Pattern 2 has $2^2 = 4$ dots, Pattern 3 has $3^2 = 9$ dots. What is the difference in dots between Pattern 10 and Pattern 9?',
              hint: 'Pattern 10 has $10^2 = 100$ dots; Pattern 9 has $9^2 = 81$ dots.',
              answer: '19',
              explanation: '$10^2 - 9^2 = 100 - 81 = 19$. (Notice $10 + 9 = 19$!)',
            },
            {
              id: '9.2-ex3-q2',
              number: 2,
              question:
                'The famous Fibonacci sequence begins $1, 1, 2, 3, 5, 8, 13, \\dots$, where each term is the sum of the two terms before it. What is the 10th term?',
              hint: 'Terms: T1=1, T2=1, T3=2, T4=3, T5=5, T6=8, T7=13, T8=21, T9=34, T10=?',
              answer: '55',
              explanation: '$T_8 = 8 + 13 = 21$, $T_9 = 13 + 21 = 34$, $T_{10} = 21 + 34 = 55$.',
            },
            {
              id: '9.2-ex3-q3',
              number: 3,
              question:
                'A message chain starts with $1$ person sending it to $3$ friends on Day 1. On Day 2, each friend forwards it to $3$ new friends ($9$ new people). On Day 3, each forwards to $3$ new friends ($27$ new people). On which day will more than $1000$ new people receive it on that day?',
              hint: 'Powers of 3: $3^1=3, 3^2=9, 3^3=27, 3^4=81, 3^5=243, 3^6=729, 3^7=2187$.',
              answer: 'Day 7',
              explanation: 'Day 6 has $3^6 = 729$ new people. Day 7 has $3^7 = 2187 > 1000$ new people.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 9.3 Using the nth term
    // -------------------------------------------------------------------------
    {
      id: '9.3',
      subtopicNumber: '9.3',
      title: 'Using the nth term',
      type: 'lesson',
      steps: [
        {
          id: '9.3-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The "Teleportation" Rule ($n$th Term)',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Skip Counting vs A Magic Formula',
              scenario:
                'Suppose you want to know the 100th term of $5, 9, 13, 17, \\dots$. Using the term-to-term rule "add 4" means doing $99$ additions—exhausting! But notice: Term 1 is $4(1) + 1 = 5$, Term 2 is $4(2) + 1 = 9$, Term 3 is $4(3) + 1 = 13$. The magic formula is $4n + 1$. To get the 100th term instantly, just plug in $n = 100$: $4(100) + 1 = 401$!',
              takeaway:
                'The $n$th term rule connects the POSITION $n$ ($1$st, $2$nd, $3$rd...) directly to the VALUE of the term. For any linear sequence with common difference $d$, the rule looks like $dn + c$.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Position $n$',
                  definition: 'The place number of a term in the sequence ($n = 1$ for first term, $n = 2$ for second, etc.).',
                  example: 'For the 20th term, $n = 20$.',
                },
                {
                  term: 'The $n$th Term Formula',
                  definition: 'An algebraic expression in terms of $n$ that generates any term in the sequence directly.',
                  example: 'If $n$th term is $3n + 2$, the 1st term is $3(1) + 2 = 5$.',
                },
                {
                  term: 'Common Difference ($d$)',
                  definition: 'The constant amount added (or subtracted) between consecutive terms; this is the multiplier of $n$.',
                  example: 'In $7, 10, 13, 16$, the difference is $+3$, so the formula starts with $3n$.',
                },
                {
                  term: 'Finding $c$ (the "Zero Term")',
                  definition: 'The constant $c$ is the value before term 1 ($T_1 - d$).',
                  example: 'For $7, 10, 13$, $d = 3$. $T_1 - 3 = 7 - 3 = +4$. Formula is $3n + 4$.',
                },
              ],
            },
          ],
        },
        {
          id: '9.3-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest $n$th Term First & Finding Far Terms',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Find the first $3$ terms of the sequence with $n$th term $2n + 5$.\n(b) Find the $n$th term of the sequence $6, 11, 16, 21, \\dots$ and use it to find the $50$th term.',
                context: 'Generating terms and finding position-to-term formulas',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Substitute n = 1, 2, 3 into 2n + 5',
                    content:
                      'For $n = 1$: $2(1) + 5 = 7$.\nFor $n = 2$: $2(2) + 5 = 9$.\nFor $n = 3$: $2(3) + 5 = 11$.',
                    mathFormula: 'T_1 = 7, \\quad T_2 = 9, \\quad T_3 = 11',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Find the common difference',
                    content:
                      'Jumps: $11 - 6 = 5$, $16 - 11 = 5$. Because difference is $+5$, the rule starts with $5n$ (the 5 times table).',
                    mathFormula: 'd = +5 \\implies 5n',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (b): Adjust with constant c',
                    content:
                      'When $n = 1$, $5(1) = 5$, but our first term is $6$. We need $+1$ ($5 + 1 = 6$). Check for $n = 2$: $5(2) + 1 = 11$ (matches!).',
                    mathFormula: '\\text{nth term} = 5n + 1',
                  },
                  {
                    stepNumber: 4,
                    label: 'Part (b): Calculate the 50th term',
                    content:
                      'Substitute $n = 50$ directly into $5n + 1$:',
                    mathFormula: 'T_{50} = 5(50) + 1 = 250 + 1 = 251',
                  },
                ],
                finalAnswer: '(a) 7, 9, 11; (b) nth term = 5n + 1, 50th term = 251',
              },
            },
          ],
        },
        {
          id: '9.3-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Mixing Up $n$ (Position) and the Term Value',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Multiplying the 1st term by 10 to find the 10th term',
                wrongWay: '10th term of 7, 10, 13... = 7 * 10 = 70',
                whyWrong:
                  'Students confuse scaling terms with finding term positions. Multiplying $7 \\times 10 = 70$ is wrong because the sequence only adds $3$ each time, not multiplies!',
                correctWay:
                  'Always find the $n$th term formula first ($3n + 4$), then substitute $n = 10$: $3(10) + 4 = 34$.',
                proTip:
                  'Two-step recipe for finding $n$th term: (1) Find the jump $d$ $\\rightarrow$ write $dn$. (2) Ask: "What do I add or subtract from $d$ to get the 1st term?" That gives $+ c$ or $- c$.',
                memoryHook: 'The position n is the seat number, not the person sitting in it!',
              },
            },
          ],
        },
        {
          id: '9.3-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Substitute $n$ or find the $dn + c$ formula, then check your answers.',
            },
          ],
          questions: [
            {
              id: '9.3-ex1-q1',
              number: 1,
              question: 'The $n$th term of a sequence is $3n + 1$. What is the 4th term ($n = 4$)?',
              hint: 'Substitute $n = 4$: $3 \\times 4 + 1$.',
              answer: '13',
              explanation: '$3(4) + 1 = 12 + 1 = 13$.',
            },
            {
              id: '9.3-ex1-q2',
              number: 2,
              question: 'What is the $n$th term of the sequence: $4, 7, 10, 13, \\dots$?',
              hint: 'Difference is $+3$ ($3n$). Term 1 is 4, and $3(1) + 1 = 4$.',
              answer: '3n + 1',
              explanation: 'Difference $= +3 \\implies 3n$. First term $= 4 = 3(1) + 1$. So rule is $3n + 1$.',
            },
            {
              id: '9.3-ex1-q3',
              number: 3,
              question: 'The $n$th term of a sequence is $50 - 4n$. What is the 5th term?',
              hint: 'Substitute $n = 5$: $50 - (4 \\times 5)$.',
              answer: '30',
              explanation: '$50 - 4(5) = 50 - 20 = 30$.',
            },
          ],
        },
        {
          id: '9.3-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Use the $n$th term formula to solve these 3 real-world situations on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '9.3-ex2-q1',
              number: 1,
              question:
                'A taxi company charges a fixed pickup fee of $£3$ plus $£2$ per mile $n$. The cost formula is $C = 2n + 3$. What is the fare for a $14$-mile journey?',
              hint: 'Substitute $n = 14$ into $2n + 3$.',
              answer: '£31',
              explanation: '$C = 2(14) + 3 = 28 + 3 = £31$.',
            },
            {
              id: '9.3-ex2-q2',
              number: 2,
              question:
                'A festival sets up dining tables in a line. With $1$ table they seat $6$ people; with $2$ tables joined they seat $10$; with $3$ tables they seat $14$. The $n$th term for seating is $4n + 2$. How many people can sit at $15$ joined tables?',
              hint: 'Calculate $4(15) + 2$.',
              answer: '62 people',
              explanation: '$4(15) + 2 = 60 + 2 = 62$ people.',
            },
            {
              id: '9.3-ex2-q3',
              number: 3,
              question:
                'A subscription box costs $£12$ for the first month plus $£7$ each subsequent month. The total paid after $n$ months is $7n + 5$. After how many months will a customer have paid a total of $£75$?',
              hint: 'Solve $7n + 5 = 75 \\implies 7n = 70$.',
              answer: '10 months',
              explanation: '$7n + 5 = 75 \\implies 7n = 70 \\implies n = 10$ months.',
            },
          ],
        },
        {
          id: '9.3-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Tackle these 3 challenge questions on $n$th term algebra and comparisons on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '9.3-ex3-q1',
              number: 1,
              question:
                'Find the $n$th term of the decreasing sequence: $23, 19, 15, 11, \\dots$',
              hint: 'Common difference is $-4 \\implies -4n$. When $n = 1$, $-4(1) + c = 23 \\implies c = 27$.',
              answer: '27 - 4n (or -4n + 27)',
              explanation:
                'The jump is $-4$, so start with $-4n$. For $n = 1$: $-4(1) + 27 = 23$. So rule is $27 - 4n$.',
            },
            {
              id: '9.3-ex3-q2',
              number: 2,
              question:
                'Sequence A has $n$th term $3n + 4$. Sequence B has $n$th term $5n - 16$. At what position $n$ do both sequences have the EXACT same value?',
              hint: 'Set them equal: $3n + 4 = 5n - 16$. Subtract $3n$ and add $16$.',
              answer: 'n = 10 (value is 34)',
              explanation:
                '$3n + 4 = 5n - 16 \\implies 20 = 2n \\implies n = 10$. Both equal $34$ at $n = 10$.',
            },
            {
              id: '9.3-ex3-q3',
              number: 3,
              question:
                'A sequence has $n$th term $n^2 + 2$. Is $123$ a term in this sequence? If yes, which position $n$ is it?',
              hint: 'Solve $n^2 + 2 = 123 \\implies n^2 = 121$. What is $\\sqrt{121}$?',
              answer: 'Yes, n = 11 (the 11th term)',
              explanation:
                '$n^2 + 2 = 123 \\implies n^2 = 121$. Since $11^2 = 121$, $n = 11$. Yes, it is the 11th term!',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 9.4 Representing simple functions
    // -------------------------------------------------------------------------
    {
      id: '9.4',
      subtopicNumber: '9.4',
      title: 'Representing simple functions',
      type: 'lesson',
      steps: [
        {
          id: '9.4-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The Magic Function Machine',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'A Vending Machine or Currency Converter',
              scenario:
                'Think of a function machine like a currency exchange booth at an airport: you feed in US Dollars ($x$, the input), the machine multiplies by $0.8$ and subtracts a $£2$ fee, and out comes British Pounds ($y$, the output). No matter what number you feed in, it follows the exact same set of instructions every time: $y = 0.8x - 2$.',
              takeaway:
                'A function is a mathematical rule that assigns exactly ONE output ($y$) to each input ($x$). We can represent functions in 4 ways: (1) In words, (2) Function machine diagram, (3) Table of values, and (4) Algebraic formula ($y = 2x + 3$).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Input ($x$)',
                  definition: 'The starting number fed into a function machine.',
                  example: 'If $x = 4$ is the input.',
                },
                {
                  term: 'Output ($y$)',
                  definition: 'The result that comes out after applying the function rule.',
                  example: 'If the rule is "multiply by 3, add 1", input 4 gives output $y = 3(4) + 1 = 13$.',
                },
                {
                  term: 'Function Machine',
                  definition: 'A visual diagram with an input, one or more operation boxes, and an output.',
                  example: 'Input $x \\rightarrow [\\times 5] \\rightarrow [+2] \\rightarrow$ Output $y$.',
                },
                {
                  term: 'Inverse Function (Reverse Machine)',
                  definition: 'Reversing the operations in opposite order to find the input from a known output.',
                  example: 'To reverse $[\\times 5] \\rightarrow [+2]$, you subtract 2, then divide by 5.',
                },
              ],
            },
          ],
        },
        {
          id: '9.4-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Function Machine & Working Backwards',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) An input of $x = 6$ goes into the machine: $[\\text{Input } x] \\rightarrow [\\times 4] \\rightarrow [- 5] \\rightarrow [\\text{Output } y]$. Find $y$.\n(b) If the output of the same machine is $y = 27$, find the input $x$.',
                context: 'Evaluating function outputs and reversing operations',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Apply the forward operations for x = 6',
                    content:
                      'Step 1: Multiply input by $4$: $6 \\times 4 = 24$.\nStep 2: Subtract $5$: $24 - 5 = 19$.',
                    mathFormula: 'y = 4(6) - 5 = 24 - 5 = 19',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Set up the inverse reverse machine',
                    content:
                      'Working backwards: the last operation was "subtract 5", so we ADD 5. The first operation was "multiply by 4", so we DIVIDE by 4.',
                    mathFormula: '27 + 5 = 32, \\quad 32 \\div 4 = 8',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (b): Verify the solution',
                    content:
                      'Check with input $8$: $4(8) - 5 = 32 - 5 = 27$. Correct! So input $x = 8$.',
                    mathFormula: 'x = 8',
                  },
                ],
                finalAnswer: '(a) Output y = 19; (b) Input x = 8',
              },
            },
          ],
        },
        {
          id: '9.4-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Reversing in the Wrong Order',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Reversing operations in the forward order instead of backwards',
                wrongWay: 'To reverse [* 3] -> [+ 6] with output 21: 21 / 3 = 7, then 7 - 6 = 1',
                whyWrong:
                  'Like putting on socks and then shoes, when taking them off you must remove shoes first! You must reverse the LAST operation first.',
                correctWay:
                  'Undo $+6$ first: $21 - 6 = 15$. Then undo $\\times 3$: $15 \\div 3 = 5$. Check: $3(5) + 6 = 21$.',
                proTip:
                  'Always write out the inverse machine explicitly: Output $\\rightarrow [- 6] \\rightarrow [\\div 3] \\rightarrow$ Input.',
                memoryHook: 'Last in, first out—reverse from back to front!',
              },
            },
          ],
        },
        {
          id: '9.4-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Find inputs and outputs using function machines.',
            },
          ],
          questions: [
            {
              id: '9.4-ex1-q1',
              number: 1,
              question: 'What is the output $y$ when input $x = 5$ is passed through $y = 3x + 2$?',
              hint: 'Calculate $3 \\times 5 + 2$.',
              answer: '17',
              explanation: '$y = 3(5) + 2 = 15 + 2 = 17$.',
            },
            {
              id: '9.4-ex1-q2',
              number: 2,
              question: 'A machine does: $[\\times 2] \\rightarrow [+ 7]$. What is the inverse machine to find input from output?',
              hint: 'Reverse operations in opposite order: undo $+7$ with $-7$, then undo $\\times 2$ with $\\div 2$.',
              answer: '[- 7] then [/ 2]',
              explanation: 'The inverse of $[\\times 2] \\rightarrow [+ 7]$ is $[- 7] \\rightarrow [\\div 2]$.',
            },
            {
              id: '9.4-ex1-q3',
              number: 3,
              question: 'For the function $y = 2x - 3$, what input $x$ produces an output of $y = 11$?',
              hint: 'Add 3 to 11, then divide by 2.',
              answer: '7',
              explanation: '$11 + 3 = 14$; $14 \\div 2 = 7$. Check: $2(7) - 3 = 11$.',
            },
          ],
        },
        {
          id: '9.4-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Model these 3 real-world relationships with functions and formulas on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '9.4-ex2-q1',
              number: 1,
              question:
                'A bakery calculates the price of a personalized cake using $P = 4w + 15$, where $w$ is the weight in kg and $P$ is the price in pounds ($£$). What is the price of a $3.5\\text{ kg}$ cake?',
              hint: 'Substitute $w = 3.5$: $4 \\times 3.5 + 15$.',
              answer: '£29',
              explanation: '$4 \\times 3.5 = 14$. $14 + 15 = £29$.',
            },
            {
              id: '9.4-ex2-q2',
              number: 2,
              question:
                'A temperature converter uses the formula $F = 1.8C + 32$, where $C$ is degrees Celsius and $F$ is degrees Fahrenheit. If $C = 25^\\circ\\text{C}$ on a sunny day, what is $F$?',
              hint: '$1.8 \\times 25 = 45$. Add 32.',
              answer: '77°F',
              explanation: '$1.8 \\times 25 = 45$. $45 + 32 = 77^\\circ\\text{F}$.',
            },
            {
              id: '9.4-ex2-q3',
              number: 3,
              question:
                'A mobile phone plan costs $C = 0.05m + 10$, where $m$ is minutes called and $C$ is total bill in $£$. If a customer was billed $£18$, how many minutes did they use?',
              hint: 'Subtract $10$ from $18$: $£8$. Then divide $8 \\div 0.05 = 8 \\times 20$.',
              answer: '160 minutes',
              explanation: '$18 - 10 = 8$. $8 \\div 0.05 = 160$ minutes.',
            },
          ],
        },
        {
          id: '9.4-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 advanced function and algebra puzzles on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '9.4-ex3-q1',
              number: 1,
              question:
                'Look at this table of values:\n- $x = 1 \\implies y = 5$\n- $x = 2 \\implies y = 9$\n- $x = 3 \\implies y = 13$\n- $x = 4 \\implies y = 17$\nWhich algebraic function formula relates $y$ to $x$?',
              hint: 'Notice $y$ goes up by 4 each time, so the gradient is 4 ($4x$). When $x = 1$, $4(1) + 1 = 5$.',
              answer: 'y = 4x + 1',
              explanation:
                'Differences in $y$ are $+4 \\implies y = 4x + c$. At $x = 1$: $4(1) + c = 5 \\implies c = 1$. So $y = 4x + 1$.',
            },
            {
              id: '9.4-ex3-q2',
              number: 2,
              question:
                'Two function machines are connected in series:\nInput $x \\rightarrow [\\times 3] \\rightarrow [+ 2] \\rightarrow [\\times 2] \\rightarrow$ Output $z$.\nWhat single simplified algebraic formula expresses $z$ in terms of $x$?',
              hint: 'After the first two operations, the middle value is $3x + 2$. Now multiply that whole bracket by 2: $2(3x + 2)$.',
              answer: 'z = 6x + 4',
              explanation: 'Middle value $= 3x + 2$. Multiplying by 2: $2(3x + 2) = 6x + 4$.',
            },
            {
              id: '9.4-ex3-q3',
              number: 3,
              question:
                'For the function $y = x^2 - 3$, what are ALL possible inputs $x$ that give an output of $y = 22$?',
              hint: 'Solve $x^2 - 3 = 22 \\implies x^2 = 25$. Remember negative numbers squared are also positive!',
              answer: 'x = 5 and x = -5',
              explanation:
                '$x^2 = 22 + 3 = 25$. Both $5^2 = 25$ and $(-5)^2 = 25$. So $x = 5$ or $x = -5$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Unit 9 End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '9-test',
      subtopicNumber: '9',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '9-test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Part A: Basic Recall & Calculation',
          badge: 'Test: Part A (Basic Recall)',
          blocks: [
            {
              type: 'text',
              content:
                'Answer all 3 mixed recall questions covering Unit 9. Solve on the Teacher\'s Board, then check your answers.',
            },
          ],
          questions: [
            {
              id: '9-test-q1',
              number: 1,
              question: 'What is the next term in the sequence $7, 13, 19, 25, \\dots$?',
              hint: 'Common difference is $+6$. $25 + 6 = ?$',
              answer: '31',
              explanation: '$25 + 6 = 31$.',
            },
            {
              id: '9-test-q2',
              number: 2,
              question: 'What is the 6th term of the sequence with $n$th term rule $4n - 3$?',
              hint: 'Substitute $n = 6$: $4(6) - 3$.',
              answer: '21',
              explanation: '$4(6) - 3 = 24 - 3 = 21$.',
            },
            {
              id: '9-test-q3',
              number: 3,
              question:
                'In the function machine $[\\text{Input } x] \\rightarrow [\\times 5] \\rightarrow [+ 4] \\rightarrow [\\text{Output } y]$, what output is produced by input $x = 7$?',
              hint: '$5 \\times 7 + 4$.',
              answer: '39',
              explanation: '$5(7) + 4 = 35 + 4 = 39$.',
            },
          ],
        },
        {
          id: '9-test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Part B: Real-World Applications',
          badge: 'Test: Part B (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 real-world application problems covering sequences and functions on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '9-test-q4',
              number: 1,
              question:
                'A gardener plants trees in rows: Row 1 has $5$ trees, Row 2 has $9$, Row 3 has $13$, and Row 4 has $17$. How many trees will be in Row 12?',
              hint: 'Formula is $4n + 1$. Substitute $n = 12$.',
              answer: '49 trees',
              explanation:
                'Difference $= +4$. Rule $= 4n + 1$. For Row 12: $4(12) + 1 = 48 + 1 = 49$ trees.',
            },
            {
              id: '9-test-q5',
              number: 2,
              question:
                'A car hire company charges $£45$ flat fee plus $£15$ per day. If a customer is charged $£150$, for how many days was the car hired?',
              hint: 'Cost formula: $15d + 45 = 150$. Subtract 45 and divide by 15.',
              answer: '7 days',
              explanation: '$150 - 45 = 105$. $105 \\div 15 = 7$ days.',
            },
            {
              id: '9-test-q6',
              number: 3,
              question:
                'A water tank starts with $500$ litres of water and drains at $25$ litres every minute. What is the $n$th term formula for the water remaining after $n$ minutes?',
              hint: 'Starts at 500 and decreases by 25 each minute $n$.',
              answer: '500 - 25n',
              explanation:
                'Since it drains $25\\text{ L}$ per minute from $500\\text{ L}$, remaining water is $500 - 25n$.',
            },
          ],
        },
        {
          id: '9-test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Part C: Reasoning & Challenge',
          badge: 'Test: Part C (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Demonstrate your mathematical reasoning on these 3 challenge questions on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '9-test-q7',
              number: 1,
              question: 'Find the $n$th term of the sequence $2, 9, 16, 23, 30, \\dots$',
              hint: 'Difference is $+7 \\implies 7n$. Term 1 is 2, and $7(1) - 5 = 2$.',
              answer: '7n - 5',
              explanation:
                'Common difference is $+7$, so formula starts $7n$. For $n = 1$: $7(1) - 5 = 2$. Formula is $7n - 5$.',
            },
            {
              id: '9-test-q8',
              number: 2,
              question:
                'Is $175$ a term in the sequence with $n$th term $6n + 1$? If yes, which term is it?',
              hint: 'Solve $6n + 1 = 175 \\implies 6n = 174$. Check $174 \\div 6$.',
              answer: 'Yes, the 29th term',
              explanation:
                '$6n + 1 = 175 \\implies 6n = 174 \\implies n = 174 \\div 6 = 29$. Yes, exactly the 29th term!',
            },
            {
              id: '9-test-q9',
              number: 3,
              question:
                'A mystery function machine takes input $x$, multiplies by an integer $a$, and then adds $b$. If input $2$ gives output $11$, and input $5$ gives output $26$, what is the formula?',
              hint: 'Input difference is $5 - 2 = 3$. Output difference is $26 - 11 = 15$. So $a = 15 \\div 3 = 5$.',
              answer: 'y = 5x + 1',
              explanation:
                'Jump in $y$ for $3$ units of $x$ is $26 - 11 = 15 \\implies a = 15 \\div 3 = 5$. Then $5(2) + b = 11 \\implies b = 1$. So $y = 5x + 1$.',
            },
          ],
        },
      ],
    },
  ],
};
