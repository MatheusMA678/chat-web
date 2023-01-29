import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Root/Sidebar";

export default function Root() {
  return (
    <div className="md:grid md:grid-cols-[20rem_auto] w-screen h-screen bg-background text-white">
      <Sidebar />
      <Outlet />
    </div>
  );
}
