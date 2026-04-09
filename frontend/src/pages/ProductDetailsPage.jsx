import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import { useGetProductDetailsQuery, useCreateReviewMutation } from '../store/slices/productsApiSlice';
import { addToCart, setBuyNowItem } from '../store/slices/cartSlice';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import { toast } from '../utils/toast';
import { getCorrectImageUrl, handleImageError } from '../utils/imageUtils';

const ProductDetailsPage = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const { data: product, isLoading, error, refetch } = useGetProductDetailsQuery(productId);
  const [createReview, { isLoading: reviewLoading }] = useCreateReviewMutation();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

  const submitReviewHandler = async (e) => {
    e.preventDefault();
    try {
      await createReview({ productId, rating, comment }).unwrap();
      refetch();
      setRating(0);
      setComment('');
      toast.success('Review submitted!');
    } catch (err) {
      toast.error(err?.data?.message || 'Could not submit review');
    }
  };

  const buyNowHandler = () => {
    dispatch(setBuyNowItem({ ...product, qty }));
    navigate('/checkout');
  };

  if (isLoading) return <Loader />;
  if (error) return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <p className="text-red-500 text-xl">{error?.data?.message || 'Product not found'}</p>
      <Link to="/" className="mt-4 inline-block text-indigo-600 hover:underline">← Back to home</Link>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-8 transition-colors w-fit">
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src={getCorrectImageUrl(product.image)}
            alt={product.name}
            onError={handleImageError}
            className="w-full object-cover h-96"
          />
        </div>

        <div>
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mt-3 mb-2">{product.name}</h1>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          <p className="text-4xl font-extrabold text-indigo-600 mt-4 mb-4">₹{product.price}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

          <div className="bg-gray-50 rounded-xl p-5 space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Brand</span>
              <span className="font-medium">{product.brand}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Status</span>
              <span className={`font-medium ${product.countInStock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            {product.countInStock > 0 && (
              <div className="flex justify-between text-sm items-center">
                <span className="text-gray-500">Quantity</span>
                <select
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  {[...Array(Math.min(product.countInStock, 10)).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={addToCartHandler}
              disabled={product.countInStock === 0}
              className="flex-1 flex items-center justify-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed py-3 rounded-xl font-semibold transition-colors border border-indigo-200"
            >
              <ShoppingCart className="w-5 h-5" />
              {product.countInStock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
            <button
              onClick={buyNowHandler}
              disabled={product.countInStock === 0}
              className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
        {product.reviews.length === 0 && (
          <p className="text-gray-500">No reviews yet. Be the first!</p>
        )}
        <div className="space-y-4">
          {product.reviews.map((r) => (
            <div key={r._id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-800">{r.name}</span>
                <span className="text-xs text-gray-400">{r.createdAt?.substring(0, 10)}</span>
              </div>
              <Rating value={r.rating} />
              <p className="mt-2 text-gray-600 text-sm">{r.comment}</p>
            </div>
          ))}
        </div>

        {/* Write review */}
        {userInfo ? (
          <form onSubmit={submitReviewHandler} className="mt-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">Write a Review</h3>
            <div className="mb-4">
              <label className="text-sm text-gray-600 mb-1 block">Rating</label>
              <div className="flex gap-2">
                {[1,2,3,4,5].map((s) => (
                  <button key={s} type="button" onClick={() => setRating(s)}>
                    <Star className={`w-6 h-6 ${rating >= s ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600 mb-1 block">Comment</label>
              <textarea
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Share your experience..."
              />
            </div>
            <button
              type="submit"
              disabled={reviewLoading || rating === 0}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {reviewLoading ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        ) : (
          <p className="mt-6 text-gray-500">
            <Link to="/login" className="text-indigo-600 hover:underline">Sign in</Link> to write a review.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
