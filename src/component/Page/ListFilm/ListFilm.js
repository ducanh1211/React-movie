import React, { useEffect, useState } from 'react';
import "./ListFilm.css";
import {Container, Row, Col} from "react-bootstrap";
import useFetch from '../../../features/useFetch';
import Cardmovie from '../../Global/Cardmovie/Cardmovie';
import { useParams } from 'react-router-dom';
const ListFilm = () => {
    const {slug : keySearch} = useParams(); // dat slug bang keysearch


    const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  
    const [page, setpage] = useState(1);
    const [allmovie, setallmovie] = useState([]);
    // const movie = useFetch()
    const movie = useFetch(keySearch ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keySearch}&page=1` : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`);
    
    useEffect(() =>{
        if(keySearch){
            setallmovie(movie);
        }else{
            setallmovie([...allmovie, ...movie]); //noi moive cu voi movie moi
        }
        setpage(1);
    },[movie]); // movie thay doi thi useeffect chay lai
    
    useEffect(() =>{

    },[page])

    return (
        <div>
            <Container>
                <div className="head-line">
                    <h3>ONLINE STREAMING</h3>
                    <h1>List Movie</h1>
                </div>    
                    <Row>
                    {allmovie.map((item) =>(
                        <Col lg={3}><Cardmovie id={item.id} title={item.original_title} img={item.backdrop_path} date={item.release_date} vote={item.vote_average}></Cardmovie></Col>
                        ))}
                    </Row>
                    <button onClick={() =>setpage(page+1)}> <i class="fa-solid fa-play"></i>Show more</button>
            </Container>
        </div>
    );
};

export default ListFilm;