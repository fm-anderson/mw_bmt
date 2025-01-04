import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  ArrowLeftIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/solid";
import data from "../config/data.json";
import { generateOptions } from "../utils/helper";
import { Option } from "../utils/types";
import Countdown from "../components/Countdown";
import PlayCard from "../components/PlayCard";
import Toast from "../components/Toast";
import ChoiceButton from "../components/ChoiceButton";

function Practice() {
  const [correct, setCorrect] = useState<Option | null>(null);
  const [options, setOptions] = useState<Option[]>([]);
  const [counter, setCounter] = useState<number>(30);
  const [points, setPoints] = useState<number>(0);
  const [clicked, setClicked] = useState<Option[]>([]);
  const [showToast, setShowToast] = useState<boolean>(false);

  const restartGame = () => {
    setCounter(30);
    setPoints(0);
    setClicked([]);
    generateOptions(data, setCorrect, setOptions);
  };

  const handleChoice = (option: Option) => {
    if (clicked.includes(option)) return;
    setClicked([...clicked, option]);

    if (option.name === correct?.name) {
      setShowToast(true);
      setPoints(points + 1);
      console.log(option.name, true);

      setTimeout(() => {
        setShowToast(false);
        setCounter(30);
        setClicked([]);
        generateOptions(data, setCorrect, setOptions);
      }, 2000);
    } else {
      console.log(option.name, false);
    }
  };

  const handleTimeout = () => {
    setClicked(options);
  };

  useEffect(() => {
    generateOptions(data, setCorrect, setOptions);
  }, []);

  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex flex-1 items-center justify-center py-4">
        <div className="flex h-full flex-col">
          <div className="gap-4 text-center">
            <div className="mb-4 flex justify-between px-2">
              <span className="font-semibold">theme</span>
              <span className="font-semibold">1/15</span>
            </div>
            <div className="mb-4 flex justify-center px-2">
              <span className="countdown font-mono text-4xl">
                <span
                  style={{ "--value": points } as React.CSSProperties}
                ></span>
              </span>
            </div>
            <PlayCard correct={correct} />
          </div>
          <div className="mt-auto grid gap-4">
            {options.map((option) => (
              <ChoiceButton
                key={option.rank}
                option={option}
                isCorrect={option.name === correct?.name}
                isClicked={clicked.includes(option)}
                onClick={handleChoice}
              />
            ))}
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-auto flex w-full max-w-md justify-between">
        <div className="flex gap-3">
          <Link to="/" className="btn btn-square">
            <ArrowLeftIcon className="size-6" />
          </Link>
          <button onClick={restartGame} className="btn btn-square">
            <ArrowPathRoundedSquareIcon className="size-6" />
          </button>
        </div>
        <div>
          <button className="btn btn-square btn-ghost">
            <Countdown
              counter={counter}
              setCounter={setCounter}
              onTimeout={handleTimeout}
            />
          </button>
        </div>
      </footer>
      {showToast && <Toast message="Correct!" type="success" />}
    </div>
  );
}

export default Practice;
