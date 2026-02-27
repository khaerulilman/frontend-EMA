import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  User,
  CheckCircle,
  Clock,
  MapPin,
  BookOpen,
  Award,
  Calendar,
  Tablet,
  FileText,
  TrendingUp,
  ArrowRight,
  Star,
  Sparkles,
  GraduationCap,
  Headphones,
} from "lucide-react";
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
    {
      icon: BookOpen,
      label: "Layanan Utama",
      value: "Les Privat Bahasa Inggris Door to Door",
    },
    { icon: Clock, label: "Durasi Pertemuan", value: "70 Menit" },
    {
      icon: MapPin,
      label: "Bebas Biaya Transport",
      value: "YA, Maksimum Jarak 5 KM dari Pelabuhan Ratu",
    },
    {
      icon: TrendingUp,
      label: "Fokus Belajar",
      value: "Speaking Confidence",
    },
    {
      icon: Award,
      label: "Kurikulum",
      value: "Cambridge Curriculum dan Oxford Curriculum",
    },
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

  // Program categories like the reference image
  const programCategories = [
    {
      icon: User,
      title: "Private",
      desc: "Belajar intensif dengan satu murid satu guru profesional",
    },
    {
      icon: Users,
      title: "Semi Private",
      desc: "Belajar berdua dengan harga lebih hemat dan tetap efektif",
    },
    {
      icon: BookOpen,
      title: "Learning Package",
      desc: "Paket belajar mandiri dengan materi eksklusif dan terintegrasi",
    },
    {
      icon: GraduationCap,
      title: "English Project",
      desc: "Program eksklusif untuk pengalaman belajar yang lebih seru",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-none blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-none blur-3xl opacity-10"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* ============================================= */}
        {/* SECTION 1: Program Categories Header */}
        {/* ============================================= */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Pilihan Program Belajar di{" "}
              <span className="text-blue-600">English My Adventure</span>
            </h2>
            <motion.a
              href="#pricecourse-detail"
              className="hidden md:flex items-center gap-1 text-blue-600 font-semibold transition-colors text-sm whitespace-nowrap"
            >
              Lihat semua program
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* 4 Program Category Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {programCategories.map((cat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-none p-5 border border-blue-100 shadow-sm cursor-pointer flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-none flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ============================================= */}
        {/* SECTION 2: Recommended Packages (Hero Style) */}
        {/* ============================================= */}
        <motion.div
          variants={itemVariants}
          className="mb-16 mt-10"
          id="pricecourse-detail"
        >
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-none overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-12 gap-0">
              {/* Left CTA Side */}
              <div className="md:col-span-4 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-none"></div>
                <div className="absolute -bottom-20 -left-10 w-60 h-60 bg-white/5 rounded-none"></div>
                <div className="absolute top-1/2 right-0 w-20 h-20 bg-yellow-400/10 rounded-none blur-xl"></div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative z-10"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                    Rekomendasi
                    <br />
                    <span className="text-yellow-400">Paket Kursus</span>
                    <br />
                    Terbaik
                  </h3>
                  <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-8">
                    Coba pengalaman belajar bahasa Inggris super seru dengan
                    program rekomendasi Learning Consultant kami.
                  </p>
                  <motion.a
                    href="https://wa.me/6285353890080?text=Halo, saya ingin tahu lebih lanjut tentang paket kursus"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-none shadow-lg transition-all duration-300 text-sm"
                  >
                    Lihat semua kelas
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Cards Side */}
              <div className="md:col-span-8 p-6 md:p-8">
                {/* Tab Switcher */}
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab("private")}
                    className={`px-5 py-2 rounded-none font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                      activeTab === "private"
                        ? "bg-white text-blue-700 shadow-md"
                        : "bg-white/10 text-white backdrop-blur-sm"
                    }`}
                  >
                    <User className="w-4 h-4" />
                    Private
                  </button>
                  <button
                    onClick={() => setActiveTab("semi-private")}
                    className={`px-5 py-2 rounded-none font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                      activeTab === "semi-private"
                        ? "bg-white text-blue-700 shadow-md"
                        : "bg-white/10 text-white backdrop-blur-sm"
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    Semi Private
                  </button>
                </div>

                {/* Private Tab */}
                {activeTab === "private" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    {privatePackages.map((pkg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className="bg-white rounded-none overflow-hidden shadow-lg relative"
                      >
                        {/* Card Header with gradient */}
                        <div
                          className={`relative h-32 flex items-center justify-center overflow-hidden ${
                            pkg.popular
                              ? "bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400"
                              : "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"
                          }`}
                        >
                          {/* Decorative pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-2 right-4 w-16 h-16 border-2 border-white rounded-none"></div>
                            <div className="absolute bottom-2 left-4 w-10 h-10 border-2 border-white rounded-none"></div>
                            <div className="absolute top-4 left-1/3 w-6 h-6 border border-white rounded-none"></div>
                          </div>

                          <div className="text-center relative z-10">
                            {pkg.popular && (
                              <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-none mb-2">
                                <Star className="w-3 h-3 fill-white" />
                                POPULER
                              </span>
                            )}
                            <div className="flex items-center justify-center gap-2">
                              <Sparkles className="w-5 h-5 text-white/80" />
                              <h4 className="text-white font-bold text-lg">
                                {pkg.name}
                              </h4>
                            </div>
                            <p className="text-white/80 text-sm mt-1">
                              {pkg.sessions} Pertemuan
                            </p>
                          </div>
                        </div>

                        {/* Badge */}
                        <div className="flex items-center gap-2 px-5 pt-4">
                          <span
                            className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-none ${
                              pkg.popular
                                ? "bg-yellow-50 text-yellow-700"
                                : "bg-blue-50 text-blue-700"
                            }`}
                          >
                            <User className="w-3 h-3" />
                            Private
                          </span>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 pt-3">
                          <h5 className="font-bold text-gray-900 text-lg mb-1">
                            Paket {pkg.name}
                          </h5>
                          <p className="text-gray-500 text-sm mb-4">
                            {pkg.sessions} pertemuan per bulan, 70 menit per
                            sesi
                          </p>

                          {/* CTA */}
                          <motion.a
                            href={`https://wa.me/6285353890080?text=Halo, saya ingin mendaftar paket ${pkg.name} (${pkg.sessions} pertemuan)`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileTap={{ scale: 0.97 }}
                            className={`w-full py-3 rounded-none font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
                              pkg.popular
                                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white"
                                : "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                            }`}
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Daftar Sekarang
                          </motion.a>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Semi Private Tab */}
                {activeTab === "semi-private" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-sm"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="bg-white rounded-none overflow-hidden shadow-lg"
                    >
                      {/* Card Header */}
                      <div className="relative h-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
                        <div className="text-center relative z-10">
                          <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-none mb-2">
                            <Users className="w-3 h-3" />
                            BERDUA LEBIH HEMAT
                          </span>
                          <div className="flex items-center justify-center gap-2">
                            <Sparkles className="w-5 h-5 text-white/80" />
                            <h4 className="text-white font-bold text-lg">
                              {semiPrivatePackage.name}
                            </h4>
                          </div>
                          <p className="text-white/80 text-sm mt-1">
                            {semiPrivatePackage.sessions} Pertemuan
                          </p>
                        </div>
                      </div>

                      {/* Badge */}
                      <div className="flex items-center gap-2 px-5 pt-4">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-none bg-blue-50 text-blue-700">
                          <Users className="w-3 h-3" />
                          Semi Private
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-none bg-yellow-50 text-yellow-700">
                          {semiPrivatePackage.note}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 pt-3">
                        <h5 className="font-bold text-gray-900 text-lg mb-1">
                          {semiPrivatePackage.name}
                        </h5>
                        <p className="text-gray-500 text-sm mb-4">
                          {semiPrivatePackage.sessions} pertemuan per bulan, 70
                          menit per sesi
                        </p>

                        <motion.a
                          href={`https://wa.me/6285353890080?text=Halo, saya ingin mendaftar ${semiPrivatePackage.name} (${semiPrivatePackage.sessions} pertemuan)`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileTap={{ scale: 0.97 }}
                          className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-none font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          Daftar Sekarang
                        </motion.a>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================= */}
        {/* SECTION 3: Keunggulan Program & Fasilitas */}
        {/* ============================================= */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-none shadow-xl p-10 border-2 border-blue-100">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-blue-600">Keunggulan</span>{" "}
              <span className="text-yellow-500">program dan fasilitas</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-white rounded-none"
                >
                  <div className="bg-blue-600 p-3 rounded-none flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">
                      {service.label}
                    </p>
                    <p className="text-gray-600 text-sm">{service.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-none p-6 border border-blue-100/50">
              <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center justify-center gap-2">
                <Award className="w-6 h-6 text-blue-600" />
                Fasilitas Tambahan (GRATIS)
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center md:justify-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-none p-6">
              <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center justify-center gap-2">
                <Calendar className="w-6 h-6 text-blue-600" />
                Program Eksklusif
              </h4>
              <p className="text-gray-700 text-center">
                <span className="font-semibold">English Project Class</span> -
                1x sebulan (biaya terpisah)
              </p>
            </div>
          </div>
        </motion.div>

        {/* ============================================= */}
        {/* SECTION 4: Catatan Penting */}
        {/* ============================================= */}
        <motion.div variants={itemVariants}>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-none shadow-lg p-8 border-2 border-gray-200">
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
