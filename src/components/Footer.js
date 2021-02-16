import React from 'react'
import { Grid, Container } from '@material-ui/core'

const Footer = () => {
    return (
        <footer>
            <Container className="footer-inner">
                <div>
                   <nav>
                    <ul class="footer-inner_nav">
                        <li><a href="#something">About</a></li>
                        <li><a href="#something">Lorem Ipsum</a></li>
                        <li><a href="#somethign">Sitemap</a></li>
                    </ul>
                   </nav>
                </div>
                <Grid>
                    <Grid></Grid>
                    <Grid></Grid>
                    <Grid></Grid>
                </Grid>
                <div>
                   <div>Social Media</div> 
                   <div>Terms privacy policy etc</div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer