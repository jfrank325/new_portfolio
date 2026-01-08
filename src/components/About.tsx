import content from "../content.json";

const aboutText = content.about;

const About = () => {
    return (
        <p className="px-4 max-w-2/3 mx-auto">
            {aboutText}
        </p>
    );
};

export default About;