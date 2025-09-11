{/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Clean Professional Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
  
  {/* Decorative SVG Pattern Background */}
  <div 
    className="absolute inset-0 opacity-5"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px'
    }}
  />

  {/* Logo SVG sebagai Watermark/Dekorasi */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <img 
      src={logoUrl} 
      alt="KKN Desa Cikadu Logo" 
      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain opacity-10 select-none"
    />
  </div>

  {/* Subtle Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>

  {/* Content Wrapper */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className="relative z-10 text-center text-white max-w-5xl mx-auto px-4"
  >
    {/* Main Title */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
    >
      KKN Universitas Nusa Putra
      <span className="block text-emerald-400 drop-shadow-lg text-2xl md:text-5xl lg:text-6xl mt-2">
        Desa Cikadu 2025
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      className="text-base md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md"
    >
      Bergabunglah dengan mahasiswa KKN dalam membangun masa depan cerah
      Desa Cikadu melalui program-program inovatif yang berkelanjutan dan
      berdampak nyata.
    </motion.p>

    {/* Action Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <button
        onClick={() => navigate('/news')}
        data-scroll-to-top="true"
        className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
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
        className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/80 hover:border-white text-white hover:bg-white/10 font-bold text-base sm:text-lg rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
      >
        Tentang Desa
      </button>
    </motion.div>
  </motion.div>

  {/* Scroll Indicator */}
  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10"
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