import { useContext } from 'react';
import { EmployeeContext } from '../../context/EmployeeContext';
import { FaUserCircle } from 'react-icons/fa';
import Title from '../common/Title';
import '../../styles/css/Main.css';
import EditPopover from '../common/Popover/EditPopover';
import { Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import {
  useUpdateEmployeeMutation,
  useGetEmployeeQuery
} from '../../features/api/apiSlice';
const EmployeeInfo = () => {
  const { employee } = useContext(EmployeeContext);
  const { data } = useGetEmployeeQuery(employee?._id);
  const [updateEmployee] = useUpdateEmployeeMutation();
  const { register, handleSubmit } = useForm();

  return (
    <>
      {data ? (
        <div className="employeeInfo">
          <Title
            icon={FaUserCircle}
            title={`${data.firstName}` + ' ' + `${data.lastName}`}
          />
          <div className="employeeInfo__infos">
            <div className="employeeInfo__info">
              <p className="employeeInfo__info__text">Nome: {data.firstName}</p>
              <EditPopover>
                <form
                  onSubmit={handleSubmit(info =>
                    updateEmployee({
                      _id: data._id,
                      firstName: info.firstName
                    })
                  )}
                  className="employeeInfo__info__form"
                  action=""
                >
                  <div>
                    <label htmlFor="">Editar Nome</label>
                    <Input
                      {...register('firstName', { required: false })}
                      type="text"
                      variant="outline"
                      autoComplete="off"
                    />
                  </div>
                  <button className="registerForm__button">Atualizar</button>
                </form>
              </EditPopover>
            </div>
            <div className="employeeInfo__info">
              <p className="employeeInfo__info__text">
                Sobrenome: {data.lastName}
              </p>
              <EditPopover>
                <form
                  onSubmit={handleSubmit(info =>
                    updateEmployee({
                      _id: data._id,
                      lastName: info.lastName
                    })
                  )}
                  className="employeeInfo__info__form"
                  action=""
                >
                  <div>
                    <label htmlFor="">Editar Sobrenome</label>
                    <Input
                      {...register('lastName', { required: false })}
                      type="text"
                      variant="outline"
                      autoComplete="off"
                    />
                  </div>
                  <button className="registerForm__button">Atualizar</button>
                </form>
              </EditPopover>
            </div>
            <div className="employeeInfo__info">
              <p className="employeeInfo__info__text">Idade: {data.age}</p>
              <EditPopover>
                <form
                  onSubmit={handleSubmit(info =>
                    updateEmployee({
                      _id: data._id,
                      age: info.age
                    })
                  )}
                  className="employeeInfo__info__form"
                  action=""
                >
                  <div>
                    <label htmlFor="">Editar Idade</label>
                    <Input
                      {...register('age', { required: false })}
                      type="number"
                      variant="outline"
                      autoComplete="off"
                    />
                  </div>
                  <button className="registerForm__button">Atualizar</button>
                </form>
              </EditPopover>
            </div>
            <div className="employeeInfo__info">
              <p className="employeeInfo__info__text">
                Cargo: {data.profession}
              </p>
              <EditPopover>
                <form
                  onSubmit={handleSubmit(info =>
                    updateEmployee({
                      _id: data._id,
                      profession: info.profession
                    })
                  )}
                  className="employeeInfo__info__form"
                  action=""
                >
                  <div>
                    <label htmlFor="">Editar Cargo</label>
                    <Input
                      {...register('profession', { required: false })}
                      type="text"
                      variant="outline"
                      autoComplete="off"
                    />
                  </div>
                  <button className="registerForm__button">Atualizar</button>
                </form>
              </EditPopover>
            </div>
            <div className="employeeInfo__info">
              <p className="employeeInfo__info__text">Setor: {data.sector}</p>
              <EditPopover>
                <form
                  onSubmit={handleSubmit(info =>
                    updateEmployee({
                      _id: data._id,
                      sector: info.sector
                    })
                  )}
                  className="employeeInfo__info__form"
                  action=""
                >
                  <div>
                    <label htmlFor="">Editar Setor</label>
                    <Input
                      {...register('sector', { required: false })}
                      type="text"
                      variant="outline"
                      autoComplete="off"
                    />
                  </div>
                  <button className="registerForm__button">Atualizar</button>
                </form>
              </EditPopover>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default EmployeeInfo;
