import React, { useEffect, useState } from "react";
import { db } from "../firebase_setup/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Link } from "react-router-dom";
import NoProductsFound from "./NoProducts";

const Catalog = ({ sortBy, searchQuery, selectedCategories }) => {
  const [products, setProducts] = useState([]);
  console.log(selectedCategories);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let q = collection(db, "Products");
        if (sortBy.field && sortBy.direction) {
          q = query(q, orderBy(sortBy.field, sortBy.direction));
        }
        const querySnapshot = await getDocs(q);
        const productsData = [];
        querySnapshot.forEach((doc) => {
          productsData.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        // Filter products based on search query
        let filteredProducts = productsData.filter((product) =>
          product.ProductName.toLowerCase().includes(searchQuery.toLowerCase())
        );
         //Filter based on Category
        if (selectedCategories.length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            selectedCategories.includes(product.Category)
          );
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, [sortBy, searchQuery, selectedCategories]);

  return (
    <div>
    {products.length === 0 ? (
      <NoProductsFound />
    ) : (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            {products.map((product) => (
              <div
                className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 rounded-lg"
                key={product.id}
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-96 h-full block p-8"
                    
                      src={product.image} 
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.Category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.ProductName}
                    </h2>
                    <p className="mt-1">Rs. {product.MRP}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}
  </div>
  );
};

export default Catalog;
