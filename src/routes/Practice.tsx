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
import GuessTile from "../components/GuessTile";

function Practice() {
  const [correct, setCorrect] = useState<Option | null>(null);
  const [options, setOptions] = useState<Option[]>([]);

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
            <PlayCard data={correct} />
          </div>
          <div className="mt-auto grid gap-4">
            {options.map((option) => (
              <button
                key={option.rank}
                onClick={() =>
                  console.log(option.name, option.name === correct?.name)
                }
              >
                <GuessTile option={option} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-auto flex w-full max-w-md justify-between">
        <div className="flex gap-3">
          <Link to="/" className="btn btn-square">
            <ArrowLeftIcon className="size-6" />
          </Link>
          <button className="btn btn-square">
            <ArrowPathRoundedSquareIcon className="size-6" />
          </button>
        </div>
        <div>
          <button className="btn btn-square btn-ghost">
            <Countdown />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Practice;
