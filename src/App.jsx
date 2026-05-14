import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import profileImg from "./assets/rindu cv.png";
import projectImg from "./assets/Aplikasi Support PMB.png";
import aboutImg from "./assets/Rindu.png";
import organisasiImg from "./assets/bem fts rindu.png";

import dataScienceCert from "./assets/Data Science Dicoding.jpg";
import aiCert from "./assets/Sertifikat Dicoding.jpg";


import sppirt2024 from "./assets/SPPIRT 2024.png";
import sppirt2025 from "./assets/SRS Sipaman 2025.png";
import profilDesa from "./assets/Profil Desa 2025.png";

function App() {
  const projects = [
    {
      title: "Sistem Informasi Support PMB",
      desc: "Website support PMB berbasis web dengan fitur pencatatan kendala, tindak lanjut, dan manajemen data pengguna.",
      tech: "React, Express, MySQL",
      image: projectImg,
    },
  ];

  const experiences = [
    {
      title: "Technical Writer — GKPD, SPPIRT & SIPAMAN",
      company: "PT Sebaya Media Kreasi - Badan Pengawas Obat dan Makanan Jakarta",
      period: "Juli 2024 – Desember 2024",
      image: sppirt2024,
      desc: "Menyusun dokumen SIT, UAT, proses bisnis, spesifikasi sistem, desain sistem, dokumen manual, kamus data, ERD, serta video tutorial untuk aplikasi GKPD, SPPIRT, dan SIPAMAN.",
    },
    
    {
      title: "Technical Writer — Pengembangan GKPD, SPPIRT & SIPAMAN",
      company: "PT Sebaya Media Kreasi - Badan Pengawas Obat dan Makanan Jakarta",
      period: "2025",
      image: sppirt2025,
      desc: "Menyusun dokumen pengembangan aplikasi meliputi SRS, source code documentation, proses bisnis, spesifikasi sistem, dokumen manual, kamus data, ERD, serta video tutorial pada pengembangan aplikasi GKPD, SPPIRT, dan SIPAMAN.",
    },

    {
      title: "Technical Writer — Sistem Informasi Profil Desa",
      company: "PT Arculus Indonesia Multisekuriti - Kementerian Kehutanan",
      period: "November 2025 – Desember 2025",
      image: profilDesa,
      desc: "Menyusun dokumen SRS (Software Requirement Specification) dan laporan akhir terkait perancangan aplikasi Profil Desa berbasis website dan spasial pada Kementerian Lingkungan Hidup dan Kehutanan.",
    },
    {
      title: "Assistant Lecturer — Sistem Informasi",
      company: "Program Studi Teknik Informatika",
      period: "2025",
      image: aboutImg,
      desc: "Menjadi asisten dosen pada mata kuliah Sistem Informasi dengan membantu proses pembelajaran, praktikum, dan pendampingan mahasiswa.",
    },
    
    {
      title: "Assistant Lecturer — Manajemen Basis Data",
      company: "Program Studi Bisnis Digital",
      period: "2026",
      image: aboutImg,
      desc: "Menjadi asisten dosen pada mata kuliah Manajemen Basis Data dengan membantu praktikum database dan pendampingan mahasiswa.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-sky-50 to-white min-h-screen text-slate-800">

      {/* Navbar */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">

          <div className="flex gap-6 text-sm font-medium">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 py-14">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>

            <p className="text-cyan-600 font-semibold mb-3">
              HELLO, I'M
            </p>

            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              Rindu Astuti S.T 
            </h1>

            <h2 className="text-2xl text-slate-500 mt-4">
              Fresh Graduate Informatics Engineering
            </h2>

            <p className="text-slate-600 leading-8 mt-6">
              Mahasiswa Teknik Informatika Universitas Ibn Khaldun Bogor
              dengan ketertarikan pada pengembangan aplikasi web,
              sistem informasi, dan technical documentation.
            </p>

            <div className="mt-6 space-y-2 text-slate-600">
            <div className="mt-6 space-y-3 text-slate-600">

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-cyan-600" />
              <p>Cibinong, Bogor</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-cyan-600" />
              <p>rinduasst@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-cyan-600" />
              <p>0896-1714-7532</p>
            </div>

            </div>

            <a
            href="https://www.linkedin.com/in/rinduasst"
            target="_blank"
            className="bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold inline-block"
          >
            LinkedIn
          </a>
               
            </div>

          </div>

          <div className="flex justify-center">

            <img
              src={profileImg}
              alt="Profile"
              className="w-80 h-80 object-cover rounded-[2rem] shadow-2xl border-8 border-white"
            />

          </div>

        </div>

      </section>

{/* About */}
<section
  id="about"
  className="max-w-6xl mx-auto px-5 md:px-8 py-10"
>

  <div className="bg-white rounded-[2rem] shadow-md overflow-hidden">

    <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">

      {/* FOTO */}
   
      {/* TEXT */}
      <div>

        <h2 className="text-2xl md:text-3xl font-bold mb-5">
          About Me
        </h2>

        <p className="text-slate-600 leading-7 text-sm md:text-base">
          Mahasiswa Teknik Informatika Universitas Ibn Khaldun Bogor
          dengan ketertarikan pada pengembangan aplikasi web,
          sistem informasi, technical documentation,
          dan pengelolaan data.
        </p>

        <p className="text-slate-600 leading-7 text-sm md:text-base mt-4">
          Berpengalaman dalam pengembangan aplikasi berbasis web,
          penyusunan dokumentasi sistem, SRS, SOP,
          dan user guide aplikasi pemerintahan maupun akademik.
        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {[
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "Laravel",
            "MySQL",
            "Technical Writing",

          ].map((skill) => (
            <span
              key={skill}
              className="bg-cyan-100 text-cyan-700 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </div>

  </div>

</section>
<section
  id="organization"
  className="max-w-6xl mx-auto px-8 py-20"
>

  <h2 className="text-3xl font-bold mb-10">
    Organization Experience
  </h2>

  <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg">

    <div className="p-8">

      <div className="mb-8">
        <h3 className="text-2xl font-bold">
          Sekretaris — BEM Fakultas Teknik dan Sains
        </h3>

        <p className="text-cyan-600 mt-2">
          2024 – 2025
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold">
          Divisi Kominfo — HIMATEKINFO
        </h3>

        <p className="text-cyan-600 mt-2">
          2024 – 2025
        </p>
      </div>

    </div>

  </div>

</section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-8 py-9"
      >

        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-600 leading-7 mb-5">
                  {project.desc}
                </p>

                <p className="text-cyan-600 font-medium">
                  {project.tech}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Experience */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-8 py-20"
      >

        <h2 className="text-3xl font-bold mb-12">
          Experience
        </h2>

        <div className="space-y-5">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 shadow-md"
          >

            <div className="flex flex-col md:flex-row gap-4 items-start">

              <img
                src={exp.image}
                alt={exp.title}
                className="w-full md:w-24 h-48 md:h-24 rounded-xl object-cover shrink-0"
              />

              <div>

                <h3 className="text-lg font-bold">
                  {exp.title}
                </h3>

                <p className="text-cyan-600 text-sm mt-1">
                  {exp.company}
                </p>

                <p className="text-slate-400 text-sm mb-3">
                  {exp.period}
                </p>

                <p className="text-slate-600 leading-6 text-sm">
                  {exp.desc}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

            </section>
            <section
        id="certificates"
        className="max-w-6xl mx-auto px-8 py-20"
      >

        <h2 className="text-3xl font-bold mb-10">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* CERTIFICATE 1 */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg">

            <img
              src={dataScienceCert}
              alt="Certificate"
              className="w-full h-40 object-cover"
            />

            <div className="p-6">

              <h3 className="text-lg font-bold">
                Belajar Penerapan Data Science
                dengan Microsoft Fabric
              </h3>

              <p className="text-cyan-600 mt-3">
                Dicoding Indonesia
              </p>

            </div>

          </div>

          {/* CERTIFICATE 2 */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg">

            <img
              src={aiCert}
              alt="Certificate"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Dasar AI
              </h3>

              <p className="text-cyan-600 mt-3">
                Dicoding Indonesia
              </p>

            </div>

          </div>

        </div>

      </section>

            {/* Contact */}
            <section
              id="contact"
              className="max-w-5xl mx-auto px-8 py-20"
            >

              <div className="bg-cyan-500 rounded-[2rem] p-12 text-center text-white shadow-xl">

                <h2 className="text-4xl font-black mb-6">
                  Let's Work Together
                </h2>

                <p className="leading-8 text-cyan-50 mb-8">
                  Terbuka untuk peluang kerja, internship,
                  maupun freelance project di bidang web development
                  dan technical documentation.
                </p>

                <a
                href="https://wa.me/6289617147532?text=Halo%20Rindu%2C%20saya%20tertarik%20dengan%20portfolio%20Anda."
                target="_blank"
                className="bg-white text-cyan-600 px-8 py-4 rounded-2xl font-bold inline-block"
              >
                Contact Me
              </a>
                

              </div>

            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-slate-500 text-sm">
              © 2026 Rindu Astuti. All rights reserved.
            </footer>

          </div>
        );
      }

export default App;