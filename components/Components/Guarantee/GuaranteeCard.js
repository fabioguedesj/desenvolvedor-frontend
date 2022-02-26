import GuaranteeImage from './GuaranteeImage.js';
import Typography from '../../UI/Typography.js';

import classes from './GuaranteeCard.module.css';

const GuaranteeCard = () => {
  return (
    <div className={classes['guarantee-card']}>
      <GuaranteeImage />
      <Typography
        textBefore={'Satisfação garantida'}
        textAfter={'Ou seu dinheiro de volta'}
      />
      <p className={`paragraph ${classes['paragraph-container']}`}>
        Nos serviços de MENTORIA, se por qualquer razão você não gostar do que
        recebeu, basta explicar o motivo da insatisfação para receber 100% do
        seu investimento de volta.
      </p>
    </div>
  );
};

export default GuaranteeCard;
