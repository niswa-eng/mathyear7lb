/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit13: Unit = {
  id: 'unit-13',
  unitNumber: 13,
  title: 'Probability',
  learningObjectives: [
    'Describe and compare the likelihood of events.',
    'Represent probabilities as fractions, decimals, and percentages.',
    'Identify possible outcomes and determine whether they are equally likely.',
    'Calculate theoretical and experimental probabilities.',
    'Conduct probability experiments and analyse the results.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 13.1 The probability scale
    // -------------------------------------------------------------------------
    {
      id: '13.1',
      subtopicNumber: '13.1',
      title: 'The probability scale',
      type: 'lesson',
      steps: [
        {
          id: '13.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'The 0 to 1 Likelihood Scale',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Weather Forecasts & Coin Tosses',
              scenario:
                'When a meteorologist says there is a "$50\\%$ chance of rain", it means an EVEN CHANCE—just like tossing a fair coin: heads and tails are equally likely. If they say "$0\\%$ chance of snow in July in the Sahara", that event is IMPOSSIBLE ($0$). If they say "$100\\%$ chance the sun rises tomorrow", that event is CERTAIN ($1$).',
              takeaway:
                'Every probability in the universe is a number between $0$ and $1$ (or $0\\%$ and $100\\%$):\n- $0$ = Impossible\n- Between $0$ and $0.5$ = Unlikely\n- $0.5$ ($\\frac{1}{2}$, $50\\%$) = Even chance\n- Between $0.5$ and $1$ = Likely\n- $1$ = Certain.\nTheoretical Probability $= \\frac{\\text{Number of successful outcomes}}{\\text{Total number of possible outcomes}}$.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Probability ($P$)',
                  definition: 'A mathematical measure of how likely an event is to happen, expressed as a fraction, decimal, or percentage from 0 to 1.',
                  example: '$P(\\text{Heads}) = \\frac{1}{2} = 0.5 = 50\\%$.',
                },
                {
                  term: 'Equally Likely Outcomes',
                  definition: 'Outcomes that have the exact same chance of occurring.',
                  example: 'Each number $1, 2, 3, 4, 5, 6$ on a fair six-sided die has probability $\\frac{1}{6}$.',
                },
                {
                  term: 'Sample Space',
                  definition: 'The complete set of all possible outcomes of an experiment.',
                  example: 'For a regular die, sample space is $\\{1, 2, 3, 4, 5, 6\\}$.',
                },
              ],
            },
          ],
          widget: {
            type: 'number_line',
            title: 'The 0 to 1 Probability Scale',
            initialParams: { min: 0, max: 1, initialStart: 0, initialHop: 0.5 },
          },
        },
        {
          id: '13.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Probability First & Fair Dice',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\nA fair six-sided die numbered $1$ to $6$ is rolled.\n(a) What is the probability of rolling a $4$?\n(b) What is the probability of rolling an EVEN number?\n(c) What is the probability of rolling a number greater than $4$?\n(d) What is the probability of rolling a $9$?',
                context: 'Calculating basic theoretical probabilities from equally likely outcomes',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Identify total possible outcomes',
                    content:
                      'The die has $6$ faces: $\\{1, 2, 3, 4, 5, 6\\}$. Total outcomes $= 6$.',
                    mathFormula: '\\text{Total outcomes} = 6',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (a): Rolling a 4',
                    content:
                      'Only $1$ face shows $4$. Probability is $\\frac{1}{6}$.',
                    mathFormula: 'P(4) = \\frac{1}{6}',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (b): Rolling an even number',
                    content:
                      'Even numbers are $\\{2, 4, 6\\}$ ($3$ successful outcomes). Simplify $\\frac{3}{6} = \\frac{1}{2}$.',
                    mathFormula: 'P(\\text{Even}) = \\frac{3}{6} = \\frac{1}{2} = 0.5',
                  },
                  {
                    stepNumber: 4,
                    label: 'Part (c): Rolling a number greater than 4',
                    content:
                      'Numbers strictly greater than 4 are $\\{5, 6\\}$ ($2$ outcomes). Simplify $\\frac{2}{6} = \\frac{1}{3}$.',
                    mathFormula: 'P(> 4) = \\frac{2}{6} = \\frac{1}{3}',
                  },
                  {
                    stepNumber: 5,
                    label: 'Part (d): Rolling a 9',
                    content:
                      'There is no 9 on a standard die ($0$ outcomes). This event is IMPOSSIBLE ($0$).',
                    mathFormula: 'P(9) = 0',
                  },
                ],
                finalAnswer: '(a) 1/6; (b) 1/2; (c) 1/3; (d) 0 (impossible)',
              },
            },
          ],
        },
        {
          id: '13.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Probabilities Greater Than 1 or Negative',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Writing a probability as 1.5 or 5/3',
                wrongWay: 'Probability = 120% or 1.5',
                whyWrong:
                  'A probability CANNOT exceed 1 (or 100%) and cannot be less than 0! If you get a value greater than 1, you put the total on top instead of the bottom.',
                correctWay:
                  'Successful outcomes are ALWAYS a part of the total, so the fraction is always proper: $0 \\le P(E) \\le 1$.',
                proTip:
                  'Formula reminder: $\\frac{\\text{What you want}}{\\text{Total possibilities}}$. The top number is never bigger than the bottom number.',
                memoryHook: 'Probability lives strictly between 0 and 1!',
              },
            },
          ],
        },
        {
          id: '13.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Express each probability as a simplified fraction.',
            },
          ],
          questions: [
            {
              id: '13.1-ex1-q1',
              number: 1,
              question: 'A fair coin is tossed. What is the probability of getting Heads?',
              hint: 'There are 2 sides: 1 is Heads.',
              answer: '1/2 (or 0.5, 50%)',
              explanation: '$P(\\text{Heads}) = \\frac{1}{2}$.',
            },
            {
              id: '13.1-ex1-q2',
              number: 2,
              question: 'A bag contains $3$ red marbles and $7$ blue marbles. What is the probability of randomly picking a red marble?',
              hint: 'Total marbles $= 3 + 7 = 10$. Red $= 3$.',
              answer: '3/10 (or 0.3, 30%)',
              explanation: 'Total $= 10$. $P(\\text{Red}) = \\frac{3}{10}$.',
            },
            {
              id: '13.1-ex1-q3',
              number: 3,
              question: 'What word describes an event with a probability of $0$?',
              hint: 'It cannot happen under any circumstances.',
              answer: 'Impossible',
              explanation: 'A probability of $0$ means the event is impossible.',
            },
          ],
        },
        {
          id: '13.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Calculate probabilities from spinners, cards, and prize draws on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '13.1-ex2-q1',
              number: 1,
              question:
                'An eight-sided spinner is numbered $1$ to $8$. What is the probability of spinning a PRIME number? (Primes from 1 to 8: 2, 3, 5, 7)',
              hint: 'Count the prime numbers: there are 4 primes out of 8 sectors. Simplify $\\frac{4}{8}$.',
              answer: '1/2 (or 4/8)',
              explanation: 'Primes are $\\{2, 3, 5, 7\\}$ ($4$ outcomes). $P = \\frac{4}{8} = \\frac{1}{2}$.',
            },
            {
              id: '13.1-ex2-q2',
              number: 2,
              question:
                'A raffle sells $200$ tickets. Oscar buys $10$ tickets. What is the probability that Oscar wins the top prize, expressed as a percentage?',
              hint: 'Fraction is $\\frac{10}{200}$. Simplify to $\\frac{1}{20}$ and convert to percentage.',
              answer: '5%',
              explanation: '$\\frac{10}{200} = \\frac{5}{100} = 5\\%$.',
            },
            {
              id: '13.1-ex2-q3',
              number: 3,
              question:
                'A box of chocolates contains $12$ milk chocolates, $8$ dark chocolates, and $5$ white chocolates. A chocolate is chosen at random. What is the probability it is NOT dark chocolate?',
              hint: 'Total $= 12 + 8 + 5 = 25$. Not dark $= 12 + 5 = 17$.',
              answer: '17/25 (or 68%)',
              explanation: 'Total $= 25$. Not dark $= 17$. $P = \\frac{17}{25} = 68\\%$.',
            },
          ],
        },
        {
          id: '13.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Tackle these 3 challenge probability questions on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '13.1-ex3-q1',
              number: 1,
              question:
                'A bag contains only red, green, and yellow counters. The probability of picking red is $\\frac{1}{3}$, and the probability of picking green is $\\frac{1}{4}$. What is the probability of picking yellow?',
              hint: 'All probabilities must add to 1. Subtract $\\frac{1}{3} + \\frac{1}{4}$ from 1.',
              answer: '5/12',
              explanation:
                '$\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$. $P(\\text{Yellow}) = 1 - \\frac{7}{12} = \\frac{5}{12}$.',
            },
            {
              id: '13.1-ex3-q2',
              number: 2,
              question:
                'In a card game with numbered cards $1$ to $50$, what is the probability of picking a card that is a SQUARE number?',
              hint: 'List square numbers up to 50: 1, 4, 9, 16, 25, 36, 49. How many are there?',
              answer: '7/50 (or 14%)',
              explanation:
                'Squares: $\\{1, 4, 9, 16, 25, 36, 49\\}$ ($7$ numbers). $P = \\frac{7}{50} = \\frac{14}{100} = 14\\%$.',
            },
            {
              id: '13.1-ex3-q3',
              number: 3,
              question:
                'Two fair coins are flipped together. What is the probability of getting AT LEAST ONE Head?',
              hint: 'List all 4 outcomes: HH, HT, TH, TT. Which ones have at least one Head?',
              answer: '3/4 (or 75%)',
              explanation:
                'Sample space: $\\{\\text{HH, HT, TH, TT}\\}$. Three out of four contain at least one Head: $P = \\frac{3}{4} = 75\\%$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 13.2 Mutually exclusive outcomes
    // -------------------------------------------------------------------------
    {
      id: '13.2',
      subtopicNumber: '13.2',
      title: 'Mutually exclusive outcomes',
      type: 'lesson',
      steps: [
        {
          id: '13.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Can They Happen Together?',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Light Switches & Traffic Lights',
              scenario:
                'A standard traffic light can be Red OR Green, but it can never be both Red and Green at the same moment! Because these two events cannot occur at the same time, they are MUTUALLY EXCLUSIVE. If a set of mutually exclusive outcomes covers every possible result, their probabilities MUST add up to exactly $1$.',
              takeaway:
                'Two key rules for mutually exclusive outcomes:\n1. Addition Rule: $P(A \\text{ or } B) = P(A) + P(B)$.\n2. Complement Rule (Sum is 1): $P(\\text{not } A) = 1 - P(A)$.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Mutually Exclusive',
                  definition: 'Events that cannot happen at the same time in a single trial.',
                  example: 'Turning left and turning right at the exact same moment.',
                },
                {
                  term: 'Exhaustive Events',
                  definition: 'A set of outcomes that covers ALL possible results of an experiment.',
                  example: 'Pass or Fail on a test (no other result exists).',
                },
                {
                  term: 'The Complement ($A\'$ or Not $A$)',
                  definition: 'The event that $A$ does NOT occur. $P(\\text{not } A) = 1 - P(A)$.',
                  example: 'If chance of rain is $0.3$, chance of NO rain is $1 - 0.3 = 0.7$.',
                },
              ],
            },
          ],
        },
        {
          id: '13.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Missing Probability First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\nA spinner has sections colored Red, Blue, Green, and Yellow.\nThe table shows the probabilities:\n- $P(\\text{Red}) = 0.35$\n- $P(\\text{Blue}) = 0.20$\n- $P(\\text{Green}) = 0.30$\n(a) What is the probability of spinning Yellow?\n(b) What is the probability of spinning Red OR Blue?\n(c) What is the probability of NOT spinning Green?',
                context: 'Applying the sum-to-1 rule and addition rule for mutually exclusive events',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Find P(Yellow) using sum to 1',
                    content:
                      'All probabilities must sum to $1.00$:\n$\\text{Sum known} = 0.35 + 0.20 + 0.30 = 0.85$.\n$P(\\text{Yellow}) = 1.00 - 0.85 = 0.15$.',
                    mathFormula: 'P(\\text{Yellow}) = 1 - 0.85 = 0.15',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): P(Red or Blue)',
                    content:
                      'Because Red and Blue cannot happen simultaneously, add their probabilities:\n$P(\\text{Red or Blue}) = 0.35 + 0.20 = 0.55$.',
                    mathFormula: '0.35 + 0.20 = 0.55',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): P(not Green)',
                    content:
                      'Use the complement rule:\n$P(\\text{not Green}) = 1 - P(\\text{Green}) = 1 - 0.30 = 0.70$.',
                    mathFormula: '1 - 0.30 = 0.70',
                  },
                ],
                finalAnswer: '(a) 0.15; (b) 0.55; (c) 0.70',
              },
            },
          ],
        },
        {
          id: '13.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Adding Probabilities of Non-Exclusive Events',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Adding P(King) + P(Heart) directly to find P(King or Heart)',
                wrongWay: '4/52 + 13/52 = 17/52',
                whyWrong:
                  'A card CAN be both a King and a Heart at the same time (the King of Hearts)! If you add directly, you count that card twice.',
                correctWay:
                  'Only use $P(A \\text{ or } B) = P(A) + P(B)$ when the events are MUTUALLY EXCLUSIVE (cannot happen together).',
                proTip:
                  'Always ask yourself: "Can both outcomes happen on the exact same pick?" If yes, they are NOT mutually exclusive.',
                memoryHook: 'Mutually exclusive = mutually impossible to happen together!',
              },
            },
          ],
        },
        {
          id: '13.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Use the sum to 1 rule.',
            },
          ],
          questions: [
            {
              id: '13.2-ex1-q1',
              number: 1,
              question: 'If the probability of winning a game is $0.7$, what is the probability of NOT winning?',
              hint: 'Subtract from 1: $1 - 0.7$.',
              answer: '0.3 (or 30%)',
              explanation: '$P(\\text{not winning}) = 1 - 0.7 = 0.3$.',
            },
            {
              id: '13.2-ex1-q2',
              number: 2,
              question: 'Are rolling an odd number and rolling an even number on a die mutually exclusive?',
              hint: 'Can a number be both odd and even?',
              answer: 'Yes (they cannot happen together)',
              explanation: 'No integer can be both odd and even at the same time.',
            },
            {
              id: '13.2-ex1-q3',
              number: 3,
              question: 'A spinner has 3 colors: $P(\\text{Red}) = 0.4$ and $P(\\text{Blue}) = 0.25$. What is $P(\\text{Yellow})$?',
              hint: 'Sum is 1. Subtract $0.4 + 0.25 = 0.65$ from 1.',
              answer: '0.35',
              explanation: '$1 - (0.4 + 0.25) = 1 - 0.65 = 0.35$.',
            },
          ],
        },
        {
          id: '13.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply mutual exclusivity to sports outcomes, transport, and manufacturing on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '13.2-ex2-q1',
              number: 1,
              question:
                'In a football match, the probability of Team A winning is $0.55$ and the probability of a draw is $0.25$. What is the probability that Team A LOSES?',
              hint: 'The three outcomes (Win, Draw, Lose) are mutually exclusive and sum to 1.',
              answer: '0.20 (or 20%)',
              explanation: '$P(\\text{Lose}) = 1 - (0.55 + 0.25) = 1 - 0.80 = 0.20$.',
            },
            {
              id: '13.2-ex2-q2',
              number: 2,
              question:
                'A factory quality check classifies light bulbs as: Perfect ($92\\%$), Minor Flaw ($6\\%$), or Defective. What is the probability a randomly selected bulb is Defective?',
              hint: 'Subtract $92\\% + 6\\%$ from $100\\%$.',
              answer: '2% (or 0.02)',
              explanation: '$100\\% - (92\\% + 6\\%) = 100\\% - 98\\% = 2\\%$.',
            },
            {
              id: '13.2-ex2-q3',
              number: 3,
              question:
                'The probability a morning train arrives on time is $\\frac{4}{5}$. What is the probability the train is late?',
              hint: 'Calculate $1 - \\frac{4}{5}$.',
              answer: '1/5 (or 20%)',
              explanation: '$1 - \\frac{4}{5} = \\frac{1}{5}$.',
            },
          ],
        },
        {
          id: '13.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve these 3 algebraic and multi-stage probability challenges on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '13.2-ex3-q1',
              number: 1,
              question:
                'A biased 4-sided spinner has outcomes A, B, C, D. $P(A) = x$, $P(B) = 2x$, $P(C) = 0.1$, and $P(D) = 0.3$. Find the value of $x$.',
              hint: 'Add all probabilities: $x + 2x + 0.1 + 0.3 = 1.0 \\implies 3x + 0.4 = 1.0$.',
              answer: 'x = 0.2 (P(A) = 0.2, P(B) = 0.4)',
              explanation:
                '$3x + 0.4 = 1.0 \\implies 3x = 0.6 \\implies x = 0.2$.',
            },
            {
              id: '13.2-ex3-q2',
              number: 2,
              question:
                'A bag has red, blue, and yellow beads. $P(\\text{not red}) = 0.65$ and $P(\\text{yellow}) = 0.25$. What is $P(\\text{blue})$?',
              hint: '$P(\\text{red}) = 1 - 0.65 = 0.35$. Blue and yellow make up "not red" ($0.65$). Subtract yellow: $0.65 - 0.25$.',
              answer: '0.40',
              explanation:
                'Since "not red" consists of blue and yellow: $P(\\text{blue}) = 0.65 - 0.25 = 0.40$.',
            },
            {
              id: '13.2-ex3-q3',
              number: 3,
              question:
                'Explain why "drawing an Ace" and "drawing a Red card" from a standard pack of cards are NOT mutually exclusive.',
              hint: 'Can a card be both an Ace and Red?',
              answer: 'They are not mutually exclusive because the Ace of Hearts and Ace of Diamonds are both Ace AND Red',
              explanation:
                'There are two cards (Ace of Hearts, Ace of Diamonds) that satisfy both conditions simultaneously.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 13.3 Experimental probabilities
    // -------------------------------------------------------------------------
    {
      id: '13.3',
      subtopicNumber: '13.3',
      title: 'Experimental probabilities',
      type: 'lesson',
      steps: [
        {
          id: '13.3-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Theoretical vs Experimental Probability',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Tossing a Drawing Pin (Thumb Tack)',
              scenario:
                'If you drop a drawing pin on a table, will it land point UP or point DOWN? Unlike a symmetrical coin, you cannot calculate the theoretical probability by simple symmetry. The only way to know is to conduct an EXPERIMENT: drop it $100$ times and count how many times it lands point up! That calculation is called RELATIVE FREQUENCY or experimental probability.',
              takeaway:
                'Relative Frequency (Experimental Probability) $= \\frac{\\text{Frequency of event}}{\\text{Total number of trials}}$.\nThe LAW OF LARGE NUMBERS states that as the number of trials increases, the experimental probability gets closer and closer to the true theoretical probability.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Experimental Probability (Relative Frequency)',
                  definition: 'An estimate of probability based on the results of an actual experiment or data collection.',
                  example: 'If a drawing pin lands point up 62 times in 100 drops, relative frequency $= \\frac{62}{100} = 0.62$.',
                },
                {
                  term: 'Number of Trials',
                  definition: 'The total number of times the experiment is repeated.',
                  example: 'Flipping a coin 200 times means 200 trials.',
                },
                {
                  term: 'Expected Frequency',
                  definition: 'Calculated as $\\text{Expected Count} = \\text{Probability} \\times \\text{Number of trials}$.',
                  example: 'Rolling a 6 on a fair die in 120 rolls: $120 \\times \\frac{1}{6} = 20$ expected times.',
                },
                {
                  term: 'Biased vs Fair',
                  definition: 'A fair object gives equally likely outcomes; a biased object is weighted so some outcomes happen more often.',
                  example: 'A weighted die rolling a 6 half the time is biased.',
                },
              ],
            },
          ],
        },
        {
          id: '13.3-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Relative Frequency & Expected Frequency First',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'Simplest starter question first:\n(a) A coin is flipped $50$ times and lands on Heads $28$ times. Find the experimental probability of Heads.\n(b) If a fair six-sided die is rolled $180$ times, how many times would you EXPECT to roll a $5$?\n(c) A dice is rolled $600$ times and lands on $6$ exactly $250$ times. Is the die likely to be biased? Explain.',
                context: 'Calculating relative frequency, expected counts, and identifying bias',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Calculate relative frequency',
                    content:
                      'Relative frequency $= \\frac{\\text{Successful trials}}{\\text{Total trials}} = \\frac{28}{50} = \\frac{56}{100} = 0.56$.',
                    mathFormula: '\\frac{28}{50} = 0.56 = 56\\%',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Calculate expected frequency',
                    content:
                      'For a fair die, $P(5) = \\frac{1}{6}$. Multiply by total rolls:\n$\\text{Expected} = 180 \\times \\frac{1}{6} = 30$ times.',
                    mathFormula: '180 \\times \\frac{1}{6} = 30',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Test for bias',
                    content:
                      'For a fair die in $600$ rolls, expected number of sixes is $600 \\times \\frac{1}{6} = 100$.\nGetting $250$ sixes is much higher than $100$ ($250 \\div 600 \\approx 0.42$ instead of $0.17$). The die is heavily biased towards landing on 6.',
                    mathFormula: '\\frac{250}{600} \\approx 0.42 \\gg 0.17 \\implies \\text{Biased}',
                  },
                ],
                finalAnswer: '(a) 0.56 (56%); (b) 30 times; (c) Yes, heavily biased (expected 100, got 250)',
              },
            },
          ],
        },
        {
          id: '13.3-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'The Gambler’s Fallacy',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Thinking tails is "due" because heads appeared 5 times in a row',
                wrongWay: 'Believing the next flip is more likely to be tails',
                whyWrong:
                  'A coin has no memory! Coins cannot remember past flips. Each flip is an independent trial with probability $\\frac{1}{2}$ for Heads and $\\frac{1}{2}$ for Tails.',
                correctWay:
                  'Past outcomes do not affect the next flip of a fair coin. $P(\\text{Tails})$ is still exactly $0.5$.',
                proTip:
                  'Remember: Randomness produces streaks naturally! 5 heads in a row happens regularly without the coin being broken or "due" for a change.',
                memoryHook: 'Coins don\'t have memories!',
              },
            },
          ],
        },
        {
          id: '13.3-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Level 1: Simplest Drills',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content:
                'Solve all 3 questions on the Teacher\'s Board. Calculate relative frequencies and expected values.',
            },
          ],
          questions: [
            {
              id: '13.3-ex1-q1',
              number: 1,
              question: 'In $100$ spins of a spinner, it lands on Green $34$ times. What is the experimental probability of Green?',
              hint: 'Write $34$ out of $100$ as a decimal or percentage.',
              answer: '0.34 (or 34%, 17/50)',
              explanation: '$\\frac{34}{100} = 0.34 = 34\\%$.',
            },
            {
              id: '13.3-ex1-q2',
              number: 2,
              question: 'A fair coin is flipped $200$ times. How many times would you expect it to land on Tails?',
              hint: 'Multiply $200$ by $\\frac{1}{2}$.',
              answer: '100 times',
              explanation: '$200 \\times 0.5 = 100$ times.',
            },
            {
              id: '13.3-ex1-q3',
              number: 3,
              question: 'Which experiment gives a more reliable estimate of probability: $10$ flips or $1000$ flips?',
              hint: 'More trials give a more accurate picture.',
              answer: '1000 flips (larger sample size)',
              explanation: 'By the Law of Large Numbers, a larger number of trials gives a more reliable estimate.',
            },
          ],
        },
        {
          id: '13.3-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Level 2: Real-World Scenarios',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply experimental probability to medical testing, wildlife surveys, and sport statistics on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '13.3-ex2-q1',
              number: 1,
              question:
                'A basketball player made $38$ successful free throws out of $50$ attempts. In the next season, they will take $150$ free throws. Based on their relative frequency, how many are expected to score?',
              hint: 'Find relative frequency: $38 \\div 50 = 0.76$. Then multiply by 150 (or $3 \\times 38$).',
              answer: '114 free throws',
              explanation: '$150$ is $3$ times $50$. Expected score $= 3 \\times 38 = 114$ free throws ($150 \\times 0.76 = 114$).',
            },
            {
              id: '13.3-ex2-q2',
              number: 2,
              question:
                'A traffic surveyor counts vehicles passing a junction: $160$ cars, $30$ vans, $10$ buses. What is the experimental probability that the next vehicle is a bus?',
              hint: 'Total vehicles $= 160 + 30 + 10 = 200$. Bus $= 10$.',
              answer: '1/20 (or 0.05, 5%)',
              explanation: 'Total $= 200$. $P(\\text{Bus}) = \\frac{10}{200} = \\frac{1}{20} = 0.05 = 5\\%$.',
            },
            {
              id: '13.3-ex2-q3',
              number: 3,
              question:
                'A seed packet claims a germination rate of $85\\%$. A gardener plants $60$ seeds. How many seeds are expected to germinate successfully?',
              hint: 'Calculate $85\\%$ of $60$: $0.85 \\times 60$.',
              answer: '51 seeds',
              explanation: '$0.85 \\times 60 = 51$ seeds.',
            },
          ],
        },
        {
          id: '13.3-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Level 3: Challenge & Reasoning',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Evaluate statistical bias and multi-trial reliability on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '13.3-ex3-q1',
              number: 1,
              question:
                'Sophie rolls a die $120$ times and records 42 sixes. Ben rolls the same die $12$ times and records 4 sixes. Both got $\\approx 33\\%$ sixes. Which experiment provides STRONGER evidence that the die is biased?',
              hint: 'Consider sample size and random fluctuation.',
              answer: 'Sophie\'s experiment (120 trials is much harder to achieve by pure luck)',
              explanation:
                'In 12 rolls, 4 sixes can easily happen by chance. But in 120 rolls, getting 42 sixes (expected 20) is statistically very unlikely for a fair die, giving strong evidence of bias.',
            },
            {
              id: '13.3-ex3-q2',
              number: 2,
              question:
                'Two students roll a drawing pin: Group A drops it $50$ times and gets point up $32$ times. Group B drops it $150$ times and gets point up $88$ times. What is the combined best estimate of the probability of landing point up?',
              hint: 'Combine all successful trials ($32 + 88$) and divide by all trials ($50 + 150 = 200$).',
              answer: '0.60 (or 60%, 120/200)',
              explanation:
                'Combined trials $= 200$. Combined point up $= 32 + 88 = 120$. Relative frequency $= \\frac{120}{200} = \\frac{60}{100} = 0.60$.',
            },
            {
              id: '13.3-ex3-q3',
              number: 3,
              question:
                'A weather app states a $30\\%$ chance of rain on Saturday and a $30\\%$ chance of rain on Sunday. Does this mean there is a $60\\%$ chance of rain over the weekend? Explain why or why not.',
              hint: 'Rain on Saturday and rain on Sunday are NOT mutually exclusive (it can rain on both days!).',
              answer: 'No, because the two days are not mutually exclusive (it can rain on both days)',
              explanation:
                'You cannot simply add probabilities of non-exclusive events across two different days. The probability of rain on at least one day is $1 - (0.70 \\times 0.70) = 1 - 0.49 = 51\\%$, not $60\\%$.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Unit 13 End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '13-test',
      subtopicNumber: '13',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '13-test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Part A: Basic Recall & Calculation',
          badge: 'Test: Part A (Basic Recall)',
          blocks: [
            {
              type: 'text',
              content:
                'Answer all 3 mixed recall questions covering Unit 13 on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '13-test-q1',
              number: 1,
              question: 'A letter is chosen at random from the word "MATHEMATICS". What is the probability it is the letter "M"?',
              hint: 'Count total letters (11) and how many are M (2).',
              answer: '2/11',
              explanation: 'There are $11$ letters total, and $2$ of them are "M": $P = \\frac{2}{11}$.',
            },
            {
              id: '13-test-q2',
              number: 2,
              question: 'If the probability of an event happening is $0.42$, what is the probability of the event NOT happening?',
              hint: 'Subtract $0.42$ from $1.00$.',
              answer: '0.58',
              explanation: '$1 - 0.42 = 0.58$.',
            },
            {
              id: '13-test-q3',
              number: 3,
              question: 'A fair spinner has 4 equal sections: Red, Blue, Green, Yellow. In $120$ spins, how many times would you expect it to land on Yellow?',
              hint: '$120 \\times \\frac{1}{4}$.',
              answer: '30 times',
              explanation: '$120 \\times \\frac{1}{4} = 30$ times.',
            },
          ],
        },
        {
          id: '13-test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Part B: Real-World Applications',
          badge: 'Test: Part B (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content:
                'Apply probability principles to games, sports, and quality control on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '13-test-q4',
              number: 1,
              question:
                'A bag has $5$ red counters, $8$ blue counters, and $7$ yellow counters. What is the probability of picking a counter that is EITHER red OR yellow?',
              hint: 'Total $= 5 + 8 + 7 = 20$. Red or yellow $= 5 + 7 = 12$.',
              answer: '3/5 (or 12/20, 60%)',
              explanation: 'Total $= 20$. Red or yellow $= 12$. $P = \\frac{12}{20} = \\frac{3}{5} = 60\\%$.',
            },
            {
              id: '13-test-q5',
              number: 2,
              question:
                'A school bus is on time on $18$ out of $20$ school days. Over a school term of $60$ days, how many days is the bus expected to be LATE?',
              hint: 'Late on $2$ out of $20$ days ($10\\%$). Multiply $60$ by $0.10$.',
              answer: '6 days',
              explanation: 'Fraction late $= \\frac{2}{20} = \\frac{1}{10}$. Over $60$ days: $60 \\times \\frac{1}{10} = 6$ days late.',
            },
            {
              id: '13-test-q6',
              number: 3,
              question:
                'In an archery contest, an archer hits the bullseye with probability $0.35$. What is the probability of missing the bullseye?',
              hint: 'Calculate $1 - 0.35$.',
              answer: '0.65 (or 65%)',
              explanation: '$1 - 0.35 = 0.65$.',
            },
          ],
        },
        {
          id: '13-test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Part C: Reasoning & Challenge',
          badge: 'Test: Part C (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content:
                'Complete these 3 challenge problems on unknown frequencies, algebra, and independence on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '13-test-q7',
              number: 1,
              question:
                'A bag contains only blue and yellow marbles. The probability of picking a blue marble is $\\frac{2}{5}$. If there are $18$ yellow marbles, how many total marbles are in the bag?',
              hint: 'Yellow fraction is $1 - \\frac{2}{5} = \\frac{3}{5}$. If 3 parts $= 18$, then 1 part $= 6$. Total is 5 parts.',
              answer: '30 marbles (12 blue, 18 yellow)',
              explanation:
                'Yellow is $\\frac{3}{5}$ of total. $18 \\div 3 = 6$ per fifth. Total marbles $= 5 \\times 6 = 30$.',
            },
            {
              id: '13-test-q8',
              number: 2,
              question:
                'A spinner has sectors labelled 1, 2, 3, 4. The probability of landing on 1 is $0.2$, on 2 is $0.3$, and the probabilities of 3 and 4 are equal. Find $P(4)$.',
              hint: 'Remaining probability is $1 - (0.2 + 0.3) = 0.5$. Divide equally by 2.',
              answer: '0.25 (or 25%)',
              explanation:
                '$1 - 0.5 = 0.5$. Since 3 and 4 are equal: $P(4) = 0.5 \\div 2 = 0.25$.',
            },
            {
              id: '13-test-q9',
              number: 3,
              question:
                'A coin is flipped $10$ times and lands on Heads every single time. What is the theoretical probability of landing on Heads on the 11th flip?',
              hint: 'Is the coin’s 11th flip dependent on previous flips if the coin is fair?',
              answer: '1/2 (or 0.5, 50%)',
              explanation:
                'Assuming the coin is fair, each toss is independent: the 11th toss has an exact $50\\%$ chance of Heads.',
            },
          ],
        },
      ],
    },
  ],
};
