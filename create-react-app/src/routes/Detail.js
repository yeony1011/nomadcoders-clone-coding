import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../css/Detail.module.css";
import arrow from "../images/ico_arrow.png";

function Detail(){
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  // console.log(id); // { id: '123' } { tomato : '123' } id,tomato는 App에서 보낸 키값으로 나옴

  // const getMovie = async() => {
  //   const json = await(
  //     await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  //   ).json();
  //   setMovie(json.data.movie);
  //   setLoading(false);
  //   console.log(json);
  // };
  // useEffect(() => {
  //   getMovie();
  // }, []);

  const getMovie = useCallback(async() => {
    const json = await(
      await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0725e670c0d55e94f0a65cf506601116`)
    ).json();
    setMovie(json);
    setLoading(false);
    console.log(json);
    
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  console.log(movie);

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Popular Movies</h1>
      {
        loading
        ? (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        )
        : (
          <div>
            <div className={styles.movie}>
              <h1>{movie.title}</h1>
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className={styles.movie__img} alt={movie.title} />
              <ul className={styles.movie__list}>
                <li>
                  <strong>Release Date</strong>
                  <span>{movie.release_date}</span>
                </li>
                <li>
                  <strong>Runtime</strong>
                  <span>{movie.runtime}M</span>
                </li>
                <li>
                  <strong>Genres</strong>
                  <span className={styles.movie__genres}>
                    {movie.genres.map((g) => (
                      <span key={g}>{g.name}</span>
                    ))}
                  </span>
                </li>
                <li>
                  <strong>Vote Average</strong>
                  <span>{movie.vote_average}</span>
                </li>
                <li>
                  <strong>Overview</strong>
                  <span>{movie.overview}</span>
                </li>
              </ul>
            </div>
            <Link to={`/`} className={styles.movie__link}>
              <img src={arrow} width="11" height="20" alt="" />
              List View
            </Link>
          </div>
        )
      }
    </div>
  );
}

export default Detail;