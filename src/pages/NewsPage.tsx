import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  User,
  Search,
  Filter,
  ArrowRight,
  TrendingUp,
  BookOpen,
  ChevronDown,
  X,
  FileText,
  Clock,
} from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { supabase } from '../services/supabase';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  author: string;
  category: string;
  created_at: string;
}

const NewsPage: React.FC = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const mockArticles: NewsArticle[] = [
    {
      id: "1",
      title:
        "Kegiatan Belajar Mengajar Sesuai Jadwal KBM Sekolah di Desa Cikadu",
      excerpt:
        "Mahasiswa KKN Universitas Nusa Putra menyelenggarakan kegiatan belajar mengajar guna meningkatkan kualitas pendidikan dan membantu mahasiswa agar dapat beradaptasi dalam belajar mengajar di Desa Cikadu.",
      content: `
        

<p>
  Kegiatan belajar mengajar (KBM) oleh mahasiswa Kuliah Kerja Nyata (KKN) berlangsung di sekolah-sekolah Desa Cikadu, Kecamatan Cikadu, Kabupaten Sukabumi. Program ini dilaksanakan dengan menyesuaikan jadwal KBM di sekolah agar tidak mengganggu proses pembelajaran utama.
</p>

<p>
  Pelaksanaan kegiatan dimulai sejak pagi hingga siang hari, mengikuti jam belajar siswa. Mahasiswa KKN terlibat aktif membantu guru dalam menyampaikan materi pelajaran, memberikan bimbingan tambahan, serta mendampingi siswa dalam kegiatan literasi dan numerasi. Metode pengajaran yang digunakan juga disesuaikan dengan kebutuhan masing-masing kelas, mulai dari jenjang sekolah dasar hingga menengah.
</p>

<p>
  Tujuan utama program ini adalah memberikan pengalaman belajar yang lebih variatif bagi siswa sekaligus melatih mahasiswa agar terbiasa mengajar di lapangan. Kehadiran mahasiswa di sekolah diharapkan mampu menambah motivasi siswa dalam belajar.
</p>

<p>
  Bagi sekolah, kegiatan ini menjadi dukungan tambahan dalam mendampingi siswa, terutama pada kelas yang membutuhkan perhatian lebih. Sementara bagi mahasiswa, kegiatan tersebut menjadi pengalaman berharga dalam menerapkan ilmu yang diperoleh di kampus.
</p>

<p>
  Melalui program belajar mengajar ini, kualitas pendidikan di Desa Cikadu diharapkan semakin meningkat. Kegiatan ini juga memperkuat kerja sama antara sekolah, masyarakat, dan perguruan tinggi, serta memberikan kontribusi nyata dalam mendorong peningkatan mutu pendidikan di wilayah pedesaan.
</p>

      `,
      image_url:
        "/Belajar-mengajar.jpeg",
      author: "Tim KKN Universitas Nusa Putra",
      category: "pendidikan",
      created_at: "2025-09-09T08:02:00Z",
    },
    {
      id: '2',
      title: 'Gotong Royong Renovasi Mesjid',
      excerpt:
        'Masyarakat Desa Cikadu bersama mahasiswa KKN bergotong royong membantu renovasi mesjid.',
      content:
        `

<p>
  Mahasiswa Kuliah Kerja Nyata (KKN) Desa Cikadu, Kecamatan Pelabuhanratu, Kabupaten Sukabumi bersama masyarakat setempat melaksanakan kerja bakti renovasi masjid pada Sabtu (23/8). Kegiatan gotong royong ini bertujuan memperbaiki fasilitas ibadah sekaligus mendukung pembangunan masjid menjadi dua tingkat agar lebih nyaman digunakan oleh warga.
</p>

<p>
  Sejak pagi, mahasiswa KKN aktif membantu warga dalam proses renovasi. Salah satu bentuk partisipasi mereka adalah dengan mengangkat ember berisi semen secara estafet, yang kemudian digunakan untuk pengecoran lantai dua masjid. Metode estafet ini memudahkan proses pemindahan bahan bangunan dari bawah ke atas, sehingga pekerjaan dapat berlangsung lebih cepat dan efisien.
</p>

<p>
  Kegiatan kerja bakti ini tidak hanya berfokus pada pembangunan fisik masjid, tetapi juga mempererat kebersamaan antara mahasiswa dan masyarakat Desa Cikadu. Semangat gotong royong terlihat jelas dari antusiasme warga yang terlibat, mulai dari remaja hingga orang tua.
</p>

</p>

<p>
  Sejak pagi, mahasiswa KKN aktif membantu warga dalam proses renovasi. Salah satu bentuk partisipasi mereka adalah dengan mengangkat ember berisi semen secara estafet, yang kemudian digunakan untuk pengecoran lantai dua masjid. Metode estafet ini memudahkan proses pemindahan bahan bangunan dari bawah ke atas, sehingga pekerjaan dapat berlangsung lebih cepat dan efisien.
</p>

<p>
  Kegiatan kerja bakti ini tidak hanya berfokus pada pembangunan fisik masjid, tetapi juga mempererat kebersamaan antara mahasiswa dan masyarakat Desa Cikadu. Semangat gotong royong terlihat jelas dari antusiasme warga yang terlibat, mulai dari remaja hingga orang tua.
</p>

<p>
  Melalui kegiatan ini, mahasiswa KKN berupaya memberikan kontribusi nyata bagi masyarakat. Renovasi masjid yang kini berkembang menjadi dua tingkat diharapkan dapat memberikan manfaat jangka panjang, baik sebagai tempat ibadah maupun pusat aktivitas keagamaan dan sosial di Desa Cikadu.
</p>
`,
      image_url:
        '/Kerja-bakti.jpeg',
      author: 'KKN Kelompok 45',
      category: 'infrastruktur',
      created_at: '2025-09-09T08:19:03Z',
    },
    {
      id: "3",
      title: "Kegiatan Minggonan atau Mengaji di Desa Cikadu",
      excerpt:
        "Kegiatan minggonan atau mengaji rutin dilaksanakan masyarakat Desa Cikadu setiap minggu di masjid dan mushola. Tradisi ini memperkuat pemahaman agama, menjaga silaturahmi antarwarga, sekaligus menjadi wadah kebersamaan sosial masyarakat desa.",
      content: `
<p>
  Masyarakat Desa Cikadu, Kecamatan Pelabuhanratu, Kabupaten Sukabumi secara rutin melaksanakan kegiatan minggonan atau mengaji setiap minggu. Kegiatan ini berlangsung di masjid dan mushola desa dengan tujuan memperkuat pemahaman agama serta menjaga silaturahmi antarwarga.
</p>

<p>
  Minggonan biasanya dilaksanakan pada malam hari setelah salat Isya. Rangkaian acara dimulai dengan pembacaan ayat suci Al-Qur’an secara bersama-sama, dilanjutkan dengan kajian singkat tentang akhlak, ibadah, serta nilai-nilai kehidupan sehari-hari. Anak-anak, remaja, hingga orang tua turut hadir sehingga suasana kegiatan berlangsung khidmat namun penuh kebersamaan.
</p>

<p>
  Selain menjadi sarana belajar agama, kegiatan minggonan juga menjadi wadah untuk berdiskusi tentang persoalan sosial kemasyarakatan. Dengan demikian, masyarakat tidak hanya memperoleh ilmu keagamaan, tetapi juga mampu mempererat hubungan sosial yang harmonis.
</p>

<p>
  Pelaksanaan kegiatan ini berjalan dengan tertib berkat dukungan masyarakat yang kompak menjaga tradisi. Dampaknya terlihat dari meningkatnya semangat belajar agama pada anak-anak serta tumbuhnya rasa kebersamaan antarwarga. Tradisi minggonan sekaligus memperkuat identitas Desa Cikadu sebagai masyarakat yang religius dan menjunjung tinggi nilai gotong royong.
</p>
`,
      image_url:
        "/Minggonan.jpeg",
      author: "KKN Kelompok 45",
      category: "Keagamaan",
      created_at: "2025-09-09T08:25:50Z",
        },
    {
      id: '4',
      title: 'Seminar Pencegahan Stunting dan Pengembangan UMKM di Desa Cikadu',
      excerpt:
        'Kegiatan ini memberikan wawasan kesehatan keluarga serta strategi usaha desa untuk mendorong terciptanya generasi sehat dan wirausaha mandiri.',
      content:
        `

<p>
  Mahasiswa Kuliah Kerja Nyata (KKN) Desa Cikadu, Kecamatan Pelabuhanratu, Kabupaten Sukabumi menyelenggarakan seminar tentang pencegahan stunting dan pengembangan Usaha Mikro, Kecil, dan Menengah (UMKM) pada Sabtu, 23 Agustus 2025. Kegiatan ini berlangsung di Balai Latihan Kerja Komunitas dengan diikuti oleh warga dari berbagai kalangan, mulai dari ibu rumah tangga, pemuda, hingga pelaku usaha kecil.
</p>

<p>
  Seminar dimulai dengan pemaparan mengenai stunting, meliputi penyebab, dampak jangka panjang, serta langkah-langkah pencegahan melalui pola makan sehat, perawatan ibu hamil, dan pemenuhan gizi anak. Materi ini diberikan untuk meningkatkan kesadaran masyarakat akan pentingnya kesehatan keluarga, khususnya generasi muda.
</p>

<p>
  Selanjutnya, kegiatan dilanjutkan dengan seminar UMKM yang membahas peluang usaha di tingkat desa, strategi pemasaran, serta pengelolaan keuangan sederhana. Peserta diajak untuk memahami potensi lokal yang dapat dikembangkan menjadi produk bernilai jual, sehingga mampu meningkatkan perekonomian keluarga dan masyarakat.
</p>

<p>
  Melalui dua rangkaian seminar ini, masyarakat mendapatkan wawasan yang bermanfaat baik di bidang kesehatan maupun ekonomi. Dampak yang diharapkan adalah terciptanya generasi yang lebih sehat serta lahirnya wirausaha desa yang mandiri. Kegiatan ini sekaligus menjadi bukti nyata kontribusi mahasiswa KKN dalam mendukung pembangunan masyarakat Desa Cikadu secara berkelanjutan.
</p>
`,
      image_url:
        '/Seminar-stunting-umkm.jpeg',
      author: 'KKN Kelompok 45',
      category: 'Kesehatan dan Ekonomi',
      created_at: '2025-09-09T08:25:50Z',
    },
    {
      id: '5',
      title: 'Mahasiswa KKN Ikut Sukseskan Perayaan 17 Agustus di Desa Cikadu',
      excerpt:
        'Mahasiswa KKN Desa Cikadu berpartisipasi dalam perayaan HUT ke-80 RI dengan mendukung lomba di sekolah dan desa. Kegiatan ini mempererat kebersamaan serta menumbuhkan semangat nasionalisme masyarakat.',
      content:
        'Program beasiswa ini merupakan hasil kerjasama antara pemerintah desa dengan berbagai pihak...',
      image_url:
        '/17-agustusan.jpeg',
      author: 'KKN Kelompok 45',
      category: 'Ulang Tahun',
      created_at: '2024-01-05T16:45:00Z',
    },
    {
      id: '6',
      title: 'Mahasiswa KKN Bantu Pelaksanaan Imunisasi di Sekolah Desa Cikadu',
      excerpt:
        'Mahasiswa KKN Desa Cikadu membantu pelaksanaan imunisasi anak di empat sekolah bersama Puskesmas Citarik. Mereka berperan dalam pengaturan siswa, pencatatan, dan pendampingan agar proses imunisasi berjalan lancar serta nyaman bagi anak-anak.',
      content:
        `


<p>
Mahasiswa Kuliah Kerja Nyata (KKN) Desa Cikadu, Kecamatan Pelabuhanratu, Kabupaten Sukabumi turut membantu pelaksanaan imunisasi anak yang dilaksanakan oleh Puskesmas Citarik pada tahun 2025. Kegiatan ini berlangsung di empat sekolah, yaitu SDN Martadinata dan SDN Gentong pada 20 Agustus, serta SDN Cikadu dan MI Cikadu pada 22 Agustus 2025.
</p>

<p>
Imunisasi diberikan kepada siswa kelas 1 (laki-laki dan perempuan) serta siswa kelas 6 khusus perempuan. Proses imunisasi dilakukan langsung oleh tenaga kesehatan dari Puskesmas Citarik dengan dukungan pihak sekolah. Mahasiswa KKN berperan membantu dalam pengaturan siswa, pencatatan data, serta mendampingi anak-anak agar lebih tenang saat proses imunisasi berlangsung.
</p>

<p>
Seluruh kegiatan berjalan dengan tertib dan lancar. Anak-anak dipanggil secara bergiliran, sementara guru dan mahasiswa memastikan suasana tetap kondusif. Mahasiswa juga membantu memberikan edukasi ringan mengenai pentingnya imunisasi untuk menjaga kesehatan dan mencegah penyakit sejak dini.
</p>

<p>
Melalui kegiatan ini, diharapkan siswa dapat terlindungi dari berbagai penyakit menular dan tumbuh menjadi generasi yang sehat. Kehadiran mahasiswa KKN menjadi bentuk dukungan nyata terhadap program kesehatan pemerintah sekaligus wujud pengabdian kepada masyarakat Desa Cikadu.
</p>
`,
      image_url:
        'Imunisasi.jpeg',
      author: 'KKN Kelompok 45',
      category: 'Kesehatan',
      created_at: '2024-01-03T08:20:00Z',
    },
    {
      id: '7',
      title: 'Mahasiswa KKN Ikut Serta dalam Peringatan Maulid Nabi Muhammad SAW di Desa Cikadu',
      excerpt:
        'Mahasiswa KKN Desa Cikadu ikut serta dalam peringatan Maulid Nabi Muhammad SAW di Kampung Batu Nunggul. Acara berlangsung khidmat dengan lantunan shalawat, tausiyah, dan doa bersama, sekaligus memperkuat nilai persaudaraan serta tradisi keagamaan masyarakat.',
      content:
        `

<p>
Mahasiswa Kuliah Kerja Nyata (KKN) Desa Cikadu, Kecamatan Pelabuhanratu, Kabupaten Sukabumi ikut serta dalam peringatan Maulid Nabi Muhammad SAW yang dilaksanakan di Kampung Batu Nunggul, Desa Cikadu, pada Senin (25/8/2025). Kegiatan ini dihadiri oleh warga setempat, tokoh agama, serta para pemuda desa sebagai bentuk rasa syukur sekaligus upaya meneladani akhlak Nabi Muhammad SAW.
</p>

<p>
Acara dimulai dengan pembacaan ayat suci Al-Qur’an, dilanjutkan dengan lantunan shalawat, tausiyah, dan doa bersama. Suasana khidmat dan penuh kebersamaan tercipta ketika masyarakat berkumpul untuk memperingati hari kelahiran Nabi. Selain itu, kegiatan juga diwarnai dengan partisipasi anak-anak dan remaja, yang menambah semarak acara tanpa mengurangi nilai religius.
</p>

<p>
Keterlibatan mahasiswa KKN dalam kegiatan ini menunjukkan dukungan mereka terhadap pelestarian tradisi keagamaan di masyarakat. Melalui peringatan Maulid Nabi, warga semakin memperkuat nilai persaudaraan, gotong royong, serta semangat religius yang sudah mengakar di Desa Cikadu.
</p>

<p>
Dengan terselenggaranya acara ini, masyarakat berharap tradisi keagamaan dapat terus terjaga dan menjadi sarana pembinaan generasi muda agar selalu meneladani ajaran Nabi Muhammad SAW dalam kehidupan sehari-hari.
</p>

`,
      image_url:
        'Maulid.jpeg',
      author: 'KKN Kelompok 45',
      category: 'Keagamaan',
      created_at: '2024-01-03T08:20:00Z',
    },
            {
      id: '8',
      title: 'Peresmian peta administrasi dan peta mitigasi bencana, seminar edukasi, serta lomba untuk masyarakat',
      excerpt:
        'Mahasiswa KKN Desa Cikadu menggelar peresmian peta administrasi dan peta mitigasi bencana, seminar edukasi, serta lomba untuk masyarakat. Kegiatan ini bertujuan meningkatkan pengetahuan, kesadaran lingkungan, dan kebersamaan warga.',
      content:
`
<h1>Rangkaian Kegiatan Mahasiswa KKN di Desa Cikadu</h1>

<p>
  Mahasiswa Kuliah Kerja Nyata (KKN) Desa Cikadu, Kecamatan Pelabuhanratu, Kabupaten Sukabumi menggelar rangkaian kegiatan pada Minggu (8/9), meliputi peresmian peta administrasi desa, peta mitigasi bencana, seminar edukasi, serta lomba untuk siswa dan masyarakat umum. Kegiatan ini dilaksanakan di balai desa dengan melibatkan perangkat desa, tokoh masyarakat, serta warga sekitar.
</p>

<p>
  Acara diawali dengan peresmian peta administrasi desa dan peta mitigasi bencana. Peta tersebut berfungsi sebagai panduan tata wilayah sekaligus sarana informasi dalam menghadapi potensi bencana di Desa Cikadu. Kehadirannya diharapkan memudahkan masyarakat dalam memahami kondisi wilayah dan meningkatkan kesiapsiagaan bencana.
</p>

<p>
  Selanjutnya, seminar edukasi menghadirkan tiga tema penting, yaitu anti bullying dan pencegahan kekerasan seksual, edukasi pengelolaan sampah, serta pentingnya menjaga lingkungan. Materi disampaikan secara interaktif agar mudah dipahami peserta yang terdiri dari pelajar hingga orang dewasa.
</p>

<p>
  Rangkaian kegiatan ditutup dengan berbagai lomba untuk siswa dan masyarakat umum. Lomba ini tidak hanya bertujuan memeriahkan acara, tetapi juga menjadi sarana menumbuhkan kreativitas, kebersamaan, dan kepedulian sosial.
</p>

<p>
  Melalui kegiatan ini, mahasiswa KKN berupaya memberikan kontribusi nyata dengan meningkatkan pengetahuan masyarakat, memperkuat kesadaran lingkungan, serta mendukung pembangunan Desa Cikadu yang lebih maju dan berdaya.
</p>

`,
      image_url:
        '/Peresmian-peta.jpeg',
      author: 'KKN Kelompok 45',
      category: 'Wilayah dan Lingkungan',
      created_at: '2024-01-03T08:20:00Z',
    },
  ];

  const categories = [
    { value: 'all', label: 'Semua Kategori', count: mockArticles.length },
    {
      value: 'pendidikan',
      label: 'Pendidikan',
      count: mockArticles.filter((a) => a.category === 'pendidikan').length,
    },
    {
      value: 'infrastruktur',
      label: 'Infrastruktur',
      count: mockArticles.filter((a) => a.category === 'infrastruktur').length,
    },
    {
      value: 'budaya',
      label: 'Budaya',
      count: mockArticles.filter((a) => a.category === 'budaya').length,
    },
    {
      value: 'ekonomi',
      label: 'Ekonomi',
      count: mockArticles.filter((a) => a.category === 'ekonomi').length,
    },
    {
      value: 'lingkungan',
      label: 'Lingkungan',
      count: mockArticles.filter((a) => a.category === 'lingkungan').length,
    },
  ];

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    filterArticles();
  }, [articles, selectedCategory, searchTerm]);

  const fetchNews = async () => {
    try {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setArticles(mockArticles);
      } else {
        setArticles(data || mockArticles);
      }
    } catch (error) {
      setArticles(mockArticles);
    } finally {
      setLoading(false);
    }
  };

  const filterArticles = () => {
    let filtered = articles;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      pendidikan: 'bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-800 dark:text-emerald-100 dark:border-emerald-600',
      infrastruktur: 'bg-green-100 text-green-900 border border-green-300 dark:bg-green-800 dark:text-green-100 dark:border-green-600',
      budaya: 'bg-teal-100 text-teal-900 border border-teal-300 dark:bg-teal-800 dark:text-teal-100 dark:border-teal-600',
      ekonomi: 'bg-lime-100 text-lime-900 border border-lime-300 dark:bg-lime-800 dark:text-lime-100 dark:border-lime-600',
      lingkungan: 'bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-800 dark:text-emerald-100 dark:border-emerald-600',
    };
    return (
      colors[category as keyof typeof colors] ||
      'bg-emerald-500/20 text-emerald-800 border border-emerald-500/30 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-500/50'
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleCardClick = (articleId: string) => {
    navigate(`/news/${articleId}`);
  };

  const handleCategorySelect = (categoryValue: string) => {
    setSelectedCategory(categoryValue);
    setShowMobileFilter(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section dengan Background Image Profesional */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(5, 150, 105, 0.85) 0%, rgba(16, 185, 129, 0.8) 50%, rgba(4, 120, 87, 0.9) 100%), url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <FileText className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-semibold">
                Portal Informasi Resmi
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Berita dan Informasi
              </span>
              <br />
              <span className="text-emerald-200">Desa Cikadu</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Portal informasi resmi untuk program Kuliah Kerja Nyata, kegiatan
              pembangunan desa, dan perkembangan terkini menuju Desa Cikadu yang
              maju dan sejahtera.
            </p>
          </motion.div>

          {/* Search dan Filter yang Diperbaiki */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 shadow-2xl">
              <div className="space-y-4">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Cari berita dan informasi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-sm md:text-base shadow-sm"
                  />
                </div>

                {/* Filter Controls - Responsif */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {/* Category Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-500 pointer-events-none z-10" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 md:pl-12 pr-8 py-3 md:py-4 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-sm md:text-base appearance-none cursor-pointer font-medium shadow-sm hover:shadow-md"
                    >
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label} ({category.count})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-500 pointer-events-none" />
                  </div>

                  {/* Sort Filter - Diperbaiki untuk Mobile */}
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-500 pointer-events-none z-10" />
                    <select
                      defaultValue="newest"
                      className="w-full pl-10 md:pl-12 pr-8 py-3 md:py-4 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-sm md:text-base appearance-none cursor-pointer font-medium shadow-sm hover:shadow-md"
                    >
                      <option value="newest">Terbaru</option>
                      <option value="oldest">Terlama</option>
                      <option value="title">Judul A-Z</option>
                      <option value="category">Kategori</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span className="font-semibold">BERITA UTAMA</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Informasi Terkini
                </h2>
              </div>

              <Card
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                onClick={() => handleCardClick(filteredArticles[0].id)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-3 relative overflow-hidden">
                    <img
                      src={filteredArticles[0].image_url}
                      alt={filteredArticles[0].title}
                      className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${getCategoryColor(
                          filteredArticles[0].category
                        )}`}
                      >
                        {filteredArticles[0].category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                      {filteredArticles[0].title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
                      {filteredArticles[0].excerpt}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-500 mb-6 gap-2">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span className="font-medium">
                          {filteredArticles[0].author}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                          {formatDate(filteredArticles[0].created_at)}
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 md:py-4 px-6 rounded-xl shadow-lg hover:shadow-xl"
                      icon={ArrowRight}
                      onClick={() => handleCardClick(filteredArticles[0].id)}
                    >
                      Baca Selengkapnya
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Berita dan Kegiatan Terbaru
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Informasi terkini mengenai program KKN dan perkembangan
              pembangunan Desa Cikadu
            </p>
          </motion.div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Tidak Ada Hasil
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tidak ada berita yang sesuai dengan pencarian Anda. Silakan
                  coba kata kunci lain.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.slice(1).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600"
                    onClick={() => handleCardClick(article.id)}
                  >
                    <div className="relative">
                      <img
                        src={article.image_url}
                        alt={article.title}
                        className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${getCategoryColor(
                            article.category
                          )}`}
                        >
                          {article.category.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 md:p-6 flex flex-col h-full">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow leading-relaxed text-sm md:text-base">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs md:text-sm text-gray-500 mb-4 gap-2">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span className="truncate max-w-[120px] font-medium">
                            {article.author}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{formatDate(article.created_at)}</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-200 font-medium"
                        onClick={() => handleCardClick(article.id)}
                      >
                        Baca Artikel
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredArticles.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold border-emerald-500 text-emerald-600 hover:bg-emerald-600 hover:text-white"
              >
                Muat Lebih Banyak Berita
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;