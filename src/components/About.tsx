import content from "../content.json";

const aboutText = content.about;

const About = () => {
    return (
        <p className="px-4 max-w-2xl mx-auto text-lg leading-relaxed text-gray-700">
            {aboutText}
        </p>
    );
};

export default About;