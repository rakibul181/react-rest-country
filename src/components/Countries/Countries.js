import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = () => {
    const [countries, setCounteris] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCounteris(data))
    },[])
    return (
        <div>
            <h1>Hello from {countries.length} Countries</h1>
           <div className='countries'>
           {
            countries.map(country => <Country 
                country={country}
                key={country.cca3}>

                </Country>)
            }
           </div>
        </div>
    );
};

export default Countries;