import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">QMS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900">Quiero Mi Seguro</span>
            <span className="text-xs text-gray-500">Eheja Na Che Cargope</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition">Servicios</a>
          <a href="#porque" className="text-gray-700 hover:text-blue-600 transition">¿Por qué elegir?</a>
          <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition">Testimonios</a>
          <a href="#como" className="text-gray-700 hover:text-blue-600 transition">Cómo funciona</a>
          <a href="#contacto" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Cotizar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3">
          <a href="#servicios" className="block text-gray-700 hover:text-blue-600">Servicios</a>
          <a href="#porque" className="block text-gray-700 hover:text-blue-600">¿Por qué elegir?</a>
          <a href="#testimonios" className="block text-gray-700 hover:text-blue-600">Testimonios</a>
          <a href="#como" className="block text-gray-700 hover:text-blue-600">Cómo funciona</a>
          <a href="#contacto" className="block bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700">
            Cotizar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
