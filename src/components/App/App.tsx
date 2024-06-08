import React, { useEffect, useState } from "react";
import { fetchArticles } from "../../articles-api.ts";
import SearchBar from "../SearchBar/SearchBar.tsx";
import ImageGallery from "../ImageGallery/ImageGallery.tsx";
import Loader from "../Loader/Loader.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.tsx";
import ImageModal from "../ImageModal/ImageModal.tsx";
import { TypesArticles, FetchArticlesResponse } from "./App.types.ts";
import css from "./App.module.css";

export default function App() {
  const [queryImage, setQueryImage] = useState<string>("");
  const [articles, setArticles] = useState<TypesArticles[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [showBtn, setShowBtn] = useState<boolean>(false);

  const handleInputChange = (searchImg: string): void => {
    setQueryImage(searchImg);
    setCurrentPage(1);
    setArticles([]);
  };

  useEffect(() => {
    async function getArticles(): Promise<void> {
      if (queryImage === "") {
        return;
      }
      try {
        setIsLoading(true);
        const requestData = await fetchArticles<FetchArticlesResponse>(
          queryImage,
          currentPage
        );
        const data: TypesArticles[] = requestData.results;
        setArticles((prevArticles: TypesArticles[] | null) => {
          if (prevArticles !== null) {
            return [...prevArticles, ...data];
          } else {
            return data;
          }
        });
        requestData.total_pages && requestData.total_pages !== currentPage
          ? setShowBtn(true)
          : setShowBtn(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getArticles();
  }, [queryImage, currentPage]);

  const handleLoadMore = (): void => {
    setCurrentPage(currentPage + 1);
  };

  function openModal(regular: string): void {
    setIsOpen(true);
    setSelectedImage(regular);
  }
  function closeModal(): void {
    setIsOpen(false);
    setSelectedImage("");
  }
  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleInputChange} />
      {articles !== null && (
        <ImageGallery listImages={articles} open={openModal} />
      )}
      {isLoading && showBtn && <Loader />}
      {error && <ErrorMessage />}
      {articles !== null && !isLoading && showBtn && (
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
