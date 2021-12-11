import logo from '../assets/images/logo.png';
import Button from './Button';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector(state => state.user.value);
  return (
    <nav className="navbar">
      <img src={logo} alt="This is my" />
      <div className="menubar">
        <a href={`/banaan/${user.username}/weydi`}>
          <Button text="su,aal weydi" stylingClass="ask-question" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
