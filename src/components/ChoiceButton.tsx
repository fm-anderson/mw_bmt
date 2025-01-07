import { ChoiceButtonProps } from "../utils/types";

function ChoiceButton({
  option,
  counter,
  isCorrect,
  isClicked,
  onClick,
}: ChoiceButtonProps) {
  const getButtonClass = () => {
    if (isClicked || counter <= 0) {
      if (isCorrect)
        return "bg-primary text-primary-content pointer-events-none";
      return "bg-error text-neutral pointer-events-none";
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
