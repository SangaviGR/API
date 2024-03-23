import React, { useState } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const options = {
      method: 'POST',
      url: 'https://online-movie-database.p.rapidapi.com/v2/search-advance',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'cd18f869b4mshbbaefaa5af025a7p11ee6bjsn77e0fdf77670',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      },
      data: {
        keywords: searchTerm,
        first: 100,
        after: '',
        includeReleaseDates: false,
        sort: {
          sortBy: 'USER_RATING_COUNT',
          sortOrder: 'DESC'
        }
      }
    };

    try {
      const response = await axios.request(options);
      setMovies(response.data.results || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    searchMovies();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies && movies.length > 0 && movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
