import Image from "next/image";
import type { FC } from "react";

const images = [
  "/portrait1.jpg", "/portrait2.jpg", "/portrait3.jpg", 
  "/portrait4.jpg", "/portrait5.jpg", "/portrait6.jpg", 
  "/portrait7.jpg", "/portrait8.jpg", "/portrait9.jpg", 
  "/portrait10.jpg"
];

const Gallery: FC = () => {
  return (
    <section className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
      {images.map((image, i) => (
        <div key={i} className="relative" style={{ aspectRatio: "2/3" }}>
          <Image fill src={image} alt={`Photo ${i}`} />
        </div>
      ))}
    </section>
  );
}

export default Gallery;
