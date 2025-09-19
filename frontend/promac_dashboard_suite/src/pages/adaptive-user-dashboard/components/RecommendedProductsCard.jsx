import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecommendedProductsCard = ({ products, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-premium p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recommended for You</h2>
        <Icon name="Sparkles" size={20} className="text-primary" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products?.slice(0, 4)?.map((product) => (
          <div
            key={product?.id}
            className="group border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:shadow-md transition-all duration-200 precision-hover"
          >
            <div className="aspect-square w-full mb-4 bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                {product?.name}
              </h3>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Brand:</span>
                <span className="text-sm font-medium text-gray-700">{product?.brand}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-primary">
                    ₹{product?.price?.toLocaleString('en-IN')}
                  </span>
                  {product?.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product?.originalPrice?.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                {product?.discount && (
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {product?.discount}% OFF
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                  <span className="font-medium">{product?.rating}</span>
                </div>
                <span className="text-gray-500">({product?.reviews} reviews)</span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className={`flex items-center space-x-1 text-xs ${
                  product?.inStock ? 'text-green-600' : 'text-red-600'
                }`}>
                  <Icon 
                    name={product?.inStock ? "CheckCircle" : "XCircle"} 
                    size={12} 
                  />
                  <span>{product?.inStock ? 'In Stock' : 'Out of Stock'}</span>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ShoppingCart"
                  iconPosition="left"
                  disabled={!product?.inStock}
                  onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <Button
          variant="outline"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          asChild
        >
          <Link to="/smart-cart-management-hub">
            Browse All Products
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default RecommendedProductsCard;