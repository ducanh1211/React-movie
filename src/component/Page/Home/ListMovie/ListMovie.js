import React, { useEffect, useState } from 'react';
import "./ListMovie.css";
import {Container} from "react-bootstrap";
import CardMovie from "../../../Global/Cardmovie/Cardmovie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from '../../../../features/useFetch';

const ListMovie = (props) => {
    const API_KEY = "e9e9d8da18ae29fc430845952232787c";
    const movie = useFetch(`https://api.themoviedb.org/3/movie/${props.data}?api_key=${API_KEY}&page=1`);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      };
    return (
        <div className='list-movie'>
            <Container>
                <div className="head-line">
                    <h3>ONLINE STREAMING</h3>
                    <h1>{props.title}</h1>
                </div>
                <Slider {...settings}>
                {movie.map((item) => (
                    <div key={item.id}>
                        <CardMovie id={item.id} title={item.original_title} img={item.backdrop_path} date={item.release_date} vote={item.vote_average}></CardMovie>
                    </div>
                ))}
                </Slider>
            </Container>
            

        </div>
        
    );
};

export default ListMovie;