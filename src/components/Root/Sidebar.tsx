import { Footer } from "./Sidebar/Footer";
import { Header } from "./Sidebar/Header";
import { Search } from "./Sidebar/Search";
import { UsersList } from "./Sidebar/UsersList";

export function Sidebar() {
  return (
    <div className="h-full shadow-2xl drop-shadow-lg flex flex-col bg-background">
      <Header />
      <Search />
      <UsersList />
      <Footer />
    </div>
  );
}
