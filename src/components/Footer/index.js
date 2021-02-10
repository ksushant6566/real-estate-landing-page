import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';


const Footer = props => {


    return (
        <div className="footer">

            <div className="about">
                <h2>
                    About Us
                </h2>
                <p>
                    shiyacheen is a new home rental platform that makes it easier to find your new home without paying any brokerage.
                    Use our verified listing to ensure you find your dream home by contacting the owners directly.
                    In case you cannot find a property you are looking for,
                    please post a requirement and we'll send you email notification with properties matching your requirements.
                </p>
            </div>

            <div className="links">
                <div className="item">
                    <h3>
                        Contact Us
                    </h3>
                    <ul>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/rent'>
                                Rent
                            </Link>
                        </li>
                        <li>
                            <Link to='/sell'>
                                Sell
                            </Link>
                        </li>
                        <li>
                            <Link to='/buy'>
                                Buy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="item">
                    <h3>
                        Company
                    </h3>
                    <ul>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/rent'>
                                Rent
                            </Link>
                        </li>
                        <li>
                            <Link to='/sell'>
                                Sell
                            </Link>
                        </li>
                        <li>
                            <Link to='/buy'>
                                Buy
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer;