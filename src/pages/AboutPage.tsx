import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Calendar, Award } from 'lucide-react';
import Card from '../components/UI/Card';

const AboutPage: React.FC = () => {
  // SVG pattern untuk texture
  const patternSvg =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  const stats = [
    { icon: Users, label: 'Jiwa Mulia', value: '2,500+' },
    { icon: MapPin, label: 'Hamparan Surga', value: '15 km²' },
    { icon: Calendar, label: 'Tahun Berdiri', value: '1892' },
    { icon: Award, label: 'Prestasi Gemilang', value: '15+' },
  ];

  const traditions = [
    {
      title: 'Festival Panen Raya yang Memukau',
      description:
        'Perayaan spektakuler warisan leluhur dengan tarian tradisional yang menghipnotis, kuliner khas yang menggugah selera, dan kebersamaan yang menyentuh hati.',
      image:
        'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Kerajinan Tangan Warisan Emas',
      description:
        'Para seniman lokal melestarikan tradisi berabad-abad dalam seni gerabah, tenun, dan ukiran kayu yang memukau mata dan menyentuh jiwa.',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Kebun Komunitas Berkelanjutan',
      description:
        'Praktik pertanian organik turun-temurun yang menciptakan harmoni sempurna antara manusia dan alam, menghasilkan panen berlimpah penuh berkah.',
      image:
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Hero Section with Village Background Image */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/55 lg:bg-black/50"></div>

        {/* Subtle Pattern Overlay for Texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${patternSvg})` }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
              Jiwa Masyarakat Bersatu
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4 sm:px-0">
              Terletak di jantung keindahan alam Sukabumi, Desa Cikadu adalah
              permata tersembunyi yang memancarkan kehangatan persaudaraan dan
              kearifan tradisi yang tak ternilai harganya.
            </p>
          </motion.div>

          {/* Enhanced Stats Cards with Responsive Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4 lg:px-0">
  {stats.map((stat, index) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group w-full"
    >
      <Card className="p-4 sm:p-6 text-center bg-white shadow-lg hover:shadow-xl border border-gray-100 rounded-xl hover:bg-gray-50 transform hover:-translate-y-2 transition-all duration-500 hover:scale-105 w-full">
        <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-green-500 mx-auto mb-3 sm:mb-4 group-hover:text-green-600 transition-colors duration-300" />
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-gray-800 transition-colors duration-300">
          {stat.value}
        </div>
        <div className="text-sm sm:text-base font-medium text-gray-700 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
          {stat.label}
        </div>
      </Card>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* Story Section - Enhanced Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 order-2 lg:order-1"
            >
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-sm font-medium mb-3 sm:mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Sejarah Panjang
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Legenda yang Menginspirasi
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                <p className="border-l-4 border-green-500 dark:border-green-400 pl-4 sm:pl-6 italic text-sm sm:text-base md:text-lg">
                  Didirikan pada tahun 1892 oleh sekelompok keluarga pemberani
                  yang memiliki visi mulia, Desa Cikadu telah berkembang dari
                  pemukiman pertanian sederhana menjadi komunitas yang
                  menakjubkan, memadukan kearifan tradisi dengan inovasi modern
                  yang membanggakan.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Selama puluhan dekade, kami mempertahankan komitmen suci
                  terhadap kehidupan berkelanjutan, kerjasama komunitas yang
                  menghangatkan hati, dan pelestarian lingkungan yang
                  menginspirasi. Penduduk kami bangga melestarikan keindahan
                  alam yang menakjubkan sambil merangkul fasilitas modern dan
                  peluang emas yang tak terbatas.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Hari ini, Desa Cikadu berdiri sebagai model pembangunan
                  pedesaan yang memukau, menarik pengunjung yang mencari
                  pengalaman autentik dan koneksi mendalam dengan alam. Kami
                  menyambut tamu dengan tangan terbuka dan hati yang hangat,
                  mengundang mereka menjadi bagian dari kisah legendaris kami.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl sm:rounded-3xl blur opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pemandangan menakjubkan Desa Cikadu"
                className="relative rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traditions Section - Enhanced Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-sm font-medium mb-3 sm:mb-4">
              <Award className="w-4 h-4 mr-2" />
              Warisan Budaya
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
              Tradisi Suci & Budaya Memukau
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
              Warisan budaya yang kaya dan tradisi luhur yang telah mengakar
              dalam jiwa, membentuk identitas komunitas yang membanggakan dan
              menyatukan hati dalam kebersamaan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {traditions.map((tradition, index) => (
              <motion.div
                key={tradition.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 bg-white dark:bg-gray-800 border-0 shadow-lg rounded-xl h-full flex flex-col">
                  <div className="relative overflow-hidden h-48 sm:h-52 bg-gray-200 dark:bg-gray-700">
                    <img
                      src={tradition.image}
                      alt={tradition.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                              <div class="text-center text-gray-400">
                                <svg class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                                </svg>
                                <p class="text-xs sm:text-sm font-medium">Gambar Tradisi</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300 line-clamp-2 leading-tight">
                      {tradition.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-1 text-sm sm:text-base">
                      {tradition.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography Section - Enhanced Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl sm:rounded-3xl blur opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Keindahan geografis Desa Cikadu"
                className="relative rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-sm font-medium mb-3 sm:mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Keindahan Alam
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Surga Geografis & Lingkungan Menawan
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                <p className="border-l-4 border-green-500 dark:border-green-400 pl-4 sm:pl-6 italic text-sm sm:text-base md:text-lg">
                  Desa Cikadu terletak strategis di lembah subur yang memukau,
                  dikelilingi perbukitan hijau yang mempesona dan hutan pristine
                  yang menyejukkan jiwa. Wilayah ini dikaruniai iklim tropis
                  yang sempurna dengan empat musim yang berbeda, masing-masing
                  membawa keindahan dan peluang pertanian yang luar biasa.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Kawasan ini diberkahi mata air alami yang jernih, sungai
                  berkelok yang menenangkan, dan tanah subur yang telah
                  mendukung pertanian selama berabad-abad. Komitmen kami
                  terhadap konservasi lingkungan memastikan bahwa generasi
                  mendatang akan mewarisi keindahan alam yang sama yang kami
                  nikmati hari ini.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Satwa liar berkembang pesat di hutan lindung kami, dan praktik
                  pertanian berkelanjutan telah menciptakan ekosistem harmonis
                  di mana aktivitas manusia dan alam hidup berdampingan dalam
                  kedamaian yang menginspirasi.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section - Enhanced Responsive with Rural Community Background */}
      <section
        className="relative py-12 sm:py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1574263867128-befc7a48f0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/65 sm:bg-black/60 lg:bg-black/55"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 sm:px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium mb-6 sm:mb-8 border border-white/20">
              <Award className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Visi & Misi
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl leading-tight px-4 sm:px-0">
              Visi Mulia untuk Masa Depan Gemilang
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 sm:mb-12 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4 sm:px-0">
              Kami bermimpi menjadi desa percontohan yang menginspirasi dunia,
              di mana tradisi luhur berpadu harmonis dengan inovasi modern,
              menciptakan kehidupan yang berkelanjutan dan membahagiakan bagi
              semua.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <motion.div
                className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-black/50 transition-all duration-300 transform hover:-translate-y-2 hover:border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                  Keberlanjutan
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                  Melestarikan alam untuk generasi mendatang dengan praktik
                  ramah lingkungan
                </p>
              </motion.div>
              <motion.div
                className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-black/50 transition-all duration-300 transform hover:-translate-y-2 hover:border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                  Inovasi
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                  Mengadopsi teknologi modern untuk kemajuan dan kesejahteraan
                  bersama
                </p>
              </motion.div>
              <motion.div
                className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-black/50 transition-all duration-300 transform hover:-translate-y-2 hover:border-white/20 sm:col-span-2 md:col-span-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                  Kebersamaan
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                  Membangun komunitas yang solid dan saling mendukung dalam
                  setiap langkah
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;