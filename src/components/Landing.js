import React from 'react'
// import healthyBanner from '../assets/healthy.jpg'
// import mobileBanner from '../assets/mobile-healthy.jpg'
import '../css/landing.scss'
import Grid from '@material-ui/core/Grid'

const Landing = () => {
    return (
        <div className="landing">
            <Grid container justify="center" alignItems="center" spacing={3}>
                <Grid className="text-center info-container" item xs={8}>
                    <h2>Fitness starts with what you eat.</h2>
                    <p>Take control of your health</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Landing