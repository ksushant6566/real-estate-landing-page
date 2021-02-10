import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { submitFormStart } from "../../redux/actions";

// components
import FormInput from '../forms/FormInput'
import Button from '../forms/Button';
import WhyUs from '../WhyUs';

import './styles.scss';

const Homepage = props => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            submitFormStart({
                name,
                email,
                phone,
            })
        )

        setName('');
        setEmail('');
        setPhone('');
    }

    return (
        <div className="main">
            <div className="wrap" >
                <div className="heading">
                    <h1 >
                        Find your new home today
                    </h1>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <FormInput 
                            // label="Name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            handleChange={(e) => setName(e.target.value)}
                        />
                        <FormInput 
                            // label="Email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            handleChange={(e) => setEmail(e.target.value)}
                        />
                        <FormInput 
                            // label="Phone no."
                            name="phone"
                            type="number"
                            placeholder="Phone no."
                            value={phone}
                            handleChange={(e) => setPhone(e.target.value)}
                            max="9999999999"
                        />

                        <Button >
                            Request call back
                        </Button>
                    </form>
                </div>
            </div>
            {/* <WhyUs /> */}
        </div>
    )
}

export default Homepage;