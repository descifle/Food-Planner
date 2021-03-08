import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getFoods } from '../actions'
import { Grid, Container, Typography, Card, CardActions, CardContent, Button, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { signIn, rSignIn } from '../actions'
// import AppsIcon from '@material-ui/icons/Apps';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
// import ViewListIcon from '@material-ui/icons/ViewList';
// import HistoryIcon from '@material-ui/icons/History';
// import InfoIcon from '@material-ui/icons/Info';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import VisibilityIcon from '@material-ui/icons/Visibility';
// import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import '../css/foodplanner.scss'
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'
import Modal from './Modal'

const FoodPlanner = ({foods, rSignIn, getFoods, malfease}) => {

    const baseURL = 'http://localhost:3001'

    const [addOpen, setAddOpen] = useState(false)
    const [updateOpen, setUpdateOpen] = useState(false)
    const [viewOpen, setViewOpen] = useState(false)
    const [removeOpen, setRemoveOpen] = useState(false)
    const [userCalories, setUserCalories] = useState(0)
    const [user] = useState({id: localStorage.getItem('malfease'), userName: localStorage.getItem('malfease1')})

    useEffect(() => {
        const guid = localStorage.getItem('malfeaseg')
        const id = localStorage.getItem('malfease')
        const name = localStorage.getItem('malfease1')

        if(user.id !== null) {
            viewFoods(true)
            localStorage.setItem('foods', JSON.stringify(foods))
            rSignIn({id, name})
        } else if(guid !== null) {
            rSignIn({id: guid, name: name})
        } else {
            window.location = '/'
        }

    }, [])

    useEffect(() => {
        setUserCalories(foods[foods.length - 1].allCalories)
    }, [foods])
    
    const addFood = (data) => {
        const finalData = {...data, userID: user.id}
        axios.post(`${baseURL}/add-food`, finalData).then(() => {
            viewFoods(true)
        })
    }
    const updateFood = (data) => {
        const finalData = {...data, userID: user.id}
        axios.patch(`${baseURL}/update-food`, finalData)
    }
    const removeFood = (data) => {
        const finalData = {...data, userID: user.id}
        axios.post(`${baseURL}/remove-food`, {
            id: finalData.id
        }).then((res) => {
            if(res.status === 200 && res.data === 'thanks') {
                viewFoods(true)
                // getFoods(foods.filter(food => food.id !== data.id))
            }
        })
        
    }

    const viewFoods = (normal = false) => {
        axios.get(`${baseURL}/view-foods`, {
            params: {
                userID: user.id
            }
        })
        .then((res) => {
            if(res.status === 200) {
                console.log(res.data)
                if(res.data.length === 0) {
                    getFoods([{
                        allCalories: 0,
                        calories: 0,
                        dailyCalories: 0,
                        id: 'no-id',
                        title: 'no foods yet'
                    }])
                } else {
                    getFoods(res.data)
                }
                if(normal !== true) {
                    setViewOpen(true)
                }
            } else {
                console.log('base draw error')
            }
        })

    }

    const handleClick = (action) => {
        switch(action) {
            case 'add-food':
                setAddOpen(true)
                break;
            case 'update-food':
                setUpdateOpen(true)
                break;
            case 'view-food':
                setViewOpen(true)
                break;    
            case 'remove-food':
                setRemoveOpen(true)
                break;
            default:
                return action
        }
    }
    
    const handleModalClose = (action) => {
        switch(action) {
            case 'add-food':
                setAddOpen(false)
                break;
            case 'update-food':
                setUpdateOpen(false)
                break;
            case 'view-food':
                setViewOpen(false)
                break;    
            case 'remove-food':
                setRemoveOpen(false)
                break;
            default:
                return action
        }
    }
 
    if(malfease.isNormalSignedIn === true || malfease.isSignedIn === true) {
            return (
                <React.Fragment>
                    <Header />
                    <Container>
                    <Grid container>
                        <Grid style={{ paddingTop: '2rem' }} item xs={12} sm={12}>
                            <Card>
                            <CardContent>
                                <span >
                                    welcome back {user.userName}
                                </span>
                                <span style={{ marginLeft: '2rem'}}>daily streak (some number)</span>
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
                                        {
                                            foods[foods.length - 1].dailyCalories === null ? 0 : foods[foods.length - 1].dailyCalories
                                        }
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="primary" size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid className="quick-links" container item xs={12} sm={8}>
                            <Grid item xs={12} sm={12}>
                                <Card  >
                                    <CardContent>
                                        <Typography variant="h4" color="textSecondary" gutterBottom>
                                        Manage Foods
                                        </Typography>
                                        <div>
                                            <Modal modalOpen={addOpen} modalClose={handleModalClose} handleSubmit={addFood} action={'add-food'} />
                                            <IconButton  onClick={() => handleClick('add-food')}><AddBoxIcon />Add food</IconButton>
                                            <Modal modalOpen={updateOpen} modalClose={handleModalClose} handleSubmit={updateFood} action={'update-food'} foods={foods} />
                                            <IconButton onClick={() => handleClick('update-food')}><AddToPhotosIcon />Update food</IconButton>
                                            <Modal modalOpen={viewOpen} modalClose={handleModalClose} action={'view-food'} foods={foods} />
                                            <IconButton onClick={viewFoods}><VisibilityIcon />View Foods</IconButton>
                                            <Modal modalOpen={removeOpen} modalClose={handleModalClose} handleSubmit={removeFood} action={'remove-food'} foods={foods}/>
                                            <IconButton onClick={() => handleClick('remove-food')}><DeleteIcon />Remove foods</IconButton>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Card className="m-placeholder">
                                <CardContent>
                                    <Typography variant="h2" color="textSecondary" gutterBottom>
                                        Calories In
                                    </Typography>
                                    <Typography variant="h4" component="p">
                                        {userCalories}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="primary" size="small">Add Foods</Button>
                                </CardActions>
                            </Card>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Card className="m-placeholder">
                                <CardContent>
                                    <Typography variant="h2" color="textSecondary" gutterBottom>
                                        Daily Goal
                                    </Typography>
                                    <Typography variant="h4" component="p">
                                        1800
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="primary" size="small">Add Foods</Button>
                                </CardActions>
                            </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Header />
                    <div>...Loading</div>
                    <Footer />
                </React.Fragment>
            )
        }
    }

const mapStateToProps = (state) => {

    // console.log(state)
    return {
        foods: state.allFoods,
        malfease: state.auth
    }
}

export default connect(mapStateToProps, { getFoods, rSignIn })(FoodPlanner)