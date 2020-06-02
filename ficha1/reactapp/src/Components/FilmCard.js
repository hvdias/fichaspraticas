import React from 'react';
import './FilmCard.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function FilmCard (props) {
    return (
        <div className='card'>
            <img src={props.src} className='card-image-top'/>
            <div class="card-body"></div>
            <p className='titulo card-text'>{props.title}</p>
        </div>
    )
}
export default FilmCard;

