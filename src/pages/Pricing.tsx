import React, { useState } from 'react';
import { Check, X, ArrowRight, Users, TrendingUp, Shield, Headphones, Star } from 'lucide-react';
import { plans } from '../utils/plansData';
import { Plan } from '../types';
import PlanCard from '../components/PlanCard';

interface PricingProps {
  onBack?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBack }) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    // Aquí podrías redirigir a una página de checkout o abrir un modal
  };

  const benefits = [
    {
      icon: Shield,
      title: 'Garantía de 30 días',
      description: 'Si no estás satisfecho, te devolvemos tu dinero'
    },
    {
      icon: Headphones,
      title: 'Soporte 24/7',
      description: 'Nuestro equipo está disponible cuando lo necesites'
    },
    {
      icon: TrendingUp,
      title: 'Escalabilidad garantizada',
      description: 'Crece sin límites con nuestra infraestructura'
    },
    {
      icon: Users,
      title: 'Comunidad activa',
      description: 'Únete a miles de emprendedores exitosos'
    }
  ];

  const faqs = [
    {
      question: '¿Puedo cambiar de plan en cualquier momento?',
      answer: 'Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se reflejan inmediatamente.'
    },
    {
      question: '¿Hay costos ocultos?',
      answer: 'No, todos nuestros precios son transparentes. Solo pagas lo que ves en cada plan.'
    },
    {
      question: '¿Ofrecen descuentos para ONGs?',
      answer: 'Sí, ofrecemos descuentos especiales para organizaciones sin fines de lucro. Contáctanos para más información.'
    },
    {
      question: '¿Qué incluye el soporte técnico?',
      answer: 'Incluye asistencia por chat, email y teléfono, resolución de problemas técnicos y guías de implementación.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Planes diseñados para hacer
            <span className="text-blue-200"> crecer tu negocio</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Elige el plan perfecto para tu empresa. Desde emprendedores hasta grandes corporaciones, 
            tenemos la solución ideal para impulsar tus ventas online.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 mb-8">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Anual
              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-400 mr-2" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-400 mr-2" />
              <span>Cancela cuando quieras</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-400 mr-2" />
              <span>Soporte incluido</span>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={{
                  ...plan,
                  price: billingPeriod === 'yearly' ? Math.round(plan.price * 0.8) : plan.price
                }}
                onSelectPlan={handleSelectPlan}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comparación detallada de planes
            </h2>
            <p className="text-lg text-gray-600">
              Encuentra el plan que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-6 font-semibold text-gray-900">Características</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="text-center p-6">
                      <div className="font-semibold text-gray-900">{plan.name}</div>
                      <div className="text-2xl font-bold text-gray-900 mt-2">
                        ${billingPeriod === 'yearly' ? Math.round(plan.price * 0.8) : plan.price}
                        <span className="text-sm text-gray-500">/{plan.period}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((_, featureIndex) => (
                  <tr key={featureIndex} className="border-t border-gray-200">
                    <td className="p-6 font-medium text-gray-900">
                      {plans[0].features[featureIndex].name}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="p-6 text-center">
                        {plan.features[featureIndex]?.included ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestra plataforma?
            </h2>
            <p className="text-lg text-gray-600">
              Más que una plataforma, somos tu socio estratégico para el éxito digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'María González',
                company: 'Boutique Elena',
                plan: 'Plan Crece',
                testimonial: 'Desde que uso la plataforma, mis ventas aumentaron un 300%. El soporte es excepcional.',
                rating: 5
              },
              {
                name: 'Carlos Rodríguez',
                company: 'TechStore Pro',
                plan: 'Plan Pro',
                testimonial: 'La integración con pagos fue súper fácil. Ahora proceso cientos de pedidos sin problemas.',
                rating: 5
              },
              {
                name: 'Ana Martínez',
                company: 'Artesanías del Valle',
                plan: 'Plan Emprende',
                testimonial: 'Perfecto para empezar. La capacitación me ayudó mucho a entender el mundo digital.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.plan}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-600">
              Resolvemos las dudas más comunes sobre nuestros planes
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a miles de emprendedores que ya están vendiendo más con nuestra plataforma
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
              Comenzar prueba gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Hablar con ventas
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            * No se requiere tarjeta de crédito para la prueba gratuita
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;