import React from 'react'
import './footer.css'

const Footer = () => (
    <div className="footer">
        <div className="container-fluid">
            <div className="designby">
                <p>Copyright © 2021 Your site name, All Right Reserved</p>
            </div>
            <div className="copyrightby">
                Desenhado por
                <a href="http://your-site.com/" target="_blank" rel="noreferrer"> Logo or Text
                    <br />
                    Site name designer
                </a>
            </div>
        </div>
    </div>
)

export default Footer

