
/**
 * fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
 */
            import { useEffect, useState } from "react";
            import ProductCard from "./ProductCard";
          
            const ProductList = ({ selectedCategory }) => {
              const [products, setProducts] = useState([]);
              const [loading, setLoading] = useState(false); 
              useEffect(() => {
                setLoading(true);
                fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                  .then((res) => res.json())   
                  .then((json) => { 
                    setProducts(json);
                    setLoading(false);
                  });   
              }, [selectedCategory]);    
               
              let loadError = null;     
             
              if (loading) {
                return <div className="loading">Fetching Products ... </div>;
              } else if (loadError) { 
                return <div>Please try again ... </div>;
              } else {
                return (  
                  <div className="products   
                  container-fluid  " 
                  > 
                    <section className="productList container-fluid">
                    {products.map((product) => ( 
                      <ProductCard product={product} />
                    ))}
                    </section>  
                  </div>
                );
              }
            };
            export default ProductList;
            
