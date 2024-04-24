import "./Button.scss";

interface IButton {
  text: string;
  isArrowIcon?: boolean;
  onClickHandler?: () => void;
  additionalClassName?: string;
}
export const Button = ({
  text,
  onClickHandler,
  additionalClassName,
  isArrowIcon = false,
}: IButton) => {
  return (
    <button
      className={`button ${additionalClassName}`}
      onClick={onClickHandler}
    >
      <span className="button__text">{text}</span>
      {isArrowIcon && (
        <img
          src="./src/assets/arrow-right.svg"
          alt="arrow"
          className="button__icon"
        />
      )}
    </button>
  );
};
