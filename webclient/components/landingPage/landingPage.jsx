import React from 'react';
import './landingPage.css'
export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <h2>
                        <span><a id="logoName" href="#">Omkar</a></span>
                    </h2>
                    <nav className="navBar">
                        <li>
                            <a className="navMenuItems" href="#">Product</a>
                        </li>
                        <li>
                            <a className="navMenuItems" href="#">Pricing</a>
                        </li>
                        <li>
                            <a className="navMenuItems" href="#">Support</a>
                        </li>
                        <li>
                            <a className="navMenuItems" href="#">Your teams</a>
                        </li>
                    </nav>
                </header>
                <section className="hero">
                    <div className="heroImage"></div>
                    <h1>Where work happens</h1>
                    <h3>Whatever work means for you,Omkar brings all the pieces and people you need together so you can actually get things done</h3>
                    <a href="#" className="btnGetStarted">Get Started</a>
                    <h4>Already joined a Omkar team?<a>Sign in</a>
                    </h4>
                </section>
            </div>
        );
    }
}
