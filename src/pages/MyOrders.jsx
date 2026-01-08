import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { dummyOrders } from '../assets/assets'

const MyOrders = () => {

  const [myOrders,setMyOrders]= useState([])
  const {} = useAppContext

  const fetchMyOrders = async () => {
    setMyOrders(dummyOrders)
  }

  useEffect(()=>{
    fetchMyOrders()
  },[])

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">My Orders</h1>

      <div className="space-y-6">
        {dummyOrders.map(order => (
          <div key={order.id} className="border bg-green-100/50 border-gray-100 rounded-lg p-5 ">
            {/* Order header */}
            <div className="flex justify-between mb-4">
              <div>
                <p className="font-semibold">Order #{order.id}</p>
                <p className="text-sm text-gray-500">
                  Ordered on {order.orderDate}
                </p>
              </div>
              <span className={`text-sm font-medium
                ${order.status === "Delivered" && "text-green-600"}
                ${order.status === "Shipped" && "text-blue-600"}
                ${order.status === "Pending" && "text-orange-600"}
              `}>
                {order.status}
              </span>
            </div>

            {/* Items */}
            {order.items.map(item => (
              <div key={item.productId} className="flex gap-4 mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain border border-gray-300 rounded"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
              </div>
            ))}

            {/* Footer */}
            <div className="flex justify-between items-center mt-4 border-t border-gray-400 pt-3">
              <p className="font-semibold">Total: ₹{order.totalAmount}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrders