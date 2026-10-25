/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit8: Unit = {
  id: 'unit-8',
  unitNumber: 8,
  title: 'Shapes and Symmetry',
  learningObjectives: [
    'Identify reflective and rotational symmetry.',
    'Identify, describe, and draw regular polygons.',
    'Identify the parts of a circle.',
    'Understand congruent shapes and their properties.',
    'Identify and describe 3D shapes.',
    'Draw or identify the front, side, and top views of 3D shapes.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 8.1 Identifying the symmetry of 2D shapes
    // -------------------------------------------------------------------------
    {
      id: '8.1',
      subtopicNumber: '8.1',
      title: 'Identifying the symmetry of 2D shapes',
      type: 'lesson',
      steps: [
        {
          id: '8.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Butterfly Wings & Pinwheels',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Mirror Reflections and Rotating Windmills',
              scenario:
                'Look at a butterfly: if you draw a line straight down its center, the left wing matches the right wing exactly. That is REFLECTIVE SYMMETRY (mirror lines). Now look at a toy windmill or pinwheel: as it spins around its center pin, it looks identical several times before making a full turn. That is ROTATIONAL SYMMETRY, and the number of times it matches is its order of rotational symmetry.',
              takeaway:
                'Reflective symmetry is about folding along a mirror line. Rotational symmetry is about spinning around a center point through $360^\\circ$. Every shape has at least order 1 rotational symmetry (matching itself after a full $360^\\circ$ turn).',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Line of Symmetry',
                  definition: 'A line that cuts a 2D shape into two identical halves that reflect each other exactly.',
                  example: 'An equilateral triangle has 3 lines of symmetry; a rectangle has 2.',
                },
                {
                  term: 'Order of Rotational Symmetry',
                  definition: 'The number of times a shape looks identical to its starting position during one full 360° turn.',
                  example: 'A square has rotational symmetry of order 4; a rectangle has order 2.',
                },
              ],
            },
          ],
        },
        {
          id: '8.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Symmetry of Common 2D Shapes',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'For each shape, state (i) the number of lines of symmetry and (ii) the order of rotational symmetry:\n(a) An equilateral triangle\n(b) A standard rectangle (not a square)\n(c) A parallelogram',
                context: 'Simplest Symmetry Classification',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Equilateral triangle',
                    content: 'All 3 sides and angles are equal. You can fold along 3 lines from each vertex to the opposite side midpoint. In a $360^\\circ$ turn, it matches 3 times (every $120^\\circ$).',
                    mathFormula: '\\text{Lines of symmetry: } 3,\\quad \\text{Order of rotational symmetry: } 3',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Rectangle',
                    content: 'You can fold it along vertical and horizontal midlines (2 lines). Diagonals do NOT form mirror lines. When turned $360^\\circ$, it matches twice (at $180^\\circ$ and $360^\\circ$).',
                    mathFormula: '\\text{Lines of symmetry: } 2,\\quad \\text{Order of rotational symmetry: } 2',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): General Parallelogram',
                    content: 'A parallelogram has NO lines of symmetry (folding along any line fails to match up). However, when spun around its center, it matches at $180^\\circ$ and $360^\\circ$ (order 2).',
                    mathFormula: '\\text{Lines of symmetry: } 0,\\quad \\text{Order of rotational symmetry: } 2',
                  },
                ],
                finalAnswer: '(a) 3 lines, order 3; (b) 2 lines, order 2; (c) 0 lines, order 2',
              },
            },
          ],
        },
        {
          id: '8.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Thinking Rectangle Diagonals are Lines of Symmetry',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Thinking a rectangle has 4 lines of symmetry like a square',
                wrongWay: 'Counting the two diagonals of a rectangle as mirror lines',
                whyWrong: 'If you take a sheet of A4 paper and fold it along the diagonal, the corners stick out! They do not overlap. The diagonals are NOT lines of symmetry.',
                correctWay: 'A rectangle has only 2 lines of symmetry (horizontal and vertical midlines). Only a SQUARE has 4 lines of symmetry.',
                proTip: 'Always visualize physically folding the paper in half. If the corners stick out, it is not a line of symmetry!',
                memoryHook: 'Rectangles have 2, Squares have 4!',
              },
            },
          ],
        },
        {
          id: '8.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Identifying Symmetry',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'State the lines of symmetry and rotational symmetry order for each shape.',
            },
          ],
          questions: [
            {
              id: '8.1-ex1-q1',
              number: 1,
              question: 'How many lines of symmetry does a square have?',
              hint: 'A square has horizontal, vertical, and both diagonal mirror lines.',
              answer: '4 lines of symmetry',
              explanation: 'A square can be folded in half vertically, horizontally, and along both diagonals: 4 lines.',
            },
            {
              id: '8.1-ex1-q2',
              number: 2,
              question: 'What is the order of rotational symmetry of a regular hexagon (6-sided shape)?',
              hint: 'A regular polygon with n sides has order of rotational symmetry n.',
              answer: 'Order 6',
              explanation: 'A regular hexagon matches its outline 6 times during a 360° turn (every $60^\\circ$).',
            },
            {
              id: '8.1-ex1-q3',
              number: 3,
              question: 'How many lines of symmetry does an isosceles triangle have?',
              hint: 'An isosceles triangle has 2 equal sides.',
              answer: '1 line of symmetry',
              explanation: 'An isosceles triangle has exactly 1 vertical line of symmetry down the middle between the two equal sides.',
            },
          ],
        },
        {
          id: '8.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Road Signs, Company Logos & Flags',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Identify symmetry in everyday national flags and traffic signs.',
            },
          ],
          questions: [
            {
              id: '8.1-ex2-q1',
              number: 1,
              context: 'Traffic Stop Sign',
              question:
                'A standard red traffic STOP sign is a regular octagon ($8$ sides). How many lines of symmetry and what order of rotational symmetry does it have?',
              hint: 'A regular octagon has 8 equal sides and 8 equal angles.',
              answer: '8 lines of symmetry, and rotational symmetry of order 8',
              explanation: 'Every regular $n$-sided polygon has exactly $n$ lines of symmetry and rotational symmetry of order $n$. For an octagon, $n = 8$.',
            },
            {
              id: '8.1-ex2-q2',
              number: 2,
              context: 'National Flag Symmetry',
              question:
                'Consider the Swiss flag (a white cross on a square red background). State the number of lines of symmetry and the order of rotational symmetry.',
              hint: 'The cross and background are both symmetrical in all 4 directions.',
              answer: '4 lines of symmetry, and rotational symmetry of order 4',
              explanation: 'The flag has horizontal, vertical, and two diagonal mirror lines (4 lines), and looks identical 4 times per turn (order 4).',
            },
            {
              id: '8.1-ex2-q3',
              number: 3,
              context: 'Recycling Logo Arrows',
              question:
                'The universal recycling symbol consists of $3$ chasing arrows arranged in a circle. What is its order of rotational symmetry? Does it have any lines of symmetry?',
              hint: 'The arrows point clockwise.',
              answer: 'Rotational symmetry of order 3; 0 lines of symmetry',
              explanation: 'Because the arrows chase each other in one direction (clockwise), you cannot reflect it without reversing the arrowheads. It has 0 lines of symmetry and rotational symmetry of order 3.',
            },
          ],
        },
        {
          id: '8.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Symmetry Logic & Mystery Polygons',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Deduce mystery shapes from their symmetry characteristics.',
            },
          ],
          questions: [
            {
              id: '8.1-ex3-q1',
              number: 1,
              context: 'Mystery Quadrilateral',
              question:
                'A quadrilateral has rotational symmetry of order 2, but has NO lines of symmetry. Name the quadrilateral.',
              hint: 'Think of opposite sides parallel with no right angles.',
              answer: 'Parallelogram',
              explanation: 'A general parallelogram has rotational symmetry of order 2, but 0 lines of symmetry.',
            },
            {
              id: '8.1-ex3-q2',
              number: 2,
              context: 'Kite Symmetry',
              question:
                'State (a) the lines of symmetry and (b) the order of rotational symmetry of a standard geometric kite.',
              hint: 'A kite has 1 line of symmetry along its main spine.',
              answer: '(a) 1 line of symmetry; (b) Rotational symmetry of order 1',
              explanation: 'A kite has 1 vertical line of symmetry down its main spine. It only matches itself after a full 360° turn, so its rotational symmetry order is 1.',
            },
            {
              id: '8.1-ex3-q3',
              number: 3,
              context: 'Angle of Rotation',
              question:
                'A shape has rotational symmetry of order 5. What is the smallest angle of rotation through which the shape turns to look identical to its start position?',
              hint: 'Divide 360 degrees by 5.',
              answer: '72^\\circ',
              explanation: '$360^\\circ \\div 5 = 72^\\circ$. The shape matches its outline every $72^\\circ$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 8.2 Circles and polygons
    // -------------------------------------------------------------------------
    {
      id: '8.2',
      subtopicNumber: '8.2',
      title: 'Circles and polygons',
      type: 'lesson',
      steps: [
        {
          id: '8.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Bicycle Wheels, Pizza Crusts & Polygons',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'The Bicycle Wheel Anatomy',
              scenario:
                'Look at a bicycle wheel: the center axle is the CENTER. The metal spoke extending from the center to the outer rim is the RADIUS ($r$). A straight rod passing all the way through the center from rim to rim is the DIAMETER ($d = 2r$). The rubber tire running all the way around the outside edge is the CIRCUMFERENCE. If you slice a piece like pizza, the curved crust edge is an ARC, and the whole slice is a SECTOR.',
              takeaway:
                'Parts of a circle: Center, Radius, Diameter ($d = 2r$), Circumference, Chord, Arc, Sector, and Segment.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Radius (r)',
                  definition: 'The straight-line distance from the center of the circle to any point on its circumference.',
                  example: 'If radius is $5\\text{ cm}$, diameter is $10\\text{ cm}$.',
                },
                {
                  term: 'Diameter (d)',
                  definition: 'A straight line passing through the center of a circle connecting two points on the boundary ($d = 2r$).',
                  example: '$d = 2 \\times r$.',
                },
                {
                  term: 'Chord',
                  definition: 'Any straight line connecting two points on a circle (a diameter is the longest possible chord).',
                  example: 'A line segment inside a circle.',
                },
                {
                  term: 'Regular Polygon',
                  definition: 'A 2D shape with all straight sides equal in length and all interior angles equal.',
                  example: 'Equilateral triangle, square, regular pentagon, regular hexagon.',
                },
              ],
            },
          ],
        },
        {
          id: '8.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Radius, Diameter & Regular Polygon Names',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  '(a) A circular clock face has a radius of $14\\text{ cm}$. What is its diameter?\n(b) A circular plate has a diameter of $22\\text{ cm}$. What is its radius?\n(c) Name the regular polygons with: (i) 5 sides, (ii) 6 sides, (iii) 8 sides.',
                context: 'Simplest Circle & Polygon Relationships',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Find diameter from radius',
                    content: 'Diameter is always double the radius: $d = 2 \\times r$.',
                    mathFormula: 'd = 2 \\times 14 = 28\\text{ cm}',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Find radius from diameter',
                    content: 'Radius is always half the diameter: $r = d \\div 2$.',
                    mathFormula: 'r = 22 \\div 2 = 11\\text{ cm}',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Regular polygon names',
                    content:
                      '(i) 5 sides = Regular Pentagon\n(ii) 6 sides = Regular Hexagon\n(iii) 8 sides = Regular Octagon',
                  },
                ],
                finalAnswer: '(a) 28 cm, (b) 11 cm, (c) Pentagon, Hexagon, Octagon',
              },
            },
          ],
        },
        {
          id: '8.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Confusing Sector with Segment',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Mixing up a Sector and a Segment of a circle',
                wrongWay: 'Calling a pizza slice a segment',
                whyWrong: 'A pizza slice has two straight edges meeting at the CENTER—that is a SECTOR. A segment is formed by cutting across with a straight chord like slicing off a crust piece without touching the center.',
                correctWay: 'Sector = like a slice of pie (made by 2 radii). Segment = sliced off by a chord.',
                proTip: 'Sector has the letter "c" for "Center"—a sector always touches the center point!',
                memoryHook: 'Sector = Slice of pizza! Segment = Shield cut off by a chord.',
              },
            },
          ],
        },
        {
          id: '8.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Circle Parts & Polygons',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Identify parts of a circle and calculate radius and diameter.',
            },
          ],
          questions: [
            {
              id: '8.2-ex1-q1',
              number: 1,
              question: 'A circle has a radius of $7.5\\text{ cm}$. What is its diameter?',
              hint: 'Double the radius: 2 * 7.5.',
              answer: '15\\text{ cm}',
              explanation: '$\\text{Diameter} = 2 \\times 7.5 = 15\\text{ cm}$.',
            },
            {
              id: '8.2-ex1-q2',
              number: 2,
              question: 'A circular coin has a diameter of $26\\text{ mm}$. What is its radius?',
              hint: 'Half of 26.',
              answer: '13\\text{ mm}',
              explanation: '$\\text{Radius} = 26 \\div 2 = 13\\text{ mm}$.',
            },
            {
              id: '8.2-ex1-q3',
              number: 3,
              question: 'How many sides does a regular Decagon have?',
              hint: 'Deca- means ten (like decade).',
              answer: '10 sides',
              explanation: 'A decagon has 10 sides and 10 angles.',
            },
          ],
        },
        {
          id: '8.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Ferris Wheels & Honeycomb Tiles',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Analyze circular structures and regular polygon tiling in nature.',
            },
          ],
          questions: [
            {
              id: '8.2-ex2-q1',
              number: 1,
              context: 'Ferris Wheel Height',
              question:
                'A giant Ferris wheel has passenger capsules mounted along its rim. The distance from the center axle to each capsule is $35\\text{ m}$. What is the total diameter of the wheel?',
              hint: 'The spoke length is the radius.',
              answer: '70\\text{ m}',
              explanation: 'Radius $= 35\\text{ m}$. Total diameter $= 2 \\times 35 = 70\\text{ m}$.',
            },
            {
              id: '8.2-ex2-q2',
              number: 2,
              context: 'Bee Honeycomb Cells',
              question:
                'Bees build honeycombs using identical regular hexagons. If each side of a honeycomb cell is $5\\text{ mm}$, what is the perimeter of one hexagon cell?',
              hint: 'A hexagon has 6 equal sides.',
              answer: '30\\text{ mm}',
              explanation: 'Perimeter $= 6 \\times 5\\text{ mm} = 30\\text{ mm}$.',
            },
            {
              id: '8.2-ex2-q3',
              number: 3,
              context: 'Archery Target Rings',
              question:
                'An archery target consists of concentric circles. If the inner bullseye has diameter $12\\text{ cm}$, what is its radius? What is the longest chord possible in that circle?',
              hint: 'Radius is half the diameter. The longest chord is the diameter itself.',
              answer: 'Radius = 6 cm; Longest chord = 12 cm',
              explanation: 'Radius $= 12 \\div 2 = 6\\text{ cm}$. The longest chord in any circle is its diameter, which is $12\\text{ cm}$.',
            },
          ],
        },
        {
          id: '8.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Interior Angles of Regular Polygons',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Calculate interior and exterior angles of regular polygons.',
            },
          ],
          questions: [
            {
              id: '8.2-ex3-q1',
              number: 1,
              context: 'Regular Polygon Exterior Angles',
              question:
                'The exterior angles of any polygon always add up to $360^\\circ$. What is the size of each exterior angle of a regular octagon (8 sides)? What is each interior angle?',
              hint: 'Exterior = 360 / 8 = 45. Interior and exterior sum to 180.',
              answer: 'Exterior angle = 45°; Interior angle = 135°',
              explanation: 'Each exterior angle $= 360^\\circ \\div 8 = 45^\\circ$. Each interior angle $= 180^\\circ - 45^\\circ = 135^\\circ$.',
            },
            {
              id: '8.2-ex3-q2',
              number: 2,
              context: 'Circle Segment Area Logic',
              question:
                'A circle has a sector with a $90^\\circ$ angle at the center. If a chord connects the two radius ends, forming a right-angled triangle, describe how you would calculate the area of the remaining segment.',
              hint: 'Segment area = Sector area minus Triangle area.',
              answer: 'Subtract the area of the right-angled triangle from the area of the quarter-circle sector.',
              explanation: 'The sector consists of the triangle plus the curved segment cap. Therefore, Segment Area $= \\text{Sector Area} - \\text{Triangle Area}$.',
            },
            {
              id: '8.2-ex3-q3',
              number: 3,
              context: 'Tiling the Plane (Tessellation)',
              question:
                'Explain why regular hexagons can tessellate (fit together with zero gaps), but regular pentagons cannot. (Hint: Interior angle of hexagon is $120^\\circ$; interior angle of pentagon is $108^\\circ$).',
              hint: 'Can 108 divide into 360 evenly? Can 120 divide into 360 evenly?',
              answer: 'Three hexagon angles meeting at a point sum to 360° (3 * 120° = 360°). For pentagons, 360 / 108 = 3.33, so they cannot sum to 360° without gaps.',
              explanation: 'At any vertex where shapes meet, angles must sum to $360^\\circ$. $3 \\times 120^\\circ = 360^\\circ$ (hexagons fit perfectly). $3 \\times 108^\\circ = 324^\\circ$ (leaves a gap).',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 8.3 Recognising congruent shapes
    // -------------------------------------------------------------------------
    {
      id: '8.3',
      subtopicNumber: '8.3',
      title: 'Recognising congruent shapes',
      type: 'lesson',
      steps: [
        {
          id: '8.3-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Cookie Cutters & Identical Twins',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'The Cookie Cutter Stamp',
              scenario:
                'When you press a cookie cutter into dough $5$ times, every single cookie has the exact same shape and exact same size. Even if you turn one upside down or slide it across the baking tray, it is still an identical copy! In mathematics, shapes that have the EXACT SAME size and shape are called CONGRUENT.',
              takeaway:
                'Two shapes are congruent if one can be transformed into the other by translating (sliding), rotating (turning), or reflecting (flipping). Enlarging changes size, so enlarged shapes are NOT congruent.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Congruent Shapes',
                  definition: 'Geometric shapes that have identical side lengths and identical corresponding angles.',
                  example: 'Two triangles where all 3 sides and 3 angles match exactly.',
                },
                {
                  term: 'Corresponding Sides & Angles',
                  definition: 'Matching sides or matching angles in congruent or similar shapes.',
                  example: 'If $\\triangle ABC \\cong \\triangle DEF$, then side $AB = DE$ and $\\angle A = \\angle D$.',
                },
              ],
            },
            {
              type: 'rule_box',
              title: 'Triangle Congruency Conditions',
              rule: 'Two triangles are guaranteed congruent if they satisfy any one of these 4 rules:',
              tips: [
                'SSS: Side-Side-Side (all 3 corresponding sides are equal)',
                'SAS: Side-Angle-Side (2 sides and the included angle between them are equal)',
                'ASA: Angle-Side-Angle (2 angles and the side between them are equal)',
                'RHS: Right-angle, Hypotenuse, and one Side are equal',
              ],
            },
          ],
        },
        {
          id: '8.3-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Identifying Congruence & Corresponding Sides',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Triangle $ABC$ is congruent to Triangle $XYZ$ (written $\\triangle ABC \\cong \\triangle XYZ$).\nIn $\\triangle ABC$: $AB = 6\\text{ cm}$, $BC = 8\\text{ cm}$, and $\\angle B = 50^\\circ$.\n(a) What is the length of side $XY$?\n(b) What is the size of angle $\\angle Y$?\n(c) Which congruency condition proves they are congruent if $XY = 6\\text{ cm}, YZ = 8\\text{ cm},$ and $\\angle Y = 50^\\circ$?',
                context: 'Simplest Congruency Application',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Find corresponding side XY',
                    content: 'In the notation $\\triangle ABC \\cong \\triangle XYZ$, the first two letters correspond: $AB$ matches $XY$.',
                    mathFormula: 'XY = AB = 6\\text{ cm}',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Find corresponding angle Y',
                    content: 'Angle $\\angle B$ is the middle letter, matching $\\angle Y$.',
                    mathFormula: '\\angle Y = \\angle B = 50^\\circ',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Identify the condition',
                    content: 'We know two sides ($6\\text{ cm}$ and $8\\text{ cm}$) and the included angle ($50^\\circ$) between them. This is the Side-Angle-Side condition.',
                    mathFormula: '\\text{Condition: SAS (Side-Angle-Side)}',
                  },
                ],
                finalAnswer: '(a) XY = 6 cm, (b) \\angle Y = 50°, (c) SAS',
              },
            },
          ],
        },
        {
          id: '8.3-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Thinking AAA (Angle-Angle-Angle) Proves Congruence',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Assuming two triangles with the same angles must be congruent',
                wrongWay: 'Saying two triangles with angles 60°, 60°, 60° must be congruent',
                whyWrong: 'A small equilateral triangle and a giant equilateral triangle have the exact same angles (60°, 60°, 60°), but they are DIFFERENT SIZES! They are similar, not congruent.',
                correctWay: 'AAA only proves SIMILARITY (same shape). To be CONGRUENT, at least one side length must be specified and equal.',
                proTip: 'Congruency REQUIRES side lengths to match. Without matching side lengths, shapes can be scaled up or down.',
                memoryHook: 'Angles set the shape; sides lock the size!',
              },
            },
          ],
        },
        {
          id: '8.3-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Congruent Pairs',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Decide whether each pair of shapes is congruent.',
            },
          ],
          questions: [
            {
              id: '8.3-ex1-q1',
              number: 1,
              question: 'Two squares both have side lengths of $5\\text{ cm}$. Are they congruent? Explain.',
              hint: 'Do they have the exact same shape and size?',
              answer: 'Yes, they are congruent because all sides (5 cm) and all angles (90°) match identically.',
              explanation: 'Both squares have identical dimensions and angles. They are congruent.',
            },
            {
              id: '8.3-ex1-q2',
              number: 2,
              question: 'A rectangle has length $8\\text{ cm}$ and width $4\\text{ cm}$. Another rectangle has length $8\\text{ cm}$ and width $5\\text{ cm}$. Are they congruent?',
              hint: 'Compare the widths.',
              answer: 'No, because their widths are different (4 cm vs 5 cm).',
              explanation: 'Congruent shapes must have identical side lengths. A 4 cm width does not match 5 cm.',
            },
            {
              id: '8.3-ex1-q3',
              number: 3,
              question: 'Which of the following transformations produces a shape that is NOT congruent to the original: Translation, Reflection, Rotation, or Enlargement?',
              hint: 'Which one changes the size of the shape?',
              answer: 'Enlargement',
              explanation: 'Enlargement changes the size of the shape, producing similar (not congruent) shapes. Translations, reflections, and rotations preserve exact size.',
            },
          ],
        },
        {
          id: '8.3-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Factory Manufactured Tiles & Floor Stencils',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Check for congruence in machine parts and ceramic tiles.',
            },
          ],
          questions: [
            {
              id: '8.3-ex2-q1',
              number: 1,
              context: 'Ceramic Tile Tessellation',
              question:
                'A homeowner buys $100$ triangular tiles for a bathroom wall. All tiles are stamped from the same mold with side lengths $10\\text{ cm}, 10\\text{ cm},$ and $14\\text{ cm}$. State the congruency condition that guarantees every tile is identical.',
              hint: 'All three side lengths are specified.',
              answer: 'SSS (Side-Side-Side)',
              explanation: 'Because all three sides are fixed at $10\\text{ cm}, 10\\text{ cm}, 14\\text{ cm}$, the SSS rule ensures every tile is congruent.',
            },
            {
              id: '8.3-ex2-q2',
              number: 2,
              context: 'Finding Missing Angle',
              question:
                'Triangle $PQR$ is congruent to Triangle $STU$. In $\\triangle PQR$, $\\angle P = 40^\\circ$ and $\\angle Q = 65^\\circ$. What is the measure of angle $\\angle U$ in $\\triangle STU$?',
              hint: 'Find angle R first: 180 - (40 + 65). Angle U matches angle R.',
              answer: '75^\\circ',
              explanation: 'In $\\triangle PQR$, $\\angle R = 180 - (40 + 65) = 75^\\circ$. Since $\\triangle PQR \\cong \\triangle STU$, $\\angle U = \\angle R = 75^\\circ$.',
            },
            {
              id: '8.3-ex2-q3',
              number: 3,
              context: 'Right-Angled Triangle Braces',
              question:
                'Two metal shelf brackets are right-angled triangles. Both have a hypotenuse of $25\\text{ cm}$ and one side of $15\\text{ cm}$. Which rule proves they are congruent?',
              hint: 'Right angle, Hypotenuse, and Side.',
              answer: 'RHS (Right-angle, Hypotenuse, Side)',
              explanation: 'Both triangles have a $90^\\circ$ right angle, an equal hypotenuse ($25\\text{ cm}$), and one matching leg ($15\\text{ cm}$). The RHS rule proves congruence.',
            },
          ],
        },
        {
          id: '8.3-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Geometric Proofs of Congruence',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Write structured geometric proofs showing two triangles are congruent.',
            },
          ],
          questions: [
            {
              id: '8.3-ex3-q1',
              number: 1,
              context: 'Parallelogram Diagonal Proof',
              question:
                'A diagonal splits a parallelogram $ABCD$ into two triangles: $\\triangle ABC$ and $\\triangle CDA$. List three pairs of equal parts and state why the two triangles are congruent.',
              hint: 'Opposite sides of a parallelogram are equal, and the diagonal is shared.',
              answer: 'AB = CD (opposite sides), BC = DA (opposite sides), AC = AC (common shared side). Congruent by SSS.',
              explanation: 'Opposite sides of a parallelogram are equal: $AB = CD$ and $BC = DA$. The diagonal $AC$ is shared by both. Thus $\\triangle ABC \\cong \\triangle CDA$ by SSS.',
            },
            {
              id: '8.3-ex3-q2',
              number: 2,
              context: 'Isosceles Triangle Median',
              question:
                'In isosceles triangle $ABC$ ($AB = AC$), a line from vertex $A$ meets the midpoint $M$ of base $BC$ ($BM = MC$). Prove that $\\triangle ABM \\cong \\triangle ACM$.',
              hint: 'Compare AB = AC, BM = MC, and shared side AM.',
              answer: 'AB = AC (given), BM = MC (midpoint), AM = AM (shared). Congruent by SSS.',
              explanation: 'All three corresponding sides are equal: $AB = AC$, $BM = MC$, and $AM$ is common to both triangles. Therefore $\\triangle ABM \\cong \\triangle ACM$ by SSS.',
            },
            {
              id: '8.3-ex3-q3',
              number: 3,
              context: 'Non-Included Angle Counterexample',
              question:
                'Does knowing that two sides and ONE angle of a triangle are equal (ASS) guarantee congruence? Explain why or why not.',
              hint: 'Think about whether the angle MUST be between the two sides (included).',
              answer: 'No, because the angle must be the INCLUDED angle (between the two sides). ASS can produce two completely different triangles (the ambiguous case).',
              explanation: 'If the angle is not between the two sides, swinging the opposite side can create an acute triangle or an obtuse triangle with the exact same side lengths. Only SAS guarantees congruence.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 8.4 3D shapes
    // -------------------------------------------------------------------------
    {
      id: '8.4',
      subtopicNumber: '8.4',
      title: '3D shapes',
      type: 'lesson',
      steps: [
        {
          id: '8.4-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Faces, Edges, Vertices & Architectural Plans',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Cereal Boxes, Dice & Blueprint Views',
              scenario:
                'Hold a cereal box: the flat cardboard panels are FACES ($6$). The straight creases where two faces meet are EDGES ($12$). The sharp pointy corners where edges meet are VERTICES ($8$). An architect designing a building cannot just draw one picture; they draw three flat 2D views: looking from the FRONT (front elevation), looking from the SIDE (side elevation), and looking from ABOVE (plan view).',
              takeaway:
                'Every polyhedron is described by its Faces ($F$), Vertices ($V$), and Edges ($E$). Euler\'s formula states: $F + V - E = 2$. 3D objects are represented in 2D using Front, Side, and Plan (Top) views.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Faces, Edges, Vertices',
                  definition: 'Faces: flat 2D surfaces. Edges: lines where two faces meet. Vertices: sharp points/corners where edges meet.',
                  example: 'Cube: $F = 6, E = 12, V = 8$.',
                },
                {
                  term: 'Prism',
                  definition: 'A 3D solid with identical polygon cross-sections running all the way through.',
                  example: 'Triangular prism (like a Toblerone box).',
                },
                {
                  term: 'Plan View',
                  definition: 'The 2D view of a 3D object looked at directly from ABOVE.',
                  example: 'Looking down from a helicopter.',
                },
              ],
            },
          ],
        },
        {
          id: '8.4-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Counting F, V, E & Drawing 2D Elevations',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  '(a) For a triangular prism:\n(i) How many faces does it have?\n(ii) How many edges does it have?\n(iii) How many vertices does it have?\n(b) Verify Euler\'s formula $F + V - E = 2$.\n(c) Describe the front, side, and plan views of a tall cylinder resting on its circular base.',
                context: 'Simplest 3D Shape Analysis',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Count faces, edges, and vertices of a triangular prism',
                    content: 'Faces: 2 triangle ends + 3 rectangle sides = 5 faces. Edges: 3 top + 3 bottom + 3 vertical = 9 edges. Vertices: 3 top corners + 3 bottom corners = 6 vertices.',
                    mathFormula: 'F = 5,\\quad E = 9,\\quad V = 6',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Verify Euler\'s formula',
                    content: 'Calculate $F + V - E$: $5 + 6 - 9 = 11 - 9 = 2$. It works!',
                    mathFormula: 'F + V - E = 5 + 6 - 9 = 2',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): 2D elevations of an upright cylinder',
                    content: 'Looking from the FRONT: a rectangle. Looking from the SIDE: a rectangle. Looking from ABOVE (Plan view): a circle.',
                    mathFormula: '\\text{Front: Rectangle},\\quad \\text{Side: Rectangle},\\quad \\text{Plan: Circle}',
                  },
                ],
                finalAnswer: '(a) F = 5, E = 9, V = 6; (b) 5 + 6 - 9 = 2; (c) Front: Rectangle, Side: Rectangle, Plan: Circle',
              },
            },
          ],
        },
        {
          id: '8.4-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Confusing Prisms with Pyramids',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Calling a triangular-based pyramid a triangular prism',
                wrongWay: 'Mixing up a pyramid and a prism',
                whyWrong: 'A prism has the SAME cross-section throughout and TWO identical parallel end faces. A pyramid tapers up to a single apex point at the top!',
                correctWay: 'Prism = uniform sliceable shape (like bread). Pyramid = slopes to an apex point.',
                proTip: 'Ask yourself: "Does it come to a single sharp point at the top?" If yes, it is a pyramid!',
                memoryHook: 'Prisms stay parallel; Pyramids point to the sky!',
              },
            },
          ],
        },
        {
          id: '8.4-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: 3D Faces, Edges & Views',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Identify 3D properties and plan views.',
            },
          ],
          questions: [
            {
              id: '8.4-ex1-q1',
              number: 1,
              question: 'How many faces, edges, and vertices does a cube have?',
              hint: 'Think of a standard gaming die.',
              answer: '6 faces, 12 edges, 8 vertices',
              explanation: 'A cube has 6 square faces, 12 edges, and 8 corner vertices.',
            },
            {
              id: '8.4-ex1-q2',
              number: 2,
              question: 'What 2D shape is the plan view (view from above) of a square-based pyramid?',
              hint: 'Looking down from above, you see the base with cross diagonal lines meeting at the top point.',
              answer: 'A square with an X crossing the diagonals (the apex in the center)',
              explanation: 'The outline from directly above is the square base, with lines connecting each corner to the apex point in the middle.',
            },
            {
              id: '8.4-ex1-q3',
              number: 3,
              question: 'A 3D solid has 1 curved face and 2 flat circular faces. Name this solid.',
              hint: 'Think of a tin can of baked beans.',
              answer: 'Cylinder',
              explanation: 'A cylinder has two parallel flat circular faces and one curved surface connecting them.',
            },
          ],
        },
        {
          id: '8.4-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Packaging Boxes & Building Elevations',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Interpret architectural elevations and packaging solids.',
            },
          ],
          questions: [
            {
              id: '8.4-ex2-q1',
              number: 1,
              context: 'Toblerone Chocolate Box',
              question:
                'A chocolate box is a triangular prism. If it has $5$ faces and $6$ vertices, use Euler\'s formula $F + V - E = 2$ to calculate the number of edges $E$.',
              hint: '5 + 6 - E = 2.',
              answer: 'E = 9 edges',
              explanation: '$5 + 6 - E = 2 \\implies 11 - E = 2 \\implies E = 9$ edges.',
            },
            {
              id: '8.4-ex2-q2',
              number: 2,
              context: 'Architectural House Blueprint',
              question:
                'A simple house has a cuboid lower body with a triangular prism roof. What 2D shape will you see looking at the front of the house (front elevation)?',
              hint: 'Looking at the front where the roof slopes up to a peak.',
              answer: 'A pentagon (a rectangle with a triangle on top)',
              explanation: 'The lower walls appear as a rectangle, and the gable roof appears as a triangle on top, forming a 5-sided house profile.',
            },
            {
              id: '8.4-ex2-q3',
              number: 3,
              context: 'Sphere Views',
              question:
                'Describe the front elevation, side elevation, and plan view of a soccer ball (sphere).',
              hint: 'Does a ball look different from any direction?',
              answer: 'All three views are identical circles of the same radius.',
              explanation: 'A sphere is completely symmetrical from every angle; looking from the front, side, or above always shows a circle.',
            },
          ],
        },
        {
          id: '8.4-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Euler\'s Formula & Mystery Polyhedra',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Solve non-routine 3D solid investigations.',
            },
          ],
          questions: [
            {
              id: '8.4-ex3-q1',
              number: 1,
              context: 'Euler\'s Formula for Pyramids',
              question:
                'An octagonal pyramid has an 8-sided base. (a) How many faces does it have? (b) How many vertices? (c) How many edges? Verify using $F + V - E = 2$.',
              hint: 'Base + 8 triangular faces = 9 faces. 8 base corners + 1 apex = 9 vertices.',
              answer: 'F = 9, V = 9, E = 16; 9 + 9 - 16 = 2',
              explanation: 'Faces: $1\\text{ base} + 8\\text{ triangles} = 9$. Vertices: $8\\text{ base} + 1\\text{ apex} = 9$. Edges: $8\\text{ base} + 8\\text{ sloping} = 16$. Check: $9 + 9 - 16 = 2$.',
            },
            {
              id: '8.4-ex3-q2',
              number: 2,
              context: 'Cube Stacking Challenge',
              question:
                'Four unit cubes are glued in an L-shape (3 in a row on the floor, and 1 placed on top of the first cube). Describe: (a) Front elevation, (b) Plan view.',
              hint: 'Front shows the L-profile. Plan shows 3 squares in a row from above.',
              answer: '(a) Front: an L-shape made of 4 squares; (b) Plan view: a straight row of 3 squares',
              explanation: 'From the front, you see 3 squares along the bottom and 1 square directly above the first. From above, the top cube hides the one beneath it, showing 3 squares in a line.',
            },
            {
              id: '8.4-ex3-q3',
              number: 3,
              context: 'Mystery Polyhedron',
              question:
                'A polyhedron has $12$ edges and $6$ vertices. Use Euler\'s formula to find how many faces it has, and name the solid.',
              hint: 'F + 6 - 12 = 2. F = 8 faces (octahedron).',
              answer: 'F = 8 faces; Regular Octahedron (or dual square pyramid)',
              explanation: '$F + 6 - 12 = 2 \\implies F - 6 = 2 \\implies F = 8$ faces. A solid with 8 triangular faces and 6 vertices is a regular octahedron.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '8.test',
      subtopicNumber: 'Test',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '8.test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Test Part A: Core Recall',
          badge: 'Test Part A: Core Recall',
          blocks: [
            {
              type: 'text',
              content:
                'Part A tests symmetry, circle parts, congruence, and 3D solid properties. Work out all 3 questions on the Teacher\'s Board before checking answers.',
            },
          ],
          questions: [
            {
              id: '8.test-q1',
              number: 1,
              question: 'A regular pentagon has 5 sides. How many lines of symmetry and what order of rotational symmetry does it have?',
              hint: 'For any regular n-gon, lines = n, order = n.',
              answer: '5 lines of symmetry, and rotational symmetry of order 5',
              explanation: 'A regular pentagon has 5 lines of symmetry and rotational symmetry of order 5.',
            },
            {
              id: '8.test-q2',
              number: 2,
              question: 'A circle has diameter $18\\text{ cm}$. What is its radius? What is the name of the outer boundary length of the circle?',
              hint: 'Radius is half of diameter. Boundary is circumference.',
              answer: 'Radius = 9 cm; Boundary is Circumference',
              explanation: 'Radius $= 18 \\div 2 = 9\\text{ cm}$. The perimeter of a circle is called the Circumference.',
            },
            {
              id: '8.test-q3',
              number: 3,
              question: 'How many faces, edges, and vertices does a square-based pyramid have?',
              hint: '1 square base + 4 triangles.',
              answer: '5 faces, 8 edges, 5 vertices',
              explanation: 'Faces: $1 + 4 = 5$. Edges: 4 base + 4 sloping = 8. Vertices: 4 base + 1 apex = 5.',
            },
          ],
        },
        {
          id: '8.test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Test Part B: Real-World Problems',
          badge: 'Test Part B: Real-World Problems',
          blocks: [
            {
              type: 'text',
              content:
                'Part B tests applying geometric concepts to road signs, packaging, and elevations.',
            },
          ],
          questions: [
            {
              id: '8.test-q4',
              number: 1,
              context: 'Yield Sign Symmetry',
              question:
                'An upside-down equilateral triangle YIELD road sign has 3 equal sides. What is its order of rotational symmetry and how many lines of symmetry does it have?',
              hint: 'Equilateral triangle properties.',
              answer: '3 lines of symmetry, and rotational symmetry of order 3',
              explanation: 'An equilateral triangle has 3 lines of symmetry and order 3 rotational symmetry.',
            },
            {
              id: '8.test-q5',
              number: 2,
              context: 'Congruent Roof Trusses',
              question:
                'A builder constructs two triangular roof trusses $\\triangle ABC$ and $\\triangle DEF$. In both trusses, the base is $8\\text{ m}$, the two base angles are $30^\\circ$ each, and the side beams are $4.62\\text{ m}$. Which congruency condition proves the two trusses are identical?',
              hint: 'ASA or SAS or SSS.',
              answer: 'ASA (Angle-Side-Angle) or SSS or SAS',
              explanation: 'Both trusses have two equal angles ($30^\\circ$) with an equal included side of $8\\text{ m}$ (ASA). All sides also match (SSS).',
            },
            {
              id: '8.test-q6',
              number: 3,
              context: 'Can of Soup Elevations',
              question:
                'A soup can has height $11\\text{ cm}$ and diameter $7\\text{ cm}$. Draw or describe its front elevation and plan view with dimensions.',
              hint: 'Front view is a rectangle; plan view is a circle.',
              answer: 'Front elevation: A rectangle of width 7 cm and height 11 cm. Plan view: A circle of diameter 7 cm.',
              explanation: 'From the front, the cylinder appears as a flat $7\\text{ cm} \\times 11\\text{ cm}$ rectangle. From above, it appears as a circle with diameter $7\\text{ cm}$.',
            },
          ],
        },
        {
          id: '8.test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Test Part C: Reasoning & Challenge',
          badge: 'Test Part C: Reasoning & Challenge',
          blocks: [
            {
              type: 'text',
              content:
                'Part C presents spatial reasoning challenges and Euler formula proofs.',
            },
          ],
          questions: [
            {
              id: '8.test-q7',
              number: 1,
              context: 'Euler\'s Formula Deduction',
              question:
                'A 3D solid has $10$ faces and $16$ vertices. Use Euler\'s formula $F + V - E = 2$ to find the number of edges. What type of prism could this be?',
              hint: '10 + 16 - E = 2. An octagonal prism has 2 octagons + 8 rectangles = 10 faces.',
              answer: '24 edges; An octagonal prism',
              explanation: '$10 + 16 - E = 2 \\implies 26 - E = 2 \\implies E = 24$ edges. An octagonal prism has 10 faces (2 octagons + 8 rectangles), 16 vertices, and 24 edges.',
            },
            {
              id: '8.test-q8',
              number: 2,
              context: 'Sector Angle Calculation',
              question:
                'A sector of a circle represents exactly $\\frac{1}{6}$ of the total circle area. What is the angle at the center of this sector?',
              hint: 'Divide 360 degrees by 6.',
              answer: '60^\\circ',
              explanation: '$360^\\circ \\times \\frac{1}{6} = 60^\\circ$. The angle at the center is $60^\\circ$.',
            },
            {
              id: '8.test-q9',
              number: 3,
              context: 'Congruency Identification',
              question:
                'Triangle 1 has sides $4\\text{ cm}, 7\\text{ cm}$ and an angle of $40^\\circ$ between them. Triangle 2 has sides $4\\text{ cm}, 7\\text{ cm}$ and an angle of $40^\\circ$ not between them. Are they guaranteed to be congruent? Explain.',
              hint: 'Is the angle between the two sides (included) in both?',
              answer: 'No, because Triangle 1 is SAS, but Triangle 2 is ASS (non-included angle), which does not guarantee congruence.',
              explanation: 'For congruence, the matching angle MUST be the included angle between the two known sides in both triangles. If one is not included, they may have completely different shapes.',
            },
          ],
        },
      ],
    },
  ],
};
