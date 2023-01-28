import { MagnifyingGlass } from "phosphor-react";

import capa from "../assets/images/capa.png"
import logo from "../assets/images/logo.png"
import avatar from "../assets/images/avatar.png"

export default function Root() {
  return (
    <div className="md:grid md:grid-cols-[30%_70%] w-screen h-screen bg-background text-white">
      <div className="col-span-1 h-full shadow-2xl drop-shadow-lg flex flex-col bg-background">
        <header className="w-full flex justify-center items-center">
          <img 
            src={logo} 
            alt="Logo da Rocketseat"
            className="w-16 h-16 rounded-full" 
          />
          <h1 className="font-bold text-2xl">Chat</h1>
        </header>
        <form
          id="search-form"
          role="search"
          className="flex justify-between items-center gap-4 p-4 h-20 border-y border-purple-500"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <input
            id="p"
            aria-label="Pesquisar contatos"
            placeholder="Pesquisar"
            type="search"
            name="p"
            className="flex-1 rounded-lg bg-gray-200 py-2 px-4 h-full transition-all outline-none focus:ring-2 focus:ring-purple-800"
          />
          <button 
            type="submit"
            className="hidden lg:block rounded-lg bg-purple-500 py-2 px-4 h-full transition-all active:bg-purple-700 active:ring-2 active:ring-purple-800 hover:bg-purple-600"
          ><MagnifyingGlass size={18} weight='bold' color='white' /></button>
        </form>
        <nav className=" p-4 flex-1">
          <ul>
            <li>
              <a 
                href={`/chat/1`}
                className="flex gap-4 w-full p-2 rounded-lg transition-all hover:bg-gray-700"
              >
                <img src={avatar} alt="Foto de Cecilia Sassaki" />
                <div className="flex flex-col">
                  <h2>Cecilia Sassaki</h2>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400"/>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </nav>
        <footer className="w-full">
          <p className="text-center text-gray-500">Desenvolvido por 
            <a 
              href="https://github.com/MatheusMA678"
              className="font-bold text-purple-500"
            > Matheus</a>
          </p>
        </footer>
      </div>
      <div className="overflow-hidden p-8 hidden md:block">
        <img 
          src={capa} 
          alt="Capa do Projeto"
          className="rounded-xl max-h-full w-full"
        />
      </div>
    </div>
  );
}