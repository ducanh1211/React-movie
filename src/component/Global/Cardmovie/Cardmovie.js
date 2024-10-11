import React from 'react';
import "./Cardmovie.css";
import { Link } from 'react-router-dom';

const Cardmovie = (props) => {
    return (
        <div>
            <Link to={`/detail/${props.id}`} class="cardmovie">
                    <div class="thumb">
                        <img src={`https://image.tmdb.org/t/p/w300${props.img}`} alt="" />
                    </div>
                    <h3 class="mb-3 mt-2">{props.title}</h3>
                    <div class="number d-flex align-items-center">
                        <p class="day">{props.date}</p>
                        <p class="rate">
                            <i class="fa-solid fa-star">
                            </i>{props.vote}
                        </p>
                    </div>
                </Link>
        </div>
    );
};

export default Cardmovie;