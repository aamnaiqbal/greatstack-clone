"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const About = () => {
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const [showPoster, setShowPoster] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlay = () => {
    setShowPoster(false);
    setIsModalOpen(true);
    if (videoRef.current) videoRef.current.pause();
    if (modalVideoRef.current) modalVideoRef.current.play();
  };

  const handleEnded = () => {
    setShowPoster(true);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) modalVideoRef.current.pause();
    setShowPoster(true);
  };

  return (
    <section id="about" className="bg-[#f8f8f8] py-16 px-4">
      <div className="max-w-5xl mx-auto  flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Left Side - Video */}
        <div className="relative w-[80%] h-[45vh] lg:w-[420px] lg:h-[420px] rounded-lg shadow-lg overflow-hidden mb-8 md:mb-0">
          {showPoster && (
            <>
              <Image
                src="/images/about.png"
                alt="Video Preview"
                width={420}
                height={420}
                className="absolute top-0 left-0 w-full h-full object-cover z-10 transition-opacity duration-500"
              />
              <button
                onClick={handlePlay}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 
                  bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Play video"
              >
                <FaPlay className="text-white" />
              </button>
            </>
          )}

          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            onEnded={handleEnded}
            src="https://greatstack.in/assets/college-video-6XtGR-D3.mp4 "
            aria-label="About university video"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
          <p className="text-blue-900 font-bold">ABOUT UNIVERSITY</p>
          <h1 className="text-4xl font-bold mb-4">
            Nurturing Tomorrow's <br /> Leaders Today
          </h1>
          <p className="text-[#676767] mb-[8px]">
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
          <p className="text-[#676767] mb-[8px]">
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <p className="text-[#676767] mb-[8px]">
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>

      {/* Modal for Fullscreen Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
          <div className="relative max-w-4xl border-8 border-white w-full">
            <button
              onClick={handleCloseModal}
              className="absolute -top-4 -right-6 text-white text-2xl"
              aria-label="Close video modal"
            >
              &times; {/* Close button */}
            </button>
            <video
              ref={modalVideoRef}
              className="w-full h-full object-cover"
              controls
              onEnded={handleEnded}
              autoPlay
            >
              <source
                src="https://greatstack.in/assets/college-video-6XtGR-D3.mp4 "
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
