import axios from 'axios';

const cor_s = 'https://cors-anywhere.herokuapp.com/corsdemo'
  

const yelpSearch = async (term, location, sortBy) => {
    try {
      const { data: { businesses }} = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API}`
      }
    })

    return businesses;

    } catch (error) {
      console.log(error)
      alert(`Due to your location you might need to visit ${cor_s} for the website to work! Sorry for inconviniences!`)
    }
    
  }


export default yelpSearch;