import headerLogo from "../images/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Logo de Alrededor de los EEUU"
      />
    </header>
  );
}

export default Header;
