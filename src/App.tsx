import React, { useState } from 'react';
import './App.css';
import { FilmsTable } from './components/Container/index';
import { SearchBar } from './components/SearchBar/index';
import films from "./components/Container/251filmes807.json";

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const searchFilm = films.filter((film) => 
    film.nome.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
      <div className="App">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <FilmsTable film={searchFilm} />
      </div>
  )
};

export default App;