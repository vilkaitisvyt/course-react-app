import React from 'react';
import QuizCheckboxGroup from './QuizCheckboxGroup';
import { Grid, Typography } from '@material-ui/core';

const Quiz = (props) => {

    const quiz = props.quiz;

    const getQuestion = (questionObj) => {
        return (
            <div key={questionObj.id}>
                <Typography style={{ paddingBottom: 30, paddingTop: 50 }} variant="h6" >{questionObj.question}</Typography>
                <QuizCheckboxGroup {...questionObj}/>
            </div>
        );
    };

    return (
        <Grid container justify="center">
            {quiz.map(questionObj => getQuestion(questionObj))}
        </Grid>
    );
};

export default Quiz;