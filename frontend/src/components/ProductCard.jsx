import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShoppingCart, Eye } from 'lucide-react';
import { addToCart } from '../store/slices/cartSlice';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty: 1 }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group border border-gray-100 flex flex-col h-full">
      <Link to={`/product/${product._id}`} className="relative block overflow-hidden aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            <Eye className="w-5 h-5" />
          </div>
        </div>
        {product.countInStock === 0 && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Out of Stock
          </div>
        )}
      </Link>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">
          <Rating value={product.rating} text={`(${product.numReviews})`} />
        </div>
        
        <Link to={`/product/${product._id}`} className="flex-1">
          <h3 className="font-bold text-gray-900 hover:text-indigo-600 transition-colors line-clamp-2 text-lg mb-2 leading-tight">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-4 flex items-center justify-between gap-4">
          <span className="text-2xl font-black text-gray-900">₹{product.price.toLocaleString()}</span>
          <button
            onClick={addToCartHandler}
            disabled={product.countInStock === 0}
            className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-sm transition-all shadow-sm active:scale-95 ${
              product.countInStock === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200 hover:shadow-lg'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

