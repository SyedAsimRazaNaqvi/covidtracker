import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 30
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        backgroundColor: '#3f51b5',
        color:'white'
    },
}));

export default function GlobalStats({inititalScreen}) {

    const [globalData, SetGlobalData] = useState({})
    console.log(inititalScreen)
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            let data = await response.json();
            delete data.results[0].source;
            SetGlobalData(data.results[0]);
            console.log(data.results[0]);
        }
        getData();
    }, [])

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                {Object.keys(globalData).map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper className={classes.paper} evalation={3}>
                                <h4>{key.replace(/_/g,' ').toUpperCase()}</h4>
                                <h4>{globalData[key]}</h4>
                            </Paper>
                        </Grid>
                    )
                })}


            </Grid>
        </div>
    );
}
