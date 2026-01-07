import content from "../content.json";

const aboutText = content.about;

const About = () => {
    return (
        <p className="px-4">
            {aboutText}
        </p>
    );
};

export default About;