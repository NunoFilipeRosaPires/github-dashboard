import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IUseState } from "./types";
import { useState } from "react";

export const SearchBar = ({ setValue }: IUseState) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setValue!(searchValue);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </form>
    </div>
  );
};
