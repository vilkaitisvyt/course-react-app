import React from 'react';
import { Grid, Typography} from '@material-ui/core';
import Header from './Header';
import FirstPageContent from './FirstPageContent';

const FirstPage = () => {
    return(
        <Grid container direction="column">
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item container style={{ marginTop: 64, padding: 20 }} justify="center" alignItems="center" xs={12}>
                <Typography style={{ paddingBottom: 40, paddingTop: 40 }} variant="h3" >Please select a course</Typography>
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2}/>
                <Grid item style={{ padding: 20 }} xs={12} sm={8}>
                    <FirstPageContent />
                </Grid>
                <Grid item xs={false} sm={2}/>
            </Grid>
        </Grid>
    );
}

export default FirstPage;