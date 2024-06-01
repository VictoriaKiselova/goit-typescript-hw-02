import { ImSearch } from "react-icons/im";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const searchImg = form.elements.namePicture.value.trim();
    if (searchImg === "") {
      toast.error("Enter image title!");
    }
    onSubmit(searchImg);
    form.reset();
  };

  return (
    <div className={css.container}>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <ImSearch className={css.icon} />
        </button>
        <input
          type="text"
          placeholder="Search images and photos"
          name="namePicture"
          className={css.input}
        />
      </form>
    </div>
  );
}
