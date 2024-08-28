import s from "./LoadMoreBtn.module.css";
import React from "react";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={s.btn} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
