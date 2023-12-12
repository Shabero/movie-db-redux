import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import FilmCard from "../FilmCard/FilmCard";

import {BACKDROP_URL} from '../../config/config'



import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

import '../../Components/Carousel/style.css';

import { EffectFade, Navigation, Autoplay } from 'swiper/modules';


export default function Carousel({movies}) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
            >
                {
                    movies.filter(el => el.backdrop_path).map(movie =>
                        <SwiperSlide key={movie.id}>
                            <div className={"carousel-img"}
                                 style={{
                                     backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`
                                 }}
                            >
                                <FilmCard movie={movie} />
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
