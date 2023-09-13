import PropTypes from "prop-types";

//wrapper for jsx components
const Wrapper = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={props.style}
      className={props.className}
      id={props.id}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.number,
  style: PropTypes.any,
  onClick: PropTypes.func,
};
