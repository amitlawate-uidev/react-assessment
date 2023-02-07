import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieApi from '../common/apis/movieApi';
import { API_KEY } from '../common/apis/MovieApiKey';
import { addMovies } from "../features/movies/movieSlice";
import MovieListing from "./MovieListing";

const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(()=> {
        const fetchMovies = async() => {
            const response = await movieApi.get(`movie/550?api_key=${API_KEY}`);
            // dispatch(addMovies(response.data.results));
            // console.log(response.data.results);
            dispatch(addMovies(response.data))
        }
        fetchMovies();
    },[]);


    return (
        <>
            <div className="banner-img"></div>
            <MovieListing/>
        </>
    )
}

export default Home