import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TotalConfirmed from './TotalConfirmed'
import TotalRecovered from './TotalRecovered'
import TotalDeceased from './TotalDeceased'
import TrackingTable from './Table'
import NewTable from './NewTable'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontSize: 20,
        color: '#2c3e50'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Everything = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item sm={4} xs={12} align="center">
                    <Box m={2}>
                        <TotalConfirmed />
                    </Box>
                </Grid>
                <Grid item sm={4} xs={12} align="center">
                    <Box m={2}>
                        <TotalRecovered />
                    </Box>
                </Grid>
                <Grid item sm={4} xs={12} align="center">
                    <Box m={2}>
                        <TotalDeceased />
                    </Box>
                </Grid>

                <Grid item sm={12} xs={12}>
                    <NewTable />
                </Grid>
            </Grid>
        </div>
    )
}
export default Everything;