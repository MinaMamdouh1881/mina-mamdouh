import { IconType } from "react-icons";

function Button({
  title,
  type,
  icon: Icon,
  iconSize = 20,
  myhref,
}: {
  title: string;
  type: "solid" | "white" | "stroke";
  icon?: IconType;
  iconSize?: number;
  myhref?: string;
}) {
  const mainClass = `flex items-center justify-center gap-2 rounded-full button-u py-4 px-8 cursor-pointer ${
    type === "solid"
      ? "bg-brand1 text-black"
      : type === "white"
      ? "bg-white text-bg1"
      : "bg-bg1 border-2 border-brand1 text-white"
  }`;

  const content = (
    <>
      {title} {Icon && <Icon size={iconSize} />}
    </>
  );

  return myhref ? (
    <a href={myhref} className={mainClass} download>
      {content}
    </a>
  ) : (
    <button className={mainClass}>{content}</button>
  );
}

export default Button;
