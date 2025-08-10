import React, { useState } from 'react';
import { Search, Filter, ArrowLeft } from 'lucide-react';
import { products, vendors, categories } from '../utils/mockData';
import { Product, Vendor, Category } from '../types';
import ProductCard from '../components/ProductCard';
import VendorCard from '../components/VendorCard';
import CategoryCard from '../components/CategoryCard';

interface SearchResultsProps {
  searchQuery: string;
  onBack: () => void;
  onProductClick: (product: Product) => void;
  onVendorClick: (vendor: Vendor) => void;
  onCategoryClick: (category: Category) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  searchQuery,
  onBack,
  onProductClick,
  onVendorClick,
  onCategoryClick
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'products' | 'vendors' | 'categories'>('all');
  const [sortBy, setSortBy] = useState('relevance');

  // Search logic
  const searchProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const searchVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vendor.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const searchCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort products
  const sortedProducts = [...searchProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const totalResults = searchProducts.length + searchVendors.length + searchCategories.length;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'products':
        return (
          <div>
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onProductClick={onProductClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try different search terms or browse our categories.</p>
              </div>
            )}
          </div>
        );

      case 'vendors':
        return (
          <div>
            {searchVendors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchVendors.map((vendor) => (
                  <VendorCard
                    key={vendor.id}
                    vendor={vendor}
                    onVendorClick={onVendorClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No vendors found</h3>
                <p className="text-gray-500">Try different search terms or browse all vendors.</p>
              </div>
            )}
          </div>
        );

      case 'categories':
        return (
          <div>
            {searchCategories.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchCategories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    onCategoryClick={onCategoryClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No categories found</h3>
                <p className="text-gray-500">Try different search terms or browse all categories.</p>
              </div>
            )}
          </div>
        );

      default: // 'all'
        return (
          <div className="space-y-12">
            {/* Products Section */}
            {searchProducts.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Products ({searchProducts.length})</h2>
                  <button
                    onClick={() => setActiveTab('products')}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View All Products
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {sortedProducts.slice(0, 4).map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onProductClick={onProductClick}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Vendors Section */}
            {searchVendors.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Vendors ({searchVendors.length})</h2>
                  <button
                    onClick={() => setActiveTab('vendors')}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View All Vendors
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchVendors.slice(0, 3).map((vendor) => (
                    <VendorCard
                      key={vendor.id}
                      vendor={vendor}
                      onVendorClick={onVendorClick}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Categories Section */}
            {searchCategories.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Categories ({searchCategories.length})</h2>
                  <button
                    onClick={() => setActiveTab('categories')}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View All Categories
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchCategories.map((category) => (
                    <CategoryCard
                      key={category.id}
                      category={category}
                      onCategoryClick={onCategoryClick}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {totalResults === 0 && (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500 mb-4">
                  We couldn't find anything matching "{searchQuery}". Try different search terms.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Suggestions:</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Check your spelling</li>
                    <li>• Try more general terms</li>
                    <li>• Browse our categories instead</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Results for "{searchQuery}"
          </h1>
          <p className="text-gray-600">
            Found {totalResults} result{totalResults !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {[
              { key: 'all', label: 'All', count: totalResults },
              { key: 'products', label: 'Products', count: searchProducts.length },
              { key: 'vendors', label: 'Vendors', count: searchVendors.length },
              { key: 'categories', label: 'Categories', count: searchCategories.length }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </nav>
        </div>

        {/* Sort Controls */}
        {activeTab === 'products' && searchProducts.length > 0 && (
          <div className="flex justify-end mb-6">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="relevance">Sort by: Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        )}

        {/* Results */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default SearchResults;