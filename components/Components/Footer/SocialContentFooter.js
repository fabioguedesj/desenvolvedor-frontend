import SocialLinks from '../../UI/SocialLinks';

import classes from './SocialContentFooter.module.css';

const SocialContentFooter = () => {
    return (
        <div className={classes.container}>
            <SocialLinks />
        </div>
    )
}

export default SocialContentFooter;