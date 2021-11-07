import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import '../css/MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    movieAPI.getMovies()
      .then((resolve) => this.setState({ movies: resolve, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;
    const carregamento = <Loading />;
    const arrayMovies = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <div data-testid="movie-list" className="countainerHome">
        { loading ? carregamento : arrayMovies }
        <div className="buttonCountainer">
          <Link className="addCardMovieList" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
