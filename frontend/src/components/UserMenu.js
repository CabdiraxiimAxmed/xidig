import { useSelector } from 'react-redux';
import Button from './Button';
const UserMenu = () => {
  const user = useSelector(state => state.user.value);
  function handleClick() {
    document
      .querySelector('.user-profile-menu-wrapper')
      .classList.toggle('user-profile-menu-wrapper-active');
  }
  return (
    <>
      <button className="user-profile-btn" onClick={handleClick}>
        <p>{user.name}</p>
        <img src={user.avatar} alt="avatar" />
      </button>
      <div className="user-profile-menu-wrapper">
        <a
          href={`/banaan/${user.username}/profile`}
          className="view-profile-page"
        >
          Daawo pagekaaga
        </a>
        <Button text="ka bax" stylingClass="logout-btn" />
      </div>
    </>
  );
};

export default UserMenu;
