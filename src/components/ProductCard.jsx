import React ,{useState,useEffect} from "react";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({product, component}) => {

console.count(`ProductCard rendered → ${product.name}`);

  const [filteredProduct, setFilteredProduct] = useState([])
  const {addToCart, updateCart, removeFromCart, cartItems, navigate } = useAppContext()




  const Stars = ({ rating }) => (
    <div className="flex items-center gap-0.5">
      {Array(5)
        .fill("")
        .map((_, i) =>
          rating > i ? (
            <svg key={i} width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" fill="#615fff" />
            </svg>
          ) : (
            <svg key={i} width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" fill="#615fff" fillOpacity="0.35" />
            </svg>
          )
        )}
    </div>
  );

  return product && (
  <div className="border border-gray-200 rounded-md px-3 py-2 bg-white min-w-56 max-w-56 w-full shadow-sm hover:shadow-md transition flex flex-col">
    {/* IMAGE */}
    <div className="group cursor-pointer flex items-center justify-center">
      <img className="group-hover:scale-105 transition w-32 h-32 object-contain" src={product.image} alt={product.name} />
    </div>

    {/* CONTENT FIXED HEIGHT BLOCK */}
    <div className="mt-2 flex flex-col flex-grow">
      
      {/* CATEGORY & NAME - fixed minimum height */}
      <div className="min-h-[52px]">
        <p className="text-gray-500 text-sm">{product.category}</p>
        <p className="text-gray-700 font-semibold text-lg leading-tight line-clamp-2">{product.name}</p>
      </div>

      {/* RATING - fixed height */}
      <div className="flex items-center gap-1 mt-1 min-h-[24px]">
        <Stars rating={product.rating} />
        <span className="text-xs text-gray-500">({product.reviews ?? 120})</span>
      </div>

      {/* PRICE + BUTTON - always pinned to bottom */}
      <div className="flex items-end justify-between mt-auto pt-2">
        <p className="font-semibold text-green-600 text-lg">
          ₹{product.offerPrice}{" "}
          <span className="text-gray-400 line-through text-sm">₹{product.price}</span>
        </p>
        {!cartItems[product.id] ? (
          <button
            onClick={() => addToCart(product.id)}
            className="bg-green-500 text-white px-3 py-1.5 text-sm rounded hover:bg-green-600 transition"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-green-500/20 px-2 py-1 rounded">
            <button onClick={()=>{removeFromCart(product.id)}} className="font-bold text-green-700">−</button>
            <span>{cartItems[product.id]}</span>
            <button onClick={()=>{addToCart(product.id)}} className="font-bold text-green-700">+</button>
          </div>
        )}
       

      </div>
    </div>
  </div>
);

};

export default React.memo(ProductCard);
