import React from 'react'
import { Grid, Container, Typography, Card, CardActions, CardContent, Button } from '@material-ui/core'
import '../css/foodplanner.scss'

const FoodPlanner = () => {
    return (
        <Container>
            <Grid container>
                <Grid className="daily-info" item xs={12} sm={4}>
                    <Card >
                        <CardContent>
                            <Typography variant="h2" color="textSecondary" gutterBottom>
                                Today's Calories
                            </Typography>
                            <Typography color="textSecondary">
                                lorem ipsum
                            </Typography>
                            <Typography variant="h4" component="p">
                                2300
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="primary" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card className="m-placeholder">
                        <CardContent>
                            <Typography variant="h2" color="textSecondary" gutterBottom>
                                Calories In
                            </Typography>
                            <Typography color="textSecondary">
                                lorem ipsum
                            </Typography>
                            <Typography variant="h4" component="p">
                                0
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="primary" size="small">Add Foods</Button>
                        </CardActions>
                    </Card>
                    <Card className="m-placeholder">
                        <CardContent>
                            <Typography variant="h2" color="textSecondary" gutterBottom>
                                Daily Goal
                            </Typography>
                            <Typography variant="h4" component="p">
                                1800
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid className="quick-links" item xs={12} sm={8}>
                    <Card >
                        <CardContent>
                            <Typography variant="h4" color="textSecondary" gutterBottom>
                                Quick Links
                            </Typography>
                            <div>
                                <div>App center</div>
                                <div>Calories Info</div>
                                <div>Items</div>
                                <div>History</div>
                                <div>Your Calories</div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="m-placeholder" >
                        <CardContent>
                            <Typography variant="h4" color="textSecondary" gutterBottom>
                               Manage Foods
                            </Typography>
                            <div>
                                <div>add food</div>
                                <div>update food</div>
                                <div>View Foods</div>
                                <div>Search Foods</div>
                                <div>remove food</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
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