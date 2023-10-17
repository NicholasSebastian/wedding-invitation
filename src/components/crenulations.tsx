import Image from "next/image";

const crenulations = (
  <Image 
    src="/crenulations.svg"
    alt="Crenulations"
    className="absolute top-1 left-1 opacity-10"
    style={{ transform: "rotateZ(90deg)" }}
    width={240}
    height={240} />
);

export default crenulations;
