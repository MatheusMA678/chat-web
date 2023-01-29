import { PaperPlaneRight } from "phosphor-react";

export function Bottom() {
  return (
    <div className="flex justify-between items-center w-full rounded-full bg-[#282843] px-6 py-3">
      <input className="flex-1 bg-transparent focus:outline-none" type="text" placeholder="Digite sua mensagem" />
      <button className="trasition-opacity hover:opacity-70 active:opacity-50">
        <PaperPlaneRight size={24} color="#ffffff" weight="fill" />
      </button>
    </div>
  )
}