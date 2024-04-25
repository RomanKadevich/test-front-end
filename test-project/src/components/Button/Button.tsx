import "./Button.scss";
import arrowRight from "../../assets/arrow-right.svg";

interface IButton {
  isButtonLink?: boolean;
  text: string;
  isArrowIcon?: boolean;
  onClickHandler?: () => void;
  additionalClassName?: string;
  link?: string;
}
export const Button = ({
  text,
  onClickHandler,
  additionalClassName = "",
  isArrowIcon = false,
  isButtonLink = false,
  link,
}: IButton) => {
  const ButtonComponent = isButtonLink ? "a" : "button";

  return (
    <ButtonComponent
      className={`button ${additionalClassName}`}
      onClick={onClickHandler}
      href={isButtonLink ? link : undefined}
    >
      <span className="button__text">{text}</span>
      {isArrowIcon && (
        <img src={arrowRight} alt="arrow" className="button__icon" />
      )}
    </ButtonComponent>
  );
};
