import { Package, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-600 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 text-2xl font-black text-gray-900 hover:opacity-80 transition-opacity">
            <Package className="w-8 h-8 text-black" />
            <span>CommerceHub</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Discover a curated collection of premium products. From the latest electronics to stylish fashion, we bring the best directly to your doorstep with speed and care.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h4 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider">About</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/contact" className="hover:text-black hover:underline underline-offset-4 transition-all">Contact Us</Link></li>
            <li><Link to="/about" className="hover:text-black hover:underline underline-offset-4 transition-all">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-black hover:underline underline-offset-4 transition-all">Careers</Link></li>
            <li><Link to="/corporate" className="hover:text-black hover:underline underline-offset-4 transition-all">Corporate Information</Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider">Help</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/payments" className="hover:text-black hover:underline underline-offset-4 transition-all">Payments</Link></li>
            <li><Link to="/shipping" className="hover:text-black hover:underline underline-offset-4 transition-all">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-black hover:underline underline-offset-4 transition-all">Cancellation & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-black hover:underline underline-offset-4 transition-all">FAQ</Link></li>
          </ul>
        </div>

        {/* Policies Section */}
        <div>
          <h4 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider">Policies</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/return-policy" className="hover:text-black hover:underline underline-offset-4 transition-all">Return Policy</Link></li>
            <li><Link to="/terms" className="hover:text-black hover:underline underline-offset-4 transition-all">Terms of Use</Link></li>
            <li><Link to="/security" className="hover:text-black hover:underline underline-offset-4 transition-all">Security</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-black hover:underline underline-offset-4 transition-all">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© {currentYear} CommerceHub. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="normal-case tracking-normal">support@commercehub.com</span>
            </div>
            <p className="font-medium">Developed by AGRAHARAM NAVEEN KUMAR</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

