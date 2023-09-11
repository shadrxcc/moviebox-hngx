import PropTypes from "prop-types";

const Wrapper = (props) => {
  return (
    <div className={props.className} id={props.id}>
      {props.children}
    </div>
  );
};

export default Wrapper;

Wrapper.propTypes = {
  className: PropTypes.node,
  children: PropTypes.node,
  id: PropTypes.node,
};
