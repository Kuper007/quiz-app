import React, { useState } from 'react';
import logo from '../../assets/logo.jpg';
import friends from '../../assets/friends.jpeg';
import Question from '../../components/Question';
import { Button, Typography } from '@mui/material';
import Confetti from 'react-confetti';
import { questions } from './constants';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [finishMode, setFinishMode] = useState(false);
  const [points, setPoints] = useState(0);

  const onNextHandler = (ind: number) => {
    if (ind === questions.length) {
      setFinishMode(true);
    } else {
      setCurrentQuestion(questions[ind]);
    }
  };

  const onRestart = () => {
    setFinishMode(false);
    setCurrentQuestion(questions[0]);
    setPoints(0);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <img height={150} src={logo} alt="logo" />
      {!finishMode ? 
        <Question
          image={currentQuestion.image}
          answer={currentQuestion.answer}
          options={currentQuestion.options}
          question={currentQuestion.question}
          questionNumber={questions.indexOf(currentQuestion) + 1}
          totalQuestions={questions.length}
          next={onNextHandler}
          increasePoints={() => setPoints(point => point + 1)}
        /> : 
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'  }}>
          <Typography variant="h4">
            Your result: 
          </Typography>
          <Typography textAlign="center" variant="h1">
            {`${points} / ${questions.length}`} 
          </Typography>
          <img height={300} src={friends} alt="friends" />
          <Button onClick={onRestart} variant="contained" size="large" sx={{ marginTop: '12px' }}>
            Restart the quiz
          </Button>
          <Confetti />
        </div>
      }
    </div>
  );
};

export default Quiz;
