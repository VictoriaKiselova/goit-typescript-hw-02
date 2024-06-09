import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
  },
};

interface ImageModalProps {
  isOpen: boolean;
  close: () => void;
  imageURL: string;
}

export default function ImageModal({
  isOpen,
  close,
  imageURL,
}: ImageModalProps) {
  let widthModalImg: number = window.innerWidth * 0.85;
  let heightModalImg: number = window.innerHeight * 0.85;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        style={customStyles}
        overlayClassName={css.overlay}>
        <img
          src={imageURL}
          alt="Opened Image"
          width={widthModalImg}
          height={heightModalImg}
          className={css.img}
        />
        <button onClick={close} className={css.buttonClose}>
          <IoClose className={css.icon} />
        </button>
      </Modal>
    </div>
  );
}
