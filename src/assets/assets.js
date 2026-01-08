import logo from './logo.svg'
import profile from './profile.png'
import cart_icon from './cart_icon.png'
import main_banner from './main_banner.png'
import bakery from './bakery.jpg'
import diary from './diary.jpg'
import fresh_fruits from './fresh_fruits.jpg'
import fresh_juice from './fresh_juice.jpg'
import grains from './grains.jpg'
import instant_food from './instant_food.jpg'
import organic from './organic.jpg'
import atta from './atta.jpg'
import baby_spinach from './baby_spinach.jpg'
import orange_juice from './orange_juice.jpg'
import strawberry from './strawberry.jpg'
import wheatbread from './wheat_bread.jpg'
import yogurt from './yogurt.jpg'
import bottombanner from './bottombanner.jpg'

export const assets = {logo, profile, cart_icon, main_banner, bottombanner};

export const categories = [
  {
    text:"Organic Veggies",
    path:"Vegetables",
    image: organic,
    bgColor: "#FEF6DA"

  },
  {
    text:"Fresh fruits",
    path:"Fruits",
    image: fresh_fruits,
    bgColor: "#FEE0E0"

  },
  {
    text:"Fresh Juice",
    path:"Drinks",
    image: fresh_juice,
    bgColor: "#F0F5DE"

  },
  {
    text:"Instant Food",
    path:"Instant",
    image: instant_food,
    bgColor: "#E1F5EC"

  },
  {
    text:"Diary products",
    path:"Diary",
    image: diary,
    bgColor: "#FEE6CD"

  },
  {
    text:"Bakery",
    path:"Bakery",
    image: bakery,
    bgColor: "#E0F6FE"

  },
  {
    text:"Grains",
    path:"Grains",
    image: grains,
    bgColor: "#F1E3F9"

  }
]

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      {text:"Home", url:"#"},
      {text:"Best Sellers", url:"#"},
      {text:"Offers & Deals", url:"#"},
      {text:"Contact Us", url:"#"},
      {text:"FAQs", url:"#"},
    ] 
  },
   {
    title: "Need Help?",
    links: [
      {text:"Delivery Info", url:"#"},
      {text:"Return & Refund policy", url:"#"},
      {text:"Payment Methods", url:"#"},
      {text:"Track your order", url:"#"},
      {text:"Contact us", url:"#"},
    ] 
  },
   {
    title: "Follow Us",
    links: [
      {text:"Instagram", url:"#"},
      {text:"Twitter", url:"#"},
      {text:"FaceBook", url:"#"},
      {text:"Youtube", url:"#"},
    ] 
  }
]

export const features = [
  {
  title: "Fastest delivery",
  description: "Groceries delivered in under 30 mins"
},
{
  title: "freshness Guaranteed",
  description: "fresh product"
},{
  title: "affordable prices",
  description: "Get at affordable prices"
},{
  title: "Trusted by thousands",
  description: "Loved by 10000+ customers"
}
]

