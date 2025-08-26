import React from 'react';
import { ArrowRight, TrendingUp, Shield, Truck, Headphones } from 'lucide-react';
import { categories, vendors, products } from '../utils/mockData';
import { Category, Vendor, Product } from '../types';
import CategoryCard from '../components/CategoryCard';
import VendorCard from '../components/VendorCard';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  onCategoryClick: (category: Category) => void;
  onVendorClick: (vendor: Vendor) => void;
  onProductClick: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onCategoryClick, onVendorClick, onProductClick }) => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Descubre Productos Increíbles de
                <span className="text-blue-200"> Vendedores Confiables</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Compra de miles de vendedores verificados en todo el mundo. Encuentra productos de calidad, precios competitivos 
                y un servicio excepcional en un solo lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('shop')}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  Comenzar a Comprar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => onNavigate('pricing')}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Ver Planes
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
                alt="Shopping"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Compras Seguras', desc: 'Protegido por seguridad líder en la industria' },
              { icon: Truck, title: 'Entrega Rápida', desc: 'Envío rápido de vendedores verificados' },
              { icon: Headphones, title: 'Soporte 24/7', desc: 'Siempre aquí para ayudarte a comprar' },
              { icon: TrendingUp, title: 'Mejores Precios', desc: 'Precios competitivos garantizados' }
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprar por Categoría</h2>
            <p className="text-lg text-gray-600">Descubre productos en todas las categorías principales</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onCategoryClick={onCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
            <p className="text-lg text-gray-600">Productos seleccionados de nuestros mejores vendedores</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={onProductClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vendors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vendedores Destacados</h2>
            <p className="text-lg text-gray-600">Descubre tiendas increíbles de vendedores confiables</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                onVendorClick={onVendorClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Mantente Actualizado</h2>
          <p className="text-xl text-blue-100 mb-8">
            Recibe las últimas ofertas y productos directamente en tu bandeja de entrada
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Ingresa tu email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
            />
            <button 
              onClick={() => alert('Suscripción al boletín - ¡Próximamente!')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;