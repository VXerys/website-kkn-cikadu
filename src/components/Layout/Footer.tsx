import React from 'react';
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Home,
  Info,
  Newspaper,
  Briefcase,
  Users, // Fixed: Added missing Users import
  MessageCircle,
  MapPin,
  ExternalLink,
} from 'lucide-react';

// Import logo sebagai URL - sesuaikan path dengan struktur folder
import logoUrl from '../../assets/logo-circle.svg';

// TypeScript Interfaces untuk type safety
interface NavigationItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

interface SocialMediaLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  hoverColor: string;
  ariaLabel: string;
}

const Footer: React.FC = () => {
  // Navigation items dengan type safety
  const navItems: NavigationItem[] = [
    { name: 'Beranda', path: '/', icon: Home },
    { name: 'Tentang', path: '/about', icon: Info },
    { name: 'Organisasi', path: '/organization', icon: Users },
    { name: 'Berita', path: '/news', icon: Newspaper },
    { name: 'Ekonomi', path: '/business', icon: Briefcase },
  ];

  // Contact information dengan type safety
  const contactInfo: ContactInfo = {
    address: 'Desa Cikadu, Kecamatan Pelabuhanratu, Kabupaten Sukabumi, Jawa Barat',
    phone: '+62 123-456-789',
    email: 'info@desacikadu.id'
  };

  // Social media links dengan type safety
  const socialMediaLinks: SocialMediaLink[] = [
    {
      platform: 'Facebook',
      url: 'https://facebook.com/desacikadu',
      icon: Facebook,
      hoverColor: 'hover:bg-blue-600',
      ariaLabel: 'Kunjungi halaman Facebook Desa Cikadu'
    },
    {
      platform: 'Instagram', 
      url: 'https://instagram.com/desacikadu',
      icon: Instagram,
      hoverColor: 'hover:bg-pink-600',
      ariaLabel: 'Kunjungi halaman Instagram Desa Cikadu'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/desacikadu', 
      icon: Twitter,
      hoverColor: 'hover:bg-sky-500',
      ariaLabel: 'Kunjungi halaman Twitter Desa Cikadu'
    }
  ];

  // Additional footer links
  const footerLinks: NavigationItem[] = [
    { name: 'Kebijakan Privasi', path: '/privacy', icon: ExternalLink },
    { name: 'Syarat & Ketentuan', path: '/terms', icon: ExternalLink },
    { name: 'Bantuan', path: '/help', icon: ExternalLink },
  ];

  // Navigation handler dengan error handling
  const handleNavigation = (path: string): void => {
    try {
      if (path.startsWith('http')) {
        window.open(path, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = path;
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  // Smooth scroll to top dengan error handling
  const handleScrollToTop = (): void => {
    try {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    } catch (error) {
      // Fallback untuk browser yang tidak mendukung smooth scroll
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Brand Section dengan Logo SVG */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <img
                src={logoUrl}
                alt="Logo Desa Cikadu"
                className="h-12 w-12 lg:h-14 lg:w-14 object-contain"
                onError={(e) => {
                  // Fallback jika logo tidak dapat dimuat
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold text-emerald-400">
                  Desa Cikadu
                </span>
                <span className="text-sm text-gray-400">
                  Pelabuhanratu, Sukabumi
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              Temukan keajaiban dan pesona budaya desa kami melalui pengalaman
              interaktif yang menakjubkan dan koneksi komunitas yang menghangatkan hati.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <button
                onClick={handleScrollToTop}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded-md transition-all duration-200 font-semibold shadow-sm hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Kembali ke bagian atas halaman"
              >
                Kembali ke Atas
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-base lg:text-lg font-semibold text-white border-b-2 border-emerald-400 pb-2 inline-block">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="flex items-center space-x-3 text-gray-400 hover:text-emerald-400 transition-all duration-200 text-sm lg:text-base group w-full text-left font-medium p-2 rounded-md hover:bg-gray-800"
                      aria-label={`Navigasi ke halaman ${item.name}`}
                    >
                      <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-base lg:text-lg font-semibold text-white border-b-2 border-emerald-400 pb-2 inline-block">
              Informasi Kontak
            </h3>
            <ul className="space-y-4 text-sm lg:text-base">
              
              {/* Alamat */}
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {contactInfo.address}
                </span>
              </li>

              {/* Telepon */}
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-emerald-400 transition-colors hover:underline font-medium focus:outline-none focus:text-emerald-400"
                  aria-label={`Telepon ${contactInfo.phone}`}
                >
                  {contactInfo.phone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-emerald-400 transition-colors break-all hover:underline font-medium focus:outline-none focus:text-emerald-400"
                  aria-label={`Email ke ${contactInfo.email}`}
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>

            {/* Call to Action Button */}
            <div className="pt-2">
              <button
                onClick={() => handleNavigation('/about')}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-md transition-all duration-200 hover:scale-105 font-semibold shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Pelajari lebih lanjut tentang Desa Cikadu"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Tentang Kami</span>
              </button>
            </div>
          </div>

          {/* Social Media & Additional Info */}
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-base lg:text-lg font-semibold text-white border-b-2 border-emerald-400 pb-2 inline-block">
              Media Sosial
            </h3>
            
            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-3">
              {socialMediaLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800 rounded-lg ${social.hoverColor} transition-all duration-200 hover:scale-105 group shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
                    aria-label={social.ariaLabel}
                  >
                    <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>

            <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
              Ikuti media sosial kami untuk mendapatkan informasi terkini tentang kegiatan, 
              pengumuman, dan perkembangan desa.
            </p>

            {/* Jam Operasional */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg border-l-4 border-emerald-400">
              <h4 className="font-semibold text-emerald-400 mb-2">Jam Pelayanan</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span>Senin - Jumat:</span>
                  <span className="font-medium">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu:</span>
                  <span className="font-medium">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu:</span>
                  <span className="font-medium text-red-400">Tutup</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          
          {/* Copyright & Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-xs lg:text-sm text-gray-400 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Desa Cikadu. 
              <span className="hidden sm:inline"> Dikembangkan dengan ❤️ untuk kemajuan masyarakat desa.</span>
            </p>
            
            {/* Footer Navigation Links */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs lg:text-sm">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(link.path)}
                  className="text-gray-400 hover:text-emerald-400 transition-colors hover:underline font-medium focus:outline-none focus:text-emerald-400"
                  aria-label={`Navigasi ke halaman ${link.name}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto">
              Website ini dibuat untuk memperkenalkan potensi luar biasa desa dan mendukung
              pengembangan ekonomi lokal yang berkelanjutan. Mari bersama-sama membangun desa yang maju dan sejahtera.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;