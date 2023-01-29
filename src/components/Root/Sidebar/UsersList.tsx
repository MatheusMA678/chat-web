import avatar from "../../../assets/images/avatar.png";

import { Link } from "react-router-dom";

export function UsersList() {
  return (
    <nav className="p-4 flex-1">
      <ul>
        <li>
          <Link
            to={"chat/1"}
            className="flex gap-4 w-full p-2 rounded-lg transition-all hover:bg-gray-700"
          >
            <img src={avatar} alt="Foto de Cecilia Sassaki" />
            <div className="flex flex-col">
              <h2>Cecilia Sassaki</h2>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-green-400 text-sm">Online</span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
