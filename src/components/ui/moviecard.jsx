import PropTypes from "prop-types";

//custom card component
const MovieCard = (props) => {
  const classes = `card ${props.className}`;
  return (
    <div onClick={props.onClick} data-testid="movie-card" className={classes}>
      {props.children}
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
