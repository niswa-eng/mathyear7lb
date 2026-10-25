/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Unit } from '../types/content.ts';

export const unit6: Unit = {
  id: 'unit-6',
  unitNumber: 6,
  title: 'Collecting Data',
  learningObjectives: [
    'Choose suitable methods to collect data and select samples.',
    'Understand how sample size affects data collection and analysis.',
  ],
  subtopics: [
    // -------------------------------------------------------------------------
    // 6.1 Conducting an investigation
    // -------------------------------------------------------------------------
    {
      id: '6.1',
      subtopicNumber: '6.1',
      title: 'Conducting an investigation',
      type: 'lesson',
      steps: [
        {
          id: '6.1-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Detective Questions & Data Cycles',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'The School Canteen Mystery',
              scenario:
                'Suppose students are complaining that the school cafeteria runs out of food. If you ask a biased question like "Don\'t you agree the canteen is terrible?", your answers will be one-sided! A true statistician acts like an impartial detective: posing a clear hypothesis, collecting fair primary or secondary data using tally charts, analyzing the evidence, and reaching a truthful conclusion.',
              takeaway:
                'A statistical enquiry follows a 4-step cycle: 1. Specify the problem & hypothesis $\\to$ 2. Plan and collect data $\\to$ 3. Process and represent data $\\to$ 4. Interpret and discuss results.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Primary Data',
                  definition: 'Data collected firsthand by yourself specifically for your investigation.',
                  example: 'Counting cars outside school or handing out your own questionnaire.',
                },
                {
                  term: 'Secondary Data',
                  definition: 'Data collected by someone else that you use for your research.',
                  example: 'Weather data from the Meteorological Office or census statistics online.',
                },
                {
                  term: 'Hypothesis',
                  definition: 'A testable prediction or statement that you investigate using data.',
                  example: '"Year 7 students spend more time reading on weekends than on weekdays."',
                },
              ],
            },
            {
              type: 'rule_box',
              title: 'Designing Good Survey Questions',
              rule: 'Avoid bias by following these three rules:',
              tips: [
                'Rule 1: Never ask leading questions (e.g. avoid "Do you agree that...")',
                'Rule 2: Provide clear, non-overlapping response boxes (e.g. 0-2, 3-5, 6+)',
                'Rule 3: Keep questions short, polite, and unambiguous with no jargon',
              ],
            },
          ],
        },
        {
          id: '6.1-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Identifying Data Types & Fixing Biased Questions',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  '(a) State whether each source is Primary or Secondary data:\n(i) You measure the heights of 25 classmates.\n(ii) You look up rainfall records on the internet.\n(b) Criticize this survey question: "How old are you? [ ] 10-12  [ ] 12-14  [ ] 14-16"\n(c) Rewrite the response options to fix the mistake.',
                context: 'Simplest Data Types and Survey Design',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Classify data sources',
                    content:
                      '(i) You measured the heights yourself, so it is PRIMARY data.\n(ii) The rainfall was recorded by someone else, so it is SECONDARY data.',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Find the flaw in the response boxes',
                    content:
                      'The response boxes overlap! If someone is exactly 12 years old, they do not know whether to tick the first box (10-12) or the second box (12-14).',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Rewrite non-overlapping response options',
                    content:
                      'Make each category distinct and clear: [ ] 10 to 11, [ ] 12 to 13, [ ] 14 to 15, [ ] 16 or older.',
                  },
                ],
                finalAnswer: '(a) (i) Primary, (ii) Secondary; (b) Overlapping age categories; (c) [ ] 10-11, [ ] 12-13, [ ] 14-15, [ ] 16+',
              },
            },
          ],
        },
        {
          id: '6.1-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'Overlapping Categories & Leading Questions',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Creating response options with overlapping boundaries',
                wrongWay: 'Time spent studying: [ ] 0 - 1 hr   [ ] 1 - 2 hrs   [ ] 2 - 3 hrs',
                whyWrong: 'A student who studies for exactly 1 hour or 2 hours does not know which box to tick! Data will be duplicated or confused.',
                correctWay: '[ ] Under 1 hr   [ ] 1 hr up to 2 hrs   [ ] 2 hrs or more',
                proTip: 'Always check the border numbers. No two option boxes should ever share the exact same boundary number.',
                memoryHook: 'Good survey boxes are like private hotel rooms: no sharing numbers!',
              },
            },
          ],
        },
        {
          id: '6.1-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Data Sources & Question Check',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Decide the data category and identify survey question flaws.',
            },
          ],
          questions: [
            {
              id: '6.1-ex1-q1',
              number: 1,
              question: 'Zoe counts how many cars pass her house in 30 minutes. Is this Primary or Secondary data?',
              hint: 'Did Zoe collect it herself directly?',
              answer: 'Primary data',
              explanation: 'Because Zoe collected the information herself for her own enquiry, it is primary data.',
            },
            {
              id: '6.1-ex1-q2',
              number: 2,
              question: 'Liam downloads a spreadsheet of national Olympic medal counts from Wikipedia. Is this Primary or Secondary data?',
              hint: 'Did Liam award and record the medals himself?',
              answer: 'Secondary data',
              explanation: 'Because the data was collected and published by an external organization, it is secondary data.',
            },
            {
              id: '6.1-ex1-q3',
              number: 3,
              question: 'Why is this survey question biased: "Don\'t you think homework is boring?"',
              hint: 'Notice how the question pushes the person to agree.',
              answer: 'It is a leading question that pushes the respondent to agree.',
              explanation: 'The phrasing "Don\'t you think..." leads the respondent towards answering "yes". A fair question is: "How do you feel about homework?"',
            },
          ],
        },
        {
          id: '6.1-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'School Surveys & Tally Chart Investigations',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Design fair surveys and data collection plans for school clubs and local councils.',
            },
          ],
          questions: [
            {
              id: '6.1-ex2-q1',
              number: 1,
              context: 'School Library Survey',
              question:
                'A school librarian wants to know how many books students read per month. Write a fair, unbiased question with 4 suitable non-overlapping response tick boxes.',
              hint: 'Include a 0 box, and make sure categories do not overlap.',
              answer: 'Question: "How many books do you read in a typical month?" Boxes: [ ] 0 books, [ ] 1 to 2 books, [ ] 3 to 4 books, [ ] 5 or more books.',
              explanation: 'The question is neutral (no leading words), covers all possible numbers from zero upward, and has mutually exclusive tick boxes.',
            },
            {
              id: '6.1-ex2-q2',
              number: 2,
              context: 'Data Collection Method',
              question:
                'A biology student investigates the number of daisies growing on a sports field. Should she count every single daisy on the field or take a sample? Explain why.',
              hint: 'Consider the time and effort required to count every daisy on an entire field.',
              answer: 'Take a sample, because counting every single daisy on a full field would be impractical, time-consuming, and prone to counting errors.',
              explanation: 'A large field has thousands of plants. Placing random quadrat frames (sampling) provides a reliable estimate efficiently.',
            },
            {
              id: '6.1-ex2-q3',
              number: 3,
              context: 'Hypothesis Formulation',
              question:
                'A class wants to investigate shoe sizes and heights of Year 7 students. Write a clear, testable hypothesis for their investigation.',
              hint: 'A hypothesis predicts a relationship between two variables.',
              answer: '"Taller students in Year 7 tend to have larger shoe sizes than shorter students."',
              explanation: 'This hypothesis is specific, testable, and clearly connects height (variable 1) with shoe size (variable 2).',
            },
          ],
        },
        {
          id: '6.1-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Designing Experiments & Identifying Confounding Variables',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Evaluate statistical investigations and identify subtle sources of error.',
            },
          ],
          questions: [
            {
              id: '6.1-ex3-q1',
              number: 1,
              context: 'Survey Location Bias',
              question:
                'To find out the town\'s favorite hobby, Ethan surveys 50 people coming out of a cinema on Friday night. Explain why his data will be biased.',
              hint: 'Are people at a cinema representative of everyone in town?',
              answer: 'The location is biased towards movie-watching; people at a cinema are far more likely to choose cinema/films as their favorite hobby.',
              explanation: 'The sample is unrepresentative of the general public (such as people who prefer outdoor sports, reading at home, or cooking).',
            },
            {
              id: '6.1-ex3-q2',
              number: 2,
              context: 'Comparing Primary vs Secondary',
              question:
                'State one main advantage and one main disadvantage of using Primary data compared to Secondary data.',
              hint: 'Think about accuracy for your exact purpose vs the time it takes to collect.',
              answer: 'Advantage: You know exactly how it was collected and it matches your specific question. Disadvantage: It takes much more time, effort, and cost to gather.',
              explanation: 'Primary data is tailored and up to date, but requires extensive fieldwork. Secondary data is instant but may be outdated or collected with unknown bias.',
            },
            {
              id: '6.1-ex3-q3',
              number: 3,
              context: 'Two-Way Table Setup',
              question:
                'In an investigation of pet ownership, students record whether each student has a dog, a cat, both, or neither. Name the best statistical table format to organize these two categorical variables.',
              hint: 'Think of a table with rows and columns crossing two categories.',
              answer: 'A Two-Way Table (or Carroll diagram / Venn diagram)',
              explanation: 'A Two-Way table displays frequencies for two categorical variables simultaneously, showing totals for rows and columns.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // 6.2 Taking a sample
    // -------------------------------------------------------------------------
    {
      id: '6.2',
      subtopicNumber: '6.2',
      title: 'Taking a sample',
      type: 'lesson',
      steps: [
        {
          id: '6.2-1',
          stepNumber: 1,
          stepType: 'concept',
          title: 'Soup Tasting & Fair Representation',
          badge: 'Real-Life Concept & Intuition',
          blocks: [
            {
              type: 'analogy',
              title: 'Tasting a Spoonful of Soup',
              scenario:
                'When a chef checks if a giant $50\\text{-liter}$ pot of soup has enough salt, they do NOT drink the entire pot! They stir it thoroughly and taste just ONE spoon. If the pot is well stirred (randomly mixed), that small spoonful accurately represents the entire pot. That spoonful is a SAMPLE, and the big pot of soup is the POPULATION.',
              takeaway:
                'A sample is a smaller group selected from the population. A sample must be sufficiently large and randomly chosen so that every member of the population has a fair, equal chance of selection.',
            },
            {
              type: 'key_terms',
              terms: [
                {
                  term: 'Population',
                  definition: 'The entire group of individuals or items that you are studying.',
                  example: 'All 850 students in a secondary school.',
                },
                {
                  term: 'Sample',
                  definition: 'A smaller subset chosen from the population to represent the whole group.',
                  example: 'Selecting 60 students from across all year groups.',
                },
                {
                  term: 'Bias',
                  definition: 'An unfair influence or error that causes the sample to favor one outcome over another.',
                  example: 'Only asking members of the football team about sports facilities.',
                },
              ],
            },
            {
              type: 'rule_box',
              title: 'Rules for a Reliable Sample',
              rule: 'To make your sample trustworthy:',
              tips: [
                'Rule 1: Sample Size — A sample that is too small (e.g. 3 people) is easily skewed by extreme answers. A larger sample gives more reliable conclusions.',
                'Rule 2: Randomness — Use random numbers or drawing names from a hat so every student has an equal chance.',
                'Rule 3: Avoid Convenience Sampling — Do not just ask your closest friends or people in one room.',
              ],
            },
          ],
        },
        {
          id: '6.2-2',
          stepNumber: 2,
          stepType: 'worked_example',
          title: 'Simplest Example: Identifying Population, Sample & Sampling Bias',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_example',
              example: {
                problem:
                  'A school principal wants to know if students want a new computer coding club. The school has $600$ students.\n(a) What is the population?\n(b) Suggest a suitable sample size.\n(c) The principal surveys the first $20$ students entering the computer room at lunchtime. Explain why this sample is biased.',
                context: 'Simplest Sampling Evaluation',
                solutionSteps: [
                  {
                    stepNumber: 1,
                    label: 'Part (a): Identify the entire group',
                    content: 'The target group is all $600$ students in the school.',
                    mathFormula: '\\text{Population} = 600\\text{ students}',
                  },
                  {
                    stepNumber: 2,
                    label: 'Part (b): Recommend a fair sample size',
                    content: 'Around $10\\%$ of the population is common for school surveys. Between $50$ and $60$ students is a reasonable, manageable sample size.',
                    mathFormula: '\\text{Sample size} \\approx 50\\text{ to }60\\text{ students}',
                  },
                  {
                    stepNumber: 3,
                    label: 'Part (c): Identify the bias in the principal\'s method',
                    content: 'Students who visit the computer room during lunchtime are already enthusiastic about computers! They are far more likely to vote "yes" for a coding club than the rest of the school.',
                  },
                ],
                finalAnswer: '(a) All 600 students; (b) 50 to 60 students; (c) Biased because students in the computer room already love computers.',
              },
            },
          ],
        },
        {
          id: '6.2-3',
          stepNumber: 3,
          stepType: 'common_mistake',
          title: 'The Tiny Sample Fallacy',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              mistake: {
                mistakeTitle: 'Thinking asking 3 friends is a sufficient sample',
                wrongWay: 'Asking 3 classmates their favorite food and concluding that 100% of the school loves tacos',
                whyWrong: '3 people is far too small! One person\'s unusual preference changes the percentage by 33%.',
                correctWay: 'Use a sample of at least 30 to 50 randomly selected individuals.',
                proTip: 'The larger the sample, the closer your sample results will match the true population.',
                memoryHook: 'More spoons tested = more accurate taste of the soup!',
              },
            },
          ],
        },
        {
          id: '6.2-4',
          stepNumber: 4,
          stepType: 'exercise_level_1',
          title: 'Simplest Practice: Population vs Sample Identification',
          badge: 'Exercise: Level 1 (Basic)',
          blocks: [
            {
              type: 'text',
              content: 'Identify the population and decide if the sample is fair.',
            },
          ],
          questions: [
            {
              id: '6.2-ex1-q1',
              number: 1,
              question: 'A dentist checks the teeth of 40 children from a town with 2,000 children. What is the sample size?',
              hint: 'The sample is the number of children actually checked.',
              answer: '40 children',
              explanation: 'The sample size is the number of individuals inspected: $40$ children.',
            },
            {
              id: '6.2-ex1-q2',
              number: 2,
              question: 'In the dentist survey above, what is the population?',
              hint: 'The population is the total group under study.',
              answer: 'All 2,000 children in the town',
              explanation: 'The population is the entire group being represented: all $2,000$ children.',
            },
            {
              id: '6.2-ex1-q3',
              number: 3,
              question: 'Which sample size is more reliable to find the average height of 1,000 students: 5 students or 50 students? Explain.',
              hint: 'Larger samples reduce the impact of outliers.',
              answer: '50 students, because a larger sample is more representative and less affected by extreme values.',
              explanation: 'A sample of 5 is easily skewed if one student is unusually tall or short. A sample of 50 balances out variation.',
            },
          ],
        },
        {
          id: '6.2-5',
          stepNumber: 5,
          stepType: 'exercise_level_2',
          title: 'Quality Control in Factories & School Elections',
          badge: 'Exercise: Level 2 (Real-World Scenarios)',
          blocks: [
            {
              type: 'text',
              content: 'Examine sampling methods in manufacturing and election polling.',
            },
          ],
          questions: [
            {
              id: '6.2-ex2-q1',
              number: 1,
              context: 'Lightbulb Quality Control',
              question:
                'A factory produces $10\\,000$ lightbulbs each day. Testing a lightbulb to destruction takes 100 hours. Explain why the factory MUST use sampling rather than testing the entire population.',
              hint: 'If they test every lightbulb to destruction, how many lightbulbs are left to sell?',
              answer: 'Testing every bulb would destroy the entire stock, leaving zero lightbulbs to sell to customers.',
              explanation: 'In destructive testing (like crash tests or battery life tests), testing the whole population leaves nothing to sell. Sampling is mandatory.',
            },
            {
              id: '6.2-ex2-q2',
              number: 2,
              context: 'Fair Student Council Polling',
              question:
                'Describe how a teacher could select a truly random sample of $30$ students from a school list of $300$ students.',
              hint: 'Think of assigning numbers or drawing names from a hat.',
              answer: 'Assign each student a number from 1 to 300, then use a random number generator (or draw numbers from a hat) to pick 30 unique numbers.',
              explanation: 'Using a random number generator ensures every student has an exact $1$ in $10$ chance of being selected, avoiding human favoritism.',
            },
            {
              id: '6.2-ex2-q3',
              number: 3,
              context: 'Convenience Sampling Error',
              question:
                'Maya wants to know what proportion of families in her city own a pet. She surveys $40$ people standing in line at a local veterinary clinic. Is this sample fair? Explain.',
              hint: 'Why do people go to a veterinary clinic?',
              answer: 'No, it is highly biased. People at a veterinary clinic are virtually guaranteed to own pets!',
              explanation: 'Her sample will vastly overestimate pet ownership in the city because only pet owners visit veterinary clinics.',
            },
          ],
        },
        {
          id: '6.2-6',
          stepNumber: 6,
          stepType: 'exercise_level_3',
          title: 'Stratified Sample Calculations & Capture-Recapture',
          badge: 'Exercise: Level 3 (Challenge & Problem Solving)',
          blocks: [
            {
              type: 'text',
              content: 'Calculate proportional representation across different demographic groups.',
            },
          ],
          questions: [
            {
              id: '6.2-ex3-q1',
              number: 1,
              context: 'Proportional Sampling',
              question:
                'A school has $120$ boys and $180$ girls (total $300$ students). A teacher wants a sample of $30$ students with the exact same proportion of boys and girls. How many boys and girls should be chosen?',
              hint: 'Boys are 120/300 = 40%, girls are 180/300 = 60%. Find 40% and 60% of 30.',
              answer: '12 boys and 18 girls',
              explanation: 'Boys fraction $= \\frac{120}{300} = \\frac{2}{5} = 40\\%$. Boys in sample $= 30 \\times \\frac{2}{5} = 12$. Girls in sample $= 30 \\times \\frac{3}{5} = 18$.',
            },
            {
              id: '6.2-ex3-q2',
              number: 2,
              context: 'Wildlife Population Estimate',
              question:
                'Park rangers catch and tag $50$ fish in a lake and release them. A week later, they catch $40$ fish and find that $10$ of them are tagged. Estimate the total fish population $N$ in the lake. (Hint: Fraction tagged in sample equals fraction tagged in lake: $\\frac{10}{40} = \\frac{50}{N}$).',
              hint: '10/40 is 1/4. If 1/4 of the population is 50, what is the whole population?',
              answer: '200 fish',
              explanation: '$\\dfrac{10}{40} = \\dfrac{1}{4}$. If $\\frac{1}{4}$ of the lake is $50$ fish, then the total population $N = 50 \\times 4 = 200$ fish.',
            },
            {
              id: '6.2-ex3-q3',
              number: 3,
              context: 'Sample Size Trade-Off',
              question:
                'A polling company considers increasing their sample size from $100$ to $10\\,000$ people. State one benefit and one practical drawback of this decision.',
              hint: 'Benefit: accuracy. Drawback: cost and time.',
              answer: 'Benefit: Much higher precision and smaller margin of error. Drawback: Drastically more expensive, time-consuming, and difficult to organize.',
              explanation: 'Very large samples yield reliable confidence intervals, but beyond a certain point, the extra precision does not justify the massive extra cost.',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // End-of-chapter Test
    // -------------------------------------------------------------------------
    {
      id: '6.test',
      subtopicNumber: 'Test',
      title: 'End-of-chapter Test',
      type: 'chapterTest',
      steps: [
        {
          id: '6.test-1',
          stepNumber: 1,
          stepType: 'test_part_a',
          title: 'Test Part A: Core Recall',
          badge: 'Test Part A: Core Recall',
          blocks: [
            {
              type: 'text',
              content:
                'Part A tests core definitions of primary and secondary data, sampling, and survey question design. Work out all 3 questions on the Teacher\'s Board before checking answers.',
            },
          ],
          questions: [
            {
              id: '6.test-q1',
              number: 1,
              question: 'Explain the difference between Primary data and Secondary data in one clear sentence.',
              hint: 'Think about who collected the data.',
              answer: 'Primary data is collected firsthand by the researcher; Secondary data was collected by someone else.',
              explanation: 'Primary = collected by you for your specific project. Secondary = existing data from books, websites, or censuses.',
            },
            {
              id: '6.test-q2',
              number: 2,
              question: 'What is the term for the entire group being investigated in a survey?',
              hint: 'Starts with P.',
              answer: 'The Population',
              explanation: 'The total group of all items or individuals being investigated is the Population.',
            },
            {
              id: '6.test-q3',
              number: 3,
              question: 'Give two reasons why a sample is chosen instead of surveying an entire population.',
              hint: 'Consider time and cost.',
              answer: '1. It saves time and money. 2. It is practical when the population is too large or when testing destroys the items.',
              explanation: 'Surveying every individual in a large population is often too expensive, slow, or physically impossible.',
            },
          ],
        },
        {
          id: '6.test-2',
          stepNumber: 2,
          stepType: 'test_part_b',
          title: 'Test Part B: Real-World Problems',
          badge: 'Test Part B: Real-World Problems',
          blocks: [
            {
              type: 'text',
              content:
                'Part B tests evaluating real-world sampling strategies for schools and businesses.',
            },
          ],
          questions: [
            {
              id: '6.test-q4',
              number: 1,
              context: 'School Uniform Opinion Poll',
              question:
                'To find student opinions on school uniforms, Maya asks all 28 students in her own class. Explain two reasons why this sample may not represent the whole school of 700 students.',
              hint: 'Think about age range and sample size.',
              answer: '1. The sample only represents one single age/year group. 2. 28 students is a small sample (only 4% of 700).',
              explanation: 'Older and younger year groups may hold very different views, and 28 students does not capture the diversity of 700 pupils.',
            },
            {
              id: '6.test-q5',
              number: 2,
              context: 'Improving Survey Questions',
              question:
                'Look at this question: "Do you exercise regularly? [ ] Yes  [ ] No". Why is this question unclear, and how could it be improved?',
              hint: 'What does "regularly" mean to different people?',
              answer: '"Regularly" is vague and subjective. Improve by asking: "How many hours do you exercise per week? [ ] 0-1 hr  [ ] 2-3 hrs  [ ] 4+ hrs".',
              explanation: 'One person might think exercising once a month is regular, while another thinks it means daily. Providing specific time categories eliminates ambiguity.',
            },
            {
              id: '6.test-q6',
              number: 3,
              context: 'Factory Sampling Fraction',
              question:
                'A factory produces $8000$ smartphones a day. Quality control inspects $200$ phones each day. What fraction of the daily production is sampled? Write the fraction in its simplest form.',
              hint: 'Divide 200 by 8000 and simplify.',
              answer: '\\dfrac{1}{40}\\text{ (or }2.5\\%\\text{)}',
              explanation: '$\\dfrac{200}{8000} = \\dfrac{2}{80} = \\dfrac{1}{40}$. Exactly $1$ in every $40$ phones is inspected.',
            },
          ],
        },
        {
          id: '6.test-3',
          stepNumber: 3,
          stepType: 'test_part_c',
          title: 'Test Part C: Reasoning & Challenge',
          badge: 'Test Part C: Reasoning & Challenge',
          blocks: [
            {
              type: 'text',
              content:
                'Part C presents experimental sampling investigations and mathematical deductions.',
            },
          ],
          questions: [
            {
              id: '6.test-q7',
              number: 1,
              context: 'Wildlife Tagging Deduction',
              question:
                'A biologist tags $30$ turtles in a nature reserve. Later, she captures $20$ turtles and finds $6$ are tagged. What is the estimated total turtle population in the reserve?',
              hint: '6/20 = 30/N.',
              answer: '100 turtles',
              explanation: 'Tagging ratio: $\\frac{6}{20} = \\frac{3}{10} = 0.3$. So $30$ tagged turtles represent $30\\%$ of the population. Total $N = 30 \\div 0.3 = 100$ turtles.',
            },
            {
              id: '6.test-q8',
              number: 2,
              context: 'Year Group Representation',
              question:
                'A secondary school has $200$ students in Year 7, $180$ in Year 8, and $120$ in Year 9 (total $500$). A representative sample of $50$ students is chosen. How many students should be chosen from each year group?',
              hint: 'Find the proportion of 50 for 200/500, 180/500, and 120/500.',
              answer: 'Year 7: 20 students, Year 8: 18 students, Year 9: 12 students',
              explanation: 'Sample is $50/500 = 1/10$ of the school. Year 7: $200 \\div 10 = 20$. Year 8: $180 \\div 10 = 18$. Year 9: $120 \\div 10 = 12$. Total $= 20 + 18 + 12 = 50$.',
            },
            {
              id: '6.test-q9',
              number: 3,
              context: 'Hypothesis Verification',
              question:
                'A student hypothesizes: "Boys and girls in Year 7 drink the same amount of water each day." Describe the two key data variables the student must measure to test this hypothesis.',
              hint: 'What two pieces of information must be recorded for every respondent?',
              answer: '1. Gender (Boy or Girl). 2. Volume of water consumed per day (e.g. in milliliters or cups).',
              explanation: 'To compare the two groups, the student must record the categorical variable (Gender) alongside the numerical continuous variable (Daily water volume).',
            },
          ],
        },
      ],
    },
  ],
};
