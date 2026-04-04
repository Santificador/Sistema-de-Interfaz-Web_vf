import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const brandOptions = ['Toyota', 'Kia', 'Hyundai', 'Chevrolet', 'Nissan', 'Volkswagen'];

const modelOptions: Record<string, string[]> = {
  Toyota: ['Corolla', 'Hilux', 'Vitz', 'Raize'],
  Kia: ['Picanto', 'Rio', 'Sportage', 'Cerato'],
  Hyundai: ['HB20', 'Accent', 'Tucson', 'Santa Fe'],
  Chevrolet: ['Onix', 'Prisma', 'Tracker', 'S10'],
  Nissan: ['Versa', 'Sentra', 'Kicks', 'Frontier'],
  Volkswagen: ['Gol', 'Virtus', 'Nivus', 'Amarok']
};

const yearOptions = Array.from({ length: 26 }, (_, index) => String(2026 - index));

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const availableModels = useMemo(() => modelOptions[brand] ?? [], [brand]);

  useEffect(() => {
    if (!isOpen) {
      setBrand('');
      setModel('');
      setYear('');
      setFullName('');
      setPhone('');
    }
  }, [isOpen]);

  useEffect(() => {
    setModel('');
  }, [brand]);

  if (!isOpen) {
    return null;
  }

  const isFormReady = brand && model && year && fullName.trim() && phone.trim();
  const whatsappMessage = encodeURIComponent(
    [
      'Hola, quiero cotizar mi seguro de auto en AseguraPy.',
      `Marca: ${brand || '-'}`,
      `Modelo: ${model || '-'}`,
      `Año: ${year || '-'}`,
      `Nombre: ${fullName || '-'}`,
      `Teléfono: ${phone || '-'}`
    ].join('\n')
  );

  return (
    <div className="fixed inset-0 z-[70] bg-slate-950/55 backdrop-blur-sm flex items-start justify-center p-4 md:p-8 overflow-y-auto">
      <div className="w-full max-w-2xl bg-gradient-to-b from-sky-700 to-cyan-700 rounded-[28px] shadow-2xl border border-white/10 overflow-hidden mt-6">
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Cotizá tu seguro de auto</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-white/90 hover:text-white hover:bg-white/10 rounded-full p-2 transition"
            aria-label="Cerrar cotizador"
          >
            <X size={22} />
          </button>
        </div>

        <div className="px-6 pb-6 pt-2">
          <div className="space-y-4">
            <div className="relative">
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full appearance-none rounded-xl bg-white text-slate-800 text-lg px-5 py-4 pr-12 outline-none border border-white/40 focus:border-orange-300"
              >
                <option value="">MARCA</option>
                {brandOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
            </div>

            <div className="relative">
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                disabled={!brand}
                className="w-full appearance-none rounded-xl bg-sky-100/90 disabled:bg-sky-100/60 text-slate-700 text-lg px-5 py-4 pr-12 outline-none border border-white/20 focus:border-orange-300 disabled:cursor-not-allowed"
              >
                <option value="">MODELO</option>
                {availableModels.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
            </div>

            <div className="relative">
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full appearance-none rounded-xl bg-sky-100/90 text-slate-700 text-lg px-5 py-4 pr-12 outline-none border border-white/20 focus:border-orange-300"
              >
                <option value="">AÑO</option>
                {yearOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
            </div>

            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Nombre y Apellido"
              className="w-full rounded-xl bg-white text-slate-700 text-lg px-5 py-4 outline-none border border-white/40 focus:border-orange-300"
            />

            <div className="flex items-center rounded-xl bg-white border border-white/40 overflow-hidden">
              <div className="flex items-center gap-2 px-4 text-slate-700 bg-white whitespace-nowrap border-r border-slate-200">
                <span className="text-xl">🇵🇾</span>
                <span className="text-base font-medium">+595</span>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0961 456789"
                className="w-full text-lg text-slate-700 px-4 py-4 outline-none"
              />
            </div>

            <a
              href={isFormReady ? `https://wa.me/595985335598?text=${whatsappMessage}` : '#'}
              target={isFormReady ? '_blank' : undefined}
              rel={isFormReady ? 'noopener noreferrer' : undefined}
              onClick={(e) => {
                if (!isFormReady) {
                  e.preventDefault();
                }
              }}
              className={`inline-flex items-center justify-center rounded-xl px-6 py-4 text-xl font-bold transition ${
                isFormReady
                  ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-lg shadow-orange-900/20'
                  : 'bg-orange-300 text-white/80 cursor-not-allowed'
              }`}
            >
              COTIZAR MI SEGURO
            </a>

            <div className="pt-6 border-t border-white/30">
              <p className="text-white text-2xl md:text-3xl font-semibold leading-tight">
                No guardamos tu información para venderla. Solo para cotizar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;