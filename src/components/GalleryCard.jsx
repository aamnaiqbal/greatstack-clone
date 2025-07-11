"use client";
import Image from "next/image";

const GalleryCard = ({ imgSrc }) => {
  return (
    <div className="relative rounded-lg overflow-hidden  ">
      <Image
        src={imgSrc}
        alt=""
        width={230}
        height={270}
        className="object-cover  "
      />
    </div>
  );
};

export default GalleryCard;
