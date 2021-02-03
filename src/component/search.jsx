import React, { useState} from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({search}) => {
    
    const [movie, setMovie] = useState("");

    const changeInput = e => {
        e.preventDefault();
        const valueMovie = e.target.value;
        setMovie(valueMovie);
    }

    const Submit = () => {
        setMovie("");
        search(movie);
    }

    return (
    <div className="p-8">
        <div className="bg-white flex items-center rounded-full shadow-xl">
            <input className="rounded-l-full w-full py-4 px-6 text-gray-800 leading-tight outline-none focus:ring-2 focus:ring-purple-600" id="search" type="text" onChange={changeInput} value={movie} placeholder="Enter a movie title" />
            <div className="p-4">
                <button className="bg-purple-500 text-white rounded-full p-2 hover:bg-purple-400 focus:outline-none w-12 h-12 flex items-center justify-center" type="submit" onClick={Submit}>
                    <FaSearch/>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Search;
