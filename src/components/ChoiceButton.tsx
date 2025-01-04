import { ChoiceButtonProps } from "../utils/types";

function ChoiceButton({
  option,
  isCorrect,
  isClicked,
  onClick,
}: ChoiceButtonProps) {
  const getButtonClass = () => {
    if (isClicked) {
      if (isCorrect) return "bg-primary text-primary-content";
      return "bg-error text-neutral";
    }
    return "bg-base-300";
  };

  return (
    <button
      className={`btn btn-lg btn-block ${getButtonClass()}`}
      onClick={() => onClick(option)}
    >
      {option.name}
    </button>
  );
}

export default ChoiceButton;
