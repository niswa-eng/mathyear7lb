/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit12: Unit = {
  id: 'unit-12',
  unitNumber: 12,
  title: 'Ratio and Proportion',
  learningObjectives: [
    'Simplify and compare ratios.',
    'Divide quantities into a given ratio.',
    'Use the unitary method to solve problems involving ratio and direct proportion.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 12.1 Simplifying ratios
    // -------------------------------------------------------------------------
    {
      id: '12.1',
      subtopicNumber: '12.1',
      title: 'Simplifying ratios',
      type: 'lesson',
      steps: [
        {
          id: '12.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Comparing Parts & Mixing Paint',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Orange Squash & Mixing Paint Shades',
              scenario:
                'To make perfect orange squash, the bottle says "mix $1$ part concentrate with $4$ parts water", written as the ratio $1 : 4$. If you pour $50\\text{ mL}$ of concentrate, you need $4 \\times 50 = 200\\text{ mL}$ of water. The ratio $50 : 200$ tastes exactly the same as $1 : 4$ because both sides were scaled by the same factor!',
              takeaway:
                'A ratio compares two or more quantities of the same kind. To simplify a ratio, divide all numbers by their Highest Common Factor (HCF). Ratios do not have units—convert all quantities to the same unit BEFORE simplifying!',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Ratio ($a : b$)',
                  definition: 'A comparison of the sizes of two or more quantities using the colon symbol (:).',
                  example: 'If a bag has 3 red and 5 blue balls, the ratio of red to blue is $3 : 5$.',
                },
                {
                  term: 'Simplest Form of a Ratio',
                  definition: 'A ratio written with whole numbers having no common factors other than 1.',
                  example: '$6 : 8 = 3 : 4$ (dividing both by 2).',
                },
                {
                  term: 'Unit Consistency',
                  definition: 'Before simplifying, both quantities must be expressed in the exact same measurement unit.',
                  example: '$20\\text{ cm} : 1\\text{ m} = 20\\text{ cm} : 100\\text{ cm} = 1 : 5$.',
                },
              ],
            },
          ],
        },
        {
          id: '12.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Ratio First & Unit Conversion',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Simplify the ratio $8 : 12$ into its simplest form.\n(b) Simplify the three-part ratio $15 : 25 : 35$.\n(c) Simplify the ratio $40\\text{p} : £2.00$.',
                context: 'Simplifying two-part and three-part ratios with unit alignment',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Divide by Highest Common Factor',
                    content:
                      'Find the HCF of $8$ and $12$, which is $4$. Divide both parts by $4$:',
                    mathFormula: '8 \\div 4 = 2, \\quad 12 \\div 4 = 3 \\implies 2 : 3',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Simplify three-part ratio',
                    content:
                      'All three numbers end in 5, so divide all parts by $5$:',
                    mathFormula: '15 \\div 5 = 3, \\quad 25 \\div 5 = 5, \\quad 35 \\div 5 = 7 \\implies 3 : 5 : 7',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Convert to the same unit first',
                    content:
                      'Convert $£2.00$ to pence: $£2.00 = 200\\text{p}$. Now both are in pence: $40 : 200$. Divide both by $40$:',
                    mathFormula: '40 : 200 = 1 : 5',
                  },
                ],
                finalAnswer: '(a) 2 : 3; (b) 3 : 5 : 7; (c) 1 : 5',
              },
            },
          ],
        },
        {
          id: '12.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Simplifying Without Converting Units',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Writing 30 cm : 2 m as 30 : 2 = 15 : 1',
                wrongWay: '30 cm : 2 m = 15 : 1',
                whyWrong:
                  'Centimetres and metres are different units! $2\\text{ metres}$ is $200\\text{ cm}$, not $2\\text{ cm}$.',
                correctWay:
                  'Convert both to centimetres first: $30\\text{ cm} : 200\\text{ cm} = 30 : 200 = 3 : 20$.',
                proTip:
                  'Always write the units explicitly in step 1, convert to the smaller unit, and cross out the units before simplifying.',
                memoryHook: 'Units must match before you slash!',
              },
            },
          ],
        },
        {
          id: '12.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Simplify ratios by dividing by common factors.',
            },
          ],
          questions: [
            {
              id: '12.1-ex1-q1',
              number: 1,
              question: 'Simplify the ratio $10 : 15$ to its simplest form.',
              hint: 'Divide both numbers by 5.',
              answer: '2 : 3',
              explanation: '$10 \\div 5 = 2$, $15 \\div 5 = 3 \\implies 2 : 3$.',
            },
            {
              id: '12.1-ex1-q2',
              number: 2,
              question: 'Simplify the ratio $18 : 24$.',
              hint: 'Divide both by 6 (their HCF).',
              answer: '3 : 4',
              explanation: '$18 \\div 6 = 3$, $24 \\div 6 = 4 \\implies 3 : 4$.',
            },
            {
              id: '12.1-ex1-q3',
              number: 3,
              question: 'Simplify the ratio $50\\text{ cm} : 2\\text{ m}$.',
              hint: 'Convert $2\\text{ m}$ to $200\\text{ cm}$ first.',
              answer: '1 : 4',
              explanation: '$50 : 200 = 1 : 4$ (dividing both by 50).',
            },
          ],
        },
        {
          id: '12.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply ratios to classroom, sports, and cooking situations on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '12.1-ex2-q1',
              number: 1,
              question:
                'In a sports club of $36$ members, $20$ play football and $16$ play basketball. What is the ratio of football players to basketball players in simplest form?',
              hint: 'Write $20 : 16$ and divide both by 4.',
              answer: '5 : 4',
              explanation: '$20 : 16 = 5 : 4$.',
            },
            {
              id: '12.1-ex2-q2',
              number: 2,
              question:
                'A cake recipe uses $250\\text{ g}$ flour, $150\\text{ g}$ sugar, and $100\\text{ g}$ butter. What is the ratio of flour to sugar to butter in simplest form?',
              hint: 'Write $250 : 150 : 100$ and divide all three by 50.',
              answer: '5 : 3 : 2',
              explanation: '$250 : 150 : 100 = 5 : 3 : 2$.',
            },
            {
              id: '12.1-ex2-q3',
              number: 3,
              question:
                'A model aeroplane has a wingspan of $40\\text{ cm}$. The real aeroplane has a wingspan of $32\\text{ metres}$. What is the scale ratio in the form $1 : n$?',
              hint: 'Convert $32\\text{ m}$ to $3200\\text{ cm}$. Then divide $3200$ by $40$.',
              answer: '1 : 80',
              explanation: '$40 : 3200 = 1 : 80$.',
            },
          ],
        },
        {
          id: '12.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 ratio comparison and combining puzzles on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '12.1-ex3-q1',
              number: 1,
              question:
                'In a school, the ratio of boys to girls is $4 : 5$. If there are $240$ boys, how many girls are there?',
              hint: '4 parts $= 240 \\implies 1\\text{ part} = 60$. Multiply $60$ by $5$.',
              answer: '300 girls',
              explanation: '$1\\text{ part} = 240 \\div 4 = 60$. Girls $= 5 \\times 60 = 300$.',
            },
            {
              id: '12.1-ex3-q2',
              number: 2,
              question:
                'Ratio $A : B$ is $2 : 3$, and ratio $B : C$ is $4 : 5$. What is the combined ratio $A : B : C$ in simplest integer form?',
              hint: 'Make the $B$ parts equal: LCM of 3 and 4 is 12. Multiply first ratio by 4 ($8 : 12$) and second by 3 ($12 : 15$).',
              answer: '8 : 12 : 15',
              explanation:
                '$A : B = 8 : 12$ and $B : C = 12 : 15 \\implies A : B : C = 8 : 12 : 15$.',
            },
            {
              id: '12.1-ex3-q3',
              number: 3,
              question:
                'Which mixture is sweeter: Mix X ($3$ spoons sugar to $5$ cups water) or Mix Y ($5$ spoons sugar to $8$ cups water)?',
              hint: 'Compare fractions of sugar to water: $\\frac{3}{5} = 0.60$ vs $\\frac{5}{8} = 0.625$.',
              answer: 'Mix Y (0.625 spoons/cup is sweeter than 0.60 spoons/cup)',
              explanation:
                'Mix X has $\\frac{3}{5} = 0.60$ sugar per cup. Mix Y has $\\frac{5}{8} = 0.625$ sugar per cup. Since $0.625 > 0.60$, Mix Y is sweeter.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 12.2 Sharing in a ratio
    // -------------------------------------------------------------------------
    {
      id: '12.2',
      subtopicNumber: '12.2',
      title: 'Sharing in a ratio',
      type: 'lesson',
      steps: [
        {
          id: '12.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The 3-Step Bar Model Method',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Sharing a Prize or Pizza Slices',
              scenario:
                'Suppose Sam and Ella win $£50$ and agree to share it in the ratio $2 : 3$ because Ella worked 3 days and Sam worked 2 days. Imagine a chocolate bar divided into $2 + 3 = 5$ equal chunks. If the whole bar is worth $£50$, each chunk is $£50 \\div 5 = £10$. Sam takes 2 chunks ($2 \\times £10 = £20$), and Ella takes 3 chunks ($3 \\times £10 = £30$).',
              takeaway:
                'Master the 3-step ratio sharing formula:\n1. ADD the ratio parts to get TOTAL PARTS.\n2. DIVIDE total quantity by total parts to find ONE PART.\n3. MULTIPLY one part by each person\'s ratio number.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Total Parts',
                  definition: 'The sum of all numbers in the ratio.',
                  example: 'In $3 : 4 : 1$, total parts $= 3 + 4 + 1 = 8$ parts.',
                },
                {
                  term: 'Value of One Part',
                  definition: '$\\text{Total Amount} \\div \\text{Total Parts}$.',
                  example: '$£80 \\div 8\\text{ parts} = £10\\text{ per part}$.',
                },
                {
                  term: 'Checking Your Work',
                  definition: 'Always add the individual shares together to confirm they equal the original total amount!',
                  example: '$£30 + £40 + £10 = £80$ (Check passes!).',
                },
              ],
            },
          ],
        },
        {
          id: '12.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Sharing First & Known Difference',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) Share $£45$ in the ratio $1 : 4$.\n(b) Share $60\\text{ kg}$ in the ratio $2 : 3 : 5$.\n(c) Liam and Noah share money in the ratio $3 : 5$. Noah receives $£16$ more than Liam. How much money did they share in total?',
                context: 'Sharing totals and working with differences in parts',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Share £45 in ratio 1 : 4',
                    content:
                      '1. Total parts: $1 + 4 = 5$ parts.\n2. One part: $£45 \\div 5 = £9$.\n3. Multiply: $1 \\times £9 = £9$, and $4 \\times £9 = £36$.\nCheck: $£9 + £36 = £45$.',
                    mathFormula: '£9 \\text{ and } £36',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Share 60 kg in ratio 2 : 3 : 5',
                    content:
                      '1. Total parts: $2 + 3 + 5 = 10$ parts.\n2. One part: $60 \\div 10 = 6\\text{ kg}$.\n3. Shares: $2 \\times 6 = 12\\text{ kg}$, $3 \\times 6 = 18\\text{ kg}$, $5 \\times 6 = 30\\text{ kg}$.',
                    mathFormula: '12\\text{ kg}, \\; 18\\text{ kg}, \\; 30\\text{ kg}',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Noah gets £16 more (difference)',
                    content:
                      'Difference in parts: $5 - 3 = 2$ parts.\nIf $2$ parts $= £16$, then $1\\text{ part} = 16 \\div 2 = £8$.\nTotal parts $= 3 + 5 = 8$ parts.\nTotal money $= 8 \\times £8 = £64$.',
                    mathFormula: '1\\text{ part} = £8 \\implies \\text{Total} = 8 \\times £8 = £64',
                  },
                ],
                finalAnswer: '(a) £9 and £36; (b) 12 kg, 18 kg, 30 kg; (c) £64 total',
              },
            },
          ],
        },
        {
          id: '12.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Dividing by the Wrong Number',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Dividing the total by one of the ratio numbers instead of the sum',
                wrongWay: 'To share £60 in ratio 2 : 3, calculating 60 / 3 = 20',
                whyWrong:
                  'There are not 3 parts in total—there are $2 + 3 = 5$ parts! Dividing by 3 treats one person\'s share as the whole.',
                correctWay:
                  'Always add all ratio terms first: $2 + 3 = 5$ parts. Then $60 \\div 5 = £12$ per part.',
                proTip:
                  'Always draw a quick bar model with boxes for each part to visualize the whole.',
                memoryHook: 'Add first, then divide, then multiply!',
              },
            },
          ],
        },
        {
          id: '12.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Use the 3-step method to share each quantity.',
            },
          ],
          questions: [
            {
              id: '12.2-ex1-q1',
              number: 1,
              question: 'Share $£20$ in the ratio $1 : 3$. How much is each share?',
              hint: 'Total parts $= 1 + 3 = 4$. $20 \\div 4 = 5$.',
              answer: '£5 and £15',
              explanation: '$1+3=4$ parts. $1\\text{ part} = £5$. Shares: $1 \\times £5 = £5$ and $3 \\times £5 = £15$.',
            },
            {
              id: '12.2-ex1-q2',
              number: 2,
              question: 'Divide $35\\text{ sweets}$ in the ratio $2 : 5$. How many sweets does each person get?',
              hint: 'Total parts $= 2 + 5 = 7$. $35 \\div 7 = 5$.',
              answer: '10 sweets and 25 sweets',
              explanation: '$2+5=7$ parts. $1\\text{ part} = 5$. Shares: $2 \\times 5 = 10$ and $5 \\times 5 = 25$.',
            },
            {
              id: '12.2-ex1-q3',
              number: 3,
              question: 'Share $48\\text{ cm}$ in the ratio $3 : 1$. What is the length of the larger piece?',
              hint: 'Total parts $= 4$. One part $= 12\\text{ cm}$. Larger piece is 3 parts.',
              answer: '36 cm',
              explanation: '$48 \\div 4 = 12\\text{ cm}$. Larger piece $= 3 \\times 12 = 36\\text{ cm}$.',
            },
          ],
        },
        {
          id: '12.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply ratio sharing to practical business, garden, and recipe scenarios on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '12.2-ex2-q1',
              number: 1,
              question:
                'Two business partners share profits of $£14,000$ in the ratio $3 : 4$. How much does the partner with the larger share receive?',
              hint: 'Total parts $= 3 + 4 = 7$. One part $= 14000 \\div 7 = 2000$. Multiply by 4.',
              answer: '£8,000',
              explanation: '$14000 \\div 7 = £2000$ per part. Larger share $= 4 \\times £2000 = £8000$.',
            },
            {
              id: '12.2-ex2-q2',
              number: 2,
              question:
                'Concrete is made by mixing cement, sand, and gravel in the ratio $1 : 2 : 4$. A builder needs $700\\text{ kg}$ of concrete. How many kg of gravel are needed?',
              hint: 'Total parts $= 1 + 2 + 4 = 7$. One part $= 700 \\div 7 = 100\\text{ kg}$. Gravel is 4 parts.',
              answer: '400 kg',
              explanation: '$700 \\div 7 = 100\\text{ kg}$. Gravel $= 4 \\times 100 = 400\\text{ kg}$.',
            },
            {
              id: '12.2-ex2-q3',
              number: 3,
              question:
                'A perimeter fence of $90\\text{ metres}$ surrounds a triangular paddock whose sides are in the ratio $2 : 3 : 4$. What is the length of the shortest side?',
              hint: 'Total parts $= 2 + 3 + 4 = 9$. One part $= 90 \\div 9 = 10\\text{ m}$. Shortest side is 2 parts.',
              answer: '20 metres',
              explanation: '$90 \\div 9 = 10\\text{ m}$. Shortest side $= 2 \\times 10 = 20\\text{ m}$.',
            },
          ],
        },
        {
          id: '12.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 advanced difference and reverse ratio problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '12.2-ex3-q1',
              number: 1,
              question:
                'Amy and Ben share prize money in the ratio $3 : 7$. Ben receives $£120$ more than Amy. How much money did Amy receive?',
              hint: 'Difference in parts is $7 - 3 = 4$ parts. $4\\text{ parts} = £120$. Find 1 part, then multiply by 3.',
              answer: '£90',
              explanation:
                'Difference $= 4$ parts $= £120 \\implies 1\\text{ part} = £30$. Amy gets $3 \\times £30 = £90$.',
            },
            {
              id: '12.2-ex3-q2',
              number: 2,
              question:
                'A rope of length $120\\text{ cm}$ is cut into three pieces in the ratio $1 : 2 : 3$. What is the difference in length between the longest and shortest piece?',
              hint: 'Total parts $= 6$. One part $= 20\\text{ cm}$. Longest is $3$ parts ($60$), shortest is $1$ part ($20$).',
              answer: '40 cm',
              explanation:
                '$120 \\div 6 = 20\\text{ cm}$. Longest $= 60\\text{ cm}$, shortest $= 20\\text{ cm}$. Difference $= 60 - 20 = 40\\text{ cm}$.',
            },
            {
              id: '12.2-ex3-q3',
              number: 3,
              question:
                'A box contains blue and green counters in the ratio $3 : 2$. When $6$ more blue counters are added, the ratio becomes $2 : 1$. How many green counters were in the box originally?',
              hint: 'Let green counters be $2x$ and blue be $3x$. After adding 6 blue: $\\frac{3x + 6}{2x} = \\frac{2}{1}$. Solve for $x$.',
              answer: '12 green counters',
              explanation:
                '$(3x + 6) = 2(2x) \\implies 3x + 6 = 4x \\implies x = 6$. Green counters $= 2x = 2(6) = 12$. (Check: blue was $18$, becomes $24$; $24 : 12 = 2 : 1$).',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 12.3 Using direct proportion
    // -------------------------------------------------------------------------
    {
      id: '12.3',
      subtopicNumber: '12.3',
      title: 'Using direct proportion',
      type: 'lesson',
      steps: [
        {
          id: '12.3-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The Unitary Method & Recipe Scaling',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Supermarket Price Tags & Baking for a Crowd',
              scenario:
                'If $3$ identical notebooks cost $£6$, what do $5$ notebooks cost? Don\'t guess! First find the price of ONE notebook (the "unit price"): $£6 \\div 3 = £2$ per notebook. Once you know the unit price, multiply by how many you need: $5 \\times £2 = £10$. This reliable two-step technique is called the UNITARY METHOD.',
              takeaway:
                'Two quantities are in DIRECT PROPORTION if multiplying or dividing one by a number multiplies or divides the other by the exact same number. If you double one, the other doubles. At zero of one, you have zero of the other.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Direct Proportion',
                  definition: 'A relationship where two variables increase or decrease at the same constant rate (ratio is constant).',
                  example: 'If 1 kg apples is $£2$, 2 kg is $£4$, 3 kg is $£6$.',
                },
                {
                  term: 'Unitary Method',
                  definition: 'Solving proportion problems by finding the value of a single unit (1 item) first.',
                  example: 'Cost of 4 is $£12 \\implies$ Cost of 1 is $£3 \\implies$ Cost of 7 is $7 \\times 3 = £21$.',
                },
                {
                  term: 'Scaling Factor',
                  definition: 'The number you multiply all quantities by to change recipe sizes or scale models.',
                  example: 'To scale a recipe from 4 servings to 10 servings, multiply by $\\frac{10}{4} = 2.5$.',
                },
              ],
            },
          ],
        },
        {
          id: '12.3-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Unitary Problem First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) $5$ pens cost $£3.50$. Find the cost of $8$ pens.\n(b) A pancake recipe for $4$ people uses $200\\text{ g}$ flour and $300\\text{ mL}$ milk. How much flour and milk are needed for $6$ people?',
                context: 'Using unit rates and recipe scaling multipliers',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Find the cost of ONE pen',
                    content:
                      'Divide total cost by number of pens:\n$£3.50 \\div 5 = £0.70$ (or $70\\text{p}$) per pen.',
                    mathFormula: '£3.50 \\div 5 = £0.70',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (a): Multiply by 8 pens',
                    content:
                      'Multiply unit price by $8$:\n$8 \\times £0.70 = £5.60$.',
                    mathFormula: '8 \\times £0.70 = £5.60',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (b): Find the scaling multiplier for 6 people',
                    content:
                      'Multiplier $= \\frac{6}{4} = 1.5$ (or divide by 4 for 1 person, then multiply by 6):\n- Flour: $200 \\times 1.5 = 300\\text{ g}$\n- Milk: $300 \\times 1.5 = 450\\text{ mL}$.',
                    mathFormula: '\\text{Flour: } 300\\text{ g}, \\quad \\text{Milk: } 450\\text{ mL}',
                  },
                ],
                finalAnswer: '(a) £5.60; (b) 300 g flour and 450 mL milk',
              },
            },
          ],
        },
        {
          id: '12.3-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Adding the Difference Instead of Multiplying',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Adding 2 people\'s worth by adding 2 grams to ingredients',
                wrongWay: 'Recipe for 4 uses 200g; for 6 people, saying 200 + 2 = 202g',
                whyWrong:
                  'Direct proportion is MULTIPLICATIVE, not additive! Adding 2 grams barely changes a crumb. You must scale all ingredients by the ratio $\\frac{6}{4} = 1.5$.',
                correctWay:
                  'Always multiply: $200\\text{ g} \\times 1.5 = 300\\text{ g}$.',
                proTip:
                  'Check: 6 people is $50\\%$ more people than 4, so you need $50\\%$ more ingredients ($200 + 100 = 300\\text{ g}$).',
                memoryHook: 'Proportion means multiply and divide, never just add!',
              },
            },
          ],
        },
        {
          id: '12.3-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Find the unit rate (value for 1) first.',
            },
          ],
          questions: [
            {
              id: '12.3-ex1-q1',
              number: 1,
              question: 'If $4$ apples cost $£1.20$, what is the cost of $1$ apple?',
              hint: 'Divide $£1.20$ by 4.',
              answer: '£0.30 (30p)',
              explanation: '$£1.20 \\div 4 = £0.30$ (30p).',
            },
            {
              id: '12.3-ex1-q2',
              number: 2,
              question: 'If $3$ pencils cost $£0.90$, how much do $7$ pencils cost?',
              hint: 'One pencil is $£0.90 \\div 3 = £0.30$. Multiply by 7.',
              answer: '£2.10',
              explanation: '$1\\text{ pencil} = £0.30$. $7 \\times £0.30 = £2.10$.',
            },
            {
              id: '12.3-ex1-q3',
              number: 3,
              question: 'A car uses $8\\text{ litres}$ of petrol to travel $100\\text{ km}$. How many litres are needed for $300\\text{ km}$?',
              hint: '$300\\text{ km}$ is $3$ times $100\\text{ km}$. Multiply by 3.',
              answer: '24 litres',
              explanation: '$3 \\times 8 = 24$ litres.',
            },
          ],
        },
        {
          id: '12.3-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Scale recipes and evaluate shopping value on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '12.3-ex2-q1',
              number: 1,
              question:
                'A cookie recipe for $12$ cookies requires $180\\text{ g}$ of chocolate chips. How many grams of chocolate chips are needed to bake $30$ cookies?',
              hint: 'One cookie needs $180 \\div 12 = 15\\text{ g}$. Multiply $15$ by $30$.',
              answer: '450 g',
              explanation: 'Per cookie: $180 \\div 12 = 15\\text{ g}$. For 30 cookies: $30 \\times 15 = 450\\text{ g}$.',
            },
            {
              id: '12.3-ex2-q2',
              number: 2,
              question:
                'A factory machine stamps out $450$ metal bottle caps in $15\\text{ minutes}$. How many bottle caps does it stamp in $1\\text{ hour}$ ($60\\text{ minutes}$)?',
              hint: '$60\\text{ minutes} = 4 \\times 15\\text{ minutes}$. Multiply $450$ by $4$.',
              answer: '1800 bottle caps',
              explanation: 'In 60 minutes: $450 \\times 4 = 1800$ bottle caps.',
            },
            {
              id: '12.3-ex2-q3',
              number: 3,
              question:
                'Which is the better buy: Pack A ($6$ juice boxes for $£3.60$) or Pack B ($10$ juice boxes for $£5.50$)?',
              hint: 'Find cost per box: Pack A $= 3.60 \\div 6$; Pack B $= 5.50 \\div 10$.',
              answer: 'Pack B (55p per box vs 60p in Pack A)',
              explanation:
                'Pack A: $£3.60 \\div 6 = £0.60$ (60p) per box. Pack B: $£5.50 \\div 10 = £0.55$ (55p) per box. Pack B is better value.',
            },
          ],
        },
        {
          id: '12.3-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Tackle these 3 challenge proportion and rate problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '12.3-ex3-q1',
              number: 1,
              question:
                'A painter uses $5\\text{ litres}$ of paint to cover an area of $45\\text{ m}^2$. How many litres of paint will be needed for a wall measuring $12\\text{ m}$ by $6\\text{ m}$?',
              hint: 'Find area of new wall: $12 \\times 6 = 72\\text{ m}^2$. Paint coverage is $45 \\div 5 = 9\\text{ m}^2$ per litre. Divide 72 by 9.',
              answer: '8 litres',
              explanation:
                'Coverage $= 45 \\div 5 = 9\\text{ m}^2/\\text{L}$. Wall area $= 12 \\times 6 = 72\\text{ m}^2$. Paint needed $= 72 \\div 9 = 8$ litres.',
            },
            {
              id: '12.3-ex3-q2',
              number: 2,
              question:
                'A recipe for $8$ scones uses $240\\text{ g}$ flour, $60\\text{ g}$ butter, and $150\\text{ mL}$ milk. A baker has only $100\\text{ g}$ butter but plenty of everything else. What is the maximum number of scones the baker can make?',
              hint: 'Butter per scone is $60 \\div 8 = 7.5\\text{ g}$. Divide $100$ by $7.5$.',
              answer: '13 scones (13.33 -> round down to whole scones)',
              explanation:
                'Butter per scone $= 60 \\div 8 = 7.5\\text{ g}$. Number of scones $= 100 \\div 7.5 = 13.33\\dots \\implies 13$ complete scones.',
            },
            {
              id: '12.3-ex3-q3',
              number: 3,
              question:
                'It takes $4$ workers $6\\text{ hours}$ to paint a community hall. Assuming all workers work at the same rate, how many hours would it take $3$ workers to paint the same hall? (Note: inverse proportion)',
              hint: 'Total worker-hours $= 4 \\times 6 = 24\\text{ hours}$. Divide $24$ by $3$ workers.',
              answer: '8 hours',
              explanation:
                'Total work $= 4 \\times 6 = 24$ worker-hours. For 3 workers: $24 \\div 3 = 8$ hours.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Unit 12 End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '12-test',
      subtopicNumber: '12',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '12-test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Part A: Basic Recall & Calculation',
          badge: 'Test: Part A (Basic Recall)',
          blocks: [
            {
              type: 'text',
              content:
                'Answer all 3 mixed recall questions covering Unit 12 on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '12-test-q1',
              number: 1,
              question: 'Simplify the ratio $24 : 36$ to its simplest form.',
              hint: 'Divide both by 12.',
              answer: '2 : 3',
              explanation: '$24 \\div 12 = 2$, $36 \\div 12 = 3 \\implies 2 : 3$.',
            },
            {
              id: '12-test-q2',
              number: 2,
              question: 'Share $£35$ in the ratio $2 : 3$. What is the smaller share?',
              hint: 'Total parts $= 5$. One part $= £7$. Smaller share $= 2 \\times 7$.',
              answer: '£14',
              explanation: '$35 \\div 5 = £7$. Smaller share $= 2 \\times £7 = £14$.',
            },
            {
              id: '12-test-q3',
              number: 3,
              question: 'If $6$ bagels cost $£4.80$, how much do $5$ bagels cost?',
              hint: 'One bagel $= 4.80 \\div 6 = 0.80$. Multiply by 5.',
              answer: '£4.00',
              explanation: '$1\\text{ bagel} = £0.80$. $5 \\times £0.80 = £4.00$.',
            },
          ],
        },
        {
          id: '12-test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Part B: Real-World Applications',
          badge: 'Test: Part B (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 real-world ratio and proportion problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '12-test-q4',
              number: 1,
              question:
                'The ratio of teachers to students on a school trip must be $1 : 8$. If there are $72$ students attending, how many teachers are needed?',
              hint: 'Divide 72 by 8.',
              answer: '9 teachers',
              explanation: '$72 \\div 8 = 9$ teachers.',
            },
            {
              id: '12-test-q5',
              number: 2,
              question:
                'A fruit punch recipe mixes orange juice and sparkling water in the ratio $3 : 7$. How many litres of sparkling water are needed to make $20\\text{ litres}$ of punch?',
              hint: 'Total parts $= 3 + 7 = 10$. One part $= 20 \\div 10 = 2\\text{ L}$. Water is 7 parts.',
              answer: '14 litres',
              explanation: '$20 \\div 10 = 2\\text{ L}$ per part. Water $= 7 \\times 2 = 14$ litres.',
            },
            {
              id: '12-test-q6',
              number: 3,
              question:
                'A car travels $165\\text{ km}$ on $15\\text{ litres}$ of fuel. How far can it travel on a full $45\\text{-litre}$ tank?',
              hint: '$45\\text{ L} = 3 \\times 15\\text{ L}$. Multiply $165$ by $3$.',
              answer: '495 km',
              explanation: '$45 \\div 15 = 3$. $3 \\times 165\\text{ km} = 495\\text{ km}$.',
            },
          ],
        },
        {
          id: '12-test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Part C: Reasoning & Challenge',
          badge: 'Test: Part C (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Demonstrate your reasoning on these 3 challenge ratio and rate problems on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '12-test-q7',
              number: 1,
              question:
                'Simplify the ratio $1.5\\text{ kg} : 750\\text{ g} : 3\\text{ kg}$ into simplest integer form.',
              hint: 'Convert all to grams: $1500 : 750 : 3000$. Divide all by $750$.',
              answer: '2 : 1 : 4',
              explanation: '$1500 : 750 : 3000 = 2 : 1 : 4$.',
            },
            {
              id: '12-test-q8',
              number: 2,
              question:
                'A prize of $£240$ is shared between Tom, Jack, and Sam in the ratio $1 : 2 : 5$. How much more money does Sam get than Tom and Jack COMBINED?',
              hint: 'Total parts $= 8$. One part $= £30$. Sam gets 5 parts ($£150$). Tom + Jack get $1 + 2 = 3$ parts ($£90$).',
              answer: '£60',
              explanation:
                'One part $= £240 \\div 8 = £30$. Sam $= 5 \\times 30 = £150$. Tom + Jack $= 3 \\times 30 = £90$. Difference $= 150 - 90 = £60$.',
            },
            {
              id: '12-test-q9',
              number: 3,
              question:
                'Two gears mesh together. Gear A has $18$ teeth and Gear B has $12$ teeth. When Gear A makes $20$ complete rotations, how many rotations does Gear B make?',
              hint: 'Total teeth engaged $= 20 \\times 18 = 360$ teeth. Divide $360$ by $12$.',
              answer: '30 rotations',
              explanation:
                'Total teeth $= 20 \\times 18 = 360$. Rotations of B $= 360 \\div 12 = 30$ rotations.',
            },
          ],
        },
      ],
    },
  ],
};
