import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, User, Package, LogOut, Settings, ChevronDown, Search, Home, LayoutGrid, X } from 'lucide-react';
import { useLogoutMutation } from '../store/slices/usersApiSlice';
import { logout } from '../store/slices/authSlice';
import { useGetProductsQuery } from '../store/slices/productsApiSlice';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const urlKeyword = searchParams.get('keyword') || '';

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(urlKeyword);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [logoutApiCall] = useLogoutMutation();
  const categoryRef = useRef(null);
  const profileRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Fetch suggestions
  const { data: suggestionData } = useGetProductsQuery({
    keyword: searchInput,
    pageSize: 5
  }, { skip: searchInput.length < 2 });

  useEffect(() => {
    setSearchInput(urlKeyword);
  }, [urlKeyword]);

  const categories = [
    { label: 'Mobiles', path: '/?category=Mobiles' },
    { label: 'Fashion', path: '/?category=Fashion' },
    { label: 'Beauty', path: '/?category=Beauty' },
    { label: 'Electronics', path: '/?category=Electronics' },
    { label: 'Toys', path: '/?category=Toys' },
    { label: 'Books', path: '/?category=Books' },
    { label: 'Furniture', path: '/?category=Furniture' },
  ];

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    if (searchInput.trim()) {
      navigate(`/?keyword=${searchInput.trim()}`);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) setCategoryOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setDropdownOpen(false);
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) setShowSuggestions(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalItems = cartItems?.filter(i => i !== null).reduce((a, c) => a + c.qty, 0) || 0;

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-black text-indigo-600 hover:opacity-80 transition-opacity flex-shrink-0">
          <Package className="w-8 h-8" />
          <span className="hidden sm:block">CommerceHub</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative hidden md:block" ref={searchContainerRef}>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onFocus={() => setShowSuggestions(true)}
              onChange={(e) => {
                setSearchInput(e.target.value);
                setShowSuggestions(true);
              }}
              className="w-full bg-gray-50 border border-transparent rounded-full py-2 pl-10 pr-10 text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-indigo-500 transition-all outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            {searchInput && (
              <button 
                type="button"
                onClick={() => { setSearchInput(''); navigate('/'); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>

          {/* Search Suggestions */}
          {showSuggestions && suggestionData?.products?.length > 0 && (
            <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="p-2 border-b border-gray-50 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-400 px-4">
                <span>Suggestions</span>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {suggestionData.products.map((product) => (
                  <Link
                    key={product._id}
                    to={`/product/${product._id}`}
                    onClick={() => setShowSuggestions(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-800 truncate">{product.name}</p>
                      <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider">{product.category}</p>
                    </div>
                    <div className="text-sm font-black text-gray-900">₹{product.price}</div>
                  </Link>
                ))}
              </div>
              <button
                onClick={handleSearch}
                className="w-full p-3 bg-gray-50 text-indigo-600 text-xs font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all text-center"
              >
                See all results for "{searchInput}"
              </button>
            </div>
          )}
        </div>

        {/* Navigation Actions */}
        <nav className="flex items-center gap-1 sm:gap-4">
          <Link to="/" className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-full transition-all hidden lg:flex items-center gap-1">
            <Home className="w-5 h-5" />
            <span className="text-sm font-medium">Home</span>
          </Link>

          {/* Categories Dropdown */}
          <div className="relative" ref={categoryRef}>
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-full transition-all flex items-center gap-1"
            >
              <LayoutGrid className="w-5 h-5" />
              <span className="text-sm font-medium hidden lg:block">Categories</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${categoryOpen ? 'rotate-180' : ''}`} />
            </button>
            {categoryOpen && (
              <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-2xl shadow-xl border border-gray-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {categories.map((cat) => (
                  <Link
                    key={cat.label}
                    to={cat.path}
                    onClick={() => setCategoryOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/cart" className="relative p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-full transition-all">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>

          {userInfo ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 p-1 pl-2 border border-gray-200 rounded-full hover:shadow-md transition-all ml-1 bg-white"
              >
                <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                  {userInfo.name.charAt(0).toUpperCase()}
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 mr-1" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 border-b border-gray-50 mb-1">
                    <p className="text-sm font-bold text-gray-800">{userInfo.name}</p>
                    <p className="text-xs text-gray-500 truncate">{userInfo.email}</p>
                  </div>
                  <Link
                    to="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Settings className="w-4 h-4" /> Account Settings
                  </Link>
                  {userInfo.isAdmin && (
                    <Link
                      to="/admin"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Package className="w-4 h-4" /> Admin Dashboard
                    </Link>
                  )}
                  <hr className="my-1 border-gray-50" />
                  <button
                    onClick={() => { logoutHandler(); setDropdownOpen(false); }}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left font-medium"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all ml-2">
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

