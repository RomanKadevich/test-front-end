import { Button } from "../Button/Button";
import "./Modal.scss";

interface IModalType {
  message: string;
  info: string;
  onClose: () => void;
}

const Modal = ({ message, info, onClose }: IModalType) => {
  const stopClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal" onClick={stopClickHandler}>
        <img
          className="modal__close-icon"
          src="./src/assets/close-btn.svg"
          alt="close"
          onClick={onClose}
        />
        <div className="modal__content">
          <h2 className="modal__title">{info}</h2>
          <p className="modal__text">{message}</p>
          <Button
            text="Close"
            onClickHandler={onClose}
            additionalClassName="modal__btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
