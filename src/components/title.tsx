import type { FC } from "react";

type TitleProps = {
  title: string
  prefix: string
}

const Title: FC<TitleProps> = ({ title, prefix }) => {
  return (
    <div className="text-center">
      <div className="text-gray-700 text-sm tracking-wider uppercase">
        {prefix}
      </div>
      <div className="text-red-500 text-4xl font-dance">
        {title}
      </div>
      <hr className="w-16 bg-black my-6 mx-auto" />
    </div>
  );
}

export default Title;
