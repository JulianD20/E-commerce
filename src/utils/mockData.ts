import { Product, Vendor, Category, Review } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electrónicos',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    productCount: 150
  },
  {
    id: '2',
    name: 'Moda',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    productCount: 280
  },
  {
    id: '3',
    name: 'Hogar y Jardín',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
    productCount: 95
  },
  {
    id: '4',
    name: 'Deportes',
    image: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg',
    productCount: 120
  },
  {
    id: '5',
    name: 'Belleza',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg',
    productCount: 75
  },
  {
    id: '6',
    name: 'Libros',
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
    description: 'Tu destino principal para electrónicos y gadgets de vanguardia.',
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
    description: 'Moda moderna para cada estilo y ocasión.',
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
    description: 'Transforma tu hogar con nuestros muebles y decoración premium.',
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
    name: 'Audífonos Bluetooth Inalámbricos',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg'
    ],
    description: 'Audífonos inalámbricos premium con tecnología de cancelación de ruido.',
    specifications: {
      'Duración de Batería': '30 horas',
      'Conectividad': 'Bluetooth 5.0',
      'Peso': '250g',
      'Garantía': '2 años'
    },
    category: 'Electrónicos',
    vendorId: '1',
    rating: 4.5,
    reviewCount: 120,
    inStock: true,
    colors: ['Negro', 'Blanco', 'Plateado'],
    tags: ['inalámbrico', 'bluetooth', 'cancelación-ruido']
  },
  {
    id: '2',
    name: 'Camiseta de Algodón de Diseñador',
    price: 24.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg'
    ],
    description: 'Camiseta cómoda 100% algodón con diseño moderno.',
    specifications: {
      'Material': '100% Algodón',
      'Ajuste': 'Regular',
      'Cuidado': 'Lavar a máquina en frío'
    },
    category: 'Moda',
    vendorId: '2',
    rating: 4.3,
    reviewCount: 89,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blanco', 'Negro', 'Azul Marino', 'Gris'],
    tags: ['algodón', 'casual', 'cómodo']
  },
  {
    id: '3',
    name: 'Lámpara de Piso Moderna',
    price: 159.99,
    image: 'https://images.pexels.com/photos/1367274/pexels-photo-1367274.jpeg',
    images: [
      'https://images.pexels.com/photos/1367274/pexels-photo-1367274.jpeg'
    ],
    description: 'Lámpara de piso elegante perfecta para espacios de vida modernos.',
    specifications: {
      'Altura': '150cm',
      'Tipo de Bombilla': 'Compatible con LED',
      'Material': 'Metal y Tela',
      'Tipo de Interruptor': 'Táctil'
    },
    category: 'Hogar y Jardín',
    vendorId: '3',
    rating: 4.7,
    reviewCount: 45,
    inStock: true,
    colors: ['Negro', 'Blanco', 'Bronce'],
    tags: ['iluminación', 'moderno', 'lámpara-piso']
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userName: 'María González',
    rating: 5,
    comment: '¡Calidad de sonido increíble y la duración de la batería supera las expectativas!',
    date: '2024-01-15',
    helpful: 12
  },
  {
    id: '2',
    productId: '1',
    userName: 'Carlos Rodríguez',
    rating: 4,
    comment: 'Excelentes audífonos, muy cómodos para sesiones largas de escucha.',
    date: '2024-01-10',
    helpful: 8
  },
  {
    id: '3',
    productId: '2',
    userName: 'Ana Martínez',
    rating: 4,
    comment: 'Tela suave y excelente ajuste. Fiel al tamaño.',
    date: '2024-01-12',
    helpful: 5
  }
];