import React from 'react';
import './Country.css'

const Country = (props) => {

    console.log(props.country)
    const { name, flags, capital, population } = props.country
    return (
        <div className='country'>

            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Official Name: {name.official}</h4>
            <p>Capital: {capital}</p>
            <p>population: {population}</p>
        </div>
    );
};

export default Country;