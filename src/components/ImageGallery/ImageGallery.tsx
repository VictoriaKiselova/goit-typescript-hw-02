import ImageCard from "../ImageCard/ImageCard.tsx";
import css from "./ImageGallery.module.css";
import { nanoid } from "nanoid";
import { TypesArticles } from "../App/App.types.ts";

interface ImageGalleryProps {
  listImages: TypesArticles[];
  open: (regular: string) => void;
}

export default function ImageGallery({ listImages, open }: ImageGalleryProps) {
  return (
    <ul className={css.wrapperList}>
      {listImages.map((elem: TypesArticles) => (
        <li key={nanoid()} className={css.list}>
          <ImageCard itemImage={elem} open={open} />
        </li>
      ))}
    </ul>
  );
}