// assets.js (append)
// assets.js (append or replace your existing bestSellers)
export const allProducts = [
  {
    id: "p1",
    name: "Organic Baby Spinach",
    category: "Vegetables",
    image: baby_spinach,
    rating: 4.7,
    reviews: 324,
    price: 149,
    offerPrice: 129,
    badge: "Bestseller",
    inStock: true,
    weight: "500g"
  },
  {
    id: "p2",
    name: "Fresh Strawberries (500g)",
    category: "Fruits",
    image: strawberry,
    rating: 4.5,
    reviews: 210,
    price: 249,
    offerPrice: 199,
    badge: "Top Pick",
    inStock: true
  },
  {
    id: "p3",
    name: "Cold Pressed Orange Juice",
    category: "Drinks",
    image: orange_juice,
    rating: 4.3,
    reviews: 88,
    price: 99,
    offerPrice: 89,
    badge: null,
    inStock: true
  },
  {
    id: "p4",
    name: "Whole Wheat Bread",
    category: "Bakery",
    image: wheatbread,
    rating: 4.6,
    reviews: 156,
    price: 79,
    offerPrice: 59,
    badge: "Bestseller",
    inStock: true
  },
  {
    id: "p5",
    name: "Greek Yogurt (1kg)",
    category: "Diary",
    image: yogurt,
    rating: 4.4,
    reviews: 134,
    price: 349,
    offerPrice: 299,
    badge: null,
    inStock: true
  },
  {
    id: "p6",
    name: "Multi-grain Atta (2kg)",
    category: "Grains",
    image: atta,
    rating: 4.2,
    reviews: 41,
    price: 199,
    offerPrice: 189,
    badge: null,
    inStock: true
  },
  {
    id: "p7",
    name: "Organic Baby Spinach",
    category: "Vegetables",
    image: baby_spinach,
    rating: 4.7,
    reviews: 324,
    price: 149,
    offerPrice: 129,
    badge: "Bestseller",
    inStock: true
  },
  {
    id: "p8",
    name: "Fresh Strawberries (500g)",
    category: "Fruits",
    image: strawberry,
    rating: 4.5,
    reviews: 210,
    price: 249,
    offerPrice: 199,
    badge: "Top Pick",
    inStock: true
  }, {
    id: "p9",
    name: "Organic Baby Spinach",
    category: "Instant",
    image: baby_spinach,
    rating: 4.7,
    reviews: 324,
    price: 149,
    offerPrice: 129,
    badge: "Bestseller",
    inStock: true
  },
  {
    id: "p10",
    name: "Fresh Strawberries (500g)",
    category: "Fruits",
    image: strawberry,
    rating: 4.5,
    reviews: 210,
    price: 249,
    offerPrice: 199,
    badge: "Top Pick",
    inStock: true
  },
  {
    id: "p11",
    name: "Cold Pressed Orange Juice",
    category: "Drinks",
    image: orange_juice,
    rating: 4.3,
    reviews: 88,
    price: 99,
    offerPrice: 89,
    badge: null,
    inStock: true
  },
  {
    id: "p12",
    name: "Whole Wheat Bread",
    category: "Bakery",
    image: wheatbread,
    rating: 4.6,
    reviews: 156,
    price: 79,
    offerPrice: 59,
    badge: "Bestseller",
    inStock: true
  }
];

export const dummyAddresses = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 9876543210",
    addressLine1: "221B Baker Street",
    addressLine2: "Near Central Park",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "USA",
    isDefault: true,
  },
  {
    id: 2,
    name: "Emily Watson",
    phone: "+1 9123456780",
    addressLine1: "742 Evergreen Terrace",
    addressLine2: "Springfield Heights",
    city: "Springfield",
    state: "IL",
    postalCode: "62704",
    country: "USA",
    isDefault: false,
  },
  {
    id: 3,
    name: "Alex Morgan",
    phone: "+44 7700 900123",
    addressLine1: "10 Downing Street",
    addressLine2: "",
    city: "London",
    state: "Greater London",
    postalCode: "SW1A 2AA",
    country: "UK",
    isDefault: false,
  },
];


export const dummyOrders = [
  {
    id: "ORD-1001",
    orderDate: "2025-02-18",
    status: "Delivered", // Pending | Shipped | Delivered | Cancelled
    paymentMethod: "COD",
    totalAmount: 1249,
    items: [
      {
        productId: 1,
        name: "Organic Baby Spinach",
        image: organic,
        price: 199,
        quantity: 2,
      },
      {
        productId: 2,
        name: "Fresh Strawberries (500g)",
        image: strawberry,
        price: 299,
        quantity: 1,
      },
    ],
    deliveryAddress: {
      name: "John Doe",
      phone: "+1 9876543210",
      addressLine1: "221B Baker Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA",
    },
  },

  {
    id: "ORD-1002",
    orderDate: "2025-02-22",
    status: "Shipped",
    paymentMethod: "Online",
    totalAmount: 799,
    items: [
      {
        productId: 3,
        name: "Whole Wheat Bread",
        image: bakery,
        price: 99,
        quantity: 2,
      },
      {
        productId: 4,
        name: "Greek Yogurt (1kg)",
        image: yogurt,
        price: 299,
        quantity: 1,
      },
    ],
    deliveryAddress: {
      name: "Emily Watson",
      phone: "+1 9123456780",
      addressLine1: "742 Evergreen Terrace",
      city: "Springfield",
      state: "IL",
      postalCode: "62704",
      country: "USA",
    },
  },

  {
    id: "ORD-1003",
    orderDate: "2025-03-01",
    status: "Pending",
    paymentMethod: "COD",
    totalAmount: 349,
    items: [
      {
        productId: 5,
        name: "Cold Pressed Orange Juice",
        image: orange_juice,
        price: 349,
        quantity: 1,
      },
    ],
    deliveryAddress: {
      name: "Alex Morgan",
      phone: "+44 7700 900123",
      addressLine1: "10 Downing Street",
      city: "London",
      state: "Greater London",
      postalCode: "SW1A 2AA",
      country: "UK",
    },
  },
];

