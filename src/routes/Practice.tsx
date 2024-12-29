import {
  ArrowLeftIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/solid";
import Countdown from "../components/Countdown";

function Practice() {
  return (
    <div className="flex h-full justify-between p-4">
      <div>
        <button className="btn btn-square btn-ghost">
          <ArrowLeftIcon className="size-6" />
        </button>
        <button className="btn btn-square btn-ghost">
          <ArrowPathRoundedSquareIcon className="size-6" />
        </button>
      </div>
      <div>
        <button className="btn btn-square btn-ghost">
          <Countdown />
        </button>
      </div>
    </div>
  );
}

export default Practice;
