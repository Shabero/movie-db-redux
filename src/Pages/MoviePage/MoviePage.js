import React, {useEffect, useState} from 'react';
import Layout from "../../Components/Layout/Layout";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, BACKDROP_URL, BASE_URL} from "../../config/config";
import FilmCard from "../../Components/FilmCard/FilmCard";
import './style.css'


const MoviePage = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const [trailers, setTrailers] = useState([{}])

    useEffect(() => {
        axios(`${BASE_URL}movie/${id}?language=en-EN&api_key=${API_KEY}`)
            .then(({data})  => setMovie(data))
        axios(`${BASE_URL}movie/${id}/videos?language=en-EN&api_key=${API_KEY}`)
            .then(({data}) => setTrailers(data.results))
    },[])



    return (
        <Layout>
            <div className={'movie-page'}
                 style={{
                     backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`,
                 }}>
            </div>
            <div className="container movie-wrapper">
                <FilmCard movie={movie} />
                <div className={'pt-5 mt-5 text-center'}>
                    <h3>Trailers</h3>
                    <div className="row">
                        {
                            trailers.slice(0, 3).map(trailer =>
                                <div className={'col-xl-4 col-md-4 col-sm-12'}>
                                    <div className="box pt-4">
                                        <iframe
                                            className={'rounded-4'}
                                            src={`https://www.youtube.com/embed/${trailer.key}`}
                                            frameBorder="0"
                                            width={'100%'}
                                            height={'315'}
                                            allowFullScreen
                                            allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;  '}
                                        >

                                        </iframe>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MoviePage;