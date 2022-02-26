import ContactForm from '../Components/Footer/ContactForm';
import Disclaimer from '../Components/Footer/Disclaimer';
import SocialContentFooter from '../Components/Footer/SocialContentFooter';

import classes from './FooterSection.module.css';

const FooterSection = () => {

  return (
    <footer className={classes.footer} id='footerSection'>
      <ContactForm />
      <SocialContentFooter />
      <Disclaimer />
    </footer>
  );
};

export default FooterSection;
