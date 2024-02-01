// src/ShowList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  return (
    <div>
      <div className='tv'>TV Shows</div>

        <div className="products">
            <div className="row productCard ">
                {/* Map through the shows array and create a new card component for each show */}
                {shows.map((show) => (
                    <div key={show.show.id} className="col-12 col-sm-12 col-md-4 col-lg-3" >
                        <Link to={{ pathname: `/details/${show.show.id}` }}>
                            <Card show={show.show} key={show.show.id}/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    </div>
  );
};

export default ShowList;
