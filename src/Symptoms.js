import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import YouTube from 'react-youtube';

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

const Symptoms = () => {
    const classes = useStyles();
    const youtubeOptions = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            modestbranding: 1,
        },
    };
    return (
        <div className={classes.root}>
            <Box m={3}>
                <Grid container spacing={3} align="center">
                    <Grid item sm={12} xs={12}>
                        {/* <YouTube videoId="oGruT7Fd54E" opts={youtubeOptions} /> */}
                        <div
                            className="video"
                            style={{
                                position: "relative",
                                paddingBottom: "56.25%" /* 16:9 */,
                                paddingTop: 25,
                                height: 0
                            }}
                        >
                            <iframe
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                }}
                                src={`https://www.youtube.com/embed/oGruT7Fd54E?autoplay=1&mute=1`}
                                frameBorder="0"
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <div
                            className="video"
                            style={{
                                position: "relative",
                                paddingBottom: "56.25%" /* 16:9 */,
                                paddingTop: 25,
                                height: 0
                            }}
                        >
                            <iframe
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                }}
                                src={`https://www.youtube.com/embed/IN_GVlbyC4Y?autoplay=1&mute=1`}
                                frameBorder="0"
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <div
                            className="video"
                            style={{
                                position: "relative",
                                paddingBottom: "56.25%" /* 16:9 */,
                                paddingTop: 25,
                                height: 0
                            }}
                        >
                            <iframe
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                }}
                                src={`https://www.youtube.com/embed/oBSkHZPu2xU?autoplay=1&mute=1`}
                                frameBorder="0"
                            />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

export default Symptoms;