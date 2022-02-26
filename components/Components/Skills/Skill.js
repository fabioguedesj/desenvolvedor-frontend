import classes from './Skill.module.css';

const Skill = ({title, text}) => {
  return (
    <div>
      <h3 className='tertiary-heading--purple'>{title}</h3>
      <p className='paragraph'>{text}</p>
    </div>
  );
};

export default Skill;
