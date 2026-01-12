import BasicButton from "./Basics/BasicButton";

const Contact = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Jason_Franklin_CV_FS.docx';
    link.download = 'Jason_Franklin_CV_FS.docx';
    link.click();
  };

  const handleContact = () => {
    window.location.href = 'mailto:jfrank325@gmail.com?subject=Portfolio Contact';
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <BasicButton 
        onClick={handleDownloadResume}
        aria-label="Download resume"
      >
        Download Resume
      </BasicButton>
      <BasicButton 
        primary
        onClick={handleContact}
        aria-label="Send email to contact"
      >
        Contact Me
      </BasicButton>
    </div>
  );
};

export default Contact;