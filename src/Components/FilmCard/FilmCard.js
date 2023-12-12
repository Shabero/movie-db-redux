import React from 'react';
import { IMAGE_URL} from "../../config/config";
import IMDblogo from "../Assets/IMDb-vote.png";
import './style.css'

const FilmCard = ({movie}) => {
    return (
        <div className={'film-card'} >
            <img className={'carousel-poster col-2'}
                 src={IMAGE_URL + movie.poster_path}  alt={''}
            />
            <div className={'description col-6'}>
                <h3 className={'fs-1'}>{movie.title}</h3>
                <div className={'d-flex logo-imdb'}>
                    <img src={IMDblogo} style={{width: '30px', height: '30px'}} alt=""/>
                    <div>
                        <p className={'fs-5 d-flex'}>{movie.vote_average}</p>
                    </div>
                </div>
                <p className={'fs-4 col-10'}>{movie.overview}</p>
            </div>
        </div>
    );
};

export default FilmCard;