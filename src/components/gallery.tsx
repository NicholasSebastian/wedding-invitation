import Image from "next/image";
import photo1 from "../assets/portrait1.jpg";
import photo2 from "../assets/portrait2.jpg";
import photo3 from "../assets/portrait3.jpg";
import photo4 from "../assets/portrait4.jpg";
import photo5 from "../assets/portrait5.jpg";
import photo6 from "../assets/portrait6.jpg";
import photo7 from "../assets/portrait7.jpg";
import photo8 from "../assets/portrait8.jpg";
import photo9 from "../assets/portrait9.jpg";
import photo10 from "../assets/portrait10.jpg";
import photo11 from "../assets/portrait11.jpg";
import photo12 from "../assets/portrait12.jpg";
import photo13 from "../assets/portrait13.jpg";
import photo14 from "../assets/portrait14.jpg";
import photo15 from "../assets/portrait15.jpg";
import photo16 from "../assets/portrait16.jpg";
import photo17 from "../assets/portrait17.jpg";
import photo18 from "../assets/portrait18.jpg";
import type { FC } from "react";

const images = [
  photo1, photo2, photo3, photo4, photo5, photo6, 
  photo7, photo8, photo9, photo10, photo11, photo12,
  photo13, photo14, photo15, photo16, photo17, photo18
];

const Gallery: FC = () => {
  return (
    <section className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
      {images.map((image, i) => (
        <div key={i} className="relative" style={{ aspectRatio: "2/3" }}>
          <Image fill 
            src={image} 
            alt={`Photo ${i}`} 
            placeholder="blur"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover" />
        </div>
      ))}
    </section>
  );
}

export default Gallery;
