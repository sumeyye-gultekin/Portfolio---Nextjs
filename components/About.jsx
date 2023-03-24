import Image from "next/image";
import AboutImg from "../public/assests/about.jpg";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600"> I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            I have spent the last 4.5 years working as an administrative officer
            and accountant at a private college. I have always had a talent and
            an interest in working with technology and computers. At the private
            school where I work, I found myself reviewing the programs we use.
            Then I met a close friend of mine to learn programming and I took a
            big risk and quit my job. I started working to be a front-end
            developer. At first I worked on HTML and CSS, and as I learned this
            process developed into a love of programming.
          </p>
          <p className="py-2 text-gray-600">
            I was fascinated by how complex programming can be, and I was
            quickly tempted to learn more. I started learning Javascript and I
            was even more excited to make websites interactive. Then I started
            to spend my time developing projects and learning new technologies
            with React JS and Next JS I am currently looking for a freelancing
            or full-time job.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
