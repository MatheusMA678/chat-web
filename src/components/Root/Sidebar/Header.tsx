import logo from "../../../assets/images/logo.png";

export function Header() {
  return (
    <header className="w-full flex justify-center items-center">
      <img
        src={logo}
        alt="Logo da Rocketseat"
        className="w-16 h-16 rounded-full"
      />
      <h1 className="font-bold text-2xl">Chat</h1>
    </header>
  );
}
