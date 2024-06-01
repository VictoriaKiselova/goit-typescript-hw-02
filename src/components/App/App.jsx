import { useEffect, useState } from "react";
import { fetchArticles } from "../../articles-api.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";

export default function App() {
  const [queryImage, setQueryImage] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showBtn, setShowBtn] = useState(false);

  const handleInputChange = searchImg => {
    setQueryImage(searchImg);
    setCurrentPage(1);
    setArticles([]);
  };
  useEffect(() => {
    async function getArticles() {
      if (queryImage === "") {
        return;
      }
      try {
        setIsLoading(true);
        const requestData = await fetchArticles(queryImage, currentPage);
        const data = requestData.results;
        setArticles(prevArticles => {
          return [...prevArticles, ...data];
        });
        setShowBtn(
          requestData.total_pages && requestData.total_pages !== currentPage
        );
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getArticles();
  }, [queryImage, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  function openModal(regular) {
    setIsOpen(true);
    setSelectedImage(regular);
  }
  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }
  return (
    <div>
      <SearchBar onSubmit={handleInputChange} />
      {articles.length > 0 && (
        <ImageGallery listImages={articles} open={openModal} />
      )}
      {isLoading && showBtn && <Loader />}
      {error && <ErrorMessage />}
      {articles.length > 0 && !isLoading && showBtn && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isOpen && (
        <ImageModal
          isOpen={isOpen}
          close={closeModal}
          imageURL={selectedImage}
        />
      )}
    </div>
  );
}
