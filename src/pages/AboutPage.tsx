import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Calendar, Award } from 'lucide-react';
import Card from '../components/UI/Card';

const AboutPage: React.FC = () => {
  // SVG pattern untuk texture
  const patternSvg =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  const stats = [
    {
      icon: Users,
      label: 'Penduduk',
      value: '9.743',
      color: 'text-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Luas Wilayah',
      value: '11 km²',
      color: 'text-blue-500',
    },
    {
      icon: Calendar,
      label: 'Berdiri Sejak',
      value: '1970',
      color: 'text-purple-500',
    },
    {
      icon: Users,
      label: 'Kepala Keluarga',
      value: '3.034',
      color: 'text-orange-500',
    },
  ];

  const traditions = [
    {
      title: 'Pertanian dan Perkebunan Berkelanjutan',
      description:
        'Dengan lahan sawah seluas 119 hektare, ladang 100 hektare, dan perkebunan 265 hektare, pisang menjadi komoditas unggulan kami. Didukung sistem irigasi sepanjang 1.600 meter dan 20 mata air alami, sektor pertanian menyerap 4.645 tenaga kerja sebagai petani dan buruh tani.',
      image:
        'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Pusat Pendidikan Berkualitas',
      description:
        'Desa Cikadu memiliki infrastruktur pendidikan lengkap mulai dari 9 gedung PAUD, 6 sekolah dasar, 5 SMP, hingga 2 SMA. Dengan 2.130 siswa dan tenaga pendidik yang berkualitas, kami berkomitmen mencerdaskan generasi masa depan',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Pusat Ekonomi dan Kewirausahaan',
      description:
        'Lebih dari 1.175 warga menekuni bidang wiraswasta dan perdagangan, didukung oleh 291 karyawan profesional. Keberagaman mata pencaharian ini menciptakan ekonomi desa yang dinamis dan berkelanjutan dengan anggaran pembangunan mencapai Rp 1,5 miliar.',
      image:
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 overflow-x-hidden">
      {/* Hero Section with Village Background Image */}
      <section
        className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Overlay dengan opacity yang tepat */}
        <div className="absolute inset-0 bg-black/65 sm:bg-black/55 md:bg-black/50 lg:bg-black/45"></div>

        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url(${patternSvg})` }}
        ></div>

        {/* Konten dengan z-index yang tepat */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 z-10">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            {/* Title dengan margin yang tepat */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10 drop-shadow-2xl leading-[1.1] px-4 sm:px-2">
              Selamat Datang di Desa Cikadu
            </h1>

            {/* Subtitle dengan spacing yang benar */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-5xl mx-auto leading-[1.6] drop-shadow-lg px-6 sm:px-8 lg:px-10 xl:px-0">
              Desa yang terletak di Kecamatan Palabuhanratu, Kabupaten Sukabumi, Jawa Barat. 
Kami adalah komunitas 
yang berkembang pesat dengan tetap mempertahankan kearifan lokal dan nilai-nilai 
gotong royong yang mengakar kuat.
            </p>
          </motion.div>

          {/* Stats cards dengan margin yang tepat */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 px-6 sm:px-8 lg:px-10 xl:px-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group w-full"
              >
                <Card className="p-6 sm:p-6 md:p-7 lg:p-8 text-center bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg hover:shadow-xl dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-white dark:hover:bg-gray-700 transform hover:-translate-y-2 transition-all duration-500 hover:scale-105 w-full h-full min-h-[140px] sm:min-h-[160px]">
                  <stat.icon
                    className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 ${stat.color} dark:${stat.color} mx-auto mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 transition-all duration-300`}
                  />
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300 leading-tight px-2">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Enhanced Responsive */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 md:space-y-10 order-2 lg:order-1 px-2 sm:px-0"
            >
              <div className="inline-flex items-center px-4 sm:px-5 py-2.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-sm sm:text-base font-semibold mb-4 sm:mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Sejarah Desa
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-[1.1]">
                Perjalanan Setengah Abad Desa Cikadu
              </h2>
              <div className="space-y-6 sm:space-y-8 text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-[1.7]">
                <p className="border-l-4 border-emerald-500 dark:border-emerald-400 pl-5 sm:pl-6 italic text-base sm:text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200">
                  Desa Cikadu resmi terbentuk pada tahun 1970 dan telah berkembang menjadi salah satu desa 
maju di Kecamatan Palabuhanratu. Berawal dari komunitas pertanian sederhana, kini kami 
telah bertransformasi menjadi desa swakarya dengan klasifikasi "MAJU" yang memadukan 
kearifan tradisional dengan pembangunan modern.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-[1.7]">
                  Selama lebih dari lima dekade, masyarakat Desa Cikadu terus membangun peradaban yang 
berkelanjutan. Dengan dipimpin oleh Kepala Desa Neng Elva Yuliyanti dan didukung oleh 
perangkat desa yang kompeten, kami berkomitmen menciptakan tata kelola pemerintahan 
yang transparan dan partisipatif.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-[1.7]">
                  Saat ini, Desa Cikadu menjadi rujukan pengembangan desa di wilayah Sukabumi Selatan 
dengan berbagai prestasi dalam bidang pembangunan infrastruktur, pemberdayaan masyarakat, 
dan pelestarian lingkungan yang berkelanjutan.
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
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl sm:rounded-3xl blur opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pemandangan menakjubkan Desa Cikadu"
                className="relative rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traditions Section - Enhanced Responsive */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-2 sm:px-0"
          >
            <div className="inline-flex items-center px-4 sm:px-5 py-2.5 rounded-full bg-emerald-200 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-sm sm:text-base font-semibold mb-6 sm:mb-8">
              <Award className="w-4 h-4 mr-2" />
              Potensi & Keunggulan
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-[1.1] px-4 sm:px-0">
              Potensi dan Keunggulan Desa
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-6 sm:px-4 lg:px-0 leading-[1.6]">
              Kekayaan sumber daya alam, potensi ekonomi, dan kearifan budaya lokal yang menjadi 
kekuatan utama pembangunan berkelanjutan Desa Cikadu.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 px-2 sm:px-0">
            {traditions.map((tradition, index) => (
              <motion.div
                key={tradition.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg rounded-xl h-full flex flex-col">
                  <div className="relative overflow-hidden h-48 sm:h-52 md:h-56 lg:h-60 bg-gray-200 dark:bg-gray-700">
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
                            <div class="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
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
                  <div className="p-6 sm:p-6 md:p-7 lg:p-8 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2 leading-[1.2]">
                      {tradition.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-[1.6] flex-1 text-sm sm:text-base md:text-lg">
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
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl sm:rounded-3xl blur opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Keindahan geografis Desa Cikadu"
                className="relative rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6 sm:space-y-8 md:space-y-10 px-2 sm:px-0"
            >
              <div className="inline-flex items-center px-4 sm:px-5 py-2.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-sm sm:text-base font-semibold mb-4 sm:mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                Lokasi & Geografis
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-[1.1]">
                Letak Strategis dan Kekayaan Alam
              </h2>
              <div className="space-y-6 sm:space-y-8 text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-[1.7]">
                <p className="border-l-4 border-emerald-500 dark:border-emerald-400 pl-5 sm:pl-6 italic text-base sm:text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200">
                  Desa Cikadu terletak pada koordinat 106.612609° BT dan -6.973779° LS, dengan posisi 
strategis yang berbatasan dengan Desa Sampora di utara, Desa Tonjong di selatan, 
Desa Pasirsuren/Limusninggal di timur, dan Desa Buniwangi/Citarik di barat.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-[1.7]">
                  Kawasan ini diberkahi mata air alami yang jernih, sungai
                  berkelok yang menenangkan, dan tanah subur yang telah
                  mendukung pertanian selama berabad-abad. Komitmen kami
                  terhadap konservasi lingkungan memastikan bahwa generasi
                  mendatang akan mewarisi keindahan alam yang sama yang kami
                  nikmati hari ini.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-[1.7]">
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

      {/* Vision & Mission Section - Enhanced Design for Desa Cikadu */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100"></div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C16A' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              <Award className="w-4 h-4 mr-2" />
              Visi & Misi Desa
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Visi dan Misi Desa
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Menjadi desa mandiri dan berkelanjutan yang memadukan kearifan
              lokal dengan kemajuan modern untuk kesejahteraan masyarakat.
            </p>
          </motion.div>

          {/* Vision & Mission Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Vision Card */}
            <motion.div
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Visi
                </h3>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed pl-6 font-medium">
                  "Menjadi desa mandiri dan berkelanjutan yang memadukan
                  kearifan lokal dengan kemajuan modern untuk kesejahteraan
                  masyarakat yang berkeadilan dan berwawasan lingkungan."
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Misi
                </h3>
              </div>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg
                      className="w-5 h-5 text-white"
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
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors duration-300">
                      Kelestarian Lingkungan
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Menjaga dan melestarikan lingkungan hidup melalui praktik
                      pembangunan berkelanjutan dan ramah lingkungan.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors duration-300">
                      Pemberdayaan Masyarakat
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Meningkatkan kapasitas dan keterampilan masyarakat melalui
                      program pelatihan dan pemberdayaan ekonomi.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg
                      className="w-5 h-5 text-white"
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
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors duration-300">
                      Inovasi dan Teknologi
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Mengadopsi teknologi modern dan inovasi untuk meningkatkan
                      pelayanan publik dan kesejahteraan masyarakat.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors duration-300">
                      Kesejahteraan Sosial
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Membangun sistem kesejahteraan sosial yang merata dan
                      berkeadilan untuk seluruh lapisan masyarakat.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 lg:p-10 shadow-2xl">
              <p className="text-white text-lg lg:text-xl font-medium leading-relaxed max-w-4xl">
                Bersama-sama kita wujudkan visi dan misi desa melalui
                partisipasi aktif, inovasi berkelanjutan, dan semangat gotong
                royong yang mengakar kuat dalam budaya kita.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
