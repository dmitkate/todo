import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { BackDrop, ModalBox } from "./modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ title, desc, close }) => {
  const keyDown = (e) => {
    if (e.code === "Escape") {
      close();
    }
  };

  const backdropClick = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDown);

    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  });
  return createPortal(
    <>
      <BackDrop onClose={backdropClick}>
        <ModalBox>
          <h2>{title}</h2>
          <p>{desc}</p>
        </ModalBox>
      </BackDrop>
    </>,
    modalRoot
  );
};
