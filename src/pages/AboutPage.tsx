import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Calendar, Award } from 'lucide-react';
import Card from '../components/UI/Card';

const AboutPage: React.FC = () => {
  // SVG pattern untuk texture
  const patternSvg =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

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
    <div className="min-h-screen pt-20">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1574263867128-befc7a48f0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/75 to-green-700/60"></div>

        {/* Pattern Overlay for Texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${patternSvg})` }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Jiwa Masyarakat Bersatu
            </h1>
            <p className="text-xl text-green-50 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
              Terletak di jantung keindahan alam Sukabumi, Desa Cikadu adalah
              permata tersembunyi yang memancarkan kehangatan persaudaraan dan
              kearifan tradisi yang tak ternilai harganya.
            </p>
          </motion.div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="p-6 text-center bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl hover:bg-white transform hover:-translate-y-2 transition-all duration-500 hover:scale-105">
                  <stat.icon className="h-10 w-10 text-green-600 mx-auto mb-3 group-hover:text-green-700 transition-colors duration-300" />
                  <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Enhanced */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Sejarah Panjang
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Legenda yang Menginspirasi
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p className="border-l-4 border-green-500 pl-6 italic">
                  Didirikan pada tahun 1892 oleh sekelompok keluarga pemberani
                  yang memiliki visi mulia, Desa Cikadu telah berkembang dari
                  pemukiman pertanian sederhana menjadi komunitas yang
                  menakjubkan, memadukan kearifan tradisi dengan inovasi modern
                  yang membanggakan.
                </p>
                <p>
                  Selama puluhan dekade, kami mempertahankan komitmen suci
                  terhadap kehidupan berkelanjutan, kerjasama komunitas yang
                  menghangatkan hati, dan pelestarian lingkungan yang
                  menginspirasi. Penduduk kami bangga melestarikan keindahan
                  alam yang menakjubkan sambil merangkul fasilitas modern dan
                  peluang emas yang tak terbatas.
                </p>
                <p>
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
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl blur opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pemandangan menakjubkan Desa Cikadu"
                className="relative rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traditions Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-200 text-green-800 text-sm font-medium mb-4">
              <Award className="w-4 h-4 mr-2" />
              Warisan Budaya
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Tradisi Suci & Budaya Memukau
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Warisan budaya yang kaya dan tradisi luhur yang telah mengakar
              dalam jiwa, membentuk identitas komunitas yang membanggakan dan
              menyatukan hati dalam kebersamaan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traditions.map((tradition, index) => (
              <motion.div
                key={tradition.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 bg-white border-0 shadow-lg rounded-xl h-full flex flex-col">
                  <div className="relative overflow-hidden h-52 bg-gray-200">
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
                            <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <div class="text-center text-gray-400">
                                <svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                                </svg>
                                <p class="text-sm font-medium">Gambar Tradisi</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
                      {tradition.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-1 text-sm">
                      {tradition.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography Section - Enhanced */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Keindahan geografis Desa Cikadu"
                className="relative rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Keindahan Alam
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Surga Geografis & Lingkungan Menawan
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p className="border-l-4 border-green-500 pl-6 italic">
                  Desa Cikadu terletak strategis di lembah subur yang memukau,
                  dikelilingi perbukitan hijau yang mempesona dan hutan pristine
                  yang menyejukkan jiwa. Wilayah ini dikaruniai iklim tropis
                  yang sempurna dengan empat musim yang berbeda, masing-masing
                  membawa keindahan dan peluang pertanian yang luar biasa.
                </p>
                <p>
                  Kawasan ini diberkahi mata air alami yang jernih, sungai
                  berkelok yang menenangkan, dan tanah subur yang telah
                  mendukung pertanian selama berabad-abad. Komitmen kami
                  terhadap konservasi lingkungan memastikan bahwa generasi
                  mendatang akan mewarisi keindahan alam yang sama yang kami
                  nikmati hari ini.
                </p>
                <p>
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

      {/* Vision Section - Enhanced with Background */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/95 via-green-700/90 to-green-600/95"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8">
              <Award className="w-5 h-5 mr-2" />
              Visi & Misi
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Visi Mulia untuk Masa Depan Gemilang
            </h2>
            <p className="text-xl text-green-50 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
              Kami bermimpi menjadi desa percontohan yang menginspirasi dunia,
              di mana tradisi luhur berpadu harmonis dengan inovasi modern,
              menciptakan kehidupan yang berkelanjutan dan membahagiakan bagi
              semua.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h3 className="text-xl font-bold text-white mb-3">
                  Keberlanjutan
                </h3>
                <p className="text-green-100 leading-relaxed">
                  Melestarikan alam untuk generasi mendatang dengan praktik
                  ramah lingkungan
                </p>
              </motion.div>
              <motion.div
                className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h3 className="text-xl font-bold text-white mb-3">Inovasi</h3>
                <p className="text-green-100 leading-relaxed">
                  Mengadopsi teknologi modern untuk kemajuan dan kesejahteraan
                  bersama
                </p>
              </motion.div>
              <motion.div
                className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Kebersamaan
                </h3>
                <p className="text-green-100 leading-relaxed">
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
