import classes from './MotivationalCard.module.css';

const MotivationalCard = ({ message, author }) => {
  return (
    <div className={classes['motivational-card__container']}>
      <h2 className={classes['motivational__text']}>{message}</h2>
      <p className={classes['motivational__author']}>- {author}</p>
    </div>
  );
};

export default MotivationalCard;
