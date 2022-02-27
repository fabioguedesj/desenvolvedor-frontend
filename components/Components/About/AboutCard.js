import AboutBadges from './AboutBadges';
import Typography from '../../UI/Typography';

import classes from './AboutCard.module.css';

const AboutCard = () => {
  return (
    <div className={classes['about-card']}>
      <Typography textBefore='Saiba mais' textAfter='Sobre mim' />
      <p className='paragraph'>
        Como desenvolvedor frontend crio páginas incríveis que proporcinam
        experiências únicas para os visitantes do site, sempre focando em
        acessibilidade e perfomance.
      </p>
      <p className='paragraph'>
        Atualmente trabalho como freelancer para empreendedores que desejam dar
        vida ao seu negócio através da internet.
      </p>
      <p className='paragraph'>
        Também ensino desenvolvedores sobre o melhor do frontend através de
        mentorias, dicas no meu perfil do Linkedin e alguns vídeos gratuitos no
        Youtube.
      </p>
      <AboutBadges />
    </div>
  );
};

export default AboutCard;
