import BasicButton from "./Basics/BasicButton";
import landscapeImage from "/landscape.webp";
import content from '../content.json'

const Header = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ backgroundImage: `url(${landscapeImage})` }}
      className="bg-cover bg-center h-[85vh] min-h-[600px] sm:min-h-[700px] relative">
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      
      {/* Radial gradient overlay for focus */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
      
      <header className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Name with stronger emphasis */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Jason Franklin
          </h1>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-white/60 mx-3"></div>
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          </div>
          
          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/95 mb-6 drop-shadow-md">
            {content.title}
          </h2>
          
          {/* Subtitle - more concise and impactful */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md px-4">
            {content.subtitle.split('\n')[0]}
          </p>
          
          {/* Button group with better hierarchy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <BasicButton 
              primary 
              onClick={() => handleScrollToSection('featured-work')}
              aria-label="Scroll to featured work section"
              className="text-base px-8 py-3 min-w-[160px]"
            >
              View Work
            </BasicButton>
            
            <div className="flex gap-3">
              <BasicButton
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Jason_Franklin_CV_FS.docx';
                  link.download = 'Jason_Franklin_CV_FS.docx';
                  link.click();
                }}
                aria-label="Download resume"
                className="text-base px-6 py-3"
              >
                Resume
              </BasicButton>
              <BasicButton
                onClick={() => window.open('https://github.com/jfrank325', '_blank', 'noopener,noreferrer')}
                aria-label="Visit GitHub profile (opens in new tab)"
                className="text-base px-6 py-3"
              >
                GitHub
              </BasicButton>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;