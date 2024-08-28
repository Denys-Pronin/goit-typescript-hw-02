import s from "./LoadMoreBtn.module.css";
import React from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={s.btn} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
