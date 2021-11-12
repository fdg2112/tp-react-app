import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Search = ( { setBusqueda } ) => {

    const [inputValue, setInputValue] = useState(''); 
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2){
            setBusqueda(inputValue);
            setInputValue('');
        }
    }

    return ( 
        <form onSubmit={handleSubmit} className="search">
            <input 
                type="text" 
                placeholder = "Buscar productos, marcas y más..."
                id="busqueda"
                name="busqueda"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit} className="content-icon">
                <Link to={`/`}> <i class="fas fa-search"></i> </Link>
            </button>
        </form>
     );
}
 
export default Search;