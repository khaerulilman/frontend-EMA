import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, User, CheckCircle, Clock, MapPin, BookOpen, Award, Calendar, Tablet, FileText, TrendingUp } from "lucide-react";
import Link from "next/link";

const PriceCourse = () => {
  const [activeTab, setActiveTab] = useState("private");

  const privatePackages = [
    {
      name: "Dasar",
      sessions: "4x",
      registerPrice: "Rp 260.000",
      monthlyPrice: "Rp 250.000",
      popular: false,
    },
    {
      name: "Intensif",
      sessions: "6x",
      registerPrice: "Rp 360.000",
      monthlyPrice: "Rp 350.000",
      popular: true,
    },
  ];

  const semiPrivatePackage = {
    name: "Paket Berdua",
    sessions: "4x",
    registerPrice: "Rp 235K",
    monthlyPrice: "Rp 225K",
    note: "Harga Per Murid",
  };

  const services = [
    { icon: BookOpen, label: "Layanan Utama", value: "Les Privat Bahasa Inggris Door to Door" },
    { icon: Clock, label: "Durasi Pertemuan", value: "70 Menit" },
    { icon: MapPin, label: "Bebas Biaya Transport", value: "YA, Maksimum Jarak 5 KM dari Pelabuhan Ratu" },
    { icon: TrendingUp, label: "Fokus Belajar", value: "Speaking Confidence" },
    { icon: Award, label: "Kurikulum", value: "Cambridge Curriculum dan Oxford Curriculum" },
  ];

  const facilities = [
    "Konsultasi & Placement Test",
    "Progress Assessment Report Bulanan",
    "Modul Digital / Latihan Tambahan",
    "Fasilitas Pembelajaran Visual Digital (Tablet)",
  ];

  const notes = [
    "Harga di atas untuk / orang",
    "4x / 6x pertemuan dalam satu bulan (dihitung sesuai berapa x pertemuan)",
    "Awal daftar sudah termasuk biaya les",
    "Bebas memilih waktu dan jadwal menyesuaikan",
    "1x Kesempatan Susulan (ganti hari) per periode",
    "Pembayaran dilakukan di awal atau di kedua pertemuan",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-blue-600">Paket</span>{" "}
            <span className="text-yellow-500">Kursus</span>
          </h2>
          <p className="text-gray-600 text-lg">Pilih paket yang sesuai dengan kebutuhan belajar Anda</p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <div className="bg-white rounded-2xl shadow-lg p-2 inline-flex">
            <button
              onClick={() => setActiveTab("private")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "private"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <User className="w-5 h-5" />
              PRIVATE (1 Murid)
            </button>
            <button
              onClick={() => setActiveTab("semi-private")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "semi-private"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Users className="w-5 h-5" />
              SEMI PRIVATE (2 Murid)
            </button>
          </div>
        </motion.div>

        {/* Private Packages */}
        {activeTab === "private" && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 text-center">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                ⭐ BEST SELLER - 70 Menit per Pertemuan
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {privatePackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-white rounded-3xl shadow-xl p-8 border-2 transition-all duration-300 relative ${
                    pkg.popular
                      ? "border-yellow-400 shadow-2xl"
                      : "border-blue-100 hover:border-blue-300"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                        🔥 POPULER
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-blue-600 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-500 text-lg">{pkg.sessions} Pertemuan</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4">
                      <p className="text-sm text-gray-600 mb-1">Awal Daftar</p>
                      <p className="text-3xl font-bold text-blue-600">{pkg.registerPrice}</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4">
                      <p className="text-sm text-gray-600 mb-1">Bulanan</p>
                      <p className="text-3xl font-bold text-yellow-600">{pkg.monthlyPrice}</p>
                    </div>
                  </div>

                  <motion.a
                    href={`https://wa.me/6285353890080?text=Halo, saya ingin mendaftar paket ${pkg.name} (${pkg.sessions} pertemuan)`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white hover:shadow-2xl"
                        : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-xl"
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Daftar Sekarang
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Semi Private Package */}
        {activeTab === "semi-private" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 text-center">
              <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                👥 70 Menit per Pertemuan
              </span>
            </div>

            <div className="max-w-md mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">
                    {semiPrivatePackage.name}
                  </h3>
                  <p className="text-gray-500 text-lg">{semiPrivatePackage.sessions} Pertemuan</p>
                  <span className="inline-block mt-2 bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold">
                    {semiPrivatePackage.note}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Awal Daftar</p>
                    <p className="text-3xl font-bold text-blue-600">{semiPrivatePackage.registerPrice}</p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Bulanan</p>
                    <p className="text-3xl font-bold text-yellow-600">{semiPrivatePackage.monthlyPrice}</p>
                  </div>
                </div>

                <motion.a
                  href={`https://wa.me/6285353890080?text=Halo, saya ingin mendaftar ${semiPrivatePackage.name} (${semiPrivatePackage.sessions} pertemuan)`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Daftar Sekarang
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Services Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-10 border-2 border-blue-100">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-blue-600">Keunggulan</span>{" "}
              <span className="text-yellow-500">program dan fasilitas</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-white rounded-xl">
                  <div className="bg-blue-600 p-3 rounded-xl">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">{service.label}</p>
                    <p className="text-gray-600 text-sm">{service.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-6">
              <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-600" />
                Fasilitas Tambahan (GRATIS)
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
              <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-blue-600" />
                Program Eksklusif
              </h4>
              <p className="text-gray-700">
                <span className="font-semibold">English Project Class</span> - 1x sebulan (biaya terpisah)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Notes Section */}
        <motion.div variants={itemVariants}>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl shadow-lg p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FileText className="w-7 h-7 text-blue-600" />
              Catatan Penting
            </h3>
            <div className="space-y-3">
              {notes.map((note, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <p className="text-gray-700">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PriceCourse;
