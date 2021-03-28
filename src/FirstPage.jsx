import React from 'react';
import { Grid} from '@material-ui/core';
import Header from './Header';
import FirstPageContent from './FirstPageContent';

const FirstPage = () => {
    return(
        <Grid container direction="column">
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item container style={{ padding: 20 }} justify="center" alignItems="center" xs={12}>
                <h1>Please select a course</h1>
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2}/>
                <Grid style={{ padding: 20 }} item xs={12} sm={8}>
                    <FirstPageContent />
                </Grid>
                <Grid item xs={false} sm={2}/>
            </Grid>
        </Grid>
    );
}

export default FirstPage;