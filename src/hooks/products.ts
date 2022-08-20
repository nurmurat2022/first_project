import axios, {AxiosError} from 'axios';
import React, { useEffect, useState } from 'react';
import {IProduct} from './../models'

export function useProducts() {
   const [loading, setLoading] = useState(false);
   const [products, setProducts] = useState<IProduct[]>([]);
   const [error, setError] = useState('')

   function addProduct(product: IProduct) {
      setProducts(prev => [...prev, product])
   }

   async function fetchProducts() {
      try {
         setError('');
         setLoading(true);
         const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
         console.log('res');
         
         setProducts(res.data);
         setLoading(false);
      } catch (e: unknown) {
         const error = e as AxiosError;
         setLoading(false);
         setError(error.message);
      }
   }

   useEffect(() => {
      fetchProducts();
   }, [])

   return { products, addProduct, loading, error };
}