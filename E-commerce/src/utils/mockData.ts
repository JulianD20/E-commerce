import { Product, Vendor, Category, Review } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    productCount: 150
  },
  {
    id: '2',
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    productCount: 280
  },
  {
    id: '3',
    name: 'Home & Garden',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
    productCount: 95
  },
  {
    id: '4',
    name: 'Sports',
    image: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg',
    productCount: 120
  },
  {
    id: '5',
    name: 'Beauty',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg',
    productCount: 75
  },
  {
    id: '6',
    name: 'Books',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
    productCount: 200
  }
];

export const vendors: Vendor[] = [
  {
    id: '1',
    name: 'TechVibe',
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    banner: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
    description: 'Your premier destination for cutting-edge electronics and gadgets.',
    rating: 4.8,
    reviewCount: 1250,
    products: [],
    brandColors: {
      primary: '#3B82F6',
      secondary: '#1E40AF'
    }
  },
  {
    id: '2',
    name: 'StyleHub',
    logo: 'https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg',
    banner: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
    description: 'Trendy fashion for every style and occasion.',
    rating: 4.6,
    reviewCount: 890,
    products: [],
    brandColors: {
      primary: '#EC4899',
      secondary: '#BE185D'
    }
  },
  {
    id: '3',
    name: 'HomeCore',
    logo: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg',
    banner: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    description: 'Transform your home with our premium furniture and decor.',
    rating: 4.7,
    reviewCount: 650,
    products: [],
    brandColors: {
      primary: '#059669',
      secondary: '#047857'
    }
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg'
    ],
    description: 'Premium wireless headphones with noise cancellation technology.',
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '250g',
      'Warranty': '2 years'
    },
    category: 'Electronics',
    vendorId: '1',
    rating: 4.5,
    reviewCount: 120,
    inStock: true,
    colors: ['Black', 'White', 'Silver'],
    tags: ['wireless', 'bluetooth', 'noise-cancelling']
  },
  {
    id: '2',
    name: 'Designer Cotton T-Shirt',
    price: 24.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg'
    ],
    description: 'Comfortable 100% cotton t-shirt with modern design.',
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Regular',
      'Care': 'Machine wash cold'
    },
    category: 'Fashion',
    vendorId: '2',
    rating: 4.3,
    reviewCount: 89,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    tags: ['cotton', 'casual', 'comfortable']
  },
  {
    id: '3',
    name: 'Modern Floor Lamp',
    price: 159.99,
    image: 'https://images.pexels.com/photos/1367274/pexels-photo-1367274.jpeg',
    images: [
      'https://images.pexels.com/photos/1367274/pexels-photo-1367274.jpeg'
    ],
    description: 'Elegant floor lamp perfect for modern living spaces.',
    specifications: {
      'Height': '150cm',
      'Bulb Type': 'LED Compatible',
      'Material': 'Metal & Fabric',
      'Switch Type': 'Touch'
    },
    category: 'Home & Garden',
    vendorId: '3',
    rating: 4.7,
    reviewCount: 45,
    inStock: true,
    colors: ['Black', 'White', 'Bronze'],
    tags: ['lighting', 'modern', 'floor-lamp']
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userName: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing sound quality and battery life exceeds expectations!',
    date: '2024-01-15',
    helpful: 12
  },
  {
    id: '2',
    productId: '1',
    userName: 'Mike Chen',
    rating: 4,
    comment: 'Great headphones, very comfortable for long listening sessions.',
    date: '2024-01-10',
    helpful: 8
  },
  {
    id: '3',
    productId: '2',
    userName: 'Emma Davis',
    rating: 4,
    comment: 'Soft fabric and great fit. True to size.',
    date: '2024-01-12',
    helpful: 5
  }
];