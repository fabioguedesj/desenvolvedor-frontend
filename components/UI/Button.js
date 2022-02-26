import classes from './Button.module.css';

const Button = ({ children, className, onClick, linkTo }) => {
  const allClasses = `${classes.button} ${
    children === 'Indisponível' ? classes['button--of'] : classes['button--on']
  } ${className}`;

  return (
    <button className={allClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
