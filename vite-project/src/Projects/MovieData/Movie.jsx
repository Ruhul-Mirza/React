import { useState, useEffect } from "react";
import SearchMovie from "./SearchMovie";
export default function Movie() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=4471f3237ea9cb13a87f9442e8f5b94e&language=en-US&query=${searchQuery}&page=1&include_adult=false`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMovies(data.results);
        setError(null);
      } catch (error) {
        setError("Error fetching movies");
      }
    }

    if (searchQuery !== "") {
      fetchMovies();
    } else {
      setMovies([]);
    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="min-h-screen" style={{background:"maroon"}}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-center font-bold my-6 text-white">Movie Search</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2 mt-2 rounded-lg border-2 focus:outline-none focus:border-maroon-900"
            style={{color:"maroon"}}
          />
        </div>
      <SearchMovie movies={movies} />
    </div>
    </div>
  );
}
