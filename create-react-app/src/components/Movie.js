import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({coverImg, title, summary, genres }){ // props // Movie컴포넌트는 부모로부터 데이터를 받아옴
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;