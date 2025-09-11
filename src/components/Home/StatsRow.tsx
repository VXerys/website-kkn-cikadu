import React, { useState, useEffect } from 'react';
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
  gradient: string;
}

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const numericValue = parseInt(value.replace(/[^\d]/g, ''));

  useEffect(() => {
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const increment = numericValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        const currentValue = Math.floor(start);
        if (value.includes('.') || value.includes(',')) {
          setDisplayValue(value.replace(/[\d,]+/, currentValue.toLocaleString('id-ID')));
        } else {
          setDisplayValue(currentValue.toLocaleString('id-ID'));
        }
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue, value, duration]);

  return <span>{displayValue}</span>;
};

const StatsRow: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: '1',
      label: 'Total Penduduk',
      value: '9.743',
      icon: Users,
      color: 'text-emerald-600 dark:text-emerald-400',
      description: 'Jiwa produktif',
      gradient: 'from-emerald-500/20 to-emerald-600/20',
    },
    {
      id: '2',
      label: 'Wiraswasta',
      value: '1.175',
      icon: Briefcase,
      color: 'text-blue-600 dark:text-blue-400',
      description: 'Penggerak ekonomi',
      gradient: 'from-blue-500/20 to-blue-600/20',
    },
    {
      id: '3',
      label: 'Petani Aktif',
      value: '2.250',
      icon: Sprout,
      color: 'text-green-600 dark:text-green-400',
      description: 'Sektor pertanian',
      gradient: 'from-green-500/20 to-green-600/20',
    },
    {
      id: '4',
      label: 'Buruh Tani',
      value: '2.395',
      icon: Factory,
      color: 'text-orange-600 dark:text-orange-400',
      description: 'Tenaga terampil',
      gradient: 'from-orange-500/20 to-orange-600/20',
    },
    {
      id: '5',
      label: 'Pegawai Swasta',
      value: '289',
      icon: Building2,
      color: 'text-purple-600 dark:text-purple-400',
      description: 'Sektor formal',
      gradient: 'from-purple-500/20 to-purple-600/20',
    },
    {
      id: '6',
      label: 'Anggaran Desa',
      value: 'Rp 1,5M',
      icon: PiggyBank,
      color: 'text-cyan-600 dark:text-cyan-400',
      description: 'Dana pembangunan',
      gradient: 'from-cyan-500/20 to-cyan-600/20',
    },
    {
      id: '7',
      label: 'Luas Wilayah',
      value: '1.084',
      icon: MapPin,
      color: 'text-teal-600 dark:text-teal-400',
      description: 'Hektare total',
      gradient: 'from-teal-500/20 to-teal-600/20',
    },
    {
      id: '8',
      label: 'Komoditas Unggulan',
      value: 'Pisang',
      icon: TrendingUp,
      color: 'text-yellow-600 dark:text-yellow-400',
      description: 'Hasil utama',
      gradient: 'from-yellow-500/20 to-yellow-600/20',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-emerald-50/30 dark:from-gray-900 dark:via-slate-800 dark:to-emerald-900/20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 -left-20 w-40 h-40 bg-gradient-to-br from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30 rounded-full text-emerald-700 dark:text-emerald-300 font-semibold text-sm mb-6 border border-emerald-200/50 dark:border-emerald-700/50"
          >
            <TrendingUp className="h-4 w-4" />
            <span>Data Terkini 2024</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ekonomi Desa dalam{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Angka
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Statistik pertumbuhan ekonomi dan pemberdayaan masyarakat Desa Cikadu
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className={`relative overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group cursor-pointer bg-gradient-to-br ${stat.gradient}`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div 
                    className="absolute inset-0" 
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>

                {/* Floating Decoration */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-300/10 dark:to-gray-300/5 rounded-full blur-xl"
                />

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-3 md:mb-4"
                  >
                    <div className={`p-2 md:p-3 bg-gradient-to-br ${stat.gradient} backdrop-blur-sm rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300 border border-white/20`}>
                      <IconComponent className={`h-5 w-5 md:h-6 md:w-6 ${stat.color}`} />
                    </div>
                  </motion.div>
                  
                  {/* Value */}
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2"
                    key={stat.value}
                  >
                    <AnimatedNumber value={stat.value} />
                  </motion.div>
                  
                  {/* Label */}
                  <div className="font-semibold text-gray-800 dark:text-gray-200 text-sm md:text-base mb-1">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                    {stat.description}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-200/50 dark:group-hover:border-emerald-700/50 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-400 hidden sm:block" />
            <span className="px-4 font-medium">
              Data dari Profil Desa Cikadu - Kementerian Dalam Negeri 2024
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-400 hidden sm:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsRow;