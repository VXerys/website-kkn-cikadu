import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Sprout, 
  Factory, 
  Building2, 
  PiggyBank, 
  TrendingUp, 
  MapPin 
} from 'lucide-react';

interface StatItem {
  id: string;
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
}

interface AnimatedNumberProps {
  value: string;
  isVisible: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = React.memo(({ value, isVisible }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const numericValue = parseInt(value.replace(/[^\d]/g, ''));

  useEffect(() => {
    if (!isVisible || isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    // Simplified animation for mobile performance
    const duration = 1500;
    let start = 0;
    const increment = numericValue / (duration / 32); // Reduced frequency

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start).toLocaleString('id-ID'));
      }
    }, 32);

    return () => clearInterval(timer);
  }, [numericValue, value, isVisible]);

  return <span>{displayValue}</span>;
});

AnimatedNumber.displayName = 'AnimatedNumber';

const StatsRow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats: StatItem[] = [
    {
      id: '1',
      label: 'Total Penduduk',
      value: '9.743',
      icon: Users,
      color: 'text-emerald-600',
      description: 'Jiwa produktif',
    },
    {
      id: '2',
      label: 'Wiraswasta',
      value: '1.175',
      icon: Briefcase,
      color: 'text-blue-600',
      description: 'Penggerak ekonomi',
    },
    {
      id: '3',
      label: 'Petani Aktif',
      value: '2.250',
      icon: Sprout,
      color: 'text-green-600',
      description: 'Sektor pertanian',
    },
    {
      id: '4',
      label: 'Buruh Tani',
      value: '2.395',
      icon: Factory,
      color: 'text-orange-600',
      description: 'Tenaga terampil',
    },
    {
      id: '5',
      label: 'Pegawai Swasta',
      value: '289',
      icon: Building2,
      color: 'text-purple-600',
      description: 'Sektor formal',
    },
    {
      id: '6',
      label: 'Anggaran Desa',
      value: 'Rp 1,5M',
      icon: PiggyBank,
      color: 'text-cyan-600',
      description: 'Dana pembangunan',
    },
    {
      id: '7',
      label: 'Luas Wilayah',
      value: '1.084',
      icon: MapPin,
      color: 'text-teal-600',
      description: 'Hektare total',
    },
    {
      id: '8',
      label: 'Komoditas Unggulan',
      value: 'Pisang',
      icon: TrendingUp,
      color: 'text-yellow-600',
      description: 'Hasil utama',
    },
  ];

  const handleInView = useCallback(() => {
    setIsVisible(true);
  }, []);

  // Simplified motion variants for better mobile performance
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800 relative">
      {/* Simplified background - no animations on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-cyan-50/50 dark:from-emerald-900/10 dark:to-cyan-900/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          onViewportEnter={handleInView}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-300 font-medium text-sm mb-4"
          >
            <TrendingUp className="h-4 w-4" />
            <span>Data Terkini 2024</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
          >
            Ekonomi Desa dalam{' '}
            <span className="text-emerald-600">Angka</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Statistik pertumbuhan ekonomi dan pemberdayaan masyarakat Desa Cikadu
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
        >
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700 text-center group"
              >
                {/* Icon */}
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 md:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors duration-200">
                    <IconComponent className={`h-4 w-4 md:h-6 md:w-6 ${stat.color}`} />
                  </div>
                </div>
                
                {/* Value */}
                <div className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  <AnimatedNumber value={stat.value} isVisible={isVisible} />
                </div>
                
                {/* Label */}
                <div className="font-semibold text-gray-800 dark:text-gray-200 text-xs md:text-base mb-1">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 md:mt-12"
        >
          <div className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">
            <span className="font-medium">
              Data dari Profil Desa Cikadu - Kemendagri 2024
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsRow;