export default function SearchMovie({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
          <p className="text-gray-600">{movie.overview}</p>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="mt-2 rounded"
            />
          ) : ""}
        </div>
      ))}
    </div>
  );
}
