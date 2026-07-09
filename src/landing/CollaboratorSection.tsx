import React from "react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const collaborators = [
  {
    id: 1,
    name: "Bahasa Fun",
    logo: "/images/collabolator-1.jpg",
    instagram: "https://www.instagram.com/bahasafun?igsh=MXh1aG9md3V6aGNlZg==",
  },
  {
    id: 2,
    name: "Gisli Indonesia",
    logo: "/images/collabolator-2.jpg",
    instagram:
      "https://www.instagram.com/gisli.indonesia?igsh=MXFrZ3FvNnJ3b2dkZg==",
  },
];

const CollaboratorSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-40 translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Handshake className="w-7 h-7 text-blue-600" />
            <h2 className="text-4xl font-bold">
              <span className="text-blue-600">Our</span>{" "}
              <span className="text-yellow-400">Collaborators</span>
            </h2>
            <Handshake className="w-7 h-7 text-yellow-400" />
          </div>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">
            Kami berkolaborasi bersama mitra terpercaya demi menghadirkan
            pengalaman belajar bahasa Inggris terbaik untuk kamu.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full" />
        </motion.div>

        {/* "Partner With" divider label */}
        <motion.div
          className="flex items-center gap-4 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex-1 h-px bg-blue-200" />
          <span className="text-sm font-semibold text-blue-500 tracking-widest uppercase whitespace-nowrap">
            Partner With
          </span>
          <div className="flex-1 h-px bg-blue-200" />
        </motion.div>

        {/* Collaborator grid */}
        <div className="flex flex-wrap justify-center gap-y-10 max-w-4xl mx-auto">
          {collaborators.map((collab) => (
            <div
              key={collab.id}
              className="w-1/2 sm:w-1/3 md:w-1/4 flex flex-col items-center gap-3"
            >
              {/* Circular logo */}
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 9999,
                  border: "1px solid #E5E7EB",
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={collab.logo}
                  alt={collab.name}
                  style={{ width: 110, height: 110, objectFit: "contain" }}
                />
              </div>
              {/* Name */}
              <a
                href={collab.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#6B7280",
                  fontWeight: 500,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                className="text-sm text-center hover:text-blue-600"
              >
                {collab.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaboratorSection;
