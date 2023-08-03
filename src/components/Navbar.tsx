import { Container, Flex } from "./common";
import { SearchBar } from ".";
import logo from "../assets/svg/logo.svg";
import { IUseState } from "./types";

export const Navbar = ({ value, setValue }: IUseState) => {
  return (
    <nav className="navbar">
      <Container>
        <Flex justify="between" align="center">
          <>
            <div className="navbar__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="navbar__search">
              <SearchBar value={value} setValue={setValue} />
            </div>
          </>
        </Flex>
      </Container>
    </nav>
  );
};
