import React from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import { Facebook, LinkedIn } from '@material-ui/icons'

const Footer = () => {
    return (
        <footer>
            <Container className="footer-inner">
                <div>
                <Typography variant="h3" style={{ color: 'white', fontFamily: 'inherit'}}>SITEMAP</Typography>
                    {/* <nav>
                        <ul className="footer-inner_nav">
                            <li></li>
                        </ul>
                    </nav> */}
                </div>
                <hr />
                <Grid className="footer-inner_nav" container >
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h4">Food Planner</Typography>
                        <Typography className="footer-items" variant="subtitle2">about</Typography>
                        <Typography className="footer-items" variant="subtitle2">our vision</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h4">Account</Typography>
                        <Typography className="footer-items" variant="subtitle2">create</Typography>
                        <Typography className="footer-items" variant="subtitle2">manage</Typography>
                        <Typography className="footer-items" variant="subtitle2">delete data</Typography>
                        <Typography className="footer-items" variant="subtitle2">your information</Typography>
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