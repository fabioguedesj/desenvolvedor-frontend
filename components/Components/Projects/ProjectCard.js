import classes from './ProjectCard.module.css';

import Image from 'next/image';

const ProjectCard = ({ orientation, type, title, image, link }) => {
  const cardClasses = `${classes['project-card']} ${
    orientation === 'landscape'
      ? `${classes['landscape']}`
      : `${classes['portrait']}`
  }`;

  const goToLink = () => {
    window.open(link, '_blank');
  };

  return (
    <div className={cardClasses}>
      <div className={classes['background--black']} />
      <div className={classes['background--blue']} />
      <Image src={image} alt='projeto' className={classes.image} layout={'fill'}/>
      <div className={classes['project-card__content']}>
        <p className={'paragraph--white'}>{type}</p>
        <h3 className={'tertiary-heading--white u-margin-top-bottom'}>
          {title}
        </h3>
        <button className={classes['btn--project']} onClick={goToLink}>
          Ver no github &rarr;
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
