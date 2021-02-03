import React from 'react'

const Movie = ({data}) => {

    return (
        <div className="bg-gradient-to-r from-pink-400 to-purple-700 rounded-r-lg shadow-md">
            <div className="flex">
                <div className="flex-1 p-3">
                    <img src={data.Poster} alt="poster"/>
                </div>
                <div className="text-white font-sans flex-1 m-4">
                    <p className="antialiased text-2xl md:text-3xl">{data.Title}</p>
                    <p className="text-2xl md:text-3xl antialiased">Year: {data.Year}</p>
                    <p className="text-2xl antialiased md:text-3xl">IMDb ID: {data.imdbID}</p>
                    <p className="text-2xl antialiased md:text-3xl">Type: {data.Type}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie;
