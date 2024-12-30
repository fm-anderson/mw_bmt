import { MenuItem } from "../utils/types";
import ICONS_MAP from "../config/iconsMap";

type IconName = keyof typeof ICONS_MAP;

function Card({ data }: { data: MenuItem }) {
  const IconComponent = ICONS_MAP[data.icon as IconName];

  return (
    <div className="card min-w-44 bg-base-300">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.name}</h2>

        <div className="card-actions justify-end">
          <button className="btn btn-circle btn-ghost">
            {IconComponent && <IconComponent className="size-8" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
