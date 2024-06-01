import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";
import { nanoid } from "nanoid";

export default function ImageGallery({ listImages, open }) {
  return (
    <ul className={css.wrapperList}>
      {listImages.map(elem => (
        <li key={nanoid()} className={css.list}>
          <ImageCard itemImage={elem} open={open} />
        </li>
      ))}
    </ul>
  );
}
