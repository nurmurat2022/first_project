import React, {useState} from 'react';
import { IProduct } from './../models';
var classNames = require('classnames');

interface ProductProps {
   product: IProduct
}

const Product = ({ product }: ProductProps) => {
   const [details, setDetails] = useState(false);

   // const btnClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
   const btnClassess = classNames('py-2 px-4 border', {'bg-yellow-400': details, 'bg-blue-400': !details})

   return (
      <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
         <img src={product.image} alt={product.title} className="w-1/6" />
         <p>{product.title}</p>
         <p className='font-bold'>{product.price}</p>
         <button 
            className={btnClassess}
            onClick={() => setDetails(prev => !prev)}
         >{details ? 'Hide Details' : 'Show Details'}</button>
         {details && <div>
            <p >
               {product.description.length > 150 ?
               product.description.substring(0, 150) + 
               '...' : product.description}
            </p>
            <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
         </div>}
      </div>
   );
};

export default Product;