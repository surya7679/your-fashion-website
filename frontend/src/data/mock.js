// Mock data for Your Fashion - Clothing Store

export const shopInfo = {
  name: "A&S Fashion",
  tagline: "Style That Speaks, Fashion That Fits",
  location: "Bihar, India",
  phone: "+91 62642 73885",
  whatsapp: "916264273885",
  email: "contact@yourfashion.com",
  address: "Shop No. 12, Main Market, Patna, Bihar - 800001",
  openingHours: "Mon-Sat: 10:00 AM - 8:00 PM, Sun: 11:00 AM - 6:00 PM",
  experience: "10+ Years",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.2033334!2d85.1376!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzM4LjgiTiA4NcKwMDgnMTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
};

export const categories = [
  { id: "all", name: "All Products", icon: "LayoutGrid" },
  { id: "mens", name: "Men's Wear", icon: "User" },
  { id: "womens", name: "Women's Wear", icon: "Users" },
  { id: "kids", name: "Kids Wear", icon: "Baby" },
  { id: "accessories", name: "Accessories", icon: "Watch" }
];

export const products = [
  {
    id: 1,
    name: "Premium Cotton Shirt",
    category: "mens",
    price: "₹899",
    originalPrice: "₹1,499",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80",
    description: "Premium quality cotton shirt perfect for formal and casual occasions",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Designer Kurti",
    category: "womens",
    price: "₹1,299",
    originalPrice: "₹2,199",
    image: "https://images.unsplash.com/photo-1583391733981-5ead659a2c0f?w=500&q=80",
    description: "Elegant designer kurti with beautiful embroidery work",
    badge: "Trending"
  },
  {
    id: 3,
    name: "Denim Jeans",
    category: "mens",
    price: "₹1,499",
    originalPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80",
    description: "Comfortable stretchable denim jeans for everyday wear",
    badge: "New Arrival"
  },
  {
    id: 4,
    name: "Ethnic Saree",
    category: "womens",
    price: "₹2,499",
    originalPrice: "₹3,999",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80",
    description: "Beautiful ethnic saree perfect for special occasions",
    badge: "Premium"
  },
  {
    id: 5,
    name: "Kids T-Shirt Combo",
    category: "kids",
    price: "₹599",
    originalPrice: "₹999",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80",
    description: "Comfortable cotton t-shirt combo pack for kids",
    badge: "Combo Offer"
  },
  {
    id: 6,
    name: "Formal Blazer",
    category: "mens",
    price: "₹2,999",
    originalPrice: "₹4,999",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80",
    description: "Premium formal blazer for corporate and party wear",
    badge: "Premium"
  },
  {
    id: 7,
    name: "Designer Lehenga",
    category: "womens",
    price: "₹4,999",
    originalPrice: "₹7,999",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&q=80",
    description: "Stunning designer lehenga for weddings and celebrations",
    badge: "Wedding Special"
  },
  {
    id: 8,
    name: "Leather Wallet",
    category: "accessories",
    price: "₹499",
    originalPrice: "₹899",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
    description: "Genuine leather wallet with multiple card slots",
    badge: "Best Seller"
  },
  {
    id: 9,
    name: "Kids Ethnic Dress",
    category: "kids",
    price: "₹899",
    originalPrice: "₹1,499",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&q=80",
    description: "Adorable ethnic dress for kids special occasions",
    badge: "Festive Collection"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Patna, Bihar",
    rating: 5,
    comment: "Amazing collection! Found the perfect outfit for my sister's wedding. The quality is excellent and prices are very reasonable.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
  {
    id: 2,
    name: "Rahul Kumar",
    location: "Muzaffarpur, Bihar",
    rating: 5,
    comment: "Best clothing store in Bihar! Staff is very helpful and the variety is impressive. Highly recommended!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
  },
  {
    id: 3,
    name: "Anjali Singh",
    location: "Gaya, Bihar",
    rating: 5,
    comment: "I always shop from Your Fashion. Great quality clothes at affordable prices. Love their ethnic collection!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali"
  },
  {
    id: 4,
    name: "Vikash Verma",
    location: "Patna, Bihar",
    rating: 5,
    comment: "Excellent service and premium quality products. Got amazing formal wear for office. Will definitely come again!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikash"
  }
];

export const features = [
  {
    icon: "Shield",
    title: "Quality Assured",
    description: "100% authentic products with quality guarantee"
  },
  {
    icon: "Truck",
    title: "Fast Delivery",
    description: "Quick delivery across Bihar within 2-3 days"
  },
  {
    icon: "RefreshCw",
    title: "Easy Returns",
    description: "Hassle-free 7-day return and exchange policy"
  },
  {
    icon: "IndianRupee",
    title: "Best Prices",
    description: "Competitive prices with regular discounts"
  }
];

export const faqs = [
  {
    question: "What are your payment options?",
    answer: "We accept Cash, UPI, Credit/Debit Cards, and Net Banking. You can also pay on delivery for local orders."
  },
  {
    question: "Do you provide home delivery?",
    answer: "Yes, we provide home delivery across Bihar. Delivery charges may apply based on location."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 7-day return and exchange policy. Products should be unused with original tags intact."
  },
  {
    question: "Do you have tailoring services?",
    answer: "Yes, we provide free basic alterations for purchases above ₹1,000."
  },
  {
    question: "Can I order through WhatsApp?",
    answer: "Absolutely! You can browse products and place orders directly through WhatsApp for your convenience."
  }
];
