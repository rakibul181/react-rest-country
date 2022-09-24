import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h2>{props.name}</h2>
            <img src={props.src} alt="" />
            <h4>Official Name: {props.official}</h4>
            <p>Capital: {props.capital}</p>
            <p>Capital: {props.population}</p>
        </div>
    );
};

export default Country;