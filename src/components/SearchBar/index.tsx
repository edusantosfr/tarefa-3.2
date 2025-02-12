import React from "react";
import "./index.css";

type Props = {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export const SearchBar: React.FC<Props> = ({ searchValue, setSearchValue }) => {
    return (
        <input type="text" placeholder="Digite aqui" id="searchBar" value={searchValue}
            onChange={(e) => {
                setSearchValue(e.target.value)
            }}
        />
    );
};