import { useState } from "react";
import { X } from "lucide-react";

import nptel from "@/assets/nptel.png";
import oracle from "@/assets/oracle.png";
import dci from "@/assets/dci.png";
import ibm from "@/assets/ibm.png";
import ebox from "@/assets/Ebox.png";
import mern from "@/assets/Screenshot 2026-04-27 201939.png";

/* 🎯 ONLY REQUIRED 6 CERTIFICATES */
const certificates = [
  {
    title: "Cloud Computing",
    organization: "NPTEL",
    image: nptel,
  },
  {
    title: "OCI Developer Professional",
    organization: "Oracle",
    image: oracle,
  },
  {
    title: "Mobile App Development",
    organization: "Dot Com Infoway Ltd.",
    image: dci,
  },
  {
    title: "Introduction to RAG",
    organization: "IBM SkillsBuild",
    image: ibm,
  },
  {
    title: "Problem Solving & Programming in C",
    organization: "eBox",
    image: ebox,
  },
  {
    title: "Full Stack AI Intern",
    organization: "Zelid Tech",
    image: mern,
  },
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    organization: string;
    image: string;
  } | null>(null);

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* 🔥 3 x 2 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="group relative w-[280px] md:w-[320px] bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-center group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-1">
                  {cert.organization}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔍 LIGHTBOX MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl border shadow-2xl"
            />

            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">
                {selectedCert.title}
              </h3>
              <p className="text-muted-foreground">
                {selectedCert.organization}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
