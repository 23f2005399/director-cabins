import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  RotateCcw,
  ZoomIn,
  Loader,
} from 'lucide-react';
import './styles/imageGallery.css';

// Import local images
import img1 from './assets/images/826A6524 (1).jpg';
import img2 from './assets/images/826A6641.jpg';
import img3 from './assets/images/dc1.jpg';
import img4 from './assets/images/dc2.jpg';
import img5 from './assets/images/826A6500.jpg';

const galleryImages = [
  { src: img1, title: "Modern Office Space", category: "Workspace" },
  { src: img2, title: "Creative Environment", category: "Design" },
  { src: img3, title: "Large Desk and Comfortable Seating", category: "Director Cabin" },
  { src: img4, title: "Reserved for Collaboration and Discussion", category: "Meeting room" },
  { src: img5, title: "Business lounge and breakout zones", category: "Workspace" }
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loadingStates, setLoadingStates] = useState({});
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const autoPlayRef = useRef(null);
  const totalImages = galleryImages.length;

  // Initial loading state
  useEffect(() => {
    const initialLoadingStates = galleryImages.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {});
    setLoadingStates(initialLoadingStates);
  }, []);

  // Autoplay logic
  const startAutoPlay = () => {
    if (!isAutoPlaying || isFullscreen) return;
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 4000);
  };

  const stopAutoPlay = () => clearInterval(autoPlayRef.current);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [isAutoPlaying, isFullscreen, totalImages]);

  // Navigation
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  // Fullscreen handlers
  const openFullscreen = (index) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setRotation(0);
    stopAutoPlay();
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setRotation(0);
    if (isAutoPlaying) startAutoPlay();
  };

  const rotateImage = () => setRotation((prev) => (prev + 90) % 360);

  const toggleZoom = () => {
    if (zoom === 1) setZoom(2);
    else {
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'Escape') closeFullscreen();
      if (e.key.toLowerCase() === 'r') rotateImage();
      if (e.key.toLowerCase() === 'z' || e.key === ' ') {
        e.preventDefault();
        toggleZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, zoom]);

  // Panning when zoomed
  const handlePan = (e) => {
    if (zoom > 1) {
      e.preventDefault();
      let startX = e.clientX - pan.x;
      let startY = e.clientY - pan.y;
      const onMouseMove = (moveEvent) => {
        setPan({
          x: moveEvent.clientX - startX,
          y: moveEvent.clientY - startY,
        });
      };
      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
  };

  // Carousel item style
  const getItemStyle = (index) => {
    const offset = index - currentIndex;
    const absOffset = Math.abs(offset);

    if (absOffset > 2) {
      return { opacity: 0, pointerEvents: 'none' };
    }

    return {
      transform: `
        translateX(${offset * 40}%) 
        translateZ(${-absOffset * 150}px) 
        rotateY(${offset * -20}deg)
      `,
      opacity: absOffset === 0 ? 1 : 0.5,
      zIndex: totalImages - absOffset,
      filter: `blur(${absOffset * 2}px)`,
    };
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Explore Our Space</h1>
      </div>

      <div
        className="carousel-wrapper"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div className="carousel-scene">
          <div className="carousel">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="carousel-item"
                style={getItemStyle(index)}
                onClick={() => index === currentIndex && openFullscreen(index)}
              >
                {loadingStates[index] && (
                  <div className="carousel-item-loader">
                    <Loader className="spinner" size={32} />
                  </div>
                )}
                <img
                  src={img.src}
                  alt={img.title || ''}
                  className="carousel-item-img"
                  style={{ opacity: loadingStates[index] ? 0 : 1 }}
                  onLoad={() => setLoadingStates((prev) => ({ ...prev, [index]: false }))}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        <button onClick={handlePrevious} className="carousel-nav prev">
          <ChevronLeft size={24} />
        </button>
        <button onClick={handleNext} className="carousel-nav next">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="gallery-controls">
        <div className="progress-dots">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {isFullscreen && (
        <div className="fullscreen-modal">
          <div className="fullscreen-backdrop" onClick={closeFullscreen} />

          <div className="fullscreen-content">
            <div className="fullscreen-controls">
              <button onClick={rotateImage}>
                <RotateCcw size={22} />
              </button>
              <button onClick={toggleZoom}>
                <ZoomIn size={22} />
              </button>
              <button onClick={closeFullscreen}>
                <X size={26} />
              </button>
            </div>

            <button
              onClick={handlePrevious}
              className="fullscreen-nav prev"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className="fullscreen-nav next"
            >
              <ChevronRight size={32} />
            </button>

            <div className="fullscreen-image-wrapper">
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].title || ''}
                className="fullscreen-image"
                style={{
                  transform: `scale(${zoom}) rotate(${rotation}deg) translate(${pan.x}px, ${pan.y}px)`,
                  cursor: zoom > 1 ? 'grab' : 'zoom-in',
                }}
                onClick={toggleZoom}
                onMouseDown={handlePan}
                draggable={false}
              />
            </div>

            <div className="fullscreen-info">
              <span className="fullscreen-category">
                {galleryImages[currentIndex].category}
              </span>
              <h3 className="fullscreen-title">
                {galleryImages[currentIndex].title}
              </h3>
              <p className="fullscreen-counter">
                {currentIndex + 1} / {totalImages}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
