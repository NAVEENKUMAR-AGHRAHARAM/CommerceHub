import { useState, useRef, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { useGetProductsQuery } from '../store/slices/productsApiSlice';
import ProductCard from '../components/ProductCard';
import ProductSkeleton from '../components/ProductSkeleton';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const categoryParam = searchParams.get('category') || 'All';
  const pageParam = searchParams.get('page') || 1;

  const [searchInput, setSearchInput] = useState('');
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const categories = [
    { label: 'All', icon: '🛒', color: 'bg-gray-100 text-gray-800' },
    { label: 'Mobiles', icon: '📱', color: 'bg-blue-100 text-blue-600' },
    { label: 'Fashion', icon: '👗', color: 'bg-pink-100 text-pink-600' },
    { label: 'Beauty', icon: '💄', color: 'bg-purple-100 text-purple-600' },
    { label: 'Electronics', icon: '💻', color: 'bg-indigo-100 text-indigo-600' },
    { label: 'Toys', icon: '🧸', color: 'bg-orange-100 text-orange-600' },
    { label: 'Books', icon: '📚', color: 'bg-green-100 text-green-600' },
    { label: 'Furniture', icon: '🛋️', color: 'bg-amber-100 text-amber-600' },
  ];

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber: pageParam,
    category: activeCategory !== 'All' ? activeCategory : undefined,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/?keyword=${searchInput.trim()}`);
    } else {
      navigate('/');
    }
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      navigate('/');
    } else {
      navigate(`/?category=${cat}`);
    }
  };

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    setSearchInput(keyword);
  }, [keyword]);

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <div className="relative bg-[#0f172a] text-white py-24 lg:py-32 overflow-hidden shadow-2xl shadow-indigo-900/10">
        {/* Background Decorative Blurs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full animate-pulse delay-700" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-wider">New Season Arrival</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-[1.1]">
              Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Premium</span> <br />
              Products
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl mb-10 max-w-xl leading-relaxed">
              Shop the latest in tech, fashion, and home essentials. Experience premium quality with lightning-fast delivery.
            </p>
            
            <form onSubmit={handleSearch} className="relative max-w-lg group">
              <input
                type="text"
                placeholder="Search for items, brands, or categories..."
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-6 pr-16 text-white placeholder-white/40 focus:ring-4 focus:ring-indigo-500/20 focus:bg-white/20 transition-all outline-none backdrop-blur-sm"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit" className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-xl transition-all flex items-center justify-center shadow-lg group-hover:scale-105 active:scale-95">
                <Search className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-12 flex items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-400" />
                <span>Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-400" />
                <span>Best Prices</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pb-24 relative z-20">
        {/* Category Section */}
        <div className="bg-white rounded-[32px] shadow-2xl shadow-indigo-900/5 p-6 lg:p-8 mb-16 border border-gray-100">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-1">Shop by Category</h2>
              <p className="text-gray-500 text-xs">Explore our wide range of premium collections</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => handleCategoryClick(cat.label)}
                className={`flex flex-col items-center p-4 rounded-[24px] transition-all duration-300 group ${
                  activeCategory === cat.label
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 -translate-y-1'
                    : 'bg-white border border-gray-100 text-gray-600 hover:border-indigo-100 hover:bg-indigo-50/50 hover:-translate-y-1'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-3 transition-transform group-hover:scale-110 ${
                  activeCategory === cat.label ? 'bg-white/20' : cat.color
                }`}>
                  {cat.icon}
                </div>
                <span className="text-xs font-bold tracking-tight">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div>
          <div className="flex items-end justify-between mb-10 px-4">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-2">
                {keyword ? `Results for "${keyword}"` : activeCategory !== 'All' ? activeCategory : 'Featured Products'}
              </h2>
              <p className="text-gray-500 font-medium">Handpicked items for your premium lifestyle</p>
            </div>
            {keyword || activeCategory !== 'All' ? (
              <button
                onClick={() => navigate('/')}
                className="text-indigo-600 font-bold hover:underline py-2"
              >
                Clear all filters
              </button>
            ) : null}
          </div>

          {error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-3xl mb-6">
              {error?.data?.message || 'Failed to load products. Check your connection.'}
            </div>
          ) : null}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {isLoading
              ? Array(8).fill(0).map((_, i) => <ProductSkeleton key={i} />)
              : data?.products?.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
          </div>

          {!isLoading && data?.products?.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[40px] border border-dashed border-gray-200">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-500">Try adjusting your filters or search keywords.</p>
            </div>
          )}

          {/* Pagination */}
          {data && data.pages > 1 && (
            <div className="flex justify-center gap-3 mt-20">
              {Array.from({ length: data.pages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => navigate(`/?page=${p}${keyword ? `&keyword=${keyword}` : ''}${activeCategory !== 'All' ? `&category=${activeCategory}` : ''}`)}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all ${
                    Number(p) === Number(pageParam)
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-indigo-600 hover:text-indigo-600 shadow-sm'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;


