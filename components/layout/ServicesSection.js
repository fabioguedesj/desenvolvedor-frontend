import AllServiceCards from '../Components/Services/AllServiceCards';
import Typography from '../UI/Typography';

import classes from './ServicesSection.module.css';

const ServicesSection = () => {
  return (
    <section className={classes['services-section']}>
      <Typography textBefore='Conheça' textAfter='Meus serviços' className='u-margin-bottom-hight'/>
      <AllServiceCards />
    </section>
  );
};

export default ServicesSection;
