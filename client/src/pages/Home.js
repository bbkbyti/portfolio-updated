import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email'

import '../styles/Home.css'

export default function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, My name is Babak</h2>
                <div className='prompt'>
                    <p>A Software Developer with a passion for learning and creating</p>
                    <LinkedInIcon />
                    <TwitterIcon />
                    <GitHubIcon />
                    <EmailIcon />
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>
                            ReactJS, Redux, HTML, CSS, React Native, Flutter, NPM,
                            MaterialUI, Yarn, TailwindCSS, StyledComponents
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, Java Spring, .NET, ExpressJS,
                            MySQL, MongoDB, PostgreSQL
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>
                            JavaScript, Python, Ruby
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}
