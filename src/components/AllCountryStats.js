import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50,
    },
    title: {
        textAlign: 'left',    
        backgroundColor:'#3f51b5',
        color:'white'   
    },
    txt:{
        textAlign:'center',
        backgroundColor:'#77a2f6',
        fontWeight:'bold',
    },
    table: {
        height: 480,
        overflowY: 'scroll',
        display: 'block',
    },
    thTd:{
        border:'1px solid black',
        backgroundColor:'#3f51b5',
        color:'white',
        boxShadow:'2px 3px #888888'
    },
    header:{
        // width: '100%',
        // height: '50px',
        // position: '-webkit-sticky',
        // position: 'sticky',
        // top: 0
    }
   
}));

export default function AllStats() {

    const [globalData, SetGlobalData] = useState([{}])
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            let data = await response.json();
            SetGlobalData(Object.values(Object.values(data.countryitems)[0]));
            console.log(Object.values(Object.values(data.countryitems)[0]))
        }
        getData();
    }, [])

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <table className={classes.table}>
            <thead className={classes.header}>
                <tr className={[classes.title]}>
                    <th className={classes.thTd}>Country Name</th>
                    <th className={classes.thTd}>Total Cases</th>
                    <th className={classes.thTd}>Active Cases</th>
                    <th className={classes.thTd}>Recovered Cases</th>
                    <th className={classes.thTd}>Total Serious Cases</th>
                    <th className={classes.thTd}> Total Deaths</th>
                </tr>
            </thead>
            <tbody>
                {globalData.map((key, ind) => {
                    return (
                        <tr key={ind}>
                            <th className={classes.title}>
                                {globalData[ind].title}
                            </th>
                            <td className={classes.txt}>
                                {globalData[ind].total_cases}
                            </td>
                            <td className={classes.txt}>
                                {globalData[ind].total_active_cases}
                            </td>
                            <td className={classes.txt}>
                                {globalData[ind].total_recovered}
                            </td>
                            <td className={classes.txt}>
                                {globalData[ind].total_serious_cases}
                            </td>
                            <td className={classes.txt}>
                                {globalData[ind].total_deaths}
                            </td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </table>

    </div>
    );
}
