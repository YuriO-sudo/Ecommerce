import React, {useState, useContext} from 'react';
import  { BsSearch } from 'react-icons/bs';
import './SearchBar.css';

import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

// componente chamado SearchBar que tá sendo importado lá no Header
function SearchBar() {

    // searchValue > armazena o valor do estado
  // setSearchValue > função que vai atualizar o valor do estado
  const {setProducts, setLoading} = useContext(AppContext);
  
  const [searchValue ,setSearchValue] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  }

  return ( 
    <form className="search-bar" onSubmit={handleSearch}>
    {/* {name} */}
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