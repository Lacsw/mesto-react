import logo from '../images/header-logo.svg';

function Header() {
  return (
    <header class="header">
      <img
        src={logo}
        alt="логотип Место"
        class="header__logo"
      />
    </header>
  );
}

export default Header;
