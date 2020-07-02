import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:1000,
    margin: '0 auto',
    marginTop: 30
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SectionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} evalation={3}>Grid</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} evalation={3}>Grid</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} evalation={3}>Grid</Paper>
        </Grid>
      </Grid>
    </div>
  );
}