/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit5: Unit = {
  id: 'unit-5',
  unitNumber: 5,
  title: 'Angles and Constructions',
  learningObjectives: [
    'Calculate missing angles in quadrilaterals and around a point.',
    'Identify angle properties of parallel, perpendicular, and intersecting lines.',
    'Draw parallel and perpendicular lines and quadrilaterals.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 5.1 A sum of 360°
    // -------------------------------------------------------------------------
    {
      id: '5.1',
      subtopicNumber: '5.1',
      title: 'A sum of 360°',
      type: 'lesson',
      steps: [
        {
          id: '5.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Full Turns, Clocks & Angles Around a Point',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Skater 360 Spin & Clock Face',
              scenario:
                'When a skateboarder or gymnast does a "360", they spin in one complete full circle and land facing the exact same direction they started! The hands of an analog clock also sweep through a full circle of $360^\\circ$ every rotation. If you divide a pizza into slices meeting at the center tip, all the tip angles MUST add up to $360^\\circ$.',
              takeaway:
                'Angles around a point always add up to $360^\\circ$. Angles in a quadrilateral also always add up to $360^\\circ$.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Angles Around a Point',
                  definition: 'Angles that meet at a single central vertex, whose sum is always exactly $360^\\circ$.',
                  example: '$120^\\circ + 150^\\circ + 90^\\circ = 360^\\circ$.',
                },
                {
                  term: 'Quadrilateral Angle Sum',
                  definition: 'Any four-sided 2D polygon can be split into two triangles ($2 \\times 180^\\circ$), so its four interior angles always add up to $360^\\circ$.',
                  example: 'In a rectangle: $90^\\circ + 90^\\circ + 90^\\circ + 90^\\circ = 360^\\circ$.',
                },
              ],
            },
            {
              type: 'rule_box',
              title: 'The 360° Angle Rules',
              rule: 'Two fundamental geometry facts:',
              tips: [
                'Rule 1: Angles at a point: $a + b + c + \\dots = 360^\\circ$',
                'Rule 2: Interior angles of any quadrilateral: $\\angle A + \\angle B + \\angle C + \\angle D = 360^\\circ$',
              ],
            },
          ],
          widget: {
            type: 'protractor_angle',
            title: 'Protractor & Angle Explorer',
          },
        },
        {
          id: '5.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Finding Missing Angles to 360°',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  '(a) Three angles meet at a point: $110^\\circ$, $130^\\circ$, and $x$. Find $x$.\n(b) A quadrilateral has three angles measuring $95^\\circ$, $110^\\circ$, and $75^\\circ$. Find the fourth angle $y$.',
                context: 'Simplest Angle Calculation Strategy',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Sum known angles around the point',
                    content: 'Add the known angles: $110^\\circ + 130^\\circ = 240^\\circ$.',
                    mathFormula: '110^\\circ + 130^\\circ = 240^\\circ',
                  },
                  {
                    stepNumber: 2,
                    label: 'Subtract from 360°',
                    content: 'Angles around a point add up to $360^\\circ$. Subtract $240^\\circ$ from $360^\\circ$.',
                    mathFormula: 'x = 360^\\circ - 240^\\circ = 120^\\circ',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (b): Quadrilateral interior angle sum',
                    content: 'Add the three given angles: $95^\\circ + 110^\\circ + 75^\\circ = 280^\\circ$. Subtract from $360^\\circ$.',
                    mathFormula: 'y = 360^\\circ - 280^\\circ = 80^\\circ',
                  },
                ],
                finalAnswer: '(a) x = 120°, (b) y = 80°',
              },
            },
          ],
        },
        {
          id: '5.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Confusing 180° with 360°',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Subtracting from 180° instead of 360°',
                wrongWay: 'Subtracting from 180° when calculating angles around a point or inside a quadrilateral',
                whyWrong: '180° is for a single straight line or ONE triangle! A full turn around a point or a 4-sided quadrilateral is TWO triangles = 360°.',
                correctWay: 'Always use 360° for points and quadrilaterals.',
                proTip: 'Look at the shape: does it go all the way around a point, or is it a 4-sided polygon? If yes, the target is 360°!',
                memoryHook: 'Half turn = 180°. Full turn = 360°!',
              },
            },
          ],
        },
        {
          id: '5.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: 360° Angle Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Calculate the missing angle in each basic geometry diagram.',
            },
          ],
          questions: [
            {
              id: '5.1-ex1-q1',
              number: 1,
              question: 'Two angles meet at a point. One angle is $210^\\circ$. What is the missing angle $a$?',
              hint: 'Subtract 210 from 360.',
              answer: '150^\\circ',
              explanation: '$a = 360^\\circ - 210^\\circ = 150^\\circ$.',
            },
            {
              id: '5.1-ex1-q2',
              number: 2,
              question: 'Three angles around a point are $90^\\circ$, $120^\\circ$, and $b$. Find $b$.',
              hint: 'Sum 90 + 120, then subtract from 360.',
              answer: '150^\\circ',
              explanation: '$90^\\circ + 120^\\circ = 210^\\circ$. $b = 360^\\circ - 210^\\circ = 150^\\circ$.',
            },
            {
              id: '5.1-ex1-q3',
              number: 3,
              question: 'A quadrilateral has angles $100^\\circ$, $80^\\circ$, $110^\\circ$, and $c$. Find angle $c$.',
              hint: 'The angles of any quadrilateral add up to 360 degrees.',
              answer: '70^\\circ',
              explanation: '$100 + 80 + 110 = 290^\\circ$. $c = 360^\\circ - 290^\\circ = 70^\\circ$.',
            },
          ],
        },
        {
          id: '5.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Compass Bearings & Flying Kites',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Apply 360° angle rules to wind roses and kite construction.',
            },
          ],
          questions: [
            {
              id: '5.1-ex2-q1',
              number: 1,
              context: 'Compass Rose Directions',
              question:
                'A ship sails on a heading of $065^\\circ$ from North. Through what reflex angle must the ship turn clockwise to face due North ($000^\\circ / 360^\\circ$) again?',
              hint: 'Subtract 65 from 360.',
              answer: '295^\\circ',
              explanation: '$360^\\circ - 65^\\circ = 295^\\circ$.',
            },
            {
              id: '5.1-ex2-q2',
              number: 2,
              context: 'Kite Symmetry',
              question:
                'In a geometric kite $ABCD$, opposite angles $\\angle B$ and $\\angle D$ are equal. If $\\angle A = 70^\\circ$ and $\\angle C = 50^\\circ$, find the measure of angle $\\angle B$.',
              hint: 'Angles sum to 360: 70 + 50 + 2B = 360.',
              answer: '120^\\circ',
              explanation: '$70^\\circ + 50^\\circ = 120^\\circ$. Remaining for the two equal angles: $360^\\circ - 120^\\circ = 240^\\circ$. Thus $\\angle B = 240^\\circ \\div 2 = 120^\\circ$.',
            },
            {
              id: '5.1-ex2-q3',
              number: 3,
              context: 'Pizza Slice Angle',
              question:
                'A circular pizza is cut into $8$ identical slices meeting at the center. What is the angle at the tip of each slice?',
              hint: 'Divide 360 by 8.',
              answer: '45^\\circ',
              explanation: '$360^\\circ \\div 8 = 45^\\circ$ per slice.',
            },
          ],
        },
        {
          id: '5.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Algebraic Angle Equations',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Set up algebraic equations using 360° sums to solve for unknown variables.',
            },
          ],
          questions: [
            {
              id: '5.1-ex3-q1',
              number: 1,
              context: 'Equal Angles Around a Point',
              question:
                'Four angles around a point are $x$, $2x$, $3x$, and $90^\\circ$. Form an equation and find the value of $x$.',
              hint: 'x + 2x + 3x + 90 = 360.',
              answer: 'x = 45^\\circ',
              explanation: '$6x + 90 = 360 \\implies 6x = 270 \\implies x = 270 \\div 6 = 45^\\circ$. The angles are $45^\\circ, 90^\\circ, 135^\\circ, 90^\\circ$.',
            },
            {
              id: '5.1-ex3-q2',
              number: 2,
              context: 'Trapezium Angles',
              question:
                'In an isosceles trapezium, the two bottom base angles are both $68^\\circ$. What are the values of the two top angles?',
              hint: 'Angles sum to 360, and the two top angles are equal.',
              answer: '112^\\circ\\text{ each}',
              explanation: 'Sum of bottom angles $= 68 + 68 = 136^\\circ$. Remaining for top angles $= 360 - 136 = 224^\\circ$. Each top angle $= 224 \\div 2 = 112^\\circ$. (Also note co-interior angles: $180 - 68 = 112^\\circ$).',
            },
            {
              id: '5.1-ex3-q3',
              number: 3,
              context: 'Ratio of Angles in a Quadrilateral',
              question:
                'The four interior angles of a quadrilateral are in the ratio $1 : 2 : 3 : 4$. Find the size of the largest angle.',
              hint: 'Total parts = 1 + 2 + 3 + 4 = 10 parts. 360 / 10 = 36 degrees per part.',
              answer: '144^\\circ',
              explanation: 'Total parts $= 10$. Value of 1 part $= 360^\\circ \\div 10 = 36^\\circ$. Largest angle (4 parts) $= 4 \\times 36^\\circ = 144^\\circ$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 5.2 Intersecting lines
    // -------------------------------------------------------------------------
    {
      id: '5.2',
      subtopicNumber: '5.2',
      title: 'Intersecting lines',
      type: 'lesson',
      steps: [
        {
          id: '5.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Scissors, Crosses & Vertically Opposite Angles',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Opening a Pair of Scissors',
              scenario:
                'Think of a pair of scissors. When two straight lines cross, they form an "X". If you open the handles wide, the blades open by the exact same amount! Angles that face directly opposite each other across the cross are called VERTICALLY OPPOSITE angles, and they are ALWAYS EQUAL.',
              takeaway:
                'When two straight lines intersect: vertically opposite angles are equal, and adjacent angles on a straight line add up to $180^\\circ$.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Vertically Opposite Angles',
                  definition: 'The angles opposite each other when two straight lines cross. They are always equal.',
                  example: 'If one angle is $40^\\circ$, the angle directly opposite is also $40^\\circ$.',
                },
                {
                  term: 'Supplementary Angles (Straight Line)',
                  definition: 'Two angles on a straight line that add up to $180^\\circ$.',
                  example: '$140^\\circ + 40^\\circ = 180^\\circ$.',
                },
                {
                  term: 'Perpendicular Lines',
                  definition: 'Two lines that intersect at an exact right angle of $90^\\circ$.',
                  example: 'A horizontal floor and vertical wall meet at $90^\\circ$.',
                },
              ],
            },
          ],
        },
        {
          id: '5.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Finding Angles in an X-Intersection',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Two straight lines $AB$ and $CD$ intersect at point $O$. Angle $\\angle AOC = 48^\\circ$.\nFind:\n(a) Angle $\\angle BOD$ (vertically opposite)\n(b) Angle $\\angle AOD$ (adjacent on straight line)',
                context: 'Simplest Intersecting Lines',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Use vertically opposite rule',
                    content: 'Angle $\\angle BOD$ is directly opposite $\\angle AOC$. Vertically opposite angles are equal.',
                    mathFormula: '\\angle BOD = \\angle AOC = 48^\\circ',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Use angles on a straight line add to 180°',
                    content: '$COD$ is a straight line, so $\\angle AOC + \\angle AOD = 180^\\circ$. Subtract $48^\\circ$ from $180^\\circ$.',
                    mathFormula: '\\angle AOD = 180^\\circ - 48^\\circ = 132^\\circ',
                  },
                ],
                finalAnswer: '(a) \\angle BOD = 48°, (b) \\angle AOD = 132°',
              },
            },
          ],
        },
        {
          id: '5.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Assuming Any Two Crossing Lines Form Vertically Opposite Angles',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Assuming angles are vertically opposite when lines bend',
                wrongWay: 'Calling angles equal when the lines are bent or not continuous straight lines',
                whyWrong: 'The lines MUST be completely straight and unbroken across the intersection point.',
                correctWay: 'Always trace both lines with a ruler to confirm they are unbroken straight lines.',
                proTip: 'Look for the letter "X". Only two straight sticks forming an unbroken X have equal opposite angles.',
                memoryHook: 'No straight X, no equal checks!',
              },
            },
          ],
        },
        {
          id: '5.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Intersecting Line Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Two straight lines cross at an intersection. Find each missing angle.',
            },
          ],
          questions: [
            {
              id: '5.2-ex1-q1',
              number: 1,
              question: 'Two straight lines intersect. One angle is $65^\\circ$. What is the vertically opposite angle?',
              hint: 'Vertically opposite angles are equal.',
              answer: '65^\\circ',
              explanation: 'Vertically opposite angles are equal, so the opposite angle is $65^\\circ$.',
            },
            {
              id: '5.2-ex1-q2',
              number: 2,
              question: 'Two angles lie on a straight line. One angle is $72^\\circ$. Find the adjacent angle $k$.',
              hint: 'Angles on a straight line add to 180 degrees.',
              answer: '108^\\circ',
              explanation: '$k = 180^\\circ - 72^\\circ = 108^\\circ$.',
            },
            {
              id: '5.2-ex1-q3',
              number: 3,
              question: 'Two straight lines intersect. One of the angles is a right angle ($90^\\circ$). What are the sizes of the other three angles?',
              hint: '180 - 90 = 90.',
              answer: '90^\\circ,\\ 90^\\circ,\\ 90^\\circ\\text{ (all are right angles)}',
              explanation: 'Opposite is $90^\\circ$, and adjacent is $180 - 90 = 90^\\circ$. All four angles are $90^\\circ$. The lines are perpendicular.',
            },
          ],
        },
        {
          id: '5.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Railroad Crossings & Road Junctions',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Calculate angles at road intersections and bridge trusses.',
            },
          ],
          questions: [
            {
              id: '5.2-ex2-q1',
              number: 1,
              context: 'Railway Track Intersection',
              question:
                'Two railway tracks cross each other. An acute angle between the tracks is measured as $34^\\circ$. What is the obtuse angle between the crossing tracks?',
              hint: 'The acute and obtuse angles sit on a straight line, summing to 180 degrees.',
              answer: '146^\\circ',
              explanation: 'Adjacent angles on a straight line: $180^\\circ - 34^\\circ = 146^\\circ$.',
            },
            {
              id: '5.2-ex2-q2',
              number: 2,
              context: 'Steel Bridge Crossbeam',
              question:
                'In a bridge crossbeam, four angles meet at an intersection. If the top angle is $(2x + 10)^\\circ$ and the bottom vertically opposite angle is $70^\\circ$, find $x$.',
              hint: 'Set 2x + 10 = 70.',
              answer: 'x = 30',
              explanation: '$2x + 10 = 70 \\implies 2x = 60 \\implies x = 30$.',
            },
            {
              id: '5.2-ex2-q3',
              number: 3,
              context: 'Three Intersecting Lines',
              question:
                'Three straight lines intersect at a single point, dividing the full turn into 6 angles. If three alternate angles are $40^\\circ$, $60^\\circ$, and $80^\\circ$, what are the other three angles?',
              hint: 'Each missing angle is vertically opposite one of the given angles.',
              answer: '40^\\circ,\\ 60^\\circ,\\ 80^\\circ',
              explanation: 'Because vertically opposite angles are equal, the three opposite angles must also be $40^\\circ, 60^\\circ, 80^\\circ$. Check sum: $2(40 + 60 + 80) = 2(180) = 360^\\circ$.',
            },
          ],
        },
        {
          id: '5.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Algebraic Intersections & Proofs',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Form equations with supplementary and vertically opposite relationships.',
            },
          ],
          questions: [
            {
              id: '5.2-ex3-q1',
              number: 1,
              context: 'Adjacent Angle Equation',
              question:
                'Two angles on a straight line are $3x + 15$ and $2x + 25$. Find the value of $x$ and the size of each angle.',
              hint: '(3x + 15) + (2x + 25) = 180.',
              answer: 'x = 28;\\text{ Angles are }99^\\circ\\text{ and }81^\\circ',
              explanation: '$5x + 40 = 180 \\implies 5x = 140 \\implies x = 28$. Angles: $3(28) + 15 = 99^\\circ$, and $2(28) + 25 = 81^\\circ$. Sum $= 99 + 81 = 180^\\circ$.',
            },
            {
              id: '5.2-ex3-q2',
              number: 2,
              context: 'Opposite Angle Equation',
              question:
                'Two vertically opposite angles are represented by $5y - 20$ and $3y + 16$. Find $y$ and the size of the angle.',
              hint: 'Set 5y - 20 = 3y + 16.',
              answer: 'y = 18;\\text{ Angle is }70^\\circ',
              explanation: '$5y - 20 = 3y + 16 \\implies 2y = 36 \\implies y = 18$. Angle $= 5(18) - 20 = 90 - 20 = 70^\\circ$.',
            },
            {
              id: '5.2-ex3-q3',
              number: 3,
              context: 'Geometric Reasoning',
              question:
                'Can two intersecting straight lines produce angles where one angle is $50^\\circ$ and the adjacent angle is $140^\\circ$? Explain why or why not.',
              hint: 'Check if 50 + 140 equals 180.',
              answer: 'No, because 50° + 140° = 190°, not 180°.',
              explanation: 'Adjacent angles formed by two straight lines MUST lie on a straight line and add up to exactly $180^\\circ$. Since $50 + 140 = 190^\\circ \\ne 180^\\circ$, the lines cannot be straight.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 5.3 Drawing lines and quadrilaterals
    // -------------------------------------------------------------------------
    {
      id: '5.3',
      subtopicNumber: '5.3',
      title: 'Drawing lines and quadrilaterals',
      type: 'lesson',
      steps: [
        {
          id: '5.3-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The Quadrilateral Family Tree',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'The Quadrilateral Family Tree',
              scenario:
                'All 4-sided shapes belong to the Quadrilateral family ($360^\\circ$). A Trapezium has $1$ pair of parallel sides. A Parallelogram has $2$ pairs of parallel sides. If you give a parallelogram $4$ right angles, it becomes a Rectangle. If you give it $4$ equal sides, it becomes a Rhombus. And if you give it BOTH equal sides and right angles, it becomes a Square!',
              takeaway:
                'Recognize the side and angle properties of special quadrilaterals: squares, rectangles, parallelograms, rhombuses, kites, and trapeziums.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Parallelogram',
                  definition: 'A quadrilateral with opposite sides parallel and equal in length, and opposite angles equal.',
                  example: 'Opposite angles are equal: $a = c$ and $b = d$. Co-interior angles sum to $180^\\circ$.',
                },
                {
                  term: 'Rhombus',
                  definition: 'A parallelogram with all four sides of equal length. Diagonals cross at $90^\\circ$.',
                  example: 'Diamond shape.',
                },
                {
                  term: 'Trapezium (Trapezoid)',
                  definition: 'A quadrilateral with exactly one pair of parallel sides.',
                  example: 'Base and top are parallel.',
                },
              ],
            },
          ],
        },
        {
          id: '5.3-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Finding Angles in a Parallelogram',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'In a parallelogram $ABCD$, angle $\\angle A = 72^\\circ$.\nFind the measures of:\n(a) Angle $\\angle C$ (opposite angle)\n(b) Angle $\\angle B$ (adjacent angle)',
                context: 'Simplest Quadrilateral Properties',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Opposite angles in a parallelogram are equal',
                    content: 'In any parallelogram, opposite angles are identical.',
                    mathFormula: '\\angle C = \\angle A = 72^\\circ',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Consecutive (co-interior) angles add to 180°',
                    content: 'Because side $AD$ is parallel to side $BC$, angles $\\angle A$ and $\\angle B$ are co-interior ($C$-angles) and add up to $180^\\circ$.',
                    mathFormula: '\\angle B = 180^\\circ - 72^\\circ = 108^\\circ',
                  },
                ],
                finalAnswer: '(a) \\angle C = 72°, (b) \\angle B = 108°',
              },
            },
          ],
        },
        {
          id: '5.3-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Calling Every Diamond a Rhombus with Right Angles',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Assuming all rhombuses have 90° angles',
                wrongWay: 'Saying a rhombus has four 90° angles',
                whyWrong: 'Only a SQUARE has four 90° angles! A general rhombus has two equal acute angles and two equal obtuse angles.',
                correctWay: 'A rhombus has 4 equal sides, but its angles do NOT have to be 90°.',
                proTip: 'A square is a special rhombus that has right angles. All squares are rhombuses, but not all rhombuses are squares!',
                memoryHook: 'A rhombus is a pushed-over square!',
              },
            },
          ],
        },
        {
          id: '5.3-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Quadrilateral Angles Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Identify angle measures in special quadrilaterals.',
            },
          ],
          questions: [
            {
              id: '5.3-ex1-q1',
              number: 1,
              question: 'In a rectangle, what is the measure of each interior angle?',
              hint: 'All four angles in a rectangle are identical.',
              answer: '90^\\circ',
              explanation: 'A rectangle has four right angles ($90^\\circ$). $4 \\times 90^\\circ = 360^\\circ$.',
            },
            {
              id: '5.3-ex1-q2',
              number: 2,
              question: 'In a parallelogram, one angle is $55^\\circ$. What is the angle directly opposite it?',
              hint: 'Opposite angles in a parallelogram are equal.',
              answer: '55^\\circ',
              explanation: 'Opposite angles in a parallelogram are equal, so it is $55^\\circ$.',
            },
            {
              id: '5.3-ex1-q3',
              number: 3,
              question: 'What is the sum of the four interior angles of ANY quadrilateral?',
              hint: 'Any quadrilateral can be split into two triangles.',
              answer: '360^\\circ',
              explanation: 'Every quadrilateral has an interior angle sum of $360^\\circ$.',
            },
          ],
        },
        {
          id: '5.3-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Architectural Blueprints & Kites',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Solve quadrilateral problems in roofs, solar panels, and picture frames.',
            },
          ],
          questions: [
            {
              id: '5.3-ex2-q1',
              number: 1,
              context: 'Solar Panel Frame',
              question:
                'A solar panel is mounted as a parallelogram. One of its lower angles is $62^\\circ$. What is the adjacent angle?',
              hint: 'Adjacent angles in a parallelogram add up to 180 degrees.',
              answer: '118^\\circ',
              explanation: '$180^\\circ - 62^\\circ = 118^\\circ$.',
            },
            {
              id: '5.3-ex2-q2',
              number: 2,
              context: 'Trapezium Roof Gable',
              question:
                'A roof truss is in the shape of a trapezium with parallel top and bottom beams. If the bottom left angle is $50^\\circ$, find the top left angle (co-interior).',
              hint: 'Co-interior angles between parallel lines add to 180 degrees.',
              answer: '130^\\circ',
              explanation: 'Co-interior angles between parallel lines sum to $180^\\circ$: $180^\\circ - 50^\\circ = 130^\\circ$.',
            },
            {
              id: '5.3-ex2-q3',
              number: 3,
              context: 'Rhombus Floor Tile',
              question:
                'A ceramic floor tile is a rhombus. One angle is $115^\\circ$. State the other three angles of the tile.',
              hint: 'Opposite angle is 115, and adjacent angles are 180 - 115.',
              answer: '115^\\circ,\\ 65^\\circ,\\ 65^\\circ',
              explanation: 'Opposite angle $= 115^\\circ$. Adjacent angles $= 180 - 115 = 65^\\circ$ each. The angles are $115^\\circ, 65^\\circ, 115^\\circ, 65^\\circ$.',
            },
          ],
        },
        {
          id: '5.3-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Quadrilateral Diagonals & Proofs',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Explore perpendicular diagonals and multi-step geometric proofs.',
            },
          ],
          questions: [
            {
              id: '5.3-ex3-q1',
              number: 1,
              context: 'Diagonal Intersection',
              question:
                'Which two special quadrilaterals have diagonals that cross each other at right angles ($90^\\circ$)?',
              hint: 'Think of a diamond (rhombus) and a flying toy (kite) or square.',
              answer: 'Rhombus, Square (and Kite)',
              explanation: 'The diagonals of a rhombus, square, and kite always intersect at $90^\\circ$ (perpendicular bisectors).',
            },
            {
              id: '5.3-ex3-q2',
              number: 2,
              context: 'Algebraic Parallelogram',
              question:
                'In a parallelogram, two consecutive angles are $2x + 10$ and $3x - 15$. Find $x$ and the size of each angle.',
              hint: 'Consecutive angles in a parallelogram sum to 180 degrees.',
              answer: 'x = 37;\\text{ Angles are }84^\\circ\\text{ and }96^\\circ',
              explanation: '$(2x + 10) + (3x - 15) = 180 \\implies 5x - 5 = 180 \\implies 5x = 185 \\implies x = 37$. Angles: $2(37) + 10 = 84^\\circ$ and $3(37) - 15 = 96^\\circ$. Sum $= 84 + 96 = 180^\\circ$.',
            },
            {
              id: '5.3-ex3-q3',
              number: 3,
              context: 'True or False Investigation',
              question:
                'State whether each statement is True or False:\n(a) Every rectangle is a parallelogram.\n(b) Every parallelogram is a rectangle.\n(c) The diagonals of a rectangle are equal in length.',
              hint: 'Check definitions.',
              answer: '(a) True, (b) False, (c) True',
              explanation: '(a) True: all rectangles have opposite sides parallel and equal. (b) False: a parallelogram doesn\'t need 90° angles. (c) True: the two diagonals of any rectangle are always equal.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '5.test',
      subtopicNumber: 'Test',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '5.test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Test Part A: Core Recall',
          badge: 'Test Part A: Core Recall',
          blocks: [
            {
              type: 'text',
              content:
                'Part A tests core angle calculations around a point, intersecting lines, and quadrilateral properties. Work out all 3 questions on the Teacher\'s Board before checking answers.',
            },
          ],
          questions: [
            {
              id: '5.test-q1',
              number: 1,
              question: 'Four angles meet at a point: $85^\\circ$, $115^\\circ$, $90^\\circ$, and $x$. Find $x$.',
              hint: 'Sum 85 + 115 + 90, then subtract from 360.',
              answer: '70^\\circ',
              explanation: '$85 + 115 + 90 = 290^\\circ$. $x = 360^\\circ - 290^\\circ = 70^\\circ$.',
            },
            {
              id: '5.test-q2',
              number: 2,
              question: 'Two straight lines intersect. One angle is $52^\\circ$. Find the obtuse angle adjacent to it.',
              hint: 'Adjacent angles on a straight line add to 180 degrees.',
              answer: '128^\\circ',
              explanation: '$180^\\circ - 52^\\circ = 128^\\circ$.',
            },
            {
              id: '5.test-q3',
              number: 3,
              question: 'In a parallelogram, one angle is $74^\\circ$. What is the measure of the angle opposite to it?',
              hint: 'Opposite angles in a parallelogram are equal.',
              answer: '74^\\circ',
              explanation: 'Opposite angles of a parallelogram are equal, so it is $74^\\circ$.',
            },
          ],
        },
        {
          id: '5.test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Test Part B: Real-World Problems',
          badge: 'Test Part B: Real-World Problems',
          blocks: [
            {
              type: 'text',
              content:
                'Part B tests applying angle properties to navigation, kite designs, and structures.',
            },
          ],
          questions: [
            {
              id: '5.test-q4',
              number: 1,
              context: 'Windmill Blades',
              question:
                'A windmill has $5$ blades evenly spaced around the center axle. What is the angle between any two adjacent blades?',
              hint: 'Divide 360 by 5.',
              answer: '72^\\circ',
              explanation: '$360^\\circ \\div 5 = 72^\\circ$.',
            },
            {
              id: '5.test-q5',
              number: 2,
              context: 'Kite Construction',
              question:
                'In a kite, the top angle is $64^\\circ$ and the bottom angle is $46^\\circ$. The two side angles are equal. Find the size of each side angle.',
              hint: 'Sum = 360: 64 + 46 + 2s = 360.',
              answer: '125^\\circ\\text{ each}',
              explanation: '$64 + 46 = 110^\\circ$. Remaining $= 360 - 110 = 250^\\circ$. Each side angle $= 250 \\div 2 = 125^\\circ$.',
            },
            {
              id: '5.test-q6',
              number: 3,
              context: 'Pedestrian Crossing Intersection',
              question:
                'Two roads cross at an angle of $78^\\circ$. A pedestrian crosses from one road to the other across the adjacent angle. What is the size of the adjacent obtuse crossing angle?',
              hint: '180 - 78.',
              answer: '102^\\circ',
              explanation: '$180^\\circ - 78^\\circ = 102^\\circ$.',
            },
          ],
        },
        {
          id: '5.test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Test Part C: Reasoning & Challenge',
          badge: 'Test Part C: Reasoning & Challenge',
          blocks: [
            {
              type: 'text',
              content:
                'Part C presents algebraic angle proofs and non-routine quadrilateral puzzles.',
            },
          ],
          questions: [
            {
              id: '5.test-q7',
              number: 1,
              context: 'Algebraic Quadrilateral',
              question:
                'The angles of a quadrilateral are $x$, $2x$, $3x$, and $4x$. Find the value of $x$ and the size of each of the four angles.',
              hint: 'x + 2x + 3x + 4x = 10x = 360.',
              answer: 'x = 36^\\circ;\\text{ Angles are }36^\\circ,\\ 72^\\circ,\\ 108^\\circ,\\ 144^\\circ',
              explanation: '$10x = 360 \\implies x = 36^\\circ$. The angles are $36^\\circ, 72^\\circ, 108^\\circ, 144^\\circ$. Check sum: $36 + 72 + 108 + 144 = 360^\\circ$.',
            },
            {
              id: '5.test-q8',
              number: 2,
              context: 'Intersecting Lines Proof',
              question:
                'Two straight lines intersect. One angle is $x$ and an adjacent angle is $3x - 20$. Find $x$ and determine whether the lines are perpendicular.',
              hint: 'x + (3x - 20) = 180.',
              answer: 'x = 50^\\circ;\\text{ Angles are }50^\\circ\\text{ and }130^\\circ;\\text{ Not perpendicular}',
              explanation: '$4x - 20 = 180 \\implies 4x = 200 \\implies x = 50^\\circ$. Adjacent angle is $130^\\circ$. Since neither angle is $90^\\circ$, they are not perpendicular.',
            },
            {
              id: '5.test-q9',
              number: 3,
              context: 'Special Quadrilateral Properties',
              question:
                'A quadrilateral has all four sides equal in length, but its diagonals are NOT equal in length. Name this quadrilateral.',
              hint: 'All sides equal means square or rhombus. Which one has unequal diagonals?',
              answer: 'Rhombus',
              explanation: 'A rhombus has four equal sides, but its diagonals have different lengths (one long diagonal and one short diagonal). A square has equal diagonals.',
            },
          ],
        },
      ],
    },
  ],
};
