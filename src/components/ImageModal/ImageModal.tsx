import Modal from "react-modal";
import s from "./ImageModal.module.css";
import React from "react";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay = Modal.defaultStyles.overlay || {};
Modal.defaultStyles.overlay.backgroundColor = "rgb(32 32 32 / 75%)";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "none",
  },
};

const ImageModal: React.FC<{
  modalIsOpen: boolean;
  closeModal: () => void;
  imgUrl: string;
  likes: number;
}> = ({ modalIsOpen, closeModal, imgUrl, likes }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img className={s.img} src={imgUrl} alt="" />
      <p className={s.likes}>Likes: {likes}</p>
    </Modal>
  );
};

export default ImageModal;
