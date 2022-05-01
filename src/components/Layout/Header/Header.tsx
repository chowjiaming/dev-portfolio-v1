import ThemeToggler from '../../Shared/ThemeToggler/ThemeToggler';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__heading">ChowJiaMing</h1>
      <ThemeToggler />
    </header>
  );
};

export default Header;
