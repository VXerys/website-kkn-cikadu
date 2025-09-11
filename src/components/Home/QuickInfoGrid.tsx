import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Newspaper,
  Building2,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

interface QuickInfoItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  gradient: string;
  iconBg: string;
  stats?: string;
  badge?: string;
}

const QuickInfoGrid: React.FC = () => {
  const navigate = useNavigate();

  const quickInfoItems: QuickInfoItem[] = [
    {
      id: '1',
      title: 'Program KKN',
      description: 'Kegiatan mahasiswa untuk membangun dan mengembangkan potensi desa',
      icon: TrendingUp,
      path: '/news',
      gradient: 'from-blue-500 to-indigo-600',
      iconBg: 'bg-blue-500',
      stats: '5+ Program',
      badge: 'Aktif',
    },
    {
      id: '2',
      title: 'Direktori UMKM',
      description: 'Usaha mikro dan ekonomi kreatif yang menggerakkan perekonomian lokal',
      icon: Building2,
      path: '/business',
      gradient: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-emerald-500',
      stats: '4+ UMKM',
      badge: 'Berkembang',
    },
    {
      id: '3',
      title: 'Berita Terbaru',
      description: 'Informasi terkini dan perkembangan kegiatan di Desa Cikadu',
      icon: Newspaper,
      path: '/news',
      gradient: 'from-purple-500 to-pink-600',
      iconBg: 'bg-purple-500',
      stats: 'Update Harian',
      badge: 'Terbaru',
    },
    {
      id: '4',
      title: 'Profil Desa',
      description: 'Sejarah, potensi, dan profil lengkap Desa Cikadu Sukabumi',
      icon: Users,
      path: '/about',
      gradient: 'from-orange-500 to-red-600',
      iconBg: 'bg-orange-500',
      stats: '9.743 Penduduk',
      badge: 'Lengkap',
    },
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-full text-emerald-700 dark:text-emerald-300 font-semibold text-sm mb-6 border border-emerald-200/50 dark:border-emerald-700/50"
          >
            <Sparkles className="h-4 w-4" />
            <span>Navigasi Cepat</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Akses Cepat{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Informasi
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Temukan informasi penting tentang program KKN, UMKM, berita, dan profil desa dengan mudah dan cepat
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {quickInfoItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                onClick={() => handleCardClick(item.path)}
                className="group cursor-pointer relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
                role="button"
                tabIndex={0}
                aria-label={`Navigasi ke ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(item.path);
                  }
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.gradient} text-white shadow-sm`}>
                    {item.badge}
                  </span>
                </div>

                <div className="p-6 relative z-10">
                  {/* Icon Section */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`p-4 ${item.iconBg} rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-200 transition-all duration-300">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                        {item.stats}
                      </span>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="flex items-center gap-1 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <span className="text-xs font-medium">Lihat</span>
                        <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-400" />
            <span className="px-4 font-medium">
              Jelajahi semua fitur untuk pengalaman yang lebih lengkap
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickInfoGrid;