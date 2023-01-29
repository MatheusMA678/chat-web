import { Bottom } from "../components/Chat/Bottom";
import { Middle } from "../components/Chat/Middle";
import { Top } from "../components/Chat/Top";

export function Chat() {
  return (
    <div className="flex flex-col justify-between bg-background text-white h-full w-full px-16 py-8">
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}
