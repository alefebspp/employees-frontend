import { useGetEmployeesQuery } from '../../features/api/apiSlice';
import '../../styles/css/Main.css';
import { useState } from 'react';
import Employee from './Employee';
import { Button } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
import useEmployee from '../../hooks/useEmployee';
const EmployeesList = () => {
  const { data } = useGetEmployeesQuery();
  const [selected, setSelected] = useState([]);
  const { handleDeleteEmployees } = useEmployee();

  const handleChange = event => {
    const { checked, value } = event.currentTarget;
    setSelected(prev =>
      checked ? [...prev, value] : prev.filter(val => val !== value)
    );
  };

  return (
    <div className="employees">
      {selected.length > 0 ? (
        <Button
          leftIcon={<FaTrashAlt />}
          onClick={() => handleDeleteEmployees(selected, setSelected)}
          colorScheme="red"
          variant="solid"
        >
          Deletar Selecionados
        </Button>
      ) : (
        ''
      )}

      {data?.map(employee => {
        return data.indexOf(employee) % 2 == 0 ? (
          <div key={employee._id}>
            <input
              id={employee._id}
              value={employee._id}
              type="checkbox"
              checked={selected.some(val => val === employee._id)}
              onChange={handleChange}
            />
            <Employee employee={employee} divClassName="employee" />
          </div>
        ) : (
          <div key={employee._id}>
            <input
              id={employee._id}
              value={employee._id}
              type="checkbox"
              checked={selected.some(val => val === employee._id)}
              onChange={handleChange}
            />
            <Employee employee={employee} divClassName="employee__dark" />
          </div>
        );
      })}
    </div>
  );
};

export default EmployeesList;
