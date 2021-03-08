import React from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import { Facebook, LinkedIn } from '@material-ui/icons'

const Footer = () => {
    return (
        <footer>
            <Container className="footer-inner">
                <div>
                <Typography variant="h3" style={{ color: 'white'}}>SITEMAP</Typography>
                    {/* <nav>
                        <ul className="footer-inner_nav">
                            <li></li>
                        </ul>
                    </nav> */}
                </div>
                <hr />
                <Grid container >
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h4"></Typography>
                        <h4>Food Planner</h4>
                        <Typography>about</Typography>
                        <Typography>our vision</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h4"></Typography>
                        <h4>Account</h4>
                        <Typography>create</Typography>
                        <Typography>manage</Typography>
                        <Typography>delete data</Typography>
                        <Typography>your information</Typography>
                    </Grid>
                </Grid>
                <hr />
                <div className="flex-between">
                    <span className="flex-between">
                        <a href="https://www.facebook.com"><Facebook className="icon" /></a>
                        <a href="https://www.linkedIn.com"><LinkedIn className="icon" /></a>
                    </span> 
                    <div><span>Terms of Service</span> <span>Privacy Policy</span> <span>Descifle&#8482; </span><span>privacy policy etc</span></div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer