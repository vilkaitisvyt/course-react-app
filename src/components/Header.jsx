import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      style={{ background: "rgba(0, 0, 0, .5)" }}
    >
      <Grid container>
        <Grid
          item
          container
          xs={2}
          sm={1}
          justify="center"
          alignItems="center"
        ></Grid>
        <Grid item container xs={10} sm={11} alignItems="center">
          <Toolbar>
            <Typography variant="h5">Logo</Typography>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
