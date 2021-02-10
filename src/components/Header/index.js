import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './styles.scss';

// assets
import Logo from '../../asssets/imgs/Logo.png';

const Header = props => {
    return (
        <header className="header">
            <div className='wrap'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={Logo} alt="Shiyacheen"></img>
                    </Link>
                </div>

                <div className='callToActions'>
                    <ul>
                        <li>
                            <Link to='/dashboard'>
                                My Account
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
        </header>
    );
};

export default Header; 