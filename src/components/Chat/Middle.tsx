export function Middle() {
  return (
    <div className="flex flex-col justify-between w-full flex-1 mb-12 mt-6 text-xs text-[#E1E1E6]">
      <span className="text-center">Hoje 11:30</span>
      <div className="flex flex-col">
        <span className="mb-2">Cecilia - 11:30</span>
        <div className="w-fit rounded-xl rounded-tl-none bg-[#633BBC] p-3">
          <p>Tive uma ideia incrível para um projeto! 😍</p>
        </div>
      </div>

      <div className="flex flex-col text-end w-full">
        <span className="mb-2">Você - 11:32</span>
        <div className="w-fit rounded-xl rounded-br-none bg-[#07847E] p-3 self-end">
          <p>Sério? Me conta mais.</p>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="mb-2">Cecilia - 11:34</span>
        <div className="w-fit rounded-xl rounded-tl-none bg-[#633BBC] p-3">
          <p>E se a gente fizesse um chat moderno e responsivo em apenas uma semana?</p>
        </div>
      </div>

      <div className="flex flex-col text-end w-full">
        <span className="mb-2">Você - 11:36</span>
        <div className="w-fit rounded-xl rounded-br-none bg-[#07847E] p-3 self-end">
          <p className="font-bold">#boraCodar! 🚀</p>
        </div>
      </div>

    </div>
  )
}