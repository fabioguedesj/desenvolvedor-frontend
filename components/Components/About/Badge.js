import Chart from '../../svg/Chart';
import Person from '../../svg/Person';
import Smile from '../../svg/Smile';
import Video from '../../svg/Video';

import classes from './Badge.module.css';

const Badge = ({ number, text, icon }) => {
  return (
    <div className={classes['badge__container']}>
      {icon === 'chart' && <Chart />}
      {icon === 'person' && <Person />}
      {icon === 'smile' && <Smile />}
      {icon === 'video' && <Video />}
      <h3 className='tertiary-heading u-margin-left'>
        <span className={classes['badge__number']}>{number}</span>
        <span className={classes['badge__text']}>{text}</span>
      </h3>
    </div>
  );
};

export default Badge;
