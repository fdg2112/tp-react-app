import React from 'react';
import { Link } from 'react-router-dom'

const Products = ( {data} ) => {
    const descripcion = data.title;
    const precio = data.prices.prices[0].amount;
    const ubicacion = data.address.state_name;
    const thumbnail_id = data.thumbnail_id;
    const img = `https://http2.mlstatic.com/D_${thumbnail_id}-O.jpg`

    return ( 
        <>
            <div className="card-img">
                <Link to={`/info-producto/${data.id}`}><img alt="" src={img}/> </Link>                        
            </div>
            <div className="card-info">
                <div className="card-descripcion">
                    <p>{descripcion}</p>
                </div>
                <div className="card-precio-ubicacion">
                    <h3>$ {precio}</h3>
                    <p>Ubicacion: {ubicacion}</p>
                </div>    
            </div>
        </>
     );
}
 
export default Products;