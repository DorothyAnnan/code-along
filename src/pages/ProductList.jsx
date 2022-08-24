import React,{useEffect,useState}from "react";
import axios from "axios"
import Product from "../components/Product";
import useAxios from "../hooks/useAxios";
import Spinner from "../components/Spinner";

function ProductList() {
    const { data, isLoading,error} =useAxios(
    "http://api.escuelajs.co/api/v1/products"
    );

    // useEffect(()=>{
    //     const getProducts =async()=>{
    //         const results = await axios.get("http://api.escuelajs.co/api/v1/products");
    //        setProducts(results.data);
    //     };
    //     getProducts();
    // }, []);
    // console.log(data);
    
if(isLoading) return<Spinner/>;

if(error) return <p>{error}</p>;
  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
        {data.map((data)=>(
        <Product product={data}/>
        ))}
        </div>
  );
}

export default ProductList;