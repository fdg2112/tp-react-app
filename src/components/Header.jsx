import React from 'react';
import logoMl from '../logo-ml.png'
import Search from './Search';
import { Link } from 'react-router-dom'


const Header = ( { setBusqueda } ) => {
    return ( 
        <div className="header">
            <nav className="nav">
                <div className='logo'>
                    <Link to="/"><img src={logoMl} alt="" /></Link>
                </div>
                <Search
                    setBusqueda = {setBusqueda}
                />
            </nav>
        </div>
     );
}
 
export default Header;