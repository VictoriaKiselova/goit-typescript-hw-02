import css from "./ImageCard.module.css";
import { TypesArticles } from "../App/App.types";

interface ImageCardProps {
  itemImage: TypesArticles;
  open: (regular: string) => void;
}

export default function ImageCard({
  itemImage: {
    id,
    tags: [{ title }],
    urls: { small, regular },
  },
  open,
}: ImageCardProps) {
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

