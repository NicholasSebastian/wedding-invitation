import type { FC } from "react";

type TitleProps = {
  title: string
  prefix: string
  lineless?: boolean
  color?: string
}

const Title: FC<TitleProps> = props => {
  const { title, prefix, lineless, color } = props;
  return (
    <div className="text-center z-10">
      <div className="text-gray-700 text-sm tracking-wider uppercase">
        {prefix}
      </div>
      <div 
        className="text-velvet text-4xl font-dance" 
        style={color ? { color } : {}}>
        {title}
      </div>
      {!lineless && (
        <hr className="w-16 bg-black my-6 mx-auto" />
      )}
    </div>
  );
}

export default Title;
