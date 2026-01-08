import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom';
import {categories} from '../assets/assets'
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {

  const {products} = useAppContext();
  const {category}  = useParams()
  const searchCategory = categories.find((i)=>i.path.toLowerCase()=== category)

  const  filteredProducts = products.filter((p)=>p.category.toLowerCase()===category)

  return (
    <div>
    {searchCategory && <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="relative inline-block text-2xl sm:text-3xl font-semibold text-green-800 mb-8 after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-16 after:h-[3px] after:bg-green-500 after:rounded-full">
           {searchCategory.text.toUpperCase()}
          </h1>
    
          {filteredProducts.length > 0 ? (<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredProducts.map((product)=>(<ProductCard key={product.id} product={product}/>))}
            </div>   
          ) : (
            <p className="text-zinc-500 dark:text-zinc-400 text-lg">No products found.</p>
          )}
        </div> }</div>
    
  )
}

export default ProductCategory