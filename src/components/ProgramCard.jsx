"use client";
import Image from "next/image";

const ProgramCard = ({ imgSrc, title, imgIcon }) => {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer transition-tansform duration-300">
      <Image
        src={imgSrc}
        alt={title}
        width={260}
        height={330}
        className="object-cover w-full h-full  "
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
        <Image
          src={imgIcon}
          className="mb-2"
          width={100}
          height={100}
          alt="🎓"
        />
        <p className="text-lg font-semibold">{title}</p>
      </div> */}
      <div className="absolute top-0 left-0 right-0 bottom-0 rounded-lg flex flex-col items-center justify-center bg-[rgba(0,15,152,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-800 pt-[70%] hover:pt-0">
        <Image src={imgIcon} className="mb-2" width={60} height={50} alt="🎓" />
        <p className="text-md font-semibold text-white">{title}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
