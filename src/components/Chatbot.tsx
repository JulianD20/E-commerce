import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: Record<string, string> = {
    'hola': '¡Hola! ¿Cómo puedo ayudarte hoy?',
    'planes': 'Tenemos 4 planes disponibles: Emprende ($29/mes), Crece ($79/mes), Pro ($149/mes) y Elite ($299/mes). ¿Te gustaría conocer más detalles sobre alguno?',
    'precios': 'Nuestros precios van desde $29/mes para el Plan Emprende hasta $299/mes para el Plan Elite. Todos incluyen diferentes características según tus necesidades.',
    'soporte': 'Ofrecemos soporte 24/7 en nuestros planes Crece, Pro y Elite. El Plan Emprende incluye soporte básico por email.',
    'pago': 'Aceptamos todas las tarjetas de crédito principales, PayPal y transferencias bancarias. Todos los pagos son seguros y encriptados.',
    'envío': 'Ofrecemos envío gratuito en pedidos superiores a $50. Los tiempos de entrega varían entre 3-7 días hábiles según tu ubicación.',
    'devoluciones': 'Tienes 30 días para devolver cualquier producto. Las devoluciones son gratuitas y el reembolso se procesa en 5-7 días hábiles.',
    'cuenta': 'Puedes crear una cuenta gratuita haciendo clic en "Iniciar Sesión" en la parte superior de la página.',
    'productos': 'Tenemos miles de productos de vendedores verificados en categorías como Electrónicos, Moda, Hogar, Deportes y más.',
    'vendedores': 'Trabajamos solo con vendedores verificados que cumplen nuestros estándares de calidad y servicio al cliente.',
    'gracias': '¡De nada! ¿Hay algo más en lo que pueda ayudarte?',
    'adiós': '¡Hasta luego! Si necesitas ayuda, estaré aquí. ¡Que tengas un excelente día!'
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }

    // Respuestas por categorías
    if (message.includes('precio') || message.includes('costo') || message.includes('cuánto')) {
      return 'Nuestros precios son muy competitivos. El Plan Emprende comienza en $29/mes. ¿Te gustaría ver todos nuestros planes?';
    }
    
    if (message.includes('ayuda') || message.includes('problema')) {
      return 'Estoy aquí para ayudarte. Puedes preguntarme sobre planes, precios, productos, envíos, devoluciones o cualquier otra duda.';
    }

    if (message.includes('contacto') || message.includes('teléfono') || message.includes('email')) {
      return 'Puedes contactarnos por email a soporte@marketplace.com o por teléfono al +1 (555) 123-4567. También estoy aquí para ayudarte 24/7.';
    }

    // Respuesta por defecto
    return 'Gracias por tu mensaje. Un agente especializado te contactará pronto. Mientras tanto, puedes preguntarme sobre planes, precios, productos o cualquier otra duda.';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular tiempo de respuesta del bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    '¿Cuáles son sus planes?',
    '¿Cómo puedo hacer un pedido?',
    '¿Cuánto cuesta el envío?',
    '¿Cómo contacto a un vendedor?'
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 p-2 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Asistente Virtual</h3>
                <p className="text-xs text-blue-100">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700 p-1 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                }`}>
                  <div className={`p-2 rounded-full ${
                    message.isBot ? 'bg-gray-100' : 'bg-blue-600'
                  }`}>
                    {message.isBot ? (
                      <Bot className="h-4 w-4 text-gray-600" />
                    ) : (
                      <User className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.isBot 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isBot ? 'text-gray-500' : 'text-blue-100'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Bot className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Preguntas frecuentes:</p>
              <div className="space-y-1">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputMessage(question)}
                    className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded border transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;