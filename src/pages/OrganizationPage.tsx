import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Crown,
  FileText,
  Calculator,
  Briefcase,
  MapPin,
  Shield,
  Building,
  Award,
  User,
} from 'lucide-react';
import Card from '../components/UI/Card';

interface OfficialData {
  id: string;
  name: string;
  position: string;
  department?: string;
  village?: string;
  photo: string;
  isHead?: boolean;
}

const OrganizationPage: React.FC = () => {
  // Data struktur organisasi
  const headOfVillage: OfficialData = {
    id: '1',
    name: 'H. Ahmad Suryadi, S.Sos',
    position: 'Kepala Desa',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    isHead: true,
  };

  const villageOfficials: OfficialData[] = [
    {
      id: '2',
      name: 'Dra. Siti Nurhaliza',
      position: 'Sekretaris Desa',
      department: 'Administrasi',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '3',
      name: 'Budi Santoso, S.E',
      position: 'Bendahara Desa',
      department: 'Keuangan',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '4',
      name: 'Rina Kartika, S.Pd',
      position: 'Kaur Perencanaan',
      department: 'Perencanaan',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '5',
      name: 'Agus Priyanto',
      position: 'Kaur Umum',
      department: 'Umum',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '6',
      name: 'Dewi Sartika, S.Kom',
      position: 'Kaur Keuangan',
      department: 'Keuangan',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '7',
      name: 'Muhammad Rizki',
      position: 'Kaur Pembangunan',
      department: 'Pembangunan',
      photo: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
  ];

  const villageHeads: OfficialData[] = [
    {
      id: '8',
      name: 'Joko Widodo',
      position: 'Kepala Dusun I',
      village: 'Dusun 1',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '9',
      name: 'Sari Indah',
      position: 'Kepala Dusun II',
      village: 'Dusun 2',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '10',
      name: 'Bambang Sutrisno',
      position: 'Kepala Dusun III',
      village: 'Dusun 3',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '11',
      name: 'Lestari Wulandari',
      position: 'Kepala Dusun IV',
      village: 'Dusun 4',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '12',
      name: 'Hendra Gunawan',
      position: 'Kepala Dusun V',
      village: 'Dusun 5',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '13',
      name: 'Ratna Sari',
      position: 'Kepala Dusun VI',
      village: 'Dusun 6',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
  ];

  const getDepartmentIcon = (department?: string) => {
    switch (department) {
      case 'Administrasi':
        return FileText;
      case 'Keuangan':
        return Calculator;
      case 'Perencanaan':
        return Briefcase;
      case 'Umum':
        return Users;
      case 'Pembangunan':
        return Building;
      default:
        return User;
    }
  };

  const getDepartmentColor = (department?: string) => {
    switch (department) {
      case 'Administrasi':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700';
      case 'Keuangan':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700';
      case 'Perencanaan':
        return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700';
      case 'Umum':
        return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700';
      case 'Pembangunan':
        return 'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-700';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/30 dark:text-gray-300 dark:border-gray-700';
    }
  };

  const getVillageColor = (village?: string) => {
    const colors = [
      'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700',
      'bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700',
      'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700',
      'bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-700',
      'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700',
      'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700',
    ];
    
    if (!village) return colors[0];
    const index = parseInt(village.replace('Dusun ', '')) - 1;
    return colors[index] || colors[0];
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-50 dark:from-gray-900 dark:via-emerald-900/10 dark:to-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-semibold">Pemerintahan Desa</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Struktur Organisasi
              <span className="block text-emerald-600 dark:text-emerald-400">
                Pemerintah Desa Cikadu
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transparansi dan akuntabilitas dalam pelayanan publik melalui 
              struktur organisasi yang jelas dan profesional. Mengenal lebih dekat 
              perangkat desa yang berkomitmen melayani masyarakat Desa Cikadu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kepala Desa Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
              <Crown className="w-4 h-4 mr-2" />
              <span className="font-semibold">Pimpinan Desa</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Kepala Desa
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Card className="max-w-md w-full overflow-hidden bg-gradient-to-br from-white to-emerald-50 dark:from-gray-800 dark:to-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-700 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="relative">
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    <Crown className="inline w-3 h-3 mr-1" />
                    KEPALA DESA
                  </div>
                </div>
                <img
                  src={headOfVillage.photo}
                  alt={headOfVillage.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {headOfVillage.name}
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mb-4">
                  {headOfVillage.position}
                </p>
                <div className="flex items-center justify-center">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-700">
                    <Award className="inline w-4 h-4 mr-2" />
                    Periode 2019-2025
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Perangkat Desa Section */}
      <section className="py-12 md:py-16 bg-white/50 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
              <Users className="w-4 h-4 mr-2" />
              <span className="font-semibold">Tim Kerja</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Perangkat Desa
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tim profesional yang berkomitmen memberikan pelayanan terbaik 
              untuk kemajuan dan kesejahteraan masyarakat Desa Cikadu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {villageOfficials.map((official, index) => {
              const IconComponent = getDepartmentIcon(official.department);
              return (
                <motion.div
                  key={official.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 hover:scale-105">
                    <div className="relative">
                      <img
                        src={official.photo}
                        alt={official.name}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getDepartmentColor(official.department)}`}>
                          <IconComponent className="inline w-3 h-3 mr-1" />
                          {official.department}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        {official.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">
                        {official.position}
                      </p>
                      <div className="flex items-center justify-center">
                        <div className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                          <Briefcase className="inline w-3 h-3 mr-1" />
                          Perangkat Desa
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kepala Dusun Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="font-semibold">Wilayah Dusun</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kepala Dusun (Kadus)
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Pemimpin di tingkat dusun yang berperan sebagai penghubung antara 
              masyarakat dengan pemerintah desa dalam pembangunan wilayah
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {villageHeads.map((head, index) => (
              <motion.div
                key={head.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 hover:scale-105">
                  <div className="relative">
                    <img
                      src={head.photo}
                      alt={head.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getVillageColor(head.village)}`}>
                        <MapPin className="inline w-3 h-3 mr-1" />
                        {head.village}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {head.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">
                      {head.position}
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-200 dark:border-emerald-700">
                        <Users className="inline w-3 h-3 mr-1" />
                        Kepala Dusun
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Melayani dengan Dedikasi
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Struktur organisasi yang solid dan profesional untuk memberikan 
              pelayanan terbaik bagi seluruh masyarakat Desa Cikadu. 
              Bersama membangun desa yang maju dan sejahtera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/20">
                <Users className="inline w-5 h-5 mr-2" />
                <span className="font-semibold">13 Perangkat Desa</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/20">
                <MapPin className="inline w-5 h-5 mr-2" />
                <span className="font-semibold">6 Wilayah Dusun</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OrganizationPage;