import capa from "../assets/images/capa.png";
import { Outlet } from "react-router-dom";

export function Body() {
  return (
    <div className="overflow-hidden p-8 hidden md:block">
      <Outlet />
    </div>
  );
}
