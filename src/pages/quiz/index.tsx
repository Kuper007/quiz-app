import React from 'react';
import image from '../../assets/ross.jpeg';
import logo from '../../assets/logo.jpg';
import { Button, Card, CardContent, CardMedia, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const Quiz = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <img height={150} src={logo} alt="logo" />
      <FormControl>
        <Card>
          <CardMedia
            component="img"
            height="250"
            src={image}
            alt="ross"
          />
          <CardContent sx={{ paddingRight: '10px' }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel sx={{ border: '1px solid gray', borderRadius: '8px', marginBottom: '6px', marginRight: '0px' }} value="female" control={<Radio />} label="Female" />
              <FormControlLabel sx={{ border: '1px solid gray', borderRadius: '8px', marginBottom: '6px', marginRight: '0px'   }} value="male" control={<Radio />} label="Male" />
              <FormControlLabel sx={{ border: '1px solid gray', borderRadius: '8px', marginBottom: '6px', marginRight: '0px'   }} value="test" control={<Radio />} label="Test" />
              <FormControlLabel sx={{ border: '1px solid gray', borderRadius: '8px' , marginRight: '0px' }} value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </CardContent>
        </Card>
        <Button sx={{ marginTop: '16px' }} variant="contained" size="medium">
          Check the answer
        </Button>
      </FormControl>
    </div>
  );
};

export default Quiz;
