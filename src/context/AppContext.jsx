import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { allProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
  
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [isSeller, setIsSeller] = useState(false)
  const [showUserLogin, setShowUserLogin] = useState(false)
  const [products,setProducts] = useState([])
  const [cartItems,setCartItems] = useState({})
  const [searchQuery, setSearchQuery] = useState("")

  const fetchProducts = async () =>{
    setProducts(allProducts)
  }

  const addToCart = (itemId) =>{
    console.log(itemId)
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]){
      cartData[itemId] += 1
    }
    else {
      cartData[itemId] = 1
    }
    setCartItems(cartData);
    toast.success("Added to cart")
  }

  const updateCart =  (itemId, quantity) => {
    console.log(itemId,quantity)
    
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
     setCartItems(cartData);
    
    toast.success("cart updated")
  }

  const removeFromCart = (itemId) => {
 
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]){
      cartData[itemId]  -= 1
      if (cartData[itemId] === 0) {
        delete cartData[itemId]
      }
    }
    toast.success("Removed from cart")
    setCartItems(cartData);
  }

  const getCartCount = () =>{
    let totalCount = 0 
    for (const item in cartItems){
      totalCount += cartItems[item]
    }
    return totalCount;
  } 

  const getCartAmount = () => {
    let totalAmount = 0
     for (const item in cartItems){
      let itemInfo = products.find((product)=>product.id === item)
      if(cartItems[item]>0){
        totalAmount += itemInfo.offerPrice * cartItems[item]
      }
    }
    return Math.floor(totalAmount *100)/100 
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  const value = {navigate, user, setUser, setIsSeller, isSeller, showUserLogin, setShowUserLogin, products, 
    addToCart, updateCart, removeFromCart, cartItems, searchQuery, setSearchQuery, getCartAmount, getCartCount}
  
  return <AppContext.Provider value={value}>
    {children} 
  </AppContext.Provider>
}

export const useAppContext = ()=>{
  return useContext(AppContext)
}