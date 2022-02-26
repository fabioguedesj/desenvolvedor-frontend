import classes from './Welcome.module.css';

const Welcome = () => {
    return (
        <div className={classes['welcome__container']}>
            <div className={classes.border}/>
            <p className={classes.paragraph}>Você está no meu portfólio</p>
        </div>
    )
}

export default Welcome;