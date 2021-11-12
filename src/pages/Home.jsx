import React from 'react';
import CardProductos from './CardProductos';

const Home = ( { data } ) => {
    return (
        <>
            <CardProductos 
                data = {data}
            />
        </>
     );
}

export default Home;