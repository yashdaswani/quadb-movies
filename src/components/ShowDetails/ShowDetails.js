// src/ShowDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowDetails.css'

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    // Handle booking ticket logic, you can use local storage here
    // to store user details and show information.
    console.log('Booking ticket for:', show.name);
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className='showDetails_cont' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${show.image?.original})` }}>
        <div className='wrapper row'>
            <div className='left col-12 col-sm-12 col-md-6 col-lg-6'>
                <img src={show.image?.medium} alt='...'></img>
            </div>
            <div className='right col-12 col-sm-12 col-md-6 col-lg-6'>
                <div className='showDetails_name'>{show.name}</div>
                <p className='showDetails_summary'>{show.summary}</p>
                <div className='showDetails_props'>Genres: {show.genres?.join(', ')}</div>
                    <div className='showDetails_props'> Language: {show.language}</div>
                    <div className='showDetails_props'>Runtime: {show.runtime} minutes</div>
                    <div className='showDetails_props'>Premiered: {show.premiered}</div>
                <button className='buyTicket' onClick={handleBookTicket}>Book Ticket</button>
            </div>

        </div>
    </div>
  

  );
};

export default ShowDetails;
