import SocialLinks from '../../UI/SocialLinks';

import classes from './SocialContentHeader.module.css';

const SocialContentHeader = () => {
    return(
        <div className={classes['social__container']}>
            <SocialLinks />
            <div className={classes.border}/>
        </div>
    )
}

export default SocialContentHeader;