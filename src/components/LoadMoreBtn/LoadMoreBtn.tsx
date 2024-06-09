import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div>
      <button type="button" onClick={onClick} className={css.glowOnHover}>
        Load more
      </button>
    </div>
  );
}
