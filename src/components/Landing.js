import React from 'react'
// import healthyBanner from '../assets/healthy.jpg'
// import mobileBanner from '../assets/mobile-healthy.jpg'
import '../css/landing.scss'
import { Grid, Container, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import trackImage from '../assets/food-planner-img.jpeg'
import manageImage from '../assets/Should-You-Be-Counting-Calories.jpg'
import dietImage from '../assets/foodiebalance.jpg'
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
            <Header />
            <div className="landing">
                <Grid container justify="center" alignItems="center" spacing={3}>
                    <div className="text-center info-container">
                        <h1 variant="h1">Fitness starts with what you eat.</h1>
                        <div className="supercenter">
                            <Typography className="info-cta" style={{ fontFamily: "'Quattrocento Sans', sans-serif", textTransform: "initial" }} variant="button">Take control of your health.</Typography>
                            <Button style={{ color: 'white', border: 'white solid 1px', backgroundColor: 'rgba(186, 181, 181, 0.3)' }} variant="outlined">
                                <Link to="/create-account">Create Account</Link>
                            </Button>
                        </div>
                    </div>
                </Grid>

            </div>
            <div className="hero-border"></div>
            <Container className="landing-content">
                <Grid container justify="center" alignItems="center">
                    <Grid className="landing-content_container" container justify="center" alignItems="center">
                        <Grid className="landing-content_main" item xs={12} sm={5} >
                            <Typography variant="h2">Track</Typography>
                            <p>
                                Your eating habits, <br/>Identify weight loss roadblocks 
                        </p>
                            <span><Link to="/create-account">join now</Link></span>
                        </Grid>
                        <Grid className="landing-content-img" item xs={12} sm={5} >
                            <img className="landing-img1" src={trackImage} alt="" />
                        </Grid>
                    </Grid>
                    <Grid className="landing-content_container" container justify="center" alignItems="center">
                        <Grid className="landing-content-img" item xs={12} sm={5} >
                            <img className="landing-img2" src={manageImage} alt="" />
                        </Grid>
                        <Grid className="landing-content_secondary" item xs={12} sm={5} >
                        <Typography variant="h2">Manage</Typography>
                            <p>
                                journal your caloric intake, helps avoid high caloric foods 
                        </p>
                            <span><Link to="/create-account">join now</Link></span>
                        </Grid>
                    </Grid>
                    <Grid className="landing-content_container" container justify="center" alignItems="center">
                        <Grid className="landing-content_main" item xs={12} sm={5}>
                            <Typography variant="h2">Diet</Typography>
                            <p>
                               when you properly manage and track what you eat, it helps you create a more balanced Diet
                        </p>
                            <span><Link to="/create-account">join now</Link></span>
                        </Grid>
                        <Grid className="landing-content-img" item xs={12} sm={5} >
                            <img className="landing-img3" src={dietImage} alt="" />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default Landing