import { Star } from 'lucide-react';

const Rating = ({ value, text }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            value >= star
              ? 'fill-yellow-400 text-yellow-400'
              : value >= star - 0.5
              ? 'fill-yellow-200 text-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
      {text && <span className="ml-1 text-sm text-gray-500">{text}</span>}
    </div>
  );
};

export default Rating;
