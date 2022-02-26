import Badge from './Badge';

import classes from './AboutBadges.module.css';

const AboutBadges = () => {
  return (
    <div className={classes['all-badges__container']}>
      <Badge number='5' text='Projetos realizados' icon='chart' />
      <Badge number='3' text='Mentorias completas' icon='person' />
      <Badge number='2' text='Páginas feitas' icon='smile' />
      <Badge number='70' text='Minutos de conteúdo' icon='video' />
    </div>
  );
};

export default AboutBadges;
