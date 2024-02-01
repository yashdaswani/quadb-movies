import React from 'react'
import './Card.css'
const Card = ({ show}) => {
    
      // Check if the image property is available
       const imageUrl = show.image?.medium;
  return (
    <>
<div className="hero-container">
		<div className="main-container">
			<div className="poster-container">
				<img src={imageUrl} className="poster" alt='not found' />
			</div>
			<div className="ticket-container">
				<div className="ticket__content">
					<h4 className="ticket__movie-title">{show.name}</h4>
					<div className="detailsCont">
                    <div className='props'>Genres: {show.genres?.join(', ')}</div>
                    <span className='props'> Language: {show.language}</span>
                    <span className='props'>Runtime: {show.runtime} minutes</span>
                    <span className='props'>Premiered: {show.premiered}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Card
