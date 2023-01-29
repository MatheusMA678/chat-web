import capa from "../assets/images/capa.png"

export function Body() {
  return (
    <div className="overflow-hidden p-8 hidden md:block">
      <img 
        src={capa} 
        alt="Capa do Projeto"
        className="rounded-xl max-h-full w-full"
      />
    </div>
  )
}