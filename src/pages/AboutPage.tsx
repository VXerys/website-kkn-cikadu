import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Calendar, Award, ChevronRight, Globe, Heart, Leaf } from 'lucide-react';
import Card from '../components/UI/Card';

// Types for better TypeScript support
interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  description: string;
  color: string;
}

interface TraditionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}

interface VisionPillar {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string;
}

const AboutPage: React.FC = () => {
  const [selectedTradition, setSelectedTradition] = useState<string | null>(null);

  const stats: StatItem[] = [
    { 
      icon: Users, 
      label: 'Jiwa Mulia', 
      value: '2,500+', 
      description: 'Warga yang hidup harmonis',
      color: 'bg-blue-500'
    },
    { 
      icon: MapPin, 
      label: 'Hamparan Surga', 
      value: '15 km²', 
      description: 'Wilayah yang indah',
      color: 'bg-green-500'
    },
    { 
      icon: Calendar, 
      label: 'Tahun Berdiri', 
      value: '1892', 
      description: 'Sejarah yang membanggakan',
      color: 'bg-purple-500'
    },
    { 
      icon: Award, 
      label: 'Prestasi Gemilang', 
      value: '15+', 
      description: 'Penghargaan bergengsi',
      color: 'bg-amber-500'
    },
  ];

  const traditions: TraditionItem[] = [
    {
      id: 'festival',
      title: 'Festival Panen Raya yang Memukau',
      description: 'Perayaan spektakuler warisan leluhur dengan tarian tradisional yang menghipnotis, kuliner khas yang menggugah selera, dan kebersamaan yang menyentuh hati dalam suasana penuh berkah.',
      image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Festival',
      featured: true,
    },
    {
      id: 'kerajinan',
      title: 'Kerajinan Tangan Warisan Emas',
      description: 'Para seniman lokal melestarikan tradisi berabad-abad dalam seni gerabah, tenun, dan ukiran kayu yang memukau mata dan menyentuh jiwa dengan keindahan yang tak terlupakan.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Seni',
      featured: false,
    },
    {
      id: 'pertanian',
      title: 'Kebun Komunitas Berkelanjutan',
      description: 'Praktik pertanian organik turun-temurun yang menciptakan harmoni sempurna antara manusia dan alam, menghasilkan panen berlimpah penuh berkah dan kelestarian lingkungan.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Pertanian',
      featured: false,
    },
  ];

  const visionPillars: VisionPillar[] = [
    {
      icon: Leaf,
      title: 'Keberlanjutan Alam',
      description: 'Melestarikan alam untuk generasi mendatang',
      details: 'Praktik ramah lingkungan dan konservasi alam'
    },
    {
      icon: Globe,
      title: 'Inovasi Modern',
      description: 'Mengadopsi teknologi untuk kemajuan bersama',
      details: 'Digitalisasi pelayanan dan smart village'
    },
    {
      icon: Heart,
      title: 'Kebersamaan Solid',
      description: 'Membangun komunitas yang saling mendukung',
      details: 'Gotong royong dan solidaritas warga'
    },
  ];

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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section - Enhanced */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-blue-600/5 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Desa Cikadu
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mb-6"></div>
            </motion.div>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Terletak di jantung keindahan alam Sukabumi yang memesona, Desa Cikadu adalah 
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> permata tersembunyi </span>
              yang memancarkan kehangatan persaudaraan dan kearifan tradisi yang tak ternilai harganya.
            </p>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <Card className="relative p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-t-lg"></div>
                  
                  <div className={`inline-flex p-4 rounded-2xl mb-4 ${stat.color} bg-opacity-10`}>
                    <stat.icon className={`h-8 w-8 ${stat.color.replace('bg-', 'text-')}`} />
                  </div>
                  
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section - Enhanced */}
      <section className="py-24 bg-white dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-50/30 to-transparent dark:via-emerald-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg">Kisah Inspiratif</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                  Legenda yang Menginspirasi Jiwa
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border-l-4 border-emerald-500">
                  <p className="font-medium text-emerald-800 dark:text-emerald-300">
                    Didirikan pada tahun 1892 oleh sekelompok keluarga pemberani yang memiliki visi mulia, 
                    Desa Cikadu telah berkembang dari pemukiman pertanian sederhana menjadi komunitas yang 
                    menakjubkan, memadukan kearifan tradisi dengan inovasi modern yang membanggakan.
                  </p>
                </div>
                
                <p>
                  Selama puluhan dekade, kami mempertahankan komitmen suci terhadap kehidupan berkelanjutan, 
                  kerjasama komunitas yang menghangatkan hati, dan pelestarian lingkungan yang menginspirasi. 
                  Penduduk kami bangga melestarikan keindahan alam yang menakjubkan sambil merangkul 
                  fasilitas modern dan peluang emas yang tak terbatas.
                </p>
                
                <p>
                  Hari ini, Desa Cikadu berdiri sebagai model pembangunan pedesaan yang memukau, 
                  menarik pengunjung yang mencari pengalaman autentik dan koneksi mendalam dengan alam. 
                  Kami menyambut tamu dengan tangan terbuka dan hati yang hangat, mengundang mereka 
                  menjadi bagian dari kisah legendaris kami.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Pemandangan menakjubkan Desa Cikadu"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Keindahan Alam Cikadu</p>
                  <p className="text-sm opacity-90">Pemandangan yang memukau setiap hari</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traditions Section - Completely Redesigned */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg">Warisan Budaya</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
              Tradisi Suci & Budaya Memukau
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Warisan budaya yang kaya dan tradisi luhur yang telah mengakar dalam jiwa, 
              membentuk identitas komunitas yang membanggakan dan menyatukan hati dalam kebersamaan.
            </p>
          </motion.div>

          {/* Fixed Height Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {traditions.map((tradition, index) => (
              <motion.div
                key={tradition.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 bg-white dark:bg-gray-900 border-0 shadow-lg">
                  {/* Image Section - Fixed Height */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tradition.image}
                      alt={tradition.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tradition.category}
                      </span>
                    </div>
                    
                    {/* Featured Badge */}
                    {tradition.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Unggulan
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Section - Flexible Height */}
                  <div className="flex-1 p-8 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {tradition.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1">
                      {tradition.description}
                    </p>
                    
                    {/* Action Button */}
                    <button
                      onClick={() => setSelectedTradition(tradition.id)}
                      className="flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group/btn"
                    >
                      Pelajari Lebih Lanjut
                      <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography Section - Enhanced */}
      <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50 dark:from-blue-900/10 dark:to-green-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Pemandangan gunung"
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Hutan hijau"
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Sungai jernih"
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="mb-8">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">Keindahan Alam</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                  Surga Geografis & Lingkungan Menawan
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p>
                    Desa Cikadu terletak strategis di lembah subur yang memukau, dikelilingi 
                    perbukitan hijau yang mempesona dan hutan pristine yang menyejukkan jiwa.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <p>
                    Kawasan ini diberkahi mata air alami yang jernih, sungai berkelok yang 
                    menenangkan, dan tanah subur yang telah mendukung pertanian selama 
                    berabad-abad dengan hasil yang melimpah.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg">
                    <Globe className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <p>
                    Komitmen terhadap konservasi lingkungan menciptakan ekosistem harmonis 
                    di mana aktivitas manusia dan alam hidup berdampingan dalam kedamaian 
                    yang menginspirasi generasi mendatang.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section - Completely Redesigned */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 backdrop-blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <span className="text-white/80 font-semibold text-lg">Masa Depan Cerah</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">
                Visi Mulia untuk Masa Depan 
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Gemilang
                </span>
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                Kami bermimpi menjadi desa percontohan yang menginspirasi dunia, 
                di mana tradisi luhur berpadu harmonis dengan inovasi modern, 
                menciptakan kehidupan yang berkelanjutan dan membahagiakan bagi semua.
              </p>
            </div>

            {/* Enhanced Vision Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {visionPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-white/40">
                    <div className="bg-white/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <pillar.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      {pillar.description}
                    </p>
                    <p className="text-white/60 text-xs">
                      {pillar.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;