import SkillsContent from '../Components/Skills/SkillsContent';
import SkillsHeader from '../Components/Skills/SkillsHeader';

import classes from './SkillsSection.module.css';

const SkillsSection = () => {
    return (
        <section className={classes['skills-section']}>
            <SkillsHeader />
            <SkillsContent />
        </section>
    )
}

export default SkillsSection;