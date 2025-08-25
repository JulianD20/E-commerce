import { useState, useEffect } from 'react';
import { Order, CartItem, Address, PaymentInfo } from '../types';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const createOrder = async (
    items: CartItem[],
    shippingAddress: Address,
    paymentInfo: PaymentInfo
  ): Promise<Order> => {
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const orderNumber = `ORD-${Date.now()}`;
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const newOrder: Order = {
      id: Date.now().toString(),
      orderNumber,
      date: new Date().toISOString(),
      status: 'pending',
      items,
      total,
      shippingAddress,
      paymentMethod: `**** **** **** ${paymentInfo.cardNumber.slice(-4)}`,
      trackingNumber: `TRK${Date.now().toString().slice(-8)}`
    };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    return newOrder;
  };

  const getOrderById = (id: string): Order | undefined => {
    return orders.find(order => order.id === id);
  };

  return {
    orders,
    createOrder,
    getOrderById
  };
};