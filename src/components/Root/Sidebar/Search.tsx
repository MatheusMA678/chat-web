import { MagnifyingGlass } from "phosphor-react";
import { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";

export function Search() {
  const [search, setSearch] = useState("");

  return (
    <form
      id="search-form"
      role="search"
      className="flex justify-between items-center gap-4 p-4 h-20 border-y border-purple-500"
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <input
        id="p"
        aria-label="Pesquisar contatos"
        placeholder="Pesquisar"
        type="search"
        name="p"
        className="flex-1 rounded-lg bg-gray-200 text-black py-2 px-4 h-full transition-all outline-none focus:ring-2 focus:ring-purple-800"
        onChange={e => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="hidden lg:block rounded-lg bg-purple-500 py-2 px-4 h-full transition-all active:bg-purple-700 active:ring-2 active:ring-purple-800 hover:bg-purple-600"
        onClick={() => console.log(search)}
      >
        <MagnifyingGlass size={18} weight="bold" color="white" />
      </button>
    </form>
  );
}
