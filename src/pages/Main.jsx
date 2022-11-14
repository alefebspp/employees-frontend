import Title from '../components/common/Title';
import EmployeesList from '../components/Main/EmployeesList';
import { FaUserFriends } from 'react-icons/fa';
const Main = () => {
  return (
    <div>
      <Title icon={FaUserFriends} title="Funcionários registrados" />
      <EmployeesList />
    </div>
  );
};

export default Main;
