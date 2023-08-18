import ross from '../../assets/ross.jpeg';
import chandler from '../../assets/chandler.jpeg';

export const questions = [
  {
    question: 'Which character is on the photo?',
    image: ross,
    answer: 'Ross',
    options: [
      {
        value: 'Ross',
        label: 'Ross'
      },
      {
        value: 'Joey',
        label: 'Joey'
      },
      {
        value: 'Chandler',
        label: 'Chandler'
      },
      {
        value: 'Richard',
        label: 'Richard'
      }
    ]
  },
  {
    question: 'Who is in the box?',
    image: chandler,
    answer: 'Chandler',
    options: [
      {
        value: 'Joey',
        label: 'Joey'
      },
      {
        value: 'Monica',
        label: 'Monica'
      },
      {
        value: 'Chandler',
        label: 'Chandler'
      },
      {
        value: 'Rachel',
        label: 'Rachel'
      }
    ]
  }
];