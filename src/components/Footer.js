const Footer = () => {
  return (
    <footer className="relative flex justify-center">
      <a href="#top" className="absolute -top-3 bg-customGray p-1 rounded-full hover:animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
