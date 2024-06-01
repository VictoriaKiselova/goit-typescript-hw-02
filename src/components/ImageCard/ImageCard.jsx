import css from "./ImageCard.module.css";

export default function ImageCard({
  itemImage: {
    id,
    tags: [{ title }],
    urls: { small, regular },
  },
  open,
}) {
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
