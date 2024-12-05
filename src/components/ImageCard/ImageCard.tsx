import css from "./ImageCard.module.css";
import { TypesArticles } from "../App/App.types";

interface ImageCardProps {
  itemImage: TypesArticles;
  open: (regular: string) => void;
}

export default function ImageCard({
  itemImage: { id, tags, urls },
  open,
}: ImageCardProps) {
  const title =
    Array.isArray(tags) && tags.length > 0 ? tags[0]?.title : "No title";
  const { small = "", regular = "" } = urls || {};

  return (
    <div>
      <img
        id={id}
        onClick={() => open(regular)}
        src={small}
        alt={title}
        className={css.image}
      />
    </div>
  );
}
