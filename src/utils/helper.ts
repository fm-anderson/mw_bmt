import { Data, Option } from "./types";

export const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const generateOptions = (
  data: Data,
  setCorrect: React.Dispatch<React.SetStateAction<Option | null>>,
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>,
) => {
  const correctOption = data.af[Math.floor(Math.random() * data.af.length)];
  setCorrect(correctOption);

  const wrongOptions = data.af.filter((item) => item !== correctOption);
  const randomWrongOptions = shuffleArray(wrongOptions).slice(0, 3);
  const allOptions = [correctOption, ...randomWrongOptions];
  const shuffledOptions = shuffleArray(allOptions);
  setOptions(shuffledOptions);
};
