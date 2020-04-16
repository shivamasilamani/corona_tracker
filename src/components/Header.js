import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container justify="space-between" align="center">
                <Grid item sm={12} xs={12}>
                    <Typography variant="h6" component="h6">
                        Corona Virus Tracker
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Box m={2}>
                        <Button href="/" color="primary">
                            Home
                        </Button>
                        <Button href="/symptoms" color="primary">
                            Symptoms
                        </Button>
                        <Button href="/prevention" color="primary">
                            Prevention
                        </Button>
                        {/* <Button href="/facts" color="primary">
                            Facts
                        </Button> */}
                        <Button href="/links" color="primary">
                            Helpful Links
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
export default Header;