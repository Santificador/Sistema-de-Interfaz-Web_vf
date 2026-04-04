import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Información */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AP</span>
              </div>
              <h3 className="font-bold text-white">AseguraPy</h3>
            </div>
            <p className="text-sm text-gray-400">
              Tu aliado en la búsqueda del mejor seguro en Paraguay.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-blue-400 transition">Servicios</a></li>
              <li><a href="#porque" className="hover:text-blue-400 transition">¿Por qué nosotros?</a></li>
              <li><a href="#testimonios" className="hover:text-blue-400 transition">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-blue-400 transition">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Liberato+JF+Kennedy/@-25.3005569,-57.6074996,18.25z/data=!4m6!3m5!1s0x945da974b7791463:0xba375797993e5cee!8m2!3d-25.3035658!4d-57.6082345!16s%2Fg%2F11pr42cb_0?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  J.F.Kennedy 630
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:0985335598" className="hover:text-blue-400 transition">
                  0985335598
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:edulezcano@gmail.com" className="hover:text-blue-400 transition">
                  edulezcano@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="font-semibold text-white mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-2 rounded transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} AseguraPy. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">Política de privacidad</a>
              <a href="#" className="hover:text-blue-400 transition">Términos de servicio</a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>AseguraPy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
