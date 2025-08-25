import React, { useState } from 'react';
import { X, CreditCard, MapPin, Lock, Truck } from 'lucide-react';
import { CartItem, Address, PaymentInfo } from '../types';
import { useOrders } from '../hooks/useOrders';
import { useNotifications } from '../hooks/useNotifications';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onOrderComplete: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  total, 
  onOrderComplete 
}) => {
  const { createOrder } = useOrders();
  const { addNotification } = useNotifications();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any>(null);

  const [shippingAddress, setShippingAddress] = useState<Address>({
    fullName: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: ''
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  if (!isOpen) return null;

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const order = await createOrder(items, shippingAddress, paymentInfo);
      setCompletedOrder(order);
      setCurrentStep(3);
      onOrderComplete();
      
      addNotification({
        type: 'success',
        title: 'Order Placed Successfully!',
        message: `Your order ${order.orderNumber} has been confirmed.`
      });
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Payment Failed',
        message: 'There was an error processing your payment. Please try again.'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setCompletedOrder(null);
    onClose();
  };

  const renderStep1 = () => (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <MapPin className="h-5 w-5 mr-2" />
        Shipping Address
      </h3>
      <form onSubmit={handleAddressSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={shippingAddress.fullName}
            onChange={(e) => setShippingAddress(prev => ({ ...prev, fullName: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={shippingAddress.phone}
            onChange={(e) => setShippingAddress(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Street Address"
          value={shippingAddress.street}
          onChange={(e) => setShippingAddress(prev => ({ ...prev, street: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="City"
            value={shippingAddress.city}
            onChange={(e) => setShippingAddress(prev => ({ ...prev, city: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="State"
            value={shippingAddress.state}
            onChange={(e) => setShippingAddress(prev => ({ ...prev, state: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="ZIP Code"
            value={shippingAddress.zipCode}
            onChange={(e) => setShippingAddress(prev => ({ ...prev, zipCode: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );

  const renderStep2 = () => (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <CreditCard className="h-5 w-5 mr-2" />
        Payment Information
      </h3>
      <form onSubmit={handlePaymentSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Cardholder Name"
          value={paymentInfo.cardholderName}
          onChange={(e) => setPaymentInfo(prev => ({ ...prev, cardholderName: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Card Number (1234 5678 9012 3456)"
          value={paymentInfo.cardNumber}
          onChange={(e) => setPaymentInfo(prev => ({ ...prev, cardNumber: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="MM/YY"
            value={paymentInfo.expiryDate}
            onChange={(e) => setPaymentInfo(prev => ({ ...prev, expiryDate: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="CVV"
            value={paymentInfo.cvv}
            onChange={(e) => setPaymentInfo(prev => ({ ...prev, cvv: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Order Summary</h4>
          <div className="space-y-1 text-sm">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-2 font-semibold flex justify-between">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isProcessing}
            className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 flex items-center justify-center"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              <>
                <Lock className="h-4 w-4 mr-2" />
                Complete Order
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );

  const renderStep3 = () => (
    <div className="text-center">
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h3>
      <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been successfully placed.</p>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 className="font-semibold mb-4">Order Details</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Order Number:</span>
            <span className="font-mono font-semibold">{completedOrder?.orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Amount:</span>
            <span className="font-semibold">${completedOrder?.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tracking Number:</span>
            <span className="font-mono">{completedOrder?.trackingNumber}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Delivery:</span>
            <span>3-5 business days</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-sm text-gray-600 mb-6">
        <Truck className="h-4 w-4 mr-2" />
        <span>You will receive a confirmation email shortly</span>
      </div>

      <button
        onClick={handleClose}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleClose} />
        
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;