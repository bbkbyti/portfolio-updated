import React from 'react'
import '../styles/Footer.css'
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';


export default function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <TwitterIcon />
                <LinkedInIcon />
                <GitHubIcon />
                <p> &copy; 2023 Babak Bayati</p>
            </div>
        </div>
    )
}
