import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FooterNavigation.css';

function FooterNavigation() {
    const menus = [
        {
            navMenu: "Digital Clock",
            navLink: "digital-clock"
        },
        {
            navMenu: "India Covid19 Updates",
            navLink: "Covid"
        },
        {
            navMenu: "International Covid19 Updates",
            navLink: "international-covid-updates"
        },
        {
            navMenu: "Covid-2",
            navLink: "covid-2"
        },
    ]
    const [active, setActive] = useState(false);
    return (
        <footer className="footerNav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                <ul className="navbar-nav">
                    {
                        menus.map((e, i) => {
                            return <li className="nav-item" key={i}>
                                <Link className={active ? "nav-link active" : "nav-link"} to={`/${e.navLink}`}> {e.navMenu} </Link>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </footer>
    )
}

export default FooterNavigation;
