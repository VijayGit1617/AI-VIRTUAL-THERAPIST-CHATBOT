import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Home, Info, MessageSquare, User, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-black border-b border-pink-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-pink-500" />
              <span className="text-xl font-bold text-pink-500">AI Therapist</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/home" className="text-white hover:text-pink-500">
              <Home className="h-5 w-5" />
            </Link>
            <Link to="/about" className="text-white hover:text-pink-500">
              <Info className="h-5 w-5" />
            </Link>
            <Link to="/chatbot" className="text-white hover:text-pink-500">
              <MessageSquare className="h-5 w-5" />
            </Link>
            <Link to="/contact" className="text-white hover:text-pink-500">
              <Phone className="h-5 w-5" />
            </Link>
            {user ? (
              <Link to="/profile" className="text-white hover:text-pink-500">
                <User className="h-5 w-5" />
              </Link>
            ) : (
              <Link to="/login" className="btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;