import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <section id="home" className="relative h-[100vh] flex items-center justify-center text-center text-white">
      <Image
        src="/images/hero.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-[#0c0c3f]/70 z-10"></div>

      <div className="z-20 flex flex-col items-center justify-center">
        <div className="z-20 px-4 max-w-[800px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-center ">
            We Ensure better education for a better world
          </h1>
          <p className="text-sm md:text-base mb-6 md:max-w-[700px] text-center">
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education
          </p>
        </div>
        <Link
          href={"#"}
          className="inline-flex items-center justify-center bg-white hover:bg-gray-200 text-black
                 py-3 px-6 rounded-full transition cursor-pointer"
        >
          Explore more
          <IoIosArrowRoundForward className="ml-2 font-bold " size={28} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
