import { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//custom modal component

const Backdrop = (props) => {
  return <div onClick={props.onClose} className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content w-full">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("search");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

Backdrop.propTypes = {
  onClose: PropTypes.func,
};

ModalOverlay.propTypes = {
  children: PropTypes.node,
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};
// validating proptypes