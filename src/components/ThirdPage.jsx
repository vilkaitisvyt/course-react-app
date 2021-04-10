import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const ThirdPage = () => {
  return(
      <Grid container direction="column">
          <Grid item container>
                <Grid item xs={false} sm={2}/>
                <Grid item container style={{ marginTop: 64, padding: 20 }} xs={12} sm={8} justify="center" alignItems="center">
                  <img src="Congratulations.png" style={{borderRadius: '50%'}} alt="congratulations img"/>
                </Grid>
                <Grid item xs={false} sm={2}/>
          </Grid>
          <Grid item container style={{ padding: 20 }} justify="center" alignItems="center" xs={12}>
                <Typography style={{ paddingBottom: 40, paddingTop: 40 }} variant="h3" >Congratulations on completing our course!</Typography>
          </Grid>
      </Grid>
  );  
};

export default ThirdPage;