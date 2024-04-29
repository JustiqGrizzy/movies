import React, { useContext } from "react";
import "./MovieList.css";
import MovieListItem from "../movieListItem/MovieListItem";
import { Context } from "../../context";
import { searchHandler } from "../../utilities/data";

const MovieList = () => {
  const { state } = useContext(Context);

  const data = searchHandler(state.data, state.term);
  return (
    <ul className="movieList">
      {data.map((item) => (
        <MovieListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default MovieList;
