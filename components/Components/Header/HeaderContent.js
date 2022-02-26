import Button from '../../UI/Button';

import classes from './HeaderContent.module.css';

import { Link } from 'react-scroll';

const HeaderContent = () => {
  return (
    <div className={classes['header-content']}>
      <p className='primary-heading__before'>
        Olá, meu nome é Fábio Guedes, sou um
      </p>
      <h1 className='primary-heading'>Desenvolvedor frontend</h1>
      <p className={classes.sub}>
        Sites | Portfólios | Aplicações WEB | Mentorias
      </p>
      <Link to={'aboutSection'} smooth={true}>
        <Button className={'u-margin-top'} linkTo={'footerSection'}>
          Saiba mais &rarr;
        </Button>
      </Link>
    </div>
  );
};

export default HeaderContent;
