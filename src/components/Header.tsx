import BasicButton from "./Basics/BasicButton";
import landscapeImage from "/landscape.webp";
import content from '../content.json'

const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${landscapeImage})` }}
      className={`bg-cover bg-top h-112 relative`}>
      <div className="absolute flex items-center justify-center inset-0 bg-radial from-white via-white/90 to-transparent">
        <header className="flex flex-col justify-center items-center text-center">
          <div className="w-fit mx-4 flex flex-col items-center">
            <h1>Jason Franklin</h1>
            <div className="h-0.5 w-10/7 my-2 bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
            <h2 className="text-gray-8 text-3">{content.title}</h2>
          </div>
          <p className="py-8 whitespace-pre-wrap">{content.subtitle}</p>
          <div className="flex">
            <BasicButton primary>View Work</BasicButton>
            <BasicButton><a href="/Jason_Franklin_CV_FS.docx" download>Download Resume</a></BasicButton>
            <BasicButton><a href="https://github.com/jfrank325" target="_blank">GitHub</a></BasicButton>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;