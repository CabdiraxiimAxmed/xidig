import logo from '../assets/images/logo.png';
import Button from './Button';
import { canDisplayUserProfile } from '../config/showComponents';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const location = window.location.pathname;
  const user = useSelector(state => state.user.value);
  const [url, setUrl] = useState(canDisplayUserProfile(location));
  useEffect(() => {
    setUrl(canDisplayUserProfile(location));
  });

  return (
    <nav className="navbar">
      <img src={logo} alt="This is my" />
      <div className="menubar">
        <a href={`/banaan/${user.username}/weydi`}>
          <Button text="su,aal weydi" stylingClass="ask-question" />
        </a>
      </div>
      {url && <UserMenu />}
    </nav>
  );
};

export default Navbar;
