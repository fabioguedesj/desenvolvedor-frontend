import Typography from '../UI/Typography';
import AllProjects from '../Components/Projects/AllProjects';

import classes from './ProjectsSection.module.css';

const ProjectsSection = () => {
  return (
    <section className={classes['projects-sections']}>
      <Typography textBefore='Alguns' textAfter='Projetos' className={'u-margin-bottom-hight'}/>
      <AllProjects />
    </section>
  );
};

export default ProjectsSection;
