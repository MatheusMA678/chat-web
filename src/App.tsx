import { Bottom } from "./components/Bottom";
import { Middle } from "./components/Middle";
import { Top } from "./components/Top";

export default function App() {
  return(
    <div className="flex flex-col justify-between bg-[#1A1924] text-white h-screen w-screen px-16 py-8">
      <Top />
      <Middle />
      <Bottom />
    </div>
  )
}