import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, TrendingUp, Award } from 'lucide-react';

interface StatItem {
  id: string;
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
}

const StatsRow: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: '1',
      label: 'Total UMKM',
      value: '150+',
      icon: Building2,
      color: 'text-emerald-600 dark:text-emerald-400',
      description: 'Usaha aktif',
    },
    {
      id: '2',
      label: 'Kategori Usaha',
      value: '12',
      icon: Award,
      color: 'text-blue-600 dark:text-blue-400',
      description: 'Jenis bidang',
    },
    {
      id: '3',
      label: 'Tenaga Kerja',
      value: '800+',
      icon: Users,
      color: 'text-purple-600 dark:text-purple-400',
      description: 'Pekerja lokal',
    },
    {
      id: '4',
      label: 'Pertumbuhan',
      value: '15%',
      icon: TrendingUp,
      color: 'text-orange-600 dark:text-orange-400',
      description: 'Per tahun',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ekonomi Desa dalam Angka
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Statistik pertumbuhan ekonomi dan pemberdayaan masyarakat Desa Cikadu
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                
                <div className="text-emerald-100 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsRow;