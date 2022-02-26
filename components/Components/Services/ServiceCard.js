import Button from '../../UI/Button';

import classes from './ServiceCard.module.css';
import { Link } from 'react-scroll';

const ServiceCard = ({ title, text, price, items, textButton, onClick }) => {
  const buttonType =
    textButton === 'Indisponível' ? (
      <Button className={'u-margin-bottom'} onClick={onClick}>
        {textButton}
      </Button>
    ) : (
      <Link to={'footerSection'} smooth={true}>
        <Button className={'u-margin-bottom'} onClick={onClick}>
          {textButton}
        </Button>
      </Link>
    );

  return (
    <div className={classes['service-card']}>
      <h3 className='tertiary-heading u-margin-bottom'>{title}</h3>
      <p className='paragraph u-margin-bottom'>{text}</p>
      <p className={`${classes.price} u-margin-bottom`}>{price}</p>
      {buttonType}
      <ul className={classes.list}>
        <li className={classes.item}>{items.first}</li>
        <li className={classes.item}>{items.second}</li>
        <li className={classes.item}>{items.third}</li>
        <li className={classes.item}>{items.fourth}</li>
      </ul>
    </div>
  );
};

export default ServiceCard;
