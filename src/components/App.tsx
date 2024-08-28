import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import { fetchGallery } from "../search-api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import { Image } from "./types";

interface GalleryResponse {
  results: Image[];
}

function App() {
  const [query, setQuery] = useState<Image[]>([]);

  const [search, setSearch] = useState<string>("");
  const [imgs, setImgs] = useState<Image | string>("");

  const [page, setPage] = useState<number>(1);

  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [loadBtn, setLoadBtn] = useState<boolean>(false);

  useEffect(() => {
    if (search == "") {
      return;
    }

    async function getData() {
      try {
        setLoad(true);
        setLoadBtn(true);
        const data: GalleryResponse = await fetchGallery(search, page);

        if (data.results.length < 12 && data.results.length > 0) {
          setLoadBtn(false);
        } else if (data.results.length == 0) {
          setError(true);
        }
        setQuery((prev) => [...prev, ...data.results]);
      } catch {
        setError(true);
      } finally {
        setLoad(false);
      }
    }
    getData();
  }, [page, search]);

  const handleSubmit = (inputValue: string) => {
    setLoadBtn(false);
    setError(false);
    setQuery([]);
    setPage(1);
    setSearch(inputValue);
  };

  const updatePage = () => {
    setPage(page + 1);
  };

  function openModal(img: Image) {
    setImgs(img);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setImgs("");
  }

  return (
    <>
      <Toaster />
      <SearchBar onSub={handleSubmit} />
      {query.length > 0 && <ImageGallery value={query} openModal={openModal} />}
      {query.length > 0 && loadBtn && <LoadMoreBtn onClick={updatePage} />}
      {modalIsOpen && typeof imgs !== "string" && imgs && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          imgUrl={imgs.urls.regular}
          likes={imgs.likes}
        />
      )}
      {error && <ErrorMessage />}
      {load && <Loader />}
    </>
  );
}

export default App;
