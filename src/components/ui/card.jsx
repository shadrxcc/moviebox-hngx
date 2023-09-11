import PropTypes from "prop-types";

const Card = (props) => {
  const classes = `card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
