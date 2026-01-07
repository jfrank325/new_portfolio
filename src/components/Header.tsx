import BasicButton from "./Basics/BasicButton";
import landscapeImage from "../assets/landscape.webp";

const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${landscapeImage})` }}
      className={`bg-cover bg-top h-96 relative`}>
      <div className="absolute flex items-center justify-center inset-0 bg-radial from-white via-white/90 to-transparent">
        <header className="flex flex-col justify-center items-center text-center">
          <div className="w-fit mx-4 flex flex-col items-center">
            <h1>Jason Franklin</h1>
            <div className="h-0.5 w-10/7 my-2 bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
            <p className="text-gray-8 text-3">Full-Stack Developer</p>
          </div>
          <p className="py-8">Building production web apps for real users<br /><b>5+ Years</b> in e-commerce</p>
          <div className="flex">
            <BasicButton primary>View Work</BasicButton>
            <BasicButton>Download Resume</BasicButton>
            <BasicButton>GitHub</BasicButton>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;