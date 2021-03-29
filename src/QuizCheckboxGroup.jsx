import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  }
}));

const QuizCheckboxGroup = (props) => {
  const classes = useStyles();

  const [showCorrect, setShowCorrect] = useState(false);
  const [state, setState] = useState({
    'Answer 1': false,
    'Answer 2': false,
    'Answer 3': false,
    'Answer 4': false,
    'Yes': false,
    'No': false,
  });
  const {id, question, answers} = props;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const variantCount = answers.filter((v) => v.correct).length;

  return (
    <Grid container justify="center" className={classes.root}>
      <FormControl required component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Pick {variantCount}</FormLabel>
        <FormGroup>
          {answers.map(answer => (answer.correct && showCorrect) ? (
              <FormControlLabel
            control={<Checkbox checked={state[answer.variant]} onChange={handleChange} name={answer.variant} />}
            label={answer.variant}
            key={answer.variant}
            style={{border: '1px solid green', margin: 1}}
          />) : (
            <FormControlLabel
            control={<Checkbox checked={state[answer.variant]} onChange={handleChange} name={answer.variant} />}
            label={answer.variant}
            key={answer.variant}
            style={{margin: 2}}
          />
          ))
          }        
        </FormGroup>
        <Button variant="contained" style={{marginTop: 20}} onClick={() => setShowCorrect(!showCorrect)} color="primary">
            Show correct
        </Button>
      </FormControl>
    </Grid>
  );
};

export default QuizCheckboxGroup;