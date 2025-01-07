import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/solid";
import data from "../config/data.json";
import { generateOptions, initializeGame } from "../utils/helper";
import { Option } from "../utils/types";
import Countdown from "../components/Countdown";
import PlayCard from "../components/PlayCard";
import Toast from "../components/Toast";
import ChoiceButton from "../components/ChoiceButton";
import GameOver from "./GameOver";

function Practice() {
  const [correct, setCorrect] = useState<Option | null>(null);
  const [options, setOptions] = useState<Option[]>([]);
  const [counter, setCounter] = useState<number>(30);
  const [points, setPoints] = useState<number>(0);
  const [clicked, setClicked] = useState<Option[]>([]);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [dataTip, setDataTip] = useState<string | null>(null);

  const restartGame = () => {
    setCounter(30);
    setPoints(0);
    setClicked([]);
    setDataTip(null);
    initializeGame(data);
    generateOptions(data, setCorrect, setOptions);
  };

  const isGameOver = () => {
    return options.length === 0 && !correct;
  };

  const handleChoice = (option: Option) => {
    if (clicked.includes(option)) return;
    setClicked([...clicked, option]);

    if (option.name === correct?.name) {
      setShowToast(true);

      switch (clicked.length) {
        case 0:
          setPoints(points + 3);
          setDataTip("+3 points");
          break;
        case 1:
          setPoints(points + 1);
          setDataTip("+1 point");
          break;
        default:
          setDataTip("No points");
          break;
      }

      console.log(option.name, true);

      setTimeout(() => {
        setCounter(30);
        setClicked([]);
        generateOptions(data, setCorrect, setOptions);
        setShowToast(false);
      }, 2000);
    } else {
      console.log(option.name, false);
    }
  };

  const handleNextRound = () => {
    setCounter(30);
    setClicked([]);
    generateOptions(data, setCorrect, setOptions);
    setShowToast(false);
  };

  const handleTimeout = () => {
    setClicked(options);
  };

  useEffect(() => {
    initializeGame(data);
    generateOptions(data, setCorrect, setOptions);
  }, []);

  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex flex-1 items-center justify-center py-4">
        <div className="flex h-full flex-col">
          {correct && (
            <div className="gap-4 text-center">
              <div className="mb-4 flex justify-between px-2">
                <span className="font-semibold">theme</span>

                <div
                  className={`tooltip ${showToast ? "tooltip-open" : ""}`}
                  data-tip={dataTip}
                >
                  {" "}
                  <span className="font-semibold">
                    <span className="countdown">
                      <span
                        style={{ "--value": points } as React.CSSProperties}
                      ></span>
                    </span>{" "}
                    points
                  </span>
                </div>
              </div>

              <PlayCard correct={correct} />
            </div>
          )}
          {isGameOver() && <GameOver />}
          <div className="mt-auto grid gap-4">
            {options.map((option) => (
              <ChoiceButton
                key={option.rank}
                option={option}
                counter={counter}
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
          {!isGameOver() && (
            <span>
              {counter > 0 ? (
                <button className="btn btn-square btn-ghost">
                  <Countdown
                    counter={counter}
                    setCounter={setCounter}
                    onTimeout={handleTimeout}
                  />
                </button>
              ) : (
                <button
                  onClick={handleNextRound}
                  className="btn btn-square btn-success"
                >
                  <ArrowRightIcon className="size-6" />
                </button>
              )}
            </span>
          )}
        </div>
      </footer>
      {showToast && <Toast message="Correct!" type="success" />}
    </div>
  );
}

export default Practice;
