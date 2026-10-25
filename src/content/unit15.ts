/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit15: Unit = {
  id: 'unit-15',
  unitNumber: 15,
  title: 'Shapes, Area and Volume',
  learningObjectives: [
    'Convert between metric units of area.',
    'Calculate the area of triangles and compound shapes.',
    'Calculate the volume of cubes, cuboids, and compound shapes.',
    'Calculate the surface area of cubes and cuboids.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 15.1 Converting between units for area
    // -------------------------------------------------------------------------
    {
      id: '15.1',
      subtopicNumber: '15.1',
      title: 'Converting between units for area',
      type: 'lesson',
      steps: [
        {
          id: '15.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The Square Unit Trap: Why $1\\text{ m}^2 \\neq 100\\text{ cm}^2$',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Tiling a Square Metre Floor',
              scenario:
                'Imagine a square tile that is $1\\text{ metre}$ long and $1\\text{ metre}$ wide ($1\\text{ m}^2$). Now imagine tiling it with $1\\text{ cm}$ stamps. Along the bottom edge, you need $100$ stamps. Up the side edge, you need $100$ rows! The total number of $1\\text{ cm}^2$ stamps covering the tile is $100 \\times 100 = 10\\,000\\text{ cm}^2$!',
              takeaway:
                'Because area has TWO dimensions (length $\\times$ width), you must square the linear conversion factor:\n- $1\\text{ cm} = 10\\text{ mm} \\implies 1\\text{ cm}^2 = 10 \\times 10 = 100\\text{ mm}^2$.\n- $1\\text{ m} = 100\\text{ cm} \\implies 1\\text{ m}^2 = 100 \\times 100 = 10\\,000\\text{ cm}^2$.\n- $1\\text{ km} = 1000\\text{ m} \\implies 1\\text{ km}^2 = 1000 \\times 1000 = 1\\,000\\,000\\text{ m}^2$.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Square Centimetre ($\\text{cm}^2$)',
                  definition: 'The area of a square with sides of length 1 cm. Equal to $100\\text{ mm}^2$.',
                  example: '$4\\text{ cm}^2 = 4 \\times 100 = 400\\text{ mm}^2$.',
                },
                {
                  term: 'Square Metre ($\\text{m}^2$)',
                  definition: 'The area of a square with sides of length 1 m. Equal to $10\\,000\\text{ cm}^2$.',
                  example: '$3\\text{ m}^2 = 3 \\times 10\\,000 = 30\\,000\\text{ cm}^2$.',
                },
                {
                  term: 'Two-Dimensional Conversion Rule',
                  definition: 'Multiply or divide by the conversion factor SQUARED ($10^2, 100^2, 1000^2$).',
                  example: 'To convert $\\text{cm}^2$ to $\\text{m}^2$, divide by $10\\,000$.',
                },
              ],
            },
          ],
        },
        {
          id: '15.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Area Unit Conversion First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Convert $5\\text{ cm}^2$ into $\\text{mm}^2$.\n(b) Convert $3.5\\text{ m}^2$ into $\\text{cm}^2$.\n(c) Convert $45\\,000\\text{ cm}^2$ into $\\text{m}^2$.',
                context: 'Converting between metric units of area',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): cm² to mm²',
                    content:
                      'Since $1\\text{ cm} = 10\\text{ mm}$, $1\\text{ cm}^2 = 10 \\times 10 = 100\\text{ mm}^2$.\nMultiply by $100$:\n$5 \\times 100 = 500\\text{ mm}^2$.',
                    mathFormula: '5 \\times 100 = 500\\text{ mm}^2',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): m² to cm²',
                    content:
                      'Since $1\\text{ m} = 100\\text{ cm}$, $1\\text{ m}^2 = 100 \\times 100 = 10\\,000\\text{ cm}^2$.\nMultiply by $10\\,000$:\n$3.5 \\times 10\\,000 = 35\\,000\\text{ cm}^2$.',
                    mathFormula: '3.5 \\times 10\\,000 = 35\\,000\\text{ cm}^2',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): cm² to m²',
                    content:
                      'To convert smaller units to larger units, divide by $10\\,000$:\n$45\\,000 \\div 10\\,000 = 4.5\\text{ m}^2$.',
                    mathFormula: '45\\,000 \\div 10\\,000 = 4.5\\text{ m}^2',
                  },
                ],
                finalAnswer: '(a) 500 mm²; (b) 35,000 cm²; (c) 4.5 m²',
              },
            },
          ],
        },
        {
          id: '15.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Multiplying by 100 Instead of 10 000 for $\\text{m}^2$',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Converting 2 m² to 200 cm²',
                wrongWay: '2 m² = 200 cm²',
                whyWrong:
                  '$100$ is the length conversion ($1\\text{ m} = 100\\text{ cm}$). For AREA, you multiply by $100 \\times 100 = 10\\,000$!',
                correctWay:
                  '$2\\text{ m}^2 = 2 \\times 10\\,000 = 20\\,000\\text{ cm}^2$.',
                proTip:
                  'Always draw a quick $1\\text{ m} \\times 1\\text{ m}$ square and write $100\\text{ cm} \\times 100\\text{ cm} = 10\\,000\\text{ cm}^2$ inside it!',
                memoryHook: 'Length has 1 dimension (x100), Area has 2 dimensions (x100² = x10,000)!',
              },
            },
          ],
        },
        {
          id: '15.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Convert between metric area units.',
            },
          ],
          questions: [
            {
              id: '15.1-ex1-q1',
              number: 1,
              question: 'Convert $8\\text{ cm}^2$ into $\\text{mm}^2$.',
              hint: 'Multiply by 100.',
              answer: '800 mm²',
              explanation: '$8 \\times 100 = 800\\text{ mm}^2$.',
            },
            {
              id: '15.1-ex1-q2',
              number: 2,
              question: 'Convert $2\\text{ m}^2$ into $\\text{cm}^2$.',
              hint: 'Multiply by 10,000.',
              answer: '20,000 cm²',
              explanation: '$2 \\times 10\\,000 = 20\\,000\\text{ cm}^2$.',
            },
            {
              id: '15.1-ex1-q3',
              number: 3,
              question: 'Convert $600\\text{ mm}^2$ into $\\text{cm}^2$.',
              hint: 'Divide by 100.',
              answer: '6 cm²',
              explanation: '$600 \\div 100 = 6\\text{ cm}^2$.',
            },
          ],
        },
        {
          id: '15.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Convert room flooring, solar panels, and wallpaper measurements on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15.1-ex2-q1',
              number: 1,
              question:
                'A floor tile measures $40\\text{ cm}$ by $50\\text{ cm}$. What is its area in: (a) $\\text{cm}^2$, and (b) $\\text{m}^2$?',
              hint: 'Area $= 40 \\times 50 = 2000\\text{ cm}^2$. Divide by $10\\,000$ to get $\\text{m}^2$.',
              answer: '2000 cm² (or 0.2 m²)',
              explanation: '$40 \\times 50 = 2000\\text{ cm}^2$. $2000 \\div 10\\,000 = 0.2\\text{ m}^2$.',
            },
            {
              id: '15.1-ex2-q2',
              number: 2,
              question:
                'A kitchen floor has an area of $12\\text{ m}^2$. Square tiles of area $400\\text{ cm}^2$ each are used to cover the floor. How many tiles are needed?',
              hint: 'Convert $12\\text{ m}^2$ to $\\text{cm}^2$: $120\\,000\\text{ cm}^2$. Divide by 400.',
              answer: '300 tiles',
              explanation: '$12\\text{ m}^2 = 120\\,000\\text{ cm}^2$. $120\\,000 \\div 400 = 300$ tiles.',
            },
            {
              id: '15.1-ex2-q3',
              number: 3,
              question:
                'A postage stamp has area $600\\text{ mm}^2$. A desktop surface has area $0.54\\text{ m}^2$. What is the area of the desktop in $\\text{mm}^2$?',
              hint: '$1\\text{ m}^2 = 1\\,000\\,000\\text{ mm}^2$. Multiply $0.54$ by $1\\,000\\,000$.',
              answer: '540,000 mm²',
              explanation: '$0.54 \\times 1\\,000\\,000 = 540\\,000\\text{ mm}^2$.',
            },
          ],
        },
        {
          id: '15.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 multi-step square conversion problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15.1-ex3-q1',
              number: 1,
              question:
                'How many square millimetres ($\\text{mm}^2$) are in ONE square metre ($1\\text{ m}^2$)?',
              hint: '$1\\text{ m} = 1000\\text{ mm}$. Calculate $1000 \\times 1000$.',
              answer: '1,000,000 mm² (1 million mm²)',
              explanation: '$1000\\text{ mm} \\times 1000\\text{ mm} = 1\\,000\\,000\\text{ mm}^2$.',
            },
            {
              id: '15.1-ex3-q2',
              number: 2,
              question:
                'A square has an area of $0.09\\text{ m}^2$. What is the length of one side of the square in CENTIMETRES?',
              hint: 'Convert area to $\\text{cm}^2$: $0.09 \\times 10\\,000 = 900\\text{ cm}^2$. What is $\\sqrt{900}$?',
              answer: '30 cm',
              explanation:
                'Area $= 0.09 \\times 10\\,000 = 900\\text{ cm}^2$. Side length $= \\sqrt{900} = 30\\text{ cm}$.',
            },
            {
              id: '15.1-ex3-q3',
              number: 3,
              question:
                'A rectangular painting measures $80\\text{ cm}$ by $1.2\\text{ m}$. Calculate its area in: (a) $\\text{m}^2$, and (b) $\\text{cm}^2$.',
              hint: 'Convert $80\\text{ cm} = 0.8\\text{ m}$. Area $= 0.8 \\times 1.2 = 0.96\\text{ m}^2$.',
              answer: '0.96 m² and 9,600 cm²',
              explanation:
                'In metres: $0.8 \\times 1.2 = 0.96\\text{ m}^2$. In cm: $80 \\times 120 = 9600\\text{ cm}^2$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 15.2 Using hectares
    // -------------------------------------------------------------------------
    {
      id: '15.2',
      subtopicNumber: '15.2',
      title: 'Using hectares',
      type: 'lesson',
      steps: [
        {
          id: '15.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The Farmland & Forest Measure: The Hectare',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Football Pitches & Farmland',
              scenario:
                'When farmers talk about the size of their crops or when news reports describe forest fires, measuring in square metres produces numbers that are way too big (millions of $\\text{m}^2$). Instead, they use HECTARES (symbol: $\\text{ha}$). One hectare is the area of a square measuring $100\\text{ m}$ by $100\\text{ m}$—roughly the size of two football pitches side by side!',
              takeaway:
                'Key metric conversions for land area:\n- $1\\text{ hectare (ha)} = 10\\,000\\text{ m}^2$.\n- $1\\text{ km}^2 = 100\\text{ hectares} = 1\\,000\\,000\\text{ m}^2$.\n- To convert $\\text{m}^2 \\to \\text{ha}$: DIVIDE by $10\\,000$.\n- To convert $\\text{ha} \\to \\text{m}^2$: MULTIPLY by $10\\,000$.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Hectare (ha)',
                  definition: 'A metric unit of land area equal to $10\\,000\\text{ square metres}$ ($100\\text{ m} \\times 100\\text{ m}$).',
                  example: 'A farm of $5\\text{ ha} = 5 \\times 10\\,000 = 50\\,000\\text{ m}^2$.',
                },
                {
                  term: 'Square Kilometre ($\\text{km}^2$)',
                  definition: 'Equal to $100\\text{ hectares}$ or $1\\,000\\,000\\text{ m}^2$.',
                  example: 'A national park of $3.5\\text{ km}^2 = 350\\text{ hectares}$.',
                },
              ],
            },
          ],
        },
        {
          id: '15.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Hectare Conversion First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Convert $4\\text{ hectares}$ into $\\text{m}^2$.\n(b) A rectangular farm field measures $300\\text{ m}$ by $200\\text{ m}$. Find its area in hectares.\n(c) Convert $85\\,000\\text{ m}^2$ into hectares.',
                context: 'Converting between hectares, square metres, and land dimensions',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Convert ha to m²',
                    content:
                      'Multiply by $10\\,000$:\n$4 \\times 10\\,000 = 40\\,000\\text{ m}^2$.',
                    mathFormula: '4 \\times 10\\,000 = 40\\,000\\text{ m}^2',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Find field area in ha',
                    content:
                      'Area $= 300 \\times 200 = 60\\,000\\text{ m}^2$.\nConvert to hectares by dividing by $10\\,000$:\n$60\\,000 \\div 10\\,000 = 6\\text{ hectares}$.',
                    mathFormula: '60\\,000 \\div 10\\,000 = 6\\text{ ha}',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Divide by 10,000',
                    content:
                      '$85\\,000 \\div 10\\,000 = 8.5\\text{ hectares}$.',
                    mathFormula: '85\\,000 \\div 10\\,000 = 8.5\\text{ ha}',
                  },
                ],
                finalAnswer: '(a) 40,000 m²; (b) 6 hectares; (c) 8.5 hectares',
              },
            },
          ],
        },
        {
          id: '15.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Confusing 1 ha with $1000\\text{ m}^2$',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Thinking a hectare is 1000 m²',
                wrongWay: '1 hectare = 1000 m²',
                whyWrong:
                  'A hectare comes from "hecto" ($100$). A square of side $100\\text{ m}$ has area $100 \\times 100 = 10\\,000\\text{ m}^2$, NOT $1000$!',
                correctWay:
                  'Always remember $1\\text{ ha} = 10\\,000\\text{ m}^2$ (four zeros).',
                proTip:
                  'Check: $1000\\text{ m}^2$ would only be $10\\text{ m} \\times 100\\text{ m}$, which is just a narrow driveway, not a whole farm!',
                memoryHook: 'Hectare has 100 m on each side: 100 x 100 = 10,000 m²!',
              },
            },
          ],
        },
        {
          id: '15.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Convert between hectares and square metres.',
            },
          ],
          questions: [
            {
              id: '15.2-ex1-q1',
              number: 1,
              question: 'How many square metres are in $3\\text{ hectares}$?',
              hint: 'Multiply 3 by 10,000.',
              answer: '30,000 m²',
              explanation: '$3 \\times 10\\,000 = 30\\,000\\text{ m}^2$.',
            },
            {
              id: '15.2-ex1-q2',
              number: 2,
              question: 'Convert $50\\,000\\text{ m}^2$ into hectares.',
              hint: 'Divide 50,000 by 10,000.',
              answer: '5 hectares',
              explanation: '$50\\,000 \\div 10\\,000 = 5\\text{ ha}$.',
            },
            {
              id: '15.2-ex1-q3',
              number: 3,
              question: 'How many hectares are in $1\\text{ square kilometre}$ ($1\\text{ km}^2$)?',
              hint: '$1\\,000\\,000\\text{ m}^2 \\div 10\\,000\\text{ m}^2$.',
              answer: '100 hectares',
              explanation: '$1\\text{ km}^2 = 1\\,000\\,000\\text{ m}^2 = 100\\text{ ha}$.',
            },
          ],
        },
        {
          id: '15.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Calculate land areas for solar farms, nature reserves, and agriculture on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15.2-ex2-q1',
              number: 1,
              question:
                'A farmer has a rectangular barley field measuring $500\\text{ m}$ by $400\\text{ m}$. How many hectares of barley is this?',
              hint: 'Area in $\\text{m}^2 = 500 \\times 400 = 200\\,000\\text{ m}^2$. Divide by 10,000.',
              answer: '20 hectares',
              explanation: 'Area $= 200\\,000\\text{ m}^2$. $200\\,000 \\div 10\\,000 = 20\\text{ ha}$.',
            },
            {
              id: '15.2-ex2-q2',
              number: 2,
              question:
                'A solar farm requires $1.5\\text{ hectares}$ of land. If the land is a square, what is the length of each side in metres (to the nearest whole metre)?',
              hint: '$1.5\\text{ ha} = 15\\,000\\text{ m}^2$. Find $\\sqrt{15\\,000}$.',
              answer: '122 metres (approx)',
              explanation: '$1.5\\text{ ha} = 15\\,000\\text{ m}^2$. Side length $= \\sqrt{15\\,000} \\approx 122.47\\text{ m} \\approx 122\\text{ m}$.',
            },
            {
              id: '15.2-ex2-q3',
              number: 3,
              question:
                'A nature reserve covers $2.8\\text{ km}^2$. How many hectares does it cover?',
              hint: 'Multiply $2.8$ by $100$.',
              answer: '280 hectares',
              explanation: '$2.8 \\times 100 = 280\\text{ hectares}$.',
            },
          ],
        },
        {
          id: '15.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 land valuation and crop yield problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15.2-ex3-q1',
              number: 1,
              question:
                'Farmland sells for $£12,000$ per hectare. A developer buys a rectangular plot of land measuring $250\\text{ m}$ by $800\\text{ m}$. What is the total cost of the land?',
              hint: 'Area $= 250 \\times 800 = 200\\,000\\text{ m}^2 = 20\\text{ ha}$. Multiply $20$ by $£12,000$.',
              answer: '£240,000',
              explanation:
                'Area $= 200\\,000\\text{ m}^2 = 20\\text{ ha}$. Cost $= 20 \\times £12\\,000 = £240\\,000$.',
            },
            {
              id: '15.2-ex3-q2',
              number: 2,
              question:
                'A square forest has an area of $64\\text{ hectares}$. What is the PERIMETER of this forest in metres?',
              hint: '$64\\text{ ha} = 640\\,000\\text{ m}^2$. One side $= \\sqrt{640\\,000} = 800\\text{ m}$. Perimeter $= 4 \\times 800$.',
              answer: '3200 metres (3.2 km)',
              explanation:
                'Area $= 640\\,000\\text{ m}^2$. Side $= 800\\text{ m}$. Perimeter $= 4 \\times 800 = 3200\\text{ m}$.',
            },
            {
              id: '15.2-ex3-q3',
              number: 3,
              question:
                'A farmer harvests $8\\text{ tonnes}$ of wheat per hectare. How many tonnes are harvested from a field measuring $600\\text{ m}$ by $500\\text{ m}$?',
              hint: 'Area $= 300\\,000\\text{ m}^2 = 30\\text{ ha}$. Multiply $30$ by $8\\text{ tonnes}$.',
              answer: '240 tonnes',
              explanation:
                'Area $= 300\\,000\\text{ m}^2 = 30\\text{ ha}$. Total harvest $= 30 \\times 8 = 240$ tonnes.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 15.3 The area of a triangle
    // -------------------------------------------------------------------------
    {
      id: '15.3',
      subtopicNumber: '15.3',
      title: 'The area of a triangle',
      type: 'lesson',
      steps: [
        {
          id: '15.3-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Half a Rectangle: $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Cutting a Sandwich from Corner to Corner',
              scenario:
                'Cut a rectangular slice of bread diagonally across the middle: you get TWO identical right-angled triangles! Each triangle has exactly HALF the area of the rectangle. The same rule works for ANY triangle: enclose it in a bounding rectangle, and the triangle covers exactly half the area.',
              takeaway:
                '$$\\text{Area of a triangle} = \\frac{1}{2} \\times \\text{base} \\times \\text{perpendicular height}$$\nCRITICAL RULE: The height MUST be perpendicular ($90^\\circ$) to the base! Never use the slanted diagonal side length for the height.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Base ($b$)',
                  definition: 'Any chosen side of the triangle upon which the perpendicular height stands.',
                  example: 'If the bottom horizontal side is 8 cm, $b = 8\\text{ cm}$.',
                },
                {
                  term: 'Perpendicular Height ($h$)',
                  definition: 'The straight vertical distance measured at $90^\\circ$ from the base to the opposite vertex.',
                  example: 'Marked with a small right-angle square symbol inside the triangle.',
                },
                {
                  term: 'Slant Height (Distractor)',
                  definition: 'The length of a diagonal sloping side; never use this in the triangle area formula!',
                  example: 'In a triangle with base 6, height 4, and slant side 5, the area is $\\frac{1}{2} \\times 6 \\times 4 = 12$, NOT $\\frac{1}{2} \\times 6 \\times 5$.',
                },
              ],
            },
          ],
        },
        {
          id: '15.3-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Triangle Area First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Find the area of a right-angled triangle with base $6\\text{ cm}$ and height $4\\text{ cm}$.\n(b) Find the area of an isosceles triangle with base $10\\text{ cm}$, perpendicular height $7\\text{ cm}$, and sloping sides of $8.6\\text{ cm}$.\n(c) A triangle has area $24\\text{ cm}^2$ and base $8\\text{ cm}$. Find its perpendicular height.',
                context: 'Applying the triangle area formula and solving for missing dimensions',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Right-angled triangle',
                    content:
                      'Formula: $\\text{Area} = \\frac{1}{2} \\times b \\times h$:\n$\\text{Area} = \\frac{1}{2} \\times 6 \\times 4 = 3 \\times 4 = 12\\text{ cm}^2$.',
                    mathFormula: '\\text{Area} = \\frac{1}{2} \\times 6 \\times 4 = 12\\text{ cm}^2',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Ignore the sloping side distractor!',
                    content:
                      'Use base $b = 10\\text{ cm}$ and perpendicular height $h = 7\\text{ cm}$ (ignore the slant $8.6\\text{ cm}$):\n$\\text{Area} = \\frac{1}{2} \\times 10 \\times 7 = 5 \\times 7 = 35\\text{ cm}^2$.',
                    mathFormula: '\\text{Area} = \\frac{1}{2} \\times 10 \\times 7 = 35\\text{ cm}^2',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Working backwards to find height',
                    content:
                      '$\\text{Area} = \\frac{1}{2} \\times b \\times h \\implies 24 = \\frac{1}{2} \\times 8 \\times h = 4h$.\nDivide by $4$:\n$h = 24 \\div 4 = 6\\text{ cm}$.',
                    mathFormula: '4h = 24 \\implies h = 6\\text{ cm}',
                  },
                ],
                finalAnswer: '(a) 12 cm²; (b) 35 cm²; (c) Height = 6 cm',
              },
            },
          ],
        },
        {
          id: '15.3-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Using the Slanted Side Length as the Height',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Multiplying base by the slanted side length',
                wrongWay: 'Area = 1/2 * 10 * 8.6 = 43 cm²',
                whyWrong:
                  'Slanted sides are tilted and longer than the true perpendicular height. Height must ALWAYS meet the base at an exact $90^\\circ$ angle!',
                correctWay:
                  'Look for the right-angle box ($90^\\circ$) that marks the true vertical height: $\\frac{1}{2} \\times 10 \\times 7 = 35\\text{ cm}^2$.',
                proTip:
                  'Turn your page if necessary so the base is horizontal at the bottom, then look straight up to the top peak for $h$.',
                memoryHook: 'No right angle, no height!',
              },
            },
          ],
        },
        {
          id: '15.3-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Calculate triangle areas using $\\frac{1}{2}bh$.',
            },
          ],
          questions: [
            {
              id: '15.3-ex1-q1',
              number: 1,
              question: 'Find the area of a triangle with base $8\\text{ cm}$ and perpendicular height $5\\text{ cm}$.',
              hint: 'Calculate $\\frac{1}{2} \\times 8 \\times 5$.',
              answer: '20 cm²',
              explanation: '$\\text{Area} = \\frac{1}{2} \\times 8 \\times 5 = 4 \\times 5 = 20\\text{ cm}^2$.',
            },
            {
              id: '15.3-ex1-q2',
              number: 2,
              question: 'A right-angled triangle has sides of $3\\text{ cm}, 4\\text{ cm}, 5\\text{ cm}$. What is its area?',
              hint: 'The two shorter sides ($3$ and $4$) are perpendicular to each other.',
              answer: '6 cm²',
              explanation: '$\\text{Area} = \\frac{1}{2} \\times 3 \\times 4 = 6\\text{ cm}^2$.',
            },
            {
              id: '15.3-ex1-q3',
              number: 3,
              question: 'Find the area of a triangle with base $12\\text{ m}$ and height $3.5\\text{ m}$.',
              hint: '$\\frac{1}{2} \\times 12 = 6$. Multiply $6$ by $3.5$.',
              answer: '21 m²',
              explanation: '$6 \\times 3.5 = 21\\text{ m}^2$.',
            },
          ],
        },
        {
          id: '15.3-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Calculate triangular sail areas, roof gables, and road signs on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15.3-ex2-q1',
              number: 1,
              question:
                'A sailing boat has a triangular mainsail with a base of $4\\text{ m}$ and height of $9\\text{ m}$. What is the area of the canvas sail?',
              hint: 'Calculate $\\frac{1}{2} \\times 4 \\times 9$.',
              answer: '18 m²',
              explanation: '$\\text{Area} = \\frac{1}{2} \\times 4 \\times 9 = 18\\text{ m}^2$.',
            },
            {
              id: '15.3-ex2-q2',
              number: 2,
              question:
                'A triangular roof gable has a base of $8\\text{ m}$ and vertical height of $3\\text{ m}$. It is painted with weather-shield paint that costs $£4$ per square metre. What is the painting cost?',
              hint: 'Area $= \\frac{1}{2} \\times 8 \\times 3 = 12\\text{ m}^2$. Multiply by $£4$.',
              answer: '£48',
              explanation: 'Area $= 12\\text{ m}^2$. Cost $= 12 \\times £4 = £48$.',
            },
            {
              id: '15.3-ex2-q3',
              number: 3,
              question:
                'A triangular warning road sign has base $60\\text{ cm}$ and perpendicular height $50\\text{ cm}$. Find its area in: (a) $\\text{cm}^2$, and (b) $\\text{m}^2$.',
              hint: 'Area $= \\frac{1}{2} \\times 60 \\times 50 = 1500\\text{ cm}^2$. Divide by $10\\,000$ to get $\\text{m}^2$.',
              answer: '1500 cm² (or 0.15 m²)',
              explanation: '$\\text{Area} = 1500\\text{ cm}^2 = 0.15\\text{ m}^2$.',
            },
          ],
        },
        {
          id: '15.3-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 compound shape and obtuse triangle challenges on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15.3-ex3-q1',
              number: 1,
              question:
                'An obtuse-angled triangle has base $6\\text{ cm}$. Its perpendicular height falls OUTSIDE the triangle onto the extended base line and measures $5\\text{ cm}$. What is its area?',
              hint: 'The formula $\\frac{1}{2}bh$ still applies! Use base $6$ and height $5$.',
              answer: '15 cm²',
              explanation:
                'Even when the height is outside the triangle, $\\text{Area} = \\frac{1}{2} \\times 6 \\times 5 = 15\\text{ cm}^2$.',
            },
            {
              id: '15.3-ex3-q2',
              number: 2,
              question:
                'A compound shape is formed by attaching a triangle of height $4\\text{ cm}$ on top of a rectangle of $8\\text{ cm}$ by $5\\text{ cm}$ (sharing the $8\\text{ cm}$ side). What is the total area?',
              hint: 'Rectangle area $= 8 \\times 5 = 40\\text{ cm}^2$. Triangle area $= \\frac{1}{2} \\times 8 \\times 4 = 16\\text{ cm}^2$. Add them.',
              answer: '56 cm²',
              explanation:
                'Rectangle $= 40\\text{ cm}^2$. Triangle $= 16\\text{ cm}^2$. Total $= 40 + 16 = 56\\text{ cm}^2$.',
            },
            {
              id: '15.3-ex3-q3',
              number: 3,
              question:
                'A triangle has area $45\\text{ cm}^2$. If its base is $15\\text{ cm}$, what is its perpendicular height?',
              hint: '$\\frac{1}{2} \\times 15 \\times h = 45 \\implies 7.5h = 45$.',
              answer: '6 cm',
              explanation:
                '$7.5h = 45 \\implies h = 45 \\div 7.5 = 6\\text{ cm}$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 15.4 Calculating the volume of cubes and cuboids
    // -------------------------------------------------------------------------
    {
      id: '15.4',
      subtopicNumber: '15.4',
      title: 'Calculating the volume of cubes and cuboids',
      type: 'lesson',
      steps: [
        {
          id: '15.4-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Counting 3D Sugar Cubes: $l \\times w \\times h$',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Packing a Shoebox with Toy Blocks',
              scenario:
                'Imagine packing a rectangular toy box with $1\\text{ cm}$ building blocks. The bottom layer fits $5$ blocks along the length and $3$ blocks along the width ($5 \\times 3 = 15$ blocks per layer). If the box is $4$ layers high, the total number of blocks packed inside is $15 \\times 4 = 60\\text{ cm}^3$!',
              takeaway:
                'Volume measures the 3D space inside a solid object:\n$$\\text{Volume of a cuboid} = \\text{length} \\times \\text{width} \\times \\text{height} = lwh$$\n$$\\text{Volume of a cube} = s^3 = s \\times s \\times s$$\nKey capacity bridge: $1\\text{ cm}^3 = 1\\text{ mL}$, and $1000\\text{ cm}^3 = 1\\text{ litre}$.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Volume',
                  definition: 'The amount of 3-dimensional space occupied by a solid object, measured in cubic units ($\\text{cm}^3, \\text{m}^3, \\text{mm}^3$).',
                  example: 'A cuboid of $2 \\times 3 \\times 4 = 24\\text{ cm}^3$.',
                },
                {
                  term: 'Cubic Centimetre ($\\text{cm}^3$)',
                  definition: 'The volume of a cube with $1\\text{ cm}$ sides. Exactly equals $1\\text{ millilitre (mL)}$.',
                  example: 'A carton holding $500\\text{ mL}$ has volume $500\\text{ cm}^3$.',
                },
                {
                  term: 'Litre Connection',
                  definition: '$1\\text{ litre} = 1000\\text{ mL} = 1000\\text{ cm}^3$.',
                  example: 'A $2\\text{-litre}$ bottle of water occupies $2000\\text{ cm}^3$.',
                },
              ],
            },
          ],
        },
        {
          id: '15.4-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Volume First & Capacity Connection',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Find the volume of a cuboid measuring $6\\text{ cm}$ long, $4\\text{ cm}$ wide, and $5\\text{ cm}$ high.\n(b) Find the volume of a cube with side length $3\\text{ cm}$.\n(c) An aquarium measures $50\\text{ cm}$ by $30\\text{ cm}$ by $40\\text{ cm}$. How many LITRES of water can it hold when completely full?',
                context: 'Calculating volumes of 3D prisms and converting to litres',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Cuboid volume',
                    content:
                      'Multiply length, width, and height:\n$\\text{Volume} = 6 \\times 4 \\times 5 = 24 \\times 5 = 120\\text{ cm}^3$.',
                    mathFormula: 'V = 6 \\times 4 \\times 5 = 120\\text{ cm}^3',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Cube volume',
                    content:
                      'All edges of a cube are equal ($s = 3$):\n$\\text{Volume} = 3^3 = 3 \\times 3 \\times 3 = 27\\text{ cm}^3$.',
                    mathFormula: 'V = 3^3 = 27\\text{ cm}^3',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Aquarium capacity in litres',
                    content:
                      'Volume in $\\text{cm}^3 = 50 \\times 30 \\times 40 = 60\\,000\\text{ cm}^3$.\nSince $1000\\text{ cm}^3 = 1\\text{ litre}$, divide by $1000$:\n$60\\,000 \\div 1000 = 60\\text{ litres}$.',
                    mathFormula: '60\\,000\\text{ cm}^3 = 60\\text{ litres}',
                  },
                ],
                finalAnswer: '(a) 120 cm³; (b) 27 cm³; (c) 60 litres',
              },
            },
          ],
        },
        {
          id: '15.4-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Mixing Up Area ($\\,^2$) and Volume ($\\,^3$)',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Writing volume as cm² or adding dimensions instead of multiplying',
                wrongWay: 'Volume = 6 + 4 + 5 = 15 cm³',
                whyWrong:
                  'Volume is THREE-DIMENSIONAL ($l \\times w \\times h$), so units must be CUBIC ($\\text{cm}^3$). You must multiply, not add!',
                correctWay:
                  'Always multiply the three measurements: $6 \\times 4 \\times 5 = 120\\text{ cm}^3$.',
                proTip:
                  'Unit guide: Length is $\\text{cm}^1$, Flat surface is $\\text{cm}^2$, 3D Space is $\\text{cm}^3$!',
                memoryHook: '3 dimensions $\\implies$ little number 3 (cubic)!',
              },
            },
          ],
        },
        {
          id: '15.4-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Calculate volumes using $l \\times w \\times h$.',
            },
          ],
          questions: [
            {
              id: '15.4-ex1-q1',
              number: 1,
              question: 'Calculate the volume of a cuboid measuring $4\\text{ cm}$ by $3\\text{ cm}$ by $2\\text{ cm}$.',
              hint: 'Multiply $4 \\times 3 \\times 2$.',
              answer: '24 cm³',
              explanation: '$4 \\times 3 \\times 2 = 24\\text{ cm}^3$.',
            },
            {
              id: '15.4-ex1-q2',
              number: 2,
              question: 'What is the volume of a cube with edge length $5\\text{ cm}$?',
              hint: 'Calculate $5 \\times 5 \\times 5$.',
              answer: '125 cm³',
              explanation: '$5^3 = 5 \\times 5 \\times 5 = 125\\text{ cm}^3$.',
            },
            {
              id: '15.4-ex1-q3',
              number: 3,
              question: 'How many millilitres (mL) of juice will fill a carton with volume $250\\text{ cm}^3$?',
              hint: '$1\\text{ cm}^3 = 1\\text{ mL}$.',
              answer: '250 mL',
              explanation: 'Since $1\\text{ cm}^3 = 1\\text{ mL}$, the carton holds $250\\text{ mL}$.',
            },
          ],
        },
        {
          id: '15.4-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Calculate swimming pool capacities, cargo volumes, and planter soil on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15.4-ex2-q1',
              number: 1,
              question:
                'A garden paddling pool is $3\\text{ m}$ long, $2\\text{ m}$ wide, and $0.5\\text{ m}$ deep. What is the volume of water in cubic metres ($\\text{m}^3$)?',
              hint: 'Multiply $3 \\times 2 \\times 0.5$.',
              answer: '3 m³',
              explanation: '$3 \\times 2 \\times 0.5 = 3\\text{ m}^3$.',
            },
            {
              id: '15.4-ex2-q2',
              number: 2,
              question:
                'A rectangular storage box has a base area of $400\\text{ cm}^2$ and a height of $15\\text{ cm}$. What is its volume?',
              hint: 'Volume $= \\text{base area} \\times \\text{height} = 400 \\times 15$.',
              answer: '6000 cm³ (or 6 litres)',
              explanation: '$400 \\times 15 = 6000\\text{ cm}^3$.',
            },
            {
              id: '15.4-ex2-q3',
              number: 3,
              question:
                'A gold bullion bar measures $10\\text{ cm} \\times 5\\text{ cm} \\times 2\\text{ cm}$. If $1\\text{ cm}^3$ of gold has a mass of $19.3\\text{ grams}$, what is the total mass of the bar?',
              hint: 'Find volume first: $10 \\times 5 \\times 2 = 100\\text{ cm}^3$. Multiply by $19.3\\text{ g}$.',
              answer: '1930 grams (1.93 kg)',
              explanation: 'Volume $= 100\\text{ cm}^3$. Mass $= 100 \\times 19.3 = 1930\\text{ grams}$.',
            },
          ],
        },
        {
          id: '15.4-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 missing dimension and compound cuboid problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15.4-ex3-q1',
              number: 1,
              question:
                'A cuboid has volume $180\\text{ cm}^3$. Its length is $6\\text{ cm}$ and width is $5\\text{ cm}$. What is its height?',
              hint: '$6 \\times 5 = 30$. Divide $180$ by $30$.',
              answer: '6 cm',
              explanation: '$l \\times w = 30$. Height $= 180 \\div 30 = 6\\text{ cm}$.',
            },
            {
              id: '15.4-ex3-q2',
              number: 2,
              question:
                'A large cube has edge length $6\\text{ cm}$. How many smaller cubes of edge length $2\\text{ cm}$ can fit inside it?',
              hint: 'Along each edge, $6 \\div 2 = 3$ cubes fit. Total small cubes $= 3 \\times 3 \\times 3 = 27$ (or $216 \\div 8$).',
              answer: '27 smaller cubes',
              explanation:
                'Volume of large cube $= 6^3 = 216\\text{ cm}^3$. Volume of small cube $= 2^3 = 8\\text{ cm}^3$. Count $= 216 \\div 8 = 27$.',
            },
            {
              id: '15.4-ex3-q3',
              number: 3,
              question:
                'An L-shaped 3D solid is made of two cuboids glued together: Cuboid A ($4 \\times 3 \\times 2\\text{ cm}$) and Cuboid B ($3 \\times 3 \\times 5\\text{ cm}$). What is the total volume of the solid?',
              hint: 'Find volume of A ($24$) and B ($45$) and add them.',
              answer: '69 cm³',
              explanation:
                'Volume A $= 4 \\times 3 \\times 2 = 24\\text{ cm}^3$. Volume B $= 3 \\times 3 \\times 5 = 45\\text{ cm}^3$. Total $= 24 + 45 = 69\\text{ cm}^3$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 15.5 Calculating the surface area of cubes and cuboids
    // -------------------------------------------------------------------------
    {
      id: '15.5',
      subtopicNumber: '15.5',
      title: 'Calculating the surface area of cubes and cuboids',
      type: 'lesson',
      steps: [
        {
          id: '15.5-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Unfolding the 3D Net: Wrapping Paper Area',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Wrapping a Birthday Present',
              scenario:
                'If volume is what fits INSIDE a cereal box, SURFACE AREA is the amount of cardboard used to make the outside skin of the box! If you slice along the edges and unfold the box flat, you get its NET: six rectangular faces arranged in 3 identical matching pairs (Front/Back, Top/Bottom, Left/Right).',
              takeaway:
                'Surface Area is the total area of all outer faces added together:\n- For a cuboid: $\\text{Surface Area} = 2(lw + lh + wh)$.\n- For a cube with edge $s$: all 6 faces are identical squares, so $\\text{Surface Area} = 6s^2$.\nNotice: Surface Area is an AREA, so its units are always squared ($\\text{cm}^2, \\text{m}^2$).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Surface Area',
                  definition: 'The total area of all the exterior 2D faces of a 3-dimensional solid.',
                  example: 'Units are always squared: $\\text{cm}^2, \\text{m}^2$.',
                },
                {
                  term: 'Net of a 3D Solid',
                  definition: 'A 2-dimensional flat pattern that can be folded to form a 3D solid.',
                  example: 'A cuboid net has 6 rectangular faces.',
                },
                {
                  term: '3 Matching Pairs',
                  definition: 'In a cuboid, opposite faces are congruent: Top = Bottom ($lw$), Front = Back ($lh$), Left = Right ($wh$).',
                  example: '$2(12 + 15 + 20) = 2(47) = 94\\text{ cm}^2$.',
                },
              ],
            },
          ],
        },
        {
          id: '15.5-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Surface Area First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Find the total surface area of a cube with edge length $4\\text{ cm}$.\n(b) Find the surface area of a cuboid measuring $5\\text{ cm}$ long, $3\\text{ cm}$ wide, and $2\\text{ cm}$ high.\n(c) An open-topped rectangular storage box (no lid) has length $6\\text{ cm}$, width $4\\text{ cm}$, and height $3\\text{ cm}$. What is its surface area?',
                context: 'Calculating surface area using matching pairs and open nets',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Surface area of a cube',
                    content:
                      'A cube has $6$ identical square faces. Area of 1 face $= 4 \\times 4 = 16\\text{ cm}^2$.\nTotal surface area $= 6 \\times 16 = 96\\text{ cm}^2$.',
                    mathFormula: '6s^2 = 6(4^2) = 6 \\times 16 = 96\\text{ cm}^2',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Surface area of cuboid (3 pairs of faces)',
                    content:
                      '- Top and Bottom: $2 \\times (5 \\times 3) = 2 \\times 15 = 30\\text{ cm}^2$\n- Front and Back: $2 \\times (5 \\times 2) = 2 \\times 10 = 20\\text{ cm}^2$\n- Left and Right: $2 \\times (3 \\times 2) = 2 \\times 6 = 12\\text{ cm}^2$\nTotal Surface Area $= 30 + 20 + 12 = 62\\text{ cm}^2$.',
                    mathFormula: '2(15 + 10 + 6) = 2(31) = 62\\text{ cm}^2',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Open-topped box (only 5 faces)',
                    content:
                      'Because there is no top lid, count the bottom face ONCE:\n- Bottom: $1 \\times (6 \\times 4) = 24\\text{ cm}^2$\n- Front and Back: $2 \\times (6 \\times 3) = 36\\text{ cm}^2$\n- Two Ends: $2 \\times (4 \\times 3) = 24\\text{ cm}^2$\nTotal $= 24 + 36 + 24 = 84\\text{ cm}^2$.',
                    mathFormula: '24 + 36 + 24 = 84\\text{ cm}^2',
                  },
                ],
                finalAnswer: '(a) 96 cm²; (b) 62 cm²; (c) 84 cm²',
              },
            },
          ],
        },
        {
          id: '15.5-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Calculating Volume Instead of Surface Area',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Multiplying l * w * h when asked for surface area',
                wrongWay: 'Surface Area = 5 * 3 * 2 = 30 cm²',
                whyWrong:
                  '$5 \\times 3 \\times 2 = 30\\text{ cm}^3$ is the VOLUME (inside capacity), NOT the surface area! Surface area requires finding the areas of all 6 outer rectangular faces and adding them up.',
                correctWay:
                  'Calculate the three face areas ($15, 10, 6$), add them to get $31$, and double: $2 \\times 31 = 62\\text{ cm}^2$.',
                proTip:
                  'Check the question wording carefully: "Volume" = space inside; "Surface Area" = cardboard or paint outside.',
                memoryHook: 'Surface area is the wrapping paper; volume is what is inside the box!',
              },
            },
          ],
        },
        {
          id: '15.5-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Find the total surface area of cubes and cuboids.',
            },
          ],
          questions: [
            {
              id: '15.5-ex1-q1',
              number: 1,
              question: 'Find the total surface area of a cube with edge length $2\\text{ cm}$.',
              hint: 'One face is $2 \\times 2 = 4$. Multiply by 6 faces.',
              answer: '24 cm²',
              explanation: '$6 \\times (2^2) = 6 \\times 4 = 24\\text{ cm}^2$.',
            },
            {
              id: '15.5-ex1-q2',
              number: 2,
              question: 'A cuboid has faces of area $12\\text{ cm}^2, 15\\text{ cm}^2, 20\\text{ cm}^2$. What is its total surface area?',
              hint: 'Add the three areas and multiply by 2.',
              answer: '94 cm²',
              explanation: '$2(12 + 15 + 20) = 2(47) = 94\\text{ cm}^2$.',
            },
            {
              id: '15.5-ex1-q3',
              number: 3,
              question: 'How many faces does a standard closed cuboid have?',
              hint: 'Think of a dice or a cereal box.',
              answer: '6 faces',
              explanation: 'A cuboid has 6 rectangular faces (3 opposite pairs).',
            },
          ],
        },
        {
          id: '15.5-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Calculate cardboard packaging, paint requirements, and tin plating on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15.5-ex2-q1',
              number: 1,
              question:
                'A cereal box is $20\\text{ cm}$ long, $8\\text{ cm}$ wide, and $30\\text{ cm}$ tall. What is the minimum area of cardboard required to manufacture this box?',
              hint: 'Calculate $2(lw + lh + wh)$ with $l=20, w=8, h=30$.',
              answer: '2000 cm²',
              explanation:
                'Pairs: $20 \\times 8 = 160$; $20 \\times 30 = 600$; $8 \\times 30 = 240$. Sum $= 1000$. Double $= 2000\\text{ cm}^2$.',
            },
            {
              id: '15.5-ex2-q2',
              number: 2,
              question:
                'A wooden block is a cube of side $10\\text{ cm}$. A carpenter paints all $6$ outer faces with varnish. What total area in $\\text{cm}^2$ is varnished?',
              hint: '$6 \\times 10^2$.',
              answer: '600 cm²',
              explanation: '$6 \\times 100 = 600\\text{ cm}^2$.',
            },
            {
              id: '15.5-ex2-q3',
              number: 3,
              question:
                'A wooden planter box with NO top lid has length $1\\text{ m}$, width $0.5\\text{ m}$, and height $0.4\\text{ m}$. What is the surface area of the 5 exterior sides in $\\text{m}^2$?',
              hint: 'Base $= 1 \\times 0.5 = 0.5$. Front/Back $= 2(1 \\times 0.4) = 0.8$. Ends $= 2(0.5 \\times 0.4) = 0.4$.',
              answer: '1.7 m²',
              explanation:
                'Base $= 0.5\\text{ m}^2$. Sides $= 0.8\\text{ m}^2$. Ends $= 0.4\\text{ m}^2$. Total $= 0.5 + 0.8 + 0.4 = 1.7\\text{ m}^2$.',
            },
          ],
        },
        {
          id: '15.5-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 surface area ratio and reverse deduction puzzles on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15.5-ex3-q1',
              number: 1,
              question:
                'The total surface area of a cube is $150\\text{ cm}^2$. What is the edge length of the cube, and what is its volume?',
              hint: 'Area of 1 face $= 150 \\div 6 = 25\\text{ cm}^2$. Edge $= \\sqrt{25} = 5\\text{ cm}$. Volume $= 5^3$.',
              answer: 'Edge = 5 cm, Volume = 125 cm³',
              explanation:
                'One face $= 150 \\div 6 = 25\\text{ cm}^2$. Edge $= 5\\text{ cm}$. Volume $= 5^3 = 125\\text{ cm}^3$.',
            },
            {
              id: '15.5-ex3-q2',
              number: 2,
              question:
                'Two cubes, each with side length $3\\text{ cm}$, are glued together face-to-face to form a single cuboid. What is the surface area of the new combined cuboid?',
              hint: 'Each cube had $6$ faces, but $2$ faces are now glued together on the inside ($12 - 2 = 10$ exposed faces).',
              answer: '90 cm²',
              explanation:
                'Each square face is $3 \\times 3 = 9\\text{ cm}^2$. There are $10$ exposed outer faces: $10 \\times 9 = 90\\text{ cm}^2$ (or cuboid $6 \\times 3 \\times 3$: $2(18 + 18 + 9) = 90\\text{ cm}^2$).',
            },
            {
              id: '15.5-ex3-q3',
              number: 3,
              question:
                'Cube A has edge $2\\text{ cm}$. Cube B has edge $4\\text{ cm}$. Compare their surface areas: by what factor is the surface area of Cube B larger than Cube A?',
              hint: 'Cube A surface area $= 6(4) = 24$. Cube B surface area $= 6(16) = 96$. $96 \\div 24 = ?$',
              answer: '4 times larger (scale factor squared: 2² = 4)',
              explanation:
                'When edge lengths double ($k = 2$), surface area increases by $k^2 = 2^2 = 4$ times: $24 \\times 4 = 96\\text{ cm}^2$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Unit 15 End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '15-test',
      subtopicNumber: '15',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '15-test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Part A: Basic Recall & Calculation',
          badge: 'Test: Part A (Basic Recall)',
          blocks: [
            {
              type: 'text',
              content:
                'Answer all 3 mixed recall questions covering Unit 15 on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15-test-q1',
              number: 1,
              question: 'How many square centimetres are in $4\\text{ square metres}$ ($4\\text{ m}^2$)?',
              hint: 'Multiply $4$ by $10\\,000$.',
              answer: '40,000 cm²',
              explanation: '$4 \\times 10\\,000 = 40\\,000\\text{ cm}^2$.',
            },
            {
              id: '15-test-q2',
              number: 2,
              question: 'Find the area of a triangle with base $10\\text{ cm}$ and perpendicular height $6\\text{ cm}$.',
              hint: '$\\frac{1}{2} \\times 10 \\times 6$.',
              answer: '30 cm²',
              explanation: '$\\frac{1}{2} \\times 10 \\times 6 = 30\\text{ cm}^2$.',
            },
            {
              id: '15-test-q3',
              number: 3,
              question: 'Calculate the volume of a cube with edge length $4\\text{ cm}$.',
              hint: '$4 \\times 4 \\times 4$.',
              answer: '64 cm³',
              explanation: '$4^3 = 64\\text{ cm}^3$.',
            },
          ],
        },
        {
          id: '15-test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Part B: Real-World Applications',
          badge: 'Test: Part B (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 real-world area, hectare, and volume problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15-test-q4',
              number: 1,
              question:
                'A farmer has a rectangular wheat field measuring $400\\text{ m}$ by $250\\text{ m}$. How many hectares of land is this?',
              hint: 'Area $= 400 \\times 250 = 100\\,000\\text{ m}^2$. Divide by 10,000.',
              answer: '10 hectares',
              explanation: '$400 \\times 250 = 100\\,000\\text{ m}^2 = 10\\text{ ha}$.',
            },
            {
              id: '15-test-q5',
              number: 2,
              question:
                'A water container has dimensions $30\\text{ cm} \\times 20\\text{ cm} \\times 25\\text{ cm}$. How many LITRES of water does it hold when full?',
              hint: 'Volume $= 30 \\times 20 \\times 25 = 15\\,000\\text{ cm}^3$. Divide by 1000.',
              answer: '15 litres',
              explanation: '$15\\,000\\text{ cm}^3 = 15\\text{ litres}$.',
            },
            {
              id: '15-test-q6',
              number: 3,
              question:
                'A cardboard shipping carton measures $50\\text{ cm} \\times 40\\text{ cm} \\times 30\\text{ cm}$. What is its total surface area in $\\text{cm}^2$?',
              hint: '$2(50 \\times 40 + 50 \\times 30 + 40 \\times 30)$.',
              answer: '9400 cm² (or 0.94 m²)',
              explanation:
                '$2(2000 + 1500 + 1200) = 2(4700) = 9400\\text{ cm}^2$.',
            },
          ],
        },
        {
          id: '15-test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Part C: Reasoning & Challenge',
          badge: 'Test: Part C (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Complete these 3 challenge problems on unknown dimensions and composite shapes on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '15-test-q7',
              number: 1,
              question:
                'A triangle has area $36\\text{ cm}^2$. Its perpendicular height is twice its base ($h = 2b$). What is the length of the base?',
              hint: '$\\text{Area} = \\frac{1}{2} \\times b \\times (2b) = b^2 = 36$. Find $\\sqrt{36}$.',
              answer: '6 cm (height is 12 cm)',
              explanation:
                '$\\frac{1}{2} b (2b) = b^2 = 36 \\implies b = 6\\text{ cm}$.',
            },
            {
              id: '15-test-q8',
              number: 2,
              question:
                'A rectangular swimming pool contains $120\\text{ m}^3$ of water. The pool is $10\\text{ m}$ long and $6\\text{ m}$ wide. What is the depth of the water in metres?',
              hint: 'Base area $= 10 \\times 6 = 60\\text{ m}^2$. Depth $= 120 \\div 60$.',
              answer: '2 metres',
              explanation: '$10 \\times 6 \\times d = 120 \\implies 60d = 120 \\implies d = 2\\text{ metres}$.',
            },
            {
              id: '15-test-q9',
              number: 3,
              question:
                'A solid cube has a volume of $64\\text{ cm}^3$. What is its TOTAL surface area?',
              hint: 'Edge length $s = \\sqrt[3]{64} = 4\\text{ cm}$. Surface area $= 6 \\times 4^2$.',
              answer: '96 cm²',
              explanation:
                '$s = 4\\text{ cm}$. Surface Area $= 6 \\times 4^2 = 6 \\times 16 = 96\\text{ cm}^2$.',
            },
          ],
        },
      ],
    },
  ],
};
