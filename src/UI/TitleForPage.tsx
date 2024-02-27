import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

function TitleForPage({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: boolean;
}) {
  if (subTitle)
    return (
      <h1 className="mx-auto flex border-b-2 border-black/30 font-menuTitle text-5xl  font-semibold lg:text-6xl">
        {title}
        <span className="rotate-[270deg] text-yellow-400">
          <MdOutlineSubdirectoryArrowLeft />
        </span>
      </h1>
    );
  return (
    <h1 className="mb-6 flex font-roboto text-3xl font-extrabold uppercase md:text-6xl lg:text-9xl ">
      {title}
      <span className="rotate-[270deg] text-yellow-400">
        <MdOutlineSubdirectoryArrowLeft />
      </span>
    </h1>
  );
}

export default TitleForPage;
