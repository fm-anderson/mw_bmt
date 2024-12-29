import { Link } from "react-router";
import { MenuItem } from "../utils/types";
import Card from "../components/Card";
import menu from "../config/menu.json";

function Home(): JSX.Element {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {menu.main.map((item: MenuItem) => (
          <Link to={item.url} key={item.url}>
            <Card data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
