import { Plan } from '../types';

export const plans: Plan[] = [
  {
    id: 'emprende',
    name: 'Plan Emprende',
    subtitle: 'Ideal para microempresas',
    price: 29,
    period: 'mes',
    description: 'Perfecto para iniciar tu tienda virtual y dar los primeros pasos en el mundo digital.',
    isPopular: false,
    buttonText: 'Comenzar Ahora',
    color: {
      primary: 'bg-green-600',
      secondary: 'bg-green-50',
      accent: 'text-green-600'
    },
    features: [
      { name: 'Tienda Virtual 360 Pro', included: true, description: 'Tienda completa con diseño profesional' },
      { name: 'Acceso al Marketplace Multi-Vendor', included: true, description: 'Vende en nuestra plataforma' },
      { name: 'Capacitación básica en eCommerce Academy', included: true, description: 'Cursos introductorios' },
      { name: 'Soporte técnico 24/7', included: false },
      { name: 'Integración con pasarelas de pago', included: false },
      { name: 'Consultoría personalizada', included: false },
      { name: 'Analytics avanzados', included: false }
    ]
  },
  {
    id: 'crece',
    name: 'Plan Crece',
    subtitle: 'Para negocios en crecimiento',
    price: 79,
    period: 'mes',
    description: 'Mejora tu presencia digital y empieza a vender con más confianza y herramientas avanzadas.',
    isPopular: true,
    buttonText: 'Elegir Plan Crece',
    color: {
      primary: 'bg-blue-600',
      secondary: 'bg-blue-50',
      accent: 'text-blue-600'
    },
    features: [
      { name: 'Tienda Virtual 360 Pro', included: true, description: 'Tienda completa con diseño profesional' },
      { name: 'eCommerce Support', included: true, description: 'Soporte y mantenimiento básico' },
      { name: 'eCommerce Academy Intermedio', included: true, description: 'Marketing y gestión de ventas' },
      { name: 'Soporte técnico 24/7', included: true, description: 'Asistencia técnica completa' },
      { name: 'Analytics básicos', included: true, description: 'Reportes de ventas y tráfico' },
      { name: 'Integración con pasarelas de pago', included: false, description: 'Disponible como add-on' },
      { name: 'Consultoría personalizada', included: false }
    ]
  },
  {
    id: 'pro',
    name: 'Plan Pro',
    subtitle: 'Para empresas profesionales',
    price: 149,
    period: 'mes',
    description: 'Automatiza procesos y maximiza tus ventas online con herramientas empresariales completas.',
    isPopular: false,
    buttonText: 'Ir Pro Ahora',
    color: {
      primary: 'bg-purple-600',
      secondary: 'bg-purple-50',
      accent: 'text-purple-600'
    },
    features: [
      { name: 'Tienda Virtual 360 Pro', included: true, description: 'Tienda completa con diseño profesional' },
      { name: 'eCommerce Support Avanzado', included: true, description: 'Soporte y mantenimiento premium' },
      { name: 'PaymentConnect', included: true, description: 'Integración completa con pagos' },
      { name: 'eCommerce Academy Completo', included: true, description: 'Entrenamiento especializado' },
      { name: 'Soporte técnico 24/7', included: true, description: 'Asistencia técnica prioritaria' },
      { name: 'Analytics avanzados', included: true, description: 'Reportes detallados y insights' },
      { name: 'Consultoría personalizada', included: false, description: 'Disponible como add-on' }
    ]
  },
  {
    id: 'elite',
    name: 'Plan Elite',
    subtitle: 'Acompañamiento estratégico',
    price: 299,
    period: 'mes',
    description: 'La solución más completa con consultoría estratégica y acceso exclusivo a recursos premium.',
    isPopular: false,
    buttonText: 'Contactar Ventas',
    color: {
      primary: 'bg-gradient-to-r from-orange-500 to-red-500',
      secondary: 'bg-orange-50',
      accent: 'text-orange-600'
    },
    features: [
      { name: 'Todo lo del Plan Pro', included: true, description: 'Todas las funcionalidades premium' },
      { name: 'Consultoría estratégica personalizada', included: true, description: 'Sesiones mensuales con expertos' },
      { name: 'Actualizaciones prioritarias', included: true, description: 'Acceso temprano a nuevas funciones' },
      { name: 'Descuentos en servicios adicionales', included: true, description: 'Hasta 20% de descuento' },
      { name: 'Academy Premium', included: true, description: 'Workshops, mentorías y certificaciones' },
      { name: 'Soporte dedicado', included: true, description: 'Gerente de cuenta asignado' },
      { name: 'Integración personalizada', included: true, description: 'APIs y conectores a medida' }
    ]
  }
];

export const planFeatures = [
  'Tienda Virtual 360 Pro',
  'Acceso al Marketplace',
  'eCommerce Academy',
  'Soporte técnico 24/7',
  'PaymentConnect',
  'Analytics avanzados',
  'Consultoría personalizada',
  'Academy Premium'
];