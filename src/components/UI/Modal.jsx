import ReactDOM from "react-dom";
import { Fragment } from "react";
import styled from "styled-components";

const portalElement = document.getElementById("overlays");

const Backdrop = (props) => {
  return <div />;
};

const ModalOverlay = (props) => {
  return (
    <ModalStyle>
      <div>{props.children}</div>
    </ModalStyle>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {/* {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )} */}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

const ModalStyle = styled.div`
  background-color: #5e9639;
  position: fixed;
  bottom: 20vh;
  // left: 2.5%;
  // right: 2.5%;
  width: 100%;
  padding: 1rem;
  // border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`;
