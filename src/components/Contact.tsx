import BasicButton from "./Basics/BasicButton";

const Contact = () => {
  return (
    <div className="flex justify-center">
      <BasicButton><a href="/Jason_Franklin_CV_FS.docx" download>Download Resume</a></BasicButton>
      <BasicButton primary>Contact Me</BasicButton>
    </div>
  );
};

export default Contact;