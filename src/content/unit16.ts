/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit16: Unit = {
  id: 'unit-16',
  unitNumber: 16,
  title: 'Interpreting Results',
  learningObjectives: [
    'Organise and represent data using tally charts, frequency tables, two-way tables, bar charts, pie charts, waffle diagrams, Venn diagrams, Carroll diagrams, frequency diagrams, line graphs, and infographics.',
    'Calculate and interpret the mean, median, mode, and range.',
    'Choose suitable methods to summarise data.',
    'Identify patterns and relationships in data.',
    'Draw conclusions from data and consider sampling and variation.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 16.1 Two-way tables
    // -------------------------------------------------------------------------
    {
      id: '16.1',
      subtopicNumber: '16.1',
      title: 'Two-way tables',
      type: 'lesson',
      steps: [
        {
          id: '16.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Organizing Two Categories in One Grid',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Sorting Sports by Gender in Year 7',
              scenario:
                'Imagine sorting $60$ students by TWO traits at the same time: their year group (Year 7 vs Year 8) and whether they prefer Swimming or Football. Instead of listing 60 names, we create a TWO-WAY TABLE: columns for the sports, rows for the year groups, and TOTALS at the end of every row and column.',
              takeaway:
                'In a two-way table:\n- Each cell represents the intersection of one row and one column.\n- The sum of each row equals the ROW TOTAL.\n- The sum of each column equals the COLUMN TOTAL.\n- The grand total in the bottom-right corner must match BOTH the sum of row totals and the sum of column totals!',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Two-Way Table',
                  definition: 'A table used to organise data classified according to two distinct categorical variables.',
                  example: 'Gender (Boy/Girl) vs Lunch Choice (Hot Meal/Packed Lunch).',
                },
                {
                  term: 'Row and Column Totals',
                  definition: 'Marginal sums added along the edges of the table to find total counts for each sub-group.',
                  example: 'Total boys $= 14 + 16 = 30$.',
                },
                {
                  term: 'Grand Total',
                  definition: 'The bottom-right corner value representing the entire sample size $N$.',
                  example: 'If grand total is 50, all rows and columns add up to 50.',
                },
              ],
            },
          ],
        },
        {
          id: '16.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Two-Way Table First: Filling the Blanks',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\nA survey of $50$ students asked if they have a pet dog or cat:\n- $18$ students have a Dog\n- $14$ students have a Cat\n- $6$ students have BOTH a Dog and a Cat\n(a) Complete the two-way table entries.\n(b) How many students have NEITHER a dog nor a cat?\n(c) What fraction of all students have only a dog?',
                context: 'Completing two-way tables by deduction and calculating fractions',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Fill in the Dog row',
                    content:
                      '- Has Dog & Has Cat: $6$\n- Has Dog & No Cat: $18 - 6 = 12$\n- Total Has Dog: $18$',
                    mathFormula: '18 - 6 = 12',
                  },
                  {
                    stepNumber: 2,
                    label: 'Fill in the Cat column',
                    content:
                      '- Total Has Cat is $14$.\n- Has Cat & No Dog: $14 - 6 = 8$.',
                    mathFormula: '14 - 6 = 8',
                  },
                  {
                    stepNumber: 3,
                    label: 'Find No Dog & No Cat (Neither)',
                    content:
                      'Total students $= 50$.\nStudents with at least one pet: $12\\text{ (Dog only)} + 8\\text{ (Cat only)} + 6\\text{ (Both)} = 26$.\nNeither $= 50 - 26 = 24$ students.',
                    mathFormula: '50 - 26 = 24',
                  },
                  {
                    stepNumber: 4,
                    label: 'Part (c): Fraction with only a dog',
                    content:
                      '$12$ students out of $50$ total: $\\frac{12}{50} = \\frac{6}{25} = 24\\%$.',
                    mathFormula: '\\frac{12}{50} = \\frac{6}{25} = 24\\%',
                  },
                ],
                finalAnswer: '(a) Table complete; (b) 24 students have neither; (c) 6/25 (or 24%)',
              },
            },
          ],
        },
        {
          id: '16.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Mismatching Row and Column Totals',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Filling in numbers without checking if totals cross-check',
                wrongWay: 'Having row totals add to 50 but column totals add to 52',
                whyWrong:
                  'Both row totals and column totals must meet at the EXACT same grand total in the bottom-right corner! If they disagree, there is an arithmetic error.',
                correctWay:
                  'Always calculate the grand total in two separate directions (horizontal sum and vertical sum) to verify they match.',
                proTip:
                  'Find the cell that only has ONE missing number in its row or column first, solve it, and use it to unlock neighboring cells like a Sudoku puzzle!',
                memoryHook: 'Rows and columns must shake hands at the grand total!',
              },
            },
          ],
        },
        {
          id: '16.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Find missing values in two-way tables.',
            },
          ],
          questions: [
            {
              id: '16.1-ex1-q1',
              number: 1,
              question: 'In a class of $30$ students, $16$ are girls. How many boys are in the class?',
              hint: 'Subtract $16$ from $30$.',
              answer: '14 boys',
              explanation: '$30 - 16 = 14$ boys.',
            },
            {
              id: '16.1-ex1-q2',
              number: 2,
              question: 'Out of $20$ boys, $12$ play football and the rest play rugby. How many boys play rugby?',
              hint: '$20 - 12$.',
              answer: '8 boys',
              explanation: '$20 - 12 = 8$ boys.',
            },
            {
              id: '16.1-ex1-q3',
              number: 3,
              question: 'In a table, Row 1 total is $25$ and Row 2 total is $35$. What is the grand total?',
              hint: 'Add $25 + 35$.',
              answer: '60',
              explanation: '$25 + 35 = 60$.',
            },
          ],
        },
        {
          id: '16.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Analyze school lunch choices and club participation in two-way tables on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16.1-ex2-q1',
              number: 1,
              question:
                'In Year 7, $40$ students walk to school and $60$ take the bus. Of the walkers, $18$ are boys. Of the bus riders, $32$ are girls. How many total boys are there in Year 7?',
              hint: 'Walkers: boys $= 18$. Bus riders: total $= 60$, girls $= 32 \\implies$ boys $= 60 - 32 = 28$. Total boys $= 18 + 28$.',
              answer: '46 boys',
              explanation: 'Bus boys $= 60 - 32 = 28$. Total boys $= 18 + 28 = 46$.',
            },
            {
              id: '16.1-ex2-q2',
              number: 2,
              question:
                'A cinema surveyed $100$ customers about popcorn: $55$ bought sweet, $35$ bought salted, and $10$ bought neither. Of the sweet popcorn buyers, $25$ were children. What fraction of sweet popcorn buyers were children?',
              hint: 'Children $= 25$, total sweet buyers $= 55$. Simplify $\\frac{25}{55}$.',
              answer: '5/11',
              explanation: '$\\frac{25}{55} = \\frac{5}{11}$.',
            },
            {
              id: '16.1-ex2-q3',
              number: 3,
              question:
                'A veterinary clinic saw $80$ animals on Monday: $50$ dogs and $30$ cats. If $65$ animals were vaccinated and $10$ cats were NOT vaccinated, how many DOGS were vaccinated?',
              hint: 'Cats: total 30, not vaccinated 10 $\\implies$ vaccinated cats $= 20$. Total vaccinated $= 65$. Vaccinated dogs $= 65 - 20$.',
              answer: '45 dogs',
              explanation: 'Vaccinated cats $= 30 - 10 = 20$. Vaccinated dogs $= 65 - 20 = 45$.',
            },
          ],
        },
        {
          id: '16.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 probability and missing data puzzles from two-way tables on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16.1-ex3-q1',
              number: 1,
              question:
                'A medical test is given to $200$ patients: $40$ have the condition. The test correctly detects the condition in $36$ of them. It gives a false positive in $8$ healthy patients. How many patients test NEGATIVE in total?',
              hint: 'Healthy patients $= 200 - 40 = 160$. Healthy test negative $= 160 - 8 = 152$. Sick test negative $= 40 - 36 = 4$. Total negative $= 152 + 4$.',
              answer: '156 patients',
              explanation:
                'Sick negative $= 4$. Healthy negative $= 152$. Total negative $= 4 + 152 = 156$.',
            },
            {
              id: '16.1-ex3-q2',
              number: 2,
              question:
                'From a two-way table of $120$ members, $70$ are adults and $50$ are juniors. $42$ adults play tennis. A member is chosen at random. What is the probability that the member is an ADULT who DOES NOT play tennis?',
              hint: 'Adults not playing tennis $= 70 - 42 = 28$. Probability $= \\frac{28}{120}$.',
              answer: '7/30 (or 28/120)',
              explanation:
                'Adult non-tennis players $= 28$. $P = \\frac{28}{120} = \\frac{7}{30}$.',
            },
            {
              id: '16.1-ex3-q3',
              number: 3,
              question:
                'In a survey, the probability of choosing a student who is in Year 7 AND plays an instrument is $\\frac{1}{5}$. If there are $150$ students in the survey, how many students fit both criteria?',
              hint: 'Multiply $\\frac{1}{5}$ by $150$.',
              answer: '30 students',
              explanation: '$\\frac{1}{5} \\times 150 = 30$ students.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 16.2 Dual and compound bar charts
    // -------------------------------------------------------------------------
    {
      id: '16.2',
      subtopicNumber: '16.2',
      title: 'Dual and compound bar charts',
      type: 'lesson',
      steps: [
        {
          id: '16.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Comparing Sets of Data: Side-by-Side vs Stacked',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Comparing Boys vs Girls or Term 1 vs Term 2',
              scenario:
                'Suppose we want to compare how many boys and girls play different sports. A single bar chart can only show one group. But a DUAL BAR CHART places two bars side-by-side for each sport (blue for boys, orange for girls). A COMPOUND (STACKED) BAR CHART stacks one category on top of the other to show both the individual breakdown AND the combined total!',
              takeaway:
                'Key differences:\n- Dual Bar Chart: Two distinct bars side-by-side with equal gaps between categories. Easy to compare individual sub-groups directly.\n- Compound (Stacked) Bar Chart: A single bar split into colored sections. Easy to see the TOTAL height and the proportion of each part.\n- Both MUST include a CLEAR KEY (legend), equal bar widths, and a numbered vertical frequency scale starting at 0.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Dual Bar Chart',
                  definition: 'A chart with pairs of bars side-by-side to compare two groups across the same categories.',
                  example: 'Comparing 2023 sales vs 2024 sales for each month.',
                },
                {
                  term: 'Compound Bar Chart (Stacked)',
                  definition: 'A chart where bars are divided into segments stacked vertically to show parts of a total.',
                  example: 'A bar of height 20 showing 12 boys (bottom) and 8 girls (top).',
                },
                {
                  term: 'Key (Legend)',
                  definition: 'A visual guide explaining what each color or shading pattern represents.',
                  example: 'Blue = Boys, Pink = Girls.',
                },
              ],
            },
          ],
        },
        {
          id: '16.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Reading of Dual & Compound Charts',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\nIn a dual bar chart comparing school houses (Red vs Blue):\n- House Red scored: Quiz $14$, Sports $22$, Art $18$\n- House Blue scored: Quiz $18$, Sports $16$, Art $20$\n(a) In which event did House Red have the greatest lead over House Blue?\n(b) What was the total score of House Blue across all 3 events?\n(c) In a compound bar chart, what would be the total height of the Sports bar?',
                context: 'Reading and comparing values from dual and compound bar representations',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Compare leads in each event',
                    content:
                      '- Quiz: Blue led by $18 - 14 = 4$\n- Sports: Red led by $22 - 16 = 6$\n- Art: Blue led by $20 - 18 = 2$\nHouse Red had its greatest lead in Sports (lead of 6 points).',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Total score for House Blue',
                    content:
                      'Add all blue bars:\n$\\text{Total Blue} = 18 + 16 + 20 = 54$ points.',
                    mathFormula: '18 + 16 + 20 = 54',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Total height of Sports bar in compound chart',
                    content:
                      'In a compound stacked chart, Red ($22$) and Blue ($16$) are stacked together:\n$\\text{Total height} = 22 + 16 = 38$ units.',
                    mathFormula: '22 + 16 = 38',
                  },
                ],
                finalAnswer: '(a) Sports (by 6 points); (b) 54 points; (c) 38 units',
              },
            },
          ],
        },
        {
          id: '16.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Reading Stacked Segment Values from the Axis Directly',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Reading the top of a stacked segment as its value',
                wrongWay: 'If the top segment goes from 12 to 20, saying its value is 20',
                whyWrong:
                  'The bottom segment starts at 0 and goes to 12. The top segment sits on top of it from 12 to 20. Its value is the DIFFERENCE: $20 - 12 = 8$, NOT 20!',
                correctWay:
                  'For stacked segments, calculate: $\\text{Segment Value} = \\text{Top level} - \\text{Bottom level}$.',
                proTip:
                  'Think of stacked blocks: a block placed on a table starts at table height, not at the floor!',
                memoryHook: 'Top minus bottom gives the segment size!',
              },
            },
          ],
        },
        {
          id: '16.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Read heights from dual and compound charts.',
            },
          ],
          questions: [
            {
              id: '16.2-ex1-q1',
              number: 1,
              question: 'In a dual bar chart, Bar A is height $15$ and Bar B is height $23$. What is the difference between them?',
              hint: 'Subtract $23 - 15$.',
              answer: '8',
              explanation: '$23 - 15 = 8$.',
            },
            {
              id: '16.2-ex1-q2',
              number: 2,
              question: 'In a compound bar chart, the bottom segment is height $10$ and total bar height is $28$. What is the height of the top segment?',
              hint: 'Subtract $28 - 10$.',
              answer: '18',
              explanation: '$28 - 10 = 18$.',
            },
            {
              id: '16.2-ex1-q3',
              number: 3,
              question: 'Why must every dual bar chart include a key (legend)?',
              hint: 'How would a reader know which bar is which?',
              answer: 'To identify what each bar color represents',
              explanation: 'Without a key, the reader cannot tell which bar corresponds to which group.',
            },
          ],
        },
        {
          id: '16.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Compare seasonal sales, sports participation, and exam results on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16.2-ex2-q1',
              number: 1,
              question:
                'A dual bar chart shows shoe sales in Winter vs Summer: Boots (Winter: $120$, Summer: $10$), Sandals (Winter: $5$, Summer: $140$). What is the total number of footwear items sold in Summer?',
              hint: 'Add Summer sales: $10 + 140$.',
              answer: '150 items',
              explanation: '$10 + 140 = 150$ items.',
            },
            {
              id: '16.2-ex2-q2',
              number: 2,
              question:
                'In a compound chart showing visitors to a zoo: on Saturday, there were $450$ Adults and $350$ Children. What is the total height of the Saturday bar?',
              hint: 'Add $450 + 350$.',
              answer: '800 visitors',
              explanation: '$450 + 350 = 800$ visitors.',
            },
            {
              id: '16.2-ex2-q3',
              number: 3,
              question:
                'On Friday, the total height was $600$ visitors, of which $380$ were adults. What percentage of Friday visitors were adults?',
              hint: '$\\frac{380}{600} \\times 100$. (Divide $38$ by $60$).',
              answer: '63.3% (approx)',
              explanation: '$\\frac{380}{600} = \\frac{19}{30} \\approx 63.33\\%$.',
            },
          ],
        },
        {
          id: '16.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Evaluate advantages and draw conclusions from chart comparisons on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16.2-ex3-q1',
              number: 1,
              question:
                'When is a compound bar chart PREFERRED over a dual bar chart?',
              hint: 'Think about when total size is the most important comparison.',
              answer: 'When comparing total amounts across categories as well as the internal breakdown',
              explanation:
                'Compound bar charts clearly show the overall total height for each category while still showing the component shares.',
            },
            {
              id: '16.2-ex3-q2',
              number: 2,
              question:
                'A dual bar chart compares boys and girls in 4 music clubs. Across all 4 clubs, the total boys bar height is $92$ and the total girls bar height is $108$. What percentage of all club members are girls?',
              hint: 'Total members $= 92 + 108 = 200$. Girls $= 108$. Fraction $= \\frac{108}{200}$.',
              answer: '54%',
              explanation: 'Total $= 200$. $\\frac{108}{200} = \\frac{54}{100} = 54\\%$.',
            },
            {
              id: '16.2-ex3-q3',
              number: 3,
              question:
                'Explain why a bar chart vertical axis that starts at $50$ instead of $0$ can be misleading.',
              hint: 'Does it exaggerate the visual difference between bars?',
              answer: 'It truncates the axis and exaggerates small differences, making bars look artificially different',
              explanation:
                'Starting at 50 instead of 0 distorts visual proportions: a bar of 52 looks tiny compared to 54, even though they differ by only 4%.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 16.3 Pie charts and waffle diagrams
    // -------------------------------------------------------------------------
    {
      id: '16.3',
      subtopicNumber: '16.3',
      title: 'Pie charts and waffle diagrams',
      type: 'lesson',
      steps: [
        {
          id: '16.3-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Slicing the Circle: $360^\\circ$ Proportions',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Sharing a Family Pizza & 100-Square Waffles',
              scenario:
                'A full circle has $360^\\circ$. A pie chart divides this $360^\\circ$ pie into slices where each slice angle is proportional to the category frequency! A WAFFLE DIAGRAM does the same thing on a $10 \\times 10$ square grid ($100$ small squares total): every single square represents exactly $1\\%$.',
              takeaway:
                'Calculating Sector Angles for Pie Charts:\n$$\\text{Sector Angle} = \\frac{\\text{Frequency}}{\\text{Total Frequency}} \\times 360^\\circ$$\nShortcut: Find the "degrees per item" by calculating $\\frac{360^\\circ}{\\text{Total}}$. Then multiply each frequency by that degrees-per-item multiplier!\nWaffle diagrams: Each shaded square out of $100$ equals $1\\%$.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Pie Chart',
                  definition: 'A circular chart divided into sectors where each sector angle represents a proportion of the whole ($360^\\circ$).',
                  example: 'A half circle is $180^\\circ = 50\\%$. A quarter circle is $90^\\circ = 25\\%$.',
                },
                {
                  term: 'Sector Angle',
                  definition: 'The angle between the two radii of a slice at the center of the pie chart.',
                  example: 'Angle for frequency 5 out of 20: $\\frac{5}{20} \\times 360^\\circ = 90^\\circ$.',
                },
                {
                  term: 'Waffle Diagram',
                  definition: 'A 10x10 square grid with 100 squares used to display percentage proportions intuitively.',
                  example: '35 shaded squares represents $35\\%$.',
                },
              ],
            },
          ],
        },
        {
          id: '16.3-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Sector Angle First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n$36$ students chose their favourite subject:\n- Maths: $12$ students\n- Science: $9$ students\n- English: $10$ students\n- Art: $5$ students\n(a) Calculate the sector angle for each subject in a pie chart.\n(b) Check that the angles sum to $360^\\circ$.\n(c) In a waffle diagram, how many squares would be shaded for Maths?',
                context: 'Converting frequencies to sector angles and percentage waffle grids',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Find degrees per student',
                    content:
                      'Total students $= 36$.\nDegrees per student $= \\frac{360^\\circ}{36} = 10^\\circ$ per student.',
                    mathFormula: '\\frac{360^\\circ}{36} = 10^\\circ \\text{ per student}',
                  },
                  {
                    stepNumber: 2,
                    label: 'Multiply each frequency by 10°',
                    content:
                      '- Maths: $12 \\times 10^\\circ = 120^\\circ$\n- Science: $9 \\times 10^\\circ = 90^\\circ$\n- English: $10 \\times 10^\\circ = 100^\\circ$\n- Art: $5 \\times 10^\\circ = 50^\\circ$',
                    mathFormula: '120^\\circ, \\; 90^\\circ, \\; 100^\\circ, \\; 50^\\circ',
                  },
                  {
                    stepNumber: 3,
                    label: 'Check the sum',
                    content:
                      '$120^\\circ + 90^\\circ + 100^\\circ + 50^\\circ = 360^\\circ$ (Check passes!).',
                  },
                  {
                    stepNumber: 4,
                    label: 'Part (c): Waffle diagram squares for Maths',
                    content:
                      'Fraction $= \\frac{12}{36} = \\frac{1}{3} = 33.3\\% \\implies 33$ squares (or $33\\frac{1}{3}$).',
                  },
                ],
                finalAnswer: '(a) Maths: 120°, Science: 90°, English: 100°, Art: 50°; (b) Sum = 360°; (c) 33 squares',
              },
            },
          ],
        },
        {
          id: '16.3-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Thinking a Bigger Slice Means a Bigger Total',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Comparing actual counts across two different pie charts',
                wrongWay: 'Saying School A has more boys than School B because School A\'s pie slice has a bigger angle',
                whyWrong:
                  'A pie chart only shows PROPORTIONS, not total numbers! $50\\%$ of a school of 100 is 50 boys. $40\\%$ of a school of 1000 is 400 boys. School B has far more boys despite the smaller slice angle!',
                correctWay:
                  'You cannot compare raw amounts across different pie charts unless you know the TOTAL sample size of each chart.',
                proTip:
                  'Always write the total sample size $N$ in the title of every pie chart.',
                memoryHook: 'Angles show percentages, not population!',
              },
            },
          ],
        },
        {
          id: '16.3-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Calculate angles and interpret waffle squares.',
            },
          ],
          questions: [
            {
              id: '16.3-ex1-q1',
              number: 1,
              question: 'What is the sector angle for a category that represents exactly HALF ($50\\%$) of a pie chart?',
              hint: 'Half of $360^\\circ$.',
              answer: '180°',
              explanation: '$\\frac{1}{2} \\times 360^\\circ = 180^\\circ$.',
            },
            {
              id: '16.3-ex1-q2',
              number: 2,
              question: 'In a survey of $60$ people, what angle represents $1$ person?',
              hint: 'Divide $360^\\circ$ by $60$.',
              answer: '6° per person',
              explanation: '$360^\\circ \\div 60 = 6^\\circ$.',
            },
            {
              id: '16.3-ex1-q3',
              number: 3,
              question: 'In a 100-square waffle diagram, $28$ squares are colored green. What percentage is green?',
              hint: 'Each square is $1\\%$.',
              answer: '28%',
              explanation: '28 squares out of 100 is $28\\%$.',
            },
          ],
        },
        {
          id: '16.3-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Calculate pie chart slices for household budgets, energy sources, and student transport on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16.3-ex2-q1',
              number: 1,
              question:
                'A monthly family budget pie chart has a $90^\\circ$ sector for Food. If total monthly spending is $£2400$, how much money is spent on Food?',
              hint: '$90^\\circ$ is a quarter of $360^\\circ$. Divide $£2400$ by 4.',
              answer: '£600',
              explanation: '$\\frac{90}{360} = \\frac{1}{4}$. $\\frac{1}{4} \\times £2400 = £600$.',
            },
            {
              id: '16.3-ex2-q2',
              number: 2,
              question:
                'In an election survey of $180$ voters, Candidate A received $45$ votes. What sector angle should represent Candidate A on a pie chart?',
              hint: 'Degrees per voter $= 360 \\div 180 = 2^\\circ$. Multiply $45$ by $2^\\circ$.',
              answer: '90°',
              explanation: '$\\frac{45}{180} \\times 360^\\circ = \\frac{1}{4} \\times 360^\\circ = 90^\\circ$.',
            },
            {
              id: '16.3-ex2-q3',
              number: 3,
              question:
                'A country generates electricity from: Gas ($40\\%$), Renewables ($35\\%$), and Nuclear ($25\\%$). What is the sector angle for Renewables?',
              hint: '$35\\%$ of $360^\\circ = 0.35 \\times 360$.',
              answer: '126°',
              explanation: '$0.35 \\times 360^\\circ = 126^\\circ$.',
            },
          ],
        },
        {
          id: '16.3-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 reverse angle and pie chart comparison puzzles on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16.3-ex3-q1',
              number: 1,
              question:
                'On a pie chart, a sector of angle $72^\\circ$ represents $16$ students. How many students took part in the survey in TOTAL?',
              hint: 'Fraction of whole $= \\frac{72}{360} = \\frac{1}{5}$. If $\\frac{1}{5}$ is $16$, what is the whole?',
              answer: '80 students',
              explanation:
                '$\\frac{72}{360} = \\frac{1}{5}$. Total $= 5 \\times 16 = 80$ students.',
            },
            {
              id: '16.3-ex3-q2',
              number: 2,
              question:
                'A pie chart has three sectors: $A = 2x^\\circ$, $B = 3x^\\circ$, and $C = 4x^\\circ$. Find the value of $x$ and the size of angle $B$.',
              hint: 'Sum of angles: $2x + 3x + 4x = 9x = 360^\\circ$.',
              answer: 'x = 40°, Angle B = 120°',
              explanation:
                '$9x = 360^\\circ \\implies x = 40^\\circ$. Angle $B = 3(40^\\circ) = 120^\\circ$.',
            },
            {
              id: '16.3-ex3-q3',
              number: 3,
              question:
                'Explain ONE key limitation of using a pie chart compared to a bar chart when there are 15 different categories.',
              hint: 'How easy is it to distinguish 15 thin slivers and read their angles?',
              answer: 'With many categories, the slices become too thin and crowded to read or compare accurately',
              explanation:
                'Pie charts work best for 3 to 6 categories. With 15 slices, comparing angles by eye becomes nearly impossible without numerical labels.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 16.4 Infographics
    // -------------------------------------------------------------------------
    {
      id: '16.4',
      subtopicNumber: '16.4',
      title: 'Infographics',
      type: 'lesson',
      steps: [
        {
          id: '16.4-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Visual Storytelling & Spotting Misleading Graphics',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Newspaper Graphics & Giant Pictograms',
              scenario:
                'Infographics combine pictures, icons, and charts to tell a data story at a glance. But beware! Designers sometimes trick viewers: if sales double, a designer might make a money-bag icon twice as tall AND twice as wide. That makes the AREA look FOUR TIMES as big ($2 \\times 2 = 4$), misleading the reader into thinking sales quadrupled!',
              takeaway:
                'Critical data literacy checks for infographics:\n1. Look at the numbers, not just the picture sizes!\n2. Check if the vertical scale starts at 0 or is cut off (truncated).\n3. In pictograms, the symbols must be identical in size (only the COUNT of symbols should change).\n4. Are the proportions geometrically true to the data?',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Infographic',
                  definition: 'A visual presentation combining charts, icons, and minimal text to explain complex data clearly and engagingly.',
                  example: 'A poster showing global ocean plastic pollution with icons.',
                },
                {
                  term: 'Pictogram Scaling Trap',
                  definition: 'Doubling both height and width of an icon quadruples its visual area, giving a falsely exaggerated impression.',
                  example: 'Scaling a circle diameter by 2 multiplies its visual area by 4.',
                },
                {
                  term: 'Truncated Axis',
                  definition: 'A graph axis that does not start at 0, making tiny percentage differences look dramatic.',
                  example: 'Starting an axis at 98% makes 98.2% and 99.1% look huge.',
                },
              ],
            },
          ],
        },
        {
          id: '16.4-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Infographic Audit First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\nAn infographic compares mobile phone sales between Company A ($10\\text{ million}$) and Company B ($20\\text{ million}$):\n(a) Company B sold twice as many phones. If Company A\'s phone icon is $2\\text{ cm}$ tall by $1\\text{ cm}$ wide (area $2\\text{ cm}^2$), and Company B draws their icon $4\\text{ cm}$ tall by $2\\text{ cm}$ wide, what is the visual area of Company B\'s icon?\n(b) Why is this graphic misleading?\n(c) How should the designer show this data fairly in a pictogram?',
                context: 'Evaluating visual proportionality in pictograms and icons',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Calculate visual area of Company B icon',
                    content:
                      'Area of B icon $= 4\\text{ cm} \\times 2\\text{ cm} = 8\\text{ cm}^2$.\nRatio of areas $= \\frac{8}{2} = 4$ times larger!',
                    mathFormula: '4 \\times 2 = 8\\text{ cm}^2 \\quad (4 \\times \\text{ larger area})',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Explain why it is misleading',
                    content:
                      'The real sales only doubled ($2\\times$), but the visual graphic looks FOUR times ($4\\times$) as large because both dimensions were doubled. Readers perceive area, not just height.',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): How to show it fairly',
                    content:
                      'Keep all icons the SAME size: use $1$ standard icon for $10\\text{ million}$ and $2$ identical icons for $20\\text{ million}$, or use a standard bar chart starting at $0$.',
                  },
                ],
                finalAnswer: '(a) 8 cm² (4 times the area); (b) Area quadruples when height doubles; (c) Use 2 identical equal-sized icons',
              },
            },
          ],
        },
        {
          id: '16.4-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Ignoring Axis Labels and Scales',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Trusting the visual headline without checking the scale numbers',
                wrongWay: 'Assuming Company X crushed Company Y because the bar is 5 times taller',
                whyWrong:
                  'If the axis starts at $95\\%$ and ends at $100\\%$, a score of $96\\%$ and $99\\%$ will look like a massive chasm, even though they differ by only $3\\%$!',
                correctWay:
                  'Always inspect the axis numbers and verify where the scale begins.',
                proTip:
                  'Look for the jagged break symbol on the vertical axis (lightning zig-zag) which warns you the scale does not start at 0.',
                memoryHook: 'Check the numbers first; don\'t just trust the picture!',
              },
            },
          ],
        },
        {
          id: '16.4-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Identify fair vs misleading features in graphics.',
            },
          ],
          questions: [
            {
              id: '16.4-ex1-q1',
              number: 1,
              question: 'In a fair pictogram, should all symbols representing the same unit be the same size?',
              hint: 'Does changing the symbol size distort the count?',
              answer: 'Yes, all symbols must be identical in size',
              explanation: 'Only the number of symbols should change, not their dimensions.',
            },
            {
              id: '16.4-ex1-q2',
              number: 2,
              question: 'If one book symbol in a pictogram represents $5$ library books, how many books do $4$ symbols represent?',
              hint: 'Multiply $4 \\times 5$.',
              answer: '20 books',
              explanation: '$4 \\times 5 = 20$ books.',
            },
            {
              id: '16.4-ex1-q3',
              number: 3,
              question: 'What is the name for a bar chart axis that starts at $100$ instead of $0$?',
              hint: 'It has been cut off at the bottom.',
              answer: 'Truncated axis (or broken axis)',
              explanation: 'An axis that does not start at 0 is called a truncated or broken axis.',
            },
          ],
        },
        {
          id: '16.4-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Audit real-world infographic claims and pictograms on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16.4-ex2-q1',
              number: 1,
              question:
                'An infographic on tree planting shows an oak tree icon representing $50$ trees. The council planted $225$ trees. How many whole icons and what fraction of an icon should be drawn?',
              hint: 'Divide $225$ by $50$: $225 = 4 \\times 50 + 25$.',
              answer: '4.5 icons (4 whole icons and 1 half icon)',
              explanation: '$225 \\div 50 = 4.5$ icons.',
            },
            {
              id: '16.4-ex2-q2',
              number: 2,
              question:
                'A social media graphic shows a headline "Prices Soar!" with a bar that appears $4$ times taller than last month. Looking at the numbers, last month was $£100$ and this month is $£103$. What did the designer do to make the change look $4$ times bigger?',
              hint: 'Where did the vertical axis start?',
              answer: 'Truncated the vertical axis (e.g. starting the axis at £99 instead of £0)',
              explanation:
                'Starting the axis near 99 makes a difference of £3 (from 100 to 103) appear 4 times taller visually.',
            },
            {
              id: '16.4-ex2-q3',
              number: 3,
              question:
                'A recycling infographic uses a 10x10 waffle grid to show waste diverted from landfill: $64$ squares are blue (recycled), $18$ are green (composted), and the rest are grey (landfill). What percentage went to landfill?',
              hint: 'Subtract $64 + 18$ from $100$.',
              answer: '18%',
              explanation: '$100 - (64 + 18) = 100 - 82 = 18\\%$.',
            },
          ],
        },
        {
          id: '16.4-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Evaluate statistical honesty and multi-dimensional scaling in media graphics on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16.4-ex3-q1',
              number: 1,
              question:
                'A 3D bar chart has bars drawn as 3D cubes. If sales triple ($k = 3$) and the cube\'s dimensions all triple, by what factor does the 3D VOLUME of the bar increase?',
              hint: 'Calculate $k^3 = 3^3$.',
              answer: '27 times larger (3³ = 27)',
              explanation:
                'In 3D representations, tripling edge lengths makes the volume $3^3 = 27$ times larger, creating extreme visual exaggeration!',
            },
            {
              id: '16.4-ex3-q2',
              number: 2,
              question:
                'Explain why 3D pie charts tilted backwards at an angle can mislead the human eye about slice sizes.',
              hint: 'Which slice appears closer to the viewer and looks artificially larger?',
              answer: 'Perspective foreshortening makes slices in the front look wider and larger than identical slices in the back',
              explanation:
                'Tilting a pie chart distorts angles: sectors at the front take up more pixel area than sectors at the rear.',
            },
            {
              id: '16.4-ex3-q3',
              number: 3,
              question:
                'Write down THREE criteria that make an infographic statistically honest and reliable.',
              hint: 'Think about axes, scales, source, and consistency.',
              answer: 'Zero-based axes, proportional symbols/areas, and clearly cited data sources with sample sizes',
              explanation:
                'A reliable infographic starts axes at 0, keeps symbols to scale, cites the original data source, and includes raw sample sizes.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 16.5 Representing data
    // -------------------------------------------------------------------------
    {
      id: '16.5',
      subtopicNumber: '16.5',
      title: 'Representing data',
      type: 'lesson',
      steps: [
        {
          id: '16.5-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Choosing the Right Chart for the Job',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Choosing the Right Tool from a Toolbox',
              scenario:
                'You wouldn\'t use a hammer to turn a screw! In statistics, different data types need different charts: if you want to track temperature changes over 24 hours, use a LINE GRAPH (time series). If you want to compare favourite ice cream flavours, use a BAR CHART. If you want to show budget shares of a whole, use a PIE CHART.',
              takeaway:
                'Chart Selection Guide:\n- Line Graph: Continuous data changing over TIME (trends, temperatures, growth).\n- Bar Chart: Discrete categories (colours, brands, sports).\n- Pie Chart: Proportions of a whole (best for 3 to 6 categories).\n- Frequency Table / Grouped Tally: Large numerical datasets organized in equal class intervals.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Discrete Data',
                  definition: 'Data that can only take specific separate values (usually counted in whole numbers).',
                  example: 'Number of brothers, shoe size.',
                },
                {
                  term: 'Continuous Data',
                  definition: 'Data that can take any numerical value along a scale (measured).',
                  example: 'Height, mass, temperature, time.',
                },
                {
                  term: 'Time Series Line Graph',
                  definition: 'A graph where points are plotted over chronological time and connected with straight line segments to show trends.',
                  example: 'Daily temperature graph across a week.',
                },
              ],
            },
          ],
        },
        {
          id: '16.5-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Chart Selection First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\nState the best type of chart or diagram for each scenario:\n(a) Showing how a patient\'s body temperature changes every hour from 08:00 to 20:00.\n(b) Displaying the proportions of energy generated by Coal, Gas, Solar, Wind, and Hydro.\n(c) Comparing the number of medals won by the top $6$ countries in the Olympics.',
                context: 'Matching statistical representations to data types and communication goals',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Body temperature over time',
                    content:
                      'Temperature is continuous and changes over TIME. The best chart is a LINE GRAPH (time series).',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Proportions of energy sources',
                    content:
                      'We have $5$ distinct categories that sum to a whole ($100\\%$). The best chart is a PIE CHART (or 100% compound bar chart).',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Comparing medals across countries',
                    content:
                      'Countries are separate discrete categories and we want to compare counts directly. The best chart is a BAR CHART.',
                  },
                ],
                finalAnswer: '(a) Line graph; (b) Pie chart; (c) Bar chart',
              },
            },
          ],
        },
        {
          id: '16.5-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Drawing a Continuous Line Graph for Discrete Categories',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Connecting bars with lines for discrete categories like shoe colours',
                wrongWay: 'Drawing a line from "Blue shoes" to "Red shoes"',
                whyWrong:
                  'A connecting line suggests intermediate values exist between the points! There is no such thing as "halfway between blue and red shoes".',
                correctWay:
                  'Only connect points with lines when the horizontal axis is CONTINUOUS (like time, age, or distance). Use separate bars for discrete categories.',
                proTip:
                  'Leave equal gaps between bars in a bar chart to show the categories are separate and distinct.',
                memoryHook: 'Time has a line; categories have separate bars!',
              },
            },
          ],
        },
        {
          id: '16.5-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Identify data types and chart suitability.',
            },
          ],
          questions: [
            {
              id: '16.5-ex1-q1',
              number: 1,
              question: 'Is "number of students in a class" discrete or continuous data?',
              hint: 'Can you have 24.3 students?',
              answer: 'Discrete (counted in whole numbers)',
              explanation: 'People are counted in whole numbers, so the data is discrete.',
            },
            {
              id: '16.5-ex1-q2',
              number: 2,
              question: 'Is "running time for a 100m race" discrete or continuous data?',
              hint: 'Can time be measured to fractions of a second (e.g. 12.45s)?',
              answer: 'Continuous (measured on a continuous scale)',
              explanation: 'Time can take any value along a scale, so it is continuous.',
            },
            {
              id: '16.5-ex1-q3',
              number: 3,
              question: 'Which chart best displays changes in monthly rainfall over a calendar year?',
              hint: 'Time series data changing month by month.',
              answer: 'Line graph (or vertical rainfall bar chart)',
              explanation: 'Line graphs and monthly bar charts clearly reveal seasonal trends.',
            },
          ],
        },
        {
          id: '16.5-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Select and justify data representations for school science experiments and business reports on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16.5-ex2-q1',
              number: 1,
              question:
                'A science class measures the cooling temperature of a beaker of hot water every $2\\text{ minutes}$ for $20\\text{ minutes}$. What type of chart should they draw, and what goes on each axis?',
              hint: 'Continuous measured data over time.',
              answer: 'Line graph: Time on horizontal x-axis, Temperature on vertical y-axis',
              explanation:
                'Line graph shows cooling curves best: independent variable (Time) on horizontal axis, dependent variable (Temperature) on vertical axis.',
            },
            {
              id: '16.5-ex2-q2',
              number: 2,
              question:
                'A school library records book genres borrowed: Fiction ($450$), Non-fiction ($200$), Graphic Novels ($350$). Give TWO appropriate visual ways to present this data.',
              hint: 'Discrete categories with counts.',
              answer: 'Bar chart or Pie chart',
              explanation:
                'A bar chart compares the three genre frequencies directly; a pie chart shows the proportion of each genre relative to the total (1000 books).',
            },
            {
              id: '16.5-ex2-q3',
              number: 3,
              question:
                'A doctor measures the heights of $100$ seven-year-olds. The heights range from $112\\text{ cm}$ to $138\\text{ cm}$. How should this data be organized before plotting?',
              hint: 'Use grouped intervals.',
              answer: 'Grouped frequency table with equal class intervals (e.g. 110-115, 115-120...)',
              explanation:
                'Grouping continuous data into equal class intervals summarizes the distribution into manageable bars.',
            },
          ],
        },
        {
          id: '16.5-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Evaluate the statistical strengths and weaknesses of different representations on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16.5-ex3-q1',
              number: 1,
              question:
                'Give ONE advantage and ONE disadvantage of grouping raw data into class intervals (e.g. 0-9, 10-19, 20-29).',
              hint: 'Advantage: summary and pattern. Disadvantage: losing individual numbers.',
              answer: 'Advantage: easily reveals the shape/distribution. Disadvantage: original exact individual values are lost',
              explanation:
                'Grouping makes large data easy to see and graph, but you can no longer find the exact individual values or exact mean from the table.',
            },
            {
              id: '16.5-ex3-q2',
              number: 2,
              question:
                'Explain why a pie chart would be UNSUITABLE to display the daily closing stock prices of a company over $90$ consecutive days.',
              hint: 'Stock prices represent a trend over time, not parts of a $360^\\circ$ whole!',
              answer: 'Pie charts show parts of a whole, not chronological trends; 90 slices would be unreadable',
              explanation:
                'Stock prices must show chronological trajectory over time (line graph). Slicing a pie into 90 daily wedges is meaningless and illegible.',
            },
            {
              id: '16.5-ex3-q3',
              number: 3,
              question:
                'What is the difference between a histogram and a standard bar chart?',
              hint: 'Think about whether there are gaps between bars and the type of data (continuous vs discrete).',
              answer: 'Bar charts have gaps for discrete categories; histograms have touching bars for continuous grouped data',
              explanation:
                'In a bar chart, bars do not touch because categories are separate. In a histogram, bars touch continuously because the underlying variable (e.g. time, height) is continuous.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 16.6 Using statistics
    // -------------------------------------------------------------------------
    {
      id: '16.6',
      subtopicNumber: '16.6',
      title: 'Using statistics',
      type: 'lesson',
      steps: [
        {
          id: '16.6-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The 3 Averages & Range: Mean, Median, Mode',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Sharing Birthday Money & Finding the Middle',
              scenario:
                'Suppose 5 friends compare their pockets: $£2, £3, £3, £8, £14$.\n- MODE: The most popular amount ($£3$ appears twice).\n- MEDIAN: The middle person when lined up in order ($£3$).\n- MEAN: Put all money in one pot ($£30$) and share equally among the 5 people ($£30 \\div 5 = £6$).\n- RANGE: How spread out the values are: highest minus lowest ($£14 - £2 = £12$).',
              takeaway:
                'Summary of statistical measures:\n- Mode: Most common value (useful for shoe sizes, favourite colours).\n- Median: Middle value of ordered data (best when extreme outliers exist).\n- Mean: $\\frac{\\text{Sum of all values}}{\\text{Total number of values}}$ (best for equal sharing, but pulled by extreme outliers).\n- Range: $\\text{Highest} - \\text{Lowest}$ (measures consistency / spread, NOT an average!).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Mean',
                  definition: 'The arithmetic average: add all values together and divide by how many values there are.',
                  example: 'Mean of $4, 5, 9$: $(4+5+9) \\div 3 = 18 \\div 3 = 6$.',
                },
                {
                  term: 'Median',
                  definition: 'The middle number when data is written in order from smallest to largest.',
                  example: 'For $2, 5, 7, 9, 11$, median is 7. If two middle numbers, find their midpoint.',
                },
                {
                  term: 'Mode',
                  definition: 'The most frequently occurring number or category.',
                  example: 'In $3, 4, 4, 7, 8$, mode is 4.',
                },
                {
                  term: 'Range',
                  definition: 'The difference between the maximum and minimum values (measures spread, not average).',
                  example: 'For $3, 7, 12$, range $= 12 - 3 = 9$.',
                },
              ],
            },
          ],
        },
        {
          id: '16.6-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Averages & Outlier Impact First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\nGiven the test scores: $4, 6, 7, 7, 8, 10, 28$\n(a) Find the mode, median, mean, and range.\n(b) Which score is an outlier?\n(c) Which average (mean or median) best represents typical performance? Explain.',
                context: 'Calculating all 4 measures and evaluating the effect of outliers',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Calculate Mode and Range',
                    content:
                      '- Mode: The number $7$ appears twice (most frequent) $\\implies 7$.\n- Range: Maximum minus minimum: $28 - 4 = 24$.',
                    mathFormula: '\\text{Mode} = 7, \\quad \\text{Range} = 28 - 4 = 24',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (a): Find the Median',
                    content:
                      'The 7 numbers are already in order: $4, 6, 7, \\mathbf{7}, 8, 10, 28$.\nThe middle (4th) number is $7$.',
                    mathFormula: '\\text{Median} = 7',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (a): Calculate the Mean',
                    content:
                      'Sum $= 4 + 6 + 7 + 7 + 8 + 10 + 28 = 70$.\nMean $= 70 \\div 7 = 10$.',
                    mathFormula: '\\text{Mean} = \\frac{70}{7} = 10',
                  },
                  {
                    stepNumber: 4,
                    label: 'Parts (b) & (c): Outlier impact',
                    content:
                      'The score $28$ is an outlier (far higher than all other scores).\nThe mean ($10$) is higher than 6 of the 7 scores! Therefore, the MEDIAN ($7$) is the fairest average because it is not distorted by the outlier.',
                  },
                ],
                finalAnswer: '(a) Mode = 7, Median = 7, Mean = 10, Range = 24; (b) Outlier is 28; (c) Median (7) is best',
              },
            },
          ],
        },
        {
          id: '16.6-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Finding Median Without Ordering the Numbers First',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Picking the middle number of an unsorted list',
                wrongWay: 'In 9, 2, 7, saying the median is 2 because it is in the middle',
                whyWrong:
                  'You CANNOT find the median until the numbers are sorted in order from smallest to largest! In $9, 2, 7$, $2$ is the smallest number, not the middle.',
                correctWay:
                  'Step 1: Write in order: $2, 7, 9$. Step 2: Now the middle number is $7$.',
                proTip:
                  'Always count how many numbers are in your ordered list to make sure you didn\'t accidentally drop a number!',
                memoryHook: 'Order first, middle second!',
              },
            },
          ],
        },
        {
          id: '16.6-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Find mean, median, mode, and range for simple sets.',
            },
          ],
          questions: [
            {
              id: '16.6-ex1-q1',
              number: 1,
              question: 'Find the mean of the numbers: $3, 5, 7, 9$.',
              hint: 'Add them ($24$) and divide by 4.',
              answer: '6',
              explanation: '$(3 + 5 + 7 + 9) \\div 4 = 24 \\div 4 = 6$.',
            },
            {
              id: '16.6-ex1-q2',
              number: 2,
              question: 'Find the median of the numbers: $8, 2, 5, 1, 9$.',
              hint: 'Order them first: 1, 2, 5, 8, 9. Find the middle number.',
              answer: '5',
              explanation: 'Ordered: $1, 2, 5, 8, 9$. Middle number is $5$.',
            },
            {
              id: '16.6-ex1-q3',
              number: 3,
              question: 'Find the mode and range of: $4, 6, 6, 8, 11$.',
              hint: 'Mode is most frequent; range is $11 - 4$.',
              answer: 'Mode = 6, Range = 7',
              explanation: 'Mode is $6$ (appears twice). Range is $11 - 4 = 7$.',
            },
          ],
        },
        {
          id: '16.6-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply statistics to football scores, test marks, and weather comparisons on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16.6-ex2-q1',
              number: 1,
              question:
                'A football team scored goals in 6 matches: $2, 0, 3, 1, 2, 4$. What was their mean score per match?',
              hint: 'Sum $= 2 + 0 + 3 + 1 + 2 + 4 = 12$. Divide by 6.',
              answer: '2 goals per match',
              explanation: '$12 \\div 6 = 2$ goals per match.',
            },
            {
              id: '16.6-ex2-q2',
              number: 2,
              question:
                'Find the MEDIAN of these six heights in cm: $140, 142, 145, 149, 150, 156$.',
              hint: 'Even number of values: find the midpoint between the 3rd and 4th values ($145$ and $149$).',
              answer: '147 cm',
              explanation: 'Midpoint of $145$ and $149$: $\\frac{145 + 149}{2} = 147\\text{ cm}$.',
            },
            {
              id: '16.6-ex2-q3',
              number: 3,
              question:
                'A shoe shop manager wants to order stock for next month. Which average (mean, median, or mode) is MOST useful for deciding which shoe sizes to buy?',
              hint: 'Which average tells the most popular shoe size?',
              answer: 'Mode (the most frequently bought shoe size)',
              explanation:
                'A shoe shop must stock the sizes that people buy most often. A mean shoe size like 6.84 does not exist on the shelf!',
            },
          ],
        },
        {
          id: '16.6-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 reverse average and distribution comparison puzzles on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16.6-ex3-q1',
              number: 1,
              question:
                'Four students have a mean test score of $15$. A fifth student scores $20$. What is the NEW mean score of all five students?',
              hint: 'Total of first 4 is $4 \\times 15 = 60$. Add $20$: $80$. Divide by 5.',
              answer: '16',
              explanation:
                'Old total $= 4 \\times 15 = 60$. New total $= 60 + 20 = 80$. New mean $= 80 \\div 5 = 16$.',
            },
            {
              id: '16.6-ex3-q2',
              number: 2,
              question:
                'Five numbers have mode $4$, median $6$, and range $8$. If the smallest number is $4$, what are the five numbers in order?',
              hint: 'Smallest is 4. Since mode is 4, the second number is also 4. Median (3rd number) is 6. Largest is $4 + 8 = 12$. The 4th number can be any number between 6 and 12.',
              answer: '4, 4, 6, 7, 12 (or 4, 4, 6, x, 12 where 6 ≤ x < 12)',
              explanation:
                'First two numbers must be $4$ (mode and minimum). Middle number is $6$. Largest is $4 + 8 = 12$. A valid set is $4, 4, 6, 7, 12$.',
            },
            {
              id: '16.6-ex3-q3',
              number: 3,
              question:
                'Class A has mean score $72$ and range $6$. Class B has mean score $72$ and range $24$. Compare the performance of the two classes.',
              hint: 'Both have the same average, but look at the spread (range).',
              answer: 'Both performed equally on average, but Class A was much more consistent (lower range)',
              explanation:
                'Both have mean 72, but Class A\'s small range of 6 means students scored very similarly (consistent), while Class B had high variation from low to high scores.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Unit 16 End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '16-test',
      subtopicNumber: '16',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '16-test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Part A: Basic Recall & Calculation',
          badge: 'Test: Part A (Basic Recall)',
          blocks: [
            {
              type: 'text',
              content:
                'Answer all 3 mixed recall questions covering Unit 16 on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16-test-q1',
              number: 1,
              question: 'Find the mean of: $2, 4, 7, 8, 9$.',
              hint: 'Sum is $30$. Divide by 5.',
              answer: '6',
              explanation: '$(2 + 4 + 7 + 8 + 9) \\div 5 = 30 \\div 5 = 6$.',
            },
            {
              id: '16-test-q2',
              number: 2,
              question: 'What is the sector angle for a slice representing $25\\%$ of a pie chart?',
              hint: 'A quarter of $360^\\circ$.',
              answer: '90°',
              explanation: '$\\frac{1}{4} \\times 360^\\circ = 90^\\circ$.',
            },
            {
              id: '16-test-q3',
              number: 3,
              question: 'In the set $3, 5, 5, 7, 12$, what is the range?',
              hint: 'Highest minus lowest: $12 - 3$.',
              answer: '9',
              explanation: '$12 - 3 = 9$.',
            },
          ],
        },
        {
          id: '16-test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Part B: Real-World Applications',
          badge: 'Test: Part B (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply data interpretation skills to two-way tables, pie charts, and averages on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16-test-q4',
              number: 1,
              question:
                'In a survey of $120$ sports fans, $40$ support Basketball. What sector angle should represent Basketball on a pie chart?',
              hint: 'Fraction is $\\frac{40}{120} = \\frac{1}{3}$. Multiply $\\frac{1}{3}$ by $360^\\circ$.',
              answer: '120°',
              explanation: '$\\frac{40}{120} \\times 360^\\circ = \\frac{1}{3} \\times 360^\\circ = 120^\\circ$.',
            },
            {
              id: '16-test-q5',
              number: 2,
              question:
                'A two-way table shows bus pass holders: $35$ girls and $45$ boys. If $20$ girls do NOT have a pass, and $15$ boys DO have a pass, how many students in total HAVE a bus pass?',
              hint: 'Girls with pass $= 35 - 20 = 15$. Boys with pass $= 15$. Total $= 15 + 15$.',
              answer: '30 students',
              explanation: 'Girls with pass $= 15$, boys with pass $= 15$. Total $= 30$.',
            },
            {
              id: '16-test-q6',
              number: 3,
              question:
                'The daily high temperatures over 5 days were: $14^\\circ\\text{C}, 16^\\circ\\text{C}, 15^\\circ\\text{C}, 24^\\circ\\text{C}, 16^\\circ\\text{C}$. What is the MEDIAN temperature?',
              hint: 'Order first: 14, 15, 16, 16, 24. Find the middle number.',
              answer: '16°C',
              explanation: 'Ordered: $14, 15, 16, 16, 24$. Middle value is $16^\\circ\\text{C}$.',
            },
          ],
        },
        {
          id: '16-test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Part C: Reasoning & Challenge',
          badge: 'Test: Part C (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Demonstrate your reasoning on missing statistics, data ethics, and distribution comparison on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '16-test-q7',
              number: 1,
              question:
                'Six numbers have a mean of $10$. When one number is removed, the mean of the remaining five numbers becomes $9$. What number was removed?',
              hint: 'Sum of 6 numbers is $6 \\times 10 = 60$. Sum of 5 numbers is $5 \\times 9 = 45$. Subtract.',
              answer: '15',
              explanation:
                'Sum of 6 numbers $= 60$. Sum of 5 numbers $= 45$. Removed number $= 60 - 45 = 15$.',
            },
            {
              id: '16-test-q8',
              number: 2,
              question:
                'A company reports: "Our average employee salary is $£75,000$!" However, the managing director earns $£500,000$ while the other 9 workers earn $£27,000$ to $£30,000$. Explain why the mean is misleading here and which average should be quoted.',
              hint: 'Is the director\'s salary an outlier?',
              answer: 'The mean is skewed by the single extreme outlier (£500,000); the median should be quoted',
              explanation:
                'The extreme outlier pulls the mean up artificially. The median represents the typical worker\'s earnings accurately.',
            },
            {
              id: '16-test-q9',
              number: 3,
              question:
                'A student draws a bar chart of favourite fruits. The bars are different widths: the "Apple" bar is twice as wide as the "Banana" bar. Explain why this is poor statistical practice.',
              hint: 'How does bar area affect the viewer\'s visual perception?',
              answer: 'Bar widths must be equal because viewers perceive area; wider bars look disproportionately large',
              explanation:
                'In bar charts, frequency is represented solely by height. Changing width alters the visual area and misleads the reader.',
            },
          ],
        },
      ],
    },
  ],
};
