import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">MercadoPlace</h3>
            <p className="text-gray-300 text-sm leading-6">
              Tu destino principal para productos de calidad de vendedores confiables en todo el mundo. 
              Descubre, compra y disfruta de una experiencia de comercio electrónico sin problemas.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Acerca de Nosotros', action: () => alert('Página Acerca de Nosotros - ¡Próximamente!') },
                { name: 'Planes y Precios', action: () => window.location.hash = '#pricing' },
                { name: 'Contacto', action: () => alert('Página de Contacto - ¡Próximamente!') },
                { name: 'Política de Privacidad', action: () => alert('Política de Privacidad - ¡Próximamente!') },
                { name: 'Términos de Servicio', action: () => alert('Términos de Servicio - ¡Próximamente!') },
                { name: 'Preguntas Frecuentes', action: () => alert('Página de FAQ - ¡Próximamente!') },
                { name: 'Soporte', action: () => alert('Página de Soporte - ¡Próximamente!') }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    onClick={link.action} // Aquí es donde pones el onClick dentro de JSX
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categorías</h4>
            <ul className="space-y-2">
              {[
                { name: 'Electrónicos', action: () => alert('Categoría Electrónicos - ¡Próximamente!') },
                { name: 'Moda', action: () => alert('Categoría Moda - ¡Próximamente!') },
                { name: 'Hogar y Jardín', action: () => alert('Categoría Hogar y Jardín - ¡Próximamente!') },
                { name: 'Deportes', action: () => alert('Categoría Deportes - ¡Próximamente!') },
                { name: 'Belleza', action: () => alert('Categoría Belleza - ¡Próximamente!') },
                { name: 'Libros', action: () => alert('Categoría Libros - ¡Próximamente!') }
              ].map((category) => (
                <li key={category.name}>
                  <button
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    onClick={category.action} // Aquí también pones el onClick dentro de JSX
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contáctanos</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">soporte@mercadoplace.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+52 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Av. Reforma 123, Ciudad de México, CDMX 06600</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MercadoPlace. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => alert('Política de Privacidad - ¡Próximamente!')}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacidad
              </button>
              <button 
                onClick={() => alert('Términos de Servicio - ¡Próximamente!')}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Términos
              </button>
              <button 
                onClick={() => alert('Política de Cookies - ¡Próximamente!')}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
