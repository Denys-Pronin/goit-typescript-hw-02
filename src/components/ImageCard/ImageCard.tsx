import s from "./ImageCard.module.css";

interface ImageCardProps {
  imgUrl: string;
  alt: string;
  openModal: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imgUrl, alt, openModal }) => {
  return (
    <li className={s.item}>
      <img className={s.image} onClick={openModal} src={imgUrl} alt={alt} />
    </li>
  );
};

export default ImageCard;
