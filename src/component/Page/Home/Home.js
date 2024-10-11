import React from 'react';
import Banner from "../Home/Banner/Banner";
import ListMovie from "../Home/ListMovie/ListMovie";

const Home = () => {
    const arrMovie = [
        {
            id : 1,
            title: "Now playing movie",
            data:"now_playing"
        },
        {
            id : 2,
            title: "Upcoming movie",
            data:"upcoming"
        },
        {
            id : 3,
            title: "Top Rated Movie",
            data:"top_rated"
        }
    ]
    return (
        <div>
            <Banner></Banner>
            {arrMovie.map((item) => (
                <ListMovie key={item.id} title={item.title} data={item.data}></ListMovie>
            ))}
            
            
        </div>
    );
};

export default Home;