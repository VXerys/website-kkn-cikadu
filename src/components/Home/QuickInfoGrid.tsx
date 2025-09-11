import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Newspaper,
  Building2,
  Users,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

interface QuickInfoItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  color: string;
  bgColor: string;
}

const QuickInfoGrid: React.FC = () => {
  const navigate = useNavigate();

  const quickInfoItems: QuickInfoItem[] = [
    {
      id: '1',
      title: 'Program KKN',
      description: 'Kegiatan mahasiswa untuk pembangunan desa',
      icon: TrendingUp,
      path: '/news',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700',
    },
    {
      id: '2',
      title: 'Direktori UMKM',
      description: 'Usaha mikro dan ekonomi kreatif lokal',
      icon: Building2,
      path: '/business',
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700',
    },
    {
      id: '3',
      title: 'Berita Terbaru',
      description: 'Informasi dan perkembangan terkini',
      icon: Newspaper,
      path: '/news',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700',
    },
    {
      id: '4',
      title: 'Profil Desa',
      description: 'Sejarah dan potensi Desa Cikadu',
      icon: Users,
      path: '/about',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700',
    },
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Akses Cepat Informasi
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Temukan informasi penting tentang program KKN, UMKM, berita, dan profil desa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickInfoItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleCardClick(item.path)}
                className={`group cursor-pointer p-6 rounded-xl border-2 ${item.bgColor} hover:shadow-lg transition-all duration-300 hover:scale-105`}
                role="button"
                tabIndex={0}
                aria-label={`Navigasi ke ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(item.path);
                  }
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${item.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <ArrowRight className={`h-4 w-4 ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
                
                <h3 className={`text-lg font-semibold mb-2 ${item.color}`}>
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickInfoGrid;