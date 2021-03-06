import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const totals = require('../data/totals.json');

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
        color: '#16a085'
    },
    content: {
        color: '#16a085'
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    Total Recovered
                </Typography>
                <Typography className={classes.content} variant="h3" component="h2">
                    {typeof totals.totalRecovered === 'number' ? totals.totalRecovered.toLocaleString() : totals.totalRecovered}
                </Typography>
                <Typography className={classes.content} variant="h6" component="h6">
                    + {typeof totals.totalRecoveredIncrease === 'number' ? totals.totalRecoveredIncrease.toLocaleString() : totals.totalRecoveredIncrease}
                </Typography>
            </CardContent>
        </Card>
    );
}
