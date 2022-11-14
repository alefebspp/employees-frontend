const ConditionalButton = ({ condition1, condition2 }) => {
  return (
    <>
      {!condition1 || !condition2 ? (
        <button disabled className="registerForm__disabledButton">
          Cadastrar
        </button>
      ) : (
        <button className="registerForm__button">Cadastrar</button>
      )}
    </>
  );
};

export default ConditionalButton;
