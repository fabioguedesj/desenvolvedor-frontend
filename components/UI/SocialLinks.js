import { Fragment, useReducer } from 'react';

import Linkedin from '../svg/Linkedin';
import Github from '../svg/Github';
import Codepen from '../svg/Codepen';
import Email from '../svg/Email';

import classes from './SocialLinks.module.css';

const inicialState = {
  linkedinColor: '#ddd',
  githubColor: '#ddd',
  codepenColor: '#ddd',
  emailColor: '#ddd',
};

const colorReducer = (state, action) => {
  if (action.type === 'linkedin') return { ...state, linkedinColor: '#64e0ff' };
  if (action.type === 'removeLinkedin')
    return { ...state, linkedinColor: '#ddd' };

  if (action.type === 'github') return { ...state, githubColor: '#64e0ff' };
  if (action.type === 'removeGithub') return { ...state, githubColor: '#ddd' };

  if (action.type === 'codepen') return { ...state, codepenColor: '#64e0ff' };
  if (action.type === 'removeCodepen')
    return { ...state, codepenColor: '#ddd' };

  if (action.type === 'email') return { ...state, emailColor: '#64e0ff' };
  if (action.type === 'removeEmail') return { ...state, emailColor: '#ddd' };

  return {
    linkedinColor: '#ddd',
    githubColor: '#ddd',
    codepenColor: '#ddd',
    emailColor: '#ddd',
  };
};

const SocialLinks = () => {
  const [colorState, dispatchColor] = useReducer(colorReducer, inicialState);

  return (
    <Fragment>
      <Linkedin
        onHover={() => dispatchColor({ type: 'linkedin' })}
        onExit={() => dispatchColor({ type: 'removeLinkedin' })}
        color={colorState.linkedinColor}
        className={classes.social}
      />
      <Github
        onHover={() => dispatchColor({ type: 'github' })}
        onExit={() => dispatchColor({ type: 'removeGithub' })}
        color={colorState.githubColor}
        className={classes.social}
      />
      <Codepen
        onHover={() => dispatchColor({ type: 'codepen' })}
        onExit={() => dispatchColor({ type: 'removeCodepen' })}
        color={colorState.codepenColor}
        className={classes.social}
      />
      <Email
        onHover={() => dispatchColor({ type: 'email' })}
        onExit={() => dispatchColor({ type: 'removeEmail' })}
        color={colorState.emailColor}
        className={classes.social}
      />
    </Fragment>
  );
};

export default SocialLinks;
