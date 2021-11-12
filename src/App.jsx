import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import InfoProducto from './pages/InfoProducto';
import NotFound from './pages/NotFound';

const App = () => {
    const [ busqueda, setBusqueda ] = useState([]);
    const [ data, setData] = useState([]);
    useEffect(() => {
        const getApi = async (busqueda) => {
            const url = `https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}&limit=20`
            const resp = await fetch(url);
            const result = await resp.json()
            setData(result);
        }
        getApi(busqueda);
    }, [busqueda])

    const { filters } = data;
    
    if (!filters) return null;
    
    return ( 
    <BrowserRouter>
        <Header setBusqueda={setBusqueda}/>
        <Layout>
          <Switch>
                <Route exact path='/' >
                    <Home data={data}/>
                </Route>
                <Route exact path='/info-producto/:id' component={InfoProducto}/> 
                <Route path='*' component={NotFound} />
          </Switch>
        </Layout>
        <Footer />
    </BrowserRouter>
     );
}
 
export default App;