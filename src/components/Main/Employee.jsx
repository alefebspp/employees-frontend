import { Icon, IconButton } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { FaUserCircle, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../../context/EmployeeContext';
import { useDeleteEmployeeMutation } from '../../features/api/apiSlice';
const Employee = ({ employee, divClassName }) => {
  const [deleteEmployee] = useDeleteEmployeeMutation();

  const { setEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const handleGetEmployee = () => {
    setEmployee(employee);
    navigate('/employee');
  };

  return (
    <div className={divClassName}>
      <div className="employee__info">
        <div className="employee__nameGroup">
          <Icon color="#06283D" as={FaUserCircle} />
          <p className="employee__name">
            {`${employee.firstName}` + ' ' + `${employee.lastName}`}
          </p>
        </div>
        <div className="employee__sectorGroup">
          <p className="employee__sector">Setor: {employee.sector}</p>
        </div>
      </div>
      <div className="employee__iconGroup">
        <IconButton
          size="xs"
          onClick={handleGetEmployee}
          icon={<FaEdit color="green" />}
          boxShadow="0px 0px 6px 0px rgba(0, 0, 0, 0.5)"
        />
        <IconButton
          size="xs"
          onClick={() => deleteEmployee(employee)}
          icon={<FaTrashAlt color="red" />}
          boxShadow="0px 0px 6px 0px rgba(0, 0, 0, 0.5)"
        />
      </div>
    </div>
  );
};

export default Employee;
