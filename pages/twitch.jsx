import Image from "next/image";
import Link from "next/link";
import twitchImg from "../public/assests/projects/twitch.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

function twitch() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={twitchImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Twitch UI</h2>

          <h3>Next JS / Tailwind / Next Auth</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest text-[#5651e5] ">Project</p>
          <h2 className="mb-2">Overview</h2>
          <p>
            This appplication was built using NEXT.JS and is styled with
            Tailwind CSS. The application is hosted statically using Vercel.
            This is a mobile responsive recreation of Twitch.tv and features
            Next/Auth.js for authentication. Users may choose to be
            authenticated with either a Github account or a Google account. A
            few features to note with this project are lazy loading images using
            the Image component, built in routing, and Next/Auth Context.
          </p>
          <button className="px-8 py-2 mt-4 mr-8 hover:scale-105">Demo</button>
          <button className="px-8 py-2 mt-4 mr-8 hover:scale-105">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold text-[#5651e5] pb-3">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> IMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#project">
          <p className="underline cursor-pointer"> Back</p>
        </Link>
      </div>
    </div>
  );
}

export default twitch;
