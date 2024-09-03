import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=0725e670c0d55e94f0a65cf506601116`
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);

  // const getMovies = async() => {
  //   const response = await fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
  //   );
  //   const json = await response.json();
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   getMovies();
  // }, []);
  
  
  // useEffect(() => {
  //   fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
  //   )
  //   .then((response) => response.json())
  //   // .then((json) => console.log(json));
  //   .then((json) => {
  //     setMovies(json.data.movies);
  //     setLoading(false);
  //   });
  //   // then == async-await
  // }, []);
  
  console.log(movies);

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
          <div className={styles.movies}>
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.poster_path}
                title={movie.title}
                summary={movie.overview}
                releaseDate={movie.release_date}
                // genres={movie.genre_ids}
              />
            ))}
          </div>
        )
      }
    </div>
  );
}

export default Home;