import { Data, Option } from "./types";

export const shuffleArray = (array: Option[]): Option[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

let shuffledData: Option[] = [];

export const initializeGame = (data: Data) => {
  shuffledData = shuffleArray(data.af);
};

export const generateOptions = (
  data: Data,
  setCorrect: React.Dispatch<React.SetStateAction<Option | null>>,
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>,
) => {
  const correctOption = shuffledData.shift();

  if (correctOption) {
    setCorrect(correctOption);

    const allOptions = [...data.af];
    const wrongOptions = allOptions.filter(
      (option) => option !== correctOption,
    );

    const shuffledWrongOptions = shuffleArray(wrongOptions).slice(0, 3);
    const options = [correctOption, ...shuffledWrongOptions];
    const shuffledOptions = shuffleArray(options);

    setOptions(shuffledOptions);
  } else {
    // TODO: Handle end game (no more options)
    setOptions([]);
    setCorrect(null);
    console.log("No more options!");
  }
};
