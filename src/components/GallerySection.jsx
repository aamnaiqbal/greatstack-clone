import React from "react";
import Link from "next/link";
import Image from "next/image";
import GalleryCard from "./GalleryCard";

const GallerySection = () => {
  const images = [
    "/images/gallery-1.png",
    "/images/gallery-2.png",
    "/images/gallery-3.png",
    "/images/gallery-4.png",
  ];
  return (
    <section
      id="campus"
      className="bg-[#f8f8f8] py-16 px-4 text-center flex flex-col items-center justify-center gap-y-8"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-base font-semibold text-[#212ea0] mb-2 uppercase">
          Gallery
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#000f38] mb-12">
          Campus Photos
        </h2>
        <div className="flex gap-y-6 flex-row flex-wrap gap-x-6 items-center justify-center">
          {images.map((imgSrc, index) => (
            <GalleryCard imgSrc={imgSrc} key={index} />
          ))}
        </div>
      </div>
      <Link
        href="#"
        className="z-20 bg-[#212ea0] px-6 py-3  rounded-full text-sm font-semibold text-white flex flex-row items-center justify-center gap-x-2"
      >
        <span>See more here</span>
        <Image src="/images/white-arrow.png" height={500} width={20} alt="->" />
      </Link>
    </section>
  );
};

export default GallerySection;
