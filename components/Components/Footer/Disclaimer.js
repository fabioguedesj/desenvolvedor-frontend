import { Fragment } from 'react';
import classes from './Disclaimer.module.css';

const Disclaimer = () => {
  return (
    <Fragment>
      <p className={classes.disclaimer}>Página feita por Fábio Guedes.</p>
      <p className={classes.disclaimer}>&copy; 2022. Todos os direitos reservados.</p>
    </Fragment>
  );
};

export default Disclaimer;
