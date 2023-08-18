import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import friends from '../../assets/friends.jpeg';
import Confetti from 'react-confetti';

interface ResultProps {
	result: number;
	total: number;
	onRestart: () => void;
}

const Result = ({result, total, onRestart}: ResultProps) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
			<Typography variant="h4">
				Your result:
			</Typography>
			<Typography textAlign="center" variant="h1">
				{`${result} / ${total}`}
			</Typography>
			<img height={300} src={friends} alt="friends" />
			<Button onClick={onRestart} variant="contained" size="large" sx={{ marginTop: '12px' }}>
				Restart the quiz
			</Button>
			<Confetti />
		</Box>
	);
};

export default Result;
