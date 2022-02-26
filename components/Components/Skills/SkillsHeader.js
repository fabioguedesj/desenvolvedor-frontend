import Typography from '../../UI/Typography';

import classes from './SkillsHeader.module.css';

const SkillsHeader = () => {
  return (
    <div className={classes['skills-header__container']}>
      <Typography
        textBefore={'Habilidades'}
        textAfter={'Um pouco mais do que sei fazer'}
      />
      <p className='paragraph'>
        Além de preparar um café incrível e levemente adoçado, confira algumas
        das minhas principais habilidades com frontend.
      </p>
    </div>
  );
};

export default SkillsHeader;
