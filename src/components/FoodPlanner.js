import React from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import '../css/foodplanner.scss'

const FoodPlanner = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={5}>hi</Grid>
                <Grid item xs={12} sm={5}>hi</Grid>
            </Grid>
            <div>your progress</div>
            <div>foods</div>
            <div>some other thing</div>
            <div>that other thing</div>
            <div>one more thing</div>
        </Container>
    )
}

export default FoodPlanner