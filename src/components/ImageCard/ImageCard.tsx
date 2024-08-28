import s from "./ImageCard.module.css";
import React from "react";

const ImageCard = ({ imgUrl, alt, openModal }) => {
  return (
    <li className={s.item}>
      <img className={s.image} onClick={openModal} src={imgUrl} alt={alt} />
    </li>
  );
};

export default ImageCard;
