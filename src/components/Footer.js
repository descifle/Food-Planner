import React from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import { Facebook, LinkedIn } from '@material-ui/icons'

const Footer = () => {
    return (
        <footer>
            <Container className="footer-inner">
                <hr />
                <Grid className="footer-inner_nav" container >
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h4">Explore</Typography>
                        <Typography className="footer-items" variant="subtitle2">About</Typography>
                        <Typography className="footer-items" variant="subtitle2">Our Vision</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h4">Support</Typography>
                        <Typography className="footer-items" variant="subtitle2">Create</Typography>
                        <Typography className="footer-items" variant="subtitle2">Manage</Typography>
                        <Typography className="footer-items" variant="subtitle2">Delete data</Typography>
                        <Typography className="footer-items" variant="subtitle2">Your information</Typography>
                    </Grid>
                </Grid>
                <hr />
                <div className="flex-between">
                    <span className="flex-between">
                        <a href="https://www.facebook.com"><Facebook className="icon" /></a>
                        <a href="https://www.linkedIn.com"><LinkedIn className="icon" /></a>
                    </span> 
                    <div className="copy"><span>Terms of Service</span> <span>Privacy Policy</span> <span>Descifle&#8482; </span></div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer