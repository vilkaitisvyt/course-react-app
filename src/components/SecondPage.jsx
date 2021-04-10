import { Grid, Typography, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { AppContext } from '../AppContext'
import courseData from '../constants';
import Quiz from './Quiz';
import { useHistory } from 'react-router-dom';

const SecondPage = () => {

    const history = useHistory();
    const [selectedCourse] = useContext(AppContext);
    const courseObj = courseData.filter((obj) => obj.id === selectedCourse);

    return (
        <Grid container direction="column">
            <Grid item container style={{ marginTop: 64, padding: 20 }} xs={12} justify="center" alignItems="center">
                <Typography style={{ paddingBottom: 40, paddingTop: 40 }} variant="h3" >{courseObj[0].name}</Typography>
            </Grid>
            <Grid item container>
                <Grid item sm={false} md={2}/>
                <Grid item container style={{ marginBottom: 80, padding: 80, border: '1px solid grey' }} xs={12} md={8} justify="center">
                    <Typography style={{ padding: '0 0 100px 0'}} variant="h4" >{courseObj[0].description}</Typography>
                    <Typography variant="h6" >{courseObj[0].content}</Typography>
                </Grid>
                <Grid item sm={false} md={2}/>
            </Grid>
            <Grid item container>
                <Grid item sm={false} md={2}/>
                <Grid item container style={{ marginBottom: 80, padding: 80, border: '1px solid grey' }} xs={12} md={8} justify="center">
                    <Typography style={{ padding: '0 0 70px 0'}} variant="h4" >Are you prepared to test what you've learned?</Typography>
                    <Quiz quiz={courseObj[0].quiz}/>  
                    <Button variant="outlined" color="secondary" style={{ margin: 80, padding: 20 }} onClick={() => history.push("/congratulations")}>
                        Finished
                    </Button>                  
                </Grid>                             
                <Grid item sm={false} md={2}/>
            </Grid>            
        </Grid>
    );
};

export default SecondPage;