import {
  useDeleteEmployeesMutation,
  useGetEmployeesQuery
} from '../../features/api/apiSlice';
import '../../styles/css/Main.css';
import { useState } from 'react';
import Employee from './Employee';
import { Button } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
const EmployeesList = () => {
  const { data } = useGetEmployeesQuery();
  const [deleteEmployees] = useDeleteEmployeesMutation();
  const [selected, setSelected] = useState([]);

  const handleChange = event => {
    const { checked, value } = event.currentTarget;

    setSelected(prev =>
      checked ? [...prev, value] : prev.filter(val => val !== value)
    );
  };

  function handleDeleteEmployees() {
    deleteEmployees({ ids: selected });
    setSelected([]);
  }

  return (
    <div className="employees">
      {selected.length > 0 ? (
        <Button
          leftIcon={<FaTrashAlt />}
          onClick={handleDeleteEmployees}
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
