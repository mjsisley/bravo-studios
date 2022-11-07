import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Portal } from "./Portal";

// const TempGlobalStyle = createGlobalStyle`body: overflow: hidden;`;

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

const OuterModal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .modal {
    background-color: ${(props) => props.theme.modal.bg};
    position: absolute;
    top: 10%;
    right: 10%;
    bottom: 10%;
    left: 10%;
    padding: 1em;
  }
`;

export const Modal = (props) => {
  const [opened, setOpen] = React.useState(false);

  const ref = React.useRef();

  useOutsideClick(ref, () => {
    setOpen(false);
  });

  return (
    <React.Fragment>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        {props.name}
      </button>
      {opened && (
        <Portal selector="#modal">
          <OuterModal>
            <div className="modal" ref={ref}>
              <props.contentComponent />

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Close Modal
              </button>
            </div>
          </OuterModal>
        </Portal>
      )}
    </React.Fragment>
  );
};
