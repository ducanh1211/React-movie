import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../features/useFetch';
import "./DetailMovie.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DetailMovie = () => {
    const {slug : movieID} = useParams(); // dat slug bang keysearch
    const API_KEY = "e9e9d8da18ae29fc430845952232787c";
    const DetailMovie = useFetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const trailermovie =  useFetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}`);
    console.log(trailermovie);
    const findtrailer = trailermovie.find((item) => item.type === "Trailer");
    console.log(findtrailer);
    
    return (
        
        <div>
            
            <div class="detail mb-5">      
                <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <img src={`https://image.tmdb.org/t/p/w300${DetailMovie.poster_path}`} alt="" />
                            </div>
                            <div class="col-lg-9">
                                <h1>{DetailMovie.original_title}</h1>
                                <div class="yearPro d-flex align-items-center gap-2">
                                    <p class="year mb-0">{DetailMovie.release_date}</p>
                                    <p class="kind  mb-0">{DetailMovie.genres && DetailMovie.genres.map((item) => item.name).join(",") /* neu co DetailMovie.genres thi moi chay DetailMovie.genres.map*/}</p>
                                    <p class="time mb-0">
                                        <i class="fa-regular fa-clock"></i> {DetailMovie.runtime}
                                    </p>
                                </div>
                                <div class="rate d-flex align-items-center">
                                    <p class="number-rate">{DetailMovie.vote_average}%</p>
                                    <p class="user">user score</p>
                                    <p class="playtrailer">
                                        <i class="fa-solid fa-play"></i> Play trailer
                                        <>
                                        <Button variant="primary" onClick={handleShow}>
                                            Launch demo modal
                                        </Button>

                                        <Modal show={show} onHide={handleClose} animation={false}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                {findtrailer ? (
                                                <iframe 
                                                    width="560" 
                                                    height="315" 
                                                    src={`https://www.youtube.com/embed/${findtrailer.key}`} 
                                                    title="YouTube video player" 
                                                    frameborder="0" 
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                    referrerpolicy="strict-origin-when-cross-origin" 
                                                    allowfullscreen>

                                                </iframe>
                                                ): (
                                                    <p>no trailer</p>
                                                )}
                                            </Modal.Body>
                                        </Modal>
                                        </>
                                    </p>
                                </div>
                                <h3>Can You Bury Your Past?</h3>
                                <h2>Overview</h2>
                                <p class="overview">{DetailMovie.overview}</p>
                            </div>
                        </div>
                  
                   
                        
                </div>
                  
            </div>
        </div>
    );
};

export default DetailMovie;