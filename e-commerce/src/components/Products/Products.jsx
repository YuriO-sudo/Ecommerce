import React, { useEffect, useContext} from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {
  // array de produtos
// const [products, setProducts] = useState([]);
const {products, setProducts, loading, setLoading} = useContext(AppContext);

useEffect(() => {
  // função pra buscar os produtos
  fetchProducts({products}).then((response) => {
    setProducts(response);
    setLoading(false)
    // console.log(products)
  }) ;
}, []);

  return ( 
    (loading && <Loading />) || (
    <section className="products container">
    {products.map((product) => <ProductCard key={product.id} data={product} />)}
    </section>
    )
        
   );
}

export default Products;

