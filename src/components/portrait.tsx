import Image from "next/image";
import type { FC, PropsWithChildren } from "react";
import type { StaticImageData } from "next/image";

type PortraitProps = {
  name: string
  instagram: string
  src: StaticImageData
  alt: string
}

const Portrait: FC<PropsWithChildren<PortraitProps>> = props => {
  const { name, instagram, src, alt, children } = props;
  return (
    <a
      href={instagram}
      rel="nofollow"
      className="w-full relative"
      style={{ aspectRatio: 1 }}>
      <Image fill
        className="object-cover"
        style={{ objectPosition: "50% 35%" }}
        src={src}
        alt={alt}
        placeholder="blur"
        sizes="(max-width: 640px) 100vw, 50vw" />
      <div className="absolute inset-3 border" style={{ borderColor: "#FFD700" }} />
      <Image 
        src="/crenulations.svg" 
        alt="Crenulations"
        className="absolute top-1 right-1"
        style={{ transform: "scale(-1)", filter: "invert(89%) sepia(20%) saturate(6577%) hue-rotate(1deg) brightness(105%) contrast(104%)" }}
        width={120}
        height={120} />
      <div className="absolute z-10 bottom-8 inset-x-0 text-center">
        <div className="text-3xl md:text-4xl lg:text-5xl font-dance">{name}</div>
        <div className="text-sm my-1">{children}</div>
      </div>
    </a>
  );
}

export default Portrait;
