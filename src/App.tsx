import { createContext, useState } from "react";
import { Container, Navbar, RepositoryList, UserList } from "./components";

export const SearchContext = createContext(undefined);

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="app">
      <Navbar value={searchValue} setValue={setSearchValue} />
      <Container>
        <>
          <UserList title="Trending Users" sort="followers" search={searchValue} />
          <UserList title="Most Active Users" sort="repositories" search={searchValue} />
          <RepositoryList search={searchValue} />
        </>
      </Container>
    </div>
  );
}

export default App;
