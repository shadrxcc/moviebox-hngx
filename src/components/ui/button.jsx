import PropTypes from "prop-types";

const Button = (props) => {
  const classes = `button ${props.className}`;
  return <button className={classes}>{props.children}</button>;
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
