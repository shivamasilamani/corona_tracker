import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#eee'
    },
}));

function Facts() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="space-between" align="center">
                <Grid item sm={12} xs={12}>
                    <Box m={4}>
                        <Link href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
                            https://www.cdc.gov/coronavirus/2019-ncov/index.html
                        </Link>
                    </Box>
                    <Box m={4}>
                        <Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
                            https://www.who.int/emergencies/diseases/novel-coronavirus-2019
                        </Link>
                    </Box>
                    <Box m={4}>
                        <Link href="https://www.mygov.in/covid-19">
                            https://www.mygov.in/covid-19
                        </Link>
                    </Box>
                    <Box m={4}>
                        <Link href="https://www.google.com/covid19/">
                            https://www.google.com/covid19/
                        </Link>
                    </Box>
                    <Box m={4}>
                        <Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters">
                            https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters
                        </Link>
                    </Box>
                    <Box m={4}>
                        <Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/healthy-parenting">
                            https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/healthy-parenting
                        </Link>
                    </Box>
                    <Box m={4}>
                        <Link href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html">
                            https://www.cdc.gov/coronavirus/2019-ncov/faq.html
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Facts;