import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AppContext from '../AppContext';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    }
  }));

const Header = () => {

    const classes = useStyles();
    const {pages, courses} = useContext(AppContext);
    const [page, setSelectedPage] = pages;
    const [selectedCourse, setSelectedCourse] = courses;

    return (
        <AppBar position="fixed">
            <Grid container>
                <Grid item container xs={2} sm={1} justify="center" alignItems="center">
                    {page === 2 && <IconButton aria-label="back"  onClick={() => {

                        setSelectedCourse(null);
                        setSelectedPage(page - 1);

                        }} className={classes.margin}>
                        <ArrowBackIosIcon style={{color: "white"}} />
                    </IconButton>}
                    {page === 3 && <IconButton aria-label="back"  onClick={() => {

                        setSelectedPage(page - 1);

                        }} className={classes.margin}>
                        <ArrowBackIosIcon style={{color: "white"}} />
                        </IconButton>}
                </Grid>
                <Grid item container xs={10} sm={11} alignItems="center">
                <Toolbar>
                    <Typography variant="h5">Page number {page}</Typography>
                </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default Header;
