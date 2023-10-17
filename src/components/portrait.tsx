import Image from "next/image";
import type { FC, PropsWithChildren } from "react";

type PortraitProps = {
  name: string
  instagram: string
  src: string
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
        src={src}
        alt={alt} />
      <div className="absolute inset-3 border border-white" />
      <Image 
        src="/crenulations.svg" 
        alt="Crenulations"
        className="absolute top-1 right-1"
        style={{ transform: "scale(-1)", filter: "invert(1)" }}
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
