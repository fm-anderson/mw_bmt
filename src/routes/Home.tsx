import { Link } from "react-router";
import { MenuItem } from "../utils/types";
import menu from "../config/menu.json";
import Card from "../components/Card";

function Home() {
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
