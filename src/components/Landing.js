import React from 'react'
// import healthyBanner from '../assets/healthy.jpg'
// import mobileBanner from '../assets/mobile-healthy.jpg'
import '../css/landing.scss'
import { Grid, Container, Typography, Button } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles((theme) => ({
//     button: {
//         marginLeft: '2rem',
//         color: 'white',
//         border: 'white solid 1px',

//     }
//   }))

const Landing = () => {
    return (
        <React.Fragment>
            <div className="landing">
                <Grid container justify="center" alignItems="center" spacing={3}>
                    <div className="text-center info-container">
                        <h1 variant="h1">Fitness starts with what you eat.</h1>
                        <div className="supercenter">
                            <Typography className="info-cta" style={{ fontFamily: "'Quattrocento Sans', sans-serif", textTransform: "initial" }} variant="button">Take control of your health.</Typography>
                            <Button style={{ color: 'white', border: 'white solid 1px', backgroundColor: 'rgba(186, 181, 181, 0.3)' }} variant="outlined">Create Account</Button>
                        </div>
                    </div>
                </Grid>

            </div>
            <div className="hero-border"></div>
            <Container className="landing-content">
                <Grid container justify="center" alignItems="center">
                    <Grid className="landing-content_container" container justify="center" alignItems="center">
                        <Grid className="landing-content_main" item xs={12} sm={5} >
                            <h2>Diet</h2>
                            <p>
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                            <span>link to info</span>
                        </Grid>
                        <Grid className="landing-content-img" item xs={12} sm={5} >
                            <img src="https://via.placeholder.com/150" alt="" />
                        </Grid>
                    </Grid>
                    <Grid className="landing-content_container" container justify="center" alignItems="center">
                        <Grid className="landing-content-img" item xs={12} sm={5} >
                            <img src="https://via.placeholder.com/150" alt="" />
                        </Grid>
                        <Grid className="landing-content_secondary" item xs={12} sm={5} >
                            <h2>Lorem  <br />ipsum dolor sit.</h2>
                            <p>
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                            <span>link to info</span>
                        </Grid>
                    </Grid>
                    <Grid className="landing-content_container" container justify="center" alignItems="center">
                        <Grid className="landing-content_main" item xs={12} sm={5}>
                            <h2>Lorem  <br />ipsum dolor sit.</h2>
                            <p>
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                            <span>link to info</span>
                        </Grid>
                        <Grid className="landing-content-img" item xs={12} sm={5} >
                            <img src="https://via.placeholder.com/150" alt="" />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Landing