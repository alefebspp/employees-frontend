import { Icon } from '@chakra-ui/react';
import { FaUserFriends, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../../../styles/css/Header.css';
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <ul>
        <li>
          <div className="header__iconGroup">
            <Icon
              onClick={() => navigate('/')}
              boxSize={6}
              color="white"
              as={FaUserFriends}
            />
            <Icon
              onClick={() => navigate('/register')}
              boxSize={6}
              color="white"
              as={FaUserPlus}
            />
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
