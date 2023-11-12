import Image from "next/image";

const crenulations = (
  <Image 
    src="/crenulations.svg"
    alt="Crenulations"
    className="absolute top-1 left-1 opacity-70"
    style={{ 
      transform: "rotateZ(90deg)",
      filter: "invert(74%) sepia(15%) saturate(585%) hue-rotate(296deg) brightness(105%) contrast(108%)"
    }}
    width={240}
    height={240} />
);

export default crenulations;
