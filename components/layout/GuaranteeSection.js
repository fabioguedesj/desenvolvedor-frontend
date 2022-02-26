import GuaranteeCard from '../Components/Guarantee/GuaranteeCard';

import classes from './GuaranteeSection.module.css';

const GuaranteeSection = () => {
    return (
        <section className={classes['guarantee-section']}>
            <GuaranteeCard />
        </section>
    )
}

export default GuaranteeSection;