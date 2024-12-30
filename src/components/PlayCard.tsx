import { Option } from "../utils/types";

function PlayCard({ data }: { data: Option | null }) {
  return (
    <div className="w-full rounded-2xl shadow-xl md:w-96">
      <figure>
        <img className="rounded-2xl" src={data?.img} alt="Shoes" />
      </figure>
    </div>
  );
}

export default PlayCard;
