import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";


function Movie({ id, coverImg, title, summary, genres }){ // props // Movie컴포넌트는 부모로부터 데이터를 받아옴
  return (
    <div className={styles.movie}>
      <img src={`https://image.tmdb.org/t/p/w200${coverImg}`} className={styles.movie__img} alt={title} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`} className={styles.movie_link}>{title}</Link>
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;