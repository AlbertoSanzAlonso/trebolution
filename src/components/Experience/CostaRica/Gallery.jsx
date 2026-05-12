import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import GalleryCard from './GalleryCard';
import { itineraryData } from '../itineraryData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const currentIndex = selectedImage ? itineraryData.findIndex(item => item.img === selectedImage.img) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) setSelectedImage(itineraryData[currentIndex - 1]);
  };

  const handleNext = () => {
    if (currentIndex < itineraryData.length - 1) setSelectedImage(itineraryData[currentIndex + 1]);
  };

  return (
    <section id="gallery" className="py-40 px-6 md:px-24 bg-brand-secondary relative">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-brand-text-light/60 text-[10px] md:text-[11px] font-extralight tracking-[0.4em] uppercase block mb-4 md:mb-6">UN VISTAZO A LO QUE VIVIRÁS</span>
          <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight uppercase tracking-tight">Galería de <span className="italic text-brand-accent">imágenes</span></h2>
        </div>

        {/* Desktop Grid / Mobile Scroll */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-12 md:pb-0 -mx-6 px-12 md:mx-0 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-20 custom-scrollbar-hide">
          {itineraryData.map((item, i) => (
            <div key={i} className="shrink-0 w-[70vw] sm:w-[400px] md:w-auto snap-center mr-4 md:mr-0">
              <GalleryCard
                {...item}
                onClick={() => setSelectedImage(item)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* PREMIUM MODAL - Instant loading for performance */}
      {selectedImage && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-6 md:p-12">
          {/* Backdrop */}
          <div
            onClick={() => setSelectedImage(null)}
            className="absolute inset-0 bg-brand-primary/95"
          />

          {/* Modal Container */}
          <div
            className="w-full max-w-6xl h-full max-h-[90vh] rounded-4xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row bg-brand-primary"
          >
            {/* Full Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent md:bg-linear-to-r md:from-black/60 md:via-black/10 md:to-transparent" />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 z-50 bg-white md:bg-transparent text-brand-primary md:text-white p-3 md:p-4 rounded-full transition-all duration-300 md:opacity-40 md:hover:opacity-100 md:shadow-none shadow-xl cursor-pointer border border-brand-primary/10 md:border-none"
            >
              <X className="w-6 h-6 md:w-10 md:h-10" strokeWidth={1} />
            </button>

            {/* Navigation Arrows - Desktop Only Version */}
            <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-4 pointer-events-none z-50">
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                disabled={currentIndex === 0}
                className={`pointer-events-auto w-auto h-auto p-4 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${currentIndex === 0 ? 'opacity-0 scale-50' : 'bg-transparent text-white opacity-40 hover:opacity-100'
                  }`}
              >
                <ChevronLeft className="w-14 h-14" strokeWidth={1} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                disabled={currentIndex === itineraryData.length - 1}
                className={`pointer-events-auto w-auto h-auto p-4 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${currentIndex === itineraryData.length - 1 ? 'opacity-0 scale-50' : 'bg-transparent text-white opacity-40 hover:opacity-100'
                  }`}
              >
                <ChevronRight className="w-14 h-14" strokeWidth={1} />
              </button>
            </div>

            {/* Content Side - Just the title for the gallery */}
            <div className="relative z-30 w-full h-full flex flex-col justify-end p-8 md:p-24 pb-12 pointer-events-none">
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight max-w-[80%] drop-shadow-lg">
                {selectedImage.title}
              </h2>
            </div>
            
            {/* Mobile-only Navigation Buttons */}
            <div className="flex md:hidden absolute bottom-6 left-6 right-6 items-center justify-between z-50">
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                disabled={currentIndex === 0}
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-300 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                disabled={currentIndex === itineraryData.length - 1}
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-300 ${currentIndex === itineraryData.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
