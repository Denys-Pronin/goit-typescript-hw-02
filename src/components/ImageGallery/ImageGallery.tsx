import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import React from "react";
import { Image } from "../types";

interface ImageGalleryProps {
  value: Image[];
  openModal: (img: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ value, openModal }) => {
  return (
    <ul className={s.wrapper}>
      {value.map((item) => (
        <ImageCard
          openModal={() => {
            openModal(item);
          }}
          key={item.id}
          imgUrl={item.urls.small}
          alt={item.alt_description}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
