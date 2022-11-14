import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../context/EmployeeContext';
import {
  useDeleteEmployeesMutation,
  usePostEmployeeMutation
} from '../features/api/apiSlice';
import useToastMessage from './useToastMessage';
const useEmployee = () => {
  const [deleteEmployees] = useDeleteEmployeesMutation();
  const [postEmployee] = usePostEmployeeMutation();
  const { setEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();
  const { handleToastSuccessMessage, handleToastErrorMessage } =
    useToastMessage();

  const handleDeleteEmployees = (state, setState) => {
    deleteEmployees({ ids: state });
    setState([]);
  };

  const handleGetEmployee = employee => {
    setEmployee(employee);
    navigate('/employee');
  };

  const handlePostEmployee = (data, reset) => {
    try {
      postEmployee({
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        profession: data.profession,
        sector: data.sector
      });
      reset();
      handleToastSuccessMessage(
        'Funcionário cadastrado!',
        'O funcionário foi criado com sucesso!'
      );
    } catch (error) {
      handleToastErrorMessage(
        'Impossível Cadastrar...',
        'Foi impossível cadastrar o funcionário.'
      );
    }
  };

  return {
    handleDeleteEmployees,
    handleGetEmployee,
    handlePostEmployee
  };
};

export default useEmployee;
