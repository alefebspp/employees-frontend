import { Icon } from '@chakra-ui/react';

const Title = ({ icon, title }) => {
  return (
    <div className="register__titleGroup">
      <Icon boxSize={8} color="#06283D" as={icon} />
      <h1 className="register__titleGroup__title">{title}</h1>
    </div>
  );
};

export default Title;
