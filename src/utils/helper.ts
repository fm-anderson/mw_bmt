import { Data, Option } from "./types";

export const shuffleArray = (array: Option[]): Option[] => {
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

  const optionsSet = new Set<Option>([correctOption]);

  while (optionsSet.size < 4) {
    const randomWrongOption =
      data.af[Math.floor(Math.random() * data.af.length)];
    optionsSet.add(randomWrongOption);
  }

  const allOptions = Array.from(optionsSet);
  const shuffledOptions = shuffleArray(allOptions);
  setOptions(shuffledOptions);
};
