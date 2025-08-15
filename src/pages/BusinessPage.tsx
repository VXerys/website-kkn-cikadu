import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, ExternalLink, Search, Filter, Star, Users, TrendingUp } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { supabase, Business } from '../services/supabase';

const BusinessPage: React.FC = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Data UMKM dengan bahasa formal dan profesional
  const mockBusinesses: Business[] = [
    {
      id: '1',
      name: 'Kebun Organik Lembah Hijau',
      description:
        'Usaha pertanian organik yang menghasilkan sayuran segar, rempah-rempah berkualitas, dan telur ayam kampung. Menggunakan metode pertanian berkelanjutan untuk mendukung ketahanan pangan lokal.',
      contact: '+62 812-3456-7890',
      location: 'Kawasan Utara Desa Cikadu',
      image_url:
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      created_at: new Date().toISOString(),
      category: 'pertanian'
    },
    {
      id: '2',
      name: 'Sanggar Kerajinan Warisan Nusantara',
      description:
        'Sentra kerajinan tangan yang memproduksi gerabah, tekstil tradisional, dan ukiran kayu. Mengembangkan keterampilan kerajinan turun-temurun dengan sentuhan desain modern.',
      contact: '+62 813-4567-8901',
      location: 'Pusat Desa Cikadu',
      image_url:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      created_at: new Date().toISOString(),
      category: 'kerajinan'
    },
    {
      id: '3',
      name: 'Kafe Pemandangan Gunung',
      description:
        'Kedai kopi lokal yang menyajikan kopi berkualitas tinggi dan makanan ringan tradisional. Menawarkan suasana nyaman dengan pemandangan alam pegunungan yang indah.',
      contact: '+62 814-5678-9012',
      location: 'Jalan Utama Desa Cikadu',
      image_url:
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      created_at: new Date().toISOString(),
      category: 'kuliner'
    },
    {
      id: '4',
      name: 'Jasa Pemandu Wisata Alam',
      description:
        'Layanan pemandu wisata profesional untuk aktivitas hiking, pengamatan burung, dan tur budaya. Dipandu oleh masyarakat lokal yang berpengalaman dan berlisensi.',
      contact: '+62 815-6789-0123',
      location: 'Pusat Informasi Wisata Cikadu',
      image_url:
        'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      created_at: new Date().toISOString(),
      category: 'jasa'
    },
    {
      id: '5',
      name: 'Toko Roti Fajar Berkah',
      description:
        'Usaha produksi roti dan kue tradisional dengan oven kayu bakar. Menggunakan resep keluarga dan bahan-bahan lokal berkualitas untuk menghasilkan produk yang lezat dan bergizi.',
      contact: '+62 816-7890-1234',
      location: 'Kampung Tengah Desa Cikadu',
      image_url:
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      created_at: new Date().toISOString(),
      category: 'kuliner'
    },
    {
      id: '6',
      name: 'Apotek Herbal Tradisional',
      description:
        'Penyedia ramuan herbal dan produk kesehatan alami dari tanaman obat lokal. Melayani konsultasi kesehatan dengan ahli herbal bersertifikat untuk pengobatan tradisional.',
      contact: '+62 817-8901-2345',
      location: 'Kawasan Timur Desa Cikadu',
      image_url:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      created_at: new Date().toISOString(),
      category: 'kesehatan'
    }
  ];

  const sortOptions = [
    { value: 'name', label: 'Nama (A-Z)' },
    { value: 'location', label: 'Lokasi' },
    { value: 'created_at', label: 'Terbaru' },
    { value: 'category', label: 'Kategori' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'Semua Kategori' },
    { value: 'pertanian', label: 'Pertanian' },
    { value: 'kerajinan', label: 'Kerajinan' },
    { value: 'kuliner', label: 'Kuliner' },
    { value: 'jasa', label: 'Jasa' },
    { value: 'kesehatan', label: 'Kesehatan' }
  ];

  useEffect(() => {
    fetchBusinesses();
  }, []);

  useEffect(() => {
    filterAndSortBusinesses();
  }, [businesses, searchTerm, sortBy, selectedCategory]);

  const fetchBusinesses = async () => {
    try {
      const { data, error } = await supabase
        .from('businesses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.log('Menggunakan data lokal karena Supabase belum dikonfigurasi');
        setBusinesses(mockBusinesses);
      } else {
        setBusinesses(data || mockBusinesses);
      }
    } catch (error) {
      console.log('Menggunakan data lokal:', error);
      setBusinesses(mockBusinesses);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortBusinesses = () => {
    let filtered = businesses;

    // Filter berdasarkan kategori
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(business => business.category === selectedCategory);
    }

    // Filter berdasarkan pencarian
    if (searchTerm) {
      filtered = filtered.filter(
        (business) =>
          business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          business.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          business.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Urutkan data
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'location':
          return a.location.localeCompare(b.location);
        case 'category':
          return (a.category || '').localeCompare(b.category || '');
        case 'created_at':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        default:
          return 0;
      }
    });

    setFilteredBusinesses(filtered);
  };

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsApp = (phoneNumber: string, businessName: string) => {
    const message = `Halo, saya tertarik dengan ${businessName}. Bisakah Anda memberikan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section dengan Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image dengan Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
            }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center bg-emerald-600 text-white px-4 py-2 rounded-full">
                <TrendingUp className="h-5 w-5 mr-2" />
                <span className="font-semibold">Ekonomi Desa</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Usaha Mikro Kecil Menengah
              <span className="block text-emerald-400">Desa Cikadu</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Mendukung pertumbuhan ekonomi lokal melalui pemberdayaan UMKM yang berkelanjutan 
              dan pemanfaatan potensi sumber daya desa yang optimal untuk kesejahteraan masyarakat.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">{filteredBusinesses.length}+</div>
                <div className="text-gray-200">UMKM Aktif</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">5</div>
                <div className="text-gray-200">Kategori Usaha</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-200">Lapangan Kerja</div>
              </div>
            </div>
          </motion.div>

          {/* Search and Filter Section - Responsive */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
            >
              {/* Mobile-first responsive layout */}
              <div className="space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari nama usaha, deskripsi, atau lokasi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
                  />
                </div>
                
                {/* Filters - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 rounded-xl border border-emerald-200 dark:border-emerald-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none cursor-pointer font-medium"
                      data-scroll-to-top="false"
                    >
                      {categoryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Sort Filter */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-emerald-200 dark:border-emerald-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none cursor-pointer font-medium"
                      data-scroll-to-top="false"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          Urutkan: {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Business */}
      {filteredBusinesses.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-4">
                  <Star className="h-4 w-4 mr-2" />
                  <span className="font-semibold">UMKM Unggulan</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Usaha Terdepan di Desa Cikadu
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Menampilkan UMKM dengan kontribusi signifikan terhadap perekonomian desa
                </p>
              </div>
              
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto min-h-[400px]">
                    <img
                      src={filteredBusinesses[0].image_url}
                      alt={filteredBusinesses[0].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold shadow-lg">
                        <Star className="h-4 w-4 mr-2 fill-current" />
                        UNGGULAN
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="font-medium">{filteredBusinesses[0].location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                      {filteredBusinesses[0].name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                      {filteredBusinesses[0].description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        variant="primary"
                        size="lg"
                        icon={Phone}
                        onClick={() => handleCall(filteredBusinesses[0].contact)}
                        className="flex-1"
                        scrollToTop={false}
                      >
                        Hubungi Langsung
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        icon={ExternalLink}
                        onClick={() => handleWhatsApp(filteredBusinesses[0].contact, filteredBusinesses[0].name)}
                        scrollToTop={false}
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Businesses Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              <Users className="h-4 w-4 mr-2" />
              <span className="font-semibold">Direktori UMKM</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Semua Usaha Lokal Desa Cikadu
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kolaborasi dan dukungan untuk kemajuan ekonomi berkelanjutan
            </p>
          </motion.div>

          {filteredBusinesses.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <Search className="h-16 w-16 text-gray-400 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Tidak Ada Hasil Pencarian
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Silakan coba kata kunci yang berbeda atau ubah filter pencarian
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredBusinesses.slice(1).map((business, index) => (
                <motion.div
                  key={business.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-500 group border-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={business.image_url}
                        alt={business.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                          {business.category || 'Umum'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 transition-colors">
                        {business.name}
                      </h3>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                        <span>{business.location}</span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed text-sm">
                        {business.description}
                      </p>
                      
                      <div className="flex flex-col gap-3">
                        <Button
                          variant="primary"
                          size="sm"
                          icon={Phone}
                          onClick={() => handleCall(business.contact)}
                          className="w-full"
                          scrollToTop={false}
                        >
                          Hubungi Sekarang
                        </Button>
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleWhatsApp(business.contact, business.name)}
                            className="text-xs"
                            scrollToTop={false}
                          >
                            WhatsApp
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            icon={ExternalLink}
                            onClick={() => window.open(`/map?business=${business.id}`, '_blank')}
                            className="text-xs"
                            scrollToTop={false}
                          >
                            Lokasi
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bergabung Memajukan Ekonomi Desa
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Setiap dukungan Anda terhadap UMKM lokal adalah investasi untuk kemajuan 
              ekonomi berkelanjutan dan pemberdayaan masyarakat Desa Cikadu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold shadow-lg"
                scrollToTop={false}
              >
                Jelajahi Lebih Banyak UMKM
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-bold"
                onClick={() => window.open('/kontak', '_blank')}
                scrollToTop={false}
              >
                Daftarkan Usaha Anda
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;