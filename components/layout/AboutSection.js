import AboutCard from '../Components/About/AboutCard';
import image from '../../resources/desenvolvedor-frontend.jpg';

import Image from 'next/image';

import classes from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={classes['about-section']} id='aboutSection'>
      <div className={classes['image__container']}>
        <Image
          alt='desenvolvedor frontend'
          src={image}
          className={classes.image}
        />
      </div>
      <AboutCard />
    </section>
  );
};

export default AboutSection;
