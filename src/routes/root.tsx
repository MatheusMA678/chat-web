import { Sidebar } from "../components/Root/Sidebar"

export default function Root() {
  return (
    <div className="md:grid md:grid-cols-[30%_70%] w-screen h-screen bg-background text-white">
      <Sidebar />
      
    </div>
  );
}