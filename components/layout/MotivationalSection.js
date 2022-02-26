import MotivationalCard from '../Components/Motivational/MotivationalCard';

import classes from './MotivationalSection.module.css';

const MotivationalSection = () => {
  return (
    <section className={classes['motivational-section']}>
      <MotivationalCard
        message='“Se você acha que um bom design é muito caro, você deveria olhar para o custo de um design ruim.”'
        author='Ralf Speth'
      />
    </section>
  );
};

export default MotivationalSection;
