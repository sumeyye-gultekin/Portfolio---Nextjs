import propertyImg from "../public/assests/projects/property.jpg";
import cryptoImg from "../public/assests/projects/crypto.jpg";
import netflixImg from "../public/assests/projects/netflix.jpg";
import twitchImg from "../public/assests/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

function Project() {
  return (
    <div id="project" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Project
        </p>
        <h2 className="py-4">What I'am Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder "
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Crypto App "
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
