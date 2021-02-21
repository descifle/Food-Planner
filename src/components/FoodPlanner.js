import React from 'react'
import { Grid, Container, Typography, Card, CardActions, CardContent, Button, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ViewListIcon from '@material-ui/icons/ViewList';
import HistoryIcon from '@material-ui/icons/History';
import InfoIcon from '@material-ui/icons/Info';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import '../css/foodplanner.scss'

const FoodPlanner = () => {
    return (
        <Container>
            <Grid container>
                <Grid style={{ paddingTop: '2rem' }} item xs={12} sm={12}>
                    <Card>
                       <CardContent>
                        <span >welcome back (user)</span>
                        <span style={{ marginLeft: '2rem'}}>daily streak (some number)</span>
                        <span style={{ marginLeft: '2rem'}}>lorem ipsum</span>
                        <span style={{ marginLeft: '2rem'}}><Link style={{ color: 'inherit' }} to="/manage-account">Manage Account</Link></span>
                       </CardContent>
                    </Card>
                    
                </ Grid>
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
                                <IconButton>
                                    <AppsIcon />
                                    App center
                                </IconButton>
                                <IconButton>
                                    <FastfoodIcon />
                                    Calories Info
                                </IconButton>
                                <IconButton>
                                    <ViewListIcon />
                                    Items
                                </IconButton>
                                <IconButton>
                                    <HistoryIcon />
                                    History
                                </IconButton>
                                <IconButton>
                                    <InfoIcon />
                                    Your Calories
                                </IconButton>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="m-placeholder" >
                        <CardContent>
                            <Typography variant="h4" color="textSecondary" gutterBottom>
                               Manage Foods
                            </Typography>
                            <div>
                                <IconButton><AddBoxIcon />add food</IconButton>
                                <IconButton><AddToPhotosIcon />update food</IconButton>
                                <IconButton><VisibilityIcon />View Foods</IconButton>
                                <IconButton><SearchIcon />Search Foods</IconButton>
                                <IconButton><DeleteIcon />remove food</IconButton>
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