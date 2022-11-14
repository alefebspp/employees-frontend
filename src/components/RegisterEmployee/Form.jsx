import { useForm } from 'react-hook-form';
import { Input } from '@chakra-ui/react';
import Title from '../common/Title';
import { FaUserPlus } from 'react-icons/fa';
import '../../styles/css/RegisterEmployee.css';
import ConditionalButton from '../common/ConditionalButton';
import useEmployee from '../../hooks/useEmployee';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
    reset
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      profession: '',
      sector: ''
    },
    mode: 'onChange'
  });
  const { handlePostEmployee } = useEmployee();

  return (
    <div className="register">
      <Title title="Registre um funcionário" icon={FaUserPlus} />
      <form
        id="form"
        onSubmit={handleSubmit(data => handlePostEmployee(data, reset))}
        className="registerForm"
        action=""
      >
        <div className="registerForm__input">
          <label className="registerForm__input__label">Nome</label>
          <Input
            {...register('firstName', { required: true })}
            variant="outline"
            size="md"
            type="text"
            focusBorderColor="#06283D"
            autoComplete="off"
          />
        </div>

        <div className="registerForm__input">
          <label className="registerForm__input__label">Sobrenome</label>
          <Input
            {...register('lastName', { required: true })}
            variant="outline"
            size="md"
            focusBorderColor="#06283D"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="registerForm__input">
          <label className="registerForm__input__label">Idade</label>
          <Input
            {...register('age', { required: true })}
            variant="outline"
            size="md"
            focusBorderColor="#06283D"
            type="number"
            autoComplete="off"
          />
        </div>
        <div className="registerForm__input">
          <label className="registerForm__input__label">Profissão</label>
          <Input
            {...register('profession', { required: true })}
            variant="outline"
            size="md"
            focusBorderColor="#06283D"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="registerForm__input">
          <label className="registerForm__input__label">Setor</label>
          <Input
            {...register('sector', { required: true })}
            variant="outline"
            size="md"
            focusBorderColor="#06283D"
            type="text"
            autoComplete="off"
          />
        </div>
        <ConditionalButton condition1={isDirty} condition2={isValid} />
      </form>
    </div>
  );
};

export default Form;
