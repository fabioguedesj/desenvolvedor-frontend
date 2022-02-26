import Welcome from '../Components/Header/Welcome';
import SocialContentHeader from '../Components/Header/SocialContentHeader';
import HeaderContent from '../Components/Header/HeaderContent';

import classes from './HeaderSection.module.css';

const HeaderSection = () => {
  return (
    <header className={classes.header}>
      <Welcome />
      <SocialContentHeader />
      <HeaderContent />
    </header>
  );
};

export default HeaderSection;
