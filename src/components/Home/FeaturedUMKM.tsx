import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Star } from 'lucide-react';

interface UMKMItem {
  id: string;
  name: string;
  category: string;
  location: string;
  image: string;
  rating: number;
}

const FeaturedUMKM: React.FC = () => {
  const navigate = useNavigate();

  const featuredUMKM: UMKMItem[] = [
    {
      id: '1',
      name: 'Kebun Organik Lembah Hijau',
      category: 'Pertanian',
      location: 'Kawasan Utara',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
    },
    {
      id: '2',
      name: 'Sanggar Kerajinan Warisan',
      category: 'Kerajinan',
      location: 'Pusat Desa',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
    },
    {
      id: '3',
      name: 'Kafe Pemandangan Gunung',
      category: 'Kuliner',
      location: 'Jalan Utama',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.7,
    },
  ];

  const handleViewAll = () => {
    navigate('/business');
  };

  const handleUMKMClick = (id: string) => {
    navigate('/business');
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              UMKM Unggulan
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Usaha mikro terbaik di Desa Cikadu
            </p>
          </div>
          
          <button
            onClick={handleViewAll}
            className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-300 font-medium"
            aria-label="Lihat semua UMKM"
          >
            <span>Lihat Semua</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredUMKM.map((umkm, index) => (
            <motion.div
              key={umkm.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleUMKMClick(umkm.id)}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
              role="button"
              tabIndex={0}
              aria-label={`Lihat detail ${umkm.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleUMKMClick(umkm.id);
                }
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={umkm.image}
                  alt={umkm.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium text-gray-900">{umkm.rating}</span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">
                    {umkm.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {umkm.name}
                </h3>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{umkm.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="sm:hidden text-center">
          <button
            onClick={handleViewAll}
            className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-300 font-medium flex items-center justify-center space-x-2"
            aria-label="Lihat semua UMKM"
          >
            <span>Lihat Semua UMKM</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedUMKM;