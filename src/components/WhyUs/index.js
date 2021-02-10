import React from 'react';

// assets
import HouseIcon from '../../asssets/imgs/houseIcon.svg';
import RentIcon from '../../asssets/imgs/rentIcon.svg';
import ListIcon from '../../asssets/imgs/listingIcon.svg';
import BrokerageIcon from '../../asssets/imgs/brokerageIcon.svg';

// styles
import './styles.scss';

const WhyUs = props => {
    return (
        <div className="whyus">
            <h1>
                Why Choose Us?
            </h1>

            <div className="wrap">
                <div className="card">
                    <img src={HouseIcon} />
                    <h3>
                        Verified properties
                    </h3>
                    <p>
                        We directly connect you with verified owners to save you from brokerage.
                    </p>
                </div>
                <div className="card">
                    <img src={RentIcon} />
                    <h3>
                        Free listing
                    </h3>
                    <p>
                        Easy listing process. Also using whatsapp.
                    </p>
                </div>
                <div className="card">
                    <img src={ListIcon} />
                    <h3>
                        Shortlist without visit
                    </h3>
                    <p>
                        Extensive information makes it easy.
                    </p>
                </div><div className="card">
                    <img src={BrokerageIcon} />
                    <h3>
                        Rental agreement
                    </h3>
                    <p>
                        Assistance in creating rental agreement and paperwork.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;