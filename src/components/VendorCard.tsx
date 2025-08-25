import React from 'react';
import { Star, MapPin, Package } from 'lucide-react';
import { Vendor } from '../types';

interface VendorCardProps {
  vendor: Vendor;
  onVendorClick: (vendor: Vendor) => void;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor, onVendorClick }) => {
  return (
    <div
      onClick={() => onVendorClick(vendor)}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      <div className="relative h-32 overflow-hidden">
        <img
          src={vendor.banner}
          alt={`${vendor.name} banner`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-3">
          <img
            src={vendor.logo}
            alt={`${vendor.name} logo`}
            className="w-12 h-12 rounded-lg object-cover border-2 border-white shadow-sm -mt-8 relative z-10"
          />
          <div className="ml-3">
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {vendor.name}
            </h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{vendor.rating}</span>
              <span className="text-sm text-gray-400 ml-1">({vendor.reviewCount})</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {vendor.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Package className="h-4 w-4 mr-1" />
            <span>{vendor.products.length} Products</span>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
            Visit Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;