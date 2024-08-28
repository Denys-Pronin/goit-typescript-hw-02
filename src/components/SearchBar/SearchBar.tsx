import React, { useState, ChangeEvent, FormEvent } from "react";
import s from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast";
interface SearchBarProps {
  onSub: (query: string) => void;
}
const SearchBar = ({ onSub }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() == "") {
      toast.error("Write a word!");
      return;
    }
    onSub(inputValue.trim());
    setInputValue("");
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div>
          <input
            className={s.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className={s.btn} type="submit">
            <IoSearch />
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
