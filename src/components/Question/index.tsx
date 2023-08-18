import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery
} from '@mui/material';
import { green, red } from '@mui/material/colors';

interface Option {
  value: string;
  label: string;
}

interface QuestionProps {
  image: string;
  question: string;
  questionNumber: number;
  totalQuestions: number;
  answer: string;
  options: Option[];
  next: (ind: number) => void;
  increasePoints: () => void;
}

const Question = ({
  image,
  question,
  totalQuestions,
  questionNumber,
  answer,
  options,
  next,
  increasePoints
}: QuestionProps) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [value, setValue] = useState<string | null>(null);
  const [correctMode, setCorrectMode] = useState(false);
  const [incorrectMode, setIncorrectMode] = useState(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const checkAnswer = () => {
    if (value === answer) {
      setCorrectMode(true);
      increasePoints();
    } else {
      setIncorrectMode(true);
    }
  };

  const goToNextQuestion = () => {
    setValue(null);
    setCorrectMode(false);
    setIncorrectMode(false);
    next(questionNumber);
  };

  const getOptionStyle = (option: Option) => {
    if ((correctMode || incorrectMode) && option.value === answer) {
      return { border: `1px solid ${green[500]}`, borderRadius: '8px', marginBottom: '6px', marginRight: '0px', background: green[300] };
    } else if (incorrectMode && option.value === value) {
      return { border: `1px solid ${red[500]}`, borderRadius: '8px', marginBottom: '6px', marginRight: '0px', background: red[300] };
    } else {
      return { border: '1px solid #D9D9D9', borderRadius: '8px', marginBottom: '6px', marginRight: '0px' };
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '12px' }}>
      <Card sx={!isMobile ? { minWidth: '440px' } : {}}>
        <CardHeader
          sx={{ background: '#1976d2' }}
          title={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography color="white" fontWeight={500} variant='subtitle1'>{question}</Typography>
              <Typography color="white" fontWeight={500} variant='subtitle2'>{`${questionNumber} / ${totalQuestions}`}</Typography>
            </div>
          }
        />
        <CardMedia
          component="img"
          height="250"
          src={image}
          alt="question-image"
        />
        <CardContent sx={{ paddingRight: '10px' }}>
          <FormControl sx={{ width: '100%' }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              
              value={value}
              onChange={onChangeHandler}
            >
              {options.map(option => (
                <FormControlLabel
                  key={option.value}
                  sx={getOptionStyle(option)}
                  value={option.value}
                  control={<Radio disabled={correctMode || incorrectMode} />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
      {(correctMode || incorrectMode) ?
        <Button onClick={goToNextQuestion} sx={{ marginTop: '16px' }} variant="contained" size="medium">
          {questionNumber === totalQuestions ? 'Finish quiz' : 'Next question'}
        </Button> :
        <Button onClick={checkAnswer} disabled={!value} sx={{ marginTop: '16px' }} variant="contained" size="medium">
          Check the answer
        </Button>
      }
    </Box>
  );
};

export default Question;