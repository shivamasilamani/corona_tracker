import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#eee'
    },
}));

function Prevention() {
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
                        {/* <YouTube videoId="1APwq1df6Mw" opts={youtubeOptions} /> */}
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
                                src={`https://www.youtube.com/embed/1APwq1df6Mw?autoplay=1&mute=1`}
                                frameBorder="0"
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        {/* <YouTube videoId="bPITHEiFWLc" opts={youtubeOptions} /> */}
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
                                src={`https://www.youtube.com/embed/bPITHEiFWLc?autoplay=1&mute=1`}
                                frameBorder="0"
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        {/* <YouTube videoId="Ded_AxFfJoQ" opts={youtubeOptions} /> */}
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
                                src={`https://www.youtube.com/embed/Ded_AxFfJoQ?autoplay=1&mute=1`}
                                frameBorder="0"
                            />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Prevention;