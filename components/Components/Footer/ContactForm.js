import classes from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <p className={classes.paragraph}>
      Ainda estou trabalhando no formulário de contato. Até lá, você pode me
      encontrar através do email: <span className={classes.email}>fabioaz.guedes@hotmail.com</span>
    </p>
  );
};

export default ContactForm;