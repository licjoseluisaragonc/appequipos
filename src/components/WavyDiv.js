import React from "react";

const WavyDiv = () => {
  return (
    <>
      {/* Sección con borde ondulado superior */}
      <div className="hidden md:block relative w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <svg
          className="absolute top-0 left-0 w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1E3A8A"
            fillOpacity="1"
            d="M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,144C672,171,768,213,864,218.7C960,224,1056,192,1152,154.7C1248,117,1344,75,1392,53.3L1440,32V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V32Z"
          ></path>
        </svg>
      </div>

      {/* Sección con borde ondulado inferior */}
      <div className="hidden md:block relative w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <svg
          className="absolute bottom-0 left-0 w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1E3A8A"
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,176C384,160,480,160,576,186.7C672,213,768,267,864,266.7C960,267,1056,213,1152,165.3C1248,117,1344,75,1392,53.3L1440,32V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V256Z"
          ></path>
        </svg>
      </div>

      {/* Sección con borde ondulado superior */}
      <div className="md:hidden relative w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <svg
          className="absolute top-0 left-0 w-full h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1E3A8A"
            fillOpacity="1"
            d="M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,144C672,171,768,213,864,218.7C960,224,1056,192,1152,154.7C1248,117,1344,75,1392,53.3L1440,32V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V32Z"
          ></path>
        </svg>
      </div>

      {/* Sección con borde ondulado inferior */}
      <div className="md:hidden relative w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <svg
          className="absolute bottom-0 left-0 w-full h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1E3A8A"
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,176C384,160,480,160,576,186.7C672,213,768,267,864,266.7C960,267,1056,213,1152,165.3C1248,117,1344,75,1392,53.3L1440,32V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V256Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default WavyDiv;


