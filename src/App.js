import React, { useState } from 'react';
import Search from './component/search';
import Movie from './component/movies';
import {PulseLoader} from "react-spinners";
import imgFilm from './film.png';
import Axios from 'axios';

function App(){

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const search = async(searchValue) => {

    setLoading(true);
    setMessage(null);

    const options = {
      method: 'GET',
      url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
      params: {s: searchValue, page: '1', r: 'json'},
      headers: {
        'x-rapidapi-key': 'a9500b4c25msh1c6e462bfe9c887p1a2de3jsn2f4d0bc9e858',
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
      }
    };
  
    Axios.request(options).then(response => {
      if(response.data.Response === "True"){
        console.log(response.data);
        setMovie(response.data.Search);
        setLoading(false);
      }
      else {
        setMessage(response.data.Error);
        setLoading(false);
      }
      
    }).catch((error)=> {
      console.error(error);
      setLoading(false);
      setMessage(error);
    });
  }

  const getMovieData = 
    loading && !message ? (
      <div className="place-self-center">
        <h2 className="mb-3 text-purple-700">LOADING</h2> 
        <PulseLoader loading={loading} size={30} margin={6} color={"#9013FE"} />
      </div>
    ): message ? ( <div className="text-center"><h2 className="text-purple-600">{message}</h2></div> ) : (
      movie.map((movie, key) => (
        <Movie key={key} data={movie} />
      ))
    )

  return(
    <div className="m-8">
      <div className='text-center'>
        <img className="object-contain h-24 w-full mb-5" src={imgFilm} alt="film img"/>
        <h1 className="text-purple-600 font-bold">Movie IMDb Search</h1>
      </div>
      <div className="grid grid-cols-1 mb-2">
        <div className="w-6/12 place-self-center">
          <Search search={search}/>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {getMovieData}
      </div>
    </div>
  );

}

export default App;