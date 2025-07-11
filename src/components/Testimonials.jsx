"use client";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Update slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    // Set initial value
    updateSlidesToShow();

    // Listen for window resize
    window.addEventListener("resize", updateSlidesToShow);

    // Cleanup
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Sample data for slides
  const slides = [
    {
      id: 1,
      title: "William Jackson",
      country: "Edusity, USA",
      content:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
      image: "https://greatstack.in/assets/user-4-njZdDe5j.png",
    },
    {
      id: 2,
      title: "Emily Williams",
      country: "Edusity, USA",
      content:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
      image: "https://greatstack.in/assets/user-3-BHRQSl0V.png",
    },
    {
      id: 3,
      title: "Emily Williams",
      country: "Edusity, USA",
      content:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
      image: "https://greatstack.in/assets/user-1-dp2DpvM_.png",
    },
    {
      id: 4,
      title: "William Jackson",
      country: "Edusity, USA",
      content:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
      image: "https://greatstack.in/assets/user-2-UK2CIdqi.png",
    },
  ];

  const nextSlide = () => {
    const maxSlide = slides.length - slidesToShow;
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxSlide = slides.length - slidesToShow;
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section
      id="testimonials"
      className="bg-[#f8f8f8] py-12 md:pt-16 md:pb-20 px-4 text-center md:px-[10%]"
    >
      <div className="mx-auto max-w-[90%]">
        <p className="text-base font-semibold text-[#212ea0] mb-2 uppercase">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl md:text-3xl font-bold text-[#000f38] mb-18">
          What Student Says
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 top-1/2 z-10 -translate-y-1/2 transform rounded-full
           bg-blue-900 p-2 md:p-4 shadow-lg focus:outline-none"
          >
            <FiChevronLeft className="h-6 w-6 text-gray-50" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 top-1/2 z-10 bg-blue-900
          -translate-y-1/2 transform rounded-full p-2 md:p-4 shadow-lg focus:outline-none"
          >
            <FiChevronRight className="h-6 w-6 text-gray-50" />
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesToShow)
                }%)`,
              }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="px-4 flex-shrink-0"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="overflow-hidden rounded-lg p-6 bg-gray-50 shadow-md">
                    <div className="flex items-center gap-2">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-12 rounded-full object-cover border-4 border-blue-900"
                      />
                      <div className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold text-blue-900">
                          {slide.title}
                        </h3>
                        <h3 className="text-sm font-semibold mr-10">
                          {slide.country}
                        </h3>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="mt-2 text-gray-600 text-justify">
                        {slide.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
