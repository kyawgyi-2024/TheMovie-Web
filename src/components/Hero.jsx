import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" text-center bg-white pb-10">
      <div className=" w-60 mx-auto">
        <Image
          src={"/themovie.png"}
          alt="movielogo"
          width={200}
          height={200}
          layout="responsive"
        />
      </div>
      <h1 className=" text-2xl text-gray-700 font-bold font-title">Welcome to TheMovie</h1>
      <p className=" text-gray-500 font-title">Produce FILM features, Video and MOVIE.</p>
      <Link href={"/contact"}>
        <button className=" bg-slate-700 text-yellow-100 font-title py-3 px-6 rounded text-sm mt-4 cursor-pointer hover:bg-slate-800 transition duration-75">
          CONTACT US
        </button>
      </Link>
    </div>
  );
};

export default Hero;
