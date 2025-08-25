import React from 'react';
import { Check, X, Star, Zap } from 'lucide-react';
import { Plan } from '../types';
import { useNotifications } from '../hooks/useNotifications';

interface PlanCardProps {
  plan: Plan;
  onSelectPlan: (plan: Plan) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelectPlan }) => {
  const { addNotification } = useNotifications();

  const handleSelectPlan = () => {
    addNotification({
      type: 'info',
      title: `${plan.name} seleccionado`,
      message: 'Te contactaremos pronto para completar tu suscripción.'
    });
    onSelectPlan(plan);
  };

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
      plan.isPopular ? 'border-blue-500 ring-4 ring-blue-100' : 'border-gray-200 hover:border-gray-300'
    }`}>
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
            <Star className="h-4 w-4 mr-1 fill-current" />
            Más Popular
          </div>
        </div>
      )}

      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${plan.color.secondary} mb-4`}>
            <Zap className={`h-8 w-8 ${plan.color.accent}`} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
          <p className="text-gray-600 mb-4">{plan.subtitle}</p>
          <p className="text-sm text-gray-500 leading-relaxed">{plan.description}</p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-8">
          <div className="flex items-baseline justify-center">
            <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
            <span className="text-xl text-gray-500 ml-2">/{plan.period}</span>
          </div>
          {plan.id === 'emprende' && (
            <p className="text-sm text-green-600 mt-2 font-medium">¡Precio de lanzamiento!</p>
          )}
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                {feature.included ? (
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                ) : (
                  <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                    <X className="h-3 w-3 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="ml-3 flex-1">
                <p className={`text-sm font-medium ${feature.included ? 'text-gray-900' : 'text-gray-400'}`}>
                  {feature.name}
                </p>
                {feature.description && (
                  <p className={`text-xs mt-1 ${feature.included ? 'text-gray-500' : 'text-gray-400'}`}>
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleSelectPlan}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
            plan.isPopular 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' 
              : plan.id === 'elite'
              ? plan.color.primary
              : `${plan.color.primary} hover:opacity-90`
          }`}
        >
          {plan.buttonText}
        </button>

        {plan.id === 'elite' && (
          <p className="text-center text-xs text-gray-500 mt-3">
            * Incluye consulta gratuita de 30 minutos
          </p>
        )}
      </div>
    </div>
  );
};

export default PlanCard;