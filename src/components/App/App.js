import React, { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import yelpSearch from '../../util/Yelp';

const App = () => {
  const [businesses, setBusinesses] = useState([])

 
   const searchYelp = (term, location, sortBy) => {
      yelpSearch(term, location, sortBy).then(businesses => {
         setBusinesses(businesses)
      })
   }


  return (
    <div className="App">
       <h1>Search Your Favourite Spot and Grab a Dish</h1>
       <SearchBar searchYelp={searchYelp} />
       <BusinessList businesses={businesses} />
    </div>
  )
}

export default App;
