import React, {useState, useEffect} from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';


function Products() {

  // array de produtos
const [products, setProducts] = useState([]);

useEffect(() => {
  // função pra buscar os produtos
  fetchProducts('iphone').then((response) => {
    setProducts(response);
    // console.log(products)
  }) ;
}, []);

// function Products() {
  return ( 
    <section className="products container">

    {products.map((product) => <ProductCard key={product.id} data={product} />)}
    
    
    {/* <ProductCard data={{ title: 'teste produto'}} /> */}

    {/* aqui lista os produtos na tela de forma simples trazendo somente o título do produto */}

    {/* {
        products.map((product) => <p key={product.title}>{product.title}</p>)
    } */}

    </section>

   );
}

export default Products;

