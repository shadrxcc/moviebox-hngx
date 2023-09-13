import PropTypes from "prop-types";

//custom button component
const Button = (props) => {
  const classes = `button ${props.className}`;
  return <button onClick={props.onClick} className={classes}>{props.children}</button>;
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
