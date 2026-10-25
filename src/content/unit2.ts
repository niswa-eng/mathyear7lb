/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit2: Unit = {
  id: 'unit-2',
  unitNumber: 2,
  title: 'Expressions, Formulae and Equations',
  learningObjectives: [
    'Use letters to represent unknown numbers and variables.',
    'Write algebraic expressions from word problems and vice versa.',
    'Write and use simple formulae.',
    'Simplify expressions by collecting like terms.',
    'Expand expressions using the distributive law.',
    'Write and solve simple equations.',
    'Understand and represent inequalities using letters.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 2.1 Constructing Expressions
    // -------------------------------------------------------------------------
    {
      id: '2.1',
      subtopicNumber: '2.1',
      title: 'Constructing Expressions',
      type: 'lesson',
      steps: [
        {
          id: '2.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Mystery Bags & Letters as Numbers',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'The Mystery Marble Bag',
              scenario:
                'Imagine you have a closed cloth bag of marbles. You don\'t know how many marbles are inside, so you label the bag $n$. If your teacher gives you $3$ extra marbles, you now have $n + 3$. If your friend has $2$ identical bags, they have $2 \\times n$, which in algebra we write simply as $2n$.',
              takeaway:
                'Letters in algebra simply stand for numbers we don\'t know yet. We write $2 \\times n$ as $2n$, and $n \\div 4$ as $\\frac{n}{4}$.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Variable',
                  definition: 'A letter (such as $x$, $y$, or $n$) used to represent an unknown or changeable number.',
                  example: 'In $x + 5$, $x$ is the variable.',
                },
                {
                  term: 'Term',
                  definition: 'A single number, a variable, or numbers and variables multiplied together.',
                  example: '$3x$, $-7$, and $4y$ are all terms.',
                },
                {
                  term: 'Expression',
                  definition: 'A combination of terms joined by $+$ or $-$ signs (with NO equals sign).',
                  example: '$2n + 5$ is an expression.',
                },
              ],
            },
            {
              type: 'rule_box',
              title: 'Algebraic Writing Shortcuts',
              rule: 'Mathematicians are neat and tidy. We leave out the multiplication and division signs:',
              tips: [
                'Write $3 \\times y$ as $3y$ (number always goes in front of the letter)',
                'Write $a \\div 5$ as $\\frac{a}{5}$ (use fraction notation)',
                'Write $x \\times x$ as $x^2$ (use powers)',
                'Write $1x$ as just $x$ (we don\'t write the 1)',
              ],
            },
          ],
        },
        {
          id: '2.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Writing Word Phrases as Algebra',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem: 'Sam has $x$ stickers. Write an algebraic expression for the number of stickers if:\n(a) He buys 4 more stickers.\n(b) He shares all his stickers equally between 2 friends.\n(c) He triples his stickers and then loses 1.',
                context: 'Simplest Starting Example',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Buying 4 more',
                    content: 'Starting with $x$, "4 more" means adding 4.',
                    mathFormula: 'x + 4',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Sharing equally between 2',
                    content: 'Sharing between 2 means dividing by 2. In algebra we write division as a fraction.',
                    mathFormula: '\\frac{x}{2}',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Tripling then losing 1',
                    content: 'Tripling $x$ gives $3x$. Losing 1 means subtracting 1.',
                    mathFormula: '3x - 1',
                  },
                ],
                finalAnswer: '(a) x + 4, (b) \\frac{x}{2}, (c) 3x - 1',
              },
            },
          ],
        },
        {
          id: '2.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Order Matters in Subtraction & Division',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Writing "5 less than x" as 5 - x',
                wrongWay: '"5 less than x" written as 5 - x',
                whyWrong: '5 - x means starting with 5 and taking away x. If you have $10 and want $5 less, you calculate 10 - 5 = 5, not 5 - 10!',
                correctWay: '"5 less than x" is x - 5',
                proTip: 'Whenever you see "less than" or "subtracted from", the word that comes AFTER goes FIRST in your algebra expression.',
                memoryHook: '"Less THAN" makes the second item run to the front!',
              },
            },
          ],
        },
        {
          id: '2.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Word to Expression Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Let $n$ represent a starting number. Write the simplest algebraic expression for each sentence.',
            },
          ],
          questions: [
            {
              id: '2.1-ex1-q1',
              number: 1,
              question: 'Write an expression for: "6 more than $n$".',
              hint: '"More than" means add (+).',
              answer: 'n + 6',
              explanation: 'Start with $n$ and add $6$: $n + 6$.',
            },
            {
              id: '2.1-ex1-q2',
              number: 2,
              question: 'Write an expression for: "Multiply $n$ by 5".',
              hint: 'In algebra, put the number directly in front of the letter.',
              answer: '5n',
              explanation: '$5 \\times n$ is written neatly as $5n$.',
            },
            {
              id: '2.1-ex1-q3',
              number: 3,
              question: 'Write an expression for: "7 less than $n$".',
              hint: 'Start with n, then subtract 7.',
              answer: 'n - 7',
              explanation: '"7 less than $n$" means starting with $n$ and taking away $7$: $n - 7$.',
            },
          ],
        },
        {
          id: '2.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Real-World Expressions',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Translate everyday situations into clean algebraic expressions.',
            },
          ],
          questions: [
            {
              id: '2.1-ex2-q1',
              number: 1,
              context: 'Cinema Tickets',
              question:
                'An adult ticket costs $\$a$ and a child ticket costs $\$c$. Write an expression for the total cost of buying 2 adult tickets and 3 child tickets.',
              hint: 'Multiply the quantity of each ticket by its cost, then add them.',
              answer: '2a + 3c',
              explanation: '2 adult tickets cost $2 \\times a = 2a$. 3 child tickets cost $3 \\times c = 3c$. Total $= 2a + 3c$.',
            },
            {
              id: '2.1-ex2-q2',
              number: 2,
              context: 'Ages in a Family',
              question:
                'Liam is $y$ years old. His sister Mia is 4 years older than Liam. His brother Noah is twice as old as Liam. Write an expression for the sum of all three children\'s ages.',
              hint: 'Liam is y, Mia is y + 4, Noah is 2y. Add them together.',
              answer: 'y + (y + 4) + 2y = 4y + 4',
              explanation: 'Liam $= y$, Mia $= y + 4$, Noah $= 2y$. Total $= y + y + 4 + 2y = 4y + 4$.',
            },
            {
              id: '2.1-ex2-q3',
              number: 3,
              context: 'Perimeter of a Rectangle',
              question:
                'A rectangle has a length of $w + 5\\text{ cm}$ and a width of $w\\text{ cm}$. Write an expression in its simplest form for the perimeter of the rectangle.',
              hint: 'Perimeter is 2 times length plus 2 times width.',
              answer: '4w + 10\\text{ cm}',
              explanation: 'Perimeter $= (w + 5) + w + (w + 5) + w = 4w + 10\\text{ cm}$.',
            },
          ],
        },
        {
          id: '2.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Challenge: Reverse Translations & Unknown Patterns',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Work backwards and translate complex multi-step rules.',
            },
          ],
          questions: [
            {
              id: '2.1-ex3-q1',
              number: 1,
              context: 'Reverse Translation',
              question:
                'Explain in clear English words what the algebraic expression $\\dfrac{x + 8}{3}$ means.',
              hint: 'Notice the brackets implied by the fraction bar: add 8 first, then divide.',
              answer: 'Add 8 to x, then divide the entire result by 3.',
              explanation: 'The top of the fraction is grouped together: first add 8 to $x$, then divide that sum by 3.',
            },
            {
              id: '2.1-ex3-q2',
              number: 2,
              context: 'Consecutive Numbers',
              question:
                'If $k$ is an even integer, write an algebraic expression for the next two consecutive even integers after $k$.',
              hint: 'Even numbers go up in steps of 2.',
              answer: 'k + 2\\text{ and }k + 4',
              explanation: 'Even numbers increase by 2 (e.g. 4, 6, 8). The next two are $k + 2$ and $k + 4$.',
            },
            {
              id: '2.1-ex3-q3',
              number: 3,
              context: 'Money in Cents',
              question:
                'A purse contains $d$ dimes (worth 10 cents each) and $q$ quarters (worth 25 cents each). Write an expression for the total value in cents.',
              hint: 'Each dime contributes 10 cents, each quarter contributes 25 cents.',
              answer: '10d + 25q\\text{ cents}',
              explanation: '$d$ dimes $= 10d$ cents. $q$ quarters $= 25q$ cents. Total value $= 10d + 25q$ cents.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 2.2 Using expressions and formulae
    // -------------------------------------------------------------------------
    {
      id: '2.2',
      subtopicNumber: '2.2',
      title: 'Using expressions and formulae',
      type: 'lesson',
      steps: [
        {
          id: '2.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Substitution & Cooking Recipes',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'The Recipe Formula',
              scenario:
                'A recipe for cooking a turkey says: "Roasting time in minutes = $20 \\times \\text{weight in kg} + 35$". Here, weight is a variable $w$. If your turkey weighs $3\\text{ kg}$, you simply replace $w$ with $3$: $20 \\times 3 + 35 = 60 + 35 = 95\\text{ minutes}$! Replacing a letter with a specific number is called substitution.',
              takeaway:
                'To evaluate an expression or formula, replace each variable with its given number and follow the correct order of operations (BIDMAS).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Substitution',
                  definition: 'Replacing letters with given numbers to calculate a numerical answer.',
                  example: 'If $x = 4$, then $3x + 2 = 3(4) + 2 = 12 + 2 = 14$.',
                },
                {
                  term: 'Formula',
                  definition: 'A mathematical rule showing the relationship between two or more quantities, having an equals sign.',
                  example: '$A = l \\times w$ or $P = 2l + 2w$.',
                },
              ],
            },
          ],
        },
        {
          id: '2.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Substituting Positive & Negative Values',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem: 'Given the formula $v = u + at$:\n(a) Find $v$ when $u = 5$, $a = 2$, and $t = 4$.\n(b) Find $v$ when $u = 20$, $a = -3$, and $t = 5$.',
                context: 'Physics Speed Formula',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Substitute positive values',
                    content: 'Replace $u$ with 5, $a$ with 2, and $t$ with 4. Multiply before adding!',
                    mathFormula: 'v = 5 + (2 \\times 4) = 5 + 8 = 13',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Substitute with a negative acceleration',
                    content: 'Replace $u$ with 20, $a$ with -3, and $t$ with 5. Remember $(-3) \\times 5 = -15$.',
                    mathFormula: 'v = 20 + (-3 \\times 5) = 20 - 15 = 5',
                  },
                ],
                finalAnswer: '(a) v = 13, (b) v = 5',
              },
            },
          ],
        },
        {
          id: '2.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Squaring Negative Numbers Trap',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Evaluating x² when x is negative without brackets',
                wrongWay: 'If x = -5, writing x² = -25',
                whyWrong: 'x² means x multiplied by itself: (-5) × (-5) = +25, NOT -25!',
                correctWay: '(-5)² = +25',
                proTip: 'Whenever you substitute a negative number, ALWAYS put it inside brackets first: $(-5)^2 = 25$.',
                memoryHook: 'Brackets hug the negative sign safely!',
              },
            },
          ],
        },
        {
          id: '2.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Direct Substitution',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'If $a = 3$ and $b = 5$, evaluate each of the simplest expressions below.',
            },
          ],
          questions: [
            {
              id: '2.2-ex1-q1',
              number: 1,
              question: 'Find the value of: $a + b$',
              hint: 'Replace a with 3 and b with 5, then add.',
              answer: '8',
              explanation: '$3 + 5 = 8$.',
            },
            {
              id: '2.2-ex1-q2',
              number: 2,
              question: 'Find the value of: $2a + b$',
              hint: 'Multiply a by 2 first, then add b.',
              answer: '11',
              explanation: '$2(3) + 5 = 6 + 5 = 11$.',
            },
            {
              id: '2.2-ex1-q3',
              number: 3,
              question: 'Find the value of: $3b - 4a$',
              hint: 'Calculate 3 times 5 and 4 times 3, then subtract.',
              answer: '3',
              explanation: '$3(5) - 4(3) = 15 - 12 = 3$.',
            },
          ],
        },
        {
          id: '2.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Real-World Formulae',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Use practical formulas used in science, taxi fares, and construction.',
            },
          ],
          questions: [
            {
              id: '2.2-ex2-q1',
              number: 1,
              context: 'Taxi Meter Fare',
              question:
                'The cost $C$ in dollars of a taxi trip is given by the formula $C = 3.50 + 1.80d$, where $d$ is the distance driven in kilometers. Find the cost of an $8\\text{ km}$ journey.',
              hint: 'Substitute d = 8 into the formula.',
              answer: '\\$17.90',
              explanation: '$C = 3.50 + 1.80(8) = 3.50 + 14.40 = \\$17.90$.',
            },
            {
              id: '2.2-ex2-q2',
              number: 2,
              context: 'Temperature Conversion',
              question:
                'The formula to convert temperature from Celsius ($C$) to Fahrenheit ($F$) is $F = 1.8C + 32$. What is the Fahrenheit temperature when $C = 25^\\circ\\text{C}$?',
              hint: 'Multiply 25 by 1.8 first, then add 32.',
              answer: '77^\\circ\\text{F}',
              explanation: '$F = 1.8(25) + 32 = 45 + 32 = 77^\\circ\\text{F}$.',
            },
            {
              id: '2.2-ex2-q3',
              number: 3,
              context: 'Area of a Triangle',
              question:
                'The area of a triangle is given by $A = \\dfrac{bh}{2}$. Find the area when the base $b = 14\\text{ cm}$ and the height $h = 9\\text{ cm}$.',
              hint: 'Multiply base by height, then divide by 2.',
              answer: '63\\text{ cm}^2',
              explanation: '$A = \\dfrac{14 \\times 9}{2} = \\dfrac{126}{2} = 63\\text{ cm}^2$.',
            },
          ],
        },
        {
          id: '2.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Substitution with Negative Values & Powers',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Evaluate challenging expressions involving negative values and powers.',
            },
          ],
          questions: [
            {
              id: '2.2-ex3-q1',
              number: 1,
              context: 'Negative Variables',
              question:
                'If $p = -2$ and $q = -3$, evaluate: $p^2 - 3q$',
              hint: 'p^2 = (-2)^2 = 4. Remember subtracting a negative is adding.',
              answer: '13',
              explanation: '$(-2)^2 - 3(-3) = 4 - (-9) = 4 + 9 = 13$.',
            },
            {
              id: '2.2-ex3-q2',
              number: 2,
              context: 'Algebraic Fraction',
              question:
                'If $x = 6$ and $y = -2$, evaluate: $\\dfrac{x^2 + y^2}{x - y}$',
              hint: 'Evaluate numerator and denominator separately. Notice x - y = 6 - (-2).',
              answer: '5',
              explanation: 'Numerator: $6^2 + (-2)^2 = 36 + 4 = 40$. Denominator: $6 - (-2) = 6 + 2 = 8$. Fraction: $\\dfrac{40}{8} = 5$.',
            },
            {
              id: '2.2-ex3-q3',
              number: 3,
              context: 'Working Backwards Formula',
              question:
                'In the perimeter formula for a rectangle $P = 2l + 2w$, the perimeter is $P = 38\\text{ cm}$ and the length is $l = 12\\text{ cm}$. Find the width $w$.',
              hint: 'Substitute P = 38 and l = 12 into the formula: 38 = 24 + 2w.',
              answer: 'w = 7\\text{ cm}',
              explanation: '$38 = 2(12) + 2w \\implies 38 = 24 + 2w \\implies 2w = 14 \\implies w = 7\\text{ cm}$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 2.3 Collecting like terms
    // -------------------------------------------------------------------------
    {
      id: '2.3',
      subtopicNumber: '2.3',
      title: 'Collecting like terms',
      type: 'lesson',
      steps: [
        {
          id: '2.3-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Fruit Baskets & Like Terms',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Apples and Bananas',
              scenario:
                'If you have $3$ apples and your friend gives you $2$ more apples, you have $3a + 2a = 5a$. But if you have $3$ apples and $4$ bananas, you CANNOT combine them into "7 apple-bananas"! They remain $3a + 4b$. In algebra, you can only add or subtract terms that have the exact same variable parts. We call these LIKE TERMS.',
              takeaway:
                'Like terms have identical variable letters and powers. Group them together and combine their coefficients.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Like Terms',
                  definition: 'Terms that contain the exact same letters raised to the exact same powers.',
                  example: '$4x$ and $-9x$ are like terms. $3x$ and $3x^2$ are UNLIKE terms.',
                },
                {
                  term: 'Coefficient',
                  definition: 'The number multiplying the variable.',
                  example: 'In $7y$, the coefficient is $7$. In $-x$, the coefficient is $-1$.',
                },
              ],
            },
          ],
        },
        {
          id: '2.3-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Grouping Like Terms with Signs',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem: 'Simplify each expression by collecting like terms:\n(a) $5x + 3x$\n(b) $7a + 4b - 2a + 5b$\n(c) $6p + 8 - 4p - 3$',
                context: 'Step-by-Step Term Collection',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Same variable',
                    content: 'Both terms have $x$. Add the coefficients: $5 + 3 = 8$.',
                    mathFormula: '5x + 3x = 8x',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Group a terms and b terms',
                    content: 'Circle the $a$ terms (keeping their signs): $7a - 2a = 5a$. Box the $b$ terms: $+4b + 5b = +9b$.',
                    mathFormula: '(7a - 2a) + (4b + 5b) = 5a + 9b',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Variables and constant numbers',
                    content: 'Combine $p$ terms: $6p - 4p = 2p$. Combine constant numbers: $8 - 3 = +5$.',
                    mathFormula: '(6p - 4p) + (8 - 3) = 2p + 5',
                  },
                ],
                finalAnswer: '(a) 8x, (b) 5a + 9b, (c) 2p + 5',
              },
            },
          ],
        },
        {
          id: '2.3-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Forgetting the Sign in Front of a Term',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Ignoring the minus sign when collecting',
                wrongWay: 'In 5x - 3y + 2x, saying the result is 7x + 3y',
                whyWrong: 'The minus sign belongs to 3y! The sign in front of a term travels with that term wherever it goes.',
                correctWay: '5x + 2x - 3y = 7x - 3y',
                proTip: 'When sorting terms, always draw a circle around the term TOGETHER with the sign directly in front of it.',
                memoryHook: 'The sign is like a dog\'s leash: it leads directly from the front!',
              },
            },
          ],
        },
        {
          id: '2.3-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Single-Variable Collecting',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Simplify each expression by collecting like terms.',
            },
          ],
          questions: [
            {
              id: '2.3-ex1-q1',
              number: 1,
              question: 'Simplify: $4m + 5m$',
              hint: 'Add the numbers in front of m.',
              answer: '9m',
              explanation: '$4 + 5 = 9$, so $4m + 5m = 9m$.',
            },
            {
              id: '2.3-ex1-q2',
              number: 2,
              question: 'Simplify: $9y - 3y$',
              hint: 'Subtract 3 from 9.',
              answer: '6y',
              explanation: '$9 - 3 = 6$, so $9y - 3y = 6y$.',
            },
            {
              id: '2.3-ex1-q3',
              number: 3,
              question: 'Simplify: $7k + k$',
              hint: 'Remember that k means 1k.',
              answer: '8k',
              explanation: '$7k + 1k = 8k$.',
            },
          ],
        },
        {
          id: '2.3-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Two Variables and Constants',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Collect terms with two different letters and regular numbers.',
            },
          ],
          questions: [
            {
              id: '2.3-ex2-q1',
              number: 1,
              context: 'Store Order Simplification',
              question:
                'Simplify: $5x + 4y + 3x - 2y$',
              hint: 'Group the x terms together and the y terms together.',
              answer: '8x + 2y',
              explanation: '$5x + 3x = 8x$, and $4y - 2y = +2y$. Result: $8x + 2y$.',
            },
            {
              id: '2.3-ex2-q2',
              number: 2,
              context: 'Perimeter of a Triangle',
              question:
                'A triangle has sides of length $3x + 2$, $2x + 5$, and $4x - 1$. Write the perimeter in simplest form.',
              hint: 'Add all three side expressions together.',
              answer: '9x + 6',
              explanation: 'Sum of $x$ terms: $3x + 2x + 4x = 9x$. Sum of constants: $2 + 5 - 1 = +6$. Total $= 9x + 6$.',
            },
            {
              id: '2.3-ex2-q3',
              number: 3,
              context: 'Algebraic Balancing',
              question:
                'Simplify: $10 - 4a + 6 + 7a$',
              hint: 'Group constants: 10 + 6. Group a terms: -4a + 7a.',
              answer: '3a + 16\\text{ (or }16 + 3a\\text{)}',
              explanation: '$-4a + 7a = +3a$. $10 + 6 = 16$. Result: $3a + 16$.',
            },
          ],
        },
        {
          id: '2.3-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Higher Powers & Mixed Variables',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Watch out for terms with powers like $x^2$ and $xy$!',
            },
          ],
          questions: [
            {
              id: '2.3-ex3-q1',
              number: 1,
              context: 'Power Separation',
              question:
                'Simplify: $4x^2 + 7x - 2x^2 + 3x$',
              hint: 'x^2 terms can only be combined with other x^2 terms, not with x.',
              answer: '2x^2 + 10x',
              explanation: '$4x^2 - 2x^2 = 2x^2$. $7x + 3x = 10x$. Result: $2x^2 + 10x$.',
            },
            {
              id: '2.3-ex3-q2',
              number: 2,
              context: 'Product Terms',
              question:
                'Simplify: $5xy + 2x - 3yx + 4y$. (Hint: Is $xy$ the same as $yx$?)',
              hint: 'Multiplication is commutative: xy = yx.',
              answer: '2xy + 2x + 4y',
              explanation: 'Because $xy = yx$, $5xy - 3yx = 2xy$. The other terms are unlike: $2xy + 2x + 4y$.',
            },
            {
              id: '2.3-ex3-q3',
              number: 3,
              context: 'Missing Term Puzzle',
              question:
                'Find the missing term $\\square$: $8a - 3b + \\square - 2a = 6a + 5b$',
              hint: 'Compare the left side 8a - 2a = 6a with the target. How do we get from -3b to +5b?',
              answer: '+8b',
              explanation: 'On the left: $8a - 2a = 6a$. To turn $-3b$ into $+5b$, we must add $+8b$, since $-3b + 8b = +5b$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 2.4 Expanding brackets
    // -------------------------------------------------------------------------
    {
      id: '2.4',
      subtopicNumber: '2.4',
      title: 'Expanding brackets',
      type: 'lesson',
      steps: [
        {
          id: '2.4-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The Party Bag Multiplier (Distributive Law)',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Handing Out Party Bags',
              scenario:
                'Suppose each party bag contains $1$ balloon and $2$ lollipops ($b + 2$). If you prepare $3$ identical party bags, how many balloons and lollipops do you need in total? You need $3$ balloons AND $3 \\times 2 = 6$ lollipops: $3(b + 2) = 3b + 6$! The number on the outside multiplies EVERYTHING on the inside.',
              takeaway:
                'Expanding brackets (distributive law) means multiplying the term outside the bracket by every term inside the bracket: $a(b + c) = ab + ac$.',
            },
            {
              type: 'rule_box',
              title: 'The Golden Bracket Rule',
              rule: 'Multiply outside term by Term 1, then multiply outside term by Term 2:',
              tips: [
                '$3(x + 4) = 3 \\times x + 3 \\times 4 = 3x + 12$',
                '$5(2y - 3) = 5 \\times 2y - 5 \\times 3 = 10y - 15$',
                '$-2(x + 4) = (-2)(x) + (-2)(4) = -2x - 8$ (watch negative signs!)',
              ],
            },
          ],
        },
        {
          id: '2.4-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Expanding and Simplifying',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem: 'Expand each bracket:\n(a) $4(x + 5)$\n(b) $3(2y - 7)$\n(c) Expand and simplify: $2(3x + 4) + 5(x - 1)$',
                context: 'Step-by-Step Distributive Law',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Single bracket with plus',
                    content: 'Multiply 4 by $x$, then 4 by 5.',
                    mathFormula: '4(x + 5) = 4x + 20',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Single bracket with coefficient and minus',
                    content: 'Multiply 3 by $2y$, then 3 by $-7$.',
                    mathFormula: '3(2y - 7) = 6y - 21',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Expand both, then collect like terms',
                    content: 'First expand $2(3x + 4) = 6x + 8$. Then expand $5(x - 1) = 5x - 5$. Collect: $(6x + 5x) + (8 - 5)$.',
                    mathFormula: '(6x + 8) + (5x - 5) = 11x + 3',
                  },
                ],
                finalAnswer: '(a) 4x + 20, (b) 6y - 21, (c) 11x + 3',
              },
            },
          ],
        },
        {
          id: '2.4-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Only Multiplying the First Term',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Forgetting to multiply the second term inside the bracket',
                wrongWay: '3(x + 5) = 3x + 5',
                whyWrong: 'The 3 only multiplied the x, leaving 5 unmultiplied! 3 sets of (x + 5) gives 3 fives = 15.',
                correctWay: '3(x + 5) = 3x + 15',
                proTip: 'Draw two rainbow arrows from the outside number: one pointing to the first term, and one pointing to the second term.',
                memoryHook: 'The rainbow MUST reach both friends inside the tent!',
              },
            },
          ],
        },
        {
          id: '2.4-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Basic Single Brackets',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Expand each bracket by multiplying the outside number through.',
            },
          ],
          questions: [
            {
              id: '2.4-ex1-q1',
              number: 1,
              question: 'Expand: $2(x + 3)$',
              hint: 'Multiply 2 by x, and 2 by 3.',
              answer: '2x + 6',
              explanation: '$2 \\times x = 2x$ and $2 \\times 3 = 6$. So $2(x + 3) = 2x + 6$.',
            },
            {
              id: '2.4-ex1-q2',
              number: 2,
              question: 'Expand: $5(y - 4)$',
              hint: 'Multiply 5 by y, and 5 by -4.',
              answer: '5y - 20',
              explanation: '$5 \\times y = 5y$ and $5 \\times (-4) = -20$. So $5(y - 4) = 5y - 20$.',
            },
            {
              id: '2.4-ex1-q3',
              number: 3,
              question: 'Expand: $3(4a + 1)$',
              hint: 'Multiply 3 by 4a, and 3 by 1.',
              answer: '12a + 3',
              explanation: '$3 \\times 4a = 12a$ and $3 \\times 1 = 3$. So $3(4a + 1) = 12a + 3$.',
            },
          ],
        },
        {
          id: '2.4-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Area Models & Double Expansions',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Expand brackets representing geometric areas and multi-pack items.',
            },
          ],
          questions: [
            {
              id: '2.4-ex2-q1',
              number: 1,
              context: 'Rectangle Area',
              question:
                'A rectangular playground has a width of $6\\text{ m}$ and a length of $(2x + 3)\\text{ m}$. Write an expanded expression for the area of the playground.',
              hint: 'Area = width * length: 6(2x + 3).',
              answer: '12x + 18\\text{ m}^2',
              explanation: '$\\text{Area} = 6(2x + 3) = 12x + 18\\text{ m}^2$.',
            },
            {
              id: '2.4-ex2-q2',
              number: 2,
              context: 'Expand and Simplify',
              question:
                'Expand and simplify: $4(x + 2) + 3(2x + 5)$',
              hint: 'Expand both brackets first: (4x + 8) + (6x + 15), then add.',
              answer: '10x + 23',
              explanation: '$4(x + 2) = 4x + 8$. $3(2x + 5) = 6x + 15$. Adding: $4x + 6x + 8 + 15 = 10x + 23$.',
            },
            {
              id: '2.4-ex2-q3',
              number: 3,
              context: 'Negative Multiplier',
              question:
                'Expand: $-3(2m - 5)$',
              hint: 'Remember: negative times negative equals positive.',
              answer: '-6m + 15',
              explanation: '$-3 \\times 2m = -6m$ and $(-3) \\times (-5) = +15$. Result: $-6m + 15$.',
            },
          ],
        },
        {
          id: '2.4-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Subtraction of Brackets & Proofs',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Carefully subtract entire brackets and discover algebraic identities.',
            },
          ],
          questions: [
            {
              id: '2.4-ex3-q1',
              number: 1,
              context: 'Subtracting a Bracket',
              question:
                'Expand and simplify: $5(2x + 3) - 2(3x - 4)$',
              hint: 'Be very careful with -2 * (-4) = +8.',
              answer: '4x + 23',
              explanation: '$5(2x + 3) = 10x + 15$. $-2(3x - 4) = -6x + 8$. Combining: $(10x - 6x) + (15 + 8) = 4x + 23$.',
            },
            {
              id: '2.4-ex3-q2',
              number: 2,
              context: 'Letter Outside the Bracket',
              question:
                'Expand: $x(3x + 7)$',
              hint: 'x * 3x = 3x^2.',
              answer: '3x^2 + 7x',
              explanation: '$x \\times 3x = 3x^2$ and $x \\times 7 = 7x$. Result: $3x^2 + 7x$.',
            },
            {
              id: '2.4-ex3-q3',
              number: 3,
              context: 'Algebraic Puzzle',
              question:
                'Find the value of $k$ such that $3(2x + k) = 6x + 21$.',
              hint: '3 * k must equal 21.',
              answer: 'k = 7',
              explanation: '$3(2x + k) = 6x + 3k$. Matching with $6x + 21$ gives $3k = 21 \\implies k = 7$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 2.5 Constructing and solving equations
    // -------------------------------------------------------------------------
    {
      id: '2.5',
      subtopicNumber: '2.5',
      title: 'Constructing and solving equations',
      type: 'lesson',
      steps: [
        {
          id: '2.5-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The Balanced Seesaw & Inverse Operations',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'The Two-Pan Balance Scale',
              scenario:
                'An equation is like a balanced seesaw: both sides have EXACTLY equal weight. If you have $2$ mystery boxes ($2x$) plus $3\\text{ kg}$ on the left, and $11\\text{ kg}$ on the right, it is perfectly balanced ($2x + 3 = 11$). To find the weight of one box, whatever you do to one side, you MUST do to the other side to keep it balanced!',
              takeaway:
                'To solve an equation, isolate the variable by performing INVERSE operations on BOTH sides (undo addition with subtraction, undo multiplication with division).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Equation',
                  definition: 'A mathematical statement that two expressions are equal, containing an equals sign ($=$).',
                  example: '$2x + 3 = 11$.',
                },
                {
                  term: 'Solution',
                  definition: 'The specific value of the variable that makes the equation true.',
                  example: 'For $2x + 3 = 11$, the solution is $x = 4$.',
                },
              ],
            },
          ],
          widget: {
            type: 'balance_scale',
            title: 'Algebra Balance Scale',
          },
        },
        {
          id: '2.5-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: 1-Step and 2-Step Equations',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem: 'Solve each equation for the unknown:\n(a) $x + 7 = 19$\n(b) $4y = 28$\n(c) $3n + 5 = 26$',
                context: 'Simplest Step-by-Step Solving',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Undo addition with subtraction',
                    content: 'Subtract 7 from both sides: $x = 19 - 7$.',
                    mathFormula: 'x + 7 - 7 = 19 - 7 \\implies x = 12',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Undo multiplication with division',
                    content: 'Divide both sides by 4: $y = 28 \\div 4$.',
                    mathFormula: '\\frac{4y}{4} = \\frac{28}{4} \\implies y = 7',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Two-step equation (undo addition first, then multiplication)',
                    content: 'Step 1: Subtract 5 from both sides: $3n = 26 - 5 = 21$.\nStep 2: Divide both sides by 3: $n = 21 \\div 3 = 7$.',
                    mathFormula: '3n = 21 \\implies n = 7',
                    note: 'Check: 3(7) + 5 = 21 + 5 = 26. Correct!',
                  },
                ],
                finalAnswer: '(a) x = 12, (b) y = 7, (c) n = 7',
              },
            },
          ],
        },
        {
          id: '2.5-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Doing an Operation to Only One Side',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Subtracting from the left side but forgetting the right side',
                wrongWay: 'In 2x + 4 = 12, writing 2x = 12',
                whyWrong: 'You removed 4 from the left but left 12 unchanged, tipping the scale!',
                correctWay: '2x + 4 - 4 = 12 - 4 \\implies 2x = 8 \\implies x = 4',
                proTip: 'Always write the operation in red or circles on BOTH sides under the equation line.',
                memoryHook: 'Treat both sides like twin siblings: what you give to one, you MUST give to the other!',
              },
            },
          ],
        },
        {
          id: '2.5-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: 1-Step Equations',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Solve each 1-step equation on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '2.5-ex1-q1',
              number: 1,
              question: 'Solve: $x + 8 = 15$',
              hint: 'Subtract 8 from both sides.',
              answer: 'x = 7',
              explanation: '$x = 15 - 8 = 7$. (Check: $7 + 8 = 15$).',
            },
            {
              id: '2.5-ex1-q2',
              number: 2,
              question: 'Solve: $y - 6 = 9$',
              hint: 'Add 6 to both sides.',
              answer: 'y = 15',
              explanation: '$y = 9 + 6 = 15$. (Check: $15 - 6 = 9$).',
            },
            {
              id: '2.5-ex1-q3',
              number: 3,
              question: 'Solve: $5m = 35$',
              hint: 'Divide both sides by 5.',
              answer: 'm = 7',
              explanation: '$m = 35 \\div 5 = 7$. (Check: $5 \\times 7 = 35$).',
            },
          ],
        },
        {
          id: '2.5-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: '2-Step Real-World Word Problems',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Write an equation first from the story, then solve for the unknown.',
            },
          ],
          questions: [
            {
              id: '2.5-ex2-q1',
              number: 1,
              context: 'School Book Fair',
              question:
                'Ethan buys $3$ identical reading books and a notebook for $\$4$. The total bill is $\$25$. Write an equation using $b$ for the cost of one book, and solve it.',
              hint: 'Equation: 3b + 4 = 25. Subtract 4, then divide by 3.',
              answer: '3b + 4 = 25 \\implies b = \\$7',
              explanation: '$3b + 4 = 25 \\implies 3b = 21 \\implies b = \\$7$ per book.',
            },
            {
              id: '2.5-ex2-q2',
              number: 2,
              context: 'Gym Membership',
              question:
                'A sports club charges a sign-up fee of $\$20$ plus $\$15$ per month ($m$). Chloe spent a total of $\$95$. How many months has she been a member?',
              hint: 'Equation: 15m + 20 = 95.',
              answer: 'm = 5\\text{ months}',
              explanation: '$15m + 20 = 95 \\implies 15m = 75 \\implies m = 75 \\div 15 = 5$ months.',
            },
            {
              id: '2.5-ex2-q3',
              number: 3,
              context: 'Perimeter of a Triangle',
              question:
                'An equilateral triangle has three sides each of length $(2x + 1)\\text{ cm}$. Its perimeter is $27\\text{ cm}$. Find the value of $x$.',
              hint: '3 times (2x + 1) = 27.',
              answer: 'x = 4',
              explanation: '$3(2x + 1) = 27 \\implies 6x + 3 = 27 \\implies 6x = 24 \\implies x = 4$.',
            },
          ],
        },
        {
          id: '2.5-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Unknowns on Both Sides & Fractions',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Solve equations with variables on both sides and brackets.',
            },
          ],
          questions: [
            {
              id: '2.5-ex3-q1',
              number: 1,
              context: 'Unknowns on Both Sides',
              question:
                'Solve: $5x + 3 = 2x + 18$',
              hint: 'Subtract 2x from both sides first: 3x + 3 = 18.',
              answer: 'x = 5',
              explanation: '$5x - 2x + 3 = 18 \\implies 3x + 3 = 18 \\implies 3x = 15 \\implies x = 5$.',
            },
            {
              id: '2.5-ex3-q2',
              number: 2,
              context: 'Equations with Brackets',
              question:
                'Solve: $4(2n - 3) = 28$',
              hint: 'Divide by 4 first or expand: 8n - 12 = 28.',
              answer: 'n = 5',
              explanation: 'Method 1: $2n - 3 = 28 \\div 4 = 7 \\implies 2n = 10 \\implies n = 5$. Method 2: $8n - 12 = 28 \\implies 8n = 40 \\implies n = 5$.',
            },
            {
              id: '2.5-ex3-q3',
              number: 3,
              context: 'Fractional Equation',
              question:
                'Solve: $\\dfrac{2y + 5}{3} = 7$',
              hint: 'Multiply both sides by 3 first to clear the fraction.',
              answer: 'y = 8',
              explanation: '$2y + 5 = 7 \\times 3 = 21 \\implies 2y = 21 - 5 = 16 \\implies y = 8$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 2.6 Inequalities
    // -------------------------------------------------------------------------
    {
      id: '2.6',
      subtopicNumber: '2.6',
      title: 'Inequalities',
      type: 'lesson',
      steps: [
        {
          id: '2.6-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Rollercoasters, Speed Limits & Inequality Signs',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'The Theme Park Ride Height Rule',
              scenario:
                'At a theme park, a sign says: "You must be taller than $120\\text{ cm}$ to ride the roller coaster". This means your height $h > 120$. If a bag can weigh at most $20\\text{ kg}$ on a flight, the weight $w \\le 20$. In real life, quantities often have limits rather than exact numbers!',
              takeaway:
                'An inequality shows that two quantities are not equal, using the symbols $<, \\le, >, \\ge$.',
            },
            {
              type: 'rule_box',
              title: 'Inequality Signs Guide',
              rule: 'The open mouth of the sign always points to the larger number:',
              tips: [
                '$x < 5$: "$x$ is strictly less than 5" (e.g. 4, 3, 2, 1...)',
                '$x > 5$: "$x$ is strictly greater than 5" (e.g. 6, 7, 8...)',
                '$x \\le 5$: "$x$ is less than or equal to 5" (5 IS included!)',
                '$x \\ge 5$: "$x$ is greater than or equal to 5" (5 IS included!)',
              ],
            },
          ],
          widget: {
            type: 'number_line',
            title: 'Number Line for Inequalities',
            initialParams: { min: -5, max: 10, initialStart: 3, initialHop: 0 },
          },
        },
        {
          id: '2.6-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Listing Integer Solutions',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem: '(a) List all integer values of $x$ such that $2 < x \\le 6$.\n(b) Write an inequality for: "A temperature $T$ is at least $-3^\\circ\\text{C}$ and less than $4^\\circ\\text{C}$".',
                context: 'Simplest Integer Range',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Check boundary conditions',
                    content: 'Notice $x > 2$, so 2 is NOT included. But $x \\le 6$, so 6 IS included.',
                  },
                  {
                    stepNumber: 2,
                    label: 'List the whole integers',
                    content: 'The integers strictly greater than 2 up to 6 are: 3, 4, 5, and 6.',
                    mathFormula: 'x \\in \\{3, 4, 5, 6\\}',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (b): Combine the two temperature limits',
                    content: '"At least $-3$" means $T \\ge -3$. "Less than 4" means $T < 4$. Join them into a double inequality.',
                    mathFormula: '-3 \\le T < 4',
                  },
                ],
                finalAnswer: '(a) 3, 4, 5, 6; (b) -3 \\le T < 4',
              },
            },
          ],
        },
        {
          id: '2.6-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Including vs Excluding the Boundary Value',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Including the number when the sign has no bar underneath',
                wrongWay: 'Listing 5 as a solution to x < 5',
                whyWrong: '5 is NOT less than 5; 5 is EQUAL to 5! The sign < has no equal line under it.',
                correctWay: 'For x < 5, solutions are 4, 3, 2, 1... but NOT 5.',
                proTip: 'Look for the little line under the sign: no line underneath = OPEN (do not include); line underneath = CLOSED (include the number).',
                memoryHook: 'The extra line gives you permission to include the number!',
              },
            },
          ],
        },
        {
          id: '2.6-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Identifying Inequality Symbols',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Write the correct inequality statement for each situation.',
            },
          ],
          questions: [
            {
              id: '2.6-ex1-q1',
              number: 1,
              question: 'Write an inequality for: "$y$ is greater than 10".',
              hint: 'Use the > symbol.',
              answer: 'y > 10',
              explanation: '"Greater than" uses $>$. Thus $y > 10$.',
            },
            {
              id: '2.6-ex1-q2',
              number: 2,
              question: 'Write an inequality for: "$m$ is at most 15".',
              hint: '"At most" means 15 or less (<=).',
              answer: 'm \\le 15',
              explanation: '"At most 15" means $m$ can be 15 or anything smaller: $m \\le 15$.',
            },
            {
              id: '2.6-ex1-q3',
              number: 3,
              question: 'Is the number $7$ a solution to the inequality $x \\ge 7$? Explain why or why not.',
              hint: 'Notice the line under the inequality sign.',
              answer: 'Yes, because the sign means "greater than or equal to".',
              explanation: 'Because the symbol is $\\ge$ (greater than OR equal to), $7 = 7$ makes it true. Yes, 7 is a solution.',
            },
          ],
        },
        {
          id: '2.6-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Everyday Speed & Age Limits',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Solve real-life constraints involving minimums and maximums.',
            },
          ],
          questions: [
            {
              id: '2.6-ex2-q1',
              number: 1,
              context: 'Highway Speed Limit',
              question:
                'On a motorway, the minimum speed is $60\\text{ km/h}$ and the maximum speed is $110\\text{ km/h}$. Write a double inequality for the legal speed $s$.',
              hint: 's is between 60 and 110, inclusive.',
              answer: '60 \\le s \\le 110',
              explanation: 'The speed can be as low as 60 and as high as 110: $60 \\le s \\le 110\\text{ km/h}$.',
            },
            {
              id: '2.6-ex2-q2',
              number: 2,
              context: 'Movie Age Restriction',
              question:
                'A film rating requires viewers to be at least $13$ years old. If Leo is $a$ years old, write an inequality for his age. Can a 12-year-old watch the movie?',
              hint: '"At least 13" means a >= 13.',
              answer: 'a \\ge 13;\\text{ No, a 12-year-old cannot watch it.}',
              explanation: '$a \\ge 13$. Since 12 is less than 13, a 12-year-old cannot enter.',
            },
            {
              id: '2.6-ex2-q3',
              number: 3,
              context: 'Elevator Weight Limit',
              question:
                'An elevator has a maximum load of $600\\text{ kg}$. If 4 people with an average weight of $w\\text{ kg}$ step inside, write an inequality for $4w$. What is the maximum average weight allowed?',
              hint: '4w <= 600.',
              answer: '4w \\le 600;\\text{ Maximum average weight is }150\\text{ kg}',
              explanation: '$4w \\le 600 \\implies w \\le 600 \\div 4 = 150\\text{ kg}$.',
            },
          ],
        },
        {
          id: '2.6-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Solving 1-Step & 2-Step Inequalities',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Solve inequalities using inverse operations, just like equations!',
            },
          ],
          questions: [
            {
              id: '2.6-ex3-q1',
              number: 1,
              context: 'Solving an Inequality',
              question:
                'Solve the inequality: $2x + 5 < 17$. Then state the largest whole integer that satisfies it.',
              hint: 'Subtract 5 first: 2x < 12, then divide by 2.',
              answer: 'x < 6;\\text{ Largest integer is }5',
              explanation: '$2x + 5 < 17 \\implies 2x < 12 \\implies x < 6$. The largest whole integer strictly less than 6 is $5$.',
            },
            {
              id: '2.6-ex3-q2',
              number: 2,
              context: 'Integer List in Range',
              question:
                'Find all integer values of $n$ that satisfy: $-2 \\le n < 3$',
              hint: 'List every whole integer from -2 up to 2 (3 is not included).',
              answer: '-2,\\ -1,\\ 0,\\ 1,\\ 2',
              explanation: '$-2$ is included (has $\\le$), but $3$ is excluded (has $<$). Integers are: $-2, -1, 0, 1, 2$.',
            },
            {
              id: '2.6-ex3-q3',
              number: 3,
              context: 'Inequality Word Problem',
              question:
                'Maya has $\$50$ to spend on gifts. She buys a book for $\$14$ and wants to buy several identical pens costing $\$4$ each. Write and solve an inequality to find the maximum number of pens $p$ she can buy.',
              hint: '14 + 4p <= 50. Subtract 14, then divide by 4.',
              answer: '14 + 4p \\le 50 \\implies p \\le 9\\text{ pens}',
              explanation: '$14 + 4p \\le 50 \\implies 4p \\le 36 \\implies p \\le 9$. The maximum number of pens is $9$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '2.test',
      subtopicNumber: 'Test',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '2.test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Test Part A: Core Recall',
          badge: 'Test Part A: Core Recall',
          blocks: [
            {
              type: 'text',
              content:
                'Part A tests core algebraic expressions, collecting like terms, expanding brackets, and solving basic equations. Solve all 3 questions on the Teacher\'s Board before checking answers.',
            },
          ],
          questions: [
            {
              id: '2.test-q1',
              number: 1,
              question: 'Simplify by collecting like terms: $7a + 4b - 3a + 2b$',
              hint: 'Combine a terms (7a - 3a) and b terms (4b + 2b).',
              answer: '4a + 6b',
              explanation: '$7a - 3a = 4a$, and $4b + 2b = 6b$. Result: $4a + 6b$.',
            },
            {
              id: '2.test-q2',
              number: 2,
              question: 'Expand: $5(3x - 4)$',
              hint: 'Multiply 5 by 3x, and 5 by -4.',
              answer: '15x - 20',
              explanation: '$5 \\times 3x = 15x$ and $5 \\times (-4) = -20$. Result: $15x - 20$.',
            },
            {
              id: '2.test-q3',
              number: 3,
              question: 'Solve for $x$: $3x + 7 = 22$',
              hint: 'Subtract 7 from both sides, then divide by 3.',
              answer: 'x = 5',
              explanation: '$3x = 22 - 7 = 15 \\implies x = 15 \\div 3 = 5$.',
            },
          ],
        },
        {
          id: '2.test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Test Part B: Real-World Problems',
          badge: 'Test Part B: Real-World Problems',
          blocks: [
            {
              type: 'text',
              content:
                'Part B tests applying formulas, constructing expressions, and writing real-world equations.',
            },
          ],
          questions: [
            {
              id: '2.test-q4',
              number: 1,
              context: 'Electrician Callout Charge',
              question:
                'An electrician charges a callout fee of $\$40$ plus $\$35$ for every hour ($h$) worked. Write a formula for the total cost $C$. Calculate the cost if the electrician works for $3$ hours.',
              hint: 'Formula: C = 40 + 35h. Substitute h = 3.',
              answer: 'C = 40 + 35h;\\ C = \\$145',
              explanation: '$C = 40 + 35(3) = 40 + 105 = \\$145$.',
            },
            {
              id: '2.test-q5',
              number: 2,
              context: 'Rectangle Perimeter Equation',
              question:
                'A rectangular garden has a length of $(x + 4)\\text{ m}$ and a width of $x\\text{ m}$. Its perimeter is $36\\text{ m}$. Write an equation and solve it to find the length and width of the garden.',
              hint: 'Perimeter: 2(x + 4) + 2x = 36.',
              answer: 'x = 7\\text{ m; Length = 11 m, Width = 7 m}',
              explanation: '$2(x + 4) + 2x = 36 \\implies 4x + 8 = 36 \\implies 4x = 28 \\implies x = 7$. Width $= 7\\text{ m}$, Length $= 7 + 4 = 11\\text{ m}$.',
            },
            {
              id: '2.test-q6',
              number: 3,
              context: 'Luggage Weight Inequality',
              question:
                'An airline luggage policy states that a suitcase must weigh no more than $23\\text{ kg}$. If an empty suitcase weighs $3\\text{ kg}$ and each clothing bundle weighs $2.5\\text{ kg}$, what is the maximum number of bundles $b$ you can pack?',
              hint: '3 + 2.5b <= 23.',
              answer: 'b \\le 8\\text{ bundles}',
              explanation: '$3 + 2.5b \\le 23 \\implies 2.5b \\le 20 \\implies b \\le 20 \\div 2.5 = 8$ bundles.',
            },
          ],
        },
        {
          id: '2.test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Test Part C: Reasoning & Challenge',
          badge: 'Test Part C: Reasoning & Challenge',
          blocks: [
            {
              type: 'text',
              content:
                'Part C presents algebraic reasoning and proof problems covering Unit 2.',
            },
          ],
          questions: [
            {
              id: '2.test-q7',
              number: 1,
              context: 'Algebraic Proof',
              question:
                'Show that $4(2x + 3) - 3(2x - 1)$ simplifies to $2x + 15$ for all values of $x$.',
              hint: 'Expand both brackets carefully, watching the double negative.',
              answer: '2x + 15',
              explanation: '$4(2x + 3) = 8x + 12$. $-3(2x - 1) = -6x + 3$. Adding together: $(8x - 6x) + (12 + 3) = 2x + 15$.',
            },
            {
              id: '2.test-q8',
              number: 2,
              context: 'Equation with Variable on Both Sides',
              question:
                'Solve for $x$: $5(x - 2) = 2x + 11$',
              hint: 'Expand the left bracket first: 5x - 10 = 2x + 11.',
              answer: 'x = 7',
              explanation: '$5x - 10 = 2x + 11 \\implies 3x - 10 = 11 \\implies 3x = 21 \\implies x = 7$.',
            },
            {
              id: '2.test-q9',
              number: 3,
              context: 'Double Inequality Integer Solutions',
              question:
                'How many integers $n$ satisfy the double inequality: $-4 < n \\le 3$?',
              hint: 'List the integers: from -3 up to 3.',
              answer: '7\\text{ integers }(-3, -2, -1, 0, 1, 2, 3)',
              explanation: '$-4$ is not included (strict inequality), while $3$ is included. The integers are $-3, -2, -1, 0, 1, 2, 3$, which is $7$ integers in total.',
            },
          ],
        },
      ],
    },
  ],
};
