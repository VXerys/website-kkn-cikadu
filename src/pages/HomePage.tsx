import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Home,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import QuickInfoGrid from '../components/Home/QuickInfoGrid';
import FeaturedUMKM from '../components/Home/FeaturedUMKM';
import StatsRow from '../components/Home/StatsRow';

import logoUrl from '../../assets/barudak.svg';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Multi-layer Background dengan SVG */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-slate-900 to-emerald-950" />
          
          {/* SVG Pattern Background */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(${logoUrl})`,
              backgroundSize: '120px 120px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
            }}
          />
          
          {/* Large SVG Watermark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] opacity-15">
              <img 
                src={logoUrl} 
                alt="Desa Cikadu Background Logo" 
                className="w-full h-full object-contain filter brightness-150"
              />
            </div>
          </div>
          
          {/* Overlay gradient untuk kontras */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/5 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-emerald-300/10 rounded-full blur-md animate-pulse delay-1000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 text-center text-white max-w-5xl mx-auto px-4"
        >
          {/* Logo Utama */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <img 
                src={logoUrl} 
                alt="KKN Desa Cikadu Logo" 
                className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 drop-shadow-2xl filter brightness-110 hover:scale-105 transition-transform duration-300"
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            KKN Universitas Nusa Putra
            <span className="block text-emerald-400 drop-shadow-lg text-3xl md:text-5xl lg:text-6xl mt-2">
              Desa Cikadu 2025
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md"
          >
            Bergabunglah dengan mahasiswa KKN dalam membangun masa depan cerah
            Desa Cikadu melalui program-program inovatif yang berkelanjutan dan
            berdampak nyata.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/news')}
              data-scroll-to-top="true"
              className="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Jelajahi Program KKN
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => navigate('/about')}
              data-scroll-to-top="true"
              className="group px-8 py-4 border-2 border-white/80 hover:border-white text-white hover:bg-white/10 font-bold text-lg rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              Tentang Desa
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <motion.div
              className="w-1 h-3 bg-white/80 rounded-full mt-2"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Info Grid */}
      <QuickInfoGrid />

      {/* Featured UMKM */}
      <FeaturedUMKM />

      {/* Statistics */}
      <StatsRow />

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, 
              rgba(5, 150, 105, 0.95) 0%, 
              rgba(16, 185, 129, 0.9) 25%, 
              rgba(52, 211, 153, 0.85) 50%, 
              rgba(34, 197, 94, 0.9) 75%, 
              rgba(21, 128, 61, 0.95) 100%), 
              url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`,
          }}
        />

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-2xl backdrop-blur-sm"
          />

          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full backdrop-blur-lg"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/10 to-transparent" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-md rounded-full text-white font-semibold text-sm mb-8 border border-white/20 shadow-lg"
            >
              <span className="text-lg">🌟</span>
              <span>Bergabunglah dengan KKN</span>
              <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight text-center"
            >
              <span className="inline-block">Mari Wujudkan</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-white to-emerald-200 bg-clip-text text-transparent drop-shadow-lg">
                Desa Cikadu yang Maju
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-sm text-center"
            >
              Ikuti perjalanan transformatif KKN Universitas Nusa Putra di Desa
              Cikadu.
              <span className="text-cyan-200 font-semibold">
                {' '}
                Bagikan ide kreatif Anda
              </span>
              , berkolaborasi dengan masyarakat, dan ciptakan dampak positif
              yang berkelanjutan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={() => navigate('/about')}
                data-scroll-to-top="true"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-emerald-700 hover:bg-emerald-50 shadow-2xl hover:shadow-emerald-200/50 font-bold rounded-xl transform transition-all duration-300 whitespace-nowrap text-base sm:text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Pelajari Lebih Lanjut
                  <Home className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-16 flex justify-center"
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 text-white/70 text-xs sm:text-sm font-medium text-center">
                <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-transparent to-white/40" />
                <span className="px-4 sm:px-0">
                  Program KKN yang telah mengubah kehidupan masyarakat desa
                </span>
                <div className="hidden sm:block w-8 h-px bg-gradient-to-l from-transparent to-white/40" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;