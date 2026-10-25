/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit14: Unit = {
  id: 'unit-14',
  unitNumber: 14,
  title: 'Position and Transformation',
  learningObjectives: [
    'Interpret maps and plans using scale.',
    'Calculate distances between coordinates.',
    'Identify corresponding points after translations.',
    'Reflect shapes across the x-axis or y-axis.',
    'Rotate shapes by 90° and 180°.',
    'Enlarge shapes using positive integer scale factors.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 14.1 Maps and plans
    // -------------------------------------------------------------------------
    {
      id: '14.1',
      subtopicNumber: '14.1',
      title: 'Maps and plans',
      type: 'lesson',
      steps: [
        {
          id: '14.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Architect Plans & Scale Ratios',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Floor Plans & Miniature Models',
              scenario:
                'You cannot draw a real $6\\text{-metre}$ bedroom on a sheet of A4 paper! Instead, an architect uses a scale, such as $1\\text{ cm} : 1\\text{ metre}$ ($1 : 100$). Every centimetre measured on the blueprint paper represents $100\\text{ cm}$ ($1\\text{ m}$) of real room length. A bed $2\\text{ m}$ long is drawn as a $2\\text{ cm}$ rectangle.',
              takeaway:
                'A scale connects drawing size to real life:\n$\\text{Real Distance} = \\text{Map Distance} \\times \\text{Scale Factor}$.\n$\\text{Map Distance} = \\text{Real Distance} \\div \\text{Scale Factor}$.\nIn a ratio scale like $1 : 50\\,000$, both numbers share the same unit ($1\\text{ cm}$ represents $50\\,000\\text{ cm} = 500\\text{ m} = 0.5\\text{ km}$).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Map Scale',
                  definition: 'The ratio between a distance on a map or plan and the corresponding actual distance on the ground.',
                  example: '$1\\text{ cm} : 5\\text{ km}$ or $1 : 500\\,000$.',
                },
                {
                  term: 'Scale Ratio ($1 : n$)',
                  definition: 'A unitless ratio where 1 unit on the drawing represents $n$ of the exact same units in reality.',
                  example: '$1 : 200$ means $1\\text{ cm}$ drawing represents $200\\text{ cm} = 2\\text{ m}$ real life.',
                },
              ],
            },
          ],
        },
        {
          id: '14.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Map Scale Calculation First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) A house plan has a scale of $1\\text{ cm} : 2\\text{ m}$. The living room is drawn $4.5\\text{ cm}$ long. What is the actual length of the living room?\n(b) On a road map with scale $1 : 50\\,000$, two towns are $6\\text{ cm}$ apart. What is the real-world distance in kilometres?',
                context: 'Converting between map measurements and real-world distances',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Multiply by scale factor',
                    content:
                      'Each $1\\text{ cm}$ represents $2\\text{ m}$.\n$\\text{Real length} = 4.5 \\times 2\\text{ m} = 9\\text{ metres}$.',
                    mathFormula: '4.5 \\times 2 = 9\\text{ m}',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Multiply by ratio scale',
                    content:
                      'Real distance $= 6 \\times 50\\,000\\text{ cm} = 300\\,000\\text{ cm}$.\nConvert $\\text{cm}$ to metres ($\\div 100$): $300\\,000 \\div 100 = 3000\\text{ m}$.\nConvert metres to kilometres ($\\div 1000$): $3000 \\div 1000 = 3\\text{ km}$.',
                    mathFormula: '6 \\times 50\\,000 = 300\\,000\\text{ cm} = 3000\\text{ m} = 3\\text{ km}',
                  },
                ],
                finalAnswer: '(a) 9 metres; (b) 3 km',
              },
            },
          ],
        },
        {
          id: '14.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Unit Conversion Stumble in $1 : n$',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Thinking 1 : 25 000 means 1 cm is 25 000 metres',
                wrongWay: '1 cm on map = 25 000 m (25 km)',
                whyWrong:
                  'In a ratio scale $1 : n$, both sides use the SAME unit! $1\\text{ cm}$ represents $25\\,000\\text{ cm}$, not $25\\,000\\text{ metres}$.',
                correctWay:
                  '$25\\,000\\text{ cm} = 250\\text{ metres} = 0.25\\text{ km}$.',
                proTip:
                  'Quick conversion shortcut for cm to km: knock off 5 zeros! ($100\\,000\\text{ cm} = 1\\text{ km}$).',
                memoryHook: 'Two zeros for metres, three more for kilometres! (5 zeros total)',
              },
            },
          ],
        },
        {
          id: '14.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Use map scales to find actual lengths.',
            },
          ],
          questions: [
            {
              id: '14.1-ex1-q1',
              number: 1,
              question: 'A map scale is $1\\text{ cm} : 5\\text{ km}$. How many km does $3\\text{ cm}$ on the map represent?',
              hint: 'Multiply $3$ by $5$.',
              answer: '15 km',
              explanation: '$3 \\times 5 = 15\\text{ km}$.',
            },
            {
              id: '14.1-ex1-q2',
              number: 2,
              question: 'On a plan with scale $1\\text{ cm} : 3\\text{ m}$, how long is a wall that measures $4\\text{ cm}$ on paper?',
              hint: 'Multiply $4$ by $3$.',
              answer: '12 metres',
              explanation: '$4 \\times 3 = 12\\text{ metres}$.',
            },
            {
              id: '14.1-ex1-q3',
              number: 3,
              question: 'A garden is $20\\text{ m}$ long. On a plan with scale $1\\text{ cm} : 2\\text{ m}$, what is its drawing length?',
              hint: 'Divide $20$ by $2$.',
              answer: '10 cm',
              explanation: '$20 \\div 2 = 10\\text{ cm}$.',
            },
          ],
        },
        {
          id: '14.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Calculate real distances from hiking maps and building blueprints on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14.1-ex2-q1',
              number: 1,
              question:
                'A hiking map has a scale of $1 : 25\\,000$. A footpath measures $8\\text{ cm}$ on the map. What is the actual length of the path in kilometres?',
              hint: '$8 \\times 25\\,000 = 200\\,000\\text{ cm}$. Divide by 100,000 to get km.',
              answer: '2 km',
              explanation: '$8 \\times 25\\,000 = 200\\,000\\text{ cm} = 2000\\text{ m} = 2\\text{ km}$.',
            },
            {
              id: '14.1-ex2-q2',
              number: 2,
              question:
                'An architect is designing a kitchen. The scale is $1 : 50$. A kitchen island is $2.4\\text{ m}$ long in real life. How many centimetres long will it be on the drawing?',
              hint: 'Convert $2.4\\text{ m}$ to $240\\text{ cm}$, then divide by 50.',
              answer: '4.8 cm',
              explanation: '$2.4\\text{ m} = 240\\text{ cm}$. $240 \\div 50 = 4.8\\text{ cm}$.',
            },
            {
              id: '14.1-ex2-q3',
              number: 3,
              question:
                'On a flight navigation chart, two airports are $12.5\\text{ cm}$ apart. The scale is $1\\text{ cm} : 40\\text{ km}$. What is the flight distance in kilometres?',
              hint: 'Multiply $12.5$ by $40$. ($12.5 \\times 4 = 50$, so $12.5 \\times 40 = 500$).',
              answer: '500 km',
              explanation: '$12.5 \\times 40 = 500\\text{ km}$.',
            },
          ],
        },
        {
          id: '14.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 scale ratio and area conversion challenges on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14.1-ex3-q1',
              number: 1,
              question:
                'A distance of $6\\text{ km}$ is shown as $12\\text{ cm}$ on a map. Express the scale in the form $1 : n$.',
              hint: 'Convert $6\\text{ km}$ to cm: $600\\,000\\text{ cm}$. Then divide by $12$.',
              answer: '1 : 50,000',
              explanation:
                '$6\\text{ km} = 600\\,000\\text{ cm}$. Scale $= 12 : 600\\,000 = 1 : 50\\,000$.',
            },
            {
              id: '14.1-ex3-q2',
              number: 2,
              question:
                'A rectangular field measures $2\\text{ cm}$ by $3\\text{ cm}$ on a map with scale $1\\text{ cm} : 50\\text{ m}$. What is the REAL area of the field in square metres?',
              hint: 'Find real side lengths first: $2 \\times 50 = 100\\text{ m}$ and $3 \\times 50 = 150\\text{ m}$. Then multiply.',
              answer: '15,000 m²',
              explanation:
                'Real length $= 3 \\times 50 = 150\\text{ m}$. Real width $= 2 \\times 50 = 100\\text{ m}$. Area $= 150 \\times 100 = 15\\,000\\text{ m}^2$.',
            },
            {
              id: '14.1-ex3-q3',
              number: 3,
              question:
                'Map X has scale $1 : 25\\,000$ and Map Y has scale $1 : 100\\,000$. On which map will the same town appear LARGER?',
              hint: 'Which map is more "zoomed in"?',
              answer: 'Map X (larger scale / more zoomed in)',
              explanation:
                'On Map X, $1\\text{ cm}$ is $0.25\\text{ km}$, so the town takes 4 times as many centimetres as on Map Y ($1\\text{ cm} = 1\\text{ km}$).',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 14.2 The distance between two points
    // -------------------------------------------------------------------------
    {
      id: '14.2',
      subtopicNumber: '14.2',
      title: 'The distance between two points',
      type: 'lesson',
      steps: [
        {
          id: '14.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Horizontal & Vertical Distances on a Grid',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'City Street Blocks & Midpoint Meeting',
              scenario:
                'In Manhattan, streets run in a square grid. If you are at $(2, 3)$ and your friend is at $(8, 3)$, you are on the same east-west street ($y = 3$). The distance between you is simply the difference between the $x$-coordinates: $8 - 2 = 6$ blocks! The halfway meeting point is the MIDPOINT: $(5, 3)$.',
              takeaway:
                'For points on the same horizontal line: $\\text{Distance} = x_2 - x_1$.\nFor points on the same vertical line: $\\text{Distance} = y_2 - y_1$.\nMidpoint $= \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$ (average of $x$ and average of $y$).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Horizontal Distance',
                  definition: 'Distance along a line where the $y$-coordinates are identical: $|x_2 - x_1|$.',
                  example: 'Distance from $(1, 4)$ to $(7, 4)$ is $7 - 1 = 6$ units.',
                },
                {
                  term: 'Vertical Distance',
                  definition: 'Distance along a line where the $x$-coordinates are identical: $|y_2 - y_1|$.',
                  example: 'Distance from $(3, -2)$ to $(3, 5)$ is $5 - (-2) = 7$ units.',
                },
                {
                  term: 'Midpoint',
                  definition: 'The exact center point halfway between two coordinates.',
                  example: 'Midpoint of $(2, 4)$ and $(6, 10)$ is $(\\frac{2+6}{2}, \\frac{4+10}{2}) = (4, 7)$.',
                },
              ],
            },
          ],
        },
        {
          id: '14.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Distance & Midpoint First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Find the distance between $A(2, 5)$ and $B(9, 5)$.\n(b) Find the distance between $C(4, -3)$ and $D(4, 7)$.\n(c) Find the midpoint of the line segment joining $P(1, 2)$ and $Q(7, 10)$.',
                context: 'Calculating horizontal/vertical lengths and coordinate midpoints',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Horizontal distance (same y-coordinate)',
                    content:
                      'Both points have $y = 5$. Subtract the $x$-coordinates:\n$\\text{Distance} = 9 - 2 = 7$ units.',
                    mathFormula: '9 - 2 = 7',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Vertical distance across the origin',
                    content:
                      'Both points have $x = 4$. Subtract the $y$-coordinates:\n$\\text{Distance} = 7 - (-3) = 7 + 3 = 10$ units.',
                    mathFormula: '7 - (-3) = 10',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Calculate the midpoint',
                    content:
                      'Average of $x$: $\\frac{1 + 7}{2} = \\frac{8}{2} = 4$.\nAverage of $y$: $\\frac{2 + 10}{2} = \\frac{12}{2} = 6$.\nMidpoint is $(4, 6)$.',
                    mathFormula: 'M = \\left(\\frac{1+7}{2}, \\frac{2+10}{2}\\right) = (4, 6)',
                  },
                ],
                finalAnswer: '(a) 7 units; (b) 10 units; (c) Midpoint is (4, 6)',
              },
            },
          ],
        },
        {
          id: '14.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Subtracting Negative Coordinates Error',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Finding distance from -3 to 5 as 5 - 3 = 2',
                wrongWay: 'Distance = 5 - 3 = 2 units',
                whyWrong:
                  'From $-3$ to $0$ is $3$ units, and from $0$ to $5$ is $5$ units. The total distance is $3 + 5 = 8$ units, NOT $2$!',
                correctWay:
                  'Always subtract properly: $5 - (-3) = 5 + 3 = 8$ units.',
                proTip:
                  'Think of a thermometer: going from $-3^\\circ\\text{C}$ to $+5^\\circ\\text{C}$ is an $8$-degree rise.',
                memoryHook: 'Minus a negative adds distance across zero!',
              },
            },
          ],
        },
        {
          id: '14.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Find distances and midpoints.',
            },
          ],
          questions: [
            {
              id: '14.2-ex1-q1',
              number: 1,
              question: 'Find the distance between $(3, 2)$ and $(10, 2)$.',
              hint: 'Subtract $x$-coordinates: $10 - 3$.',
              answer: '7 units',
              explanation: '$10 - 3 = 7$ units.',
            },
            {
              id: '14.2-ex1-q2',
              number: 2,
              question: 'Find the vertical distance between $(5, -2)$ and $(5, 6)$.',
              hint: 'Subtract: $6 - (-2) = 6 + 2$.',
              answer: '8 units',
              explanation: '$6 - (-2) = 8$ units.',
            },
            {
              id: '14.2-ex1-q3',
              number: 3,
              question: 'Find the midpoint between $(2, 6)$ and $(8, 14)$.',
              hint: 'Average $x$: $(2+8)/2$; Average $y$: $(6+14)/2$.',
              answer: '(5, 10)',
              explanation: '$x = (2 + 8)/2 = 5$, $y = (6 + 14)/2 = 10$. Midpoint is $(5, 10)$.',
            },
          ],
        },
        {
          id: '14.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Calculate distances and center coordinates for sports pitches and town grids on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14.2-ex2-q1',
              number: 1,
              question:
                'On a warehouse grid, a charging dock is at $(12, 4)$ and a packaging station is at $(12, 19)$ (units in metres). How far apart are they along the conveyor belt line?',
              hint: 'Subtract the $y$-coordinates: $19 - 4$.',
              answer: '15 metres',
              explanation: '$19 - 4 = 15$ metres.',
            },
            {
              id: '14.2-ex2-q2',
              number: 2,
              question:
                'A football pitch penalty spot is at $(50, 20)$ and the opposite goal center is at $(50, 100)$. Where is the center circle spot of the pitch located?',
              hint: 'Find the midpoint between the two points: $x = 50$, $y = (20 + 100)/2$.',
              answer: '(50, 60)',
              explanation: '$x = 50$, $y = (20 + 100) / 2 = 60$. Center spot is at $(50, 60)$.',
            },
            {
              id: '14.2-ex2-q3',
              number: 3,
              question:
                'A rectangular park has vertices at $(2, 1)$, $(10, 1)$, $(10, 7)$, and $(2, 7)$. What is the perimeter of the park in grid units?',
              hint: 'Length $= 10 - 2 = 8$; Width $= 7 - 1 = 6$. Perimeter $= 2(l + w)$.',
              answer: '28 units',
              explanation: 'Length $= 8$, width $= 6$. Perimeter $= 2(8 + 6) = 28$ units.',
            },
          ],
        },
        {
          id: '14.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 coordinate midpoint and unknown endpoint puzzles on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14.2-ex3-q1',
              number: 1,
              question:
                'The midpoint of line segment $AB$ is $M(4, 7)$. If point $A$ is at $(1, 3)$, what are the coordinates of point $B$?',
              hint: 'From $1$ to $4$ is $+3$, so add 3 more to reach $B_x$. From $3$ to $7$ is $+4$, so add 4 more to reach $B_y$.',
              answer: '(7, 11)',
              explanation:
                '$B_x = 2(4) - 1 = 7$; $B_y = 2(7) - 3 = 11$. Point $B$ is $(7, 11)$.',
            },
            {
              id: '14.2-ex3-q2',
              number: 2,
              question:
                'A square has center at $(3, 4)$ and one vertex at $(1, 2)$. What are the coordinates of the opposite diagonal vertex?',
              hint: 'The center is the midpoint of the diagonal! Double the center coordinates and subtract the given vertex.',
              answer: '(5, 6)',
              explanation:
                'Opposite vertex $= (2 \\times 3 - 1, 2 \\times 4 - 2) = (6 - 1, 8 - 2) = (5, 6)$.',
            },
            {
              id: '14.2-ex3-q3',
              number: 3,
              question:
                'Points $P(a, 5)$ and $Q(8, b)$ have midpoint $M(5, 2)$. What are the values of $a$ and $b$?',
              hint: '$(a + 8)/2 = 5 \\implies a + 8 = 10$; $(5 + b)/2 = 2 \\implies 5 + b = 4$.',
              answer: 'a = 2, b = -1',
              explanation:
                '$a + 8 = 10 \\implies a = 2$. $5 + b = 4 \\implies b = -1$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 14.3 Translating 2D shapes
    // -------------------------------------------------------------------------
    {
      id: '14.3',
      subtopicNumber: '14.3',
      title: 'Translating 2D shapes',
      type: 'lesson',
      steps: [
        {
          id: '14.3-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Sliding Shapes: Column Vectors',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Gliding a Chess Piece on the Board',
              scenario:
                'Imagine sliding a rook across a chessboard: you slide it 4 squares RIGHT and 2 squares UP. The rook does not rotate, does not flip, and does not shrink or grow—it simply GLIDES to a new position. In mathematics, this slide is called a TRANSLATION, described by a column vector $\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$.',
              takeaway:
                'A translation slides every point of a shape by the same distance in the same direction.\nColumn vector notation: $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, where:\n- Top number $x$: Positive = RIGHT, Negative = LEFT.\n- Bottom number $y$: Positive = UP, Negative = DOWN.\nThe original shape and its image are CONGRUENT (identical size and shape).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Translation',
                  definition: 'A transformation that shifts every point of a figure by the same amount horizontally and vertically without rotating or flipping.',
                  example: 'Moving a triangle 3 units right and 4 units down.',
                },
                {
                  term: 'Column Vector $\\begin{pmatrix} a \\\\ b \\end{pmatrix}$',
                  definition: 'A vertical pair of numbers where $a$ is horizontal shift ($+$ right, $-$ left) and $b$ is vertical shift ($+$ up, $-$ down).',
                  example: '$\\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix}$ means 3 units left, 5 units up.',
                },
                {
                  term: 'Image',
                  definition: 'The new shape or point resulting from a transformation, often labelled $A\'$.',
                  example: '$A(2, 3)$ translated by $\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$ becomes $A\'(6, 4)$.',
                },
              ],
            },
          ],
        },
        {
          id: '14.3-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Translation Vector First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Point $P(3, 4)$ is translated by vector $\\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}$. Find the coordinates of image $P\'$.\n(b) Triangle $ABC$ with vertices $A(1, 1)$, $B(4, 1)$, $C(1, 5)$ is translated by $\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$. Find the coordinates of $A\', B\', C\'$.',
                context: 'Applying column vectors to individual points and polygon vertices',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Add vector components to (x, y)',
                    content:
                      '- New $x = 3 + 5 = 8$\n- New $y = 4 + (-2) = 2$\nImage $P\'$ is at $(8, 2)$.',
                    mathFormula: 'P\'(3 + 5, \\; 4 - 2) = (8, 2)',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Translate each vertex of triangle ABC',
                    content:
                      'Subtract $3$ from each $x$-coordinate, add $2$ to each $y$-coordinate:\n- $A(1, 1) \\implies A\'(1 - 3, 1 + 2) = (-2, 3)$\n- $B(4, 1) \\implies B\'(4 - 3, 1 + 2) = (1, 3)$\n- $C(1, 5) \\implies C\'(1 - 3, 5 + 2) = (-2, 7)$',
                    mathFormula: 'A\'(-2, 3), \\quad B\'(1, 3), \\quad C\'(-2, 7)',
                  },
                ],
                finalAnswer: '(a) P\'(8, 2); (b) A\'(-2, 3), B\'(1, 3), C\'(-2, 7)',
              },
            },
          ],
        },
        {
          id: '14.3-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Confusing Fractions with Column Vectors',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Putting a fraction bar inside a column vector',
                wrongWay: 'Writing vector (3 / 4) with a dividing line',
                whyWrong:
                  'A column vector is NOT a fraction! There is NO horizontal line between the two numbers.',
                correctWay:
                  'Write the numbers stacked vertically enclosed in brackets: $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.',
                proTip:
                  'Remember: Top is $x$ (left/right); Bottom is $y$ (up/down). Just like $(x, y)$, $x$ is first!',
                memoryHook: 'Top = Walk (left/right); Bottom = Climb (up/down)!',
              },
            },
          ],
        },
        {
          id: '14.3-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Translate points using column vectors.',
            },
          ],
          questions: [
            {
              id: '14.3-ex1-q1',
              number: 1,
              question: 'Point $A(2, 3)$ is translated by $\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$. What are the coordinates of the image?',
              hint: 'Add: $2 + 4$ and $3 + 1$.',
              answer: '(6, 4)',
              explanation: '$x = 2 + 4 = 6$, $y = 3 + 1 = 4$. Image is $(6, 4)$.',
            },
            {
              id: '14.3-ex1-q2',
              number: 2,
              question: 'What vector describes a translation of $5$ units LEFT and $3$ units DOWN?',
              hint: 'Left is negative $x$, down is negative $y$.',
              answer: '(-5, -3) as a column vector',
              explanation: '$\\begin{pmatrix} -5 \\\\ -3 \\end{pmatrix}$.',
            },
            {
              id: '14.3-ex1-q3',
              number: 3,
              question: 'Point $P(5, 7)$ is moved to $P\'(8, 2)$. What vector was used?',
              hint: 'Subtract start from finish: $8 - 5$ and $2 - 7$.',
              answer: '(3, -5) as a column vector',
              explanation: '$\\begin{pmatrix} 8 - 5 \\\\ 2 - 7 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix}$.',
            },
          ],
        },
        {
          id: '14.3-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Translate robotic paths and game characters across coordinate planes on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14.3-ex2-q1',
              number: 1,
              question:
                'A video game sprite at position $(14, 20)$ is moved by vector $\\begin{pmatrix} -8 \\\\ 5 \\end{pmatrix}$. What is its new on-screen coordinate?',
              hint: 'Calculate $14 - 8$ and $20 + 5$.',
              answer: '(6, 25)',
              explanation: '$x = 14 - 8 = 6$, $y = 20 + 5 = 25 \\implies (6, 25)$.',
            },
            {
              id: '14.3-ex2-q2',
              number: 2,
              question:
                'A delivery drone flies from depot $(2, 3)$ with vector $\\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix}$ to Customer 1, then flies with vector $\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}$ to Customer 2. What is Customer 2\'s final coordinate?',
              hint: 'Add all components: $x = 2 + 6 - 2$; $y = 3 + 4 + 5$.',
              answer: '(6, 12)',
              explanation: '$x = 2 + 6 - 2 = 6$; $y = 3 + 4 + 5 = 12 \\implies (6, 12)$.',
            },
            {
              id: '14.3-ex2-q3',
              number: 3,
              question:
                'A square with vertices at $(0, 0), (2, 0), (2, 2), (0, 2)$ is translated by vector $\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$. What is the area of the translated square?',
              hint: 'Does a translation change the size or area of a shape?',
              answer: '4 square units (translation preserves area)',
              explanation:
                'Translation is an isometry (rigid motion). Side length remains $2$, so area remains $2 \\times 2 = 4$ square units.',
            },
          ],
        },
        {
          id: '14.3-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 inverse vector and compound translation problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14.3-ex3-q1',
              number: 1,
              question:
                'If translation vector $T = \\begin{pmatrix} 7 \\\\ -4 \\end{pmatrix}$ moves shape $A$ to shape $B$, what vector moves shape $B$ directly BACK to shape $A$?',
              hint: 'Reverse the signs of both components.',
              answer: '(-7, 4) as a column vector',
              explanation: 'The inverse vector is $\\begin{pmatrix} -7 \\\\ 4 \\end{pmatrix}$.',
            },
            {
              id: '14.3-ex3-q2',
              number: 2,
              question:
                'A translation moves point $P(x, y)$ to $P\'(x + a, y + b)$. If $P(2, -3)$ maps to $P\'(-1, 4)$, where does the point $Q(5, 1)$ map under the EXACT same translation?',
              hint: 'Find the vector: $a = -1 - 2 = -3$, $b = 4 - (-3) = 7$. Apply $\\begin{pmatrix} -3 \\\\ 7 \\end{pmatrix}$ to $Q(5, 1)$.',
              answer: '(2, 8)',
              explanation:
                'Vector is $\\begin{pmatrix} -3 \\\\ 7 \\end{pmatrix}$. Applying to $Q$: $(5 - 3, 1 + 7) = (2, 8)$.',
            },
            {
              id: '14.3-ex3-q3',
              number: 3,
              question:
                'Shape $A$ is translated by $\\begin{pmatrix} 2 \\\\ -5 \\end{pmatrix}$ to shape $B$, and shape $B$ is translated by $\\begin{pmatrix} 3 \\\\ 8 \\end{pmatrix}$ to shape $C$. What SINGLE vector translates shape $A$ directly to shape $C$?',
              hint: 'Add the two column vectors together.',
              answer: '(5, 3) as a column vector',
              explanation:
                '$\\begin{pmatrix} 2 \\\\ -5 \\end{pmatrix} + \\begin{pmatrix} 3 \\\\ 8 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 14.4 Reflecting shapes
    // -------------------------------------------------------------------------
    {
      id: '14.4',
      subtopicNumber: '14.4',
      title: 'Reflecting shapes',
      type: 'lesson',
      steps: [
        {
          id: '14.4-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Mirror Lines: Perpendicular & Equal Distances',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Looking in a Bathroom Mirror',
              scenario:
                'When you stand $1\\text{ metre}$ in front of a mirror, your reflection appears $1\\text{ metre}$ behind the glass. If you step closer, your reflection steps closer. In a reflection on a coordinate grid, every point and its image are at the EXACT same perpendicular distance from the mirror line.',
              takeaway:
                'Key properties of reflection:\n1. The line connecting point $P$ to image $P\'$ crosses the mirror line at $90^\\circ$ (perpendicular).\n2. Distance from $P$ to mirror line = Distance from $P\'$ to mirror line.\n3. Common mirror lines: $y$-axis ($x = 0$), $x$-axis ($y = 0$), vertical lines $x = c$, horizontal lines $y = c$.\n4. Shapes are CONGRUENT, but their orientation is REVERSED (laterally inverted).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Mirror Line (Line of Reflection)',
                  definition: 'The fixed line across which a figure is flipped to create its mirror image.',
                  example: 'Reflecting across the $y$-axis ($x = 0$).',
                },
                {
                  term: 'Perpendicular Distance',
                  definition: 'The distance measured at a right angle ($90^\\circ$) from a point straight to the mirror line.',
                  example: 'If $(3, 4)$ is 3 units right of $x = 0$, its image is 3 units left at $(-3, 4)$.',
                },
                {
                  term: 'Invariant Point',
                  definition: 'A point that lies directly ON the mirror line and does not move during reflection.',
                  example: 'A point $(0, 5)$ reflected across the $y$-axis remains at $(0, 5)$.',
                },
              ],
            },
          ],
        },
        {
          id: '14.4-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Reflection First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Reflect point $A(4, 3)$ across the $y$-axis ($x = 0$).\n(b) Reflect point $B(2, 5)$ across the horizontal line $y = 1$.\n(c) What happens to a point $(x, y)$ when reflected across the $x$-axis?',
                context: 'Reflecting across axes and vertical/horizontal mirror lines',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Reflect A(4, 3) across the y-axis (x = 0)',
                    content:
                      'Point $A(4, 3)$ is $4$ units to the RIGHT of the $y$-axis. Its reflection must be $4$ units to the LEFT at the same height: $x$ becomes $-4$, $y$ stays $3$.',
                    mathFormula: 'A\'(-4, 3)',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Reflect B(2, 5) across line y = 1',
                    content:
                      'The line $y = 1$ is horizontal. The $x$-coordinate stays $2$. Point $B$ is at height $5$, which is $5 - 1 = 4$ units ABOVE the mirror line. The image must be $4$ units BELOW $y = 1$: $1 - 4 = -3$.',
                    mathFormula: 'B\'(2, -3)',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Reflection rule across x-axis (y = 0)',
                    content:
                      'Across the $x$-axis, horizontal position $x$ remains unchanged, while vertical position flips sign ($y \\to -y$): $(x, y) \\to (x, -y)$.',
                    mathFormula: '(x, y) \\to (x, -y)',
                  },
                ],
                finalAnswer: '(a) A\'(-4, 3); (b) B\'(2, -3); (c) (x, -y)',
              },
            },
          ],
        },
        {
          id: '14.4-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Counting from the Axis Instead of the Mirror Line',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Measuring distance from the y-axis when reflecting in x = 2',
                wrongWay: 'Reflecting (5, 3) in x = 2 and putting image at (-5, 3)',
                whyWrong:
                  'The mirror line is $x = 2$, NOT the $y$-axis ($x = 0$)! You must measure distance from $x = 2$.',
                correctWay:
                  '$(5, 3)$ is $5 - 2 = 3$ units to the right of $x = 2$. The image is $3$ units to the left: $2 - 3 = -1 \\implies (-1, 3)$.',
                proTip:
                  'Highlight the mirror line with a bold line on your Teacher\'s Board first, count perpendicular grid jumps to the line, and count the exact same jumps out the other side!',
                memoryHook: 'Jump to the mirror, jump out of the mirror!',
              },
            },
          ],
        },
        {
          id: '14.4-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Reflect points across axes and coordinate lines.',
            },
          ],
          questions: [
            {
              id: '14.4-ex1-q1',
              number: 1,
              question: 'Reflect the point $(3, 5)$ across the $x$-axis. What are the new coordinates?',
              hint: '$x$ stays the same, $y$ flips sign.',
              answer: '(3, -5)',
              explanation: 'Reflection across $x$-axis gives $(x, -y) = (3, -5)$.',
            },
            {
              id: '14.4-ex1-q2',
              number: 2,
              question: 'Reflect the point $(-4, 7)$ across the $y$-axis. What are the new coordinates?',
              hint: '$x$ flips sign, $y$ stays the same.',
              answer: '(4, 7)',
              explanation: 'Reflection across $y$-axis gives $(-x, y) = (4, 7)$.',
            },
            {
              id: '14.4-ex1-q3',
              number: 3,
              question: 'Which coordinate does NOT change when a shape is reflected across a horizontal mirror line $y = 3$?',
              hint: 'Points move up or down, but do they move left or right?',
              answer: 'The x-coordinate',
              explanation: 'In a vertical reflection across a horizontal line, horizontal position $x$ is unchanged.',
            },
          ],
        },
        {
          id: '14.4-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply mirror reflections to logo designs, architectural facades, and lakeside reflections on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14.4-ex2-q1',
              number: 1,
              question:
                'A graphic designer creates a symmetrical heart logo. The right half has vertex $(4, 6)$ and the line of symmetry is $x = 0$. Where is the matching vertex on the left half?',
              hint: 'Reflect $(4, 6)$ across $x = 0$.',
              answer: '(-4, 6)',
              explanation: 'Reflecting in $x = 0$ gives $(-4, 6)$.',
            },
            {
              id: '14.4-ex2-q2',
              number: 2,
              question:
                'A lake water surface lies along the line $y = 0$. A bird is flying at coordinate $(15, 8)$. What are the coordinates of the bird’s reflection seen in the water?',
              hint: 'Reflect across the $x$-axis ($y = 0$).',
              answer: '(15, -8)',
              explanation: 'The reflection across $y = 0$ is $(15, -8)$.',
            },
            {
              id: '14.4-ex2-q3',
              number: 3,
              question:
                'Point $P(6, 4)$ is reflected across the line $x = 2$. What is the coordinate of image $P\'$?',
              hint: '$6$ is $4$ units right of $2$. Go $4$ units left of $2$: $2 - 4 = -2$.',
              answer: '(-2, 4)',
              explanation: 'Distance to mirror $= 6 - 2 = 4$. Image $= 2 - 4 = -2 \\implies (-2, 4)$.',
            },
          ],
        },
        {
          id: '14.4-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 reflection deduction and line-finding puzzles on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14.4-ex3-q1',
              number: 1,
              question:
                'Point $A(1, 4)$ is reflected to $A\'(7, 4)$. What is the equation of the mirror line?',
              hint: 'Both points have $y = 4$. Find the midpoint of $1$ and $7$: $(1 + 7)/2$.',
              answer: 'x = 4',
              explanation:
                'The mirror line is vertical, halfway between $x = 1$ and $x = 7$: $x = (1 + 7) / 2 = 4$.',
            },
            {
              id: '14.4-ex3-q2',
              number: 2,
              question:
                'Point $B(3, 8)$ is reflected across line $y = 5$. What are the coordinates of image $B\'$?',
              hint: '$8$ is $3$ units above $5$. Go $3$ units below $5$: $5 - 3 = 2$.',
              answer: '(3, 2)',
              explanation:
                'Distance above line is $8 - 5 = 3$. Image is at $5 - 3 = 2 \\implies (3, 2)$.',
            },
            {
              id: '14.4-ex3-q3',
              number: 3,
              question:
                'A triangle has vertices on the line $y = 2$. How many of its vertices are invariant (do not move) when the triangle is reflected in the line $y = 2$?',
              hint: 'Any point that lies ON the mirror line does not move.',
              answer: 'All vertices that lie on y = 2 (points on the mirror line are invariant)',
              explanation:
                'Points on the mirror line have distance $0$ from the line, so their images remain in the exact same position.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 14.5 Rotating shapes
    // -------------------------------------------------------------------------
    {
      id: '14.5',
      subtopicNumber: '14.5',
      title: 'Rotating shapes',
      type: 'lesson',
      steps: [
        {
          id: '14.5-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Spinning Around a Center Point',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Hands of a Clock & Fairground Rides',
              scenario:
                'When the minute hand of a clock moves from 12 to 3, it rotates by $90^\\circ$ CLOCKWISE around the central pivot pin. To describe any rotation fully, you must give THREE details:\n1. The angle of rotation ($90^\\circ, 180^\\circ, 270^\\circ$).\n2. The direction (Clockwise or Anticlockwise).\n3. The center of rotation (the fixed pivot point, such as origin $(0, 0)$).',
              takeaway:
                'Rotation turns a shape about a fixed point. Tracing paper is the ultimate tool for rotations in math class!\nNote: A $180^\\circ$ rotation looks the same whether turned clockwise or anticlockwise.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Center of Rotation',
                  definition: 'The fixed point around which the entire shape turns.',
                  example: 'Rotated about $(0, 0)$ or about vertex $(2, 3)$.',
                },
                {
                  term: 'Clockwise vs Anticlockwise',
                  definition: 'Clockwise is in the direction clock hands turn; anticlockwise is the opposite direction.',
                  example: '$90^\\circ$ clockwise turns top towards right; $90^\\circ$ anticlockwise turns top towards left.',
                },
                {
                  term: '180° Half Turn Rule about (0, 0)',
                  definition: 'Every point $(x, y)$ flips both signs to become $(-x, -y)$.',
                  example: '$(3, 4) \\to (-3, -4)$.',
                },
              ],
            },
          ],
        },
        {
          id: '14.5-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Rotation First & 90° / 180° Turns',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Rotate point $P(3, 1)$ by $90^\\circ$ clockwise about the origin $(0, 0)$.\n(b) Rotate point $Q(4, -2)$ by $180^\\circ$ about the origin $(0, 0)$.\n(c) Rotate point $R(2, 5)$ by $90^\\circ$ anticlockwise about $(0, 0)$.',
                context: 'Applying standard coordinate rotations about the origin',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): 90° clockwise about (0, 0)',
                    content:
                      'Imagine a corner from $(0, 0)$ going $3$ across and $1$ up. When turned $90^\\circ$ clockwise, $3$ across becomes $3$ DOWN, and $1$ up becomes $1$ RIGHT. Coordinate is $(1, -3)$.\nGeneral rule: $(x, y) \\to (y, -x)$.',
                    mathFormula: 'P(3, 1) \\to P\'(1, -3)',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): 180° rotation about (0, 0)',
                    content:
                      'A half-turn flips both signs directly through the origin:\n$(x, y) \\to (-x, -y)$.\nFor $Q(4, -2)$: $x \\to -4$, $y \\to -(-2) = 2$.',
                    mathFormula: 'Q(4, -2) \\to Q\'(-4, 2)',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): 90° anticlockwise about (0, 0)',
                    content:
                      'General rule: $(x, y) \\to (-y, x)$.\nFor $R(2, 5)$: image is $(-5, 2)$.',
                    mathFormula: 'R(2, 5) \\to R\'(-5, 2)',
                  },
                ],
                finalAnswer: '(a) (1, -3); (b) (-4, 2); (c) (-5, 2)',
              },
            },
          ],
        },
        {
          id: '14.5-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Forgetting the Center of Rotation',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Rotating the shape around its own center instead of the given point',
                wrongWay: 'Spinning the triangle on the spot instead of around (0, 0)',
                whyWrong:
                  'A shape rotated about the origin orbits around $(0, 0)$ like the Earth orbits the Sun! Spinning it on the spot changes its position completely.',
                correctWay:
                  'Pin your pencil at the center of rotation on tracing paper, trace the shape, and spin the paper.',
                proTip:
                  'Draw an "L-shape arm" from the center of rotation to one vertex, and rotate that L-arm first!',
                memoryHook: 'Pin the pivot, spin the arm!',
              },
            },
          ],
        },
        {
          id: '14.5-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Apply $90^\\circ$ and $180^\\circ$ rotations about $(0, 0)$.',
            },
          ],
          questions: [
            {
              id: '14.5-ex1-q1',
              number: 1,
              question: 'Rotate $(2, 4)$ by $180^\\circ$ about the origin $(0, 0)$. What is the image?',
              hint: 'Flip both signs: $(x, y) \\to (-x, -y)$.',
              answer: '(-2, -4)',
              explanation: 'A $180^\\circ$ turn gives $(-2, -4)$.',
            },
            {
              id: '14.5-ex1-q2',
              number: 2,
              question: 'How many degrees is one quarter turn clockwise?',
              hint: 'A full circle is $360^\\circ$. What is $360 \\div 4$?',
              answer: '90° clockwise',
              explanation: '$360^\\circ \\div 4 = 90^\\circ$.',
            },
            {
              id: '14.5-ex1-q3',
              number: 3,
              question: 'Does a $180^\\circ$ rotation change the size or area of a shape?',
              hint: 'Rotations are rigid transformations.',
              answer: 'No (the shape remains congruent)',
              explanation: 'Rotation preserves lengths, angles, and area.',
            },
          ],
        },
        {
          id: '14.5-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Rotate windmill blades, propellers, and game compasses on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14.5-ex2-q1',
              number: 1,
              question:
                'A wind turbine blade points vertically UP towards $(0, 10)$. After rotating $90^\\circ$ clockwise around hub $(0, 0)$, where does the tip point?',
              hint: 'Up points to North; $90^\\circ$ clockwise turns North to East.',
              answer: '(10, 0)',
              explanation: 'Rotating $(0, 10)$ by $90^\\circ$ clockwise about origin gives $(10, 0)$.',
            },
            {
              id: '14.5-ex2-q2',
              number: 2,
              question:
                'A player facing North ($000^\\circ$) rotates through $270^\\circ$ clockwise. What compass direction are they now facing?',
              hint: '$270^\\circ$ clockwise is three quarter turns ($90^\\circ$ East, $180^\\circ$ South, $270^\\circ$ West).',
              answer: 'West (270°)',
              explanation: '$270^\\circ$ clockwise from North is West.',
            },
            {
              id: '14.5-ex2-q3',
              number: 3,
              question:
                'A square has vertices at $(1, 1), (3, 1), (3, 3), (1, 3)$. It is rotated $180^\\circ$ about the origin. What are the coordinates of the vertex that was originally at $(1, 1)$?',
              hint: 'Flip signs: $(-1, -1)$.',
              answer: '(-1, -1)',
              explanation: 'The image of $(1, 1)$ after $180^\\circ$ rotation about $(0,0)$ is $(-1, -1)$.',
            },
          ],
        },
        {
          id: '14.5-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 non-origin center of rotation and equivalence problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14.5-ex3-q1',
              number: 1,
              question:
                'Rotate point $P(5, 3)$ by $180^\\circ$ about the center point $C(2, 3)$. What are the coordinates of the image?',
              hint: '$P$ is $3$ units to the right of $C$. A $180^\\circ$ turn sends it $3$ units to the left of $C$: $2 - 3 = -1$. Height stays $3$.',
              answer: '(-1, 3)',
              explanation:
                'Vector from $C$ to $P$ is $\\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix}$. Flipped vector is $\\begin{pmatrix} -3 \\\\ 0 \\end{pmatrix}$. Image $= (2 - 3, 3) = (-1, 3)$.',
            },
            {
              id: '14.5-ex3-q2',
              number: 2,
              question:
                'Explain why a rotation of $90^\\circ$ clockwise produces the EXACT same image as a rotation of $270^\\circ$ anticlockwise about the same center.',
              hint: 'What is $90^\\circ + 270^\\circ$?',
              answer: 'They are equivalent because 90° + 270° = 360° (a full complete turn)',
              explanation:
                'Since a full revolution is $360^\\circ$, moving $90^\\circ$ in one direction lands on the exact same ray as moving $360^\\circ - 90^\\circ = 270^\\circ$ in the opposite direction.',
            },
            {
              id: '14.5-ex3-q3',
              number: 3,
              question:
                'Point $A(2, 1)$ maps to $A\'(-1, 2)$ under a rotation about $(0, 0)$. What is the angle and direction of the rotation?',
              hint: '$(2, 1)$ is in quadrant 1; $(-1, 2)$ is in quadrant 2.',
              answer: '90° anticlockwise (or 270° clockwise)',
              explanation:
                'Rule $(x, y) \\to (-y, x)$ corresponds to $90^\\circ$ anticlockwise rotation about origin.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 14.6 Enlarging shapes
    // -------------------------------------------------------------------------
    {
      id: '14.6',
      subtopicNumber: '14.6',
      title: 'Enlarging shapes',
      type: 'lesson',
      steps: [
        {
          id: '14.6-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Scaling Up: Center & Scale Factor',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Projector Beams on a Screen',
              scenario:
                'Think of a movie projector: light beams shoot out from the projector bulb (the CENTER OF ENLARGEMENT) and project a puppet image onto a wall twice as far away. Every side length is multiplied by $2$ (the SCALE FACTOR $k = 2$). The image is SIMILAR: its angles are identical, but its size is enlarged.',
              takeaway:
                'To enlarge a shape, you need:\n1. A Center of Enlargement (the reference point rays radiate from).\n2. A Scale Factor $k$ (e.g. $k = 2, 3$).\nKey mathematical rules:\n- New side length $= \\text{Original side length} \\times k$.\n- New distance from center $= \\text{Original distance from center} \\times k$.\n- ANGLES DO NOT CHANGE! The shape does not stretch out of proportion.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Scale Factor ($k$)',
                  definition: 'The multiplier used to increase all side lengths and distances from the center of enlargement.',
                  example: 'With scale factor 3, a $4\\text{ cm}$ side becomes $4 \\times 3 = 12\\text{ cm}$.',
                },
                {
                  term: 'Center of Enlargement',
                  definition: 'The fixed point from which ray lines are drawn through every vertex of the shape.',
                  example: 'Enlarging about origin $(0, 0)$: every coordinate $(x, y) \\to (kx, ky)$.',
                },
                {
                  term: 'Similar Shapes',
                  definition: 'Shapes that have equal corresponding angles and proportional corresponding side lengths.',
                  example: 'An enlarged triangle is similar to the original triangle.',
                },
              ],
            },
          ],
        },
        {
          id: '14.6-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Enlargement First & Ray Method',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Enlarge triangle $ABC$ with vertices $A(1, 1)$, $B(3, 1)$, $C(1, 4)$ by scale factor $2$ using the origin $(0, 0)$ as center of enlargement.\n(b) If a rectangle of sides $3\\text{ cm}$ by $5\\text{ cm}$ is enlarged by scale factor $4$, find its new side lengths and compare their perimeters.',
                context: 'Multiplying coordinate distances and calculating enlarged dimensions',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Multiply each coordinate by scale factor 2',
                    content:
                      'When center is $(0, 0)$, simply multiply every $x$ and $y$ coordinate by $k = 2$:\n- $A(1, 1) \\implies A\'(2 \\times 1, 2 \\times 1) = (2, 2)$\n- $B(3, 1) \\implies B\'(2 \\times 3, 2 \\times 1) = (6, 2)$\n- $C(1, 4) \\implies C\'(2 \\times 1, 2 \\times 4) = (2, 8)$',
                    mathFormula: 'A\'(2, 2), \\quad B\'(6, 2), \\quad C\'(2, 8)',
                  },
                  {
                    stepNumber: 2,
                    label: 'Check side lengths of triangle',
                    content:
                      'Original base $= 3 - 1 = 2$. New base $= 6 - 2 = 4$ ($2 \\times 2$).\nOriginal height $= 4 - 1 = 3$. New height $= 8 - 2 = 6$ ($3 \\times 2$). Side lengths doubled exactly!',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (b): Rectangle enlargement by k = 4',
                    content:
                      'New side lengths: $3 \\times 4 = 12\\text{ cm}$ and $5 \\times 4 = 20\\text{ cm}$.\nOriginal perimeter $= 2(3 + 5) = 16\\text{ cm}$.\nNew perimeter $= 2(12 + 20) = 64\\text{ cm}$ ($16 \\times 4$). Perimeter scales by $k = 4$!',
                    mathFormula: '12\\text{ cm} \\times 20\\text{ cm}, \\quad \\text{Perimeter} = 64\\text{ cm}',
                  },
                ],
                finalAnswer: '(a) A\'(2, 2), B\'(6, 2), C\'(2, 8); (b) 12 cm by 20 cm (Perimeter = 64 cm)',
              },
            },
          ],
        },
        {
          id: '14.6-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Multiplying Angles by the Scale Factor',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Doubling the angles when enlarging by scale factor 2',
                wrongWay: 'Saying an equilateral triangle (60°, 60°, 60°) has angles (120°, 120°, 120°)',
                whyWrong:
                  'Angles in any triangle MUST sum to $180^\\circ$! $120 + 120 + 120 = 360^\\circ$, which is impossible. Enlarging changes SIZES of sides, but ANGLES REMAIN EXACTLY THE SAME!',
                correctWay:
                  'Keep all angles identical. Only SIDE LENGTHS and distances from the center multiply by the scale factor.',
                proTip:
                  'If you enlarge a photo on your phone, your face gets bigger, but your smile doesn\'t warp—angles never change!',
                memoryHook: 'Sides stretch, angles stay!',
              },
            },
          ],
        },
        {
          id: '14.6-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Apply scale factor multipliers.',
            },
          ],
          questions: [
            {
              id: '14.6-ex1-q1',
              number: 1,
              question: 'A line segment of length $5\\text{ cm}$ is enlarged by scale factor $3$. What is its new length?',
              hint: 'Multiply $5$ by $3$.',
              answer: '15 cm',
              explanation: '$5 \\times 3 = 15\\text{ cm}$.',
            },
            {
              id: '14.6-ex1-q2',
              number: 2,
              question: 'Point $P(2, 3)$ is enlarged by scale factor $4$ with center $(0, 0)$. What is the image?',
              hint: 'Multiply both coordinates by 4: $(2 \\times 4, 3 \\times 4)$.',
              answer: '(8, 12)',
              explanation: '$x = 2 \\times 4 = 8$, $y = 3 \\times 4 = 12 \\implies (8, 12)$.',
            },
            {
              id: '14.6-ex1-q3',
              number: 3,
              question: 'In a triangle with angles $40^\\circ, 60^\\circ, 80^\\circ$, what will the angles be after enlargement by scale factor $2$?',
              hint: 'Do angles change during enlargement?',
              answer: '40°, 60°, 80° (angles remain unchanged)',
              explanation: 'Enlargement preserves all angles; shapes remain similar.',
            },
          ],
        },
        {
          id: '14.6-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Calculate photocopier enlargements and model scale factors on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14.6-ex2-q1',
              number: 1,
              question:
                'A photo measuring $10\\text{ cm}$ by $15\\text{ cm}$ is enlarged on a poster printer by scale factor $5$. What are the dimensions of the poster in centimetres?',
              hint: 'Multiply both $10$ and $15$ by $5$.',
              answer: '50 cm by 75 cm',
              explanation: '$10 \\times 5 = 50\\text{ cm}$ and $15 \\times 5 = 75\\text{ cm}$.',
            },
            {
              id: '14.6-ex2-q2',
              number: 2,
              question:
                'An equilateral triangle has perimeter $18\\text{ cm}$. After an enlargement, its perimeter is $54\\text{ cm}$. What was the scale factor of enlargement?',
              hint: 'Divide the new perimeter by the original perimeter: $54 \\div 18$.',
              answer: 'Scale factor 3',
              explanation: '$54 \\div 18 = 3$. The scale factor is $3$.',
            },
            {
              id: '14.6-ex2-q3',
              number: 3,
              question:
                'A toy car is $8\\text{ cm}$ long. The real car is $400\\text{ cm}$ long. What scale factor enlarges the toy car into the real car?',
              hint: 'Divide real length by toy length: $400 \\div 8$.',
              answer: 'Scale factor 50',
              explanation: '$400 \\div 8 = 50$. Scale factor is $50$.',
            },
          ],
        },
        {
          id: '14.6-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 area scaling and non-origin center enlargement problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14.6-ex3-q1',
              number: 1,
              question:
                'A square of side $3\\text{ cm}$ has area $9\\text{ cm}^2$. It is enlarged by scale factor $2$. What is the area of the enlarged square? By what factor has the AREA increased?',
              hint: 'New side $= 6\\text{ cm}$. Area $= 6 \\times 6 = 36\\text{ cm}^2$. Area factor $= 36 \\div 9 = 4 = 2^2$.',
              answer: 'Area is 36 cm² (area increases by factor 4, or k²)',
              explanation:
                'When side lengths double ($k = 2$), the area increases by $k^2 = 2^2 = 4$ times: $9 \\times 4 = 36\\text{ cm}^2$.',
            },
            {
              id: '14.6-ex3-q2',
              number: 2,
              question:
                'Point $P(3, 4)$ is enlarged with center of enlargement $C(1, 2)$ by scale factor $3$. What are the coordinates of image $P\'$?',
              hint: 'Vector from $C$ to $P$ is $(3 - 1, 4 - 2) = (2, 2)$. Multiply by $3$: $(6, 6)$. Add to $C$: $(1 + 6, 2 + 6)$.',
              answer: '(7, 8)',
              explanation:
                'Vector from center $= (2, 2)$. Multiplied by 3 $= (6, 6)$. Image $= (1 + 6, 2 + 6) = (7, 8)$.',
            },
            {
              id: '14.6-ex3-q3',
              number: 3,
              question:
                'Ray lines drawn through corresponding vertices of shape $A$ and shape $B$ meet at point $(2, 3)$. What does point $(2, 3)$ represent?',
              hint: 'Where do all projection lines originate?',
              answer: 'The center of enlargement',
              explanation:
                'The intersection point of ray lines connecting corresponding vertices is by definition the center of enlargement.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Unit 14 End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '14-test',
      subtopicNumber: '14',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '14-test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Part A: Basic Recall & Calculation',
          badge: 'Test: Part A (Basic Recall)',
          blocks: [
            {
              type: 'text',
              content:
                'Answer all 3 recall and transformation questions covering Unit 14 on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14-test-q1',
              number: 1,
              question: 'Point $(4, 1)$ is translated by $\\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix}$. What is the new coordinate?',
              hint: 'Calculate $4 - 3$ and $1 + 5$.',
              answer: '(1, 6)',
              explanation: '$x = 4 - 3 = 1$, $y = 1 + 5 = 6 \\implies (1, 6)$.',
            },
            {
              id: '14-test-q2',
              number: 2,
              question: 'What are the coordinates of $(3, -4)$ when reflected across the $x$-axis?',
              hint: '$y$ flips sign, $x$ stays the same.',
              answer: '(3, 4)',
              explanation: 'Reflection across $x$-axis gives $(3, -(-4)) = (3, 4)$.',
            },
            {
              id: '14-test-q3',
              number: 3,
              question: 'A $6\\text{ cm}$ stick is enlarged by scale factor $4$. What is the new length?',
              hint: 'Multiply $6$ by $4$.',
              answer: '24 cm',
              explanation: '$6 \\times 4 = 24\\text{ cm}$.',
            },
          ],
        },
        {
          id: '14-test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Part B: Real-World Applications',
          badge: 'Test: Part B (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply transformation concepts to maps, architectural scale models, and distance calculations on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14-test-q4',
              number: 1,
              question:
                'On a map with scale $1 : 20\\,000$, a lake boundary measures $15\\text{ cm}$. What is the actual length of the lake in kilometres?',
              hint: '$15 \\times 20\\,000 = 300\\,000\\text{ cm}$. Divide by 100,000 to get km.',
              answer: '3 km',
              explanation: '$15 \\times 20\\,000 = 300\\,000\\text{ cm} = 3000\\text{ m} = 3\\text{ km}$.',
            },
            {
              id: '14.4-test-q5',
              number: 2,
              question:
                'A robot starts at $(2, 5)$ and moves with vector $\\begin{pmatrix} 4 \\\\ -3 \\end{pmatrix}$. How far is the robot now horizontally from the $y$-axis?',
              hint: 'Find the new $x$-coordinate: $2 + 4$.',
              answer: '6 units',
              explanation: '$x = 2 + 4 = 6$, so it is $6$ units from the $y$-axis.',
            },
            {
              id: '14-test-q6',
              number: 3,
              question:
                'Find the midpoint between two radar towers located at $(3, 8)$ and $(9, 2)$.',
              hint: 'Average $x$: $(3+9)/2$; Average $y$: $(8+2)/2$.',
              answer: '(6, 5)',
              explanation: '$x = (3 + 9)/2 = 6$, $y = (8 + 2)/2 = 5 \\implies (6, 5)$.',
            },
          ],
        },
        {
          id: '14-test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Part C: Reasoning & Challenge',
          badge: 'Test: Part C (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 transformation combination and invariant coordinate puzzles on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '14-test-q7',
              number: 1,
              question:
                'Point $A(2, 3)$ is reflected across the $y$-axis to point $B$, and then point $B$ is translated by vector $\\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix}$ to point $C$. What are the coordinates of point $C$?',
              hint: 'Step 1: Reflect in $y$-axis $\\implies (-2, 3)$. Step 2: Translate by $\\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix} \\implies (-2+5, 3-1)$.',
              answer: '(3, 2)',
              explanation:
                'Reflection in $y$-axis gives $B(-2, 3)$. Translation gives $C(-2 + 5, 3 - 1) = (3, 2)$.',
            },
            {
              id: '14-test-q8',
              number: 2,
              question:
                'A triangle with area $12\\text{ cm}^2$ is enlarged by scale factor $3$. What is the area of the enlarged triangle?',
              hint: 'Area scales by $k^2 = 3^2 = 9$. Multiply $12$ by $9$.',
              answer: '108 cm²',
              explanation:
                'Area multiplier $= k^2 = 3^2 = 9$. Enlarged area $= 12 \\times 9 = 108\\text{ cm}^2$.',
            },
            {
              id: '14-test-q9',
              number: 3,
              question:
                'Under which transformation(s) does a shape change in SIZE: Translation, Reflection, Rotation, or Enlargement?',
              hint: 'Three of these are isometries (rigid motions) where shapes remain congruent.',
              answer: 'Enlargement only (scale factor ≠ 1)',
              explanation:
                'Translation, reflection, and rotation are rigid motions where shapes remain congruent. Only enlargement alters length and area.',
            },
          ],
        },
      ],
    },
  ],
};
