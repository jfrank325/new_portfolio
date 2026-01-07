import BasicButton from "./Basics/BasicButton";

const Contact = () => {
  return (
    <div className="flex justify-center">
        <BasicButton>Download Resume</BasicButton>
        <BasicButton primary>Contact Me</BasicButton>
    </div>
  );
};

export default Contact;