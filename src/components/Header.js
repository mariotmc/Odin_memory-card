import logo from "../media/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
      </header>
      <div className="horizontal-line z-10">
        <div className="ball">
          <div className="ball-inside"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
