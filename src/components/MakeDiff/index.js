import React from 'react';
import './styles.scss';

const MakeDiff = props => {

    return (
        <div className = "makediff">
            <h1>
                We make a difference
            </h1>
            <div className="wrap">
                <div className="item">
                    <div className="circle">
                        <h2>
                            130 cr+
                        </h2>
                    </div>
                    <h3>
                        Brokerage Saved Monthly
                    </h3>
                </div>
                <div className="item">
                    <div className="circle">
                        <h2>
                            30 Lakh+
                        </h2>
                    </div>
                    <h3>
                        Customers Connected Monthly
                    </h3>
                </div>
                <div className="item">
                    <div className="circle">
                        <h2>
                            2 Lakh+
                        </h2>
                    </div>
                    <h3>
                        New Listings Monthly
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default MakeDiff;