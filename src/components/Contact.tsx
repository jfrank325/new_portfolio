import BasicButton from "./Basics/BasicButton";

const Contact = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Jason_Franklin_CV.pdf';
    link.download = 'Jason_Franklin_CV.pdf';
    link.click();
  };

  const handleContact = () => {
    window.location.href = 'mailto:jfrank325@gmail.com?subject=Portfolio Contact';
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/jason--franklin', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap justify-center gap-3">
        <BasicButton 
          onClick={handleContact}
          primary
          aria-label="Send email to contact"
        >
          Contact Me
        </BasicButton>
        <BasicButton 
          onClick={handleDownloadResume}
          aria-label="Download resume"
        >
          Download Resume
        </BasicButton>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        <BasicButton
          onClick={() => window.open('https://github.com/jfrank325', '_blank', 'noopener,noreferrer')}
          aria-label="Visit GitHub profile (opens in new tab)"
          className="px-6"
        >
          GitHub
        </BasicButton>
        <BasicButton
          onClick={handleLinkedIn}
          aria-label="Visit LinkedIn profile (opens in new tab)"
          className="px-6"
        >
          LinkedIn
        </BasicButton>
      </div>
    </div>
  );
};

export default Contact;