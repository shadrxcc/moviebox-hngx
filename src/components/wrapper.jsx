import PropTypes from "prop-types";

const Wrapper = (props) => {
  return (
    <div onClick={props.onClick} style={props.style} className={props.className} id={props.id}>
      {props.children}
    </div>
  );
};

export default Wrapper;

Wrapper.propTypes = {
  className: PropTypes.node,
  children: PropTypes.node,
  id: PropTypes.node,
  style: PropTypes.node,
  onClick: PropTypes.func
};
