import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Vendors from './pages/Vendors';
import Categories from './pages/Categories';
import SearchResults from './pages/SearchResults';
import ProductDetails from './pages/ProductDetails';
import VendorProfile from './pages/VendorProfile';
import { useCart } from './hooks/useCart';
import { Product, Vendor, Category } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isOpen: isCartOpen, setIsOpen: setIsCartOpen } = useCart();

  const handleNavigate = (page: string) => {
    if (page.startsWith('search:')) {
      const query = page.replace('search:', '');
      setSearchQuery(query);
      setCurrentPage('search');
    } else {
      setCurrentPage(page);
    }
    setSelectedProduct(null);
    setSelectedVendor(null);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-details');
  };

  const handleVendorClick = (vendor: Vendor) => {
    setSelectedVendor(vendor);
    setCurrentPage('vendor-profile');
  };

  const handleCategoryClick = (category: Category) => {
    // For now, navigate to home. In a real app, this would show category products
    setCurrentPage('categories');
  };

  const handleBack = () => {
    setSelectedProduct(null);
    setSelectedVendor(null);
    setSearchQuery('');
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    if (selectedProduct) {
      return (
        <ProductDetails
          product={selectedProduct}
          onBack={handleBack}
        />
      );
    }

    if (selectedVendor) {
      return (
        <VendorProfile
          vendor={selectedVendor}
          onBack={handleBack}
          onProductClick={handleProductClick}
        />
      );
    }

    if (currentPage === 'search' && searchQuery) {
      return (
        <SearchResults
          searchQuery={searchQuery}
          onBack={handleBack}
          onProductClick={handleProductClick}
          onVendorClick={handleVendorClick}
          onCategoryClick={handleCategoryClick}
        />
      );
    }

    switch (currentPage) {
      case 'shop':
        return (
          <Shop
            onProductClick={handleProductClick}
          />
        );
      case 'vendors':
        return (
          <Vendors
            onVendorClick={handleVendorClick}
          />
        );
      case 'categories':
        return (
          <Categories
            onCategoryClick={handleCategoryClick}
            onProductClick={handleProductClick}
          />
        );
      case 'home':
      default:
        return (
          <Home
            onCategoryClick={handleCategoryClick}
            onVendorClick={handleVendorClick}
            onProductClick={handleProductClick}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onAuthClick={() => setIsAuthModalOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      
      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}

export default App;