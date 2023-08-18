import React, { useState } from 'react';
import logo from '../../assets/logo.jpg';
import Question from '../../components/Question';
import { Box } from '@mui/material';
import { questions } from './constants';
import Result from '../../components/Result';
import { shuffleArray } from '../../utils';

const shuffledQuestions = shuffleArray(questions);

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(shuffledQuestions[0]);
  const [finishMode, setFinishMode] = useState(false);
  const [points, setPoints] = useState(0);

  const onNextHandler = (ind: number) => {
    if (ind === shuffledQuestions.length) {
      setFinishMode(true);
    } else {
      setCurrentQuestion(shuffledQuestions[ind]);
    }
  };

  const onRestart = () => {
    setFinishMode(false);
    setCurrentQuestion(shuffledQuestions[0]);
    setPoints(0);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <img style={{ maxWidth: '100vw' }} height={150} src={logo} alt="logo" />
      {!finishMode ? 
        <Question
          image={currentQuestion.image}
          answer={currentQuestion.answer}
          options={currentQuestion.options}
          question={currentQuestion.question}
          questionNumber={shuffledQuestions.indexOf(currentQuestion) + 1}
          totalQuestions={shuffledQuestions.length}
          next={onNextHandler}
          increasePoints={() => setPoints(point => point + 1)}
        /> : 
        <Result
          result={points}
          total={shuffledQuestions.length}
          onRestart={onRestart}
        />
      }
    </Box>
  );
};

export default Quiz;
