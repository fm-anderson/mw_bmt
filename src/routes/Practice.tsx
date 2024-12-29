import { Link } from "react-router";
import {
  ArrowLeftIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/solid";
import Countdown from "../components/Countdown";

function Practice() {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex flex-1 items-center justify-center">
        <div>
          <h1>cards</h1>
        </div>
      </div>

      <footer className="mt-auto flex w-full justify-between">
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
