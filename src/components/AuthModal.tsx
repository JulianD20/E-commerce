import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useNotifications } from '../hooks/useNotifications';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { login, register, isLoading } = useAuth();
  const { addNotification } = useNotifications();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let success = false;
      
      if (isLogin) {
        success = await login(formData.email, formData.password);
        if (success) {
          addNotification({
            type: 'success',
            title: 'Welcome back!',
            message: 'You have successfully signed in.'
          });
        } else {
          addNotification({
            type: 'error',
            title: 'Login failed',
            message: 'Invalid email or password. Please try again.'
          });
        }
      } else {
        if (formData.password !== formData.confirmPassword) {
          addNotification({
            type: 'error',
            title: 'Password mismatch',
            message: 'Passwords do not match. Please try again.'
          });
          return;
        }
        
        success = await register(formData.name, formData.email, formData.password);
        if (success) {
          addNotification({
            type: 'success',
            title: 'Account created!',
            message: 'Your account has been successfully created.'
          });
        } else {
          addNotification({
            type: 'error',
            title: 'Registration failed',
            message: 'Please check your information and try again.'
          });
        }
      }
      
      if (success) {
        onClose();
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      }
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Something went wrong',
        message: 'Please try again later.'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {isLogin ? 'Sign In' : 'Create Account'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {isLogin ? 'Signing In...' : 'Creating Account...'}
                </>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-blue-600 hover:text-blue-700 font-medium"
              >
                {isLogin ? 'Create one' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Google
              </button>
              <button className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;