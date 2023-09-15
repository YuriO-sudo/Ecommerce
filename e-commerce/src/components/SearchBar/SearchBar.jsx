import React, {useState} from 'react';
import  { BsSearch } from 'react-icons/bs';
import './SearchBar.css';



// componente chamado SearchBar que tá sendo importado lá no Header
function SearchBar() {

  const [searchValue ,setSearchValue] = useState('');
  // searchValue > armazena o valor do estado
// setSearchValue > função que vai atualizar o valor do estado

  return ( 
    <form className="search-bar">
    <input
    type="search"
    value={searchValue}
    placeholder="Buscar produtos"
    className="search__input"
    // onChange > é um evento que pega um target 
    // target é um elemento que dispara o evento que é o próprio input
    onChange={ (target) => setSearchValue(target.value)}
    required
    />
    
    <button type="submit" className="search__button">
      <BsSearch/>
    </button>
    </form>
   );
}

export default SearchBar;