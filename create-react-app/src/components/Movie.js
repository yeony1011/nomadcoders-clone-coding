import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";


function Movie({ id, coverImg, title, summary, releaseDate }){ // props // Movie컴포넌트는 부모로부터 데이터를 받아옴
  return (
    <Link to={`/movie/${id}`} className={styles.movie__link}>
      <img src={`https://image.tmdb.org/t/p/w200${coverImg}`} className={styles.movie__img} alt={title} />
      <div>
        <h2 className={styles.movie__title}>{title}</h2>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <span className={styles.movie__date}>{releaseDate}</span>
        {/* <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
        </ul> */}
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;