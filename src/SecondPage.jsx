import { Grid } from '@material-ui/core';
import React from 'react';
import Header from './Header';

const SecondPage = (props) => {
    return(
        <Grid container direction="column">
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12}>
                <h1>aaa</h1>
            </Grid>
        </Grid>
    );
};

export default SecondPage;