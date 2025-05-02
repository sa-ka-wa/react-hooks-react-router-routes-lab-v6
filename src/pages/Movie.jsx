import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    id: 2,
    title: "Black Panther",
    time: 134,
    genres: ["Action", "Drama", "Sci-Fi"],
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    time: 181,
    genres: ["Action", "Adventure", "Sci-Fi"],
  },
];

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
    </div>
  );
}

export default Movie;
