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
        color: '#3498db'
    },
    content: {
        color: '#3498db'
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
                    Total Confirmed
                </Typography>
                <Typography className={classes.content} variant="h3" component="h2">
                    {typeof totals.totalConfirmed === 'number' ? totals.totalConfirmed.toLocaleString() : totals.totalConfirmed}
                </Typography>
            </CardContent>
        </Card>
    );
}
