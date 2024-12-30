import { Option } from "../utils/types";

function GuessTile({ option }: { option: Option }) {
  return (
    <div className="card min-w-40 bg-base-300">
      <div className="card-body items-center p-6">
        <h2 className="card-title">{option.name}</h2>
      </div>
    </div>
  );
}

export default GuessTile;
