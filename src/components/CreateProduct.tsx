import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
const a = 1;
const productData: IProduct = {
   title: '',
   price: 13.5,
   description: 'lorem ipsum set',
   image: 'https://i.pravatar.cc',
   category: 'electronic',
   rating: {
      rate: 4.2,
      count: 10
   }
}

interface createProductProps {
   onCreate: (product: IProduct) => void
}

const CreateProduct = ({ onCreate }: createProductProps) => {
   const [value, setValue] = useState('');
   const [error, setError] = useState('');

   const submitHandler = async (event: React.FormEvent) => {
      event.preventDefault();

      if(value.trim().length === 0) {
         setError('Please enter a valid title');
         return;
      }

      productData.title = value;
      const res = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
      console.log(res);
      
      onCreate(res.data);
   }

   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

   return (
      <form onSubmit={submitHandler}>
         <input
            type="text"
            className="border py-2 px-4 mb-2 w-full outline-0"
            placeholder="Enter product title..."
            value={value}
            onChange={changeHandler}
         />

         {error && <ErrorMessage error={error} />}

         <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
      </form>
   )
}

export default CreateProduct;
