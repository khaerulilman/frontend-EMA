import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Video = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      id: 1,
      url: "https://ik.imagekit.io/9wqihtp5m/Hi,%20I%20am%20Virgan%20from%209th%20grade.This%20is%20a%20video%20of%20my%20English%20experience%20during%202%20years%20of%20learning%20in%20Village%20English%20Course.Thanks%20for%20watching.%20Don't%20forget%20to%20like._englishlearning%20_englishcourse%20_speakingenglish.mp4?updatedAt=1737558186678",
      title: "Video Testimonial 1",
    },
    {
      id: 2,
      url: "https://ik.imagekit.io/9wqihtp5m/YOSI%20VIDEO%20TESTIMONI?updatedAt=1737671952621",
      title: "Video Testimonial 2",
    },
    {
      id: 3,
      url: "https://ik.imagekit.io/9wqihtp5m/bella%20video?updatedAt=1737672014573",
      title: "Video Testimonial 3",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative py-20 bg-yellowCustom">
      {/* Border atas */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blueCustom to-transparent"></div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-rounded font-bold mb-12 text-blueCustom text-center">
          <span className="text-white font-more-sugar">Our</span>{" "}
          <span className="font-more-sugar">Speaking Practices</span>
        </h2>

        <div className="relative max-w-2xl mx-auto">
          {/* Card dengan efek keren dan border baru */}
          <div
            className="relative aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden 
          border-4 border-blueCustom bg-clip-padding backdrop-filter backdrop-blur-md 
          transition-all duration-500 hover:shadow-blue-500/50 hover:border-blue-500"
          >
            {/* Efek Glow di Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"></div>

            <video
              key={videos[currentIndex].id}
              className="w-full h-full object-contain rounded-2xl"
              controls
              src={videos[currentIndex].url}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Tombol navigasi */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg 
          hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg 
          hover:bg-gray-100 transition-colors z-10"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Indikator posisi video */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
            {currentIndex + 1} / {videos.length}
          </div>
        </div>
      </div>

      {/* Border bawah */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blueCustom to-transparent"></div>
    </section>
  );
};

export default Video;
