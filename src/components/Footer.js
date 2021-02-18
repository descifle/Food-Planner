import React from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import { Facebook, LinkedIn } from '@material-ui/icons'

const Footer = () => {
    return (
        <footer>
            <Container className="footer-inner">
                <div>
                    <nav>
                        <ul className="footer-inner_nav">
                            <li><a href="#something">About</a></li>
                            <li><a href="#something">Lorem Ipsum</a></li>
                            <li><a href="#somethign">Sitemap</a></li>
                        </ul>
                    </nav>
                </div>
                <hr />
                <Grid container >
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h4">Lorem</Typography>
                        <Typography>ipsum</Typography>
                        <Typography>ipsum</Typography>
                        <Typography>ipsum</Typography>
                        <Typography>ipsum</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h4">Lorem</Typography>
                        <Typography>ipsum</Typography>
                        <Typography>ipsum</Typography>
                        <Typography>ipsum</Typography>
                        <Typography>ipsum</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h4">Lorem</Typography>
                        <Typography>ipsum</Typography>
                        <Typography>ipsum</Typography>
                        <Typography>ipsum</Typography>
                        <Typography>ipsum</Typography>
                    </Grid>
                </Grid>
                <hr />
                <div className="flex-between">
                    <span className="flex-between">
                        <Facebook className="icon" />
                        <LinkedIn className="icon" />
                    </span> 
                    <span><span>Terms of Service</span> <span>Privacy Policy</span> <span>Descifle &#8482;</span>privacy policy etc</span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer